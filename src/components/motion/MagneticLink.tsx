"use client";

import { m, useReducedMotion, useSpring } from "motion/react";
import type { ReactNode } from "react";
import { useRef } from "react";

interface MagneticLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
}

/**
 * CTA that leans a few pixels toward the pointer. Spring-interpolated so the
 * motion has momentum instead of raw mouse-tracking (Emil: decorative mouse
 * interactions need springs). Amplitude is deliberately tiny: ±4px.
 */
export function MagneticLink({ href, className, children }: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useSpring(0, { stiffness: 220, damping: 16 });
  const y = useSpring(0, { stiffness: 220, damping: 16 });

  function handleMove(event: React.MouseEvent<HTMLAnchorElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * 8);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * 6);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <m.a
      ref={ref}
      href={href}
      className={className}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </m.a>
  );
}
