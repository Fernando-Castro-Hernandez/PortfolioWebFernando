import { certificateGroups } from "@content/certificates";
import { sections } from "@content/site";
import { BadgeShowcase } from "@/components/BadgeShowcase";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";
import { Section } from "@/components/Section";
import { ArrowUpRightIcon } from "@/components/icons";

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
      <RevealGroup
        className="mt-6 grid items-start gap-6 md:grid-cols-2 xl:grid-cols-4"
        stagger={0.06}
      >
        {certificateGroups.map((group) => (
          <RevealItem key={group.area} className="glass-still p-6" y={14}>
            <h4 className="font-display text-lg font-bold">{group.area}</h4>
            <ul className="mt-4 flex flex-col gap-4">
              {group.certificates.map((certificate) => (
                <li key={`${certificate.name}-${certificate.issuer}`}>
                  <p className="text-sm text-ink">{certificate.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-ink-dim">
                    {certificate.issuer}
                  </p>
                  {certificate.file && (
                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-tq-400 transition-colors hover:text-tq-500"
                      aria-label={`View credential: ${certificate.name} (${certificate.issuer}), opens PDF in a new tab`}
                    >
                      View credential
                      <ArrowUpRightIcon className="h-3 w-3" />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
