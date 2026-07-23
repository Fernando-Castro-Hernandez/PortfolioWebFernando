// Certifications, split into two tiers:
//  - featuredBadges: the industry credentials that take real study (AWS Academy,
//    Cisco). Shown large in a Liquid Glass showcase.
//  - certificateGroups: shorter courses, grouped by area (PRODUCT.md §4).
// `file` points to a public PDF; entries without one render without a link.
// Source scans live in content/certificates/ (the CV folder, not served).

import type { StaticImageData } from "next/image";
import awsFoundations from "../public/images/badges/aws-academy-graduate-cloud-foundations.png";
import awsOperations from "../public/images/badges/aws-academy-graduate-cloud-operations-training-badg.png";
import ciscoNetwork from "../public/images/badges/network-technician-career-path.png";
import ciscoPython from "../public/images/badges/python-essentials-1.png";

export interface FeaturedBadge {
  image: StaticImageData;
  name: string;
  issuer: string;
  /** What it certifies / why it matters — one line. */
  note: string;
  file?: string;
}

export const featuredBadges: FeaturedBadge[] = [
  {
    image: awsFoundations,
    name: "Cloud Foundations",
    issuer: "AWS Academy",
    note: "Core AWS services, security, and architecture.",
    file: "/certificates/aws-cloud-foundations.pdf",
  },
  {
    image: awsOperations,
    name: "Cloud Operations",
    issuer: "AWS Academy",
    note: "Operating and monitoring workloads on AWS.",
  },
  {
    image: ciscoNetwork,
    name: "Network Technician Career Path",
    issuer: "Cisco Networking Academy",
    note: "Networking fundamentals, protocols, and troubleshooting.",
    file: "/certificates/network-technician-career-path.pdf",
  },
  {
    image: ciscoPython,
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    note: "Python foundations, verified by Cisco.",
    file: "/certificates/python-essentials-1.pdf",
  },
];

export interface Certificate {
  name: string;
  issuer: string;
  file?: string;
}

export interface CertificateGroup {
  area: string;
  certificates: Certificate[];
}

export const certificateGroups: CertificateGroup[] = [
  {
    area: "Databases & SQL",
    certificates: [
      {
        name: "Intermediate SQL",
        issuer: "DataCamp",
        file: "/certificates/intermediate-sql.pdf",
      },
      {
        name: "Introduction to SQL",
        issuer: "DataCamp",
        file: "/certificates/introduction-to-sql-datacamp.pdf",
      },
      { name: "Introduction to SQL", issuer: "Sololearn" },
    ],
  },
  {
    area: "DevOps & Tools",
    certificates: [
      {
        name: "Introduction to Docker",
        issuer: "DataCamp",
        file: "/certificates/introduction-to-docker.pdf",
      },
      {
        name: "Intermediate Git",
        issuer: "DataCamp",
        file: "/certificates/intermediate-git.pdf",
      },
      {
        name: "Introduction to GitHub Concepts",
        issuer: "DataCamp",
        file: "/certificates/github-concepts.pdf",
      },
    ],
  },
  {
    area: "Data",
    certificates: [
      {
        name: "Propedéutico en Análisis de Datos",
        issuer: "PADAT-CPF",
        file: "/certificates/padat-analisis-de-datos.pdf",
      },
    ],
  },
  {
    area: "Membership",
    certificates: [
      {
        name: "IEEE Student Membership",
        issuer: "IEEE",
        file: "/certificates/ieee-membership.pdf",
      },
    ],
  },
];
