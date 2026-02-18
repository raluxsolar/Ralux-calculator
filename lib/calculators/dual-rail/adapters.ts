import { computeSurroundings, type RoofType, type SurroundingsInput } from "@/lib/surroundings";
import { computeMounting } from "@/lib/mountings";
import type { MountingInput } from "@/lib/mountings/types";
import type {
  FasteningRail,
  ModuleInfo,
  MountingState,
  SlantedCoverage,
  SlantedRoofMounting,
  SlantedSystemId,
} from "@/lib/calculators/types";
import type { DualRailCalcResult, DualRailUiState } from "./types";

const mapSystemId = (mountingSystem: string): SlantedSystemId => {
  const v = mountingSystem.toLowerCase();
  if (v.includes("clip")) return "clip-kr18";
  if (v.includes("domo")) return "domo";
  return "hanger";
};

const mapRoofType = (roofType: DualRailUiState["roofType"]): RoofType => {
  if (roofType === "Monoslope") return "monoslope";
  if (roofType === "Hip") return "hip";
  return "gable";
};

const buildCoverage = (): SlantedCoverage => ({
  coverageType: "standing-seam",
  seamSpacing: "",
  firstSeamAt: "",
  clipDistance: "",
  sheetQuality: "",
  sheetThickness: "",
});

const buildModule = (state: DualRailUiState): ModuleInfo => ({
  manufacturer: "",
  model: "",
  length: state.moduleHeight,
  width: state.moduleWidth,
  height: "",
  weight: state.moduleWeight,
  rated: "",
});

const buildSurroundingsInput = (state: DualRailUiState): SurroundingsInput => ({
  designCode: "USA – ASCE 7",
  elevation_m: Number(state.groundElevation),
  windSpeed_km_h: Number(state.windSpeed),
  exposureCategory: state.exposureCategory,
  buildingHeight_m: Number(state.buildingHeight),
  roofType: mapRoofType(state.roofType),
  roofSlope: state.roofSlope,
});

const resolveRails = (value: string): number => {
  const n = Number(value);
  if (Number.isFinite(n) && n > 0) return Math.max(1, Math.round(n));
  return 2;
};

const mapRailType = (railType: string): FasteningRail => {
  const key = railType.trim().toLowerCase();
  if (key === "omnia-2c") return "omnia-2c";
  if (key === "omnia-3c") return "omnia-3c";
  if (key === "ace") return "ace";
  return "omnia";
};

const buildMountingInput = (
  state: DualRailUiState,
  surroundings: ReturnType<typeof computeSurroundings>
): MountingInput => {
  const systemId = mapSystemId(state.mountingSystem);

  const slantedRoof: SlantedRoofMounting = {
    systemId,
    fastening: mapRailType(state.railType),
    roofType: mapRoofType(state.roofType),
    roofSlope: state.roofSlope,
    buildingHeight: state.buildingHeight,
    coverage: buildCoverage(),
  };

  const mounting: MountingState = {
    mountingType: "slanted",
    slantedRoof,
  };

  return {
    systemId,
    module: buildModule(state),
    mounting,
    surroundings,
    countryCode: state.countryCode,
    country: state.country,
    snowLoad_Pa: Number(state.snowLoad),
    numberOfRails: resolveRails(state.numberOfRails),
  };
};

export const calcDualRail = (state: DualRailUiState): DualRailCalcResult => {
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
