import { alfamascotasTour } from "@content/alfamascotas";
import { novuxTour } from "@content/novux";
import { projects } from "@content/projects";
import { sections } from "@content/site";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectTour } from "@/components/ProjectTour";
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

      {/* The cards argue; the screens prove. Both shipped systems get a pass,
          the flagship first. */}
      <ProjectTour
        eyebrow="NOVUX TRACKER · WALKTHROUGH"
        lead="Captured from production. Each screen is here for a decision behind it, not for the pixels."
        shots={novuxTour}
        subtitle="Novux Tracker"
        link={{ href: "https://gymtrackers.app", label: "Open the live app" }}
      />

      <ProjectTour
        eyebrow="ALFAMASCOTAS · TRANSFER VERIFIER"
        lead="The automation running in four stores: the pipeline, what the counter staff see, and the trail it leaves. Customer data is masked."
        shots={alfamascotasTour}
        subtitle="AlfaMascotas · Transfer Verifier"
        link={{
          href: "https://github.com/Fernando-Castro-Hernandez/alfamascotas-verificacion-transferencias",
          label: "Open the repository",
        }}
        className="mt-24"
      />
    </Section>
  );
}
