import { bio, facts } from "@content/about";
import { sections } from "@content/site";
import { Section } from "@/components/Section";

const meta = sections.find((section) => section.id === "about")!;

export function About() {
  return (
    <Section id={meta.id} altitude={meta.altitude} title={meta.title}>
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <div className="flex max-w-[65ch] flex-col gap-5 text-ink-dim">
          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <aside className="glass-still h-fit p-7">
          <dl className="flex flex-col gap-6">
            {facts.map((group) => (
              <div key={group.label}>
                <dt className="font-mono text-xs tracking-widest text-tq-400">
                  {group.label.toUpperCase()}
                </dt>
                <dd className="mt-3 flex flex-col gap-3">
                  {group.items.map((item) => (
                    <div key={item.title}>
                      <p className="text-sm font-medium text-ink">{item.title}</p>
                      <p className="mt-0.5 text-sm text-ink-dim">{item.detail}</p>
                    </div>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>
    </Section>
  );
}
