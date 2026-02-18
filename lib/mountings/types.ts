// lib/mountings/types.ts
import type { ModuleInfo, MountingState } from "@/lib/calculators/types";
import type { SurroundingsResult } from "@/lib/surroundings";

export type ZoneTriple = {
  center: number;
  edge: number;
  corner: number;
};

export type MountingInput = {
  systemId: string;

  module: ModuleInfo;
  mounting: MountingState;

  surroundings: SurroundingsResult;

  // Optional country context (used by dual-rail control span tables)
  countryCode?: string;
  country?: string;

  // ✅ explicitly pass snow load as Pa (from Zustand surroundings.snowLoad)
  snowLoad_Pa: number;

  // Optional manual inputs (from UI)
  attachmentsPerZone?: ZoneTriple;
  attachmentsPerZoneExposed?: ZoneTriple;

  // Optional: used by dual-rail systems (clip-kr18, hanger, domo)
  numberOfRails?: number;
};

export type MountingResult = {
  systemId: string;
  ok: boolean;

  // Base upforce per zone (Zone 1/2/3)
  uplift?: ZoneTriple;

  // ✅ New: Exposed upforce per zone (Exposed 1/2/3)
  upliftExposed?: ZoneTriple;

  // Uplift per attachment (kg) for Zone 1/2/3
  perAttachmentKg?: ZoneTriple;

  // ✅ New: Uplift per attachment (kg) for Exposed 1/2/3
  perAttachmentExposedKg?: ZoneTriple;

  downforce?: {
    windDown_lb: number;
    windSnowDown_lb: number;
    deadSnowDown_lb: number;
    worstDown_lb: number;
  };

  downforcePerAttachmentKg?: number;

  shear?: {
    deadSnowShear_lb: number;
    worstShear_lb: number;
  };

  shearPerAttachmentKg?: number;

  validation?: {
    sheetThickness_mm: number;

    // ✅ Base assumption (starting value) — always 4 for Micro
    attachmentsPerModule: number;

    // ✅ Attachments actually used for each Zone 1/2/3
    attachmentsPerZone?: ZoneTriple;

    // ✅ Attachments actually used for each Exposed 1/2/3
    attachmentsPerZoneExposed?: ZoneTriple;

    screwsPerAttachment: number;

    shearFailMode: number;
    upliftTensionFailMode: number;

    shearCapacity: number;
    upliftCapacity: number;

    shearValidation: number;

    // Uplift validation for Zone 1/2/3
    upliftValidation: ZoneTriple;

    // ✅ Uplift validation for Exposed 1/2/3
    upliftValidationExposed?: ZoneTriple;

    // ✅ ratios only
    finalUtilization: ZoneTriple;

    // ✅ ratios for Exposed 1/2/3
    finalUtilizationExposed?: ZoneTriple;

    // ✅ percent per zone ONLY (computed in calculator)
    finalUtilizationPercent: ZoneTriple;

    // ✅ percent for Exposed 1/2/3
    finalUtilizationPercentExposed?: ZoneTriple;
  };

  explain: Record<string, unknown>;
  meta?: { packVersion: string };
};
