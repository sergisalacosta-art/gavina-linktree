import logoImage from "@/assets/gavina-logo.png";

const georgia = 'Georgia, "Times New Roman", serif';

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
        {/* Història */}
        <section className="mx-auto max-w-6xl px-6 pb-16 pt-12 sm:px-8 md:pb-24 md:pt-16">
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
              <h1 data-reveal className="font-serif text-[#8a4b34]" style={{ fontSize: "clamp(1.4rem, 2.8vw, 1.9rem)", fontWeight: 700, fontStyle: "italic" }}>
                Me presento brevemente...
              </h1>
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

      </div>
    </main>
  );
}
