import { pages, type Lang } from "@/lib/i18n";

export const WA_URL = "https://wa.me/34616351534";
export const PHONE = "+34 616 351 534";

export type NavItem = { label: string; to: string; children?: NavChild[] };
// hidden: true amaga l'enllaç de la web (la pàgina continua existint per URL).
export type NavChild = { label: string; to: string; hint?: string; hidden?: boolean };

export function getAcompanyaments(lang: Lang): NavChild[] {
  const all: NavChild[] =
    lang === "es"
      ? [
          { label: "Sesión Diagnóstica", to: pages.sessio.es },
          { label: "Acompañamiento Individual", to: pages.individual.es },
          { label: "Matrius en Cercle", to: pages.matrius.ca, hint: "Grupal · nov 2026 - abr 2027", hidden: true },
          { label: "Retiro «Cures de Matriu»", to: pages.retir.ca, hint: "Sábado 17 de octubre", hidden: true },
        ]
      : [
          { label: "Sessió Diagnòstica", to: pages.sessio.ca },
          { label: "Acompanyament Individual", to: pages.individual.ca },
          { label: "Matrius en Cercle", to: pages.matrius.ca, hint: "Grupal · nov 2026 - abr 2027", hidden: true },
          { label: "Retir «Cures de Matriu»", to: pages.retir.ca, hint: "Dissabte 17 octubre", hidden: true },
        ];
  return all.filter((a) => !a.hidden);
}

export function getNav(lang: Lang): NavItem[] {
  const acompanyaments = getAcompanyaments(lang);
  return lang === "es"
    ? [
        { label: "Inicio", to: pages.home.es },
        { label: "Sobre mí", to: pages.sobreMi.es },
        { label: "Acompañamientos", to: pages.individual.es, children: acompanyaments },
        { label: "Charlas", to: pages.xerrades.es },
        { label: "Recursos gratuitos", to: pages.recursos.es },
      ]
    : [
        { label: "Inici", to: pages.home.ca },
        { label: "Sobre mi", to: pages.sobreMi.ca },
        { label: "Acompanyaments", to: pages.individual.ca, children: acompanyaments },
        { label: "Xerrades", to: pages.xerrades.ca },
        { label: "Recursos gratuïts", to: pages.recursos.ca },
      ];
}

export const ui = {
  ca: {
    tagline: "Salut Cíclica Femenina",
    contact: "Contacta'm",
    contactWa: "Contacta'm per WhatsApp",
    openMenu: "Obre el menú",
    closeMenu: "Tanca el menú",
    mainMenu: "Menú principal",
    home: "Inici",
    footerQuote: "T'acompanyo a habitar la teva matriu.",
    footerServices: "Acompanyaments",
    footerExplore: "Explora",
    footerContact: "Contacte",
    footerContactText: "Escriu-me per WhatsApp i en parlem.",
    community: "Comunitat Privada",
    language: "Idioma",
  },
  es: {
    tagline: "Salud Cíclica Femenina",
    contact: "Contáctame",
    contactWa: "Contáctame por WhatsApp",
    openMenu: "Abrir el menú",
    closeMenu: "Cerrar el menú",
    mainMenu: "Menú principal",
    home: "Inicio",
    footerQuote: "Te acompaño a habitar tu matriz.",
    footerServices: "Acompañamientos",
    footerExplore: "Explora",
    footerContact: "Contacto",
    footerContactText: "Escríbeme por WhatsApp y hablamos.",
    community: "Comunidad Privada",
    language: "Idioma",
  },
} as const;
