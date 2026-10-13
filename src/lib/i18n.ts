import { useRouterState } from "@tanstack/react-router";
import { headTags, pages, type Lang, type PageKey } from "./site-meta";

export { pages, seo, SITE_URL, type Lang, type PageKey } from "./site-meta";

export function normalizePath(pathname: string): string {
  return pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
}

export function langFromPath(pathname: string): Lang {
  const p = normalizePath(pathname);
  return p === "/es" || p.startsWith("/es/") ? "es" : "ca";
}

export function pageKeyFromPath(pathname: string): PageKey | null {
  const p = normalizePath(pathname);
  for (const [key, urls] of Object.entries(pages)) {
    if (urls.ca === p || urls.es === p) return key as PageKey;
  }
  return null;
}

/** URL of the current page in the other language (or that language's home). */
export function switchLangPath(pathname: string, target: Lang): string {
  const key = pageKeyFromPath(pathname);
  const url = key ? pages[key][target] : null;
  return url ?? pages.home[target];
}

export function useLang(): Lang {
  return useRouterState({ select: (s) => langFromPath(s.location.pathname) });
}


/** Keep <head> in sync on client-side navigation (static pages already ship these tags). */
export function applyHead(pathname: string) {
  const path = normalizePath(pathname);
  const lang = langFromPath(path);
  const tags = headTags(pageKeyFromPath(path), lang, path);
  document.documentElement.lang = lang;
  const keep = new Set(tags.map((t) => t.id));
  document.head.querySelectorAll<HTMLElement>("[data-seo]").forEach((el) => {
    if (!keep.has(el.dataset.seo!)) el.remove();
  });
  for (const t of tags) {
    let el = document.head.querySelector<HTMLElement>(`[data-seo="${t.id}"]`);
    if (!el) {
      el = document.createElement(t.tag);
      el.dataset.seo = t.id;
      document.head.appendChild(el);
    }
    if (t.tag === "title") {
      document.title = t.text ?? "";
      continue;
    }
    for (const [k, v] of Object.entries(t.attrs)) el.setAttribute(k, v);
  }
}
