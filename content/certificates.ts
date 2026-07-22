// Certificates grouped by area (PRODUCT.md §4) — never a flat list.
// `file` points to the public PDF; certificates without a file render as text only.
// Source scans live in content/certificates/ (the CV folder, not served).

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
    area: "Cloud",
    certificates: [
      {
        name: "AWS Academy Graduate — Cloud Foundations",
        issuer: "AWS Academy",
        file: "/certificates/aws-cloud-foundations.pdf",
      },
    ],
  },
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
    area: "Networking & Python",
    certificates: [
      {
        name: "Network Technician Career Path",
        issuer: "Cisco Networking Academy",
        file: "/certificates/network-technician-career-path.pdf",
      },
      {
        name: "Python Essentials 1",
        issuer: "Cisco Networking Academy",
        file: "/certificates/python-essentials-1.pdf",
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
