// lib/mountings/systems/hanger.ts
import type { MountingInput, MountingResult, ZoneTriple } from "../types";
import type { SurroundingsResult } from "@/lib/surroundings";

const M_TO_FT = 3.28084;
const KG_TO_LB = 2.20462262185;
const PA_TO_PSI = 1 / 6894.757293168; // Pa -> psi
const PSI_TO_PSF = 144; // psi -> lb/ft^2
const LB_TO_KG = 0.45359237;

const BASE_ATTACHMENTS_PER_MODULE = 4;

const PSF_TO_PA = 47.8803;

type Pos = "Center" | "Edge" | "Corner" | "Downforce";

function getWindPressurePsf(sr: SurroundingsResult, pos: Pos): number {
  if (sr.designCode === "USA – ASCE 7") {
    const found = sr.wind.results.find((r) => r.position === pos);
    if (!found) throw new Error(`Wind pressure "${pos}" not found in surroundings result.`);
    return Number(found.windPressure);
  }
  throw new Error("Hanger currently requires USA – ASCE 7 surroundings result.");
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

function safeMin(a: number, b: number): number {
  const fa = Number.isFinite(a);
  const fb = Number.isFinite(b);
  if (fa && fb) return Math.min(a, b);
  if (fa) return a;
  if (fb) return b;
  return Number.NaN;
}

// ✅ percent rule: ceil to integer percent
function pctCeil(ratio: number): number {
  return Number.isFinite(ratio) ? Math.ceil(ratio * 100) : NaN;
}

function resolveRails(input: MountingInput): number {
  const n = Number(input.numberOfRails);
  if (Number.isFinite(n) && n > 0) return Math.max(1, Math.round(n));
  return 2;
}

const FASTENING_TABLE: Record<string, { label: string; I_in4: number; S_in3: number }> = {
  "omnia-3c": { label: "Omnia 3C", I_in4: 0.1, S_in3: 0.123002421 },
  "omnia-2c": { label: "Omnia 2C", I_in4: 0.12, S_in3: 0.139051094 },
  omnia: { label: "Omnia", I_in4: 0.19509291, S_in3: 0.19821439 },
  ace: { label: "ACE", I_in4: 1.487748, S_in3: 0.749480338 },

  // Store enum mapping
  "omnia-light": {
    label: "Omnia 2C (mapped from omnia-light)",
    I_in4: 0.12,
    S_in3: 0.139051094,
  },
};

type SpanCaseKey =
  | "zone_center"
  | "zone_edge"
  | "zone_corner"
  | "exposed_center"
  | "exposed_edge"
  | "exposed_corner"
  | "downforce_worst";

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

  asd_result_in: number;
  clear_limit_by_deflection_in: number;

  maximum_design_span_in: number;
  maximum_design_span_mm: number;
  maximum_design_span_m: number;

  useful_reaction_lb: number;
  useful_reaction_kg: number;

  uses_L_ruler_efforts_lb: number;
  uses_L_ruler_efforts_kg: number;
};

export function calcHanger(input: MountingInput): MountingResult {
  // ---------- Inputs ----------
  const moduleWidth_m = parseLengthToMeters(input.module.width, "Module width");
  const moduleLength_m = parseLengthToMeters(input.module.length, "Module length");
  const moduleWeight_kg = parseNumberStrict(input.module.weight, "Module weight (kg)");
  const snowLoad_Pa = parseNumberStrict(input.snowLoad_Pa, "Snow load (Pa)");

  const slanted = input.mounting?.slantedRoof;
  if (!slanted) throw new Error("Mounting slantedRoof is missing/invalid.");
  if (!slanted.roofSlope) throw new Error("Roof slope is missing in mounting step.");

  const fasteningKey = String(slanted.fastening ?? "").trim().toLowerCase();
  if (!fasteningKey) throw new Error("Fastening is missing in mounting step (slantedRoof.fastening).");
  const fastening = FASTENING_TABLE[fasteningKey];
  if (!fastening) {
    const allowed = Object.keys(FASTENING_TABLE).join(", ");
    throw new Error(`Unknown fastening "${fasteningKey}". Allowed: ${allowed}`);
  }

  const { raw: roofSlopeRange, minDeg, maxDeg } = parseRoofSlopeRange(slanted.roofSlope);
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

  // ✅ Required: wind uplift = upforce load combination × -1
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
  const deadSnowShear_lb = (panelDL_lb + panelSL_lb) * Math.sin(roofSlopeRad_min);
  const worstShear_lb = deadSnowShear_lb;

  // ---------- Rail span analysis constants ----------
  const E_ksi = 10000;
  const Fy_ksi = 21;
  const Omega_b = 1.65;
  const Fb_ksi = Fy_ksi / Omega_b;

  const E_psi = E_ksi * 1000;
  const Fb_psi = Fb_ksi * 1000;

  const rails = resolveRails(input);
  const deflDen = 240;

  // Module length/width in inches from meters
  const moduleLength_in = moduleLength_m / 0.0254;
  const moduleWidth_in = moduleWidth_m / 0.0254;

  // Module area (ft^2) = (L_in * W_in) / 144
  const moduleArea_ft2 = (moduleLength_in * moduleWidth_in) / 144;

  // Worst case down checking (psf)
  const worstDownCheck_psf = worstDown_lb / moduleArea_ft2;

  // Tributary width per rail (ft)
  const tributaryWidthPerRail_ft = (moduleLength_in / rails) / 12;

  function computeSpanAnalysisCase(key: SpanCaseKey, load_lb: number): SpanAnalysisCase {
    const asdWind_psf = load_lb / moduleArea_ft2;

    const servicePressure_psf = Math.max(asdWind_psf, worstDownCheck_psf);
    const pressureEfforts_psf = Math.max(asdWind_psf, worstDownCheck_psf);

    const linearService_plf = tributaryWidthPerRail_ft * servicePressure_psf;
    const linearService_pli = linearService_plf / 12;

    const linearStress_plf = tributaryWidthPerRail_ft * pressureEfforts_psf;
    const linearStress_pli = linearStress_plf / 12;

    const asdResult_in = safeSqrt((8 * Fb_psi * fastening.S_in3) / linearStress_pli);

    const clearLimit_in = safeCbrt(
      (384 * E_psi * fastening.I_in4) / (5 * linearService_pli * deflDen)
    );

    const maxSpan_in = safeMin(clearLimit_in, asdResult_in);

    const maxSpan_mm = maxSpan_in * 25.4;
    const maxSpan_m = maxSpan_mm / 1000;

    const reaction_lb = (linearService_pli * maxSpan_in) / 2;
    const reaction_kg = reaction_lb / KG_TO_LB;

    const efforts_lb = (linearStress_pli * maxSpan_in) / 2;
    const efforts_kg = efforts_lb / KG_TO_LB;

    return {
      key,
      wind_uplift_lb: load_lb,
      asd_wind_psf: asdWind_psf,

      worst_down_check_psf: worstDownCheck_psf,

      service_pressure_asd_deflection_psf: servicePressure_psf,
      pressure_asd_efforts_psf: pressureEfforts_psf,

      tributary_width_per_rail_ft: tributaryWidthPerRail_ft,

      linear_service_load_plf: linearService_plf,
      linear_service_load_pli: linearService_pli,

      linear_load_stresses_plf: linearStress_plf,
      linear_load_stresses_pli: linearStress_pli,

      asd_result_in: asdResult_in,
      clear_limit_by_deflection_in: clearLimit_in,

      maximum_design_span_in: maxSpan_in,
      maximum_design_span_mm: maxSpan_mm,
      maximum_design_span_m: maxSpan_m,

      useful_reaction_lb: reaction_lb,
      useful_reaction_kg: reaction_kg,

      uses_L_ruler_efforts_lb: efforts_lb,
      uses_L_ruler_efforts_kg: efforts_kg,
    };
  }

  const spanAnalysisCases: SpanAnalysisCase[] = [
    computeSpanAnalysisCase("zone_center", windUplift_lb.center),
    computeSpanAnalysisCase("zone_edge", windUplift_lb.edge),
    computeSpanAnalysisCase("zone_corner", windUplift_lb.corner),

    computeSpanAnalysisCase("exposed_center", windUpliftExposed_lb.center),
    computeSpanAnalysisCase("exposed_edge", windUpliftExposed_lb.edge),
    computeSpanAnalysisCase("exposed_corner", windUpliftExposed_lb.corner),

    computeSpanAnalysisCase("downforce_worst", worstDown_lb),
  ];

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

  // ---------------- Summary tables calculations ----------------

  const span_m = {
    center_zone: zoneCenter.maximum_design_span_m,
    edge_zone: zoneEdge.maximum_design_span_m,
    corner_zone: zoneCorner.maximum_design_span_m,
    center_exposed: expCenter.maximum_design_span_m,
    edge_exposed: expEdge.maximum_design_span_m,
    corner_exposed: expCorner.maximum_design_span_m,
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
    center: zoneCenter.useful_reaction_kg,
    edge: zoneEdge.useful_reaction_kg,
    corner: zoneCorner.useful_reaction_kg,
  };
  const upliftPerAttachmentKg_exposed = {
    center: expCenter.useful_reaction_kg,
    edge: expEdge.useful_reaction_kg,
    corner: expCorner.useful_reaction_kg,
  };

  const downforcePerAttachmentKg = downWorst.useful_reaction_kg;

  // Shear per attachment (kg) — per your steps
  const shearLineLoad_lb_per_ft = deadSnowShear_lb * tributaryWidthPerRail_ft;
  const shearLineLoad_lb_per_in = shearLineLoad_lb_per_ft / 12;

  const governingSpan_m = Math.max(
    span_m.center_zone,
    span_m.edge_zone,
    span_m.corner_zone,
    span_m.center_exposed,
    span_m.edge_exposed,
    span_m.corner_exposed
  );

  const shearReaction_lb = (shearLineLoad_lb_per_in * governingSpan_m) / 2;
  const shearPerAttachmentKg = shearReaction_lb * LB_TO_KG;

  const upliftCap = 154;
  const downforceCap = 139;
  const shearCap = 51;

  function buildValidation(upliftKg: number) {
    const upliftRatio = upliftKg / upliftCap;
    const downRatio = downforcePerAttachmentKg / downforceCap;
    const shearRatio = shearPerAttachmentKg / shearCap;

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
      downforceKg: downforcePerAttachmentKg,
      shearKg: shearPerAttachmentKg,
    },
    {
      area: "Center",
      zone: "Exposed 1",
      span_m: span_m.center_exposed,
      windPressure_Pa: windPressurePa_exposed.center,
      upliftKg: upliftPerAttachmentKg_exposed.center,
      downforceKg: downforcePerAttachmentKg,
      shearKg: shearPerAttachmentKg,
    },
    {
      area: "Edge",
      zone: "Zone 2",
      span_m: span_m.edge_zone,
      windPressure_Pa: windPressurePa_zone.edge,
      upliftKg: upliftPerAttachmentKg_zone.edge,
      downforceKg: downforcePerAttachmentKg,
      shearKg: shearPerAttachmentKg,
    },
    {
      area: "Edge",
      zone: "Exposed 2",
      span_m: span_m.edge_exposed,
      windPressure_Pa: windPressurePa_exposed.edge,
      upliftKg: upliftPerAttachmentKg_exposed.edge,
      downforceKg: downforcePerAttachmentKg,
      shearKg: shearPerAttachmentKg,
    },
    {
      area: "Corner",
      zone: "Zone 3",
      span_m: span_m.corner_zone,
      windPressure_Pa: windPressurePa_zone.corner,
      upliftKg: upliftPerAttachmentKg_zone.corner,
      downforceKg: downforcePerAttachmentKg,
      shearKg: shearPerAttachmentKg,
    },
    {
      area: "Corner",
      zone: "Exposed 3",
      span_m: span_m.corner_exposed,
      windPressure_Pa: windPressurePa_exposed.corner,
      upliftKg: upliftPerAttachmentKg_exposed.corner,
      downforceKg: downforcePerAttachmentKg,
      shearKg: shearPerAttachmentKg,
    },
  ];

  const validationRows = rows.map((r) => {
    const v = buildValidation(r.upliftKg);
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
    systemId: "hanger",
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
    downforcePerAttachmentKg: downforcePerAttachmentKg,

    shear: {
      deadSnowShear_lb,
      worstShear_lb,
    },
    shearPerAttachmentKg: shearPerAttachmentKg,

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

      hangerSpanAnalysis: {
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

      hangerTables: {
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
          deadSnowShear_lb,
          tributaryWidthPerRail_ft,
          shearLineLoad_lb_per_ft,
          shearLineLoad_lb_per_in,
          governingSpan_m,
          shearReaction_lb,
          shearPerAttachmentKg,
        },
      },
    },

    meta: { packVersion: "2026.01.HANGER.v3" },
  };
}
