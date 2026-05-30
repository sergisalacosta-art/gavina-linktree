import { createFileRoute, Link } from "@tanstack/react-router";
import handsImg from "@/assets/acompanyament.jpg";
import focdonesImg from "@/assets/matrius-cercle.jpg";
import curesImg from "@/assets/cures-matriu.jpg";
import logoImage from "@/assets/gavina-logo.png";

const WA_URL = "https://wa.me/34616351534";

export const Route = createFileRoute("/recurs")({
  component: RecursPage,
});

function RecursPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 flex items-center justify-center"
        style={{
          zIndex: 9999,
          maskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
        }}
      >
        <img src={logoImage} alt="" style={{ width: "90vw", maxWidth: "1300px", opacity: 0.12 }} />
      </div>

      <div className="mx-auto max-w-5xl px-6 pt-10 pb-12">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm italic text-[#8e6e60] hover:text-[#6b5347] transition-colors"
        >
          ← Tornar
        </Link>

        {/* Video */}
        <div className="overflow-hidden rounded-3xl bg-[oklch(0.22_0.03_40)] shadow-soft">
          <div className="relative aspect-video w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/r_Qh0WJ6OCM?rel=0"
              title="Bases per restaurar i mantenir la teva salut femenina ginecològica"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <h1 className="mx-auto mt-10 max-w-2xl text-center font-serif text-2xl leading-[1.15] md:text-3xl">
          Bases per restaurar i mantenir la teva salut femenina ginecològica
        </h1>
        <p className="mt-4 text-center text-base italic text-muted-foreground md:text-lg">
          (dura només 30 min ;))
        </p>
      </div>

      {/* Tres propostes */}
      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <p className="text-center font-serif text-2xl text-primary md:text-3xl">
          T’acompanyo amb aquestes tres propostes:
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <ProposalCard
            img={handsImg}
            alt="Mà sostenint una flor de calèndula"
            title="Acompanyament Individual"
            href="/individual"
          />
          <ProposalCard
            img={focdonesImg}
            alt="Cercle de dones abraçades en un bosc"
            title="Matrius en Cercle"
            subtitle="Espai grupal mensual (online)"
            href="/matrius"
          />
          <ProposalCard
            img={curesImg}
            alt="Cures de matriu, cercle de dones a l’aire lliure"
            title="Cures de Matriu"
            subtitle="Retir d’1 dia · Octubre 2026"
            note="Informació disponible ben aviat"
            imgPosition="center 35%"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 pt-8 text-center">
        <p className="font-serif text-2xl text-primary md:text-3xl">
          Em pots contactar aquí:
        </p>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
        >
          <WhatsAppIcon className="h-6 w-6" />
          <span>Contacta'm per WhatsApp</span>
        </a>
      </section>

      <footer className="bg-primary py-6 text-center text-xs text-white">
        Gavina Freixa Rius · Salut Cíclica Femenina
      </footer>
    </main>
  );
}

function ProposalCard({
  img, alt, title, subtitle, note, href, imgPosition, external,
}: {
  img: string;
  alt: string;
  title: string;
  subtitle?: string;
  note?: string;
  href?: string;
  imgPosition?: string;
  external?: boolean;
}) {
  const isClickable = !!href;
  const inner = (
    <>
      <div className="overflow-hidden rounded-3xl shadow-soft">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <img
            src={img}
            alt={alt}
            loading="lazy"
            className={`h-full w-full object-cover transition-transform duration-500${isClickable ? " group-hover:scale-[1.03]" : ""}`}
            style={{ objectPosition: imgPosition ?? "center" }}
          />
        </div>
      </div>
      <div className="mt-5 text-center">
        <h3 className="font-serif text-xl font-semibold text-primary md:text-2xl">{title}</h3>
        {subtitle && (
          <p className="mt-1.5 font-serif text-[15px] italic text-terracotta/85">{subtitle}</p>
        )}
        {note && (
          <p className="mt-1.5 text-[15px] font-bold not-italic text-primary/70">{note}</p>
        )}
      </div>
    </>
  );

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="group block">
        {inner}
      </a>
    );
  }

  if (href) {
    return (
      <Link to={href as "/matrius" | "/individual"} className="group block">
        {inner}
      </Link>
    );
  }

  return <div className="block">{inner}</div>;
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.05 4.91A10 10 0 0 0 12 2a10 10 0 0 0-8.66 15l-1.3 4.74 4.86-1.27A10 10 0 1 0 19.05 4.91Zm-7.05 15.4a8.27 8.27 0 0 1-4.22-1.16l-.3-.18-2.88.75.77-2.81-.2-.31A8.31 8.31 0 1 1 20.3 12a8.34 8.34 0 0 1-8.3 8.31Zm4.55-6.22c-.25-.13-1.48-.73-1.71-.81s-.4-.13-.56.13-.65.81-.79.97-.29.18-.54.06a6.78 6.78 0 0 1-2-1.23 7.56 7.56 0 0 1-1.4-1.74c-.14-.25 0-.38.11-.51s.25-.29.37-.43a1.62 1.62 0 0 0 .25-.41.46.46 0 0 0 0-.44c-.06-.13-.56-1.34-.76-1.83s-.4-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.81 2.81 0 0 0-.88 2.1 4.91 4.91 0 0 0 1 2.59 11.16 11.16 0 0 0 4.27 3.77 14.43 14.43 0 0 0 1.42.52 3.43 3.43 0 0 0 1.57.1 2.58 2.58 0 0 0 1.69-1.19 2.1 2.1 0 0 0 .14-1.19c-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}
