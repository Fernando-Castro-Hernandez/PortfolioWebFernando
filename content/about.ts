// About section: portrait, bio paragraphs, and the facts panel.

import type { StaticImageData } from "next/image";
import portraitImage from "../public/images/profile1.jpeg";

export const portrait: { image: StaticImageData; alt: string } = {
  image: portraitImage,
  alt: "Fernando Castro, smiling under the palm trees of Mérida",
};

export const bio: string[] = [
  "My name is Fernando and I build backend.",
  "What interests me most isn't the language or the framework, but the decision behind it: why this architecture and not another, what you gain and what you give up. That's why my projects ship with ADRs — not because a professor asked for them, but because in six months I want to know what I was thinking.",
  "My first serious project, GymTracker, started as an app to log my workouts. It ended up as a layered system with 123 tests, an LLM pipeline with guardrails and provider fallback, and an AWS deployment provisioned with Terraform. I didn't plan for it to grow that much; every problem I solved opened a new one, and that's probably the part I enjoy most.",
  "The other project I'm proud of didn't come from school. I manage a pet store, and every day we lost about two hours verifying bank transfers by hand. I built an automation that does that verification in under 30 seconds, checking the receipt against the bank. That's where I learned something no course taught me: the hard part wasn't the AI, it was understanding the problem properly before touching the code.",
  "Right now I'm going deeper into cloud and agentic development, and looking for a team where I can keep building things that actually get used.",
];

export interface FactGroup {
  label: string;
  /** Optional sub-heading shown under the label (e.g. the institution). */
  heading?: string;
  items: { title: string; detail?: string }[];
  /** Optional closing note (e.g. relevant coursework). */
  note?: string;
}

export const currently: FactGroup = {
  label: "Currently",
  items: [
    {
      title: "AWS Academy Generative AI Foundations",
      detail:
        "After completing Cloud Foundations. Working through prompt engineering, foundation models, responsible AI practice, and security & governance for generative AI applications.",
    },
    {
      title: "Deepening Java & Spring Boot",
      detail: "Building REST APIs with layered architecture.",
    },
    {
      title: "Exploring agentic development",
      detail: "LLM pipelines, MCP, and automation with n8n.",
    },
    {
      title: "Reading — AI Engineering (Chip Huyen)",
      detail: "Applied to GymTracker's chatbot pipeline.",
    },
  ],
};

export const facts: FactGroup[] = [
  {
    label: "Education",
    heading: "Instituto Tecnológico de Software — Mérida, Yucatán",
    items: [
      {
        title: "Associate Degree (TSU), Software Development",
        detail: "2025–2027",
      },
      {
        title: "Bachelor.Eng. in Software Development",
        detail: "2027–2029",
      },
    ],
    note: "Relevant coursework: Software Architecture, Databases, Applied Programming, Data Structures, Probability & Statistics",
  },
  {
    label: "Languages",
    items: [
      { title: "Spanish", detail: "Native" },
      { title: "English", detail: "B2 IT" },
    ],
  },
  {
    label: "Now",
    items: [
      { title: "Store Manager, AlfaMascotas", detail: "4-branch operation · 2024–present" },
      { title: "Open to backend & cloud roles" },
    ],
  },
];
