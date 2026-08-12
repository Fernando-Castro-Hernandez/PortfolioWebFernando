"use client";

import Image from "next/image";
import { useState } from "react";
import type { TourShot } from "@content/tour";
import { Lightbox, type LightboxItem } from "@/components/Lightbox";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

interface ProjectTourProps {
  /** Mono kicker above the walkthrough, e.g. "NOVUX TRACKER · WALKTHROUGH". */
  eyebrow: string;
  lead: string;
  shots: TourShot[];
  /** Shown under the title inside the lightbox — the project's name. */
  subtitle: string;
  /** Where a screen sends you: the live app, the repository. */
  link?: { href: string; label: string };
  className?: string;
}

/**
 * Screen-by-screen walkthrough of a project, below the project grid. Same
 * restraint as the certificate previews: both apps are branded red, which would
 * fight the ascent palette at full strength, so the shots rest slightly dimmed
 * and come back to full colour on attention.
 *
 * CSS columns rather than a grid — the captures mix wide desktop screens with
 * portrait ones (the chat panels), and fixed rows would letterbox both.
 */
export function ProjectTour({
  eyebrow,
  lead,
  shots,
  subtitle,
  link,
  className = "mt-20",
}: ProjectTourProps) {
  const [opened, setOpened] = useState<LightboxItem | null>(null);

  return (
    <>
      <Reveal className={className} y={10}>
        <h3 className="font-mono text-sm tracking-widest text-ink-dim">
          {eyebrow}
        </h3>
        <p className="mt-3 max-w-[65ch] text-ink-dim">{lead}</p>
      </Reveal>

      <RevealGroup className="mt-8 gap-6 md:columns-2" stagger={0.06}>
        {shots.map((shot) => {
          // Phone-shaped captures would run three times the height of a desktop
          // one at full column width and wreck the column balance, so they sit
          // narrower and centred. The ratio comes free from the static import.
          const ratio = shot.image.width / shot.image.height;
          const frameWidth =
            ratio >= 1 ? "w-full" : ratio < 0.6 ? "mx-auto w-[46%]" : "mx-auto w-[62%]";

          return (
            <RevealItem
              key={shot.title}
              // The AI screens are lit from within: the applied-AI thread reads
              // as a group across the column before a single caption does.
              className={`${shot.ai ? "glass-lit" : "glass-still"} mb-6 break-inside-avoid p-4 md:p-5`}
              y={14}
            >
              <button
                type="button"
                data-tour-trigger
                onClick={() =>
                  setOpened({
                    image: shot.image,
                    title: shot.title,
                    subtitle,
                    alt: shot.alt,
                    file: link?.href,
                    fileLabel: link?.label,
                  })
                }
                className={`group block overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] transition-colors hover:border-tq-400/40 ${frameWidth}`}
                aria-label={`View screen: ${shot.title}`}
              >
                <Image
                  src={shot.image}
                  alt=""
                  placeholder="blur"
                  sizes={
                    ratio >= 1
                      ? "(max-width: 768px) 90vw, 34rem"
                      : "(max-width: 768px) 45vw, 17rem"
                  }
                  className="h-auto w-full opacity-80 saturate-[0.85] transition-[opacity,filter,scale] duration-200 ease-out group-hover:opacity-100 group-hover:saturate-100 group-focus-visible:opacity-100 group-focus-visible:saturate-100 motion-safe:group-hover:scale-[1.01]"
                />
              </button>

              <p className="mt-4 flex items-center gap-2 font-display text-base font-bold text-ink">
                {shot.title}
                {shot.ai && (
                  // The glow carries the message; this is the version of it a
                  // screen reader and a colour-blind visitor still get.
                  <span className="shrink-0 rounded-full border border-tq-400/30 bg-tq-400/10 px-2 py-px font-mono text-[0.625rem] font-medium tracking-widest text-tq-400">
                    AI
                  </span>
                )}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">
                {shot.note}
              </p>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Lightbox item={opened} onClose={() => setOpened(null)} />
    </>
  );
}
