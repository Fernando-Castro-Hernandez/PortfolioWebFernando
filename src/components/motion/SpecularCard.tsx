"use client";

import type { ReactNode } from "react";
import { useRef } from "react";

interface SpecularCardProps {
  className?: string;
  children: ReactNode;
}

/** Half the light's width, so the glow centers on the pointer. */
const LIGHT_HALF_WIDTH = 70;

/**
 * Glass surface whose top specular edge follows the pointer — the "liquid"
 * in Liquid Glass. The light is a leaf span moved with a direct transform
 * (no CSS-var-on-parent recalc storm); its visibility is CSS, gated behind
 * (hover:hover) in globals.css.
 */
export function SpecularCard({ className, children }: SpecularCardProps) {
  const lightRef = useRef<HTMLSpanElement>(null);

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    const light = lightRef.current;
    if (!light) return;
    const rect = event.currentTarget.getBoundingClientRect();
    light.style.transform = `translateX(${
      event.clientX - rect.left - LIGHT_HALF_WIDTH
    }px)`;
  }

  return (
    <div onMouseMove={handleMove} className={`specular ${className ?? ""}`}>
      <span ref={lightRef} aria-hidden className="specular-light" />
      {children}
    </div>
  );
}
