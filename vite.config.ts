import fs from "node:fs";
import path from "node:path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { headTags, headTagsHtml, LANGS, pages, seo, SITE_URL, sitemapEntries, type PageKey } from "./src/lib/site-meta";

// After the build, write one index.html per page and language with its own <html lang>,
// title, description, canonical and hreflang tags (so search engines see them without JS),
// plus sitemap.xml and robots.txt.
function seoPages(): Plugin {
  let outDir = "dist";
  return {
    name: "seo-pages",
    apply: "build",
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
      const render = (key: PageKey | null, lang: "ca" | "es", urlPath: string) =>
        template
          .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
          .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, headTagsHtml(headTags(key, lang, urlPath)));

      for (const key of Object.keys(pages) as PageKey[]) {
        for (const lang of LANGS) {
          const urlPath = pages[key][lang];
          if (!urlPath || !seo[key][lang]) continue; // pages without their own SEO texts use the SPA fallback
          const file = urlPath === "/" ? path.join(outDir, "index.html") : path.join(outDir, urlPath, "index.html");
          fs.mkdirSync(path.dirname(file), { recursive: true });
          fs.writeFileSync(file, render(key, lang, urlPath));
        }
      }

      const abs = (p: string) => SITE_URL + (p === "/" ? "/" : p);
      const urls = sitemapEntries()
        .flatMap(({ urls }) =>
          LANGS.filter((l) => urls[l]).map((l) => {
            const alts = LANGS.filter((a) => urls[a])
              .map((a) => `    <xhtml:link rel="alternate" hreflang="${a}" href="${abs(urls[a]!)}"/>`)
              .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(urls.ca!)}"/>`)
              .join("\n");
            return `  <url>\n    <loc>${abs(urls[l]!)}</loc>\n${alts}\n  </url>`;
          }),
        )
        .join("\n");
      fs.writeFileSync(
        path.join(outDir, "sitemap.xml"),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`,
      );
      fs.writeFileSync(path.join(outDir, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
    },
  };
}

export default defineConfig({
  plugins: [
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
    seoPages(),
  ],
});
