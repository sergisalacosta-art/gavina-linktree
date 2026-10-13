import { AppLink as Link } from "@/components/site/AppLink";
import { ArrowRight } from "lucide-react";
import { pages } from "@/lib/i18n";
import logoImage from "@/assets/gavina-logo.png";

const georgia = 'Georgia, "Times New Roman", serif';

const underline = {
  textDecoration: "underline",
  textDecorationColor: "#c89684",
  textDecorationThickness: "3px",
  textUnderlineOffset: "6px",
} as const;

export function SobreMi() {
  return (
    <main data-motion="manual" className="relative overflow-hidden bg-background font-serif text-foreground">
      {/* Watermark */}
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

      <div className="relative z-10">
        {/* Capçalera */}
        <section className="mx-auto max-w-4xl px-6 pb-6 pt-14 text-center sm:px-8 md:pt-20">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#8e6e60]">Sobre mí</p>
          <h1 data-reveal className="font-serif font-semibold text-[#6b5347]" style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", lineHeight: 1.1 }}>
            Soy Gavina y...
          </h1>
          <div data-reveal className="mx-auto mt-8 grid max-w-2xl gap-4 text-[#8a4b34]" style={{ fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)", fontWeight: 700 }}>
            <p>
              Reconozco la <span style={underline}>SABIDURÍA</span> y el <span style={underline}>PODER</span>
              <br />que habitan en la matriz de cada mujer.
            </p>
            <p>
              Te acompaño a <span style={underline}>HABITAR TU MATRIZ</span>.
            </p>
          </div>
        </section>

        {/* Història */}
        <section className="mx-auto max-w-6xl px-6 py-16 sm:px-8 md:py-24">
          <div className="grid items-start gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
            <div className="md:sticky md:top-28">
              <div data-reveal className="relative mx-auto w-[78%] max-w-[420px] md:w-full">
                <div aria-hidden className="absolute -inset-3 bg-[#d8a797]/35 md:-inset-4" style={{ borderRadius: "50% 50% 2.5rem 2.5rem / 37.5% 37.5% 2.5rem 2.5rem" }} />
                <img
                  src="/web/sobre-mi.jpg"
                  alt="Gavina sentada en una roca junto al río"
                  className="relative aspect-[3/4] w-full object-cover shadow-[0_30px_60px_-30px_rgba(42,31,23,.55)]"
                  style={{ borderRadius: "50% 50% 2.5rem 2.5rem / 37.5% 37.5% 2.5rem 2.5rem" }}
                />
              </div>
            </div>

            <div className="grid gap-5" style={{ fontFamily: georgia, color: "#6b5347", fontSize: "clamp(1.08rem, 1.9vw, 1.25rem)", lineHeight: 1.8 }}>
              <h2 data-reveal className="font-serif text-[#8a4b34]" style={{ fontSize: "clamp(1.4rem, 2.8vw, 1.9rem)", fontWeight: 700, fontStyle: "italic" }}>
                Me presento brevemente...
              </h2>
              <p data-reveal>Mi gran despertar empezó hace trece años, cuando fui madre por primera vez.</p>
              <p data-reveal>La maternidad me llevó a revisar la relación conmigo misma, con mi feminidad, mi sexualidad y mi matriz. Fue el inicio de un camino profundo de búsqueda, transformación y regreso a mi cuerpo que todavía hoy sigo recorriendo.</p>
              <p data-reveal>Con los años he descubierto que la salud femenina no se transforma solo incorporando recursos. Se transforma cuando una mujer recupera la relación con su cuerpo, con su ciclicidad, con la naturaleza y con la sabiduría que habita en su matriz.</p>
              <blockquote data-reveal className="my-3 rounded-[1.5rem] border-l-4 border-[#c89684] bg-[#faf5ef]/80 px-6 py-5 font-serif text-[#8a4b34]" style={{ fontSize: "clamp(1.2rem, 2.3vw, 1.5rem)", fontStyle: "italic", fontWeight: 600, lineHeight: 1.5 }}>
                Esta es la mirada que sostiene todo lo que comparto.
              </blockquote>
              <p data-reveal>Los recursos que te ofrezco —alimentación regenerativa, plantas, fitoginecología, movimiento pélvico-uterino, conciencia sobre la sexualidad y conexión con la ciclicidad— no son la finalidad del camino. Son puertas de entrada para que puedas ir reconstruyendo, a tu ritmo, una relación más consciente con tu matriz y contigo misma.</p>
              <p data-reveal>Para mí, este es el verdadero sentido de habitar la matriz.</p>
              <p data-reveal>Y es desde este lugar que hoy puedo acompañarte.</p>
            </div>
          </div>
        </section>

        {/* Camí */}
        <section className="bg-[#ece0d2]/70 py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-6 text-center sm:px-8">
            <h2 data-reveal className="font-serif font-semibold text-[#6b5347]" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.3rem)" }}>
              Un camino para recordarte que puedes...
            </h2>
            <ul className="mx-auto mt-8 grid max-w-xl gap-4 text-left" style={{ fontFamily: georgia, color: "#6b5347", fontSize: "clamp(1.1rem, 2vw, 1.3rem)" }}>
              {[
                "Vivir en coherencia con la mujer que eres hoy.",
                "Cuidar tu salud femenina y cultivar la prevención.",
                "Recuperar la soberanía sobre tu cuerpo, tu sexualidad y tu placer.",
              ].map((item, i) => (
                <li key={item} data-reveal style={{ ["--reveal-delay" as string]: `${i * 120}ms` }} className="flex items-start gap-3">
                  <span aria-hidden className="mt-[.6em] h-2 w-2 shrink-0 rounded-full bg-[#c89684]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {["VERDAD", "SALUD", "SOBERANÍA"].map((word) => (
                <p key={word} data-reveal className="font-bold text-[#6b5347]">
                  Un camino de <span className="rounded-full bg-[#8a4b34] px-3 py-1 tracking-[0.06em] text-white">{word}</span>
                </p>
              ))}
            </div>
            <Link
              data-reveal
              to={pages.home.es}
              hash="acompanamientos"
              className="group mt-12 inline-flex items-center gap-2 rounded-full bg-[#8e6e60] px-7 py-3.5 tracking-[0.04em] text-[#f4ebe0] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b5347]"
            >
              Descubre los acompañamientos
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
