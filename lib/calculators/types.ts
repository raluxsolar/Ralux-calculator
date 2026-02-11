export type MountingType = "ground" | "flat" | "carport" | "slanted";

export type SlantedSystemId =
  | "kr18"
  | "micro-rail"
  | "mini-rail"
  | "clip-kr18"
  | "domo"
  | "hanger";

export type FasteningRail =
  | "omnia-light"
  | "omnia"
  | "ace"
  | "omnia-2c"
  | "omnia-3c";

export type RoofType = "monoslope" | "gable" | "hip";

export type CoverageKind =
  | "trapezoidal"
  | "standing-seam"
  | "corrugated"
  | "wood"
  | "sandwich"
  | "tiles"
  | "fiber-cement";

export type TileType = "portuguese" | "marseille" | "flat";
export type RoofShape = "straights" | "curved";

export interface SlantedTrapezoidalCoverage {
  coverageType: "trapezoidal";
  spacingA: string;
  firstRaisedAt: string;
  widthB: string;
  heightC: string;
  sheetQuality: string;
  sheetThickness: string;
  crestDistance: string;
  roofShape: RoofShape;
}

export interface SlantedStandingSeamCoverage {
  coverageType: "standing-seam";
  seamSpacing: string;
  firstSeamAt: string;
  clipDistance: string;
  sheetQuality: string;
  sheetThickness: string;
}

export interface SlantedTilesCoverage {
  coverageType: "tiles";
  tileType: TileType;
}

export interface SlantedSimpleCoverage {
  coverageType: "corrugated" | "wood" | "sandwich" | "fiber-cement";
}

export type SlantedCoverage =
  | SlantedTrapezoidalCoverage
  | SlantedStandingSeamCoverage
  | SlantedTilesCoverage
  | SlantedSimpleCoverage;

export interface SlantedRoofMounting {
  systemId: SlantedSystemId;
  fastening?: FasteningRail;

  roofType: RoofType;
  roofSlope: string;
  buildingHeight: string;

  coverage: SlantedCoverage;
}

export interface MountingState {
  mountingType: MountingType | "";
  slantedRoof?: SlantedRoofMounting | null;
}

export type ModuleOrientation = "landscape" | "portrait";

export interface ModuleInfo {
  manufacturer: string;
  model: string;
  length: string; // mm or m (input normalized by calculators)
  width: string; // mm or m
  height: string; // thickness, mm
  weight: string; // kg
  rated: string; // Wp
  verified?: boolean;

  orientation?: ModuleOrientation;
  clampType?: "Zeta" | "Universal clamp";
  clampColor?: "Silver" | "Black";
}
