export type NavItem = {
  n: string; // section number as it appears in program materials
  label: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  { n: "1", label: "Overview", href: "/" },
  { n: "2", label: "Scope", href: "/scope" },
  { n: "3", label: "Mission", href: "/mission" },
  { n: "4", label: "Management", href: "/management" },
  { n: "5", label: "Auditor Qualifications", href: "/auditors" },
  { n: "6", label: "Risk Matrix", href: "/risk-matrix" },
  { n: "7", label: "Risk Classifications", href: "/risk-classifications" },
  { n: "8", label: "Program Requirements", href: "/requirements" },
  { n: "9", label: "Audit", href: "/audit" },
  { n: "10", label: "Acronyms", href: "/acronyms" },
  { n: "11", label: "Contact", href: "/contact" },
  { n: "12", label: "Audits & Training", href: "/audit-types" },
];
