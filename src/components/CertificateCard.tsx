"use client";

import Image from "next/image";
import type { Certificate } from "@content/certificates";
import type { LightboxItem } from "@/components/Lightbox";
import { ArrowUpRightIcon } from "@/components/icons";

interface CertificateCardProps {
  certificate: Certificate;
  onOpen: (item: LightboxItem) => void;
}

/**
 * One entry in the "more certificates" tier. The thumbnail sits at 80% opacity
 * and slightly desaturated so a wall of clashing issuer palettes (DataCamp's
 * cream, AWS's navy, Cisco's blue) reads as one grid; attention restores it.
 * The PDF link stays as text so the document is reachable without JavaScript.
 */
export function CertificateCard({ certificate, onOpen }: CertificateCardProps) {
  const { name, issuer, file, image } = certificate;

  return (
    <li>
      {image && (
        <button
          type="button"
          data-cert-trigger
          onClick={() => onOpen({ image, name, issuer, file })}
          aria-label={`View certificate: ${name} (${issuer})`}
          className="group mb-3 block w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-2 transition-colors hover:border-tq-400/40"
        >
          <div className="aspect-[16/10]">
            <Image
              src={image}
              alt=""
              placeholder="blur"
              sizes="(max-width: 768px) 90vw, (max-width: 1280px) 44vw, 22rem"
              className="h-full w-full object-contain opacity-80 saturate-[0.85] transition-[opacity,filter,scale] duration-200 ease-out group-hover:opacity-100 group-hover:saturate-100 group-focus-visible:opacity-100 group-focus-visible:saturate-100 motion-safe:group-hover:scale-[1.02]"
            />
          </div>
        </button>
      )}

      <p className="text-sm text-ink">{name}</p>
      <p className="mt-0.5 font-mono text-xs text-ink-dim">{issuer}</p>
      {file && (
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-tq-400 transition-colors hover:text-tq-500"
          aria-label={`View credential: ${name} (${issuer}), opens PDF in a new tab`}
        >
          View credential
          <ArrowUpRightIcon className="h-3 w-3" />
        </a>
      )}
    </li>
  );
}
