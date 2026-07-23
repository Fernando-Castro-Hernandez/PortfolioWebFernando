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
    context:
      "Java, C#, and Python — the core I write production code in. Java and Spring for REST APIs, C#/.NET for full-stack web apps, Python for scripting and API work.",
    items: ["Java", "C#", "Python", "SQL"],
  },
  {
    label: "Frameworks",
    context:
      "Backend-first: ASP.NET Core MVC and Web API, Spring Boot with Spring Data JPA, EF Core for data access. Layered and ports & adapters architectures, documented with ADRs.",
    items: [".NET / ASP.NET Core", "Spring Boot", "EF Core"],
  },
  {
    label: "Cloud & data",
    context:
      "Deployed and operated, not just configured once. AWS (EC2, RDS, ECR) provisioned with Terraform, PostgreSQL in Docker, deployments chained to passing tests.",
    items: ["AWS (EC2, RDS, ECR)", "Terraform", "PostgreSQL", "Docker"],
  },
  {
    label: "Tools & practices",
    context:
      "Version control, CI, and automation as defaults. GitHub Actions running tests on every push, atomic commits, and OpenAPI/Swagger for API documentation.",
    items: ["Git & GitHub", "GitHub Actions", "n8n", "xUnit", "IntelliJ IDEA", "VS Code"],
  },
  {
    label: "AI & automation",
    context:
      "LLM application pipelines with retrieval, guardrails, prompt caching and provider fallback. n8n automations with Claude Vision OCR solving real business problems.",
    items: ["LLM pipelines", "RAG", "Guardrails", "n8n", "OCR"],
  },
];

export const softSkills: string[] = [
  "Managing a 4-branch retail operation while studying",
  "Training and onboarding new employees",
  "Identifying business bottlenecks and shipping the fix",
  "Documenting decisions so the next person (or future me) can follow them",
  "Analytical problem solving",
  "Continuous learning",
];
