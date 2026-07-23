// Tech stack shown as the Skills icon grid. Logos are vendored locally in
// public/images/tech/ (official marks, recolored where needed for the dark
// surface). Order flows: languages → frameworks → data → cloud/devops →
// tooling → AI. Add an entry here and drop its SVG in the folder to extend it.

export interface Tech {
  /** Filename stem in public/images/tech/. */
  slug: string;
  label: string;
}

export const techStack: Tech[] = [
  { slug: "java", label: "Java" },
  { slug: "csharp", label: "C#" },
  { slug: "python", label: "Python" },
  { slug: "spring", label: "Spring" },
  { slug: "dotnet", label: ".NET" },
  { slug: "postgresql", label: "PostgreSQL" },
  { slug: "aws", label: "AWS" },
  { slug: "terraform", label: "Terraform" },
  { slug: "docker", label: "Docker" },
  { slug: "git", label: "Git" },
  { slug: "github", label: "GitHub" },
  { slug: "githubactions", label: "GitHub Actions" },
  { slug: "intellij", label: "IntelliJ IDEA" },
  { slug: "vscode", label: "VS Code" },
  { slug: "n8n", label: "n8n" },
  { slug: "claude", label: "Claude" },
  { slug: "gemini", label: "Gemini" },
  { slug: "mcp", label: "MCP" },
];
