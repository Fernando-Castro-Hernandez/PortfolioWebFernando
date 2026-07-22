import { certificateGroups } from "@content/certificates";
import { sections } from "@content/site";
import { Section } from "@/components/Section";

const meta = sections.find((section) => section.id === "certifications")!;

export function Certifications() {
  return (
    <Section id={meta.id} altitude={meta.altitude} title={meta.title}>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {certificateGroups.map((group) => (
          <div key={group.area} className="glass-still p-6">
            <h3 className="font-display text-lg font-bold">{group.area}</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {group.certificates.map((certificate) => (
                <li key={`${certificate.name}-${certificate.issuer}`}>
                  <p className="text-sm text-ink">{certificate.name}</p>
                  <p className="mt-0.5 font-mono text-xs text-ink-dim">
                    {certificate.issuer}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
