import { useState } from "react";
import logoImage from "@/assets/gavina-logo.png";
import { css } from "./ca";

const WA_URL = "https://wa.me/34616351534";


const testimonials = [
  {
    text: "Hacía tiempo que tenía problemas menstruales, amenorrea, sangrados intermenstruales y ya me habían visitado diferentes profesionales (endocrina, ginecólogos, médicos e incluso nutricionista, sin mucho éxito). Decidí empezar con Gavina porque quería probar otra mirada, buscar la raíz del problema desde una perspectiva más natural y entendiendo el lenguaje de mi cuerpo. Gavina me enseñó a mirarme como nunca, a ponerme en el centro y escuchar mi cuerpo. A darle el descanso y la pausa que necesitaba para tener energía suficiente para ovular. También gracias a sus conocimientos, de manera paralela, pude obtener más respuestas de los médicos. Me encontraron un cáncer de útero que no me habrían diagnosticado tan a tiempo si ella no me hubiera asesorado. Gavina me ayudó muchísimo a decidir mi tratamiento con toda la información. Ojalá hubiera encontrado una mirada como la de Gavina años atrás.",
    name: "Lorena",
  },
  {
    text: "Visualizo a Gavina como una sabia chamana, a la que acudir y en la que confiar. Encontrar mujeres tan potentes como ella, con esta mirada reivindicativa y amorosa, me encanta y me conecta con lo que para mí es importante.",
    name: "Alba",
  },
  {
    text: "El Masaje Ritual Matriz con Gavina fue muy mágico. Desde el primer momento me sentí acompañada. Un acompañamiento dulce, presente, consciente, tanto el día del ritual como en la revisión previa, donde me cuestioné cosas muy necesarias y, sobre todo, me ha permitido conectar con mi matriz.",
    name: "Raquel",
  },
  {
    text: "Empezamos las sesiones con Gavina porque mi hija Laia, de 13 años, tenía muchos dolores durante la menstruación. A Laia le fueron muy bien las sesiones presenciales porque eran un espacio donde se relajaba y conectaba, y a mí también. Durante todo el proceso nos sentimos muy cómodas y Laia expresó con tranquilidad lo que sentía en un clima de mucha confianza. Aprendió a conocer cómo funciona su ciclo y a ubicar su útero y sus ovarios. Los masajes de matriz, hechos con mucha delicadeza y ternura, también nos hicieron sentir muy a gusto. Hemos hecho un aprendizaje, madre e hija, que nos servirá para siempre. Siguiendo las pautas de Gavina, Laia ha mejorado mucho.",
    name: "Teresa",
  },
  {
    text: "Gavina me transmite mucha confianza hacia una mirada más conectada con la naturaleza y mi intuición femenina. Siento que gran parte de los mensajes sobre los cambios, el cuerpo y la salud se miran mucho desde el miedo y una visión muy medicalizada. Ancestralmente, las mujeres se acompañaban entre ellas, desde su sabiduría y sus conocimientos. Siento mucha curiosidad por probar el acompañamiento con una mujer sensible y empática como ella. ¡Tener a Gavina es todo un regalo!",
    name: "Brenda",
  },
];

const faqData = [
  {
    q: "¿Cómo puedo saber si este acompañamiento es para mí?",
    a: [
      "Hablaremos de tu caso, del momento vital que estás viviendo y valoraremos juntas si este acompañamiento es lo que necesitas ahora mismo.",
      "Si siento que otro camino te puede ayudar más en este momento, también te lo diré con toda honestidad.",
    ],
  },
  {
    q: "¿Y si no sé por dónde empezar?",
    a: [
      "No hace falta que llegues sabiendo qué necesitas.",
      "Empezaremos escuchando tu caso, el momento vital que estás viviendo y qué te ha traído hasta aquí.",
      "A partir de aquí, definiremos juntas el camino que tenga más sentido para ti.",
    ],
  },
  {
    q: "En principio no tengo ningún desequilibrio ginecológico, pero siento la necesidad de reconectar con mi matriz y con mi feminidad.",
    a: [
      "Sí. Este acompañamiento también es para ti.",
      "No hace falta esperar a que aparezca un desequilibrio para empezar a cuidar tu salud femenina.",
      "Si sientes el deseo de reconectar con tu cuerpo, comprender mejor tu ciclicidad e incorporar recursos naturales que te ayuden a cuidarte de una manera más consciente, este proceso también puede ser un buen camino para ti.",
    ],
  },
  {
    q: "¿Es necesario aplicar todos los recursos que propones?",
    a: [
      "Los recursos que iremos descubriendo son puertas de entrada para empezar a construir una nueva relación con tu cuerpo y con tu matriz.",
      "Ahora bien, para que el proceso sea realmente transformador, es importante que puedas ir incorporando, de manera progresiva, lo que vamos trabajando. Esto nos permitirá observar cómo responde tu cuerpo e ir ajustando el proceso según lo que necesites.",
    ],
  },
  {
    q: "¿Y si no tengo tiempo para incorporar todos estos recursos?",
    a: [
      "No se trata de hacer más cosas.",
      "Buscaremos aquellos recursos que puedan integrarse de manera realista en tu día a día para que cuidarte sea algo sostenible, no una exigencia más.",
    ],
  },
  {
    q: "¿Cuánto dura el acompañamiento?",
    a: [
      "No hay una duración igual para todas las mujeres.",
      "Cada proceso es diferente porque cada historia, cada cuerpo y cada momento vital también lo son.",
      "Después de la primera sesión te haré una propuesta personalizada y, a partir de ahí, iremos valorando juntas la evolución del proceso.",
    ],
  },
  {
    q: "¿Necesito tener conocimientos previos sobre salud femenina o recursos naturales?",
    a: [
      "No.",
      "Este acompañamiento se adapta a tu punto de partida.",
      "No importa si es la primera vez que te acercas a esta mirada o si hace años que te interesa la salud femenina. El proceso se adaptará a tu punto de partida.",
    ],
  },
  {
    q: "He vivido una pérdida gestacional y me siento muy desconectada de mi matriz.",
    a: [
      "Cada mujer vive una pérdida de una manera diferente.",
      "Si sientes que es tu momento, te acompañaré con mucha delicadeza a recuperar la relación con tu cuerpo y tu matriz, respetando tu ritmo.",
      "Y valoraremos juntas qué recursos pueden sostener mejor tu momento presente.",
    ],
  },
  {
    q: "No siento deseo sexual o ya no disfruto de la penetración. ¿Este acompañamiento es para mí?",
    a: [
      "Sí, puede serlo.",
      "La sexualidad cambia a lo largo de la vida y, especialmente, durante etapas como el climaterio.",
      "En este proceso no nos centraremos solo en la sexualidad. También observaremos cómo estás viviendo el resto de dimensiones de tu vida, porque todo está relacionado.",
      "A partir de aquí, iremos incorporando aquellos recursos que puedan ayudarte a recuperar, poco a poco, una relación más consciente con tu cuerpo, tu placer y tu sexualidad.",
    ],
  },
  {
    q: "¿Me puedes garantizar que mi desequilibrio se resolverá en 3 o 4 meses?",
    a: [
      "No.",
      "Cada cuerpo, cada historia y cada proceso son únicos.",
      "Mi compromiso es acompañarte para que puedas comprender mejor lo que te está explicando tu cuerpo, incorporar recursos adaptados a ti y crear las condiciones para que recupere, en la medida de lo posible, su equilibrio.",
      "Los resultados dependerán de muchos factores, pero también del compromiso que puedas asumir con tu propio proceso.",
    ],
  },
];

function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const n = testimonials.length;
  const prev = () => setIdx(i => (i - 1 + n) % n);
  const next = () => setIdx(i => (i + 1) % n);
  const { text, name } = testimonials[idx];
  return (
    <div>
      <div className="testi-carousel">
        <button className="testi-arrow" onClick={prev} aria-label="Anterior">‹</button>
        <div className="testi-track">
          <div className="testi-card">
            <p>&ldquo;{text}&rdquo;</p>
            <cite>{name}</cite>
          </div>
        </div>
        <button className="testi-arrow" onClick={next} aria-label="Siguiente">›</button>
      </div>
      <div className="testi-dots">
        {testimonials.map((_, i) => (
          <button key={i} className={`testi-dot${i === idx ? " active" : ""}`} onClick={() => setIdx(i)} aria-label={`Testimonio ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

export function IndividualPage() {
  return (
    <div className="ip">
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
          <h1>ACOMPAÑAMIENTO INDIVIDUAL</h1>
          <p className="hero-sub">Para mujeres que quieren recuperar la relación con su matriz y cuidar su salud femenina con conciencia, recursos naturales y autonomía.</p>
        </div>
      </header>

      <main>

        {/* INTRO BLOCK */}
        <section>
          <div className="wrap">
            <p style={{ marginTop: 0 }}>Te acompaño a habitar tu matriz.</p>
            <p style={{ marginTop: "1rem" }}>Quizá has llegado hasta aquí buscando respuestas a un desequilibrio ginecológico.</p>
            <p style={{ marginTop: "1rem" }}>Este proceso parte de aquí, pero te invita a ir más allá de los síntomas: a recuperar la relación con tu matriz.</p>
            <p style={{ marginTop: "1.8rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Porque, cuando esta relación se transforma, también recuperas la confianza en la sabiduría que la habita, en tu cuerpo y en la capacidad que tienes de cuidar tu salud.
            </p>
            <p style={{ marginTop: "1.8rem", textAlign: "center", fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", color: "#6b5347", lineHeight: 1.9 }}>
              Un camino de <strong style={{ color: "#6b5347", textTransform: "uppercase" }}>VERDAD</strong>.<br />
              Un camino de <strong style={{ color: "#6b5347", textTransform: "uppercase" }}>SALUD</strong>.<br />
              Un camino de <strong style={{ color: "#6b5347", textTransform: "uppercase" }}>SOBERANÍA</strong>.
            </p>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Quiero empezar mi proceso
              </a>
            </p>
          </div>
        </section>

        {/* QUÈ ÉS */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>¿Qué es?</h2>
            </div>
            <p style={{ marginTop: 0 }}>Este acompañamiento es un proceso personalizado para empezar a habitar tu matriz.</p>
            <p style={{ marginTop: "1rem" }}>Quizá llegas buscando aliviar un desequilibrio ginecológico. Pero este es un camino que te invita a ir más allá de los síntomas: a comprender qué te quiere explicar tu cuerpo y a reconstruir la relación con tu matriz.</p>
            <p style={{ marginTop: "1rem" }}>Los recursos que iremos incorporando no son la finalidad del proceso. Son las puertas de entrada para que esta relación se pueda transformar.</p>
            <p style={{ marginTop: "1rem" }}>Cada mujer, cada historia y cada matriz son únicas. Por eso, cada proceso también lo es.</p>
            <p style={{ marginTop: "1.8rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Quiero empezar mi proceso
              </a>
            </p>

            {/* Destacat + foto */}
            <div className="mes-grid" style={{ marginTop: "3rem" }}>
              <div className="destacat">
                <p style={{ fontWeight: 700, color: "var(--terra)", margin: 0, fontSize: "clamp(1.2rem, 2.3vw, 1.5rem)" }}>
                  Más allá de los síntomas
                </p>
                <p>Los síntomas son importantes, pero no son lo único importante.</p>
                <p>El dolor menstrual, un mioma, la sequedad vaginal, la ausencia de menstruación… no son solo un desequilibrio que hay que atender. También pueden ser una invitación a detenernos y escuchar lo que nos está mostrando el cuerpo.</p>
                <p>Por eso, en este acompañamiento no buscamos únicamente atenuar o eliminar un síntoma. Buscamos comprender qué puede estar contribuyendo a este desequilibrio y crear las condiciones para que tu cuerpo pueda recuperar, en la medida de lo posible, su propio equilibrio.</p>
                <p>Para mí, habitar la matriz es recuperar una relación que muchas mujeres hemos ido perdiendo:</p>
                <p style={{ marginTop: ".4rem" }}>Una relación con tu cuerpo.</p>
                <p style={{ marginTop: ".2rem" }}>Con tu pelvis.</p>
                <p style={{ marginTop: ".2rem" }}>Con tu sexualidad.</p>
                <p style={{ marginTop: ".2rem" }}>Con tu naturaleza.</p>
              </div>
              <div className="mes-photo" style={{ borderRadius: "1.7rem", overflow: "hidden", boxShadow: "0 16px 50px rgba(107,83,71,.18)", height: "100%", display: "flex", flexDirection: "column" }}>
                <img
                  src="/matrius/assets/gavinasuri.jpg"
                  alt="Gavina en la naturaleza"
                  loading="lazy"
                  style={{ width: "100%", flex: 1, minHeight: 0, display: "block", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>

            <p style={{ marginTop: "2rem" }}>Los recursos que te acompañaré a incorporar son diferentes caminos para cultivar esta relación.</p>
            <p style={{ marginTop: "1.4rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Porque cuando volvemos a escuchar el cuerpo y a confiar en su sabiduría, también transformamos la manera en que vivimos nuestra salud.
            </p>
            <p style={{ marginTop: ".8rem", textAlign: "center", fontWeight: 700, color: "#6b5347", textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
              Y, sobre todo, recuperamos algo esencial: la confianza en nosotras mismas.
            </p>
            <p style={{ marginTop: "1.4rem" }}>
              Este es, para mí, el verdadero sentido de habitar la matriz: habitarte a ti.
            </p>
          </div>
        </section>

        {/* PER A QUI ÉS */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Para quién es</h2>
            </div>
            <p style={{ marginTop: 0 }}>Este acompañamiento es para ti si...</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "1.2rem 0 0", display: "grid", gap: ".9rem" }}>
              {[
                "Tienes dolores menstruales, ciclos irregulares, sangrados abundantes, amenorrea, infertilidad… y no quieres tomar hormonas.",
                "Sientes que te has desconectado de tu cuerpo y quieres volver a escucharlo.",
                "Tienes un mioma, un pólipo o un quiste, y la única opción que te han ofrecido es pasar por quirófano, pero buscas una mirada más respetuosa con tu cuerpo.",
                "Estás en tus primeros años de climaterio y quieres recursos naturales para acompañarte en esta nueva etapa.",
                "Quieres dejar de vivir pendiente de los síntomas y empezar a comprender lo que te están diciendo.",
                "Quieres cuidar y autogestionar tu salud femenina desde las bases que han sostenido a las mujeres en muchas tradiciones a lo largo del tiempo.",
                "Tu hija está sufriendo dolores menstruales (dismenorrea) o síndrome premenstrual y quieres acompañarla de manera natural y desde la raíz",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0, color: "var(--terra)", fontWeight: 700 }}>✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ELS CAMINS */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Los caminos que recorreremos para habitar tu matriz</h2>
            </div>
            <div className="camins-grid">
              <div className="camins-photo">
                <div style={{ borderRadius: "1.7rem", overflow: "hidden", boxShadow: "0 16px 50px rgba(107,83,71,.18)" }}>
                  <img
                    src="/matrius/assets/mansmatriu.jpg"
                    alt="Manos sobre la matriz"
                    loading="lazy"
                    style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "3/4" }}
                  />
                </div>
              </div>
              {/* Text + list on the right */}
              <div>
                <p style={{ marginTop: 0 }}>Durante el proceso iremos incorporando aquellos caminos que más resuenen contigo y con el momento vital que estás viviendo:</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1.4rem 0 0", display: "grid", gap: "1.2rem" }}>
                  {[
                    { emoji: "🌿", text: "Nutrir tu cuerpo. Alimentación regenerativa y rutinas que dan vitalidad a tus células." },
                    { emoji: "🌿", text: "Reconectar con los ritmos de la naturaleza. Plantas, desparasitación y recursos de fitoginecología para acompañar los procesos de tu cuerpo." },
                    { emoji: "🌿", text: "Despertar tu pelvis y tu voz. Movimiento pélvico-uterino, respiración y voz para volver al cuerpo, sentirlo y expresarte desde un lugar más profundo." },
                    { emoji: "🌿", text: "Reconocer tu naturaleza cíclica. Conciencia corporal, sexualidad y ciclicidad para conectar con tu placer." },
                  ].map(({ emoji, text }) => (
                    <li key={text} style={{ display: "flex", alignItems: "flex-start", gap: ".7rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>
                      <span style={{ flexShrink: 0 }}>{emoji}</span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{ marginTop: "1.4rem", textAlign: "center", fontWeight: 700, color: "#6b5347", textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
              Cada uno de estos caminos es una puerta de entrada.
            </p>
            <p style={{ marginTop: ".5rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              A través de ellos, irás recuperando...
            </p>
            <p style={{ marginTop: ".5rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              ...una relación más consciente con tu matriz y contigo misma.
            </p>
          </div>
        </section>

        {/* COM SERÀ EL TEU PROCÉS */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Cómo será tu proceso</h2>
            </div>
            <p style={{ marginTop: 0 }}>Este es un proceso personalizado, creado a partir de tu historia, de tu momento vital y de lo que tu cuerpo está expresando hoy.</p>
            <p style={{ marginTop: "1rem" }}>Empezaremos con una primera sesión online de revisión y valoración (1h15), donde escucharemos qué está pasando, qué necesitas y qué aspectos pueden estar pidiendo más atención.</p>
            <p style={{ marginTop: "1rem" }}>A partir de aquí, iremos construyendo juntas un camino adaptado a ti.</p>
            <p style={{ marginTop: "1rem" }}>Durante el acompañamiento iremos incorporando pequeñas pautas y recursos que puedas integrar en tu día a día, respetando tus ritmos y tu realidad.</p>
            <p style={{ marginTop: "1rem" }}>No se trata de hacer muchos cambios de golpe ni de seguir una fórmula concreta.</p>
            <p style={{ marginTop: "1rem" }}>Se trata de ir encontrando, poco a poco, lo que tiene más sentido para ti y para el momento que estás viviendo.</p>
            <p style={{ marginTop: "1rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Porque habitar la matriz es un proceso:<br />
              una nueva manera de relacionarte contigo misma.
            </p>
          </div>
        </section>

        {/* IMAGINA'T */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Imagínate dentro de unos meses...</h2>
            </div>
            <p style={{ marginTop: 0, textAlign: "center", fontWeight: 700, color: "#6b5347" }}>Quizá el verdadero cambio no es solo resolver un síntoma.</p>
            <p style={{ marginTop: ".5rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>Quizá es recuperar una relación con tu matriz.</p>
            <p style={{ marginTop: "1.4rem", fontWeight: 700, color: "#6b5347" }}>Después de este proceso...</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0 0", display: "grid", gap: "1rem" }}>
              {[
                "Comprenderás mejor el lenguaje de tu cuerpo y aprenderás a escuchar lo que te quiere comunicar.",
                "Tendrás recursos sencillos para cuidar tu salud femenina de una manera más consciente y adaptada a tu momento vital.",
                "Conocerás mejor tus ritmos y tus necesidades, y podrás tomar decisiones con más confianza.",
                "Sentirás que tu cuerpo deja de ser un lugar al que solo escuchas cuando aparece un síntoma, y se convierte en un espacio de conexión, presencia y escucha en tu día a día.",
                "Irás recuperando, paso a paso, la confianza en la sabiduría que ya habita en tu matriz y en tu capacidad de cuidarte.",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".7rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0 }}>🌿</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "2rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Este es el camino de habitar la matriz:
            </p>
            <p style={{ marginTop: ".5rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              volver a ti, recuperar la relación con tu matriz y con tu cuerpo
            </p>
            <p style={{ marginTop: ".5rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              y caminar tu salud desde un lugar más consciente y más tuyo.
            </p>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Quiero empezar mi proceso
              </a>
            </p>
          </div>
        </section>

        {/* LES DONES DIUEN */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Las mujeres dicen...</h2>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* QUI T'ACOMPANYA */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Quién te acompaña</h2>
            </div>
            <div className="qui-grid">
              <div>
                <p style={{ marginTop: 0 }}>Mi gran despertar empezó hace trece años, cuando fui madre por primera vez.</p>
                <p style={{ marginTop: "1rem" }}>La maternidad me llevó a mirarme profundamente y a revisar la relación conmigo misma, con mi feminidad, mi sexualidad y mi matriz. Fue el inicio de un camino de búsqueda, transformación y regreso a mi cuerpo que todavía hoy sigo recorriendo.</p>
                <p style={{ marginTop: "1rem" }}>Durante estos años he ido explorando y profundizando en diferentes miradas que han dado forma a mi manera de acompañar: Terapia Gestalt, Ginecología Natural y Ancestral, Ciclicidad y Sexualidad Alquímica Femenina, Alimentación Regenerativa, Fitoginecología, Movimiento Pélvico y otros recursos naturales.</p>
                <p style={{ marginTop: "1rem" }}>Pero lo más importante que he aprendido no ha venido solo de las formaciones, sino de mi propio camino.</p>
              </div>
              <div className="soft-img" style={{ borderRadius: "1.7rem", overflow: "hidden", boxShadow: "0 16px 50px rgba(107,83,71,.18)" }}>
                <img
                  src="/matrius/assets/gavinariu3prop.jpg"
                  alt="Gavina"
                  loading="lazy"
                  style={{ objectPosition: "center top" }}
                />
              </div>
            </div>

            <p style={{ marginTop: "2rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              He aprendido que el cuerpo siempre nos está hablando y que, cuando aprendemos a escucharlo, recuperamos una relación más profunda con nosotras mismas.
            </p>
            <p style={{ marginTop: "1.4rem" }}>
              Esta es <strong style={{ color: "#6b5347" }}>la mirada desde la que hoy te acompaño</strong>: no para darte recetas, sino para ofrecerte herramientas y caminos para que puedas comprender tu cuerpo,{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                tomar un papel activo en el cuidado de tu salud y reconectar con la sabiduría que habita en tu matriz.
              </span>
            </p>
            <p style={{ marginTop: "1.4rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Para mí, habitar la matriz es volver a ti.
            </p>
          </div>
        </section>

        {/* INVERSIÓ */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Inversión</h2>
            </div>
            <p style={{ marginTop: 0, textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Cada mujer, cada historia y cada matriz son únicas. Por eso, cada proceso también lo es.
            </p>
            <p style={{ marginTop: "1.6rem" }}>
              Después de la primera sesión de valoración, te haré una propuesta de acompañamiento personalizada, pensada para el momento vital que estás viviendo y para el camino que tenga más sentido para ti.
            </p>
            <p style={{ marginTop: "1rem" }}>
              En ese momento también te explicaré la duración orientativa del proceso, la inversión y resolveré todas las dudas que puedas tener para que puedas decidir con calma si este es tu momento.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Sin ningún compromiso.
            </p>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Quiero empezar mi proceso
              </a>
            </p>
          </div>
        </section>

        {/* PREGUNTES FREQÜENTS */}
        <section className="cream">
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
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section>
          <div className="wrap">
            <div className="cta-block">
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)", lineHeight: 1.3, margin: 0, color: "#4a2e22" }}>
                Si este camino ha resonado contigo<br />
                y sientes que ha llegado el momento de<br />
                <span className="em-sub">empezar a habitar tu matriz</span>,<br />
                será un placer acompañarte.
              </h2>
              <p style={{ marginTop: "1.8rem" }}>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Quiero empezar mi proceso
                </a>
              </p>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
