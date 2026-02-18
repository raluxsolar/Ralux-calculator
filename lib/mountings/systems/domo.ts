// lib/mountings/systems/domo.ts
import type { MountingInput, MountingResult, ZoneTriple } from "../types";
import type { SurroundingsResult } from "@/lib/surroundings";
import type { RoofType } from "@/lib/calculators/types";

const M_TO_FT = 3.28084;
const KG_TO_LB = 2.20462262185;
const PA_TO_PSI = 1 / 6894.757293168; // Pa -> psi
const PSI_TO_PSF = 144; // psi -> lb/ft^2
const IN_TO_M = 0.0254;

const BASE_ATTACHMENTS_PER_MODULE = 4;
const PSF_TO_PA = 47.8803;

type Pos = "Center" | "Edge" | "Corner" | "Downforce";

function getWindPressurePsf(sr: SurroundingsResult, pos: Pos): number {
  if (sr.designCode === "USA – ASCE 7") {
    const found = sr.wind.results.find((r) => r.position === pos);
    if (!found) throw new Error(`Wind pressure "${pos}" not found in surroundings result.`);
    return Number(found.windPressure);
  }
  throw new Error("DOMO currently requires USA – ASCE 7 surroundings result.");
}

function parseNumberStrict(v: unknown, label: string): number {
  const n = Number(v);
  if (!Number.isFinite(n)) throw new Error(`${label} is missing/invalid.`);
  return n;
}

function parseLengthToMeters(val: string, label: string): number {
  const n = parseNumberStrict(val, label);
  if (n <= 0) throw new Error(`${label} must be > 0.`);
  return n > 20 ? n / 1000 : n;
}

function parseRoofSlopeRange(s: string): { raw: string; minDeg: number; maxDeg: number } {
  const raw = String(s ?? "").trim();
  if (!raw) throw new Error("roofSlope is missing.");
  const normalized = raw.replace("–", "-").replace("—", "-");
  const parts = normalized
    .split("-")
    .map((x) => x.trim())
    .filter(Boolean);
  if (parts.length !== 2) throw new Error(`roofSlope must be like "3-10" (got "${raw}").`);
  const minDeg = Number(parts[0]);
  const maxDeg = Number(parts[1]);
  if (!Number.isFinite(minDeg) || !Number.isFinite(maxDeg)) {
    throw new Error(`roofSlope numbers invalid (got "${raw}").`);
  }
  return { raw, minDeg, maxDeg };
}

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

function mulZone(a: ZoneTriple, k: number): ZoneTriple {
  return { center: a.center * k, edge: a.edge * k, corner: a.corner * k };
}

function safeCbrt(x: number): number {
  return Number.isFinite(x) ? Math.cbrt(x) : Number.NaN;
}

function safeSqrt(x: number): number {
  return x > 0 && Number.isFinite(x) ? Math.sqrt(x) : Number.NaN;
}

function safeMax(a: number, b: number): number {
  const fa = Number.isFinite(a);
  const fb = Number.isFinite(b);
  if (fa && fb) return Math.max(a, b);
  if (fa) return a;
  if (fb) return b;
  return Number.NaN;
}

// ceil to integer percent
function pctCeil(ratio: number): number {
  return Number.isFinite(ratio) ? Math.ceil(ratio * 100) : NaN;
}

const FASTENING_TABLE: Record<string, { label: string; I_in4: number; S_in3: number }> = {
  "omnia-3c": { label: "Omnia 3C", I_in4: 0.169, S_in3: 0.171704 },
  "omnia-2c": { label: "Omnia 2C", I_in4: 0.12, S_in3: 0.139051094 },
  omnia: { label: "Omnia", I_in4: 0.19509291, S_in3: 0.1982047 },
  ace: { label: "ACE", I_in4: 1.487748, S_in3: 0.7619708 },

  // Store enum mapping
  "omnia-light": {
    label: "Omnia 2C (mapped from omnia-light)",
    I_in4: 0.12,
    S_in3: 0.139051094,
  },
};

type SpanControlPosition = "Center" | "Exposed 1" | "Edge" | "Exposed 2" | "Corner" | "Exposed 3";

type ControlSpanCountry = "MX" | "CO";

const CONTROL_SPAN_TABLE_MX: Record<RoofType, Record<string, Record<SpanControlPosition, number>>> = {
  monoslope: {
    "3–10": {
      Center: 2.19,
      "Exposed 1": 2.19,
      Edge: 2.19,
      "Exposed 2": 2.19,
      Corner: 2.19,
      "Exposed 3": 1.96,
    },
    "10–30": {
      Center: 2.10,
      "Exposed 1": 2.10,
      Edge: 2.10,
      "Exposed 2": 2.10,
      Corner: 2.10,
      "Exposed 3": 1.87,
    },
  },
  hip: {
    "7–20": {
      Center: 2.19,
      "Exposed 1": 2.19,
      Edge: 2.19,
      "Exposed 2": 2.02,
      Corner: 2.19,
      "Exposed 3": 1.95,
    },
    "20–27": {
      Center: 2.21,
      "Exposed 1": 2.21,
      Edge: 2.21,
      "Exposed 2": 2.19,
      Corner: 2.21,
      "Exposed 3": 2.19,
    },
    "27–45": {
      Center: 2.32,
      "Exposed 1": 2.32,
      Edge: 2.32,
      "Exposed 2": 2.22,
      Corner: 2.32,
      "Exposed 3": 1.97,
    },
  },
  gable: {
    "0–7": {
      Center: 2.31,
      "Exposed 1": 2.31,
      Edge: 2.31,
      "Exposed 2": 2.07,
      Corner: 2.14,
      "Exposed 3": 1.79,
    },
    "7–20": {
      Center: 2.22,
      "Exposed 1": 2.19,
      Edge: 2.22,
      "Exposed 2": 1.91,
      Corner: 2.02,
      "Exposed 3": 1.68,
    },
    "20–27": {
      Center: 2.25,
      "Exposed 1": 2.25,
      Edge: 2.25,
      "Exposed 2": 1.93,
      Corner: 2.02,
      "Exposed 3": 1.84,
    },
    "27–45": {
      Center: 2.24,
      "Exposed 1": 2.24,
      Edge: 2.24,
      "Exposed 2": 2.22,
      Corner: 2.24,
      "Exposed 3": 1.97,
    },
  },
};

const CONTROL_SPAN_TABLE_CO: Record<RoofType, Record<string, Record<SpanControlPosition, number>>> = {
  monoslope: {
    "3–10": {
      Center: 2.12,
      "Exposed 1": 2.12,
      Edge: 2.12,
      "Exposed 2": 2.12,
      Corner: 2.12,
      "Exposed 3": 1.86,
    },
    "10–30": {
      Center: 2.03,
      "Exposed 1": 2.03,
      Edge: 2.03,
      "Exposed 2": 2.03,
      Corner: 2.03,
      "Exposed 3": 1.78,
    },
  },
  hip: {
    "7–20": {
      Center: 2.12,
      "Exposed 1": 2.12,
      Edge: 2.12,
      "Exposed 2": 1.92,
      Corner: 2.12,
      "Exposed 3": 1.85,
    },
    "20–27": {
      Center: 2.14,
      "Exposed 1": 2.14,
      Edge: 2.14,
      "Exposed 2": 2.08,
      Corner: 2.14,
      "Exposed 3": 2.08,
    },
    "27–45": {
      Center: 2.25,
      "Exposed 1": 2.25,
      Edge: 2.25,
      "Exposed 2": 2.11,
      Corner: 2.23,
      "Exposed 3": 1.87,
    },
  },
  gable: {
    "0–7": {
      Center: 2.24,
      "Exposed 1": 2.24,
      Edge: 2.24,
      "Exposed 2": 1.97,
      Corner: 2.03,
      "Exposed 3": 1.71,
    },
    "7–20": {
      Center: 2.15,
      "Exposed 1": 2.08,
      Edge: 2.15,
      "Exposed 2": 1.82,
      Corner: 1.92,
      "Exposed 3": 1.60,
    },
    "20–27": {
      Center: 2.18,
      "Exposed 1": 2.18,
      Edge: 2.18,
      "Exposed 2": 1.84,
      Corner: 1.92,
      "Exposed 3": 1.76,
    },
    "27–45": {
      Center: 2.17,
      "Exposed 1": 2.17,
      Edge: 2.17,
      "Exposed 2": 2.11,
      Corner: 2.17,
      "Exposed 3": 1.87,
    },
  },
};

function normalizeSlopeKey(s: string): string {
  return s.replace("—", "–").replace("-", "–").trim();
}

function resolveControlSpanCountry(
  countryCode?: string,
  country?: string
): ControlSpanCountry {
  const code = String(countryCode ?? "").trim().toUpperCase();
  const name = String(country ?? "").trim().toLowerCase();
  if (code === "CO" || name === "colombia") return "CO";
  return "MX";
}

function getControlSpanM(
  roofType: RoofType,
  roofSlope: string,
  position: SpanControlPosition,
  controlSpanCountry: ControlSpanCountry
): number {
  const slopeKey = normalizeSlopeKey(roofSlope);
  const tableByCountry =
    controlSpanCountry === "CO" ? CONTROL_SPAN_TABLE_CO : CONTROL_SPAN_TABLE_MX;
  const table = tableByCountry[roofType];
  const row = table?.[slopeKey];
  if (!row) {
    const allowed = Object.keys(table || {}).join(", ");
    throw new Error(`Invalid roofSlope "${roofSlope}" for ${roofType} control span. Allowed: ${allowed}`);
  }
  const value = row[position];
  if (!Number.isFinite(value)) {
    throw new Error(`Control span not found for ${roofType} ${slopeKey} ${position}.`);
  }
  return value;
}

type SpanCaseKey =
  | "zone_center"
  | "zone_edge"
  | "zone_corner"
  | "exposed_center"
  | "exposed_edge"
  | "exposed_corner"
  | "downforce_worst"
  | "shear_worst";

const CONTROL_POSITION_BY_CASE: Record<SpanCaseKey, SpanControlPosition> = {
  zone_center: "Center",
  exposed_center: "Exposed 1",
  zone_edge: "Edge",
  exposed_edge: "Exposed 2",
  zone_corner: "Corner",
  exposed_corner: "Exposed 3",
  // Downforce is not a wind zone; use center control span for cap.
  downforce_worst: "Center",
  // Shear is not a wind zone; use center control span for cap.
  shear_worst: "Center",
};

type SpanAnalysisCase = {
  key: SpanCaseKey;

  wind_uplift_lb: number;
  asd_wind_psf: number;

  worst_down_check_psf: number;

  service_pressure_asd_deflection_psf: number;
  pressure_asd_efforts_psf: number;

  tributary_width_per_rail_ft: number;

  linear_service_load_plf: number;
  linear_service_load_pli: number;

  linear_load_stresses_plf: number;
  linear_load_stresses_pli: number;

  span_asd_in: number;
  span_asd_m: number;
  span_L240_in: number;
  span_L240_m: number;
  span_governing_m: number;
  control_span_m: number;

  final_span_m: number;

  reaction_asd_lb: number;
  reaction_asd_kg: number;

  reaction_L240_lb: number;
  reaction_L240_kg: number;

  uplift_per_attachment_kg: number;
  downforce_per_attachment_kg: number;
  shear_per_attachment_kg: number;
};

export function calcDomo(input: MountingInput): MountingResult {
  // ---------- Inputs ----------
  const moduleWidth_m = parseLengthToMeters(input.module.width, "Module width");
  const moduleLength_m = parseLengthToMeters(input.module.length, "Module length");
  const moduleWeight_kg = parseNumberStrict(input.module.weight, "Module weight (kg)");
  const snowLoad_Pa = parseNumberStrict(input.snowLoad_Pa, "Snow load (Pa)");

  const slanted = input.mounting?.slantedRoof;
  if (!slanted) throw new Error("Mounting slantedRoof is missing/invalid.");
  if (!slanted.roofSlope) throw new Error("Roof slope is missing in mounting step.");
  if (!slanted.roofType) throw new Error("Roof type is missing in mounting step.");
  const roofType = slanted.roofType;
  const controlSpanCountry = resolveControlSpanCountry(input.countryCode, input.country);

  const fasteningKey = String(slanted.fastening ?? "").trim().toLowerCase();
  if (!fasteningKey) throw new Error("Fastening is missing in mounting step (slantedRoof.fastening).");
  const fastening = FASTENING_TABLE[fasteningKey];
  if (!fastening) {
    const allowed = Object.keys(FASTENING_TABLE).join(", ");
    throw new Error(`Unknown fastening "${fasteningKey}". Allowed: ${allowed}`);
  }

  const { raw: roofSlopeRange, minDeg, maxDeg } = parseRoofSlopeRange(slanted.roofSlope);
  const roofSlopeKey = normalizeSlopeKey(roofSlopeRange);
  const roofSlopeRad_min = degToRad(minDeg);
  const roofSlopeRad_max = degToRad(maxDeg);

  // ---------- Tributary Area ----------
  const width_ft = moduleWidth_m * M_TO_FT;
  const length_ft = moduleLength_m * M_TO_FT;
  const tribArea_sqft = width_ft * length_ft;

  // ---------- Panel DL ----------
  const moduleWeight_lb = moduleWeight_kg * KG_TO_LB;
  const panelDL_psf = moduleWeight_lb / tribArea_sqft;
  const panelDL_lb = panelDL_psf * tribArea_sqft;

  // ---------- Panel SL ----------
  const snow_psi = snowLoad_Pa * PA_TO_PSI;
  const snow_psf = snow_psi * PSI_TO_PSF;
  const panelSL_lb = snow_psf * tribArea_sqft;

  // ---------- Wind pressures (psf) ----------
  const windPsf = {
    center: getWindPressurePsf(input.surroundings, "Center"),
    edge: getWindPressurePsf(input.surroundings, "Edge"),
    corner: getWindPressurePsf(input.surroundings, "Corner"),
    downforce: getWindPressurePsf(input.surroundings, "Downforce"),
  };

  // ---------- Upforce load combination (Zone 1/2/3) ----------
  const upforceLoadCombination_lb: ZoneTriple = {
    center: 0.6 * Math.cos(roofSlopeRad_max) * panelDL_lb + 0.6 * windPsf.center * tribArea_sqft,
    edge: 0.6 * Math.cos(roofSlopeRad_max) * panelDL_lb + 0.6 * windPsf.edge * tribArea_sqft,
    corner: 0.6 * Math.cos(roofSlopeRad_max) * panelDL_lb + 0.6 * windPsf.corner * tribArea_sqft,
  };
  const windUplift_lb: ZoneTriple = mulZone(upforceLoadCombination_lb, -1);

  // ---------- Exposed load combination ----------
  const upforceLoadCombinationExposed_lb: ZoneTriple = {
    center: 0.6 * Math.cos(roofSlopeRad_max) * panelDL_lb + 0.6 * 1.5 * windPsf.center * tribArea_sqft,
    edge: 0.6 * Math.cos(roofSlopeRad_max) * panelDL_lb + 0.6 * 1.5 * windPsf.edge * tribArea_sqft,
    corner: 0.6 * Math.cos(roofSlopeRad_max) * panelDL_lb + 0.6 * 1.5 * windPsf.corner * tribArea_sqft,
  };
  const windUpliftExposed_lb: ZoneTriple = mulZone(upforceLoadCombinationExposed_lb, -1);

  // ---------- Downforce (3 combinations) ----------
  const windDown_lb =
    panelDL_lb * Math.cos(roofSlopeRad_min) + 0.6 * windPsf.downforce * tribArea_sqft;

  const windSnowDown_lb =
    panelDL_lb * Math.cos(roofSlopeRad_max) +
    0.45 * windPsf.downforce * tribArea_sqft +
    0.75 * panelSL_lb * Math.cos(roofSlopeRad_max);

  const deadSnowDown_lb = (panelDL_lb + panelSL_lb) * Math.cos(roofSlopeRad_min);
  const worstDown_lb = Math.max(windDown_lb, windSnowDown_lb, deadSnowDown_lb);

  // ---------- Shear (Dead + Snow on slope) ----------
  const shearSlopeRad =
    roofType === "gable" && roofSlopeKey === "0–7" ? roofSlopeRad_max : roofSlopeRad_min;
  const deadSnowShear_lb = (panelDL_lb + panelSL_lb) * Math.sin(shearSlopeRad);
  const worstShear_lb = deadSnowShear_lb;

  // ---------- Rail span analysis constants ----------
  const E_ksi = 10000;
  const Fy_ksi = 35;
  const Omega_b = 1.65;
  const Fb_ksi = Fy_ksi / Omega_b;

  const E_psi = E_ksi * 1000;
  const Fb_psi = Fb_ksi * 1000;

  const rails = 2;
  const deflDen = 240;

  const moduleLength_in = moduleLength_m / 0.0254;
  const moduleWidth_in = moduleWidth_m / 0.0254;
  const moduleArea_ft2 = (moduleLength_in * moduleWidth_in) / 144;

  const worstDownCheck_psf = worstDown_lb / moduleArea_ft2;
  const tributaryWidthPerRail_ft = (moduleLength_in / rails) / 12;

  function computeSpanAnalysisCase(
    key: SpanCaseKey,
    load_lb: number,
    options?: { worstDownCheck_psf?: number }
  ): SpanAnalysisCase {
    const asdWind_psf = load_lb / moduleArea_ft2;

    const overrideWorstDown = options?.worstDownCheck_psf;
    const worstDownCheckCase_psf =
      typeof overrideWorstDown === "number" && Number.isFinite(overrideWorstDown)
        ? overrideWorstDown
        : worstDownCheck_psf;

    const servicePressure_psf = Math.max(asdWind_psf, worstDownCheckCase_psf);
    const pressureEfforts_psf = Math.max(asdWind_psf, worstDownCheckCase_psf);

    const linearService_plf = tributaryWidthPerRail_ft * servicePressure_psf;
    const linearService_pli = linearService_plf / 12;

    const linearStress_plf = tributaryWidthPerRail_ft * pressureEfforts_psf;
    const linearStress_pli = linearStress_plf / 12;

    const spanAsd_in = safeSqrt((8 * Fb_psi * fastening.S_in3) / linearStress_pli);

    const spanL240_in = safeCbrt(
      (384 * E_psi * fastening.I_in4) / (5 * linearService_pli * deflDen)
    );

    const spanAsd_m = spanAsd_in * IN_TO_M;
    const spanL240_m = spanL240_in * IN_TO_M;
    const governingSpan_m = safeMax(spanAsd_m, spanL240_m);
    const controlSpan_m = getControlSpanM(
      roofType,
      roofSlopeRange,
      CONTROL_POSITION_BY_CASE[key],
      controlSpanCountry
    );
    const finalSpan_m = Number.isFinite(governingSpan_m)
      ? Math.min(governingSpan_m, controlSpan_m)
      : Number.NaN;

    const reactionAsd_lb = (linearService_pli * spanAsd_in) / 2;
    const reactionAsd_kg = reactionAsd_lb / KG_TO_LB;

    const reactionL240_lb = (linearStress_pli * spanL240_in) / 2;
    const reactionL240_kg = reactionL240_lb / KG_TO_LB;

    const finalSpan_in = finalSpan_m / IN_TO_M;
    const upliftPerAttachment_kg = (finalSpan_in * linearService_pli) / KG_TO_LB;

    return {
      key,
      wind_uplift_lb: load_lb,
      asd_wind_psf: asdWind_psf,

      worst_down_check_psf: worstDownCheckCase_psf,

      service_pressure_asd_deflection_psf: servicePressure_psf,
      pressure_asd_efforts_psf: pressureEfforts_psf,

      tributary_width_per_rail_ft: tributaryWidthPerRail_ft,

      linear_service_load_plf: linearService_plf,
      linear_service_load_pli: linearService_pli,

      linear_load_stresses_plf: linearStress_plf,
      linear_load_stresses_pli: linearStress_pli,

      span_asd_in: spanAsd_in,
      span_asd_m: spanAsd_m,
      span_L240_in: spanL240_in,
      span_L240_m: spanL240_m,
      span_governing_m: governingSpan_m,
      control_span_m: controlSpan_m,

      final_span_m: finalSpan_m,

      reaction_asd_lb: reactionAsd_lb,
      reaction_asd_kg: reactionAsd_kg,

      reaction_L240_lb: reactionL240_lb,
      reaction_L240_kg: reactionL240_kg,

      uplift_per_attachment_kg: upliftPerAttachment_kg,
      downforce_per_attachment_kg: Number.NaN,
      shear_per_attachment_kg: Number.NaN,
    };
  }

  const shearAsdWind_psf = worstShear_lb / moduleArea_ft2;
  const shearWorstDownCheck_psf = shearAsdWind_psf;

  const spanAnalysisCasesRaw: SpanAnalysisCase[] = [
    computeSpanAnalysisCase("zone_center", windUplift_lb.center),
    computeSpanAnalysisCase("zone_edge", windUplift_lb.edge),
    computeSpanAnalysisCase("zone_corner", windUplift_lb.corner),
    computeSpanAnalysisCase("exposed_center", windUpliftExposed_lb.center),
    computeSpanAnalysisCase("exposed_edge", windUpliftExposed_lb.edge),
    computeSpanAnalysisCase("exposed_corner", windUpliftExposed_lb.corner),
    computeSpanAnalysisCase("downforce_worst", worstDown_lb),
    computeSpanAnalysisCase("shear_worst", worstShear_lb, {
      worstDownCheck_psf: shearWorstDownCheck_psf,
    }),
  ];

  const byKeyRaw = (k: SpanCaseKey) => spanAnalysisCasesRaw.find((c) => c.key === k);
  const downWorstRaw = byKeyRaw("downforce_worst");
  const shearWorstRaw = byKeyRaw("shear_worst");
  if (!downWorstRaw) throw new Error("Internal error: missing downforce span analysis case.");
  if (!shearWorstRaw) throw new Error("Internal error: missing shear span analysis case.");

  const downforceLinearStress_pli = downWorstRaw.linear_load_stresses_pli;
  const shearLinearStress_pli = shearWorstRaw.linear_load_stresses_pli;

  const spanAnalysisCases: SpanAnalysisCase[] = spanAnalysisCasesRaw.map((c) => {
    if (c.key === "downforce_worst" || c.key === "shear_worst") {
      return c;
    }
    const finalSpan_in = c.final_span_m / IN_TO_M;
    const downforcePerAttachment_kg = (finalSpan_in * downforceLinearStress_pli) / KG_TO_LB;
    const shearPerAttachment_kg = (finalSpan_in * shearLinearStress_pli) / KG_TO_LB;
    return {
      ...c,
      downforce_per_attachment_kg: downforcePerAttachment_kg,
      shear_per_attachment_kg: shearPerAttachment_kg,
    };
  });

  const byKey = (k: SpanCaseKey) => spanAnalysisCases.find((c) => c.key === k);
  const zoneCenter = byKey("zone_center");
  const zoneEdge = byKey("zone_edge");
  const zoneCorner = byKey("zone_corner");
  const expCenter = byKey("exposed_center");
  const expEdge = byKey("exposed_edge");
  const expCorner = byKey("exposed_corner");
  const downWorst = byKey("downforce_worst");

  if (!zoneCenter || !zoneEdge || !zoneCorner || !expCenter || !expEdge || !expCorner || !downWorst) {
    throw new Error("Internal error: missing span analysis cases.");
  }

  // Summary table inputs
  const span_m = {
    center_zone: zoneCenter.final_span_m,
    edge_zone: zoneEdge.final_span_m,
    corner_zone: zoneCorner.final_span_m,
    center_exposed: expCenter.final_span_m,
    edge_exposed: expEdge.final_span_m,
    corner_exposed: expCorner.final_span_m,
  };

  const windPressurePa_zone = {
    center: windPsf.center * PSF_TO_PA,
    edge: windPsf.edge * PSF_TO_PA,
    corner: windPsf.corner * PSF_TO_PA,
  };
  const windPressurePa_exposed = {
    center: windPressurePa_zone.center * 1.5,
    edge: windPressurePa_zone.edge * 1.5,
    corner: windPressurePa_zone.corner * 1.5,
  };

  const upliftPerAttachmentKg_zone = {
    center: zoneCenter.uplift_per_attachment_kg,
    edge: zoneEdge.uplift_per_attachment_kg,
    corner: zoneCorner.uplift_per_attachment_kg,
  };
  const upliftPerAttachmentKg_exposed = {
    center: expCenter.uplift_per_attachment_kg,
    edge: expEdge.uplift_per_attachment_kg,
    corner: expCorner.uplift_per_attachment_kg,
  };

  const downforcePerAttachmentKg = Number.NaN;
  const shearPerAttachmentKg = Number.NaN;

  const upliftCap = 351.1;
  const downforceCap = 351.1;
  const shearCap = 51;

  function buildValidation(upliftKg: number, downforceKg: number, shearKg: number) {
    const upliftRatio = upliftKg / upliftCap;
    const downRatio = downforceKg / downforceCap;
    const shearRatio = shearKg / shearCap;

    return {
      upliftRatio,
      upliftPercent: pctCeil(upliftRatio),
      downforceRatio: downRatio,
      downforcePercent: pctCeil(downRatio),
      shearRatio,
      shearPercent: pctCeil(shearRatio),
    };
  }

  const rows = [
    {
      area: "Center",
      zone: "Zone 1",
      span_m: span_m.center_zone,
      windPressure_Pa: windPressurePa_zone.center,
      upliftKg: upliftPerAttachmentKg_zone.center,
      downforceKg: zoneCenter.downforce_per_attachment_kg,
      shearKg: zoneCenter.shear_per_attachment_kg,
    },
    {
      area: "Center",
      zone: "Exposed 1",
      span_m: span_m.center_exposed,
      windPressure_Pa: windPressurePa_exposed.center,
      upliftKg: upliftPerAttachmentKg_exposed.center,
      downforceKg: expCenter.downforce_per_attachment_kg,
      shearKg: expCenter.shear_per_attachment_kg,
    },
    {
      area: "Edge",
      zone: "Zone 2",
      span_m: span_m.edge_zone,
      windPressure_Pa: windPressurePa_zone.edge,
      upliftKg: upliftPerAttachmentKg_zone.edge,
      downforceKg: zoneEdge.downforce_per_attachment_kg,
      shearKg: zoneEdge.shear_per_attachment_kg,
    },
    {
      area: "Edge",
      zone: "Exposed 2",
      span_m: span_m.edge_exposed,
      windPressure_Pa: windPressurePa_exposed.edge,
      upliftKg: upliftPerAttachmentKg_exposed.edge,
      downforceKg: expEdge.downforce_per_attachment_kg,
      shearKg: expEdge.shear_per_attachment_kg,
    },
    {
      area: "Corner",
      zone: "Zone 3",
      span_m: span_m.corner_zone,
      windPressure_Pa: windPressurePa_zone.corner,
      upliftKg: upliftPerAttachmentKg_zone.corner,
      downforceKg: zoneCorner.downforce_per_attachment_kg,
      shearKg: zoneCorner.shear_per_attachment_kg,
    },
    {
      area: "Corner",
      zone: "Exposed 3",
      span_m: span_m.corner_exposed,
      windPressure_Pa: windPressurePa_exposed.corner,
      upliftKg: upliftPerAttachmentKg_exposed.corner,
      downforceKg: expCorner.downforce_per_attachment_kg,
      shearKg: expCorner.shear_per_attachment_kg,
    },
  ];

  const validationRows = rows.map((r) => {
    const v = buildValidation(r.upliftKg, r.downforceKg, r.shearKg);
    return {
      area: r.area,
      zone: r.zone,
      upliftPercent: v.upliftPercent,
      downforcePercent: v.downforcePercent,
      shearPercent: v.shearPercent,
      upliftRatio: v.upliftRatio,
      downforceRatio: v.downforceRatio,
      shearRatio: v.shearRatio,
    };
  });

  const perAttachmentKg: ZoneTriple = {
    center: upliftPerAttachmentKg_zone.center,
    edge: upliftPerAttachmentKg_zone.edge,
    corner: upliftPerAttachmentKg_zone.corner,
  };
  const perAttachmentExposedKg: ZoneTriple = {
    center: upliftPerAttachmentKg_exposed.center,
    edge: upliftPerAttachmentKg_exposed.edge,
    corner: upliftPerAttachmentKg_exposed.corner,
  };

  const emptyZoneTriple: ZoneTriple = { center: NaN, edge: NaN, corner: NaN };

  return {
    systemId: "domo",
    ok: true,

    uplift: { ...windUplift_lb },
    upliftExposed: { ...windUpliftExposed_lb },

    perAttachmentKg,
    perAttachmentExposedKg,

    downforce: {
      windDown_lb,
      windSnowDown_lb,
      deadSnowDown_lb,
      worstDown_lb,
    },
    downforcePerAttachmentKg,

    shear: {
      deadSnowShear_lb,
      worstShear_lb,
    },
    shearPerAttachmentKg,

    // Keep the same validation object shape (unchanged)
    validation: {
      sheetThickness_mm: NaN,
      screwsPerAttachment: NaN,
      attachmentsPerModule: BASE_ATTACHMENTS_PER_MODULE,
      attachmentsPerZone: {
        center: BASE_ATTACHMENTS_PER_MODULE,
        edge: BASE_ATTACHMENTS_PER_MODULE,
        corner: BASE_ATTACHMENTS_PER_MODULE,
      },
      attachmentsPerZoneExposed: {
        center: BASE_ATTACHMENTS_PER_MODULE,
        edge: BASE_ATTACHMENTS_PER_MODULE,
        corner: BASE_ATTACHMENTS_PER_MODULE,
      },
      shearFailMode: NaN,
      upliftTensionFailMode: NaN,
      shearCapacity: NaN,
      upliftCapacity: NaN,
      shearValidation: NaN,
      upliftValidation: emptyZoneTriple,
      upliftValidationExposed: emptyZoneTriple,
      finalUtilization: emptyZoneTriple,
      finalUtilizationExposed: emptyZoneTriple,
      finalUtilizationPercent: emptyZoneTriple,
      finalUtilizationPercentExposed: emptyZoneTriple,
    },

    explain: {
      moduleWidth_m,
      moduleLength_m,
      moduleWeight_kg,
      snowLoad_Pa,

      width_ft,
      length_ft,
      tribArea_sqft,

      moduleWeight_lb,
      panelDL_psf,
      panelDL_lb,

      snow_psi,
      snow_psf,
      panelSL_lb,

      roofSlopeRange,
      roofSlopeKey,
      roofType,
      controlSpanCountry,
      roofSlopeDeg_min: minDeg,
      roofSlopeDeg_max: maxDeg,
      roofSlopeRad_min,
      roofSlopeRad_max,

      windPressure_psf: {
        center: windPsf.center,
        edge: windPsf.edge,
        corner: windPsf.corner,
        downforce: windPsf.downforce,
      },

      upforceLoadCombination_lb,
      upforceLoadCombinationExposed_lb,

      domoSpanAnalysis: {
        fasteningKey,
        fasteningUsed: fastening.label,
        S_in3: fastening.S_in3,
        I_in4: fastening.I_in4,

        E_ksi,
        Fy_ksi,
        Omega_b,
        Fb_ksi,
        E_psi,
        Fb_psi,

        rails,
        deflDen,

        moduleLength_in,
        moduleWidth_in,
        moduleArea_ft2,

        worstDownCheck_psf,
        tributaryWidthPerRail_ft,

        spanAnalysisCases,
      },

      domoTables: {
        rows,
        validationRows,
        constants: {
          psfToPa: PSF_TO_PA,
          exposedMultiplier: 1.5,
          upliftCap,
          downforceCap,
          shearCap,
        },
        shearDerivation: {
          shearLoad_lb: worstShear_lb,
          shear_asd_wind_psf: shearWorstRaw.asd_wind_psf,
          shear_worst_down_check_psf: shearWorstRaw.worst_down_check_psf,
          shear_pressure_efforts_psf: shearWorstRaw.pressure_asd_efforts_psf,
          shear_linear_stress_plf: shearWorstRaw.linear_load_stresses_plf,
          shear_linear_stress_pli: shearWorstRaw.linear_load_stresses_pli,
        },
      },
    },

    meta: { packVersion: "2026.01.DOMO.v1" },
  };
}
