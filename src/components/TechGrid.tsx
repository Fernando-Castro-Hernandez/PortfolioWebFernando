"use client";

import { m } from "motion/react";
import { techStack } from "@content/tech";

/**
 * Tech stack as "iPhone apps floating in Liquid Glass": brand-colored logos
 * on rounded-square glass tiles with a specular top edge. Each tile sinks
 * slightly toward the pointer (scale 0.95) with a spring, and presses further
 * on tap. reducedMotion="user" (MotionConfig) strips the scale for people who
 * ask for it; the tiles stay fully visible either way.
 */
export function TechGrid() {
  return (
    <ul
      aria-label="Tech stack"
      className="grid grid-cols-4 gap-x-4 gap-y-6 sm:grid-cols-6 lg:grid-cols-9"
    >
      {techStack.map((tech) => (
        <li key={tech.slug} className="flex flex-col items-center gap-2.5">
          <m.div
            title={tech.label}
            className="glass-still grid aspect-square w-full place-items-center rounded-[1.4rem] p-3.5"
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 26 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- static local SVG, no optimization needed */}
            <img
              src={`/images/tech/${tech.slug}.svg`}
              alt={tech.label}
              width={40}
              height={40}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </m.div>
          <span className="text-center font-mono text-[0.7rem] leading-tight text-ink-dim">
            {tech.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
