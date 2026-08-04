import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/gavina-hero.jpg";
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
    title: "Recurs gratuït",
    subtitle: "\u201cCom restaurar i mantenir la salut femenina ginecològica\u201d",
    subtitle2: "Vídeo · 30 minuts",
    href: "/recurs",
    variant: "coral",
    featured: true,
  },
  {
    title: "Matrius en cercle",
    subtitle: "Espai grupal mensual (online)",
    href: "/matrius",
    variant: "brown",
  },
  {
    title: "Cures de matriu",
    subtitle: "Retir d'1 dia · Dissabte 17 octubre",
    href: "/retir",
    variant: "coral",
  },
  {
    title: "Acompanyament individual",
    subtitle: "Sessions personalitzades, 1 a 1",
    href: "/individual",
    variant: "brown",
  },
  {
    title: "Acompanyament mare i filla",
    subtitle: "Dolors menstruals i/o Síndrome Premenstrual",
    href: "/mare-filla",
    variant: "coral",
  },
  {
    title: "Xerrades per a AFAs, ajuntaments i d'altres",
    href: "/xerrades",
    variant: "brown",
  },
  {
    title: "Uneix-te gratuïtament a la meva Comunitat privada",
    subtitle: "on comparteixo informació de primícia. Contacta'm per obtenir-ne l'enllaç.",
    href: "https://wa.me/34616351534",
    external: true,
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
  const isPreview = typeof window !== "undefined" && window.location.search.includes("preview");

  if (!isPreview) {
    return (
      <main className="relative min-h-screen bg-background font-serif text-foreground">
        <div className="relative z-10">
          {/* HERO */}
          <section className="relative w-full">
            <img
              src={heroImage}
              alt="Cercle de dones sota un arbre"
              className="block w-full h-auto"
              style={{
                maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              }}
            />
            <h1 className="sr-only">La Gavina — Salut femenina ginecològica</h1>
          </section>

          {/* MISSATGE DE MANTENIMENT */}
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 3rem)",
              textAlign: "center",
            }}
          >
            <img src={logoImage} alt="" style={{ width: "3.5rem", height: "3.5rem", objectFit: "contain", opacity: 0.7, marginBottom: "2rem" }} />
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 1.75rem)",
                color: "#6b5347",
                lineHeight: 1.65,
                maxWidth: "600px",
                fontStyle: "italic",
              }}
            >
              Estic actualitzant els serveis per oferir la meva més polida versió avui. Tingueu paciència. Al llarg de l&apos;agost podreu consultar-ho tot&nbsp;;)
            </p>
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(1rem, 2.2vw, 1.3rem)",
                color: "#6b5347",
                lineHeight: 1.7,
                maxWidth: "600px",
                marginTop: "1.8rem",
              }}
            >
              Per a qualsevol consulta, mentrestant, em podeu contactar al<br />
              <a href="tel:+34616351534" style={{ fontWeight: 700, color: "#8a4b34", textDecoration: "none" }}>616 351 534</a>.<br />
              Bon agost!
            </p>
            <div style={{ marginTop: "2.5rem", height: "1px", width: "80px", background: "rgba(200,150,132,.45)" }} />
            <p style={{ marginTop: "1.5rem", fontSize: ".9rem", color: "#a08070", letterSpacing: ".05em" }}>
              Gavina Freixa Rius · Salut Cíclica Femenina
            </p>
          </section>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background font-serif text-foreground">
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
            src={heroImage}
            alt="Cercle de dones sota un arbre"
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "clamp(260px, 36%, 430px) 1fr",
              gap: "clamp(2rem, 5vw, 5rem)",
              alignItems: "start",
            }}
          >
            {/* Photo */}
            <div className="overflow-hidden rounded-2xl" style={{ boxShadow: "0 16px 50px rgba(107,83,71,.18)" }}>
              <img
                src="/gavina%20planta.jpg"
                alt="La Gavina"
                style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "3/4", objectPosition: "center top" }}
              />
            </div>

            {/* Text content */}
            <div style={{ display: "grid", gap: "1.4rem", fontSize: "clamp(1rem, 1.7vw, 1.15rem)", lineHeight: 1.7, color: "#2b2925" }}>
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
                <p style={{ fontWeight: 600, color: "#6b5347", margin: 0 }}>Un camí per recordar-te que pots...</p>
                <ul style={{ listStyle: "none", padding: 0, margin: ".75rem 0 0", display: "grid", gap: ".55rem" }}>
                  {[
                    "Viure en coherència amb la dona que ets avui.",
                    "Cuidar la teva salut femenina i cultivar la prevenció.",
                    "Recuperar la sobirania sobre el teu cos, la teva sexualitat i el teu plaer.",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", fontSize: "clamp(1rem, 1.7vw, 1.15rem)" }}>
                      <span style={{ color: "#c89684", fontWeight: 700, flexShrink: 0, marginTop: ".15em" }}>✦</span>
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
          </div>

          {/* Bio — full width */}
          <div style={{ borderTop: "1.5px solid rgba(200,150,132,.3)", marginTop: "2.5rem", paddingTop: "1.8rem", display: "grid", gap: ".9rem", fontSize: "clamp(1rem, 1.7vw, 1.15rem)", lineHeight: 1.7, color: "#2b2925" }}>
            <p className="font-serif" style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)", color: "#8a4b34", fontWeight: 700, fontStyle: "italic", margin: 0 }}>
              Em presento breument...
            </p>
            <p style={{ margin: 0, fontSize: "clamp(1rem, 1.7vw, 1.15rem)" }}>El meu gran despertar va començar fa tretze anys, quan vaig ser mare per primera vegada.</p>
            <p style={{ margin: 0, fontSize: "clamp(1rem, 1.7vw, 1.15rem)" }}>La maternitat em va portar a revisar la relació amb mi mateixa, amb la meva feminitat, la meva sexualitat i la meva matriu. Va ser l&apos;inici d&apos;un camí profund de recerca, transformació i retorn al meu cos que encara avui continuo recorrent.</p>
            <p style={{ margin: 0, fontSize: "clamp(1rem, 1.7vw, 1.15rem)" }}>Amb els anys he descobert que la salut femenina no es transforma només incorporant recursos. Es transforma quan una dona recupera la relació amb el seu cos, amb la seva ciclicitat, amb la natura i amb la saviesa que habita en la seva matriu.</p>
            <p style={{ margin: 0, fontSize: "clamp(1rem, 1.7vw, 1.15rem)" }}>Aquesta és la mirada que sosté tot el que comparteixo.</p>
            <p style={{ margin: 0, fontSize: "clamp(1rem, 1.7vw, 1.15rem)" }}>Els recursos que t&apos;ofereixo —alimentació regenerativa, plantes, fitoginecologia, moviment pelvicuterí, consciència sobre la sexualitat i connexió amb la ciclicitat— no són la finalitat del camí. Són portes d&apos;entrada perquè puguis anar reconstruint, al teu ritme, una relació més conscient amb la teva matriu i amb tu mateixa.</p>
            <p style={{ margin: 0, fontSize: "clamp(1rem, 1.7vw, 1.15rem)" }}>Per mi, aquest és el veritable sentit d&apos;habitar la matriu.</p>
            <p style={{ margin: 0, fontSize: "clamp(1rem, 1.7vw, 1.15rem)" }}>I és des d&apos;aquest lloc que avui puc acompanyar-te.</p>
            <p className="font-serif" style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)", color: "#8a4b34", fontWeight: 700, textAlign: "center", marginTop: ".8rem" }}>
              Aquestes són les diferents maneres com podem recórrer aquest camí juntes.
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

  const titleSize = featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl";
  const padding = featured ? "px-8 py-7 sm:py-9" : "px-8 py-5 sm:py-6";

  const baseClass = `block rounded-full text-center font-serif shadow-sm ${bg} ${padding}`;
  const activeClass = `${baseClass} transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md`;
  const disabledClass = `${baseClass} opacity-50 cursor-not-allowed`;

  const inner = (
    <>
      <div className={`flex items-center justify-center gap-2 font-medium tracking-[0.18em] ${titleSize}`}>
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
        <div className="mt-1 text-xs font-bold not-italic tracking-[0.05em] opacity-90 sm:text-sm">
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
      <Link to={href as "/" | "/recurs" | "/matrius" | "/cures" | "/individual" | "/xerrades" | "/mare-filla" | "/retir"} className={activeClass}>
        {inner}
      </Link>
    );
  }

  return <div className={`${baseClass} cursor-default`}>{inner}</div>;
}
