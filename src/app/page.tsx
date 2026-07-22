import { AltitudeRail } from "@/components/AltitudeRail";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

export default function Home() {
  return (
    <main
      id="main"
      className="relative [background-image:linear-gradient(180deg,var(--sky-abyss)_0%,var(--sky-deep)_30%,var(--sky-mid)_65%,var(--sky-high)_100%)]"
    >
      <AltitudeRail />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Gallery />
      <Contact />
    </main>
  );
}
