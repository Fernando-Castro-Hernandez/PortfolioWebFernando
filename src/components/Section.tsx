import Image from "next/image";
import type { ReactNode } from "react";

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
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(180deg,transparent,black_15%,black_85%,transparent)]"
        >
          <Image
            src={cloud.src}
            alt=""
            fill
            sizes="100vw"
            quality={55}
            className="object-cover"
            style={{
              opacity: cloud.opacity ?? 0.4,
              objectPosition: cloud.objectPosition ?? "center",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                scrim === "strong"
                  ? "linear-gradient(180deg, rgba(4,20,26,0.72), rgba(4,20,26,0.5) 45%, rgba(4,20,26,0.72))"
                  : "linear-gradient(180deg, rgba(4,20,26,0.55), rgba(4,20,26,0.32) 45%, rgba(4,20,26,0.55))",
            }}
          />
        </div>
      )}

      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        <header className="mb-12">
          <p className="font-mono text-xs tracking-widest text-tq-400">{altitude}</p>
          <h2
            id={`${id}-title`}
            className="mt-3 font-display text-3xl font-bold md:text-4xl"
          >
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  );
}
