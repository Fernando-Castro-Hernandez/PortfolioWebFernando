"use client";

import Image from "next/image";
import { useState } from "react";
import { novuxTour } from "@content/novux";
import { Lightbox, type LightboxItem } from "@/components/Lightbox";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * Screen-by-screen walkthrough of the flagship project, below the project grid.
 * Same restraint as the certificate previews: NovuxTracker's red would fight
 * the ascent palette at full strength, so the shots rest slightly dimmed and
 * come back to full colour on attention.
 *
 * CSS columns rather than a grid — the captures mix wide desktop screens with
 * two portrait ones (chat, mobile), and fixed rows would letterbox both.
 */
export function NovuxTour() {
  const [opened, setOpened] = useState<LightboxItem | null>(null);

  return (
    <>
      <Reveal className="mt-20" y={10}>
        <h3 className="font-mono text-sm tracking-widest text-ink-dim">
          NOVUX TRACKER · WALKTHROUGH
        </h3>
        <p className="mt-3 max-w-[65ch] text-ink-dim">
          Captured from production. Each screen is here for a decision behind
          it, not for the pixels.
        </p>
      </Reveal>

      <RevealGroup className="mt-8 gap-6 md:columns-2" stagger={0.06}>
        {novuxTour.map((shot) => {
          // Phone-shaped captures would run three times the height of a desktop
          // one at full column width and wreck the column balance, so they sit
          // narrower and centred. The ratio comes free from the static import.
          const ratio = shot.image.width / shot.image.height;
          const frameWidth =
            ratio >= 1 ? "w-full" : ratio < 0.6 ? "mx-auto w-[46%]" : "mx-auto w-[62%]";

          return (
          <RevealItem
            key={shot.title}
            className="glass-still mb-6 break-inside-avoid p-4 md:p-5"
            y={14}
          >
            <button
              type="button"
              data-novux-trigger
              onClick={() =>
                setOpened({
                  image: shot.image,
                  title: shot.title,
                  subtitle: "NovuxTracker",
                  alt: shot.alt,
                  file: "https://gymtrackers.app",
                  fileLabel: "Open the live app",
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

            <p className="mt-4 font-display text-base font-bold text-ink">
              {shot.title}
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
