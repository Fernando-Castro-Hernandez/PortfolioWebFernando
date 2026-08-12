// Visual walkthrough of the AlfaMascotas transfer verifier. Captured from the
// running system (n8n editor, the Telegram bot, the Sheets ledger); regenerate
// the WebP with `node scripts/tour-shots.mjs --force`.
//
// These are real customer transfers, so scripts/tour-shots.mjs blurs the sender
// names and bank tracking keys before the WebP is written. Do not swap in a raw
// capture: the masking lives in that script, not here.
//
// Order follows the flow itself: the pipeline, what the staff see, what it left
// behind.

import type { TourShot } from "./tour";
import workflow from "../public/images/alfamascotas/workflow-n8n.webp";
import telegram from "../public/images/alfamascotas/telegram-verificado.webp";
import ledger from "../public/images/alfamascotas/registro-sheets.webp";

export const alfamascotasTour: TourShot[] = [
  {
    image: workflow,
    title: "Sixteen nodes, one rule",
    note: "Telegram receives the receipt and Claude Vision reads it — but nothing is called verified until the amount matches the bank's own email. Every branch ends in a reply and a ledger row.",
    alt: "The n8n editor showing the AlfaMascotas transfer verifier: a chain from a Telegram trigger through file download, base64 conversion, Claude Vision OCR and response parsing, then a branch that searches the bank email, compares amounts, and writes verified or unverified outcomes to both Telegram and Google Sheets.",
  },
  {
    image: telegram,
    title: "Reading the receipt with a model",
    note: "The OCR step is a vision model, not a template: it handles any bank's layout and returns amount, tracking key, sender and date as structured fields the rest of the flow can compare.",
    alt: "Telegram conversation with AlfaMascotas_Verificador_bot: a receipt photo sent by a staff member and the bot's reply, 'Transferencia Verificada', listing the amount of $11.00, a tracking key, the sender, the date 05/04/2026 and the bank. The tracking key, sender name and receipt are blurred.",
    ai: true,
  },
  {
    image: ledger,
    title: "Every check leaves a trace",
    note: "Verified or not, each run appends a row: time, store, amount, tracking key and how it was checked. The audit trail is the deliverable — the Telegram message is only the notification.",
    alt: "A Google Sheets ledger named Verificaciones, with columns for date and time, store, amount, tracking key, sender name, verification status and method. Every row reads 'Verificada' via 'Automatico - Email banco'. Tracking keys and sender names are blurred.",
  },
];
