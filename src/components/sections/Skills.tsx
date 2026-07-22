import { hardSkills, softSkills } from "@content/skills";
import { sections } from "@content/site";
import { Section } from "@/components/Section";

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
      <div className="grid gap-x-14 gap-y-10 md:grid-cols-2">
        {hardSkills.map((group) => (
          <div key={group.label}>
            <h3 className="text-base font-semibold text-ink">{group.label}</h3>
            <p className="mt-1 text-sm text-ink-dim">{group.context}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-ink-dim"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-white/10 pt-8">
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
      </div>
    </Section>
  );
}
