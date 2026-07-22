"use client";

import {
  m,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { sections } from "@content/site";

const SUMMIT_METERS = 4000;

/**
 * The ascent instrument: section shortcuts, a progress line that climbs with
 * the scroll, and a live altitude readout. Doubles as reading progress.
 * Counter and line are aria-hidden — the accessible content is the links.
 */
export function AltitudeRail() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothed = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  const progress = reduceMotion ? scrollYProgress : smoothed;
  const meters = useTransform(progress, (value) =>
    String(Math.min(SUMMIT_METERS, Math.round((value * SUMMIT_METERS) / 10) * 10)).padStart(
      4,
      "0",
    ),
  );

  return (
    <nav
      aria-label="Section shortcuts"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex"
    >
      <span
        aria-hidden
        className="font-mono text-[0.6rem] tracking-widest text-ink-dim"
      >
        ALT
      </span>

      <div className="relative flex flex-col items-center gap-4 py-1">
        <div aria-hidden className="absolute inset-y-1 w-px bg-white/10" />
        <m.div
          aria-hidden
          className="absolute inset-y-1 w-px origin-top bg-tq-500/70"
          style={{ scaleY: progress }}
        />
        <a
          href="#top"
          aria-label="Back to top — ground level"
          className="relative block h-2 w-2 rounded-full bg-ink-dim/70 transition-colors hover:bg-tq-400 focus-visible:bg-tq-400"
        />
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            aria-label={section.title}
            className="relative block h-2 w-2 rounded-full bg-ink-dim/70 transition-colors hover:bg-tq-400 focus-visible:bg-tq-400"
          />
        ))}
      </div>

      <m.span
        aria-hidden
        className="font-mono text-[0.6rem] tracking-widest text-tq-400 tabular-nums"
      >
        {meters}
      </m.span>
      <span
        aria-hidden
        className="-mt-3 font-mono text-[0.6rem] tracking-widest text-ink-dim"
      >
        M
      </span>
    </nav>
  );
}
