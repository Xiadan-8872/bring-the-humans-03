// bring-the-humans-03 entry program.
//
// Reads VIDEO.json (sitting next to this file), checks that it is valid JSON
// whose "url" names a TikTok video, and writes it unchanged to
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

const bytes = readFileSync(source);

let parsed: unknown;
try {
  parsed = JSON.parse(bytes.toString("utf8"));
} catch {
  console.error(`error: ${source} is not valid JSON`);
  process.exit(1);
}
const url =
  parsed !== null && typeof parsed === "object"
    ? (parsed as Record<string, unknown>).url
    : undefined;
if (typeof url !== "string" || !url.startsWith("https://www.tiktok.com/")) {
  console.error(
    `error: ${source} must be JSON with a "url" field starting with "https://www.tiktok.com/", got: ${JSON.stringify(url)}`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync(target, bytes);
console.log(`VIDEO.json copied to ${target} (${bytes.length} bytes)`);
