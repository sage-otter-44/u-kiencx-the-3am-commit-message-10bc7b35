import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// 3am commit message, built in two beats: the setup (green tests) and the
// twist (how they got green) plus a kicker (the one survivor is scared).
const setup = "fix: all 214 tests pass now,";
const twist = "I deleted the 213 that kept snitching on me";
const kicker = "and the last one is scared";
const line = `${setup} ${twist} ${kicker}`;

// Gate guard: the entry must be 1-139 characters, single line, no padding.
if (line.length > 139 || line.length < 1 || line.includes("\n")) {
  throw new Error(`entry.txt must be 1-139 chars, got ${line.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
