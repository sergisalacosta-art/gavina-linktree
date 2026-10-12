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
export type NavChild = { label: string; to: InternalPath; hint?: string };

export const acompanyaments: NavChild[] = [
  { label: "Sessió Diagnòstica", to: "/primerasessio" },
  { label: "Acompanyament Individual", to: "/individual" },
  { label: "Matrius en Cercle", to: "/matrius", hint: "Grupal · nov 2026 - abr 2027" },
  { label: "Retir «Cures de Matriu»", to: "/retir", hint: "Dissabte 17 octubre" },
];

export const nav: NavItem[] = [
  { label: "Inici", to: "/" },
  { label: "Sobre mi", to: "/sobre-mi" },
  { label: "Acompanyaments", to: "/individual", children: acompanyaments },
  { label: "Xerrades", to: "/xerrades" },
  { label: "Recursos gratuïts", to: "/recursos" },
];
