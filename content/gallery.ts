// Gallery photos. Static imports let next/image derive real dimensions and
// generate blur placeholders automatically — no manual metadata to maintain.

import type { StaticImageData } from "next/image";
import campusLunch from "../public/images/gallery/campus-lunch.jpeg";
import catNap from "../public/images/gallery/cat-nap.jpeg";
import catTableside from "../public/images/gallery/cat-tableside.jpeg";
import classLecture from "../public/images/gallery/class-lecture.jpeg";
import classmatesPortrait from "../public/images/gallery/classmates-portrait.jpeg";
import codingSession1 from "../public/images/gallery/coding-session-1.jpeg";
import codingSession2 from "../public/images/gallery/coding-session-2.jpeg";
import escalatorAscent from "../public/images/gallery/escalator-ascent.jpeg";
import ggj1 from "../public/images/gallery/ggj-1.jpeg";
import ggj2 from "../public/images/gallery/ggj-2.jpeg";
import ggj3 from "../public/images/gallery/ggj-3.jpeg";
import ggj4 from "../public/images/gallery/ggj-4.jpeg";
import ggj5 from "../public/images/gallery/ggj-5.jpeg";
import ggj6 from "../public/images/gallery/ggj-6.jpeg";
import ggj7 from "../public/images/gallery/ggj-7.jpeg";
import ggj8 from "../public/images/gallery/ggj-8.jpeg";
import roboticsWorkshop1 from "../public/images/gallery/robotics-workshop-1.jpeg";
import roboticsWorkshop2 from "../public/images/gallery/robotics-workshop-2.jpeg";
import roboticsWorkshop3 from "../public/images/gallery/robotics-workshop-3.jpeg";
import tecCommunity1 from "../public/images/gallery/tec-community-1.jpg";
import tecCommunity2 from "../public/images/gallery/tec-community-2.jpg";
import tecSignNight from "../public/images/gallery/tec-sign-night.jpeg";

export interface GalleryImage {
  image: StaticImageData;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  {
    image: ggj1,
    alt: "Global Game Jam — working with my team during the 48-hour jam",
  },
  {
    image: tecSignNight,
    alt: "The illuminated Tecnológico de Software sign lit up at night",
  },
  {
    image: ggj4,
    alt: "Global Game Jam — presenting our game to the judges",
  },
  {
    image: roboticsWorkshop1,
    alt: "Robotics workshop at Tecnológico de Software — group photo with the LEGO robot",
  },
  {
    image: escalatorAscent,
    alt: "Riding an escalator up through a plant-draped atrium",
  },
  {
    image: ggj2,
    alt: "Global Game Jam — late-night build session",
  },
  {
    image: tecCommunity1,
    alt: "Tecnológico de Software community — event group photo",
  },
  {
    image: classLecture,
    alt: "Classroom session at Tecnológico de Software — an instructor walking the group through a service value-chain diagram",
  },
  {
    image: roboticsWorkshop3,
    alt: "Robotics workshop at Tecnológico de Software — testing the robot",
  },
  {
    image: ggj5,
    alt: "Global Game Jam — the team at the venue",
  },
  {
    image: classmatesPortrait,
    alt: "With a classmate at Tecnológico de Software, both grinning for the camera",
  },
  {
    image: codingSession1,
    alt: "Coding session at Tecnológico de Software — algorithms on the whiteboard",
  },
  {
    image: catNap,
    alt: "A tabby cat napping in the sun on a tabletop",
  },
  {
    image: ggj3,
    alt: "Global Game Jam — team photo with our finished game",
  },
  {
    image: ggj6,
    alt: "Global Game Jam — demo time on the big screen",
  },
  {
    image: campusLunch,
    alt: "Lunch break with classmates around a table on campus",
  },
  {
    image: codingSession2,
    alt: "Coding session at Tecnológico de Software — heads-down at the laptops",
  },
  {
    image: catTableside,
    alt: "A green-eyed tabby cat perched on a café table at golden hour",
  },
  {
    image: ggj7,
    alt: "Global Game Jam — receiving the participation certificate",
  },
  {
    image: roboticsWorkshop2,
    alt: "Robotics workshop at Tecnológico de Software — building session",
  },
  {
    image: tecCommunity2,
    alt: "Tecnológico de Software community — meetup with students and faculty",
  },
  {
    image: ggj8,
    alt: "Global Game Jam — closing ceremony",
  },
];
