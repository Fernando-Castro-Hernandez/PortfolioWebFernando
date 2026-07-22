import { site } from "@content/site";
import { AltitudeRail } from "@/components/AltitudeRail";
import { About } from "@/components/sections/About";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";

// Person schema for recruiters' search engines. Deliberately no email or
// phone here — contact goes through the form or obfuscated channels.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.fullName,
  alternateName: site.name,
  jobTitle: "Software Development Student",
  description:
    "Backend & cloud-focused software development student building AI automations and production systems.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mérida",
    addressRegion: "Yucatán",
    addressCountry: "MX",
  },
  sameAs: [site.socials.github, site.socials.linkedin],
  knowsAbout: [
    "Java",
    "C#",
    ".NET",
    "Spring Boot",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Terraform",
    "n8n",
    "AI automation",
  ],
  affiliation: {
    "@type": "EducationalOrganization",
    name: "Instituto Tecnológico de Software",
  },
};

export default function Home() {
  return (
    <main
      id="main"
      className="relative [background-image:linear-gradient(180deg,var(--sky-abyss)_0%,var(--sky-deep)_30%,var(--sky-mid)_65%,var(--sky-high)_100%)]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
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
