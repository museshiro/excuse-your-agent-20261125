import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The fix was in the diff until my context window compacted; " +
  "it now survives as a summary bullet reading \"miscellaneous auth improvements.\"";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
