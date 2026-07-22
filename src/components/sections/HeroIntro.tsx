"use client";

import { m } from "motion/react";
import { heroAltitude, site } from "@content/site";
import { MagneticLink } from "@/components/motion/MagneticLink";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

/**
 * First-load choreography (brand permission: one well-orchestrated page
 * load). The glass plate assembles, then milestones stagger in beneath it.
 * Once per visit — slightly slower than in-app motion is intentional.
 */
export function HeroIntro() {
  return (
    <>
      <m.div
        className="glass max-w-2xl px-8 py-12 text-center md:px-14 md:py-16"
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE_OUT, delay: 0.1 }}
      >
        <p className="font-mono text-xs tracking-widest text-tq-400">{heroAltitude}</p>
        <h1 className="mt-5 font-display text-[clamp(2.75rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
          {site.name}
        </h1>
        <p className="mt-4 text-lg text-ink-dim">{site.role}</p>
        <p className="mx-auto mt-6 max-w-prose text-ink-dim">{site.tagline}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <MagneticLink href={site.cta.primary.href} className="btn-cta">
            {site.cta.primary.label}
          </MagneticLink>
          <MagneticLink href={site.cta.secondary.href} className="btn-quiet">
            {site.cta.secondary.label}
          </MagneticLink>
        </div>
      </m.div>

      <m.ul
        aria-label="Milestones"
        className="mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs text-ink-dim"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.05, delayChildren: 0.45 } },
        }}
      >
        {site.milestones.map((milestone, index) => (
          <m.li
            key={milestone}
            className="flex items-center gap-3"
            variants={{
              hidden: { opacity: 0, y: 8 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.45, ease: EASE_OUT },
              },
            }}
          >
            {index > 0 && (
              <span aria-hidden className="text-tq-500">
                ·
              </span>
            )}
            {milestone}
          </m.li>
        ))}
      </m.ul>
    </>
  );
}
