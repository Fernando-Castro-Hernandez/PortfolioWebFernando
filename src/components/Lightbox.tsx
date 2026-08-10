"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon, CloseIcon } from "@/components/icons";

export interface LightboxItem {
  image: StaticImageData;
  name: string;
  issuer: string;
  /** Optional PDF of the same credential. */
  file?: string;
}

interface LightboxProps {
  /** The item to show, or null to close. */
  item: LightboxItem | null;
  onClose: () => void;
}

/**
 * Full-size viewer for a certificate, built on a native <dialog>. showModal()
 * gives us the focus trap, Escape, inert background and focus restoration for
 * free — none of it is reimplemented here. Enter/exit animation lives in
 * globals.css (@starting-style + allow-discrete).
 */
export function Lightbox({ item, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  // Keep the last item on screen while the dialog animates out. Adjusted during
  // render, not in an effect: showModal() moves focus to the first focusable
  // child, so the content has to be in the DOM before the effect below runs.
  const [shown, setShown] = useState<LightboxItem | null>(item);
  if (item && item !== shown) setShown(item);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (item && !dialog.open) {
      dialog.showModal();
      // showModal() does not stop the page behind from scrolling.
      document.body.style.overflow = "hidden";
    } else if (!item && dialog.open) {
      dialog.close();
      document.body.style.overflow = "";
    }
  }, [item]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const titleId = "lightbox-title";

  return (
    <dialog
      ref={dialogRef}
      className="lightbox place-items-center open:grid"
      aria-labelledby={titleId}
      // Escape closes the dialog natively; keep React's state in step.
      onClose={() => {
        document.body.style.overflow = "";
        onClose();
      }}
      // The backdrop and the padding around the sheet are the dialog itself.
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose();
      }}
    >
      {/* w-fit so the caption and the PDF link line up with the certificate's
          edges instead of with a wider invisible box. */}
      {shown && (
        <div className="lightbox-sheet flex w-fit max-w-[min(94vw,72rem)] flex-col gap-3 p-4 md:p-6">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p
                id={titleId}
                className="font-display text-lg font-bold text-ink"
              >
                {shown.name}
              </p>
              <p className="mt-0.5 font-mono text-xs text-tq-400">
                {shown.issuer}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close certificate"
              className="-mt-1 shrink-0 rounded-full border border-white/15 bg-white/10 p-2 text-ink transition-colors hover:bg-white/15"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          <Image
            src={shown.image}
            alt={`${shown.name} certificate issued by ${shown.issuer}`}
            placeholder="blur"
            sizes="(max-width: 768px) 92vw, 56rem"
            // An explicit width, not w-auto: with width:auto the element sizes
            // to whichever srcset variant loaded, which then feeds back into
            // `sizes` and settles smaller than the space available.
            className="h-auto max-h-[78svh] w-[min(92vw,56rem)] rounded-xl border border-white/12 object-contain shadow-[0_16px_48px_rgba(0,0,0,0.45)]"
          />

          {shown.file && (
            <a
              href={shown.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 self-center text-sm font-medium text-tq-400 transition-colors hover:text-tq-500"
            >
              Open the PDF
              <ArrowUpRightIcon className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      )}
    </dialog>
  );
}
