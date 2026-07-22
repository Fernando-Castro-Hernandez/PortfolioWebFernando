import { sections, site } from "@content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { ObfuscatedEmail } from "@/components/ObfuscatedEmail";
import { Section } from "@/components/Section";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon } from "@/components/icons";

const meta = sections.find((section) => section.id === "contact")!;

export function Contact() {
  return (
    <Section
      id={meta.id}
      altitude={meta.altitude}
      title={meta.title}
      cloud={{ src: "/images/clouds/sky-above-render.jpg", opacity: 0.25 }}
      scrim="strong"
    >
      {/* The horizon closes calmly: one slower, single-panel assembly. */}
      <Reveal y={20} duration={0.65}>
      <div className="glass grid gap-10 p-8 md:grid-cols-2 md:p-12">
        <div className="flex flex-col gap-6">
          <p className="max-w-[50ch] text-ink-dim">
            Looking for a backend/cloud developer for your team or the dual program?
            Tell me what you&apos;re building — I read everything and reply fast.
          </p>
          <div className="flex flex-col gap-3 text-sm">
            <ObfuscatedEmail />
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink-dim transition-colors hover:text-tq-400"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-ink-dim transition-colors hover:text-tq-400"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>
          <p className="mt-auto font-mono text-xs text-ink-dim">
            {site.location} · open to remote
          </p>
        </div>

        <ContactForm />
      </div>
      </Reveal>
    </Section>
  );
}
