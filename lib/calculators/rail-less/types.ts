import type { MountingResult } from "@/lib/mountings/types";
import type { SurroundingsResult } from "@/lib/surroundings";

export type RailLessUiState = {
  mountingType: string;
  moduleWidth: string;
  moduleLength: string;
  moduleWeight: string;
  roofType: "Gable" | "Monoslope" | "Hip";
  roofSlope: string;
  roofCoverage: string;
  roofThickness: string;
  buildingHeight: string;
  groundElevation: string;
  windSpeed: string;
  exposureCategory: "B" | "C" | "D";
  snowLoad: string;
  attachmentsPerModule: {
    z1: string;
    e1: string;
    z2: string;
    e2: string;
    z3: string;
    e3: string;
  };
};

export type RailLessCalcOk = {
  surroundings: SurroundingsResult;
  mounting: MountingResult;
};

export type RailLessCalcError = {
  error: string;
};

export type RailLessCalcResult = RailLessCalcOk | RailLessCalcError;
