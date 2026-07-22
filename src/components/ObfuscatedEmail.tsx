"use client";

import { useSyncExternalStore } from "react";
import { site } from "@content/site";
import { MailIcon } from "@/components/icons";

const emptySubscribe = () => () => {};

/**
 * The address is assembled only on the client, after hydration, so it never
 * appears complete in the static HTML (DESIGN.md §8, anti-scraping).
 */
export function ObfuscatedEmail() {
  const hydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  if (!hydrated) {
    return (
      <span className="inline-flex items-center gap-2 text-ink-dim">
        <MailIcon className="h-4 w-4" />
        <span aria-hidden>···@···</span>
      </span>
    );
  }

  const address = `${site.emailUser}@${site.emailDomain}`;

  return (
    <a
      href={`mailto:${address}`}
      className="inline-flex items-center gap-2 text-tq-400 transition-colors hover:text-tq-500"
    >
      <MailIcon className="h-4 w-4" />
      {address}
    </a>
  );
}
