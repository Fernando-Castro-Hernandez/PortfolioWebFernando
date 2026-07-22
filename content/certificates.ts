// Certificates grouped by area (PRODUCT.md §4) — never a flat list.
// PDF/image files live in content/certificates/; wired for display in Phase 2.

export interface Certificate {
  name: string;
  issuer: string;
}

export interface CertificateGroup {
  area: string;
  certificates: Certificate[];
}

export const certificateGroups: CertificateGroup[] = [
  {
    area: "Cloud",
    certificates: [
      { name: "AWS Academy Graduate — Cloud Foundations", issuer: "AWS Academy" },
    ],
  },
  {
    area: "Databases & SQL",
    certificates: [
      { name: "Intermediate SQL", issuer: "DataCamp" },
      { name: "Introduction to SQL", issuer: "DataCamp" },
      { name: "Introduction to SQL", issuer: "Sololearn" },
    ],
  },
  {
    area: "DevOps & Tools",
    certificates: [
      { name: "Introduction to Docker", issuer: "DataCamp" },
      { name: "Intermediate Git", issuer: "DataCamp" },
      { name: "Introduction to GitHub Concepts", issuer: "DataCamp" },
    ],
  },
  {
    area: "Networking & Python",
    certificates: [
      { name: "Network Technician Career Path", issuer: "Cisco Networking Academy" },
      { name: "Python Essentials 1", issuer: "Cisco Networking Academy" },
    ],
  },
  {
    area: "Data",
    certificates: [
      { name: "Propedéutico en Análisis de Datos", issuer: "PADAT-CPF" },
    ],
  },
  {
    area: "Membership",
    certificates: [{ name: "IEEE Student Membership", issuer: "IEEE" }],
  },
];
