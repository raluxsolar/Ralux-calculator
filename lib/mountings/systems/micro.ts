// lib/mountings/systems/micro.ts
import type { MountingInput, MountingResult, ZoneTriple } from "../types";
import type { SurroundingsResult } from "@/lib/surroundings";

const M_TO_FT = 3.28084;
const KG_TO_LB = 2.20462262185;
const PA_TO_PSI = 1 / 6894.757293168; // Pa -> psi
const PSI_TO_PSF = 144; // psi -> lb/ft^2
const LB_TO_KG = 0.45359237;

// ✅ Base starting attachments for Micro (shear/downforce use this)
const BASE_ATTACHMENTS_PER_MODULE = 4;
const SCREWS_PER_ATTACHMENT = 4;

type Pos = "Center" | "Edge" | "Corner" | "Downforce";
type Zone = "center" | "edge" | "corner";
const ZONES: Zone[] = ["center", "edge", "corner"];

/** extract wind pressure (psf) from surroundings result */
function getWindPressurePsf(sr: SurroundingsResult, pos: Pos): number {
  if (sr.designCode === "USA – ASCE 7") {
    const found = sr.wind.results.find((r) => r.position === pos);
    if (!found)
      throw new Error(
        `Wind pressure "${pos}" not found in surroundings result.`
      );
    return Number(found.windPressure);
  }
  throw new Error(
    "Micro-rail currently requires USA – ASCE 7 surroundings result."
  );
}

function parseNumberStrict(v: unknown, label: string): number {
  const n = Number(v);
  if (!Number.isFinite(n)) throw new Error(`${label} is missing/invalid.`);
  return n;
}

function parseLengthToMeters(val: string, label: string): number {
  const n = parseNumberStrict(val, label);
  if (n <= 0) throw new Error(`${label} must be > 0.`);
  return n > 20 ? n / 1000 : n; // mm -> m OR already meters
}

function parseRoofSlopeRange(s: string): {
  raw: string;
  minDeg: number;
  maxDeg: number;
} {
  const raw = String(s ?? "").trim();
  if (!raw) throw new Error("roofSlope is missing.");
  const normalized = raw.replace("–", "-").replace("—", "-");
  const parts = normalized
    .split("-")
    .map((x) => x.trim())
    .filter(Boolean);
  if (parts.length !== 2)
    throw new Error(`roofSlope must be like "3-10" (got "${raw}").`);
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

function getSheetThicknessMm(input: MountingInput): number {
  const sr = input.mounting?.slantedRoof;
  if (!sr) throw new Error("Mounting slantedRoof is missing/invalid.");

  const cov = sr.coverage as unknown as { sheetThickness?: unknown };
  const t = cov?.sheetThickness;

  const raw = String(t ?? "").trim();
  const n = Number(raw.replace("mm", "").trim());

  if (!Number.isFinite(n) || n <= 0) {
    throw new Error("Sheet thickness is missing/invalid in mounting coverage.");
  }
  return n;
}

const THICKNESS_KEYS = [
  0.4, 0.5, 0.55, 0.63, 0.75, 0.88, 1.0, 1.13, 1.25,
] as const;

const TABLE = {
  upliftTensionFailMode: {
    0.4: 32.9703,
    0.5: 43.1673,
    0.55: 50.3052,
    0.63: 61.182,
    0.75: 78.5169,
    0.88: 93.1326,
    1.0: 94.8321,
    1.13: 94.8321,
    1.25: 94.8321,
  } as Record<number, number>,

  shearFailMode: {
    0.4: 22.4334,
    0.5: 31.6107,
    0.55: 36.0294,
    0.63: 43.1673,
    0.75: 54.0441,
    0.88: 65.6007,
    1.0: 76.8174,
    1.13: 87.6942,
    1.25: 97.5513,
  } as Record<number, number>,
};

function nearestThicknessKey(t: number): number {
  let best: number = THICKNESS_KEYS[0];
  let bestDiff = Math.abs(t - best);

  for (const k of THICKNESS_KEYS) {
    const d = Math.abs(t - k);
    if (d < bestDiff) {
      best = k;
      bestDiff = d;
    }
  }

  return best;
}

// ✅ percent rule you asked: round UP (ceil) to integer percent
function pctCeil(ratio: number): number {
  return Number.isFinite(ratio) ? Math.ceil(ratio * 100) : NaN;
}

type CaseResult = {
  attachments: number;
  perAttachmentKg: number;
  upliftValidation: number;
  finalUtilization: number;
  finalUtilizationPercent: number;
};

function computeCaseForAttachments(
  upforce_lb: number,
  upliftCapacity: number,
  shearValidation: number,
  attachmentsOverride?: number
): CaseResult {
  const attachments =
    Number.isFinite(attachmentsOverride) && Number(attachmentsOverride) > 0
      ? Math.round(Number(attachmentsOverride))
      : BASE_ATTACHMENTS_PER_MODULE;

  const perKg = (((upforce_lb * 2) / attachments) * -1) * LB_TO_KG;
  const upliftVal = perKg / upliftCapacity;
  const finalVal = Math.max(upliftVal, shearValidation);

  return {
    attachments,
    perAttachmentKg: perKg,
    upliftValidation: upliftVal,
    finalUtilization: finalVal,
    finalUtilizationPercent: pctCeil(finalVal),
  };
}

export function calcMicroRail(input: MountingInput): MountingResult {
  const moduleWidth_m = parseLengthToMeters(input.module.width, "Module width");
  const moduleLength_m = parseLengthToMeters(
    input.module.length,
    "Module length"
  );
  const moduleWeight_kg = parseNumberStrict(
    input.module.weight,
    "Module weight (kg)"
  );
  const snowLoad_Pa = parseNumberStrict(input.snowLoad_Pa, "Snow load (Pa)");

  const slanted = input.mounting?.slantedRoof;
  if (!slanted) throw new Error("Mounting slantedRoof is missing/invalid.");
  if (!slanted.roofSlope)
    throw new Error("Roof slope is missing in mounting step.");

  const {
    raw: roofSlopeRange,
    minDeg,
    maxDeg,
  } = parseRoofSlopeRange(slanted.roofSlope);
  const roofSlopeRad_min = degToRad(minDeg);
  const roofSlopeRad_max = degToRad(maxDeg);

  const width_ft = moduleWidth_m * M_TO_FT;
  const length_ft = moduleLength_m * M_TO_FT;
  const tribArea_sqft = width_ft * length_ft;

  const moduleWeight_lb = moduleWeight_kg * KG_TO_LB;
  const panelDL_psf = moduleWeight_lb / tribArea_sqft;
  const panelDL_lb = panelDL_psf * tribArea_sqft;

  const snow_psi = snowLoad_Pa * PA_TO_PSI;
  const snow_psf = snow_psi * PSI_TO_PSF;
  const panelSL_lb = snow_psf * tribArea_sqft;

  const windPsf = {
    center: getWindPressurePsf(input.surroundings, "Center"),
    edge: getWindPressurePsf(input.surroundings, "Edge"),
    corner: getWindPressurePsf(input.surroundings, "Corner"),
    downforce: getWindPressurePsf(input.surroundings, "Downforce"),
  };

  // Upforce load combination (Zone 1/2/3)
  const upforce_lb: ZoneTriple = {
    center:
      0.6 * Math.cos(roofSlopeRad_max) * panelDL_lb +
      0.6 * windPsf.center * tribArea_sqft,
    edge:
      0.6 * Math.cos(roofSlopeRad_max) * panelDL_lb +
      0.6 * windPsf.edge * tribArea_sqft,
    corner:
      0.6 * Math.cos(roofSlopeRad_max) * panelDL_lb +
      0.6 * windPsf.corner * tribArea_sqft,
  };

  // Exposed load combination (same formula as clip-kr18/hanger/domo: 1.5 × wind term only)
  const upforceExposed_lb: ZoneTriple = {
    center:
      0.6 * Math.cos(roofSlopeRad_max) * panelDL_lb +
      0.6 * 1.5 * windPsf.center * tribArea_sqft,
    edge:
      0.6 * Math.cos(roofSlopeRad_max) * panelDL_lb +
      0.6 * 1.5 * windPsf.edge * tribArea_sqft,
    corner:
      0.6 * Math.cos(roofSlopeRad_max) * panelDL_lb +
      0.6 * 1.5 * windPsf.corner * tribArea_sqft,
  };

  const baseAttachments =
    input.attachmentsPerZone?.center && input.attachmentsPerZone.center > 0
      ? input.attachmentsPerZone.center
      : BASE_ATTACHMENTS_PER_MODULE;

  // Downforce and Shear use base attachments
  const windDown_lb =
    panelDL_lb * Math.cos(roofSlopeRad_min) +
    0.6 * windPsf.downforce * tribArea_sqft;

  const windSnowDown_lb =
    panelDL_lb * Math.cos(roofSlopeRad_max) +
    0.45 * windPsf.downforce * tribArea_sqft +
    0.75 * panelSL_lb * Math.cos(roofSlopeRad_max);

  const deadSnowDown_lb =
    (panelDL_lb + panelSL_lb) * Math.cos(roofSlopeRad_min);

  const worstDown_lb = Math.max(windDown_lb, windSnowDown_lb, deadSnowDown_lb);

  const downforcePerAttachmentKg =
    ((worstDown_lb * 2) / baseAttachments) * LB_TO_KG;

  const deadSnowShear_lb =
    (panelDL_lb + panelSL_lb) * Math.sin(roofSlopeRad_min);

  const worstShear_lb = deadSnowShear_lb;

  const shearPerAttachmentKg =
    ((worstShear_lb * 2) / baseAttachments) * LB_TO_KG;

  const sheetThickness_mm = getSheetThicknessMm(input);
  const tKey = nearestThicknessKey(sheetThickness_mm);

  const shearFailMode = TABLE.shearFailMode[tKey];
  const upliftTensionFailMode = TABLE.upliftTensionFailMode[tKey];

  const shearCapacity = SCREWS_PER_ATTACHMENT * shearFailMode;

  const upliftCapacity = SCREWS_PER_ATTACHMENT * upliftTensionFailMode;

  const shearValidation = shearPerAttachmentKg / shearCapacity;

  // ✅ Per-zone objects to fill
  const perAttachmentKg: ZoneTriple = {
    center: NaN,
    edge: NaN,
    corner: NaN,
  };
  const perAttachmentExposedKg: ZoneTriple = {
    center: NaN,
    edge: NaN,
    corner: NaN,
  };

  const upliftValidation: ZoneTriple = {
    center: NaN,
    edge: NaN,
    corner: NaN,
  };
  const upliftValidationExposed: ZoneTriple = {
    center: NaN,
    edge: NaN,
    corner: NaN,
  };

  const finalZone: ZoneTriple = {
    center: NaN,
    edge: NaN,
    corner: NaN,
  };
  const finalZoneExposed: ZoneTriple = {
    center: NaN,
    edge: NaN,
    corner: NaN,
  };

  const finalUtilizationPercent: ZoneTriple = {
    center: NaN,
    edge: NaN,
    corner: NaN,
  };
  const finalUtilizationPercentExposed: ZoneTriple = {
    center: NaN,
    edge: NaN,
    corner: NaN,
  };

  const attachmentsPerZone: ZoneTriple = {
    center: BASE_ATTACHMENTS_PER_MODULE,
    edge: BASE_ATTACHMENTS_PER_MODULE,
    corner: BASE_ATTACHMENTS_PER_MODULE,
  };
  const attachmentsPerZoneExposed: ZoneTriple = {
    center: BASE_ATTACHMENTS_PER_MODULE,
    edge: BASE_ATTACHMENTS_PER_MODULE,
    corner: BASE_ATTACHMENTS_PER_MODULE,
  };

  // ✅ For each zone, compute attachments independently for Zone & Exposed
  for (const z of ZONES) {
    // Zone 1/2/3 case
    {
      const res = computeCaseForAttachments(
        upforce_lb[z],
        upliftCapacity,
        shearValidation,
        input.attachmentsPerZone?.[z]
      );
      attachmentsPerZone[z] = res.attachments;
      perAttachmentKg[z] = res.perAttachmentKg;
      upliftValidation[z] = res.upliftValidation;
      finalZone[z] = res.finalUtilization;
      finalUtilizationPercent[z] = res.finalUtilizationPercent;
    }

    // Exposed 1/2/3 case
    {
      const resEx = computeCaseForAttachments(
        upforceExposed_lb[z],
        upliftCapacity,
        shearValidation,
        input.attachmentsPerZoneExposed?.[z]
      );
      attachmentsPerZoneExposed[z] = resEx.attachments;
      perAttachmentExposedKg[z] = resEx.perAttachmentKg;
      upliftValidationExposed[z] = resEx.upliftValidation;
      finalZoneExposed[z] = resEx.finalUtilization;
      finalUtilizationPercentExposed[z] = resEx.finalUtilizationPercent;
    }
  }

  // ✅ VALID only if ALL 6 (Zone + Exposed) ≤ 1
  const ok =
    finalZone.center <= 1 &&
    finalZone.edge <= 1 &&
    finalZone.corner <= 1 &&
    finalZoneExposed.center <= 1 &&
    finalZoneExposed.edge <= 1 &&
    finalZoneExposed.corner <= 1;

  return {
    systemId: "micro-rail",
    ok,

    uplift: {
      center: upforce_lb.center,
      edge: upforce_lb.edge,
      corner: upforce_lb.corner,
    },

    upliftExposed: {
      center: upforceExposed_lb.center,
      edge: upforceExposed_lb.edge,
      corner: upforceExposed_lb.corner,
    },

    perAttachmentKg: {
      center: perAttachmentKg.center,
      edge: perAttachmentKg.edge,
      corner: perAttachmentKg.corner,
    },

    perAttachmentExposedKg: {
      center: perAttachmentExposedKg.center,
      edge: perAttachmentExposedKg.edge,
      corner: perAttachmentExposedKg.corner,
    },

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

    validation: {
      sheetThickness_mm,
      screwsPerAttachment: SCREWS_PER_ATTACHMENT,

      // ✅ Base assumption (starting point, always 4)
      attachmentsPerModule: BASE_ATTACHMENTS_PER_MODULE,

      // ✅ Attachments actually used for each case
      attachmentsPerZone,
      attachmentsPerZoneExposed,

      shearFailMode,
      upliftTensionFailMode,

      shearCapacity,
      upliftCapacity,

      shearValidation,
      upliftValidation,
      upliftValidationExposed,

      finalUtilization: finalZone,
      finalUtilizationExposed: finalZoneExposed,

      finalUtilizationPercent,
      finalUtilizationPercentExposed,
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

      tKeyUsed_mm: tKey,
    },

    meta: { packVersion: "2026.01.MICRO-RAIL.v4" },
  };
}
