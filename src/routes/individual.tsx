import { createFileRoute, Link } from "@tanstack/react-router";
import logoImage from "@/assets/gavina-logo.png";

export const Route = createFileRoute("/individual")({
  component: IndividualPage,
});

function IndividualPage() {
  return (
    <main className="relative min-h-screen bg-background font-serif text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center"
        style={{
          maskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
        }}
      >
        <img src={logoImage} alt="" className="w-[90vw] max-w-[1300px] opacity-[0.08]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm italic text-[#8e6e60] hover:text-[#6b5347] transition-colors"
        >
          ← Tornar
        </Link>

        {/* TODO: Contingut d'Acompanyament Individual */}
        <div className="rounded-2xl border border-[#d8c4b3] bg-[#faf5ef] p-10 text-center">
          <img src={logoImage} alt="" className="mx-auto mb-6 h-16 w-16 object-contain opacity-60" />
          <h1 className="text-3xl font-medium tracking-wide text-[#6b5347]">Acompanyament Individual</h1>
          <p className="mt-3 text-xl italic text-[#8e6e60]">Sessions personalitzades, 1 a 1</p>
          <div className="mt-8 h-px bg-[#d8c4b3]" />
          <p className="mt-8 text-[#6b5347]">Contingut en preparació.</p>
        </div>

        <footer className="mt-16 flex flex-col items-center gap-2">
          <img src={logoImage} alt="" className="h-8 w-8 object-contain opacity-60" />
          <p className="text-center text-xs italic text-[#8e6e60]">
            Gavina Freixa Rius · Salut Cíclica Femenina
          </p>
        </footer>
      </div>
    </main>
  );
}
