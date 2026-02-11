// lib/mountings/index.ts
import type { MountingInput, MountingResult } from "./types";

import { calcMicroRail } from "./systems/micro";
import { calcMiniRail } from "./systems/mini";
import { calcKr18 } from "./systems/kr18";
import { calcHanger } from "./systems/hanger";
import { calcDomo } from "./systems/domo";
import { calcClipKr18 } from "./systems/clip-kr18";

const registry: Record<string, (i: MountingInput) => MountingResult> = {
  "micro-rail": calcMicroRail,
  "mini-rail": calcMiniRail,
  kr18: calcKr18,
  hanger: calcHanger,
  domo: calcDomo,
  "clip-kr18": calcClipKr18,
};

export function computeMounting(input: MountingInput): MountingResult {
  const fn = registry[input.systemId];
  if (!fn) {
    return {
      systemId: input.systemId,
      ok: false,
      explain: { reason: "No calculator registered for this systemId." },
    };
  }
  return fn(input);
}
