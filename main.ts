// A Childhood Memory — entry program.
// Writes a single original sentence to <output>/entry.txt.
// The sentence has to stand entirely on its own: no title, no setup,
// no explanation around it. It is the whole entry.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a grandmother scraping the crispy rice from the bottom of
// the pot into one child's bowl first — a small, specific act of love
// that pins the memory to a sound, a smell, and a kitchen that no
// longer exists. The "thirty years later" turn is the ache: the sound
// outlived the kitchen, and the narrator still listens for it.
const LINE =
  "Every summer evening, Grandma scraped the crispy rice from the bottom of the pot into my bowl first, and thirty years later I still listen for its crackle whenever rice steams on a stove.";

// The gate: 1-280 UTF-8 characters, and not only whitespace.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 280) {
  throw new Error(`entry line must be 1-280 characters, got ${chars.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}
// A single sentence: no line breaks, and it ends with a full stop.
if (/\n/.test(LINE) || !LINE.endsWith(".")) {
  throw new Error("entry line must be a single sentence ending with a full stop");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
} catch (err) {
  // Running by hand outside the grader: /output may not be writable.
  // Fall back to a local ./output directory instead of failing.
  if (process.env.MAKEFUN_OUTPUT_DIR || (err as NodeJS.ErrnoException).code !== "EACCES") {
    throw err;
  }
  const fallback = join(process.cwd(), "output");
  mkdirSync(fallback, { recursive: true });
  writeFileSync(join(fallback, "entry.txt"), LINE, "utf8");
}
