import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/gavina-hero.jpg";
import portraitImage from "@/assets/gavina-portrait.jpg";
import logoImage from "@/assets/gavina-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
});

type LinkCard = {
  title: string;
  subtitle?: string;
  subtitle2?: string;
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
    title: "Matrius en Cercle",
    subtitle: "Espai grupal mensual (online)",
    href: "/matrius",
    variant: "brown",
  },
  {
    title: "Cures de Matriu",
    subtitle: "Retir d'1 dia · Octubre 2026",
    subtitle2: "Ben aviat: informació detallada",
    href: "/cures",
    variant: "coral",
  },
  {
    title: "Acompanyament Individual",
    subtitle: "Sessions personalitzades, 1 a 1",
    variant: "brown",
    disabled: true,
  },
  {
    title: "Contacta'm",
    subtitle: "per WhatsApp",
    href: "https://wa.me/34616351536",
    external: true,
    variant: "coral",
    icon: true,
  },
];

function Index() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background font-serif text-foreground">
      {/* Watermark layer */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center"
        style={{
          maskImage:
            "radial-gradient(ellipse at center, black 55%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 55%, transparent 80%)",
        }}
      >
        <img
          src={logoImage}
          alt=""
          className="w-[90vw] max-w-[1300px] opacity-[0.12]"
        />
      </div>

      <div className="relative z-10">
        {/* HERO full-bleed */}
        <section className="relative w-full">
          <img
            src={heroImage}
            alt="Cercle de dones sota un arbre"
            className="block w-full h-auto"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 70%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 70%, transparent 100%)",
            }}
          />
          <h1 className="sr-only">La Gavina — Salut femenina ginecològica</h1>
        </section>

        {/* INTRO */}
        <section className="mx-auto max-w-5xl px-6 pt-4 pb-12 sm:pt-8 sm:pb-16">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[260px_1fr] md:gap-12">
            <div className="flex flex-col items-center">
              <div className="relative">
                <img
                  src={portraitImage}
                  alt="Retrat de la Gavina"
                  className="h-44 w-44 rounded-full object-cover object-[center_25%] shadow-md ring-1 ring-[#d8c4b3] sm:h-52 sm:w-52"
                />
              </div>
              <p className="mt-4 text-center text-2xl italic text-[#6b5347]">
                Soc la Gavina
              </p>
            </div>

            <div className="space-y-5 text-[1.15rem] leading-relaxed sm:text-[1.2rem]">
              <p>
                Acompanyo dones que tenen ganes de{" "}
                <strong className="font-semibold">cuidar i millorar</strong> la seva{" "}
                <strong className="font-semibold">salut femenina ginecològica</strong>{" "}
                aplicant rutines bàsiques d'
                <strong className="font-semibold">
                  autocura i pautes de prevenció reals i naturals, lluny de fàrmacs i
                  intervencions quirúrgiques
                </strong>
                .
              </p>
              <p>
                Uns recursos que són les bases de la salut femenina i que han sostingut, i
                sostenen, les{" "}
                <strong className="font-semibold">
                  dones en diferents tradicions mil·lenàries d'arreu del món
                </strong>
                .
              </p>
            </div>
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
          <img
            src={logoImage}
            alt=""
            className="h-12 w-12 object-contain opacity-80"
          />
          <p className="text-center text-sm italic text-[#6b5347]">
            Gavina Freixa Rius · Salut Cíclica Femenina
          </p>
        </footer>
      </div>
    </main>
  );
}

function LinkButton({ title, subtitle, subtitle2, href, external, disabled, variant, featured, icon }: LinkCard) {
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

  return (
    <Link to={href as "/" | "/recurs" | "/matrius" | "/cures" | "/individual"} className={activeClass}>
      {inner}
    </Link>
  );
}
