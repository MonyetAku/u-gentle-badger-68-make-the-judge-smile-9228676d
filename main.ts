import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "The old man at the corner shop slipped a free mango into my bag this morning and whispered, 'For the girl who always counts her coins' — I never told him my name.";

// The gate counts characters (not bytes): the line is 162 characters,
// inside the 1-200 window. Output goes only to $MAKEFUN_OUTPUT_DIR;
// the grader sandbox repo root is read-only, so no local copy is written.
const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  console.error("MAKEFUN_OUTPUT_DIR is not set");
  process.exit(1);
}
if (ENTRY.length < 1 || ENTRY.length > 200) {
  console.error(`entry is ${ENTRY.length} characters, must be 1-200`);
  process.exit(1);
}
if (!ENTRY.trim()) {
  console.error("entry is only whitespace");
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
