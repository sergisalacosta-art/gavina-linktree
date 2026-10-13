import logoImage from "@/assets/gavina-logo.png";

const WA_URL = "https://wa.me/34616351534";

export function RecursosPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
        }}
      >
        <img src={logoImage} alt="" style={{ width: "90vw", maxWidth: "1300px", opacity: 0.12 }} />
      </div>

      <div className="relative z-10">

        <div className="mx-auto max-w-5xl px-6 pt-8 pb-16">
          <h1 className="text-center font-serif text-3xl text-primary mb-10 md:text-4xl">
            Recursos gratuitos
          </h1>
          <div className="grid gap-12 sm:grid-cols-2">
            {[
              { img: "/matrius/assets/bases-salut-cover.jpg",   alt: "Bases para restaurar y mantener la salud femenina ginecológica" },
              { img: "/matrius/assets/habitar-matriu-cover.jpg", alt: "Habitar tu Matriz" },
            ].map(({ img, alt }) => (
              <div key={alt} className="flex flex-col items-center gap-5">
                <div className="w-full overflow-hidden rounded-[2.5rem] shadow-soft">
                  <img src={img} alt={alt} className="w-full h-auto block" />
                </div>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-center rounded-full bg-primary px-7 py-3.5 font-serif font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:brightness-105"
                >
                  Pide el acceso a esta charla
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
