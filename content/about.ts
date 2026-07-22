// About section: portrait, bio paragraphs, and the facts panel.

import type { StaticImageData } from "next/image";
import portraitImage from "../public/images/profile1.jpeg";

export const portrait: { image: StaticImageData; alt: string } = {
  image: portraitImage,
  alt: "Fernando Castro, smiling under the palm trees of Mérida",
};

export const bio: string[] = [
  "I'm Jesús Fernando Castro Hernández — Fernando. I'm a software development student at Instituto Tecnológico de Software in Mérida, and I learn by shipping: layered architectures, documented decisions, tested code, and deployments that survive contact with real users.",
  "My day-to-day stack is Java and C#/.NET on PostgreSQL. Right now I'm deepening Spring Boot and n8n automation, on a deliberate path toward AWS and cloud architecture. I care about why a system is built the way it is: the trade-offs, the guardrails, and the decisions behind the code.",
  "Alongside school I manage a four-branch pet store operation — where I turned my own two-hour daily bottleneck into an AI automation that now runs the task in seconds. My goal is to join a forward-thinking team where I can deliver real value through clean code and intelligent automation.",
];

export interface FactGroup {
  label: string;
  items: { title: string; detail: string }[];
}

export const facts: FactGroup[] = [
  {
    label: "Education",
    items: [
      {
        title: "Associate Degree (TSU), Software Development",
        detail: "Instituto Tecnológico de Software · 2025–2027",
      },
      {
        title: "B.Eng. in Software Development",
        detail: "Instituto Tecnológico de Software · 2027–2029",
      },
    ],
  },
  {
    label: "Languages",
    items: [
      { title: "Spanish", detail: "Native" },
      { title: "English", detail: "B2 — professional reading & writing" },
    ],
  },
  {
    label: "Now",
    items: [
      { title: "Store Manager, AlfaMascotas", detail: "4-branch operation · 2024–present" },
      { title: "Dual program placement", detail: "Starts September 2026" },
    ],
  },
];
