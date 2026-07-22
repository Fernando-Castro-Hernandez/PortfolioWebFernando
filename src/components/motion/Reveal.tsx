"use client";

import { m } from "motion/react";
import type { ReactNode } from "react";

/** Strong ease-out — built-in CSS easings are too weak for assembly moves. */
const EASE_OUT = [0.23, 1, 0.32, 1] as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Entrance travel in px; keep small — assembly, not arrival from off-screen. */
  y?: number;
  delay?: number;
  duration?: number;
}

/** Single block that assembles when scrolled into view (once). */
export function Reveal({
  children,
  className,
  y = 14,
  delay = 0,
  duration = 0.55,
}: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
      transition={{ duration, ease: EASE_OUT, delay }}
    >
      {children}
    </m.div>
  );
}

interface RevealGroupProps {
  children: ReactNode;
  className?: string;
  /** Delay between children; 30-80ms — longer reads as slow. */
  stagger?: number;
}

/** Parent that staggers its RevealItem children. */
export function RevealGroup({ children, className, stagger = 0.07 }: RevealGroupProps) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -60px 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </m.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
}

export function RevealItem({ children, className, y = 16 }: RevealItemProps) {
  return (
    <m.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: EASE_OUT },
        },
      }}
    >
      {children}
    </m.div>
  );
}
