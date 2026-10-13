export const WA_URL = "https://wa.me/34616351534";
export const PHONE = "+34 616 351 534";

export type InternalPath =
  | "/"
  | "/sobre-mi"
  | "/primerasessio"
  | "/individual"
  | "/matrius"
  | "/retir"
  | "/xerrades"
  | "/recursos";

export type NavItem = { label: string; to: InternalPath; children?: NavChild[] };
// hidden: true amaga l'enllaç de la web (la pàgina continua existint per URL).
export type NavChild = { label: string; to: InternalPath; hint?: string; hidden?: boolean };

const allAcompanyaments: NavChild[] = [
  { label: "Sessió Diagnòstica", to: "/primerasessio" },
  { label: "Acompanyament Individual", to: "/individual" },
  { label: "Matrius en Cercle", to: "/matrius", hint: "Grupal · nov 2026 - abr 2027", hidden: true },
  { label: "Retir «Cures de Matriu»", to: "/retir", hint: "Dissabte 17 octubre", hidden: true },
];

export const acompanyaments = allAcompanyaments.filter((a) => !a.hidden);

export const nav: NavItem[] = [
  { label: "Inici", to: "/" },
  { label: "Sobre mi", to: "/sobre-mi" },
  { label: "Acompanyaments", to: "/individual", children: acompanyaments },
  { label: "Xerrades", to: "/xerrades" },
  { label: "Recursos gratuïts", to: "/recursos" },
];
