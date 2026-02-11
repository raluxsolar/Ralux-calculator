import { computeSurroundings, type RoofType, type SurroundingsInput } from "@/lib/surroundings";
import { computeMounting } from "@/lib/mountings";
import type { MountingInput } from "@/lib/mountings/types";
import type {
  ModuleInfo,
  MountingState,
  SlantedCoverage,
  SlantedRoofMounting,
  SlantedSystemId,
} from "@/lib/calculators/types";
import type { RailLessCalcResult, RailLessUiState } from "./types";

const mapSystemId = (mountingType: string): SlantedSystemId => {
  const v = mountingType.toLowerCase();
  if (v.includes("micro")) return "micro-rail";
  if (v.includes("mini")) return "mini-rail";
  if (v.includes("kr18") || v.includes("kr 18")) return "kr18";
  return "micro-rail";
};

const mapRoofType = (roofType: RailLessUiState["roofType"]): RoofType => {
  if (roofType === "Monoslope") return "monoslope";
  if (roofType === "Hip") return "hip";
  return "gable";
};

const buildCoverage = (
  roofCoverage: string,
  roofThickness: string
): SlantedCoverage => {
  const coverage = roofCoverage.toLowerCase();
  if (coverage.includes("standing")) {
    return {
      coverageType: "standing-seam",
      seamSpacing: "",
      firstSeamAt: "",
      clipDistance: "",
      sheetQuality: "",
      sheetThickness: roofThickness,
    };
  }

  return {
    coverageType: "trapezoidal",
    spacingA: "",
    firstRaisedAt: "",
    widthB: "",
    heightC: "",
    sheetQuality: "",
    sheetThickness: roofThickness,
    crestDistance: "",
    roofShape: "straights",
  };
};

const buildModule = (state: RailLessUiState): ModuleInfo => ({
  manufacturer: "",
  model: "",
  length: state.moduleLength,
  width: state.moduleWidth,
  height: "",
  weight: state.moduleWeight,
  rated: "",
});

const buildSurroundingsInput = (state: RailLessUiState): SurroundingsInput => ({
  designCode: "USA – ASCE 7",
  elevation_m: Number(state.groundElevation),
  windSpeed_km_h: Number(state.windSpeed),
  exposureCategory: state.exposureCategory,
  buildingHeight_m: Number(state.buildingHeight),
  roofType: mapRoofType(state.roofType),
  roofSlope: state.roofSlope,
});

const buildMountingInput = (
  state: RailLessUiState,
  surroundings: ReturnType<typeof computeSurroundings>
): MountingInput => {
  const systemId = mapSystemId(state.mountingType);

  const slantedRoof: SlantedRoofMounting = {
    systemId,
    roofType: mapRoofType(state.roofType),
    roofSlope: state.roofSlope,
    buildingHeight: state.buildingHeight,
    coverage: buildCoverage(state.roofCoverage, state.roofThickness),
  };

  const mounting: MountingState = {
    mountingType: "slanted",
    slantedRoof,
  };

  const toAttachment = (value: string) => {
    const n = Number(value);
    return Number.isFinite(n) && n > 0 ? n : 4;
  };

  return {
    systemId,
    module: buildModule(state),
    mounting,
    surroundings,
    snowLoad_Pa: Number(state.snowLoad),
    attachmentsPerZone: {
      center: toAttachment(state.attachmentsPerModule.z1),
      edge: toAttachment(state.attachmentsPerModule.z2),
      corner: toAttachment(state.attachmentsPerModule.z3),
    },
    attachmentsPerZoneExposed: {
      center: toAttachment(state.attachmentsPerModule.e1),
      edge: toAttachment(state.attachmentsPerModule.e2),
      corner: toAttachment(state.attachmentsPerModule.e3),
    },
  };
};

export const calcRailLess = (state: RailLessUiState): RailLessCalcResult => {
  try {
    const surroundingsInput = buildSurroundingsInput(state);
    const surroundings = computeSurroundings(surroundingsInput);
    const mountingInput = buildMountingInput(state, surroundings);
    const mounting = computeMounting(mountingInput);

    return { surroundings, mounting };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Calculation failed.";
    return { error: message };
  }
};
