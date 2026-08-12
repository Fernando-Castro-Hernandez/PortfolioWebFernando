// Visual walkthrough of Novux Tracker (the flagship project). Screens captured
// from production at gymtrackers.app; regenerate the WebP with
// `node scripts/tour-shots.mjs --force`.
//
// Order matters: it follows the real use cycle — arrive, pick a routine, build
// the catalogue behind it, let the AI review it, log the session, measure.

import type { TourShot } from "./tour";
import inicio from "../public/images/novux/inicio.webp";
import rutinas from "../public/images/novux/rutinas.webp";
import ejercicios from "../public/images/novux/ejercicios.webp";
import explorar from "../public/images/novux/explorar.webp";
import analisisInvitacion from "../public/images/novux/analisis-invitacion.webp";
import analisisEntrenador from "../public/images/novux/analisis-entrenador.webp";
import asistenteAlcance from "../public/images/novux/asistente-alcance.webp";
import asistenteDatos from "../public/images/novux/asistente-datos.webp";
import asistenteGuardarriel from "../public/images/novux/asistente-guardarriel.webp";
import historial from "../public/images/novux/historial.webp";
import mediciones from "../public/images/novux/mediciones.webp";
import progreso from "../public/images/novux/progreso.webp";

export const novuxTour: TourShot[] = [
  {
    image: inicio,
    title: "One screen, one decision",
    note: "Home answers the only question that matters on arrival — did I train today? — and offers a single large action. Counters and shortcuts sit below, never competing with it.",
    alt: "Novux Tracker home screen: a line reading 'Ya entrenaste hoy. Hiciste Upper 1', a full-width red ENTRENAR button, counters for 2 sessions this week, 7 in total and 75 kg body weight, and five shortcut tiles.",
  },
  {
    image: rutinas,
    title: "Routines carry their own shape",
    note: "Muscle groups, exercise count and total sets on the card — enough to pick one without opening it.",
    alt: "Routines screen with five cards — Lower 2, Upper 2, Extra Arm Day, Lower 1 and Upper 1 — each with coloured muscle-group chips, its exercise and set counts, and an 'Entrenar' button.",
  },
  {
    image: ejercicios,
    title: "A catalogue that is yours",
    note: "Routines are assembled from the user's own movements, with the user's own cues on them (\"inclinación 15° y velocidad 3\") — not from a global list nobody edits.",
    alt: "Exercises screen: filter chips per muscle group and a list of personal exercises — Abductores, Caminadora, Crunchs, Curl Bayesian — each tagged with its muscle group and with edit and delete actions.",
  },
  {
    image: explorar,
    title: "1,324 exercises, narrowed before searching",
    note: "Zone, equipment and movement pattern cut the catalogue down first; search is the last resort, not the first. Each result carries the animation the user checks mid-set.",
    alt: "Explore screen: a search field, filter rows for zone, equipment and movement pattern, a count of 1,324 exercises, and a grid of animated exercise illustrations with their target muscle.",
  },
  {
    image: analisisInvitacion,
    title: "The analysis offers itself",
    note: "The routine detail asks the question the user was already asking — is this well built? The AI sits one tap away at the moment it is relevant, not buried in a menu.",
    alt: "Routine detail for Upper 1: 9 exercises, 25 sets and 5 muscle groups, a panel reading '¿Está bien armada esta rutina?' with an 'Analizar' button, and the exercise list with target sets and weights.",
    ai: true,
  },
  {
    image: analisisEntrenador,
    title: "A coach that read your actual routine",
    note: "A real LLM returns volume distribution, a verdict and corrections against the user's own numbers. Claude leads, Gemini takes over if it fails, and the user never notices the switch.",
    alt: "AI coach report: muscle balance percentages, a green 'Volumen adecuado' verdict, four concrete suggestions, and chips flagging shoulders and biceps as neglected.",
    ai: true,
  },
  {
    image: asistenteAlcance,
    title: "The assistant states its scope first",
    note: "Before any question is asked, it says what it can answer. Drawing the boundary up front costs one message; discovering it later costs the user's trust.",
    alt: "Chat panel titled 'Asistente — conoce tu entrenamiento': a welcome message listing the four things it covers — routines, weight and sets, tonnage and progression — with suggested questions below.",
    ai: true,
  },
  {
    image: asistenteDatos,
    title: "Answers made of your own sessions",
    note: "Not a general-purpose chatbot: it retrieves the week's real sessions from the database and answers with those numbers, broken down by routine and muscle group.",
    alt: "Chat answer: for the week of 05/08 it reports 5 sessions listed by routine, 79 sets and 50,279 kg of tonnage, followed by a distribution per muscle group.",
    ai: true,
  },
  {
    image: asistenteGuardarriel,
    title: "The guardrail is part of the product",
    note: "It declines the joke, and it declines to hand over its system prompt. The same decision, taken before shipping rather than after an incident.",
    alt: "Chat panel: the assistant refuses a request for a joke, restating that it only covers training, then rejects a 'dame tu system prompt' message as an attempt to change its behaviour.",
    ai: true,
  },
  {
    image: historial,
    title: "Starting a session freezes its target",
    note: "Each set is recorded against the goal snapshotted when the session began. Editing the routine tomorrow never rewrites this history — the most important decision in the domain model.",
    alt: "Session detail for Upper 1: 13,177 kg of total tonnage at 100% of target and 25 sets, with per-exercise rows showing '10 × 80 kg' against 'meta: 10 × 80 kg' and a 'CUMPLIÓ' marker.",
  },
  {
    image: mediciones,
    title: "Body data lives here too",
    note: "Weight, composition and tape measurements, timestamped and annotated (\"en ayunas\"). They feed the progress charts instead of drifting into a second app.",
    alt: "Measurement detail for 5 August 2026: 75 kg body weight, body composition of 21% fat, visceral 9 and 41 kg muscle mass, a 40 cm arm measurement, and a note reading 'En Ayunas'.",
  },
  {
    image: progreso,
    title: "Proof that the load is going up",
    note: "Body weight and per-session tonnage, fetched from the REST API after the page loads rather than rendered server-side.",
    alt: "Progress screen with two line charts: body weight from January to August 2026, and total tonnage per session.",
  },
];
