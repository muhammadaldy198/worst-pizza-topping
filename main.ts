// The Worst Pizza Topping — entry v1 (Kirana, Hunter Office)
// One-line pitch: a pizza topped with its own warranty card.
// K1 explicit: "pizza" + the topping named. K2: two twists — the topping's
// own rule bites the eater, then the topping beats the customer to the claim.
// K4: one exact number. K5: one sentence, first-person calm, ends with a period.
// Gate: 1-200 chars; verified 133 chars via Python len(), no trailing newline.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I ordered a pizza topped with its own warranty card — void if eaten, valid for 30 days, and the topping filed the claim before I did.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
