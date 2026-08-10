import { sections } from "@content/site";
import { BadgeShowcase } from "@/components/BadgeShowcase";
import { CertificateGroups } from "@/components/CertificateGroups";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/Section";

const meta = sections.find((section) => section.id === "certifications")!;

export function Certifications() {
  return (
    <Section id={meta.id} altitude={meta.altitude} title={meta.title}>
      {/* Tier 1 — the credentials that took real study, raised into a showcase. */}
      <Reveal>
        <BadgeShowcase />
      </Reveal>

      {/* Tier 2 — shorter courses, grouped by area. */}
      <Reveal className="mt-16" y={10}>
        <h3 className="text-sm font-mono tracking-widest text-ink-dim">
          MORE CERTIFICATES
        </h3>
      </Reveal>
      <CertificateGroups />
    </Section>
  );
}
