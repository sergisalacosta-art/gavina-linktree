import { AppLink as Link } from "@/components/site/AppLink";
import { ArrowRight, CalendarDays, MapPin, MessageCircle } from "lucide-react";
import logoImage from "@/assets/gavina-logo.png";
import { WA_URL } from "@/components/site/nav";
import { pages } from "@/lib/i18n";

const georgia = 'Georgia, "Times New Roman", serif';


// hidden: true oculta el servicio de la portada (la página sigue existiendo por URL).
const allServeis: { title: string; text?: string; img: string; to: string; tag?: string; hidden?: boolean }[] = [
  { title: "Sesión Diagnóstica", img: "/web/sessio.jpg", to: pages.sessio.es },
  { title: "Acompañamiento Individual", img: "/web/individual.jpg", to: pages.individual.es },
  { title: "Matrius en Cercle", text: "Acompañamiento grupal (noviembre 2026 - abril 2027)", img: "/web/matrius.jpg", to: "/matrius", hidden: true },
  { title: "Retiro «Cures de Matriu»", text: "Retiro de 1 día · Sábado 17 de octubre", img: "/web/retir.jpg", to: "/retir", tag: "Inscripciones abiertas", hidden: true },
];

const serveis = allServeis.filter((s) => !s.hidden);

// Ponlo a true para volver a mostrar el bloque destacado del retiro en la portada.
const SHOW_RETIR = false;

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-4 text-xs font-medium uppercase tracking-[0.28em] ${light ? "text-[#f4ebe0]/80" : "text-[#8e6e60]"}`}>
      {children}
    </p>
  );
}

export function Index() {
  return (
    <main data-motion="manual" className="relative overflow-hidden bg-background font-serif text-foreground">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-8 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:pb-24 md:pt-14">
          <div className="order-2 md:order-1">
            <Eyebrow>Salud Cíclica Femenina</Eyebrow>
            <h1 data-reveal className="font-serif font-semibold leading-[1.15] text-[#6b5347]" style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)" }}>
              Una nueva manera de entender el bienestar de las mujeres.
            </h1>
            <p data-reveal className="mt-6 max-w-xl text-[#6b5347]" style={{ fontFamily: georgia, fontSize: "clamp(1.1rem, 1.9vw, 1.3rem)", lineHeight: 1.7 }}>
              Te acompaño a aprender a vivir conectada a tu naturaleza cíclica incorporando los autocuidados femeninos naturales y ancestrales a tu vida cotidiana, para vivir en coherencia con la mujer que eres hoy.
            </p>
            <div data-reveal className="mt-9 flex flex-wrap gap-3">
              <a
                href="#acompanamientos"
                className="group inline-flex items-center gap-2 rounded-full bg-[#8e6e60] px-7 py-3.5 tracking-[0.04em] text-[#f4ebe0] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b5347] hover:shadow-md"
              >
                Descubre los acompañamientos
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                to={pages.sobreMi.es}
                className="inline-flex items-center gap-2 rounded-full border border-[#8e6e60]/50 px-7 py-3.5 tracking-[0.04em] text-[#6b5347] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ece0d2]"
              >
                Sobre mí
              </Link>
            </div>
          </div>

          <div className="relative order-1 mx-auto w-[78%] max-w-[460px] md:order-2 md:w-full">
            <div aria-hidden className="absolute -inset-3 bg-[#d8a797]/35 md:-inset-5" style={{ borderRadius: "50% 50% 2.5rem 2.5rem / 37.5% 37.5% 2.5rem 2.5rem" }} />
            <img
              src="/web/hero.jpg"
              alt="Gavina sentada en una roca junto al río, sonriendo"
              fetchPriority="high"
              className="relative aspect-[3/4] w-full object-cover shadow-[0_30px_60px_-30px_rgba(42,31,23,.55)]"
              style={{ borderRadius: "50% 50% 2.5rem 2.5rem / 37.5% 37.5% 2.5rem 2.5rem" }}
            />
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
          <div style={{ fontFamily: georgia, color: "#6b5347", fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75 }}>
            <Eyebrow>Sobre mí</Eyebrow>
            <h2 data-reveal className="font-serif font-semibold" style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.5rem)", lineHeight: 1.2 }}>
              Soy Gavina
            </h2>
            <p data-reveal className="mt-6">Mi gran despertar empezó hace trece años, cuando fui madre por primera vez.</p>
            <p data-reveal className="mt-4">
              La maternidad me llevó a revisar la relación conmigo misma, con mi feminidad, mi sexualidad y mi matriz. Fue el inicio de un camino profundo de búsqueda, transformación y regreso a mi cuerpo que todavía hoy sigo recorriendo.
            </p>
            <Link
              data-reveal
              to={pages.sobreMi.es}
              className="group mt-8 inline-flex items-center gap-2 font-serif text-lg text-[#8a4b34] underline decoration-[#c89684] decoration-2 underline-offset-[6px] transition-colors hover:text-[#6b5347]"
            >
              Conoce mi historia
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ACOMPANYAMENTS */}
      <section id="acompanamientos" className="scroll-mt-24 bg-[#ece0d2]/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Acompañamientos</Eyebrow>
            <h2 data-reveal className="font-serif font-semibold text-[#6b5347]" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.3rem)", lineHeight: 1.3 }}>
              Estas son las diferentes maneras en que podemos recorrer este camino juntas
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
            {serveis.map((s, i) => (
              <Link
                key={s.to}
                to={s.to}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 100}ms` }}
                className="group flex flex-col overflow-hidden rounded-[2rem] bg-[#faf5ef] shadow-[0_10px_40px_-24px_rgba(107,83,71,.45)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(107,83,71,.55)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt="" loading="lazy" className="zoom-img h-full w-full object-cover" />
                  {s.tag && (
                    <span className="absolute left-4 top-4 rounded-full bg-[#f4ebe0] px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-[#8a4b34] shadow">
                      {s.tag}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-serif text-xl font-semibold leading-snug text-[#6b5347]">{s.title}</h3>
                  {s.text && <p className="mt-2 text-sm italic text-[#8e6e60]">{s.text}</p>}
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[#8a4b34]">
                    Más información
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RETIR DESTACAT */}
      {SHOW_RETIR && (
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div data-reveal className="relative overflow-hidden rounded-[2.5rem] bg-[#8e6e60] text-[#f4ebe0] shadow-[0_30px_60px_-30px_rgba(42,31,23,.6)]">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[260px] md:min-h-[420px]">
                <img src="/web/retir.jpg" alt="Mujeres tumbadas en círculo durante un retiro en el bosque" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <Eyebrow light>Inscripciones abiertas</Eyebrow>
                <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", lineHeight: 1.15 }}>
                  Retiro «Cures de Matriu»
                </h2>
                <p className="mt-4 text-lg italic opacity-90" style={{ fontFamily: georgia }}>
                  Reconecta con tu matriz para vivir en coherencia
                </p>
                <ul className="mt-6 space-y-2 text-[1.05rem]">
                  <li className="flex items-center gap-3"><CalendarDays className="h-5 w-5 opacity-80" /> Sábado 17 de octubre · Retiro de 1 día</li>
                  <li className="flex items-center gap-3"><MapPin className="h-5 w-5 opacity-80" /> Les Franqueses del Vallès</li>
                </ul>
                <Link
                  to="/retir"
                  className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#f4ebe0] px-7 py-3.5 tracking-[0.04em] text-[#6b5347] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Quiero saber más
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* MÉS CAMINS */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:px-8 md:grid-cols-3">
          {[
            { title: "Recursos gratuitos", text: "Charlas para empezar a cuidar tu salud femenina.", img: "/web/recursos.jpg", to: pages.recursos.es },
            { title: "Comunidad Privada", text: "Accede a contenido de profundización. Pide el acceso gratuito.", img: "/web/comunitat.jpg", href: WA_URL },
            { title: "Charlas", text: "Para AFAs, ayuntamientos y otras entidades.", img: "/web/xerrades.jpg", to: pages.xerrades.es },
          ].map((c, i) => {
            const inner = (
              <>
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={c.img} alt="" loading="lazy" className="zoom-img h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-[#6b5347]">{c.title}</h3>
                  <p className="mt-2 text-[#6b5347]/90" style={{ fontFamily: georgia }}>{c.text}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[#8a4b34]">
                    {c.href ? "Pide el acceso" : "Descúbrelo"}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </>
            );
            const cls = "group block overflow-hidden rounded-[2rem] border border-[#d8c4b3]/70 bg-[#faf5ef] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(107,83,71,.5)]";
            const style = { ["--reveal-delay" as string]: `${i * 120}ms` };
            return c.href ? (
              <a key={c.title} data-reveal style={style} href={c.href} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
            ) : (
              <Link key={c.title} data-reveal style={style} to={c.to!} className={cls}>{inner}</Link>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="border-t border-[#d8c4b3]/70 py-20 text-center md:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <p data-reveal className="text-lg text-[#6b5347]" style={{ fontFamily: georgia }}>
            Si tienes dudas sobre qué acompañamiento es para ti, escríbeme y hablamos.
          </p>
          <a
            data-reveal
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#8e6e60] px-8 py-4 text-lg tracking-[0.04em] text-[#f4ebe0] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b5347] hover:shadow-md"
          >
            <MessageCircle className="h-5 w-5" />
            Contáctame por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
