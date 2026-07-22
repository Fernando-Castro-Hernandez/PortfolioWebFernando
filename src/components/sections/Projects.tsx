import { projects } from "@content/projects";
import { sections } from "@content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
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
      <Reveal y={10}>
        <p className="-mt-6 mb-12 max-w-[65ch] text-ink-dim">
          Evidence over adjectives: systems that shipped, with the decisions that
          got them there.
        </p>
      </Reveal>
      {/* The peak earns the most pronounced assembly: more travel, more scale. */}
      <RevealGroup className="grid gap-8 lg:grid-cols-2" stagger={0.1}>
        {projects.map((project) => (
          <RevealItem key={project.id} y={24} className="h-full">
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
