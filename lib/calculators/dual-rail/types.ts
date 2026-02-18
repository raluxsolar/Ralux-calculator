import type { MountingResult } from "@/lib/mountings/types";
import type { SurroundingsResult } from "@/lib/surroundings";

export type DualRailUiState = {
  countryCode?: string;
  country?: string;
  mountingSystem: string;
  railType: string;
  numberOfRails: string;
  moduleWidth: string;
  moduleHeight: string;
  moduleWeight: string;
  roofType: "Gable" | "Monoslope" | "Hip";
  roofSlope: string;
  buildingHeight: string;
  groundElevation: string;
  windSpeed: string;
  exposureCategory: "B" | "C" | "D";
  snowLoad: string;
};

export type DualRailCalcOk = {
  surroundings: SurroundingsResult;
  mounting: MountingResult;
};

export type DualRailCalcError = {
  error: string;
};

export type DualRailCalcResult = DualRailCalcOk | DualRailCalcError;
