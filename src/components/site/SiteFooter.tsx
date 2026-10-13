import { AppLink as Link } from "@/components/site/AppLink";
import { MessageCircle } from "lucide-react";
import logoImage from "@/assets/gavina-logo.png";
import { getAcompanyaments, PHONE, ui, WA_URL } from "./nav";
import { pages, useLang } from "@/lib/i18n";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const lang = useLang();
  const t = ui[lang];
  const acompanyaments = getAcompanyaments(lang);
  return (
    <footer className="site-footer relative z-10 bg-[#6b5347] font-serif text-[#f4ebe0]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:py-20">
        <div>
          <Link to={pages.home[lang]} className="inline-flex items-center gap-3">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#f4ebe0]">
              <img src={logoImage} alt="" className="h-10 w-10 object-contain" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-xl font-semibold">Gavina Freixa Rius</span>
              <span className="text-xs uppercase tracking-[0.22em] opacity-80">{t.tagline}</span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-lg italic leading-relaxed opacity-90" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
            {t.footerQuote}
          </p>
        </div>

        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.22em] text-[#d8a797]">{t.footerServices}</h3>
          <ul className="space-y-3">
            {acompanyaments.map((a) => (
              <li key={a.to}>
                <Link to={a.to} className="footer-link">{a.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.22em] text-[#d8a797]">{t.footerExplore}</h3>
          <ul className="space-y-3">
            <li><Link to={pages.sobreMi[lang]} className="footer-link">{lang === "es" ? "Sobre mí" : "Sobre mi"}</Link></li>
            <li><Link to={pages.xerrades[lang]} className="footer-link">{lang === "es" ? "Charlas" : "Xerrades"}</Link></li>
            <li><Link to={pages.recursos[lang]} className="footer-link">{lang === "es" ? "Recursos gratuitos" : "Recursos gratuïts"}</Link></li>
            <li><a href={WA_URL} target="_blank" rel="noopener noreferrer" className="footer-link">{t.community}</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-xs uppercase tracking-[0.22em] text-[#d8a797]">{t.footerContact}</h3>
          <p className="mb-5 opacity-90">{t.footerContactText}</p>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#f4ebe0] px-5 py-3 tracking-[0.04em] text-[#6b5347] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
          >
            <MessageCircle className="h-4 w-4" />
            {PHONE}
          </a>
        </div>
      </div>

      <div className="border-t border-[#f4ebe0]/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm opacity-75 sm:flex-row sm:px-8">
          <p>© {year} Gavina Freixa Rius · {t.tagline}</p>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
