import Image from "next/image";
import { heroAltitude, site } from "@content/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(180deg,black_65%,transparent)]"
      >
        <Image
          src="/images/clouds/sky-hero-twilight.jpeg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={60}
          className="object-cover opacity-55"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(4,20,26,0.62) 0%, rgba(4,20,26,0.38) 45%, rgba(4,20,26,0.78) 100%)",
          }}
        />
      </div>

      <div className="glass max-w-2xl px-8 py-12 text-center md:px-14 md:py-16">
        <p className="font-mono text-xs tracking-widest text-tq-400">{heroAltitude}</p>
        <h1 className="mt-5 font-display text-[clamp(2.75rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
          {site.name}
        </h1>
        <p className="mt-4 text-lg text-ink-dim">{site.role}</p>
        <p className="mx-auto mt-6 max-w-prose text-ink-dim">{site.tagline}</p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a href={site.cta.primary.href} className="btn-cta">
            {site.cta.primary.label}
          </a>
          <a href={site.cta.secondary.href} className="btn-quiet">
            {site.cta.secondary.label}
          </a>
        </div>
      </div>

      <ul
        aria-label="Milestones"
        className="mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs text-ink-dim"
      >
        {site.milestones.map((milestone, index) => (
          <li key={milestone} className="flex items-center gap-3">
            {index > 0 && (
              <span aria-hidden className="text-tq-500">
                ·
              </span>
            )}
            {milestone}
          </li>
        ))}
      </ul>
    </section>
  );
}
