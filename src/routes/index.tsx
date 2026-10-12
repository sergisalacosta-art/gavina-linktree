import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, MapPin, MessageCircle } from "lucide-react";
import logoImage from "@/assets/gavina-logo.png";
import { WA_URL, type InternalPath } from "@/components/site/nav";

export const Route = createFileRoute("/")({
  component: Index,
});

const georgia = 'Georgia, "Times New Roman", serif';

const underline = {
  textDecoration: "underline",
  textDecorationColor: "#c89684",
  textDecorationThickness: "3px",
  textUnderlineOffset: "6px",
} as const;

const camins = [
  { word: "VERITAT", text: "Viure en coherència amb la dona que ets avui." },
  { word: "SALUT", text: "Cuidar la teva salut femenina i cultivar la prevenció." },
  { word: "SOBIRANIA", text: "Recuperar la sobirania sobre el teu cos, la teva sexualitat i el teu plaer." },
];

const serveis: { title: string; text?: string; img: string; to: InternalPath; tag?: string }[] = [
  { title: "Sessió Diagnòstica", img: "/web/sessio.jpg", to: "/primerasessio" },
  { title: "Acompanyament Individual", img: "/web/individual.jpg", to: "/individual" },
  { title: "Matrius en Cercle", text: "Acompanyament grupal (novembre 2026 - abril 2027)", img: "/web/matrius.jpg", to: "/matrius" },
  { title: "Retir «Cures de Matriu»", text: "Retir d'1 dia · Dissabte 17 octubre", img: "/web/retir.jpg", to: "/retir", tag: "Inscripcions obertes" },
];

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mb-4 text-xs font-medium uppercase tracking-[0.28em] ${light ? "text-[#f4ebe0]/80" : "text-[#8e6e60]"}`}>
      {children}
    </p>
  );
}

function Index() {
  return (
    <main data-motion="manual" className="relative overflow-hidden bg-background font-serif text-foreground">
      {/* HERO */}
      <section className="relative">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 pb-16 pt-8 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:pb-24 md:pt-14">
          <div className="order-2 md:order-1">
            <Eyebrow>Salut Cíclica Femenina</Eyebrow>
            <h1 data-reveal className="font-serif font-semibold leading-[1.15] text-[#6b5347]" style={{ fontSize: "clamp(2rem, 4.4vw, 3.4rem)" }}>
              Reconec la <span style={underline}>saviesa</span> i el <span style={underline}>poder</span> que habiten en la matriu de cada dona.
            </h1>
            <p data-reveal className="mt-6 text-[#8a4b34]" style={{ fontFamily: georgia, fontSize: "clamp(1.2rem, 2.2vw, 1.55rem)", fontWeight: 700 }}>
              T&apos;acompanyo a habitar la teva matriu.
            </p>
            <div data-reveal className="mt-9 flex flex-wrap gap-3">
              <a
                href="#acompanyaments"
                className="group inline-flex items-center gap-2 rounded-full bg-[#8e6e60] px-7 py-3.5 tracking-[0.04em] text-[#f4ebe0] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b5347] hover:shadow-md"
              >
                Descobreix els acompanyaments
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <Link
                to="/sobre-mi"
                className="inline-flex items-center gap-2 rounded-full border border-[#8e6e60]/50 px-7 py-3.5 tracking-[0.04em] text-[#6b5347] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ece0d2]"
              >
                Sobre mi
              </Link>
            </div>
          </div>

          <div className="relative order-1 mx-auto w-[78%] max-w-[460px] md:order-2 md:w-full">
            <div aria-hidden className="absolute -inset-3 bg-[#d8a797]/35 md:-inset-5" style={{ borderRadius: "50% 50% 2.5rem 2.5rem / 37.5% 37.5% 2.5rem 2.5rem" }} />
            <img
              src="/web/hero.jpg"
              alt="La Gavina asseguda en una roca al riu, somrient"
              fetchPriority="high"
              className="relative aspect-[3/4] w-full object-cover shadow-[0_30px_60px_-30px_rgba(42,31,23,.55)]"
              style={{ borderRadius: "50% 50% 2.5rem 2.5rem / 37.5% 37.5% 2.5rem 2.5rem" }}
            />
            <span className="absolute -bottom-5 -left-3 inline-flex h-20 w-20 items-center justify-center rounded-full bg-[#f4ebe0] shadow-lg sm:h-24 sm:w-24">
              <img src={logoImage} alt="" className="h-14 w-14 object-contain sm:h-16 sm:w-16" />
            </span>
          </div>
        </div>
      </section>

      {/* UN CAMÍ */}
      <section className="bg-[#ece0d2]/60 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Habitar la matriu</Eyebrow>
            <h2 data-reveal className="font-serif font-semibold text-[#6b5347]" style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.5rem)" }}>
              Un camí per recordar-te que pots...
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {camins.map((c, i) => (
              <article
                key={c.word}
                data-reveal
                style={{ ["--reveal-delay" as string]: `${i * 120}ms` }}
                className="rounded-[2rem] bg-[#faf5ef] p-8 text-center shadow-[0_10px_40px_-24px_rgba(107,83,71,.45)] md:p-10"
              >
                <img src={logoImage} alt="" className="mx-auto h-10 w-10 object-contain opacity-80" />
                <p className="mt-5 text-sm text-[#6b5347]">Un camí de</p>
                <p className="mt-2">
                  <span className="inline-block rounded-full bg-[#8a4b34] px-4 py-1 text-lg font-bold tracking-[0.08em] text-white">{c.word}</span>
                </p>
                <p className="mt-5 text-[#6b5347]" style={{ fontFamily: georgia, fontSize: "1.15rem", lineHeight: 1.6 }}>
                  {c.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE MI */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div data-reveal className="relative mx-auto w-[75%] max-w-[400px] md:w-full">
            <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2.5rem] border-2 border-[#c89684]/60" />
            <img
              src="/web/retrat.jpg"
              alt="Retrat de la Gavina somrient"
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-[0_30px_60px_-30px_rgba(42,31,23,.55)]"
            />
          </div>
          <div style={{ fontFamily: georgia, color: "#6b5347", fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)", lineHeight: 1.75 }}>
            <Eyebrow>Sobre mi</Eyebrow>
            <h2 data-reveal className="font-serif font-semibold" style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.5rem)", lineHeight: 1.2 }}>
              Soc la Gavina
            </h2>
            <p data-reveal className="mt-6">El meu gran despertar va començar fa tretze anys, quan vaig ser mare per primera vegada.</p>
            <p data-reveal className="mt-4">
              La maternitat em va portar a revisar la relació amb mi mateixa, amb la meva feminitat, la meva sexualitat i la meva matriu. Va ser l&apos;inici d&apos;un camí profund de recerca, transformació i retorn al meu cos que encara avui continuo recorrent.
            </p>
            <Link
              data-reveal
              to="/sobre-mi"
              className="group mt-8 inline-flex items-center gap-2 font-serif text-lg text-[#8a4b34] underline decoration-[#c89684] decoration-2 underline-offset-[6px] transition-colors hover:text-[#6b5347]"
            >
              Coneix la meva història
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ACOMPANYAMENTS */}
      <section id="acompanyaments" className="scroll-mt-24 bg-[#ece0d2]/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Acompanyaments</Eyebrow>
            <h2 data-reveal className="font-serif font-semibold text-[#6b5347]" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.3rem)", lineHeight: 1.3 }}>
              Aquestes són les diferents maneres com podem recórrer aquest camí juntes
            </h2>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                    Més informació
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RETIR DESTACAT */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div data-reveal className="relative overflow-hidden rounded-[2.5rem] bg-[#8e6e60] text-[#f4ebe0] shadow-[0_30px_60px_-30px_rgba(42,31,23,.6)]">
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[260px] md:min-h-[420px]">
                <img src="/web/retir.jpg" alt="Dones estirades en cercle durant un retir al bosc" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <Eyebrow light>Inscripcions obertes</Eyebrow>
                <h2 className="font-serif font-semibold" style={{ fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)", lineHeight: 1.15 }}>
                  Retir «Cures de Matriu»
                </h2>
                <p className="mt-4 text-lg italic opacity-90" style={{ fontFamily: georgia }}>
                  Reconnecta amb la teva matriu per viure en coherència
                </p>
                <ul className="mt-6 space-y-2 text-[1.05rem]">
                  <li className="flex items-center gap-3"><CalendarDays className="h-5 w-5 opacity-80" /> Dissabte 17 octubre · Retir d&apos;1 dia</li>
                  <li className="flex items-center gap-3"><MapPin className="h-5 w-5 opacity-80" /> Les Franqueses del Vallès</li>
                </ul>
                <Link
                  to="/retir"
                  className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#f4ebe0] px-7 py-3.5 tracking-[0.04em] text-[#6b5347] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Vull saber-ne més
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÉS CAMINS */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:px-8 md:grid-cols-3">
          {[
            { title: "Recursos gratuïts", text: "Xerrades per començar a cuidar la teva salut femenina.", img: "/web/recursos.jpg", to: "/recursos" as InternalPath },
            { title: "Comunitat Privada", text: "Accedeix a contingut de profundització. Demana l'accés gratuït.", img: "/web/comunitat.jpg", href: WA_URL },
            { title: "Xerrades", text: "Per a AFAs, ajuntaments i d'altres.", img: "/web/xerrades.jpg", to: "/xerrades" as InternalPath },
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
                    {c.href ? "Demana l'accés" : "Descobreix-ho"}
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
          <img data-reveal src={logoImage} alt="" className="mx-auto h-14 w-14 object-contain" />
          <h2 data-reveal className="mt-6 font-serif font-semibold text-[#6b5347]" style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.5rem)" }}>
            Un camí de veritat, de salut i de sobirania
          </h2>
          <p data-reveal className="mt-4 text-lg text-[#6b5347]" style={{ fontFamily: georgia }}>
            Si tens dubtes sobre quin acompanyament és per a tu, escriu-me i en parlem.
          </p>
          <a
            data-reveal
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#8e6e60] px-8 py-4 text-lg tracking-[0.04em] text-[#f4ebe0] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b5347] hover:shadow-md"
          >
            <MessageCircle className="h-5 w-5" />
            Contacta&apos;m per WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
