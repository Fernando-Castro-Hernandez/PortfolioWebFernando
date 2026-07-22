import Image from "next/image";

interface ParallaxCloudProps {
  src: string;
  /** 0-1; clouds stay atmospheric, never competing with text. */
  opacity?: number;
  objectPosition?: string;
  scrim?: "base" | "strong";
  /** "band" fades top+bottom (mid-page sections); "bottom" only fades the lower edge (hero). */
  mask?: "band" | "bottom";
  priority?: boolean;
}

const SCRIMS = {
  base: "linear-gradient(180deg, rgba(4,20,26,0.55), rgba(4,20,26,0.32) 45%, rgba(4,20,26,0.55))",
  strong:
    "linear-gradient(180deg, rgba(4,20,26,0.72), rgba(4,20,26,0.5) 45%, rgba(4,20,26,0.72))",
  hero: "linear-gradient(180deg, rgba(4,20,26,0.62) 0%, rgba(4,20,26,0.38) 45%, rgba(4,20,26,0.78) 100%)",
};

/**
 * Cloud layer that drifts ±7% of its band as it crosses the viewport.
 * Pure CSS scroll-driven animation (`animation-timeline: view()`, see
 * globals.css): runs on the compositor, zero main-thread cost, and browsers
 * without support simply render the static cloud. The image bleeds 10%
 * beyond the band so the drift never exposes a gap.
 */
export function ParallaxCloud({
  src,
  opacity = 0.4,
  objectPosition = "center",
  scrim = "base",
  mask = "band",
  priority = false,
}: ParallaxCloudProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${
        mask === "band"
          ? "[mask-image:linear-gradient(180deg,transparent,black_15%,black_85%,transparent)]"
          : "[mask-image:linear-gradient(180deg,black_65%,transparent)]"
      }`}
    >
      <div className="cloud-parallax absolute -inset-y-[10%] inset-x-0">
        <Image
          src={src}
          alt=""
          fill
          sizes="100vw"
          quality={55}
          priority={priority}
          className="object-cover"
          style={{ opacity, objectPosition }}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{ background: mask === "bottom" ? SCRIMS.hero : SCRIMS[scrim] }}
      />
    </div>
  );
}
