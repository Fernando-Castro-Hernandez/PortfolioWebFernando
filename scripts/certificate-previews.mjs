// Dev tool: build web-ready previews of every certificate.
//
// Renders page 1 of each PDF in public/certificates/ with pdftoppm (poppler),
// then compresses it to WebP with sharp into public/images/certificates/.
// A few certificates only exist as photos of the printed sheet; those are
// listed in IMAGE_SOURCES and converted straight from content/certificates/.
//
// Usage: node scripts/certificate-previews.mjs [--force]
//
// Requires poppler on PATH (pdftoppm). On Windows it ships with MiKTeX;
// otherwise: winget install oschwartz10612.Poppler
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, extname, join } from "node:path";
import sharp from "sharp";

const PDF_DIR = "public/certificates";
const SCAN_DIR = "content/certificates";
const OUT_DIR = "public/images/certificates";

// Certificates that exist only as a photo of the printed sheet (no PDF).
// Keyed by the slug the site refers to them by.
const IMAGE_SOURCES = {
  "global-game-jam-2026": "Certificate of Participation Fernado Castro GGJ.jpeg",
  "invent-for-the-planet-2026": "Certificate of Participation Fernado Castro IFTP.jpeg",
};

// 1600px keeps the fine print legible when the lightbox fills a 2x display,
// while staying inside the weight budget from DESIGN.md §6.
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 82;
const SIZE_BUDGET_KB = 150;
const RENDER_DPI = 150;

const force = process.argv.includes("--force");

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const scratch = mkdtempSync(join(tmpdir(), "cert-preview-"));
const results = [];

function toWebp(inputPath, slug) {
  const out = join(OUT_DIR, `${slug}.webp`);
  return sharp(inputPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(out)
    .then(() => {
      const kb = Math.round(statSync(out).size / 1024);
      results.push({ slug, kb });
      const flag = kb > SIZE_BUDGET_KB ? "  <-- over budget" : "";
      console.log(`  ${slug}.webp  ${kb} KB${flag}`);
    });
}

try {
  const pdfs = readdirSync(PDF_DIR).filter((f) => extname(f).toLowerCase() === ".pdf");
  const jobs = [];

  for (const pdf of pdfs) {
    const slug = basename(pdf, extname(pdf));
    if (!force && existsSync(join(OUT_DIR, `${slug}.webp`))) {
      console.log(`  ${slug}.webp  (exists, skipped)`);
      continue;
    }
    const stem = join(scratch, slug);
    // -f 1 -l 1: some certificates carry a second page of terms we don't want.
    execFileSync("pdftoppm", [
      "-jpeg",
      "-jpegopt",
      "quality=95",
      "-r",
      String(RENDER_DPI),
      "-f",
      "1",
      "-l",
      "1",
      "-singlefile",
      join(PDF_DIR, pdf),
      stem,
    ]);
    jobs.push(toWebp(`${stem}.jpg`, slug));
  }

  for (const [slug, file] of Object.entries(IMAGE_SOURCES)) {
    if (!force && existsSync(join(OUT_DIR, `${slug}.webp`))) {
      console.log(`  ${slug}.webp  (exists, skipped)`);
      continue;
    }
    const source = join(SCAN_DIR, file);
    if (!existsSync(source)) {
      console.warn(`  ! missing source for ${slug}: ${source}`);
      continue;
    }
    jobs.push(toWebp(source, slug));
  }

  await Promise.all(jobs);

  const over = results.filter((r) => r.kb > SIZE_BUDGET_KB);
  if (over.length > 0) {
    console.error(
      `\n${over.length} preview(s) over the ${SIZE_BUDGET_KB} KB budget: ` +
        `${over.map((r) => r.slug).join(", ")}. Lower WEBP_QUALITY and re-run with --force.`,
    );
    process.exitCode = 1;
  }
} finally {
  rmSync(scratch, { recursive: true, force: true });
}
