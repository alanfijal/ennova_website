export interface Partner {
  name: string;
  logo: string;
  category: "corporate" | "esade" | "student-association";
}

// ─── Corporate & Brand Partners ─────────────────────────────
// Logos go in: public/images/partners/
export const corporatePartners: Partner[] = [
  { name: "Deloitte", logo: "/images/partners/deloitte.png", category: "corporate" },
  { name: "Coca-Cola", logo: "/images/partners/coca-cola.png", category: "corporate" },
  { name: "Notion", logo: "/images/partners/notion.png", category: "corporate" },
  { name: "Frit Ravich", logo: "/images/partners/frit-ravich.png", category: "corporate" },
  { name: "Sandwichez", logo: "/images/partners/sandwichez.png", category: "corporate" },
  { name: "Bcombinator", logo: "/images/partners/bcombinator.png", category: "corporate" },
  { name: "Connector", logo: "/images/partners/connector.png", category: "corporate" },
  { name: "Layali Pastry", logo: "/images/partners/layali-pastry.png", category: "corporate" },
  { name: "FabLab Sant Cugat", logo: "/images/partners/fablab-sant-cugat.png", category: "corporate" },
  { name: "Väcka", logo: "/images/partners/vacka.png", category: "corporate" },
  { name: "SheBlooms", logo: "/images/partners/sheblooms.png", category: "corporate" },
  { name: "Grupo Billingham", logo: "/images/partners/grupo-billingham.png", category: "corporate" },
  { name: "TéPone", logo: "/images/partners/tepone.png", category: "corporate" },
  { name: "Sertie", logo: "/images/partners/sertie.png", category: "corporate" },
  { name: "MOB", logo: "/images/partners/mob.png", category: "corporate" },
];

// ─── ESADE Ecosystem ────────────────────────────────────────
export const esadePartners: Partner[] = [
  { name: "ESADE", logo: "/images/partners/esade.png", category: "esade" },
  { name: "ESADE Alumni", logo: "/images/partners/esade-alumni.png", category: "esade" },
  { name: "ESADE IIK", logo: "/images/partners/esade-iik.png", category: "esade" },
  { name: "ESADE Center for Social Impact", logo: "/images/partners/esade-social-impact.png", category: "esade" },
  { name: "ESADE EEI", logo: "/images/partners/esade-eei.png", category: "esade" },
  { name: "ESADE Creapolis", logo: "/images/partners/esade-creapolis.png", category: "esade" },
  { name: "eGarage", logo: "/images/partners/egarage.png", category: "esade" },
  { name: "DecisionLab", logo: "/images/partners/decisionlab.png", category: "esade" },
  { name: "eWorks", logo: "/images/partners/eworks.png", category: "esade" },
];

// ─── Student Associations ───────────────────────────────────
export const studentAssociations: Partner[] = [
  { name: "ETH Entrepreneur Club", logo: "/images/partners/eth-entrepreneur-club.png", category: "student-association" },
  { name: "SASSE Entrepreneurship Society", logo: "/images/partners/sasse.png", category: "student-association" },
  { name: "NextGen Community", logo: "/images/partners/nextgen.png", category: "student-association" },
  { name: "Technova La Salle", logo: "/images/partners/technova-la-salle.png", category: "student-association" },
  { name: "IE Entrepreneurship Club", logo: "/images/partners/ie-entrepreneurship.png", category: "student-association" },
  { name: "ESCP Agora", logo: "/images/partners/escp-agora.png", category: "student-association" },
];

// ─── Strategic Partners (Homepage) ──────────────────────────
// Logos go in: public/images/partners/
export const strategicPartners: Partner[] = [
  { name: "ESADE", logo: "/images/partners/esade.png", category: "esade" },
  { name: "Conector", logo: "/images/partners/conector.png", category: "corporate" },
  { name: "BCombinator", logo: "/images/partners/bcombinator.png", category: "corporate" },
  { name: "22@", logo: "/images/partners/22at.svg", category: "corporate" },
  { name: "Coca-Cola", logo: "/images/partners/coca-cola.png", category: "corporate" },
  { name: "Deloitte", logo: "/images/partners/deloitte.png", category: "corporate" },
  { name: "Notion", logo: "/images/partners/notion.png", category: "corporate" },
  { name: "eWorks", logo: "/images/partners/eworks.png", category: "esade" },
  { name: "ESADE BAN", logo: "/images/partners/esade-ban.png", category: "esade" },
];

// ─── Convenience exports ────────────────────────────────────
export const allPartners: Partner[] = [
  ...corporatePartners,
  ...esadePartners,
  ...studentAssociations,
];

/** Flat list of all partner names */
export const allPartnerNames: string[] = allPartners.map((p) => p.name);

/** Flat list of corporate partner names */
export const corporatePartnerNames: string[] = corporatePartners.map((p) => p.name);
