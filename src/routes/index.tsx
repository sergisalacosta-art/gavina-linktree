import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import logoImage from "@/assets/gavina-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

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
  icon?: boolean;
};

const links: LinkCard[] = [
  {
    title: "Comunitat Privada",
    subtitle: "Accedeix a contingut de profundització",
    subtitle2: "Demana l'accés gratuït",
    href: "https://wa.me/34616351534",
    external: true,
    variant: "coral",
  },
  {
    title: "Recurs gratuït",
    subtitle: "\u201cCom restaurar i mantenir la salut femenina ginecològica\u201d",
    subtitle2: "Vídeo · 30 minuts",
    href: "/recurs",
    variant: "brown",
    featured: true,
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
    variant: "coral",
  },
  {
    title: "Matrius en Cercle",
    subtitle: "Acompanyament grupal (novembre 2026 - abril 2027)",
    href: "/matrius",
    variant: "brown",
  },
  {
    title: "Xerrades per a AFAs, ajuntaments i d'altres",
    href: "/xerrades",
    variant: "coral",
  },
  {
    title: "Contacta'm",
    subtitle: "per WhatsApp",
    href: "https://wa.me/34616351534",
    external: true,
    variant: "brown",
    icon: true,
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background font-serif text-foreground">
      <style>{`.preview-intro-grid{display:grid;grid-template-columns:clamp(260px,36%,430px) 1fr;gap:clamp(2rem,5vw,5rem);align-items:start}@media(max-width:640px){.preview-intro-grid{grid-template-columns:1fr}}`}</style>
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
        {/* HERO full-bleed */}
        <section className="relative w-full">
          <img
            src="/matrius/assets/gavinaartemisa.png"
            alt="La Gavina a la natura amb artemisa"
            className="block w-full h-auto"
            style={{
              maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            }}
          />
          <h1 className="sr-only">La Gavina — Salut femenina ginecològica</h1>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-7xl px-4 sm:px-8 pt-6 pb-12 sm:pt-10 sm:pb-16">
          <div style={{ maxWidth: "720px", margin: "0 auto", display: "grid", gap: "1.4rem", textAlign: "center", fontSize: "clamp(1rem, 1.7vw, 1.15rem)", lineHeight: 1.7, color: "#2b2925" }}>
            <h2 className="font-serif" style={{ fontSize: "clamp(1.45rem, 3vw, 2rem)", color: "#6b5347", fontWeight: 700, lineHeight: 1.25, margin: 0 }}>
              Soc la Gavina i...
            </h2>

            <p className="font-serif" style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)", color: "#8a4b34", fontWeight: 700, margin: 0 }}>
              Reconec la{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "3px", textUnderlineOffset: "6px" }}>SAVIESA</span>
              {" "}i el{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "3px", textUnderlineOffset: "6px" }}>PODER</span>
              <br />que habiten en la matriu de cada dona.
            </p>

            <p className="font-serif" style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)", color: "#8a4b34", fontWeight: 700, margin: 0 }}>
              T&apos;acompanyo a{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "3px", textUnderlineOffset: "6px" }}>
                HABITAR LA TEVA MATRIU
              </span>.
            </p>

            <div>
              <p style={{ fontWeight: 700, color: "#6b5347", margin: 0, fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif' }}>Un camí per recordar-te que pots...</p>
              <ul style={{ listStyle: "none", padding: 0, margin: ".75rem auto 0", display: "grid", gap: ".55rem", textAlign: "left" }}>
                {[
                  "Viure en coherència amb la dona que ets avui.",
                  "Cuidar la teva salut femenina i cultivar la prevenció.",
                  "Recuperar la sobirania sobre el teu cos, la teva sexualitat i el teu plaer.",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347" }}>
                    <span style={{ color: "#c89684", fontWeight: 700, flexShrink: 0, marginTop: ".15em" }}>·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: "grid", gap: ".35rem" }}>
              {[["Un camí de ", "VERITAT"], ["Un camí de ", "SALUT"], ["Un camí de ", "SOBIRANIA"]].map(([pre, word]) => (
                <p key={word} className="font-serif" style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)", color: "#6b5347", fontWeight: 700, margin: 0 }}>
                  {pre}<span style={{ background: "#8a4b34", color: "white", padding: ".08em .45em", borderRadius: ".3rem" }}>{word}</span>.
                </p>
              ))}
            </div>
          </div>

          {/* Bio — full width */}
          <div style={{ borderTop: "1.5px solid rgba(200,150,132,.3)", marginTop: "2.5rem", paddingTop: "1.8rem", display: "grid", gap: ".9rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", lineHeight: 1.7, color: "#6b5347", fontFamily: 'Georgia, "Times New Roman", serif' }}>
            <p className="font-serif" style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)", color: "#8a4b34", fontWeight: 700, fontStyle: "italic", margin: 0 }}>
              Em presento breument...
            </p>
            <p style={{ margin: 0 }}>El meu gran despertar va començar fa tretze anys, quan vaig ser mare per primera vegada.</p>
            <p style={{ margin: 0 }}>La maternitat em va portar a revisar la relació amb mi mateixa, amb la meva feminitat, la meva sexualitat i la meva matriu. Va ser l&apos;inici d&apos;un camí profund de recerca, transformació i retorn al meu cos que encara avui continuo recorrent.</p>
            <p style={{ margin: 0 }}>Amb els anys he descobert que la salut femenina no es transforma només incorporant recursos. Es transforma quan una dona recupera la relació amb el seu cos, amb la seva ciclicitat, amb la natura i amb la saviesa que habita en la seva matriu.</p>
            <p style={{ margin: 0 }}>Aquesta és la mirada que sosté tot el que comparteixo.</p>
            <p style={{ margin: 0 }}>Els recursos que t&apos;ofereixo —alimentació regenerativa, plantes, fitoginecologia, moviment pelvicuterí, consciència sobre la sexualitat i connexió amb la ciclicitat— no són la finalitat del camí. Són portes d&apos;entrada perquè puguis anar reconstruint, al teu ritme, una relació més conscient amb la teva matriu i amb tu mateixa.</p>
            <p style={{ margin: 0 }}>Per mi, aquest és el veritable sentit d&apos;habitar la matriu.</p>
            <p style={{ margin: 0 }}>I és des d&apos;aquest lloc que avui puc acompanyar-te.</p>
            <p className="font-serif" style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)", color: "#8a4b34", fontWeight: 700, textAlign: "center", marginTop: ".8rem" }}>
              Aquestes són les diferents maneres com podem recórrer aquest camí juntes:
            </p>
          </div>
        </section>

        {/* Separator with logo */}
        <div className="mx-auto flex max-w-3xl items-center gap-6 px-6">
          <div className="h-px flex-1 bg-[#c89684]/50" />
          <img src={logoImage} alt="" className="h-10 w-10 object-contain" />
          <div className="h-px flex-1 bg-[#c89684]/50" />
        </div>

        {/* BUTTONS */}
        <nav className="mx-auto mt-10 flex max-w-[720px] flex-col gap-5 px-6 pb-16">
          {links.map((link) => (
            <LinkButton key={link.title} {...link} />
          ))}
        </nav>

        {/* FOOTER */}
        <footer className="mx-auto flex max-w-md flex-col items-center gap-3 px-6 pb-10">
          <img src={logoImage} alt="" className="h-12 w-12 object-contain opacity-80" />
          <p className="text-center text-sm italic text-[#6b5347]">Gavina Freixa Rius · Salut Cíclica Femenina</p>
        </footer>
      </div>
    </main>
  );
}

function LinkButton({ title, subtitle, subtitle2, note, href, external, disabled, variant, featured, icon }: LinkCard) {
  const bg =
    variant === "brown"
      ? "bg-[#8e6e60] text-[#f4ebe0]"
      : "bg-[#d8a797] text-[#2a1f17]";

  const titleSize = featured ? "text-xl sm:text-2xl" : "";
  const padding = featured ? "px-8 py-7 sm:py-9" : "px-8 py-5 sm:py-6";

  const baseClass = `block rounded-full text-center font-serif shadow-sm ${bg} ${padding}`;
  const activeClass = `${baseClass} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`;
  const disabledClass = `${baseClass} opacity-50 cursor-not-allowed`;

  const inner = (
    <>
      <div className={`flex items-center justify-center gap-2 font-medium tracking-[0.18em] ${titleSize}`} style={!featured ? { fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)" } : undefined}>
        {icon && <MessageCircle className="h-5 w-5" />}
        <span>{title}</span>
      </div>
      {subtitle && (
        <div className="mt-2 text-sm italic tracking-[0.05em] opacity-90 sm:text-base">
          {subtitle}
        </div>
      )}
      {subtitle2 && (
        <div className="mt-1 text-xs italic tracking-[0.05em] opacity-80 sm:text-sm">
          {subtitle2}
        </div>
      )}
      {note && (
        <div className="mt-1 text-base font-bold not-italic tracking-[0.05em] opacity-90 sm:text-lg" style={{ textDecoration: "underline" }}>
          {note}
        </div>
      )}
    </>
  );

  if (disabled) {
    return <div className={disabledClass}>{inner}</div>;
  }

  if (external) {
    return (
      <a href={href} className={activeClass} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href as "/" | "/recurs" | "/matrius" | "/cures" | "/individual" | "/xerrades" | "/primerasessio" | "/retir"} className={activeClass}>
        {inner}
      </Link>
    );
  }

  return <div className={`${baseClass} cursor-default`}>{inner}</div>;
}
