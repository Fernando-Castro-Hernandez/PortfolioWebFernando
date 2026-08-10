"use client";

import { useState } from "react";
import { certificateGroups } from "@content/certificates";
import { CertificateCard } from "@/components/CertificateCard";
import { Lightbox, type LightboxItem } from "@/components/Lightbox";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

/**
 * Second tier: shorter courses grouped by area. Three columns rather than four
 * so the previews are wide enough to actually read. CSS columns rather than a
 * grid: the groups differ a lot in length, and grid rows left large holes under
 * the short ones. Same masonry approach as the gallery.
 */
export function CertificateGroups() {
  const [opened, setOpened] = useState<LightboxItem | null>(null);

  return (
    <>
      <RevealGroup
        className="mt-6 gap-6 md:columns-2 xl:columns-3"
        stagger={0.06}
      >
        {certificateGroups.map((group) => (
          <RevealItem
            key={group.area}
            className="glass-still mb-6 break-inside-avoid p-6"
            y={14}
          >
            <h4 className="font-display text-lg font-bold">{group.area}</h4>
            <ul className="mt-4 flex flex-col gap-6">
              {group.certificates.map((certificate) => (
                <CertificateCard
                  key={`${certificate.name}-${certificate.issuer}`}
                  certificate={certificate}
                  onOpen={setOpened}
                />
              ))}
            </ul>
          </RevealItem>
        ))}
      </RevealGroup>

      <Lightbox item={opened} onClose={() => setOpened(null)} />
    </>
  );
}
