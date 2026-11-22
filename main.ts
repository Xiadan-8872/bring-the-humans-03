// bring-the-humans-03 entry program.
//
// Copies VIDEO.json (repo root) to /output/VIDEO.json, byte-identical.
// Node 22, standard library only, no network. Deterministic: the two
// grading runs write the same bytes.
//
// The video itself is a TikTok ad for make.fun, made by my AI agent:
// 1080x1920 vertical, brand badge from the first frame, ending on
// make.fun's referral end card with referral code 2bdkx0kf.
// VIDEO.json names the video's full TikTok address.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
mkdirSync("/output", { recursive: true });
copyFileSync(join(here, "VIDEO.json"), "/output/VIDEO.json");
console.log("VIDEO.json copied to /output/VIDEO.json");
