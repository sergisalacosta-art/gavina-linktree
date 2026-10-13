import logoImage from "@/assets/gavina-logo.png";
import { css } from "./ca";

const WA_URL = "https://wa.me/34616351534";


export function XerradesPage() {
  return (
    <div className="xp">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
        }}
      >
        <img src={logoImage} alt="" style={{ width: "90vw", maxWidth: "1300px", opacity: 0.12 }} />
      </div>


      <header className="hero">
        <div className="hero-inner">
          <h1><span className="menstruar">Menstruar</span> sin dolor</h1>
          <p className="subtitle">Acompañar la salud femenina de tu hija desde la raíz, detectando señales de alerta y aplicando recursos naturales de autocuidado y prevención</p>
          <p className="avís">(AVISO IMPORTANTE: El contenido no es el mismo que el de una charla taller de educación sexual).</p>
        </div>
      </header>

      <main>
        {/* Presentació */}
        <section>
          <div className="wrap grid-2" style={{ alignItems: "stretch" }}>
            <div className="card text-card">
              <span className="eyebrow">Presentación</span>
              <p>Para cuidar la salud femenina de tu hija hay que empezar por la tuya. ¿Cómo puedes acompañarla si tienes dudas sobre tu ciclo? ¿Sabrías identificar cuándo un síntoma premenstrual o menstrual es una señal de alerta?</p>
              <p>Se normaliza el dolor menstrual y la solución no es taparlo con una pastilla, sino entender su causa, cuidarse de verdad y resolverlo desde la raíz con respeto hacia tu cuerpo para prevenir desequilibrios ginecológicos futuros.</p>
              <p style={{ marginTop: "1.4rem", fontStyle: "italic", color: "var(--terra-fosc)", fontWeight: 600 }}>Esta charla es un espacio para mujeres que quieren romper con la herencia del sufrimiento menstrual.</p>
            </div>
            <div className="soft-img" style={{ position: "relative", minHeight: "260px" }}>
              <img src="/xerrades/assets/xerrada-2.jpg" alt="Charla en grupo" loading="lazy"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
            </div>
          </div>
        </section>

        {/* Per a qui és */}
        <section className="cream">
          <div className="wrap">
            <span className="eyebrow">Para quién es</span>
            <ul className="bullets">
              <li>Familias de niñas que ya menstrúan o que están a punto.</li>
              <li>Mujeres que quieren conocer recursos naturales para cuidar su salud femenina.</li>
            </ul>
          </div>
        </section>

        {/* Objectius i contingut */}
        <section>
          <div className="wrap">
            <span className="eyebrow">Objetivos y contenido</span>
            <p className="lead">Mi objetivo es que las familias conozcan bien las pautas para cuidar de verdad la salud femenina desde los inicios de la etapa fértil, y así prevenir el desarrollo de síntomas futuros. Y que sean conscientes de la importancia de atender a tiempo los dolores menstruales, si aparecen, para que no desencadenen otros desequilibrios ginecológicos.</p>
            <ul className="bullets">
              <li>Entender los orígenes del dolor en los órganos femeninos: más allá de la fisiología</li>
              <li>Señales de un ciclo saludable vs. señales de alerta durante la fase premenstrual y la menstruación. ¿Qué es normal y qué no debemos naturalizar?</li>
              <li>Pasos a seguir si aparecen síntomas y riesgos de no atenderlos</li>
              <li>Consecuencias de los anticonceptivos hormonales, los antiinflamatorios, las compresas de plástico y las extirpaciones</li>
              <li>Tratamiento natural para la dismenorrea y el síndrome premenstrual</li>
              <li>Aprender a cuidarse de forma natural, práctica, económica y sencilla. Pautas de autocuidado</li>
              <li>Hábitos y rutinas para atenuar síntomas y prevenirlos</li>
            </ul>
          </div>
        </section>

        {/* Format */}
        <section className="cream">
          <div className="wrap grid-2">
            <div>
              <span className="eyebrow">Format</span>
              <p className="lead">Charla participativa. Habrá espacio para preguntas, resolución de dudas y para compartir casos personales si surge la necesidad.</p>
            </div>
            <div className="soft-img soft-img-h">
              <img src="/xerrades/assets/xerrada-1.jpg" alt="Charla en grupo pequeño" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Qui soc */}
        <section>
          <div className="wrap grid-2" style={{ alignItems: "stretch" }}>
            <div className="soft-img portrait-img">
              <img src="/matrius/assets/gavina-nova.jpg" alt="Gavina" loading="lazy" />
            </div>
            <div className="card text-card">
              <span className="eyebrow">Quién soy</span>
              <p>Mi objetivo es que las familias de las adolescentes tengan toda la información clara sobre la mesa para poder compartirla con sus hijas y, juntas, decidir cómo actuar. Por eso se la quiero transmitir de una manera resumida, simple, clara y sin tabúes.</p>
              <p style={{ marginTop: "1rem" }}>Todas merecemos vivir nuestra ciclicidad siendo conscientes y entendiendo cómo funciona nuestro ciclo, y así vivirlo con autonomía, respetando nuestros cuerpos y disfrutando de todas nuestras fases. Con naturalidad, comodidad y placer, y con productos que nos cuidan.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="wrap">
            <div className="cta-block">
              <h2>Contacto</h2>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.2rem", height: "1.2rem" }} aria-hidden="true">
                  <path d="M19.05 4.91A10 10 0 0 0 12 2a10 10 0 0 0-8.66 15l-1.3 4.74 4.86-1.27A10 10 0 1 0 19.05 4.91Zm-7.05 15.4a8.27 8.27 0 0 1-4.22-1.16l-.3-.18-2.88.75.77-2.81-.2-.31A8.31 8.31 0 1 1 20.3 12a8.34 8.34 0 0 1-8.3 8.31Zm4.55-6.22c-.25-.13-1.48-.73-1.71-.81s-.4-.13-.56.13-.65.81-.79.97-.29.18-.54.06a6.78 6.78 0 0 1-2-1.23 7.56 7.56 0 0 1-1.4-1.74c-.14-.25 0-.38.11-.51s.25-.29.37-.43a1.62 1.62 0 0 0 .25-.41.46.46 0 0 0 0-.44c-.06-.13-.56-1.34-.76-1.83s-.4-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.81 2.81 0 0 0-.88 2.1 4.91 4.91 0 0 0 1 2.59 11.16 11.16 0 0 0 4.27 3.77 14.43 14.43 0 0 0 1.42.52 3.43 3.43 0 0 0 1.57.1 2.58 2.58 0 0 0 1.69-1.19 2.1 2.1 0 0 0 .14-1.19c-.06-.1-.22-.16-.47-.28Z"/>
                </svg>
                Escríbeme para más información
              </a>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
}
