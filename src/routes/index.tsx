import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import logoImage from "@/assets/gavina-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

const WA_URL = "https://wa.me/34616351534";

type LinkCard = {
  title: string;
  subtitle?: string;
  subtitle2?: string;
  note?: string;
  href?: string;
  external?: boolean;
  disabled?: boolean;
  variant: "coral" | "brown";
  featured?: boolean;
  wide?: boolean;
  icon?: boolean;
};

const links: LinkCard[] = [
  {
    title: "RECURSOS GRATUÏTS",
    href: "/recursos",
    variant: "brown",
    featured: true,
    wide: true,
  },
  {
    title: "Comunitat Privada",
    subtitle: "Accedeix a contingut de profundització",
    subtitle2: "Demana l'accés gratuït",
    href: WA_URL,
    external: true,
    variant: "coral",
  },
  {
    title: "Sessió Diagnòstica",
    href: "/primerasessio",
    variant: "coral",
  },
  {
    title: "Acompanyament Individual",
    href: "/individual",
    variant: "brown",
  },
  {
    title: "Retir «Cures de Matriu»",
    subtitle: "Retir d'1 dia · Dissabte 17 octubre",
    note: "INSCRIPCIONS OBERTES",
    href: "/retir",
    variant: "brown",
  },
  {
    title: "Matrius en Cercle",
    subtitle: "Acompanyament grupal (novembre 2026 - abril 2027)",
    href: "/matrius",
    variant: "coral",
  },
  {
    title: "Xerrades",
    subtitle: "Per a AFAs, ajuntaments i d'altres",
    href: "/xerrades",
    variant: "coral",
  },
  {
    title: "Contacta'm",
    subtitle: "per WhatsApp",
    href: WA_URL,
    external: true,
    variant: "brown",
    icon: true,
    wide: true,
  },
];

const underline = {
  textDecoration: "underline",
  textDecorationColor: "#c89684",
  textDecorationThickness: "3px",
  textUnderlineOffset: "6px",
} as const;

// Arch shape for a 3:4 box: round top (radius = half the width), soft bottom corners.
const arch = { borderRadius: "50% 50% 2rem 2rem / 37.5% 37.5% 2rem 2rem" } as const;

const georgia = 'Georgia, "Times New Roman", serif';

const delay = (ms: number) => ({ ["--reveal-delay" as string]: `${ms}ms` });

function Index() {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowFab(window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main data-motion="manual" className="relative min-h-screen overflow-hidden bg-background font-serif text-foreground">
      {/* Watermark layer */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
        }}
      >
        <img src={logoImage} alt="" className="w-[90vw] max-w-[1300px] opacity-[0.12]" />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden">
          <picture>
            <source media="(max-width: 767px)" srcSet="/home/hero-tall.jpg" />
            <img
              src="/home/hero-wide.jpg"
              alt="La Gavina caminant per un camí del bosc a la posta de sol"
              className="home-hero-img absolute inset-0 h-full w-full object-cover object-[50%_40%]"
              fetchPriority="high"
            />
          </picture>
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(42,31,23,.82) 0%, rgba(42,31,23,.45) 38%, rgba(42,31,23,.05) 65%, rgba(42,31,23,.25) 100%)",
            }}
          />

          <div className="relative flex h-full flex-col items-center justify-end px-6 pb-24 text-center text-[#f4ebe0] sm:pb-28">
            <span className="hero-in mb-5 inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#f4ebe0]/90 shadow-lg sm:h-20 sm:w-20" style={{ animationDelay: "200ms" }}>
              <img src={logoImage} alt="" className="h-11 w-11 object-contain sm:h-14 sm:w-14" />
            </span>
            <p className="hero-in text-xs font-medium uppercase tracking-[0.35em] opacity-90 sm:text-sm" style={{ animationDelay: "350ms" }}>
              Salut Cíclica Femenina
            </p>
            <h1 className="hero-in mt-4 font-serif text-[clamp(2.4rem,7vw,5rem)] font-semibold leading-[1.05]" style={{ animationDelay: "500ms" }}>
              Gavina Freixa Rius
            </h1>
            <p className="hero-in mt-4 max-w-xl text-[clamp(1.1rem,2.4vw,1.5rem)] italic opacity-95" style={{ fontFamily: georgia, animationDelay: "700ms" }}>
              T&apos;acompanyo a habitar la teva matriu
            </p>
            <div className="hero-in mt-8 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "900ms" }}>
              <a
                href="#camins"
                className="group inline-flex items-center gap-2 rounded-full bg-[#f4ebe0] px-7 py-3.5 font-serif font-medium tracking-[0.06em] text-[#6b5347] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                Descobreix com
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#f4ebe0]/70 px-7 py-3.5 font-serif font-medium tracking-[0.06em] text-[#f4ebe0] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#f4ebe0]/15"
              >
                <MessageCircle className="h-4 w-4" />
                Contacta&apos;m
              </a>
            </div>
          </div>

          <a
            href="#inici"
            aria-label="Baixa per llegir més"
            className="scroll-cue absolute bottom-6 left-1/2 text-[#f4ebe0]/85"
          >
            <ChevronDown className="h-7 w-7" />
          </a>
        </section>

        {/* INTRO */}
        <section id="inici" className="mx-auto max-w-7xl scroll-mt-6 px-4 pt-16 pb-12 sm:px-8 sm:pt-24 sm:pb-16">
          <div style={{ maxWidth: "720px", margin: "0 auto", display: "grid", gap: "1.6rem", textAlign: "center", fontSize: "clamp(1rem, 1.7vw, 1.15rem)", lineHeight: 1.7, color: "#2b2925" }}>
            <h2 data-reveal className="font-serif" style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.3rem)", color: "#6b5347", fontWeight: 700, lineHeight: 1.25, margin: 0 }}>
              Soc la Gavina i...
            </h2>

            <p data-reveal className="font-serif" style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)", color: "#8a4b34", fontWeight: 700, margin: 0 }}>
              Reconec la <span style={underline}>SAVIESA</span> i el <span style={underline}>PODER</span>
              <br />que habiten en la matriu de cada dona.
            </p>

            <p data-reveal className="font-serif" style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)", color: "#8a4b34", fontWeight: 700, margin: 0 }}>
              T&apos;acompanyo a <span style={underline}>HABITAR LA TEVA MATRIU</span>.
            </p>

            <div data-reveal className="mt-2 rounded-[2rem] border border-[#c89684]/30 bg-[#faf5ef]/70 px-6 py-7 shadow-[0_10px_40px_-20px_rgba(107,83,71,.25)] backdrop-blur-sm sm:px-10">
              <p style={{ fontWeight: 700, color: "#6b5347", margin: 0, fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: georgia }}>Un camí per recordar-te que pots...</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "1rem auto 0", display: "grid", gap: ".75rem", textAlign: "left" }}>
                {[
                  "Viure en coherència amb la dona que ets avui.",
                  "Cuidar la teva salut femenina i cultivar la prevenció.",
                  "Recuperar la sobirania sobre el teu cos, la teva sexualitat i el teu plaer.",
                ].map((item, i) => (
                  <li key={item} data-reveal style={{ ...delay(150 + i * 120), display: "flex", alignItems: "flex-start", gap: ".75rem", fontSize: "clamp(1.1rem, 2.1vw, 1.3rem)", fontFamily: georgia, color: "#6b5347" }}>
                    <span aria-hidden className="mt-[.6em] h-2 w-2 shrink-0 rounded-full bg-[#c89684]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 pt-2">
              {["VERITAT", "SALUT", "SOBIRANIA"].map((word, i) => (
                <p
                  key={word}
                  data-reveal="zoom"
                  className="font-serif"
                  style={{ ...delay(i * 150), fontSize: "clamp(1rem, 1.7vw, 1.2rem)", color: "#6b5347", fontWeight: 700, margin: 0 }}
                >
                  Un camí de{" "}
                  <span style={{ background: "#8a4b34", color: "white", padding: ".12em .55em", borderRadius: "999px", letterSpacing: ".06em" }}>{word}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* BIO */}
        <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-8 sm:pb-24">
          <div className="grid items-center gap-12 md:grid-cols-[minmax(260px,5fr)_7fr] md:gap-16">
            <div data-reveal="left" className="relative mx-auto w-[72%] max-w-[380px] md:w-full">
              <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-[#c89684]/60" style={arch} />
              <img
                src="/home/gavina-retrat.jpg"
                alt="Retrat de la Gavina somrient"
                loading="lazy"
                className="relative aspect-[3/4] w-full object-cover shadow-[0_20px_50px_-25px_rgba(107,83,71,.6)]"
                style={arch}
              />
            </div>

            <div style={{ display: "grid", gap: ".9rem", fontSize: "clamp(1.05rem, 1.9vw, 1.25rem)", lineHeight: 1.75, color: "#6b5347", fontFamily: georgia }}>
              <p data-reveal className="font-serif" style={{ fontSize: "clamp(1.3rem, 2.6vw, 1.75rem)", color: "#8a4b34", fontWeight: 700, fontStyle: "italic", margin: 0 }}>
                Em presento breument...
              </p>
              <p data-reveal style={{ margin: 0 }}>El meu gran despertar va començar fa tretze anys, quan vaig ser mare per primera vegada.</p>
              <p data-reveal style={{ margin: 0 }}>La maternitat em va portar a revisar la relació amb mi mateixa, amb la meva feminitat, la meva sexualitat i la meva matriu. Va ser l&apos;inici d&apos;un camí profund de recerca, transformació i retorn al meu cos que encara avui continuo recorrent.</p>
              <p data-reveal style={{ margin: 0 }}>Amb els anys he descobert que la salut femenina no es transforma només incorporant recursos. Es transforma quan una dona recupera la relació amb el seu cos, amb la seva ciclicitat, amb la natura i amb la saviesa que habita en la seva matriu.</p>
              <blockquote data-reveal className="my-2 border-l-4 border-[#c89684] pl-5 font-serif text-[#8a4b34]" style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontStyle: "italic", fontWeight: 600 }}>
                Aquesta és la mirada que sosté tot el que comparteixo.
              </blockquote>
              <p data-reveal style={{ margin: 0 }}>Els recursos que t&apos;ofereixo —alimentació regenerativa, plantes, fitoginecologia, moviment pelvicuterí, consciència sobre la sexualitat i connexió amb la ciclicitat— no són la finalitat del camí. Són portes d&apos;entrada perquè puguis anar reconstruint, al teu ritme, una relació més conscient amb la teva matriu i amb tu mateixa.</p>
              <p data-reveal style={{ margin: 0 }}>Per mi, aquest és el veritable sentit d&apos;habitar la matriu.</p>
              <p data-reveal style={{ margin: 0 }}>I és des d&apos;aquest lloc que avui puc acompanyar-te.</p>
            </div>
          </div>
        </section>

        {/* Separator with logo */}
        <div className="mx-auto flex max-w-3xl items-center gap-6 px-6">
          <div data-reveal="line" className="h-px flex-1 origin-right bg-[#c89684]/50" />
          <img data-reveal="spin" src={logoImage} alt="" className="h-10 w-10 object-contain" />
          <div data-reveal="line" className="h-px flex-1 origin-left bg-[#c89684]/50" />
        </div>

        {/* CAMINS */}
        <section id="camins" className="mx-auto max-w-4xl scroll-mt-6 px-6 pt-12 pb-20">
          <h2 data-reveal className="mx-auto mb-10 max-w-2xl text-center font-serif" style={{ fontSize: "clamp(1.3rem, 2.6vw, 1.75rem)", color: "#8a4b34", fontWeight: 700, lineHeight: 1.35 }}>
            Aquestes són les diferents maneres com podem recórrer aquest camí juntes:
          </h2>
          <nav className="grid gap-5 sm:grid-cols-2">
            {links.map((link, i) => (
              <LinkButton key={link.title} {...link} index={i} />
            ))}
          </nav>
        </section>

        {/* FOOTER */}
        <footer data-reveal className="mx-auto flex max-w-md flex-col items-center gap-3 px-6 pb-10">
          <img src={logoImage} alt="" className="h-12 w-12 object-contain opacity-80" />
          <p className="text-center text-sm italic text-[#6b5347]">Gavina Freixa Rius · Salut Cíclica Femenina</p>
        </footer>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacta per WhatsApp"
        className={`fixed right-5 bottom-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#8e6e60] text-[#f4ebe0] shadow-[0_10px_30px_-10px_rgba(42,31,23,.6)] transition-all duration-500 hover:scale-110 ${showFab ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </main>
  );
}

function LinkButton({ title, subtitle, subtitle2, note, href, external, disabled, variant, featured, wide, icon, index }: LinkCard & { index: number }) {
  const bg =
    variant === "brown"
      ? "bg-[#8e6e60] text-[#f4ebe0]"
      : "bg-[#d8a797] text-[#2a1f17]";

  const span = wide ? "sm:col-span-2" : "";
  const padding = featured ? "px-8 py-8 sm:px-10 sm:py-10" : "px-7 py-6 sm:px-8 sm:py-7";

  const baseClass = `home-card group relative flex h-full items-center gap-5 overflow-hidden rounded-[2rem] text-left font-serif shadow-sm ${bg} ${padding} ${span}`;
  const activeClass = `${baseClass} transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(42,31,23,.55)]`;

  const inner = (
    <>
      <div className="relative z-10 min-w-0 flex-1">
        {note && (
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#f4ebe0]/20 px-3 py-1 text-xs font-bold tracking-[0.12em] sm:text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
            </span>
            {note}
          </div>
        )}
        <div
          className={`flex items-center gap-2 font-medium tracking-[0.12em] ${featured ? "text-xl sm:text-2xl" : ""}`}
          style={!featured ? { fontSize: "clamp(1.1rem, 2vw, 1.3rem)" } : undefined}
        >
          {icon && <MessageCircle className="h-5 w-5 shrink-0" />}
          <span>{title}</span>
        </div>
        {subtitle && <div className="mt-2 text-sm italic tracking-[0.03em] opacity-90 sm:text-base">{subtitle}</div>}
        {subtitle2 && <div className="mt-1 text-xs italic tracking-[0.03em] opacity-80 sm:text-sm">{subtitle2}</div>}
      </div>
      <span
        aria-hidden
        className="relative z-10 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-current/40 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-current/15"
      >
        <ArrowRight className="h-5 w-5" />
      </span>
    </>
  );

  const revealProps = { "data-reveal": "", style: delay((index % 2) * 120) };

  if (disabled) {
    return <div {...revealProps} className={`${baseClass} cursor-not-allowed opacity-50`}>{inner}</div>;
  }

  if (external) {
    return (
      <a {...revealProps} href={href} className={activeClass} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  if (href) {
    return (
      <Link {...revealProps} to={href as "/" | "/recurs" | "/recursos" | "/matrius" | "/cures" | "/individual" | "/xerrades" | "/primerasessio" | "/retir"} className={activeClass}>
        {inner}
      </Link>
    );
  }

  return <div {...revealProps} className={`${baseClass} cursor-default`}>{inner}</div>;
}
