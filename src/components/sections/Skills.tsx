import { hardSkills, softSkills } from "@content/skills";
import { sections } from "@content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/Section";
import { TechGrid } from "@/components/TechGrid";

const meta = sections.find((section) => section.id === "skills")!;

export function Skills() {
  return (
    <Section
      id={meta.id}
      altitude={meta.altitude}
      title={meta.title}
      cloud={{ src: "/images/clouds/sky-mid-cumulus.jpg", opacity: 0.28 }}
      scrim="strong"
    >
      {/* The grid is the protagonist: the stack as a home screen of glass apps. */}
      <Reveal>
        <TechGrid />
      </Reveal>

      {/* Context kept, chips dropped — the logos already name the tools, so
          these lines say how Fernando actually uses them (not a badge wall). */}
      <Reveal className="mt-16 border-t border-white/10 pt-8" y={10}>
        <dl className="grid gap-x-14 gap-y-6 sm:grid-cols-2">
          {hardSkills.map((group) => (
            <div key={group.label} className="flex flex-col gap-1">
              <dt className="text-sm font-semibold text-ink">{group.label}</dt>
              <dd className="text-sm text-ink-dim">{group.context}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal className="mt-12 border-t border-white/10 pt-8" y={10}>
        <h3 className="text-base font-semibold text-ink">Beyond code</h3>
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-sm text-ink-dim">
          {softSkills.map((skill, index) => (
            <li key={skill} className="flex items-center gap-3">
              {index > 0 && (
                <span aria-hidden className="text-tq-500">
                  ·
                </span>
              )}
              {skill}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
