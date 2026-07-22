import type { ReactNode } from "react";
import { ParallaxCloud } from "@/components/motion/ParallaxCloud";
import { Reveal } from "@/components/motion/Reveal";

export interface CloudLayer {
  src: string;
  /** 0-1; keep clouds atmospheric, never competing with text. */
  opacity?: number;
  objectPosition?: string;
}

interface SectionProps {
  id: string;
  altitude: string;
  title: string;
  cloud?: CloudLayer;
  /** Extra darkening for bright imagery, to preserve AA contrast. */
  scrim?: "base" | "strong";
  className?: string;
  children: ReactNode;
}

export function Section({
  id,
  altitude,
  title,
  cloud,
  scrim = "base",
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`relative isolate scroll-mt-24 ${className ?? ""}`}
    >
      {cloud && (
        <ParallaxCloud
          src={cloud.src}
          opacity={cloud.opacity}
          objectPosition={cloud.objectPosition}
          scrim={scrim}
        />
      )}

      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <Reveal y={10} duration={0.5}>
          <header className="mb-12">
            <p className="font-mono text-xs tracking-widest text-tq-400">{altitude}</p>
            <h2
              id={`${id}-title`}
              className="mt-3 font-display text-3xl font-bold md:text-4xl"
            >
              {title}
            </h2>
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
