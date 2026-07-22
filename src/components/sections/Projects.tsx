import { projects } from "@content/projects";
import { sections } from "@content/site";
import { ProjectCard } from "@/components/ProjectCard";
import { Section } from "@/components/Section";

const meta = sections.find((section) => section.id === "projects")!;

export function Projects() {
  return (
    <Section
      id={meta.id}
      altitude={meta.altitude}
      title={meta.title}
      cloud={{ src: "/images/clouds/sky-sunrise-peaks.jpg", opacity: 0.45 }}
      scrim="strong"
    >
      <p className="-mt-6 mb-12 max-w-[65ch] text-ink-dim">
        Evidence over adjectives: systems that shipped, with the decisions that got
        them there.
      </p>
      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
