import Image from "next/image";
import { galleryImages } from "@content/gallery";
import { sections } from "@content/site";
import { Section } from "@/components/Section";

const meta = sections.find((section) => section.id === "gallery")!;

export function Gallery() {
  return (
    <Section
      id={meta.id}
      altitude={meta.altitude}
      title={meta.title}
      cloud={{ src: "/images/clouds/sky-above-clouds-day.jpg", opacity: 0.3 }}
      scrim="strong"
    >
      <div className="columns-2 gap-4 md:columns-3">
        {galleryImages.map((item) => (
          <Image
            key={item.image.src}
            src={item.image}
            alt={item.alt}
            placeholder="blur"
            sizes="(min-width: 768px) 30vw, 45vw"
            className="mb-4 w-full rounded-xl border border-white/10"
          />
        ))}
      </div>
    </Section>
  );
}
