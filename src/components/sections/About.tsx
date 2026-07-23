import Image from "next/image";
import { bio, currently, facts, portrait, type FactGroup } from "@content/about";
import { sections, site } from "@content/site";
import { Reveal } from "@/components/motion/Reveal";
import { Section } from "@/components/Section";
import { DownloadIcon } from "@/components/icons";

const meta = sections.find((section) => section.id === "about")!;

/** A single labelled block inside a glass facts card. */
function FactBlock({ group }: { group: FactGroup }) {
  return (
    <div>
      <dt className="font-mono text-xs tracking-widest text-tq-400">
        {group.label.toUpperCase()}
      </dt>
      {group.heading && (
        <p className="mt-3 text-sm font-medium text-ink">{group.heading}</p>
      )}
      <dd className="mt-3 flex flex-col gap-3">
        {group.items.map((item) => (
          <div key={item.title}>
            <p className="text-sm font-medium text-ink">{item.title}</p>
            {item.detail && (
              <p className="mt-0.5 text-sm text-ink-dim">{item.detail}</p>
            )}
          </div>
        ))}
      </dd>
      {group.note && (
        <p className="mt-3 text-sm text-ink-dim">{group.note}</p>
      )}
    </div>
  );
}

export function About() {
  return (
    <Section id={meta.id} altitude={meta.altitude} title={meta.title}>
      <div className="grid gap-12 md:grid-cols-[3fr_2fr]">
        <Reveal className="flex max-w-[65ch] flex-col items-start gap-5 text-ink-dim">
          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <a
            href={site.resume.href}
            download
            className="btn-quiet mt-3"
          >
            <DownloadIcon className="h-4 w-4" />
            {site.resume.label}
          </a>

          <div className="glass-still mt-6 w-full p-7">
            <dl>
              <FactBlock group={currently} />
            </dl>
          </div>
        </Reveal>

        <Reveal delay={0.12} y={18}>
          <aside className="flex h-fit flex-col gap-6">
          <Image
            src={portrait.image}
            alt={portrait.alt}
            placeholder="blur"
            sizes="(min-width: 768px) 24rem, 100vw"
            className="aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover object-top"
          />
          <div className="glass-still p-7">
            <dl className="flex flex-col gap-6">
              {facts.map((group) => (
                <FactBlock key={group.label} group={group} />
              ))}
            </dl>
          </div>
          </aside>
        </Reveal>
      </div>
    </Section>
  );
}
