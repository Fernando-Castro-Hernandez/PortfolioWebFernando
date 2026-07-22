import { sections } from "@content/site";

/**
 * Static altitude rail (Phase 1). Phase 3 animates the marker with scroll
 * progress so it doubles as a reading indicator.
 */
export function AltitudeRail() {
  return (
    <nav
      aria-label="Section shortcuts"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex"
    >
      <span className="font-mono text-[0.6rem] tracking-widest text-ink-dim">ALT</span>
      <a
        href="#top"
        aria-label="Back to top — ground level"
        className="block h-2 w-2 rounded-full bg-ink-dim/70 transition-colors hover:bg-tq-400 focus-visible:bg-tq-400"
      />
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={section.title}
          className="block h-2 w-2 rounded-full bg-ink-dim/70 transition-colors hover:bg-tq-400 focus-visible:bg-tq-400"
        />
      ))}
      <span className="font-mono text-[0.6rem] tracking-widest text-ink-dim">0M</span>
    </nav>
  );
}
