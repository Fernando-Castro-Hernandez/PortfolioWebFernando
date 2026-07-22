// Skills grouped with context — never a flat badge wall (PRODUCT.md anti-reference).

export interface SkillGroup {
  label: string;
  /** One line of context: what Fernando actually does with these. */
  context: string;
  items: string[];
}

export const hardSkills: SkillGroup[] = [
  {
    label: "Languages",
    context: "The core I write production code in.",
    items: ["Java", "C#", "Python", "SQL"],
  },
  {
    label: "Frameworks",
    context: "Backend-first: APIs, MVC, data access.",
    items: [".NET / ASP.NET Core", "Spring Boot", "EF Core"],
  },
  {
    label: "Cloud & data",
    context: "Deployed and operated, not just configured once.",
    items: ["AWS (EC2, RDS, ECR)", "Terraform", "PostgreSQL", "Docker"],
  },
  {
    label: "Tools & practices",
    context: "Version control, CI, and automation as defaults.",
    items: ["Git & GitHub", "GitHub Actions", "n8n", "xUnit", "IntelliJ IDEA", "VS Code"],
  },
];

export const softSkills: string[] = [
  "Analytical problem solving",
  "Continuous learning",
  "Time management",
  "Adaptability to new technologies",
  "Collaborative work",
];
