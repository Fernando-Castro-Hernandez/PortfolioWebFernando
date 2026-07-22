"use client";

import { useEffect, useRef, useState } from "react";
import { sections } from "@content/site";
import { CloseIcon, MenuIcon } from "@/components/icons";

export function GlassNav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function onClick(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6">
      <nav
        ref={navRef}
        aria-label="Main"
        className="glass mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full px-5 sm:px-7"
      >
        <a
          href="#top"
          className="font-mono text-sm text-ink transition-colors hover:text-tq-400"
          onClick={() => setOpen(false)}
        >
          fernando<span className="text-tq-400">.</span>castro
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-sm text-ink-dim transition-colors hover:text-ink"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="glass mx-auto mt-2 max-w-5xl rounded-2xl p-4 transition-[opacity,translate] duration-150 ease-[var(--ease-out-ascent)] starting:-translate-y-1.5 starting:opacity-0 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex items-baseline justify-between rounded-lg px-3 py-2.5 text-ink-dim transition-colors hover:bg-white/5 hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  <span>{section.title}</span>
                  <span className="font-mono text-[0.65rem] text-ink-muted">
                    {section.altitude.split("—")[0].trim()}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
