// Shape of a walkthrough screen, shared by every project that has one
// (content/novux.ts, content/alfamascotas.ts). Rendered by ProjectTour.

import type { StaticImageData } from "next/image";

export interface TourShot {
  image: StaticImageData;
  title: string;
  /** What the screen proves — the decision behind it, not what it contains. */
  note: string;
  /** Describes the screen itself, for screen readers. */
  alt: string;
  /**
   * Marks a screen where the AI work is the point. ProjectTour lights those
   * cards so the applied-AI thread is visible before a caption is read.
   */
  ai?: boolean;
}
