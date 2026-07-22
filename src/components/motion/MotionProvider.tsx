"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/**
 * LazyMotion + `m` components keep the motion bundle lean; strict mode
 * guarantees nobody imports the full `motion` component by accident.
 * reducedMotion="user" removes transform animations (keeps opacity) for
 * people with prefers-reduced-motion — Emil's rule, not optional.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
