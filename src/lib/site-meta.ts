// Site-wide page map and SEO texts. Kept free of imports so vite.config.ts can use it at build time.

export type Lang = "ca" | "es";

export const SITE_URL = "https://www.gavinafreixarius.com";

// Each page and its URL in every language. Catalan lives at the root, Spanish under /es.
// Pages with es: null only exist in Catalan (switching language sends you to the Spanish home).
export const pages = {
  home: { ca: "/", es: "/es" },
  sobreMi: { ca: "/sobre-mi", es: "/es/sobre-mi" },
  sessio: { ca: "/sessio-diagnostica", es: "/es/sesion-diagnostica" },
  individual: { ca: "/acompanyament-individual", es: "/es/acompanamiento-individual" },
  xerrades: { ca: "/xerrades", es: "/es/charlas" },
  recursos: { ca: "/recursos-gratuits", es: "/es/recursos-gratuitos" },
  matrius: { ca: "/matrius", es: null },
  retir: { ca: "/retir", es: null },
} as const;

export type PageKey = keyof typeof pages;

export type Seo = { title: string; description: string };

const BRAND = "Gavina Freixa Rius";

export const seo: Record<PageKey, Partial<Record<Lang, Seo>>> = {
  home: {
    ca: {
      title: `${BRAND} — Salut Cíclica Femenina`,
      description:
        "Acompanyament a dones per cuidar la salut femenina ginecològica i habitar la matriu amb recursos naturals d'autocura i prevenció.",
    },
    es: {
      title: `${BRAND} — Salud Cíclica Femenina`,
      description:
        "Acompañamiento a mujeres para cuidar la salud femenina ginecológica y habitar la matriz con recursos naturales de autocuidado y prevención.",
    },
  },
  sobreMi: {
    ca: { title: `Sobre mi | ${BRAND}`, description: "Coneix la Gavina Freixa Rius i la mirada des d'on acompanya les dones a habitar la seva matriu." },
    es: { title: `Sobre mí | ${BRAND}`, description: "Conoce a Gavina Freixa Rius y la mirada desde la que acompaña a las mujeres a habitar su matriz." },
  },
  sessio: {
    ca: { title: `Sessió Diagnòstica de salut femenina | ${BRAND}`, description: "Sessió online d'1h15 per posar llum al teu cas: una mirada integrativa sobre la teva salut femenina i una orientació personalitzada." },
    es: { title: `Sesión Diagnóstica de salud femenina | ${BRAND}`, description: "Sesión online de 1h15 para poner luz a tu caso: una mirada integrativa sobre tu salud femenina y una orientación personalizada." },
  },
  individual: {
    ca: { title: `Acompanyament Individual en salut femenina | ${BRAND}`, description: "Procés personalitzat per cuidar la teva salut femenina amb recursos naturals: dolor menstrual, cicles irregulars, miomes, climateri i més." },
    es: { title: `Acompañamiento Individual en salud femenina | ${BRAND}`, description: "Proceso personalizado para cuidar tu salud femenina con recursos naturales: dolor menstrual, ciclos irregulares, miomas, climaterio y más." },
  },
  xerrades: {
    ca: { title: `Xerrades «Menstruar sense dolor» per a AFAs i ajuntaments | ${BRAND}`, description: "Xerrades per a famílies i dones sobre dolor menstrual, senyals d'alerta i recursos naturals d'autocura i prevenció." },
    es: { title: `Charlas «Menstruar sin dolor» para AFAs y ayuntamientos | ${BRAND}`, description: "Charlas para familias y mujeres sobre dolor menstrual, señales de alerta y recursos naturales de autocuidado y prevención." },
  },
  recursos: {
    ca: { title: `Recursos gratuïts de salut femenina | ${BRAND}`, description: "Xerrades gratuïtes per començar a cuidar la teva salut femenina ginecològica i habitar la teva matriu." },
    es: { title: `Recursos gratuitos de salud femenina | ${BRAND}`, description: "Charlas gratuitas para empezar a cuidar tu salud femenina ginecológica y habitar tu matriz." },
  },
  matrius: {},
  retir: {},
};

export const LANGS: Lang[] = ["ca", "es"];

export type HeadTag = { tag: "title" | "meta" | "link"; id: string; attrs: Record<string, string>; text?: string };

function absolute(path: string) {
  return SITE_URL + (path === "/" ? "/" : path);
}

/** Title, description, canonical, hreflang alternates and Open Graph tags for a page. */
export function headTags(key: PageKey | null, lang: Lang, path: string): HeadTag[] {
  const meta = (key && seo[key][lang]) || seo.home[lang] || seo.home.ca!;
  const url = absolute(path);
  const tags: HeadTag[] = [
    { tag: "title", id: "title", attrs: {}, text: meta.title },
    { tag: "meta", id: "description", attrs: { name: "description", content: meta.description } },
    { tag: "link", id: "canonical", attrs: { rel: "canonical", href: url } },
    { tag: "meta", id: "og:title", attrs: { property: "og:title", content: meta.title } },
    { tag: "meta", id: "og:description", attrs: { property: "og:description", content: meta.description } },
    { tag: "meta", id: "og:url", attrs: { property: "og:url", content: url } },
    { tag: "meta", id: "og:locale", attrs: { property: "og:locale", content: lang === "es" ? "es_ES" : "ca_ES" } },
    { tag: "meta", id: "og:image", attrs: { property: "og:image", content: `${SITE_URL}/web/hero.jpg` } },
  ];
  if (key) {
    const urls = pages[key];
    for (const l of LANGS) {
      const p = urls[l];
      if (p) tags.push({ tag: "link", id: `alt-${l}`, attrs: { rel: "alternate", hreflang: l, href: absolute(p) } });
    }
    if (urls.ca && urls.es) tags.push({ tag: "link", id: "alt-x", attrs: { rel: "alternate", hreflang: "x-default", href: absolute(urls.ca) } });
  }
  return tags;
}

const esc = (v: string) => v.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function headTagsHtml(tags: HeadTag[]): string {
  return tags
    .map((t) => {
      const attrs = Object.entries({ ...t.attrs, "data-seo": t.id })
        .map(([k, v]) => `${k}="${esc(v)}"`)
        .join(" ");
      return t.tag === "title" ? `<title data-seo="title">${esc(t.text ?? "")}</title>` : `<${t.tag} ${attrs} />`;
    })
    .join("\n    ");
}

/** Pages that exist in both languages (these go in the sitemap). */
export function sitemapEntries(): { key: PageKey; urls: Partial<Record<Lang, string>> }[] {
  return (Object.keys(pages) as PageKey[])
    .filter((k) => pages[k].ca && pages[k].es)
    .map((k) => ({ key: k, urls: { ca: pages[k].ca, es: pages[k].es ?? undefined } }));
}
