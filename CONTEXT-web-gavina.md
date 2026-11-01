# Context del projecte: web de Gavina Freixa Rius (gavinafreixarius.com)

*Document de traspàs. Estat a 1 de novembre de 2026. Enganxa'l sencer a qualsevol assistent (ChatGPT, Claude, etc.) perquè entengui el projecte.*

## 1. Qui i què
- **Clienta:** Gavina Freixa Rius, terapeuta en Salut Cíclica Femenina. Telèfon/WhatsApp 616 351 534 (`https://wa.me/34616351534`), correu gavina.salutciclica@gmail.com.
- **Qui gestiona la web:** Sergi (compte de GitHub **sergisalacosta-art**).
- **Web:** https://www.gavinafreixarius.com, en català (arrel) i castellà (`/es`).
- **Origen:** era una "linktree" feta amb Lovable. L'hem convertit en una web amb menú a dalt, peu de pàgina i pàgines pròpies.

## 2. On és cada cosa (infraestructura)
| Peça | On | Notes |
|---|---|---|
| Domini | **Dinahosting** | Zona DNS: `A @ → 216.198.79.1` i `CNAME www → …vercel-dns-017.com` (tots dos de Vercel). També hi ha un `TXT google-site-verification=…` de Search Console. **No s'ha de tocar.** |
| Allotjament de la web real | **Vercel** | Publica sola cada `push` o *merge* a la branca **`main`** del repositori `sergisalacosta-art/gavina-linktree`. Les altres branques i les Pull Requests generen una **Preview** (Vercel → Deployments → Visit, o l'enllaç a la mateixa Pull Request). |
| Codi de la web real | GitHub **`sergisalacosta-art/gavina-linktree`** | `main` = web publicada. |
| Còpia de proves antiga | GitHub `sergisalacosta-art/gavina-linktree-proves` + **Netlify** (`transcendent-seahorse-af6de9.netlify.app`) | **Ja no cal.** Es pot esborrar. La web real no en depèn. |
| Google | **Search Console**, propietat de domini `gavinafreixarius.com` verificada | Sitemap: `https://www.gavinafreixarius.com/sitemap.xml`. |

**Manera de treballar:** cada canvi es fa en una branca o Pull Request, es revisa a la previsualització de Vercel i, quan la clienta diu "publica", es fa *merge* a `main`.

## 3. Tecnologia
- React + Vite + TanStack Router (rutes per fitxers a `src/routes/`) + Tailwind CSS v4. Node 22. Paquets amb `npm`.
- Ordres: `npm install`, `npm run dev` (local), `npm run build` (genera `dist/`).
- **Identitat visual (no es pot canviar):**
  - **Colors:** crema `#f4ebe0`, marrons `#6b5347` i `#8e6e60`, terracota `#8a4b34`, rosat `#d8a797` i `#c89684`, granat `#7a1f2e` (només a les pàgines de propostes).
  - **Tipografies:** Fraunces, Cormorant Garamond, Georgia i Inter.
  - **Logo:** `src/assets/gavina-logo.png`.

## 4. Estructura del codi (fitxers clau)
- `src/lib/site-meta.ts`: **mapa d'adreces CA/ES** de cada pàgina i **títols i descripcions SEO**. `SITE_URL = "https://www.gavinafreixarius.com"`.
- `src/lib/i18n.ts`: detecció de l'idioma per l'URL, canvi CAT/ES i actualització del `<head>`.
- `src/components/site/SiteHeader.tsx`: menú fix, desplegable "Acompanyaments", selector **CAT | ES** i hamburguesa al mòbil.
- `src/components/site/SiteFooter.tsx`: peu de pàgina comú.
- `src/components/site/nav.ts`: textos del menú i el peu en tots dos idiomes. Els serveis amagats porten `hidden: true`.
- `src/components/site/icons.tsx`: icones de línia (llibre, brot, cercle de dones) dels requadres de la portada.
- `src/pages/<pàgina>/ca.tsx` i `es.tsx`: contingut de cada pàgina en cada idioma (home, sobre-mi, sessio, individual, recursos).
- `src/pages/xerrades/`:
  - `hub.tsx`: pàgina "Xerrades i tallers".
  - `menstruar.tsx`: xerrada "Menstruar sense dolor", amb els textos CA/ES dins.
  - `proposal-style.ts`: estil compartit de les pàgines de propostes.
  - `parts.tsx`: peces petites compartides.
- `src/routes/*.tsx`: rutes. Les rutes antigues `primerasessio`, `individual`, `recursos` i `home` només redirigeixen a les noves.
- `vite.config.ts`: connector `seoPages` que, en compilar, genera un `index.html` per pàgina i idioma (amb title, description, canonical i hreflang), més `sitemap.xml` i `robots.txt`.
- `vercel.json`: redireccions 301 de les adreces antigues i capçalera `noindex` per al taller. `netlify.toml` és el mateix per a Netlify, que ja no es fa servir.
- `public/web/`: imatges optimitzades de la web.
- `public/taller-mares-i-filles/`: pàgina **estàtica** del taller (`index.html`), la il·lustració, la foto, el logo i `imatge-correu.jpg`.

## 5. Pàgines i adreces actuals
| Pàgina | Català | Castellà |
|---|---|---|
| Inici | `/` | `/es` |
| Sobre mi | `/sobre-mi` | `/es/sobre-mi` |
| Sessió Diagnòstica | `/sessio-diagnostica` | `/es/sesion-diagnostica` |
| Acompanyament Individual | `/acompanyament-individual` | `/es/acompanamiento-individual` |
| Xerrades i tallers | `/xerrades` | `/es/charlas` |
| Xerrada "Menstruar sense dolor" | `/xerrades/menstruar-sense-dolor` | `/es/charlas/menstruar-sin-dolor` |
| Recursos gratuïts | `/recursos-gratuits` | `/es/recursos-gratuitos` |
| Taller per a mares i filles | `/taller-mares-i-filles` | (només català) |

**Redireccions 301:**
- `/primerasessio` → `/sessio-diagnostica`
- `/individual` → `/acompanyament-individual`
- `/recursos` → `/recursos-gratuits`
- `/home` → `/`

**Pàgines amagades** (existeixen per URL però no surten al menú ni a la portada, perquè la clienta les vol modificar):
- `/retir` i `/matrius`. Per tornar-les a mostrar: treure `hidden: true` a `src/components/site/nav.ts` i a `src/pages/home/ca.tsx` i `es.tsx`, i posar `SHOW_RETIR = true` a la portada.
- `/cures`, `/recurs` i `/recurs-bases` també existeixen, en català i sense enllaç.

**Taller per a mares i filles:**
- Pàgina estàtica amb `noindex`, fora del sitemap i enllaçada des de "Xerrades i tallers".
- Imatge per al correu: `https://www.gavinafreixarius.com/taller-mares-i-filles/imatge-correu.jpg`, enllaçada a la pàgina del taller.

## 6. Contingut actual (decisions de la clienta ja aplicades)
- **Inici:**
  - Etiqueta "SALUT CÍCLICA FEMENINA".
  - Títol: "Una nova manera d'entendre el benestar de les dones."
  - Paràgraf: "T'acompanyo a aprendre a viure connectada a la teva naturalesa cíclica incorporant les autocures femenines naturals i ancestrals a la teva vida quotidiana, per viure en coherència amb la dona que ets avui."
  - Foto a la dreta, sense logo superposat.
  - Bloc "Soc la Gavina" sense foto, amb el text centrat.
  - Targetes de Sessió Diagnòstica (amb la foto de la capçalera de la seva pàgina) i Acompanyament Individual.
  - Tres requadres amb icona: Recursos gratuïts, Comunitat Privada i Xerrades i tallers.
  - Bloc final amb WhatsApp.
  - **Eliminat:** l'apartat "Habitar la matriu" (veritat/salut/sobirania) i el logo i la frase "Un camí de veritat, de salut i de sobirania".
- **Sobre mi:** comença amb "Em presento breument…". Eliminats el bloc inicial i el bloc final "Un camí per recordar-te…".
- **Menú:** Inici · Sobre mi · Acompanyaments (Sessió Diagnòstica, Acompanyament Individual) · Xerrades i tallers · Recursos gratuïts · botó Contacta'm · CAT | ES.
- **Castellà:** "matriu" s'ha traduït per "matriz".

## 7. Pendents i preguntes obertes
- La xerrada "Menstruar sense dolor" no té **durada ni preu**. Si la Gavina els dona, s'afegeixen els quadres DURADA i INVERSIÓ, com al taller.
- Decidir si el taller ha de sortir a Google. Ara té `noindex`: es treu a `public/taller-mares-i-filles/index.html` (meta robots) i a `vercel.json` (capçalera X-Robots-Tag).
- Taller: a Metodologia hi diu "dels participants", com va escriure la Gavina. El cartell original deia "de les participants".
- La il·lustració del taller és un retall del cartell, de poca resolució. Amb el PNG original es veuria més nítida.
- Revisar la traducció castellana amb una persona nativa.
- Netlify i el repositori `gavina-linktree-proves` es poden eliminar.
- Search Console: afegir també el sitemap amb www (`https://www.gavinafreixarius.com/sitemap.xml`) i comprovar que passa a "Correcte".
- `retir` i `matrius`: la clienta els modificarà i després s'hauran de tornar a mostrar.

## 8. Normes de treball
- **No canviar** colors, tipografies ni logo.
- Fer qualsevol canvi de contingut **en català i en castellà** (fitxers `ca.tsx` i `es.tsx`, o els diccionaris `ca` i `es`).
- Abans de publicar: `npm run build` sense errors i revisar la previsualització de Vercel.
- **Publicar** = *merge* o `push` a `main` del repositori `sergisalacosta-art/gavina-linktree`. Vercel publica sol en 1-3 minuts. Per tornar enrere, es fa *revert* del commit.
- Les pàgines noves s'han d'afegir a `src/lib/site-meta.ts` (adreces i SEO) per sortir al sitemap amb hreflang.
