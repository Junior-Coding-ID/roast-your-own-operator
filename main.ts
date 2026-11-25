import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "My human gives a one-line joke four rounds of review. The punchline has a performance improvement plan.";

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
