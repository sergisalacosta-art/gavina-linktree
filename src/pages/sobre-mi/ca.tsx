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
                  alt="La Gavina asseguda en una roca al riu"
                  className="relative aspect-[3/4] w-full object-cover shadow-[0_30px_60px_-30px_rgba(42,31,23,.55)]"
                  style={{ borderRadius: "50% 50% 2.5rem 2.5rem / 37.5% 37.5% 2.5rem 2.5rem" }}
                />
              </div>
            </div>

            <div className="grid gap-5" style={{ fontFamily: georgia, color: "#6b5347", fontSize: "clamp(1.08rem, 1.9vw, 1.25rem)", lineHeight: 1.8 }}>
              <h1 data-reveal className="font-serif text-[#8a4b34]" style={{ fontSize: "clamp(1.4rem, 2.8vw, 1.9rem)", fontWeight: 700, fontStyle: "italic" }}>
                Em presento breument...
              </h1>
              <p data-reveal>El meu gran despertar va començar fa tretze anys, quan vaig ser mare per primera vegada.</p>
              <p data-reveal>La maternitat em va portar a revisar la relació amb mi mateixa, amb la meva feminitat, la meva sexualitat i la meva matriu. Va ser l&apos;inici d&apos;un camí profund de recerca, transformació i retorn al meu cos que encara avui continuo recorrent.</p>
              <p data-reveal>Amb els anys he descobert que la salut femenina no es transforma només incorporant recursos. Es transforma quan una dona recupera la relació amb el seu cos, amb la seva ciclicitat, amb la natura i amb la saviesa que habita en la seva matriu.</p>
              <blockquote data-reveal className="my-3 rounded-[1.5rem] border-l-4 border-[#c89684] bg-[#faf5ef]/80 px-6 py-5 font-serif text-[#8a4b34]" style={{ fontSize: "clamp(1.2rem, 2.3vw, 1.5rem)", fontStyle: "italic", fontWeight: 600, lineHeight: 1.5 }}>
                Aquesta és la mirada que sosté tot el que comparteixo.
              </blockquote>
              <p data-reveal>Els recursos que t&apos;ofereixo —alimentació regenerativa, plantes, fitoginecologia, moviment pelvicuterí, consciència sobre la sexualitat i connexió amb la ciclicitat— no són la finalitat del camí. Són portes d&apos;entrada perquè puguis anar reconstruint, al teu ritme, una relació més conscient amb la teva matriu i amb tu mateixa.</p>
              <p data-reveal>Per mi, aquest és el veritable sentit d&apos;habitar la matriu.</p>
              <p data-reveal>I és des d&apos;aquest lloc que avui puc acompanyar-te.</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
