import logoImage from "@/assets/gavina-logo.png";
import { css } from "./ca";

const WA_URL = "https://wa.me/34616351534";


const faqData = [
  {
    q: "¿Qué tipo de diagnóstico haremos en esta sesión?",
    a: [
      "Es un diagnóstico desde la mirada terapéutica e integrativa de la salud femenina. No es un diagnóstico médico, sino una valoración de tu caso desde una mirada global, teniendo en cuenta tu historia, los síntomas, tus hábitos, tu ciclicidad y tu momento vital.",
    ],
  },
  {
    q: "¿Necesito tener un diagnóstico o saber exactamente qué me pasa?",
    a: [
      "No.",
      "No hace falta que llegues a la sesión con un diagnóstico ni con las ideas claras sobre lo que te está pasando.",
      "Tanto si convives con un desequilibrio ginecológico concreto como si simplemente sientes que algo no está en equilibrio y no sabes muy bien cómo explicarlo, esta sesión es un espacio para ordenar todo lo que estás viviendo.",
      "Revisaremos tu historia, los síntomas, tu momento vital y aquellos aspectos de tu día a día que pueden estar influyendo en tu salud femenina.",
      "A partir de aquí, te ayudaré a poner luz a tu caso y a comprender cuál podría ser el camino que tiene más sentido para ti.",
    ],
  },
  {
    q: "¿Qué trabajaremos durante la sesión?",
    a: [
      "Durante la sesión escucharé tu caso y te daré una mirada global sobre lo que me has compartido.",
      "Revisaremos posibles factores que pueden estar relacionados con tu desequilibrio y te propondré unas primeras orientaciones y recursos que pueden ayudarte a empezar a cuidarte.",
      "Si considero que un proceso de acompañamiento personalizado puede ser adecuado para ti, te explicaré cómo podría ser este camino.",
    ],
  },
  {
    q: "¿Después de la sesión tengo que hacer obligatoriamente el acompañamiento individual?",
    a: [
      "No.",
      "La sesión tiene valor por sí misma, porque el objetivo es que salgas con más claridad sobre tu caso y con una mejor comprensión de lo que puede estar pasando.",
      "Si después de valorarlo juntas considero que un proceso más profundo te puede ayudar, te explicaré esta posibilidad. Pero siempre será una decisión tuya.",
    ],
  },
  {
    q: "¿Cuánto dura la sesión y qué tengo que preparar?",
    a: [
      "La sesión tiene una duración aproximada de 1h15min y es online.",
      "Antes del encuentro te pediré que me compartas información sobre tu historia, tus síntomas y el momento vital en el que te encuentras, para que pueda preparar la sesión y aprovechar mejor el tiempo juntas.",
    ],
  },
  {
    q: "¿Saldré de la sesión con orientaciones concretas?",
    a: [
      "El objetivo principal de la sesión es comprender qué puede estar pasando y encontrar una orientación personalizada.",
      "En función de tu caso, te compartiré algunas primeras indicaciones o recursos que pueden tener sentido para ti, y valoraremos si necesitas un proceso más profundo para ir integrándolos y hacer su seguimiento.",
    ],
  },
];

export function SessioPage() {
  return (
    <div className="sv">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div
        aria-hidden
        style={{
          position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
          display: "flex", alignItems: "center", justifyContent: "center",
          maskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
        }}
      >
        <img src={logoImage} alt="" style={{ width: "90vw", maxWidth: "1300px", opacity: 0.1 }} />
      </div>


      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <h1>Sesión Diagnóstica</h1>
          <p className="hero-sub">El primer paso para poner luz a tu caso.</p>
        </div>
      </header>

      <main>

        {/* INTRO */}
        <section>
          <div className="wrap">
            <p style={{ marginTop: 0, textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Te ayudo a comprender qué puede estar expresando tu cuerpo<br />
              y a encontrar qué camino puede tener más sentido para ti.
            </p>
            <p style={{ marginTop: "1.4rem" }}>
              Quizá hace tiempo que convives con un desequilibrio ginecológico, un síntoma que se repite o la sensación de que algo no está en equilibrio.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Quizá has buscado información, has probado diferentes opciones, pero todavía no tienes claro de dónde puede venir lo que estás viviendo ni qué podrías hacer a partir de ahora.
            </p>
            <p style={{ marginTop: "1rem" }}>
              En esta sesión pondremos luz a tu caso.
            </p>
            <p style={{ marginTop: "1rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Un espacio para escuchar tu historia, comprender qué puede estar expresando tu cuerpo y ofrecerte una orientación personalizada para que puedas tomar decisiones con más claridad.
            </p>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Quiero reservar mi sesión
              </a>
            </p>
          </div>
        </section>

        {/* PER A QUI ÉS? */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>¿Para quién es?</h2>
            </div>
            <p style={{ marginTop: 0 }}>Esta sesión es para ti si:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "1.2rem 0 0", display: "grid", gap: ".9rem" }}>
              {[
                "Tienes un desequilibrio ginecológico y quieres una mirada integrativa para comprender mejor qué puede estar pasando en tu cuerpo.",
                "Tienes síntomas como dolor menstrual, ciclos irregulares, sangrados abundantes, amenorrea, miomas, quistes, dolor en las relaciones u otras molestias relacionadas con la salud femenina, y sientes que necesitas una mirada más global y respetuosa sobre tu caso.",
                "Quieres valorar si un proceso de acompañamiento personalizado puede ser el siguiente paso para ti.",
                "Sientes que te has desconectado de tu cuerpo, de tu ciclicidad o de tu matriz, y quieres volver a escucharlo.",
                "Estás en tus primeros años de climaterio y quieres comprender mejor esta nueva etapa y encontrar recursos naturales para acompañarte.",
                "Quieres cuidar y autogestionar tu salud femenina desde una mirada natural, recuperando recursos y saberes que han sostenido a las mujeres en muchas tradiciones a lo largo del tiempo.",
                "No sabes por dónde empezar y necesitas una orientación personalizada para saber cuál podría ser el mejor camino para ti.",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0, color: "var(--terra)", fontWeight: 700 }}>✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Quiero reservar mi sesión
              </a>
            </p>
          </div>
        </section>

        {/* QUÈ FAREM EN AQUESTA SESSIÓ? */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>¿Qué haremos en esta sesión?</h2>
            </div>
            <div className="farem-grid">
              {/* Photo left */}
              <div className="farem-photo">
                <div style={{ borderRadius: "1.7rem", overflow: "hidden", boxShadow: "0 16px 50px rgba(107,83,71,.18)" }}>
                  <img
                    src="/matrius/assets/gavinacama.jpeg"
                    alt="Gavina en la naturaleza"
                    loading="lazy"
                    style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "3/4" }}
                  />
                </div>
              </div>
              {/* Content right */}
              <div>
                <p style={{ marginTop: 0, textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
                  Una mirada global para empezar a orientar tu camino.
                </p>
                <p style={{ marginTop: "1.2rem", textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                  Antes de buscar respuestas, necesitamos ordenar lo que estamos viviendo.
                </p>
                <p style={{ marginTop: ".3rem", textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                  Esta sesión es un espacio para hacerlo juntas.
                </p>
                <p style={{ marginTop: "1.4rem" }}>Durante la sesión revisaremos:</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0 0", display: "grid", gap: ".9rem" }}>
                  {[
                    "Tu historia personal y ginecológica.",
                    "Los síntomas o desequilibrios que estás viviendo actualmente.",
                    "Los hábitos, rutinas y factores que pueden estar influyendo en tu estado actual.",
                    "La posible relación entre diferentes aspectos de tu cuerpo, tu ciclicidad y tu momento vital.",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".7rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>
                      <span style={{ flexShrink: 0 }}>🌿</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: "1.4rem", fontWeight: 700, color: "#6b5347" }}>
                  Duración: 1h15 aproximadamente.
                </p>
              </div>
            </div>

            <p style={{ marginTop: "1.8rem" }}>
              A partir de esta mirada global, te compartiré mi comprensión de tu caso y una propuesta orientativa sobre los caminos que podrían ayudarte.
            </p>

            {/* I DESPRÉS DE LA SESSIÓ? */}
            <div className="destacat" style={{ marginTop: "1.6rem" }}>
              <p style={{ fontWeight: 700, color: "var(--terra)", margin: 0, fontSize: "clamp(1.2rem, 2.3vw, 1.5rem)", textTransform: "uppercase", letterSpacing: ".04em" }}>
                ¿Y después de la sesión?
              </p>
              <p>
                Si después de la sesión las dos sentimos que tiene sentido continuar este camino, esta sesión será el punto de partida para iniciar el acompañamiento individualizado.
              </p>
              <p>
                A partir de lo que hayamos observado, podré proponerte un camino adaptado a ti, a tu momento vital y a las necesidades de tu cuerpo.
              </p>
              <p>
                Y si considero que este no es el proceso más adecuado para ti, también te lo diré con honestidad.
              </p>
            </div>
          </div>
        </section>

        {/* QUÈ T'EMPORTARÀS? */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>¿Qué te llevarás?</h2>
            </div>
            <p style={{ marginTop: 0, textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Cuando entendemos mejor lo que estamos viviendo,<br />
              también podemos empezar a decidir con más calma y más confianza.
            </p>
            <p style={{ marginTop: "1.4rem" }}>Después de la sesión tendrás:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0 0", display: "grid", gap: ".9rem" }}>
              {[
                "Más claridad sobre qué puede estar pasando en tu cuerpo.",
                "Una mirada más amplia sobre tu caso.",
                "Una orientación sobre qué pasos podrían tener más sentido para ti.",
                "Una propuesta inicial con los caminos que pueden tener más sentido para empezar a cuidar tu salud femenina.",
                "Más criterio para decidir si quieres iniciar un proceso de acompañamiento más profundo.",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".7rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0 }}>🌿</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* INVERSIÓ */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Inversión</h2>
            </div>
            <p className="price-number">82€</p>
            <p style={{ marginTop: ".6rem" }}>
              Incluye la sesión online de valoración y orientación personalizada (1h15 aproximadamente).
            </p>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Quiero reservar mi sesión
              </a>
            </p>
          </div>
        </section>

        {/* QUI T'ACOMPANYA? */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>¿Quién te acompaña?</h2>
            </div>
            <div className="bio-side">
              <div>
                <p style={{ marginTop: 0 }}>
                  Soy Gavina y desde hace trece años recorro un camino de búsqueda, transformación y profundización en torno a la salud femenina, la relación con el cuerpo y la matriz.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Mi mirada nace de mi propia experiencia de vida, de mi proceso personal y de las diferentes formaciones que me han ido aportando herramientas para comprender y acompañar los procesos de las mujeres: Terapia Gestalt, Ginecología Natural y Ancestral, Ciclicidad y Sexualidad Alquímica Femenina, Alimentación Regenerativa, Fitoginecología, Movimiento Pélvico y otros recursos naturales.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Pero lo más importante que he aprendido no proviene solo de las formaciones, sino de mi propio camino.
                </p>
              </div>
              <div className="bio-photo soft-img">
                <img
                  src="/matrius/assets/gavinariu2prop.jpg"
                  alt="Gavina"
                  loading="lazy"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
            </div>

            <p style={{ marginTop: "2rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              He aprendido que{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                la salud femenina no se transforma solo atendiendo los síntomas
              </span>
              . Necesitamos escuchar el cuerpo, comprender qué nos está expresando y recuperar la confianza en la sabiduría que ya habita en nuestra matriz.
            </p>
            <p style={{ marginTop: "1.4rem" }}>
              Esta es la <strong style={{ color: "#6b5347" }}>mirada desde la que hoy te acompaño</strong>: ofreciéndote un{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                espacio de escucha profunda, claridad y orientación
              </span>
              {" "}para que puedas comprender mejor tu caso y encontrar un camino coherente contigo y con el momento vital que estás viviendo.
            </p>
          </div>
        </section>

        {/* PREGUNTES FREQÜENTS */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Preguntas frecuentes</h2>
            </div>
            <div className="faq">
              {faqData.map(({ q, a }) => (
                <details key={q} className="faq-item">
                  <summary>{q}</summary>
                  <div className="faq-body">
                    {a.map((para, i) => <p key={i}>{para}</p>)}
                  </div>
                </details>
              ))}
              <details className="faq-item">
                <summary>¿Cómo puedo saber si esta sesión es para mí?</summary>
                <div className="faq-body">
                  <p>
                    Si sientes que necesitas entender mejor tu cuerpo, ordenar lo que estás viviendo y encontrar un camino más consciente para cuidar tu salud femenina, esta sesión puede ser un buen primer paso.
                  </p>
                  <p style={{ marginTop: "1.4rem" }}>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra" style={{ fontSize: "clamp(.95rem, 1.8vw, 1.15rem)", padding: ".9rem 1.6rem", letterSpacing: ".04em" }}>
                      Escríbeme y valoraremos juntas si es el momento adecuado para ti
                    </a>
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section>
          <div className="wrap">
            <div className="cta-block">
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)", lineHeight: 1.3, margin: 0, color: "#4a2e22" }}>
                ¿Estás preparada para dar el primer paso?
              </h2>
              <p style={{ marginTop: "1.4rem", color: "#4a2e22", lineHeight: 1.65, fontWeight: 700 }}>
                Si sientes que <span className="em-sub">ha llegado el momento de mirar tu salud femenina</span> <span className="em-sub">desde un lugar más consciente</span>,<br />
                esta sesión puede ser un buen comienzo.
              </p>
              <p style={{ marginTop: ".8rem", color: "#4a2e22", lineHeight: 1.65, fontWeight: 700, textAlign: "center" }}>
                Un espacio para escuchar tu historia,<br />
                ordenar lo que estás viviendo<br />
                y valorar juntas qué camino puede tener más sentido para ti.
              </p>
              <p style={{ marginTop: "1.8rem" }}>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Quiero reservar mi sesión
                </a>
              </p>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
