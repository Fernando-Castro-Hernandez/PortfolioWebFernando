// Visual walkthrough of NovuxTracker (the flagship project). Screens captured
// from production at gymtrackers.app; regenerate with the scripts in scripts/.
// Order matters: it follows the real use cycle — routine, session, coach,
// progress — the same order as docs/GUION-RECORRIDO.md in the app's own repo.

import type { StaticImageData } from "next/image";
import portada from "../public/images/novux/portada.webp";
import rutinas from "../public/images/novux/rutinas.webp";
import registrarSesion from "../public/images/novux/registrar-sesion.webp";
import coachIa from "../public/images/novux/coach-ia.webp";
import chatGuardarriel from "../public/images/novux/chat-guardarriel.webp";
import progreso from "../public/images/novux/progreso.webp";
import movilRutinas from "../public/images/novux/movil-rutinas.webp";

export interface TourShot {
  image: StaticImageData;
  title: string;
  /** What the screen proves — the decision behind it, not what it contains. */
  note: string;
  /** Describes the screen itself, for screen readers. */
  alt: string;
}

export const novuxTour: TourShot[] = [
  {
    image: portada,
    title: "The promise, in one line",
    note: "Getting better in the gym is not a memory problem. The landing says what the app does before asking for anything.",
    alt: "NovuxTracker landing page: a red hero panel reading 'Registra lo que levantas. Comprueba que subes.', with sign-up buttons and three numbered steps below.",
  },
  {
    image: rutinas,
    title: "Routines carry their own shape",
    note: "Muscle groups, exercise count and total sets on the card — enough to pick one without opening it.",
    alt: "Routines screen showing six cards — Upper 1 and 2, Lower 1 and 2, Extra Arm Day and a test routine — each with coloured muscle-group chips and its exercise and set counts.",
  },
  {
    image: registrarSesion,
    title: "Starting a session freezes it",
    note: "The fields arrive pre-filled with the routine's target, and that target is snapshotted. Editing the routine tomorrow never rewrites this history — the most important decision in the domain model.",
    alt: "Session logging screen: each set has plus and minus steppers for reps and weight, pre-filled with the routine's target, and the frozen goal shown beside it as 'meta: 12 × 50 kg'.",
  },
  {
    image: coachIa,
    title: "A coach that read your actual routine",
    note: "A real LLM returns volume distribution, a verdict and specific corrections. Claude leads, Gemini takes over if it fails, and the user never notices the switch.",
    alt: "AI coach report: muscle balance percentages, a green 'adequate volume' verdict, four concrete suggestions, and chips flagging shoulders and arms as neglected.",
  },
  {
    image: chatGuardarriel,
    title: "An assistant with a scope",
    note: "It answers from your own sessions and volume. Ask it for a joke and it declines — the guardrail is part of the product, not an afterthought.",
    alt: "Chat panel: the assistant summarises the user's week from real session data, then declines a request for a joke, explaining it only talks about training.",
  },
  {
    image: progreso,
    title: "Proof that the load is going up",
    note: "Body weight and per-session tonnage, fetched from the REST API after the page loads rather than rendered server-side.",
    alt: "Progress screen with two line charts: body weight over several months, and total tonnage per session.",
  },
  {
    image: movilRutinas,
    title: "Designed for someone standing up",
    note: "Bottom navigation instead of a hamburger: the user is on the gym floor, one hand on the phone, between sets. The far corner was the wrong place for the menu.",
    alt: "The routines screen on a phone-width viewport, with a bottom navigation bar marking the active section instead of a hamburger menu.",
  },
];
