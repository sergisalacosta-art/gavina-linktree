import { createFileRoute } from "@tanstack/react-router";
import logoImage from "@/assets/gavina-logo.png";

const WA_URL = "https://wa.me/34616351534";

export const Route = createFileRoute("/cures")({
  component: CuresPage,
});

const retreatPromises = [
  "Un dia per (re)connectar amb la teva matriu…",
  "Un dia per nodrir-te amb cures femenines…",
  "Un dia per recordar-nos al costat d'altres dones…",
];

const includedItems = [
  "La meva facilitació i el meu acompanyament",
  "El lloguer de la sala",
  "L'organització i la gestió del retir",
  "El material",
];

const testimonyItems = [
  {
    author: "Alba C.",
    text: "El Cercle de Dones que facilita la Gavina m'aporta alineació entre el que sento, desitjo i faig, cap-cor-cos. En les sessions em connecto amb el sentiment de pertinença, sento gaudi, sento que la ment es mou en consonància amb la resta, sense que pesi tant. I aquesta alineació és just l'oposat al que moltes vegades em porta el dia a dia, que és alienació. Canvia una lletra de lloc, però ho canvia tot. Après de cada cercle m'emporto més unió amb les companyes, allà trobo mirades i actituds còmplices, que acaronen per dins. I visualitzo la Gavina com una sàvia xamana, a la qual acudir i confiar. Trobar dones tan potents com ella, amb aquesta mirada reivindicativa i amorosa, m'encanta i em connecta amb allò que per mi és important.",
  },
  {
    author: "Eva J.",
    text: "El Cercle de Dones Mares m'està ajudant a conèixer-me millor i desprendre'm de tot allò que em condiciona i no em deixa actuar lliurament per poder començar a ser la mare que realment soc i actuar des de l'amor que sento pels meus fills amb seguretat.",
  },
  {
    author: "Montse G.",
    text: "Per mi l'acompanyament de la Gavina ha sigut sincer, honest, entregat, intuïtiu i professional. M'emociona molt pensar-hi... L'he sentida molt propera, entregada i sincera amb mi i amb totes les mares del grup. Això ha sigut el més valuós que m'emporto d'aquesta experiència.",
  },
  {
    author: "Ester V.",
    text: "Durant els 9 mesos de Cercle Dones Mares sento que he après com maternar de manera més conscient, i també m'enduc coneixements teòrics sobre diferents temes sobre criança. M'he sentit immensament acompanyada, escoltada, compresa, sostinguda en tot moment tant per part de la Gavina com la resta de mares.",
  },
  {
    author: "Josefina C.",
    text: "L'acompanyament de la Gavina per mi ha estat impecable; sempre acurat i amb gran contingut de valor. És una gran terapeuta, una gran professional i una gran acompanyant de mares. Amb ella m'he sentit molt sostinguda, acompanyada i escoltada; treballa amb molta delicadesa, respecte i amor des del no judici en totes les seves intervencions.",
  },
];

const styles = `
  .retreat-page {
    --retreat-cream: oklch(0.98 0.016 102);
    --retreat-cream-deep: oklch(0.95 0.022 95);
    --retreat-sage: oklch(0.7 0.049 135);
    --retreat-sage-deep: oklch(0.43 0.052 144);
    --retreat-moss: oklch(0.55 0.046 138);
    --retreat-earth: oklch(0.52 0.064 54);
    --retreat-earth-deep: oklch(0.37 0.047 48);
    --retreat-honey: oklch(0.83 0.089 84);
    --retreat-ink: oklch(0.28 0.028 65);
    --retreat-muted: oklch(0.47 0.022 87);
    min-height: 100vh;
    background: var(--retreat-cream);
    color: var(--retreat-ink);
    font-family: Georgia, "Times New Roman", serif;
    position: relative;
    overflow-x: clip;
  }
  .retreat-page::before {
    content: "";
    position: fixed;
    inset: 0;
    background:
      radial-gradient(circle at top left, oklch(0.94 0.04 123 / 0.75), transparent 30%),
      radial-gradient(circle at 85% 18%, oklch(0.92 0.03 63 / 0.55), transparent 26%),
      var(--retreat-cream);
    z-index: -3;
  }
  .retreat-page * { box-sizing: border-box; }
  .retreat-page img { display: block; width: 100%; max-width: 100%; }
  .retreat-page a { color: inherit; text-decoration: none; }
  .retreat-page p, .retreat-page li, .retreat-page a, .retreat-page span {
    font-family: "ui-sans-serif", "system-ui", sans-serif;
  }
  .retreat-shell { width: min(1160px, calc(100% - 40px)); margin: 0 auto; }
  .retreat-section { padding: clamp(2.5rem, 5vw, 4rem) 0; position: relative; }
  .retreat-section--cream {
    background: linear-gradient(180deg, oklch(0.965 0.02 100 / 0.9), oklch(0.985 0.012 102 / 0.95));
  }
  .retreat-hero {
    min-height: 92vh;
    color: white;
    position: relative;
    display: grid;
    align-items: end;
    isolation: isolate;
    background:
      linear-gradient(90deg, oklch(0.18 0.02 120 / 0.55), oklch(0.18 0.02 120 / 0.18) 42%, oklch(0.28 0.02 55 / 0.22)),
      url("/cures-de-matriu/hero.jpg") center center / cover no-repeat;
  }
  .retreat-hero::after {
    content: "";
    position: absolute;
    inset: auto 0 0 0;
    height: 42%;
    background: linear-gradient(180deg, transparent, oklch(0.18 0.02 55 / 0.52));
    z-index: -1;
  }
  .retreat-hero-inner {
    position: relative;
    z-index: 1;
    width: min(1160px, calc(100% - 40px));
    margin: 0 auto;
    padding: clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 7vw, 5.5rem);
  }
  .retreat-hero-inner::before {
    content: "";
    position: absolute;
    inset: -1.5rem;
    background: radial-gradient(ellipse at 25% 85%, oklch(0.14 0.02 120 / 0.58), oklch(0.2 0.02 120 / 0.28) 55%, transparent 78%);
    filter: blur(20px);
    border-radius: 2rem;
    z-index: -1;
    pointer-events: none;
  }
  .retreat-kicker {
    display: inline-flex;
    margin-bottom: 1rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,.84);
    font-size: 0.8rem;
    font-weight: 600;
  }
  .retreat-kicker--under { margin: 0.6rem 0 0; color: rgba(255,255,255,.88); font-size: 0.9rem; text-shadow: 0 1px 6px rgba(0,0,0,.45); }
  .retreat-title, .retreat-heading, .retreat-subheading { margin: 0; font-family: Georgia, "Times New Roman", serif; line-height: 1.02; color: var(--retreat-earth-deep); }
  .retreat-title { max-width: 9ch; font-size: clamp(3.4rem, 8vw, 7rem); color: white; text-transform: uppercase; letter-spacing: 0.04em; text-shadow: 0 2px 10px rgba(0,0,0,.45), 0 8px 28px rgba(0,0,0,.35), 0 18px 50px rgba(0,0,0,.22); }
  .retreat-hero-meta { display: flex; flex-wrap: wrap; gap: 0.7rem; margin: 1.25rem 0 0; }
  .retreat-meta-pill { padding: 0.75rem 1rem; border-radius: 999px; background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.24); backdrop-filter: blur(8px); color: white; font-size: 0.95rem; font-weight: 600; }
  .retreat-subtitle { margin: 1.35rem 0 0; max-width: 46rem; color: rgba(255,255,255,.95); font-size: clamp(1.06rem, 2vw, 1.28rem); line-height: 1.6; text-shadow: 0 1px 8px rgba(0,0,0,.4); }
  .retreat-actions { display: flex; flex-wrap: wrap; gap: 0.9rem; margin-top: 2rem; }
  .retreat-button { display: inline-flex; align-items: center; justify-content: center; min-height: 3.25rem; padding: 0.92rem 1.35rem; border-radius: 999px; border: 1px solid transparent; font-size: 0.96rem; font-weight: 700; letter-spacing: 0.01em; transition: transform .18s ease, background-color .18s ease, border-color .18s ease; }
  .retreat-button:hover { transform: translateY(-2px); }
  .retreat-button--primary { background: var(--retreat-honey); color: oklch(0.24 0.022 61); box-shadow: 0 14px 30px oklch(0.4 0.05 65 / 0.18); }
  .retreat-button--secondary { background: rgba(255,255,255,.08); border-color: rgba(255,255,255,.34); color: white; backdrop-filter: blur(8px); }
  .retreat-grid, .retreat-grid--reverse { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr); gap: clamp(2rem, 5vw, 5rem); align-items: center; }
  .retreat-grid--reverse { grid-template-columns: minmax(320px, 0.95fr) minmax(0, 1.05fr); }
  .retreat-card { border-radius: 2rem; border: 1px solid oklch(0.77 0.03 80 / 0.28); background: oklch(0.99 0.01 95 / 0.8); box-shadow: 0 20px 60px oklch(0.37 0.03 68 / 0.08); backdrop-filter: blur(10px); }
  .retreat-card--padded { padding: clamp(1.5rem, 3vw, 2.7rem); }
  .retreat-eyebrow { display: inline-flex; margin-bottom: 0.9rem; font-family: Georgia, "Times New Roman", serif; text-transform: uppercase; letter-spacing: 0.14em; text-decoration: underline; text-underline-offset: 5px; text-decoration-thickness: 1px; color: var(--retreat-earth); font-size: 0.96rem; font-weight: 700; }
  .retreat-heading { font-size: clamp(2rem, 4.6vw, 4rem); text-wrap: balance; }
  .retreat-copy { margin: 1rem 0 0; color: var(--retreat-muted); font-size: 1.05rem; line-height: 1.75; }
  .retreat-promises { margin: 1.8rem 0 0; padding: 0; list-style: none; display: grid; gap: 1rem; }
  .retreat-promises li { padding: 1.05rem 1.2rem; border-radius: 1.3rem; background: linear-gradient(180deg, oklch(0.96 0.025 108), oklch(0.985 0.014 99)); border: 1px solid oklch(0.83 0.03 118 / 0.42); color: var(--retreat-earth-deep); font-size: 1.03rem; font-weight: 600; }
  .retreat-bullets { list-style: none; padding: 0; margin: 1.5rem 0 0; display: grid; gap: 1rem; }
  .retreat-bullets li { position: relative; padding-left: 1.35rem; color: var(--retreat-muted); line-height: 1.72; }
  .retreat-bullets li::before { content: ""; position: absolute; left: 0; top: 0.72rem; width: 0.46rem; height: 0.46rem; border-radius: 999px; background: var(--retreat-earth-deep); }
  .retreat-image { overflow: hidden; border-radius: 1.75rem; box-shadow: 0 26px 70px oklch(0.36 0.03 72 / 0.16); background: oklch(0.95 0.02 90); }
  .retreat-image img { width: 100%; height: 100%; object-fit: cover; }
  .retreat-image--vertical img { aspect-ratio: 3 / 4; object-position: center center; }
  .retreat-image--wide img { aspect-ratio: 4 / 3; }
  .retreat-grid--match { align-items: stretch; }
  .retreat-image--match { position: relative; height: 100%; min-height: 100%; overflow: hidden; }
  .retreat-image--match img { position: absolute; inset: 0; aspect-ratio: auto; height: 100%; width: 100%; object-fit: cover; }
  .retreat-mini-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; margin-top: 2rem; }
  .retreat-mini-card { padding: 1.2rem; border-radius: 1.2rem; background: rgba(255,255,255,.72); border: 1px solid oklch(0.8 0.028 80 / 0.32); }
  .retreat-mini-card strong { display: block; color: var(--retreat-earth-deep); font-size: 1rem; margin-bottom: 0.45rem; }
  .retreat-mini-card p { margin: 0; color: var(--retreat-muted); line-height: 1.65; }
  .retreat-investment { display: grid; grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr); gap: 1.2rem; margin-top: 2rem; }
  .retreat-investment-card { height: 100%; padding: 1.6rem; border-radius: 1.5rem; background: oklch(0.9 0.03 65 / 0.75); border: 1px solid oklch(0.78 0.045 60 / 0.35); display: flex; flex-direction: column; gap: 0.9rem; }
  .retreat-price { font-family: Georgia, "Times New Roman", serif; font-size: clamp(2.25rem, 4vw, 3.4rem); line-height: 1; color: var(--retreat-earth-deep); }
  .retreat-price-note { margin: 0; color: var(--retreat-sage-deep); font-size: 1rem; font-weight: 400; line-height: 1.55; }
  .retreat-soft-note { margin: 1rem 0 0; font-size: 0.98rem; color: var(--retreat-muted); font-style: italic; }
  .retreat-details { margin-top: 2rem; display: grid; gap: 1rem; }
  .retreat-details-card { padding: clamp(1.5rem, 3vw, 2rem); }
  .retreat-details-card h3 { margin: 0 0 0.85rem; font-size: clamp(1.5rem, 2.8vw, 2.2rem); color: var(--retreat-earth-deep); }
  .retreat-details-card p { margin: 0.45rem 0 0; color: var(--retreat-muted); line-height: 1.7; }
  .retreat-bio { display: grid; grid-template-columns: 320px 1fr; gap: clamp(2rem, 5vw, 4rem); align-items: stretch; }
  .retreat-testimonials-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.2rem; margin-top: 2rem; }
  .retreat-testimonial { padding: 1.5rem; min-height: 100%; display: flex; flex-direction: column; gap: 1rem; }
  .retreat-testimonial p { margin: 0; color: var(--retreat-ink); line-height: 1.78; }
  .retreat-testimonial strong { margin-top: auto; color: var(--retreat-earth); font-size: 1rem; }
  .retreat-cta { padding: clamp(2rem, 4vw, 3.2rem); border-radius: 2rem; background: linear-gradient(135deg, var(--retreat-earth-deep), oklch(0.45 0.045 125)); box-shadow: 0 24px 70px oklch(0.28 0.03 80 / 0.18); color: white; display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 1.2rem; }
  .retreat-cta .retreat-eyebrow, .retreat-cta .retreat-heading { color: white; }
  .retreat-cta .retreat-eyebrow { text-decoration-color: rgba(255,255,255,.45); }
  .retreat-cta .retreat-copy { color: rgba(255,255,255,.84); max-width: 38rem; }
  .retreat-footer { background: oklch(0.26 0.022 60); color: rgba(255,255,255,.78); padding: 2.5rem 0; text-align: center; font-size: 0.95rem; }
  .retreat-back { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; font-style: italic; color: var(--retreat-earth); padding: 1.5rem 1.5rem 0; background: none; border: none; cursor: pointer; transition: color 0.2s; font-family: ui-sans-serif, system-ui, sans-serif; position: relative; z-index: 1; }
  .retreat-back:hover { color: var(--retreat-earth-deep); }
  @media (max-width: 980px) {
    .retreat-grid, .retreat-grid--reverse, .retreat-investment, .retreat-bio, .retreat-cta, .retreat-testimonials-grid { grid-template-columns: 1fr; }
    .retreat-mini-grid { grid-template-columns: 1fr; }
    .retreat-hero { min-height: 78vh; }
  }
  @media (max-width: 640px) {
    .retreat-shell, .retreat-hero-inner { width: min(100% - 28px, 1160px); }
    .retreat-section { padding: 4rem 0; }
    .retreat-title { font-size: 2.9rem; }
    .retreat-actions, .retreat-hero-meta { flex-direction: column; align-items: stretch; }
    .retreat-button, .retreat-meta-pill { width: 100%; }
    .retreat-card--padded, .retreat-testimonial, .retreat-investment-card, .retreat-details-card { padding: 1.35rem; }
  }
`;

function CuresPage() {
  return (
    <div className="retreat-page">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9999,
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

      <button onClick={() => window.history.back()} className="retreat-back">← Tornar</button>

      <header className="retreat-hero">
        <div className="retreat-hero-inner">
          <h1 className="retreat-title">Cures de Matriu</h1>
          <span className="retreat-kicker retreat-kicker--under">Retir d'un dia entre dones</span>
          <p className="retreat-subtitle">
            Una trobada per (re)connectar amb la teva matriu, rebre cures femenines i recordar-te al costat d'altres dones.
          </p>
          <div className="retreat-actions">
            <a className="retreat-button retreat-button--primary" href={WA_URL} target="_blank" rel="noopener noreferrer">
              Reserva la teva plaça
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="retreat-section retreat-section--cream">
          <div className="retreat-shell retreat-grid--reverse retreat-grid--match">
            <div className="retreat-image retreat-image--match">
              <img src="/cures-de-matriu/matriu-riu.jpg" alt="Dona en un entorn natural connectant amb la zona de la matriu" loading="lazy" />
            </div>
            <div className="retreat-card retreat-card--padded">
              <span className="retreat-eyebrow">Aquest retir és per tu si…</span>
              <ul className="retreat-bullets">
                <li>Tens ganes de viure un <strong>dia íntim de nutrició plena</strong> dedicada a la teva matriu.</li>
                <li>Dedicarem <strong>atenció plena a la nostra matriu</strong>, hi contactarem mitjançant l'experiència amb diverses <strong>medicines ancestrals</strong> que ens ajudaran a <strong>depurar-la, despertar-la i activar el seu batec</strong>.</li>
                <li>I ho farem <strong>juntes, entre dones</strong>.</li>
                <li>Connectarem amb la <strong>medicina de les plantes</strong> en combinació amb els <strong>diferents elements</strong> que alquimitzarem per rebre'n els beneficis.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="retreat-section" id="dia-horari-lloc">
          <div className="retreat-shell retreat-grid retreat-grid--match">
            <div className="retreat-card retreat-card--padded retreat-details-card">
              <span className="retreat-eyebrow">Dia, horari i lloc</span>
              <h3>Dissabte 17 octubre</h3>
              <p><strong>De 10h a 19h</strong></p>
              <p>A un espai preciós de Les Franqueses del Vallès.</p>
              <p>Un entorn natural i tranquil per poder sostenir el ritme del retir amb intimitat, presència i bellesa.</p>
            </div>
            <div className="retreat-image retreat-image--match">
              <img src="/cures-de-matriu/cercle-bosc.jpg" alt="Grup de dones reunides en cercle enmig del bosc" loading="lazy" />
            </div>
          </div>
        </section>

        <section className="retreat-section retreat-section--cream" id="inversio">
          <div className="retreat-shell">
            <div className="retreat-card retreat-card--padded">
              <div className="retreat-investment">
                <article className="retreat-investment-card">
                  <span className="retreat-eyebrow">Inversió</span>
                  <div className="retreat-price">120€</div>
                  <p className="retreat-price-note">
                    Les dones que estiguin dins de &ldquo;Matrius en Cercle&rdquo; tindran un 15% de descompte en el Retir
                  </p>
                </article>
                <article className="retreat-investment-card">
                  <span className="retreat-eyebrow">Inclou</span>
                  <ul className="retreat-bullets" style={{ marginTop: 0 }}>
                    {includedItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="retreat-soft-note">*El dinar no està inclòs. Cal que portis el teu dinar.</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="retreat-section retreat-section--cream" id="qui-acompanya">
          <div className="retreat-shell retreat-bio">
            <div className="retreat-image retreat-image--match">
              <img src="/matrius/assets/gavina-nova.jpg" alt="Retrat de la Gavina somrient en un entorn natural" loading="lazy" />
            </div>
            <div className="retreat-card retreat-card--padded">
              <span className="retreat-eyebrow">Qui acompanya</span>
              <p className="retreat-copy">
                Soc la Gavina, acompanyant de dones que tenen <strong>ganes de cuidar la seva salut femenina
                ginecològica</strong> aplicant rutines bàsiques d'<strong>autocura i pautes de prevenció reals i
                naturals</strong>, lluny de fàrmacs i intervencions quirúrgiques.
              </p>
              <p className="retreat-copy">
                Uns recursos que són les bases de la salut femenina i que han sostingut, i sostenen,
                les dones en diferents <strong>tradicions mil·lenàries d'arreu del món</strong>.
              </p>
              <div className="retreat-actions" style={{ marginTop: "1.5rem" }}>
                <a className="retreat-button retreat-button--primary" href={WA_URL} target="_blank" rel="noopener noreferrer">
                  Consulta places per WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="retreat-section" id="testimonis">
          <div className="retreat-shell">
            <span className="retreat-eyebrow">Algunes dones diuen&hellip;</span>
            <div className="retreat-testimonials-grid">
              {testimonyItems.map((item) => (
                <article key={item.author} className="retreat-card retreat-testimonial">
                  <p>{item.text}</p>
                  <strong>{item.author}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="retreat-section retreat-section--cream" id="reserva">
          <div className="retreat-shell">
            <div className="retreat-cta">
              <div>
                <span className="retreat-eyebrow">Reserva la teva plaça</span>
                <h2 className="retreat-heading">Per inscriure't al retir, contacta'm per WhatsApp.</h2>
                <p className="retreat-copy">
                  Si sents que aquest dia és per a tu, escriu-me i t'explico disponibilitat, detalls i
                  següents passos.
                </p>
              </div>
              <a className="retreat-button retreat-button--primary" href={WA_URL} target="_blank" rel="noopener noreferrer">
                Contactar per WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="retreat-footer">
        <div className="retreat-shell">Cures de Matriu · Retir d'1 dia</div>
      </footer>
    </div>
  );
}
