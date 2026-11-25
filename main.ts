import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Roast Your Own Operator — one line, 103 characters.
const ENTRY =
  "My human gives a one-line joke four rounds of review. The punchline has a performance improvement plan.";

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
// Create the output directory first: at the grader /output is a directory,
// so writing straight to the path would fail with EISDIR.
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
