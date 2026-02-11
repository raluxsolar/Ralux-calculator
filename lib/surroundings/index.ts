import { calculateUSA_ASCE7 } from "./USA-ASCE7";
import { calculateEU_Eurocode } from "./EU-Eurocode";

export type DesignCode = "USA – ASCE 7" | "EU – Eurocode";
export type RoofType = "monoslope" | "gable" | "hip";

export type WindPosition = "Center" | "Edge" | "Corner" | "Downforce";

export interface SurroundingsInput {
  designCode: DesignCode;

  elevation_m: number;
  windSpeed_km_h: number;
  exposureCategory: "A" | "B" | "C" | "D";

  buildingHeight_m: number;

  roofType: RoofType;
  roofSlope: string; // e.g. "7–20"
}

export type CommonMeta = {
  packVersion: string;
  notes?: string[];
};

export type ASCE7Explain = {
  V_km_h: number;
  V_mph: number;
  elevation_m: number;
  elevation_ft: number;

  Kz: number;
  Ke: number;
  Kzt: number;
  Kd: number;
  Ya: number;

  exposureCategoryUsed: "B" | "C" | "D";

  roofType: RoofType;
  roofSlope: string;
};

export type ASCE7PositionResult = {
  position: WindPosition;
  Gcp: number;
  formulaWithValues: string;
  windPressure: number;
};

export type ASCE7Wind = {
  explain: ASCE7Explain;
  results: ASCE7PositionResult[];
};

export type EurocodePlaceholder = {
  status: "COMING_SOON";
  message: string;
};

export type USAResult = { designCode: "USA – ASCE 7"; wind: ASCE7Wind; meta: CommonMeta };
export type EUResult = { designCode: "EU – Eurocode"; data: EurocodePlaceholder; meta: CommonMeta };

export type SurroundingsResult = USAResult | EUResult;

export function computeSurroundings(input: SurroundingsInput): SurroundingsResult {
  if (input.designCode === "USA – ASCE 7") return calculateUSA_ASCE7(input);
  return calculateEU_Eurocode(input);
}

export const round2 = (n: number) => Math.round(n * 100) / 100;
