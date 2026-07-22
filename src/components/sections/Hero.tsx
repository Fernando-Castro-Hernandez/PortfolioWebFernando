import { ParallaxCloud } from "@/components/motion/ParallaxCloud";
import { HeroIntro } from "@/components/sections/HeroIntro";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-16 pt-28"
    >
      <ParallaxCloud
        src="/images/clouds/sky-hero-twilight.jpeg"
        opacity={0.55}
        mask="bottom"
        priority
      />
      <HeroIntro />
    </section>
  );
}
