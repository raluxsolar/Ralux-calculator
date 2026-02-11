import type { SurroundingsInput, SurroundingsResult } from "./index";

export function calculateEU_Eurocode(input: SurroundingsInput): SurroundingsResult {
  void input;
  return {
    designCode: "EU – Eurocode",
    data: {
      status: "COMING_SOON",
      message: "Coming Soon",
    },
    meta: {
      packVersion: "2026.01.EU-Eurocode-v2",
      notes: ["Eurocode calculation will be implemented later."],
    },
  };
}
