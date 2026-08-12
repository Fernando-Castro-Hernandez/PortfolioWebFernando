// Dev tool: turn the raw walkthrough captures into web-ready WebP.
//
// Sources live in content/tour-shots/ (Fernando drops the PNGs there straight
// from the app / n8n / Telegram). That folder is deliberately outside public/:
// the raw captures are unredacted and must never be served. This script is also
// the only place that knows the mapping from those filenames to the slugs the
// site imports, so renaming a capture never reaches the components.
//
// It also redacts third-party data before anything is published: the AlfaMascotas
// captures are real customer transfers, so the sender's name and the bank
// tracking key are blurred out. The originals stay untouched in the source
// folder; adjust or drop a REDACTIONS entry and re-run to change what is hidden.
//
// Usage: node scripts/tour-shots.mjs [--force]

import { existsSync, mkdirSync, readdirSync, statSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const SRC_DIR = "content/tour-shots";
const NOVUX_DIR = "public/images/novux";
const ALFA_DIR = "public/images/alfamascotas";

// Same budget as the certificate previews: legible at 2x in the lightbox,
// still under the weight ceiling in DESIGN.md §6.
const MAX_WIDTH = 1600;
const WEBP_QUALITY = 82;
const SIZE_BUDGET_KB = 150;

/**
 * Regions blurred before conversion, in source-image pixels. Only used for the
 * AlfaMascotas captures, which carry a real customer's name and a real bank
 * tracking key — neither belongs on a public portfolio.
 *
 * `sigma` is per region because the right amount depends on the type size:
 * enough to destroy the glyphs, not so much that the shape of the thing is lost
 * and the capture starts to look damaged.
 */
const REDACTIONS = {
  // Telegram bot reply (1377x915).
  "transferencia verificada.png": [
    { left: 440, top: 601, width: 340, height: 32, sigma: 16 }, // clave de rastreo
    { left: 380, top: 628, width: 330, height: 32, sigma: 16 }, // ordenante (sender name)
    // The receipt thumbnail: 5px type, so a light blur is already unreadable and
    // the bubble still reads as a bank receipt.
    { left: 900, top: 66, width: 148, height: 445, sigma: 4 },
  ],
  // Google Sheets ledger (1899x913).
  "Registro en Google Sheets.png": [
    { left: 583, top: 292, width: 655, height: 182, sigma: 12 }, // clave_rastreo + nombre_ordenante
  ],
};

/** Source file -> output slug, in the order the walkthrough tells the story. */
const NOVUX = [
  ["Inicio.png", "inicio"],
  ["Rutinas.png", "rutinas"],
  ["Ejercicios.png", "ejercicios"],
  ["Explorar.png", "explorar"],
  ["Analizar con IA 1.png", "analisis-invitacion"],
  ["Analizar con IA 2.png", "analisis-entrenador"],
  ["Asistente.png", "asistente-alcance"],
  ["Asistente 1.png", "asistente-datos"],
  ["Asistente 2.png", "asistente-guardarriel"],
  ["Historial.png", "historial"],
  ["Mediciones.png", "mediciones"],
  ["Progreso.png", "progreso"],
];

const ALFA = [
  ["Workflow en n8n.png", "workflow-n8n"],
  ["transferencia verificada.png", "telegram-verificado"],
  ["Registro en Google Sheets.png", "registro-sheets"],
];

const force = process.argv.includes("--force");
const results = [];

/**
 * Blurs each region hard enough that the glyphs are gone, then pastes it back.
 * Blur rather than a solid bar: it reads as deliberate masking without making
 * the screenshot look doctored.
 */
async function redact(image, regions) {
  const overlays = await Promise.all(
    regions.map(async ({ sigma, ...box }) => ({
      input: await image.clone().extract(box).blur(sigma).toBuffer(),
      left: box.left,
      top: box.top,
    })),
  );
  return sharp(await image.composite(overlays).toBuffer());
}

async function convert(sourceFile, slug, outDir) {
  const out = join(outDir, `${slug}.webp`);
  if (!force && existsSync(out)) {
    console.log(`  ${slug}.webp  (exists, skipped)`);
    return;
  }

  const source = join(SRC_DIR, sourceFile);
  if (!existsSync(source)) {
    console.warn(`  ! missing source for ${slug}: ${source}`);
    return;
  }

  let image = sharp(source);
  const regions = REDACTIONS[sourceFile];
  if (regions) image = await redact(image, regions);

  await image
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY })
    .toFile(out);

  const kb = Math.round(statSync(out).size / 1024);
  results.push({ slug, kb });
  console.log(`  ${slug}.webp  ${kb} KB${kb > SIZE_BUDGET_KB ? "  <-- over budget" : ""}`);
}

for (const dir of [NOVUX_DIR, ALFA_DIR]) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
}

// The previous walkthrough used a different set of captures; --force also
// clears whatever is no longer referenced so stale files never ship.
if (force) {
  const keep = new Set([
    ...NOVUX.map(([, slug]) => `${slug}.webp`),
    ...ALFA.map(([, slug]) => `${slug}.webp`),
  ]);
  for (const [dir, list] of [
    [NOVUX_DIR, NOVUX],
    [ALFA_DIR, ALFA],
  ]) {
    void list;
    for (const file of readdirSync(dir)) {
      if (!keep.has(file)) {
        unlinkSync(join(dir, file));
        console.log(`  removed stale ${file}`);
      }
    }
  }
}

console.log("Novux Tracker");
for (const [file, slug] of NOVUX) await convert(file, slug, NOVUX_DIR);

console.log("AlfaMascotas");
for (const [file, slug] of ALFA) await convert(file, slug, ALFA_DIR);

const over = results.filter((r) => r.kb > SIZE_BUDGET_KB);
if (over.length > 0) {
  console.error(
    `\n${over.length} shot(s) over the ${SIZE_BUDGET_KB} KB budget: ` +
      `${over.map((r) => r.slug).join(", ")}. Lower WEBP_QUALITY and re-run with --force.`,
  );
  process.exitCode = 1;
}
