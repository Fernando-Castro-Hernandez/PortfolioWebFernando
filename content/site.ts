// Site-wide identity, navigation, and hero content.
// Edit this file to change copy without touching components.

export const site = {
  name: "Fernando Castro",
  fullName: "Jesús Fernando Castro Hernández",
  role: "Software Development Student · Backend & Cloud",
  tagline:
    "I build backend systems that reach production — layered architecture, tests, and AWS infrastructure provisioned with Terraform. Last year I automated a 2-hour daily task down to 30 seconds for a 4-branch business.",
  location: "Mérida, Yucatán, MX",
  // Email is split so the address never appears assembled in static HTML.
  emailUser: "jesus.castro",
  emailDomain: "tecdesoftware.edu.mx",
  socials: {
    github: "https://github.com/Fernando-Castro-Hernandez",
    linkedin: "https://www.linkedin.com/in/jes%C3%BAs-fernando-castro-hernandez/",
  },
  cta: {
    primary: { label: "View projects", href: "#projects" },
    secondary: { label: "Get in touch", href: "#contact" },
  },
  // Public CV — verified to contain no phone number (safe on a public repo).
  resume: { href: "/Fernando-Castro-CV.pdf", label: "Download CV" },
  milestones: [
    "Deployed on AWS with Terraform",
    "123 tests in CI",
    "~2 h/day automated away",
    "Java",
    "C#",
    "Python",
    "Store Manager",
    "IEEE Member",
  ],
} as const;

export type SectionId =
  | "about"
  | "skills"
  | "certifications"
  | "projects"
  | "gallery"
  | "contact";

export interface SectionMeta {
  id: SectionId;
  title: string;
  /** Mono micro-label of the ascent system (DESIGN.md §7). */
  altitude: string;
}

export const sections: SectionMeta[] = [
  { id: "about", title: "About", altitude: "ALT · 450 M" },
  { id: "skills", title: "Skills", altitude: "ALT · 1200 M" },
  { id: "certifications", title: "Certifications", altitude: "ALT · 2100 M" },
  { id: "projects", title: "Projects", altitude: "ALT · 3000 M — THE PEAK" },
  { id: "gallery", title: "Gallery", altitude: "ALT · 3800 M — ABOVE THE CLOUDS" },
  { id: "contact", title: "Contact", altitude: "THE HORIZON" },
];

export const heroAltitude = "ALT · 0 M — MÉRIDA, YUCATÁN, MX";
