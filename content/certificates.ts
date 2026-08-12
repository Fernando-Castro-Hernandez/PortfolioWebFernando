// Certifications, split into two tiers:
//  - featuredBadges: the industry credentials that take real study (AWS Academy,
//    Cisco). Shown large in a Liquid Glass showcase.
//  - certificateGroups: shorter courses, grouped by area (PRODUCT.md §4).
// `file` points to a public PDF; entries without one render without a link.
// `image` is the certificate itself, rendered by scripts/certificate-previews.mjs
// (`npm run certificates`); entries without one fall back to a text-only card.
// Source scans live in content/certificates/ (the CV folder, not served).

import type { StaticImageData } from "next/image";
import awsFoundations from "../public/images/badges/aws-academy-graduate-cloud-foundations.png";
import awsGenerativeAi from "../public/images/badges/aws-academy-graduate-generative-ai-foundations.png";
import awsOperations from "../public/images/badges/aws-academy-graduate-cloud-operations-training-badg.png";
import ciscoNetwork from "../public/images/badges/network-technician-career-path.png";
import ciscoPython from "../public/images/badges/python-essentials-1.png";

import awsFoundationsCert from "../public/images/certificates/aws-cloud-foundations.webp";
import awsGenerativeAiCert from "../public/images/certificates/aws-generative-ai-foundations.webp";
import awsOperationsCert from "../public/images/certificates/aws-cloud-operations.webp";
import ciscoNetworkCert from "../public/images/certificates/network-technician-career-path.webp";
import ciscoPythonCert from "../public/images/certificates/python-essentials-1.webp";
import githubConceptsCert from "../public/images/certificates/github-concepts.webp";
import ieeeCert from "../public/images/certificates/ieee-membership.webp";
import intermediateGitCert from "../public/images/certificates/intermediate-git.webp";
import intermediateSqlCert from "../public/images/certificates/intermediate-sql.webp";
import dockerCert from "../public/images/certificates/introduction-to-docker.webp";
import introSqlCert from "../public/images/certificates/introduction-to-sql-datacamp.webp";
import padatCert from "../public/images/certificates/padat-analisis-de-datos.webp";
import globalGameJamCert from "../public/images/certificates/global-game-jam-2026.webp";
import inventForThePlanetCert from "../public/images/certificates/invent-for-the-planet-2026.webp";

export interface FeaturedBadge {
  image: StaticImageData;
  name: string;
  issuer: string;
  /** What it certifies / why it matters — one line. */
  note: string;
  file?: string;
  /** The certificate itself, opened in the lightbox. */
  certificate?: StaticImageData;
}

export const featuredBadges: FeaturedBadge[] = [
  {
    image: awsFoundations,
    name: "Cloud Foundations",
    issuer: "AWS Academy",
    note: "Core AWS services, security, and architecture.",
    file: "/certificates/aws-cloud-foundations.pdf",
    certificate: awsFoundationsCert,
  },
  {
    image: awsGenerativeAi,
    name: "Generative AI Foundations",
    issuer: "AWS Academy",
    note: "Foundation models, prompting, and AWS generative AI services.",
    file: "/certificates/aws-generative-ai-foundations.pdf",
    certificate: awsGenerativeAiCert,
  },
  {
    image: awsOperations,
    name: "Cloud Operations",
    issuer: "AWS Academy",
    note: "Operating and monitoring workloads on AWS.",
    file: "/certificates/aws-cloud-operations.pdf",
    certificate: awsOperationsCert,
  },
  {
    image: ciscoNetwork,
    name: "Network Technician Career Path",
    issuer: "Cisco Networking Academy",
    note: "Networking fundamentals, protocols, and troubleshooting.",
    file: "/certificates/network-technician-career-path.pdf",
    certificate: ciscoNetworkCert,
  },
  {
    image: ciscoPython,
    name: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    note: "Python foundations, verified by Cisco.",
    file: "/certificates/python-essentials-1.pdf",
    certificate: ciscoPythonCert,
  },
];

export interface Certificate {
  name: string;
  issuer: string;
  file?: string;
  /** Preview shown on the card and enlarged in the lightbox. */
  image?: StaticImageData;
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
        image: intermediateSqlCert,
      },
      {
        name: "Introduction to SQL",
        issuer: "DataCamp",
        file: "/certificates/introduction-to-sql-datacamp.pdf",
        image: introSqlCert,
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
        image: dockerCert,
      },
      {
        name: "Intermediate Git",
        issuer: "DataCamp",
        file: "/certificates/intermediate-git.pdf",
        image: intermediateGitCert,
      },
      {
        name: "Introduction to GitHub Concepts",
        issuer: "DataCamp",
        file: "/certificates/github-concepts.pdf",
        image: githubConceptsCert,
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
        image: padatCert,
      },
    ],
  },
  {
    area: "Events & Community",
    certificates: [
      {
        name: "Invent for the Planet 2026",
        issuer: "Texas A&M University",
        image: inventForThePlanetCert,
      },
      {
        name: "Global Game Jam 2026",
        issuer: "Software House Mérida",
        image: globalGameJamCert,
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
        image: ieeeCert,
      },
    ],
  },
];
