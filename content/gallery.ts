// Gallery photos. Dimensions are real (read from the files) so next/image
// can reserve space without layout shift.

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/ggj-1.jpeg",
    alt: "Global Game Jam — working with my team during the 48-hour jam",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/gallery/ggj-4.jpeg",
    alt: "Global Game Jam — presenting our game to the judges",
    width: 1280,
    height: 720,
  },
  {
    src: "/images/gallery/ggj-2.jpeg",
    alt: "Global Game Jam — late-night build session",
    width: 960,
    height: 1280,
  },
  {
    src: "/images/gallery/ggj-5.jpeg",
    alt: "Global Game Jam — the team at the venue",
    width: 1280,
    height: 720,
  },
  {
    src: "/images/gallery/ggj-3.jpeg",
    alt: "Global Game Jam — team photo with our finished game",
    width: 1200,
    height: 1600,
  },
  {
    src: "/images/gallery/ggj-6.jpeg",
    alt: "Global Game Jam — demo time on the big screen",
    width: 1280,
    height: 720,
  },
  {
    src: "/images/gallery/ggj-7.jpeg",
    alt: "Global Game Jam — receiving the participation certificate",
    width: 900,
    height: 1600,
  },
  {
    src: "/images/gallery/ggj-8.jpeg",
    alt: "Global Game Jam — closing ceremony",
    width: 900,
    height: 1600,
  },
  {
    src: "/images/gallery/robotics-workshop-1.jpeg",
    alt: "Robotics workshop at Tecnológico de Software — group photo with the LEGO robot",
    width: 1600,
    height: 1200,
  },
  {
    src: "/images/gallery/robotics-workshop-2.jpeg",
    alt: "Robotics workshop at Tecnológico de Software — building session",
    width: 1600,
    height: 900,
  },
  {
    src: "/images/gallery/robotics-workshop-3.jpeg",
    alt: "Robotics workshop at Tecnológico de Software — testing the robot",
    width: 900,
    height: 1600,
  },
  {
    src: "/images/gallery/coding-session-1.jpeg",
    alt: "Coding session at Tecnológico de Software — algorithms on the whiteboard",
    width: 1487,
    height: 1600,
  },
  {
    src: "/images/gallery/coding-session-2.jpeg",
    alt: "Coding session at Tecnológico de Software — heads-down at the laptops",
    width: 720,
    height: 1280,
  },
  {
    src: "/images/gallery/tec-community-1.jpg",
    alt: "Tecnológico de Software community — event group photo",
    width: 2048,
    height: 1536,
  },
  {
    src: "/images/gallery/tec-community-2.jpg",
    alt: "Tecnológico de Software community — meetup with students and faculty",
    width: 2048,
    height: 1536,
  },
];
