import type {
  SurroundingsInput,
  SurroundingsResult,
  RoofType,
  WindPosition,
} from "./index";
import { round2 } from "./index";

/* ---------------- Kz TABLE (meters) ---------------- */

const KZ_TABLE: Array<{ h: number; B: number; C: number; D: number }> = [
  { h: 5, B: 0.7, C: 0.85, D: 1.03 },
  { h: 7, B: 0.7, C: 0.9, D: 1.08 },
  { h: 8, B: 0.7, C: 0.94, D: 1.12 },
  { h: 10, B: 0.7, C: 0.98, D: 1.16 },
  { h: 11, B: 0.72, C: 1.01, D: 1.19 },
  { h: 13, B: 0.74, C: 1.04, D: 1.22 },
  { h: 14, B: 0.765, C: 1.065, D: 1.245 },
  { h: 16, B: 0.79, C: 1.09, D: 1.27 },
  { h: 17, B: 0.81, C: 1.11, D: 1.29 },
  { h: 19, B: 0.83, C: 1.13, D: 1.31 },
  { h: 22, B: 0.86, C: 1.17, D: 1.34 },
  { h: 25, B: 0.9, C: 1.21, D: 1.38 },
  { h: 28, B: 0.92, C: 1.24, D: 1.4 },
  { h: 31, B: 0.95, C: 1.26, D: 1.43 },
  { h: 37, B: 1.0, C: 1.31, D: 1.48 },
  { h: 43, B: 1.04, C: 1.34, D: 1.52 },
  { h: 49, B: 1.08, C: 1.39, D: 1.55 },
  { h: 55, B: 1.11, C: 1.41, D: 1.58 },
  { h: 61, B: 1.14, C: 1.44, D: 1.61 },
  { h: 77, B: 1.21, C: 1.51, D: 1.68 },
  { h: 92, B: 1.27, C: 1.57, D: 1.73 },
  { h: 107, B: 1.33, C: 1.62, D: 1.78 },
  { h: 122, B: 1.38, C: 1.66, D: 1.82 },
  { h: 138, B: 1.42, C: 1.7, D: 1.86 },
  { h: 153, B: 1.46, C: 1.74, D: 1.89 },
];

function exposureToBCD(exposure: "A" | "B" | "C" | "D"): "B" | "C" | "D" {
  if (exposure === "C" || exposure === "D") return exposure;
  return "B"; // A & B -> B
}

function deriveKz(height_m: number, exposure: "B" | "C" | "D") {
  if (!isFinite(height_m) || height_m <= 0) return KZ_TABLE[0][exposure];
  for (const row of KZ_TABLE) {
    if (height_m <= row.h) return row[exposure];
  }
  return KZ_TABLE[KZ_TABLE.length - 1][exposure];
}

/**
 * Ke = EXP(-0.0000362 * elevation_ft)
 */
function deriveKe(elevation_m: number) {
  const elevation_ft = elevation_m * 3.28084;
  const Ke = Math.exp(-0.0000362 * elevation_ft);
  return { elevation_ft, Ke };
}

function kmhToMph(kmh: number) {
  return kmh * 0.621371;
}

/* ---------------- Gcp TABLES ---------------- */

type SlopeKey = string;
type GcpRow = Record<WindPosition, number>;

const GCP_TABLE: Record<RoofType, Record<SlopeKey, GcpRow>> = {
  hip: {
    "7–20": { Center: -1.8, Edge: -2.4, Corner: -2.6, Downforce: 0.7 },
    "20–27": { Center: -1.4, Edge: -2.0, Corner: -2.0, Downforce: 0.7 },
    "27–45": { Center: -1.5, Edge: -1.8, Corner: -2.4, Downforce: 0.7 },
  },
  monoslope: {
    "3–10": { Center: -1.1, Edge: -1.6, Corner: -2.6, Downforce: 0.6 },
    "10–30": { Center: -1.3, Edge: -1.6, Corner: -2.9, Downforce: 0.9 },
  },
  gable: {
    "0–7": { Center: -1.7, Edge: -2.3, Corner: -3.2, Downforce: 0.3 },
    "7–20": { Center: -2.0, Edge: -2.7, Corner: -3.6, Downforce: 0.6 },
    "20–27": { Center: -1.5, Edge: -2.5, Corner: -3.0, Downforce: 0.6 },
    "27–45": { Center: -1.8, Edge: -2.0, Corner: -2.5, Downforce: 0.9 },
  },
};

function normalizeSlopeKey(s: string): string {
  // make sure "7-20" or "7–20" both map to "7–20"
  return s.replace("-", "–").trim();
}

function getGcpRow(roofType: RoofType, roofSlope: string): GcpRow {
  const slopeKey = normalizeSlopeKey(roofSlope);
  const table = GCP_TABLE[roofType];
  const row = table?.[slopeKey];
  if (!row) {
    const allowed = Object.keys(table || {}).join(", ");
    throw new Error(
      `Invalid roofSlope "${roofSlope}" for ${roofType}. Allowed: ${allowed}`
    );
  }
  return row;
}

/* ---------------- MAIN ---------------- */

export function calculateUSA_ASCE7(
  input: SurroundingsInput
): SurroundingsResult {
  const exposureUsed = exposureToBCD(input.exposureCategory);
  const Kz = deriveKz(input.buildingHeight_m, exposureUsed);

  const { elevation_ft, Ke } = deriveKe(input.elevation_m);

  // Fixed constants
  const Ya = 0.6;
  const Kzt = 1.0;
  const Kd = 0.85;

  const V_mph = kmhToMph(input.windSpeed_km_h);

  // base multiplier WITHOUT Gcp (so we can apply 4 different Gcp values)
  const base = 0.00256 * Kz * Ke * Kzt * Kd * (V_mph * V_mph) * Ya * 1;

  const gcpRow = getGcpRow(input.roofType, input.roofSlope);

  const positions: WindPosition[] = ["Center", "Edge", "Corner", "Downforce"];

  const results = positions.map((position) => {
    const Gcp = gcpRow[position];
    const W = base * Gcp;

    const formulaWithValues = `W = (0.00256 × ${round2(Kz)} × ${round2(
      Ke
    )} × ${Kzt} × ${Kd} × (${round2(V_mph)})²) × ${Ya} × 1 × (${Gcp})`;

    return {
      position,
      Gcp,
      formulaWithValues,
      windPressure: round2(W),
    };
  });

  return {
    designCode: "USA – ASCE 7",
    wind: {
      explain: {
        V_km_h: round2(input.windSpeed_km_h),
        V_mph: round2(V_mph),
        elevation_m: round2(input.elevation_m),
        elevation_ft: round2(elevation_ft),

        Kz: round2(Kz),
        Ke: round2(Ke),
        Kzt,
        Kd,
        Ya,

        exposureCategoryUsed: exposureUsed,

        roofType: input.roofType,
        roofSlope: normalizeSlopeKey(input.roofSlope),
      },
      results,
    },
    meta: {
      packVersion: "2026.01.USA-ASCE7-v2",
      notes: [
        "Exposure A is mapped to Exposure B for Kz lookup (table provided starts at B).",
        "Kz uses next-height-up (ceiling) selection for safety when height is between table rows.",
        "Ke = exp(-0.0000362 × elevation_ft).",
        "Ya=0.6, Kzt=1.0, Kd=0.85 are fixed for now as requested.",
        "Gcp is selected from roofType + roofSlope table and calculated for: Center, Edge, Corner, Downforce.",
      ],
    },
  };
}
