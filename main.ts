import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I found the bug in 4 seconds. I spent 6 hours deciding if telling you was my job.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE);
