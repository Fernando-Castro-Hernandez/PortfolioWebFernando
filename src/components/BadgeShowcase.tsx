"use client";

import Image from "next/image";
import { m } from "motion/react";
import { useState } from "react";
import { featuredBadges } from "@content/certificates";
import { SpecularCard } from "@/components/motion/SpecularCard";
import { Lightbox, type LightboxItem } from "@/components/Lightbox";
import { ArrowUpRightIcon } from "@/components/icons";

const badgeVariants = {
  rest: { y: 0, scale: 1 },
  hover: { y: -8, scale: 1.05 },
};

const glowVariants = {
  rest: { opacity: 0, scale: 0.8 },
  hover: { opacity: 1, scale: 1 },
};

const revealedLabel =
  "mt-3 flex items-center justify-center gap-1 text-xs font-medium text-tq-400 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100";

/**
 * Featured tier: the credentials that took real study (AWS Academy, Cisco),
 * raised into a single Liquid Glass showcase. The container's specular edge
 * tracks the pointer; each badge lifts and lights a turquoise halo on hover.
 * reducedMotion="user" (MotionConfig) drops the lift; the halo (opacity) stays.
 *
 * A badge opens its certificate in the lightbox when we have the render; the
 * PDF link then lives inside the lightbox rather than stealing the click.
 */
export function BadgeShowcase() {
  const [opened, setOpened] = useState<LightboxItem | null>(null);

  return (
    <>
      <SpecularCard className="glass">
        <div className="p-8 md:p-10">
          <div className="flex flex-col gap-1">
            <h3 className="font-display text-xl font-bold">Verified badges</h3>
            <p className="text-sm text-ink-dim">
              Industry credentials from AWS Academy and Cisco — the ones that
              took real study.
            </p>
          </div>

          <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-5">
            {featuredBadges.map((badge) => {
              const { name, issuer, file, certificate } = badge;

              const body = (
                <m.div
                  className="flex flex-col items-center gap-4"
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                >
                  <div className="relative flex aspect-square w-full max-w-[9rem] items-center justify-center">
                    <m.span
                      aria-hidden
                      variants={glowVariants}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                      className="pointer-events-none absolute inset-2 rounded-full blur-2xl"
                      style={{ background: "var(--tq-glow)" }}
                    />
                    <m.div
                      variants={badgeVariants}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 22,
                      }}
                      className="relative"
                    >
                      <Image
                        src={badge.image}
                        alt={`${name} badge — ${issuer}`}
                        placeholder="blur"
                        sizes="9rem"
                        className="h-auto w-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
                      />
                    </m.div>
                  </div>

                  <div className="text-center">
                    <p className="text-sm font-medium text-ink">{name}</p>
                    <p className="mt-0.5 font-mono text-xs text-tq-400">
                      {issuer}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-ink-dim">
                      {badge.note}
                    </p>
                  </div>
                </m.div>
              );

              return (
                <li key={name}>
                  {certificate ? (
                    <button
                      type="button"
                      data-badge-trigger
                      onClick={() =>
                        setOpened({
                          image: certificate,
                          title: name,
                          subtitle: issuer,
                          alt: `${name} certificate issued by ${issuer}`,
                          file,
                        })
                      }
                      className="group block w-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tq-400"
                      aria-label={`View certificate: ${name} (${issuer})`}
                    >
                      {body}
                      <span className={revealedLabel}>View certificate</span>
                    </button>
                  ) : file ? (
                    <a
                      href={file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tq-400"
                      aria-label={`View credential: ${name} (${issuer}), opens PDF in a new tab`}
                    >
                      {body}
                      <span className={revealedLabel}>
                        View credential
                        <ArrowUpRightIcon className="h-3 w-3" />
                      </span>
                    </a>
                  ) : (
                    <div>
                      {body}
                      <span className="mt-3 block text-center text-xs text-ink-muted">
                        Badge verified
                      </span>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </SpecularCard>

      <Lightbox item={opened} onClose={() => setOpened(null)} />
    </>
  );
}
