// Project cards. Designed to scale to N entries without redesign:
// add an object here and the grid grows. Repo URLs pending Fernando's confirmation.

export interface Project {
  id: string;
  title: string;
  /** Short qualifier shown next to the title. */
  kind: string;
  summary: string;
  /** What makes it strong — decisions and outcomes, not the stack. */
  highlights: string[];
  /** Optional headline metric, shown emphasized. */
  metric?: string;
  stack: string[];
  tags: string[];
  repo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "novux-tracker",
    title: "Novux Tracker",
    kind: "Flagship · Full-stack web app",
    summary:
      "A progressive-overload training log with an AI coach, built like a product: layered architecture, tests gating CI, and a real AWS deployment. Live at gymtrackers.app.",
    highlights: [
      "Layered architecture across 4 separate projects, with the reasoning documented in ADRs.",
      "AI coach and chatbot with context: SQL retrieval with pruning, guardrails, prompt caching, token/latency observability, and a Claude → Gemini fallback.",
      "1,300+ exercise catalog with GIFs, seeded locally and served with a cache-aside pattern.",
      "123 xUnit tests wired into GitHub Actions — the deploy only runs if they pass.",
      "Production on AWS: EC2 + RDS PostgreSQL, ECR images, Terraform IaC, and OIDC auth for CI.",
    ],
    stack: [
      "ASP.NET Core 10 MVC",
      "EF Core",
      "PostgreSQL 16",
      "Docker",
      "Identity",
      "Chart.js",
      "Terraform",
      "AWS",
    ],
    tags: [".NET", "PostgreSQL", "AWS", "Terraform", "AI", "Architecture", "Testing/CI"],
    repo: "https://github.com/Fernando-Castro-Hernandez/GymTracker",
    featured: true,
  },
  {
    id: "alfamascotas-verifier",
    title: "Transfer Verifier",
    kind: "AlfaMascotas · AI automation in production",
    summary:
      "Real-time bank-transfer verification for a four-store pet chain. It checks receipts against the bank itself — and erased two hours of daily manual work.",
    highlights: [
      "Verifies against the bank over IMAP — it never assumes a receipt is genuine.",
      "Claude Vision reads the receipt (OCR) inside a 16-node n8n pipeline, self-hosted with Docker on a VPS.",
      "Telegram bot front-end for store staff; Google Sheets as the audit ledger.",
      "Planned context-first (a CLAUDE.md before any prompts) — built as a system, not a script.",
    ],
    metric: "Verification: 5–15 min → under 30 s · Manual work: 2+ h/day → zero",
    stack: ["n8n (self-hosted)", "Docker", "Ubuntu VPS", "Telegram Bot API", "Claude Vision", "IMAP", "Google Sheets"],
    tags: ["Automation", "n8n", "Claude Vision", "Telegram", "Applied AI"],
    repo: "https://github.com/Fernando-Castro-Hernandez/alfamascotas-verificacion-transferencias",
    featured: true,
  },
];
