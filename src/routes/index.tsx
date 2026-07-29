import { createFileRoute } from "@tanstack/react-router";
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
          <div style={{ marginTop: "2.5rem", height: "1px", width: "80px", background: "rgba(200,150,132,.45)" }} />
          <p style={{ marginTop: "1.5rem", fontSize: ".9rem", color: "#a08070", letterSpacing: ".05em" }}>
            Gavina Freixa Rius · Salut Cíclica Femenina
          </p>
        </section>
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
