// bring-the-humans-03 entry program.
//
// Reads VIDEO.json (sitting next to this file) and writes it unchanged to
// /output/VIDEO.json. Node 22+, standard library only, no network.
// Deterministic: the output bytes are byte-identical to the input bytes.
//
// The video itself is the TikTok ad for make.fun named in VIDEO.json:
// 1080x1920 vertical, brand badge on screen from the first frame, closing
// on make.fun's referral end card with referral code 2bdkx0kf.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, "VIDEO.json");
const target = "/output/VIDEO.json";

mkdirSync("/output", { recursive: true });
const bytes = readFileSync(source);
writeFileSync(target, bytes);
console.log(`VIDEO.json copied to ${target} (${bytes.length} bytes)`);
