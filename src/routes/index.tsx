import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/gavina-hero.jpg";
import bgImage from "@/assets/gavina-bg.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Gavina — Salut femenina ginecològica" },
      {
        name: "description",
        content:
          "Acompanyament a dones per cuidar i millorar la salut femenina ginecològica amb rutines d'autocura i prevenció natural.",
      },
      { property: "og:title", content: "La Gavina — Salut femenina ginecològica" },
      {
        property: "og:description",
        content:
          "Acompanyament a dones per cuidar la salut femenina amb autocura i prevenció natural.",
      },
    ],
  }),
  component: Index,
});

type LinkCard = {
  title: string;
  titleClassName?: string;
  lines?: { text: string; className?: string }[];
  href: string;
  variant: "light" | "dark";
  underline?: boolean;
};

const links: LinkCard[] = [
  {
    title: "Recurs gratuït",
    lines: [
      { text: "“Com restaurar i mantenir la salut femenina ginecològica”" },
      { text: "Vídeo 30 minuts", className: "text-white" },
    ],
    href: "#recurs",
    variant: "light",
  },
  {
    title: "Matrius en Cercle",
    titleClassName: "text-black",
    lines: [{ text: "Espai grupal mensual (online)" }],
    href: "#matrius",
    variant: "dark",
  },
  {
    title: "Cures de Matriu",
    lines: [
      { text: "Retir d’1 dia. Octubre 2026", className: "text-white" },
      { text: "(Ben aviat: informació detallada)", className: "text-white italic" },
    ],
    href: "#cures",
    variant: "light",
  },
  {
    title: "Acompanyament Individual",
    href: "#individual",
    variant: "dark",
  },
  {
    title: "Contacta’m per WhatsApp",
    href: "https://wa.me/",
    variant: "light",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen bg-background">
      <div className="relative mx-auto max-w-xl px-4 pb-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[center_top] bg-repeat-y bg-contain opacity-10"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <div className="overflow-hidden">
          <img
            src={heroImage}
            alt="Cercle de dones sota un arbre"
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>

        <div className="relative mt-6 px-6 py-8 sm:px-10 sm:py-10">
          <h1 className="sr-only">La Gavina — Salut femenina ginecològica</h1>

          <p className="text-[17px] leading-relaxed text-foreground font-serif text-center sm:text-lg">
            Soc la Gavina, acompanyant de dones que tenen ganes de <strong>cuidar i millorar</strong> la seva <strong>salut femenina ginecològica</strong> aplicant rutines bàsiques d’<strong>autocura i pautes de prevenció reals i naturals, lluny de fàrmacs i intervencions quirúrgiques</strong>. Uns recursos que són les bases de la salut femenina i que han sostingut, i sostenen, les <strong>dones en diferents tradicions mil·lenàries d’arreu del món</strong>.
          </p>

          <nav className="mt-8 flex flex-col gap-4">
            {links.map((link) => (
              <LinkButton key={link.title} {...link} />
            ))}
          </nav>
        </div>

      </div>
    </main>
  );
}

function LinkButton({ title, titleClassName, lines, href, variant, underline }: LinkCard) {
  const bg =
    variant === "dark"
      ? "bg-[var(--clay-dark)] text-primary-foreground"
      : "bg-[var(--clay-light)] text-foreground";

  const lineClass = underline ? "underline underline-offset-4" : "";

  return (
    <a
      href={href}
      className={`block rounded-full px-6 py-5 text-center font-serif transition-transform hover:scale-[1.01] ${bg}`}
    >
      <div className={`text-base sm:text-lg tracking-[0.18em] ${lineClass} ${titleClassName ?? ""}`}>
        {title}
      </div>
      {lines?.map((l, i) => (
        <div
          key={i}
          className={`mt-1 text-sm sm:text-base tracking-[0.15em] ${lineClass} ${l.className ?? ""}`}
        >
          {l.text}
        </div>
      ))}
    </a>
  );
}
