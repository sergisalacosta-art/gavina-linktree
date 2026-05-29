import { createFileRoute, Link } from "@tanstack/react-router";

const WA_URL = "https://wa.me/34616351536";
const VIDEO_ID = "r_Qh0WJ6OCM";

export const Route = createFileRoute("/individual")({
  component: IndividualPage,
});

const css = `
  .ai {
    --terra: #8a4b34;
    --terra-fosc: #5d3428;
    --crema: #faf5ef;
    --crema-2: #f4ebe0;
    --text: #2a1f17;
    --muted: #6b5347;
    --blanc: #fffdf8;
    --rosa: #d8a797;
    --max: 1100px;
  }
  .ai * { box-sizing: border-box; margin: 0; padding: 0; }
  .ai {
    font-family: Inter, system-ui, -apple-system, sans-serif;
    color: var(--text);
    background: var(--crema);
    line-height: 1.65;
    font-size: 16px;
    overflow-x: hidden;
    min-height: 100vh;
  }
  .ai a { color: inherit; text-decoration: none; }
  .ai img { max-width: 100%; display: block; }

  .ai .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.85rem;
    font-style: italic;
    color: var(--terra);
    padding: 1.5rem 1.5rem 0;
    transition: color .2s;
  }
  .ai .back-link:hover { color: var(--terra-fosc); }

  /* Intro */
  .ai .intro {
    background: var(--blanc);
    text-align: center;
    padding: 2.5rem 1.5rem 3rem;
  }
  .ai .intro-title {
    font-family: "Fraunces", Georgia, serif;
    font-size: clamp(1.4rem, 3vw, 2rem);
    color: var(--terra-fosc);
    max-width: 620px;
    margin: 0 auto 0.6rem;
    line-height: 1.25;
  }
  .ai .intro-title em { font-style: normal; color: var(--terra); }
  .ai .intro-link {
    font-size: 0.9rem;
    color: var(--terra);
    text-decoration: underline;
    text-underline-offset: 3px;
    margin-bottom: 2rem;
    display: inline-block;
  }
  .ai .intro-link:hover { color: var(--terra-fosc); }
  .ai .video-wrap {
    max-width: 680px;
    margin: 0 auto 2.5rem;
    border-radius: 1.2rem;
    overflow: hidden;
    box-shadow: 0 8px 32px -12px rgba(90,40,20,.18);
    background: #1a0e0a;
  }
  .ai .video-wrap iframe { display: block; width: 100%; aspect-ratio: 16/9; border: none; }
  .ai .hero-tag {
    font-family: "Fraunces", Georgia, serif;
    font-size: clamp(1.6rem, 4vw, 2.6rem);
    color: var(--terra-fosc);
    line-height: 1.1;
    letter-spacing: .04em;
    margin-bottom: 0.3rem;
  }
  .ai .hero-tag span {
    display: block;
    font-size: clamp(2rem, 5vw, 3.4rem);
    color: var(--terra);
    text-transform: uppercase;
    letter-spacing: .08em;
  }
  .ai .hero-sub {
    max-width: 560px;
    margin: 1.2rem auto 0;
    font-size: 1.05rem;
    color: var(--muted);
  }
  .ai .hero-sub strong { color: var(--terra-fosc); font-weight: 700; }
  .ai .hero-hint { margin-top: 1.4rem; font-size: 0.9rem; color: var(--muted); font-style: italic; }

  /* Per a qui */
  .ai .per-qui { background: var(--crema-2); padding: 4rem 1.5rem; }
  .ai .per-qui-inner {
    max-width: var(--max);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: start;
  }
  @media (max-width: 720px) { .ai .per-qui-inner { grid-template-columns: 1fr; } }
  .ai .section-label {
    font-size: 0.7rem;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--terra);
    font-weight: 600;
    border-bottom: 1px solid rgba(138,75,52,.3);
    padding-bottom: .3rem;
    display: inline-block;
    margin-bottom: 1.2rem;
  }
  .ai .per-qui-title {
    font-family: "Fraunces", Georgia, serif;
    font-size: clamp(1.2rem, 2.5vw, 1.7rem);
    color: var(--terra-fosc);
    line-height: 1.25;
    margin-bottom: 1.5rem;
  }
  .ai .per-qui-list { list-style: none; display: flex; flex-direction: column; gap: .9rem; }
  .ai .per-qui-list li {
    padding-left: 1.2rem;
    position: relative;
    font-size: .95rem;
    color: var(--muted);
    line-height: 1.55;
  }
  .ai .per-qui-list li::before {
    content: "·";
    position: absolute;
    left: 0;
    color: var(--terra);
    font-size: 1.4rem;
    line-height: 1;
  }
  .ai .per-qui-list li strong { color: var(--text); font-weight: 600; }
  .ai .wa-card {
    background: var(--terra);
    border-radius: 1.2rem;
    padding: 2rem 1.8rem;
    color: #fff;
    text-align: center;
  }
  .ai .wa-card p { font-size: .95rem; line-height: 1.55; margin-bottom: 1.4rem; opacity: .93; }
  .ai .wa-card strong { font-weight: 700; }
  .ai .wa-btn {
    display: inline-flex;
    align-items: center;
    gap: .6rem;
    background: #fff;
    color: var(--terra);
    font-weight: 700;
    font-size: .95rem;
    border-radius: 999px;
    padding: .7rem 1.5rem;
    transition: transform .2s, box-shadow .2s;
    box-shadow: 0 4px 14px rgba(0,0,0,.12);
  }
  .ai .wa-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 18px rgba(0,0,0,.15); }

  /* Fases */
  .ai .fases { background: var(--blanc); padding: 4rem 1.5rem; }
  .ai .fases-inner {
    max-width: var(--max);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 3.5rem;
    align-items: start;
  }
  @media (max-width: 720px) {
    .ai .fases-inner { grid-template-columns: 1fr; }
    .ai .fases-img { order: -1; }
  }
  .ai .fases-intro {
    font-family: "Fraunces", Georgia, serif;
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: var(--muted);
    margin-bottom: 1.8rem;
    line-height: 1.45;
  }
  .ai .fases-intro strong { color: var(--terra-fosc); }
  .ai .fase-item {
    margin-bottom: 1.4rem;
    padding-left: 1rem;
    border-left: 3px solid var(--rosa);
  }
  .ai .fase-item h4 {
    font-size: .88rem;
    font-weight: 700;
    color: var(--terra);
    margin-bottom: .5rem;
  }
  .ai .fase-item ul { list-style: none; padding: 0; display: flex; flex-direction: column; gap: .2rem; }
  .ai .fase-item ul li {
    font-size: .84rem;
    color: var(--muted);
    padding-left: .9rem;
    position: relative;
  }
  .ai .fase-item ul li::before { content: "–"; position: absolute; left: 0; color: var(--rosa); }
  .ai .fase-note {
    font-size: .88rem;
    color: var(--muted);
    margin-top: .6rem;
    padding-left: 1rem;
    border-left: 3px solid var(--rosa);
    line-height: 1.45;
  }
  .ai .fases-img img {
    width: 100%;
    border-radius: 1.4rem;
    object-fit: cover;
    aspect-ratio: 3/4;
    box-shadow: 0 10px 40px -15px rgba(90,40,20,.2);
  }

  /* Inclou */
  .ai .inclou { background: var(--crema-2); padding: 4rem 1.5rem; }
  .ai .inclou-inner { max-width: var(--max); margin: 0 auto; }
  .ai .inclou-title {
    font-family: "Fraunces", Georgia, serif;
    font-size: clamp(1.3rem, 3vw, 1.9rem);
    color: var(--terra-fosc);
    text-align: center;
    margin-bottom: .3rem;
  }
  .ai .inclou-sub {
    text-align: center;
    color: var(--terra);
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: .06em;
    text-transform: uppercase;
    margin-bottom: 2.5rem;
  }
  .ai .inclou-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  @media (max-width: 660px) { .ai .inclou-grid { grid-template-columns: 1fr; } }
  .ai .inclou-box {
    background: var(--blanc);
    border-radius: 1.2rem;
    padding: 2rem 1.8rem;
    box-shadow: 0 4px 20px -8px rgba(90,40,20,.1);
  }
  .ai .inclou-box h4 {
    font-size: .7rem;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: var(--terra);
    font-weight: 600;
    border-bottom: 1px solid rgba(138,75,52,.25);
    padding-bottom: .4rem;
    margin-bottom: 1.2rem;
  }
  .ai .inclou-box ul { list-style: none; display: flex; flex-direction: column; gap: .8rem; }
  .ai .inclou-box ul li {
    font-size: .88rem;
    color: var(--muted);
    padding-left: 1.2rem;
    position: relative;
    line-height: 1.5;
  }
  .ai .inclou-box ul.si li::before { content: "✓"; position: absolute; left: 0; color: var(--terra); }
  .ai .inclou-box ul.no li::before { content: "✗"; position: absolute; left: 0; color: #b04b3a; }
  .ai .nota { font-size: .8rem; font-style: italic; color: var(--muted); margin-top: .25rem; }
  .ai .destacat { font-size: .8rem; font-weight: 700; color: var(--terra-fosc); margin-top: .25rem; }

  /* FAQ */
  .ai .faq { background: var(--blanc); padding: 4rem 1.5rem; }
  .ai .faq-inner { max-width: var(--max); margin: 0 auto; }
  .ai .faq-title {
    font-family: "Fraunces", Georgia, serif;
    font-size: clamp(1.4rem, 3vw, 2rem);
    color: var(--terra);
    font-style: italic;
    margin-bottom: 2.5rem;
    text-align: center;
  }
  .ai .faq-item {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(138,75,52,.12);
  }
  .ai .faq-item:last-child { border-bottom: none; margin-bottom: 0; }
  .ai .faq-q { font-weight: 700; color: var(--terra-fosc); margin-bottom: .6rem; font-size: .95rem; line-height: 1.4; }
  .ai .faq-a { font-size: .9rem; color: var(--muted); line-height: 1.7; }
  .ai .faq-a strong { color: var(--text); font-weight: 600; }

  /* Testimonials */
  .ai .testi { background: var(--crema-2); padding: 4rem 1.5rem; }
  .ai .testi-inner { max-width: var(--max); margin: 0 auto; }
  .ai .testi-title {
    font-family: "Fraunces", Georgia, serif;
    font-size: clamp(1.4rem, 3vw, 2rem);
    color: var(--terra);
    font-style: italic;
    text-align: center;
    margin-bottom: 2.5rem;
  }
  .ai .testi-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
  @media (max-width: 660px) { .ai .testi-grid { grid-template-columns: 1fr; } }
  .ai .testi-card {
    background: var(--blanc);
    border-radius: 1.2rem;
    padding: 1.8rem;
    box-shadow: 0 4px 20px -8px rgba(90,40,20,.1);
  }
  .ai .testi-card p { font-size: .88rem; color: var(--muted); line-height: 1.65; font-style: italic; margin-bottom: .9rem; }
  .ai .testi-card cite { font-style: normal; font-weight: 700; font-size: .82rem; color: var(--terra); }

  /* Sobre */
  .ai .sobre { background: var(--blanc); padding: 4rem 1.5rem; }
  .ai .sobre-inner {
    max-width: var(--max);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 3.5rem;
    align-items: center;
  }
  @media (max-width: 720px) {
    .ai .sobre-inner { grid-template-columns: 1fr; }
    .ai .sobre-img { order: -1; }
  }
  .ai .sobre-img img {
    width: 100%;
    border-radius: 1.4rem;
    object-fit: cover;
    aspect-ratio: 3/4;
    box-shadow: 0 10px 40px -15px rgba(90,40,20,.2);
  }
  .ai .sobre-text p { font-size: .95rem; color: var(--muted); line-height: 1.7; margin-bottom: 1rem; }
  .ai .sobre-text strong { color: var(--terra-fosc); font-weight: 600; }

  /* CTA final */
  .ai .cta-final {
    background: var(--terra);
    padding: 4.5rem 1.5rem;
    text-align: center;
    color: #fff;
  }
  .ai .cta-final h2 {
    font-family: "Fraunces", Georgia, serif;
    font-size: clamp(1.8rem, 4vw, 2.8rem);
    line-height: 1.2;
    margin-bottom: 2rem;
    font-style: italic;
  }
  .ai .cta-wa {
    display: inline-flex;
    align-items: center;
    gap: .7rem;
    background: #fff;
    color: var(--terra);
    font-weight: 700;
    font-size: 1rem;
    border-radius: 999px;
    padding: 1rem 2rem;
    box-shadow: 0 6px 24px rgba(0,0,0,.15);
    transition: transform .2s, box-shadow .2s;
  }
  .ai .cta-wa:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,.2); }

  .ai footer {
    background: var(--terra-fosc);
    padding: 1.5rem;
    text-align: center;
    font-size: .75rem;
    color: rgba(255,255,255,.7);
  }
`;

function WaIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden style={{ width: "1.2em", height: "1.2em", flexShrink: 0 }}>
      <path d="M19.05 4.91A10 10 0 0 0 12 2a10 10 0 0 0-8.66 15l-1.3 4.74 4.86-1.27A10 10 0 1 0 19.05 4.91Zm-7.05 15.4a8.27 8.27 0 0 1-4.22-1.16l-.3-.18-2.88.75.77-2.81-.2-.31A8.31 8.31 0 1 1 20.3 12a8.34 8.34 0 0 1-8.3 8.31Zm4.55-6.22c-.25-.13-1.48-.73-1.71-.81s-.4-.13-.56.13-.65.81-.79.97-.29.18-.54.06a6.78 6.78 0 0 1-2-1.23 7.56 7.56 0 0 1-1.4-1.74c-.14-.25 0-.38.11-.51s.25-.29.37-.43a1.62 1.62 0 0 0 .25-.41.46.46 0 0 0 0-.44c-.06-.13-.56-1.34-.76-1.83s-.4-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.81 2.81 0 0 0-.88 2.1 4.91 4.91 0 0 0 1 2.59 11.16 11.16 0 0 0 4.27 3.77 14.43 14.43 0 0 0 1.42.52 3.43 3.43 0 0 0 1.57.1 2.58 2.58 0 0 0 1.69-1.19 2.1 2.1 0 0 0 .14-1.19c-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

function IndividualPage() {
  return (
    <div className="ai">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <Link to="/recurs" className="back-link">← Tornar</Link>

      {/* Intro + vídeo */}
      <section className="intro">
        <h1 className="intro-title">
          Bases per <em>restaurar i mantenir</em><br />la salut femenina ginecològica
        </h1>
        <a
          href={`https://www.youtube.com/watch?v=${VIDEO_ID}`}
          target="_blank"
          rel="noopener noreferrer"
          className="intro-link"
        >
          Accés a la gravació de la xerrada (30 minuts)
        </a>
        <div className="video-wrap">
          <iframe
            src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0`}
            title="Bases per restaurar i mantenir la teva salut femenina ginecològica"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="hero-tag">
          Acompanyament
          <span>Individual</span>
        </p>
        <p className="hero-sub">
          T&apos;acompanyo <strong>durant 4 mesos</strong> perquè integris bé les bases per millorar i mantenir la teva salut femenina.
        </p>
        <p className="hero-hint">A continuació, tota la informació ben detallada.<br />Continua llegint...</p>
      </section>

      {/* Per a qui */}
      <section className="per-qui">
        <div className="per-qui-inner">
          <div>
            <span className="section-label">Per a qui és</span>
            <h2 className="per-qui-title">
              Aquest acompanyament és per tu si t&apos;identifiques amb algun d&apos;aquests casos...
            </h2>
            <ul className="per-qui-list">
              <li>Tens <strong>dolors menstruals, cicles irregulars, sagnats abundants, amenorrea, infertilitat…</strong> i no vols prendre hormones.</li>
              <li>Tens un <strong>mioma, un pòlip o un quiste</strong>, l&apos;única opció que et donen és passar per quiròfan, i vols una opció respectuosa amb el teu cos.</li>
              <li>Estàs en els teus <strong>primers anys de climateri</strong> i vols optar per recursos naturals per acompanyar-te en aquesta nova etapa.</li>
              <li>Vols aprendre a <strong>mantenir-te en salut femenina</strong> coneguent i aplicant en tu medicina natural ancestral, com la <strong>desparasitació amb plantes</strong> o els <strong>vapors pelvicovaginals</strong>.</li>
              <li>Vols <strong>autogestionar la teva salut femenina</strong> amb els recursos naturals que han sostingut tantíssimes dones en diferents tradicions.</li>
              <li>Vols tenir recursos per acompanyar <strong>la teva filla</strong> en la seva salut cíclica femenina, i en la teva pròpia.</li>
            </ul>
          </div>
          <div className="wa-card">
            <p>Reserva la teva <strong>videotrucada gratuïta de 30 min</strong>, enviant-me un WhatsApp.<br />Valorem juntes el teu cas. Sense compromís.</p>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="wa-btn">
              <WaIcon /> 616 351 536
            </a>
          </div>
        </div>
      </section>

      {/* Fases */}
      <section className="fases">
        <div className="fases-inner">
          <div>
            <span className="section-label">Com funciona</span>
            <p className="fases-intro">
              Primer de tot, farem una <strong>sessió online (1h30min)</strong> per revisar el teu cas en la teva realitat quotidiana. I tot seguit, aniràs integrant, mes a mes, cada una de les fases:
            </p>
            <div className="fase-item">
              <h4>✅ 1a fase · Mes 1 · Alimentació Regenerativa i Rutines</h4>
              <ul>
                <li>Accés vídeo sessió Alimentació</li>
                <li>Resum guia Rutines Bàsiques</li>
                <li>Àudio &ldquo;La nostra Ciclicitat&rdquo;</li>
                <li>Àudio meditació &ldquo;Connecta amb la teva matriu&rdquo;</li>
              </ul>
            </div>
            <div className="fase-item">
              <h4>✅ 2a fase · Mes 2 · Desparasitació amb Plantes</h4>
              <ul>
                <li>Accés vídeo sessió Desparasitació amb Plantes</li>
                <li>Resum guia Desparasitació amb Plantes</li>
                <li>Protocol individualitzat amb plantes</li>
                <li>Accés vídeo Automassatge Pits</li>
                <li>Guia resum Autocura Pits</li>
                <li>Accés vídeo exercicis Moviment &ldquo;Pèlvic Uterí&rdquo;</li>
              </ul>
            </div>
            <div className="fase-item">
              <h4>✅ 3a fase · Mes 3 · Protocol fitoginecologia</h4>
              <ul>
                <li>Accés vídeo sessió Vaporitzacions</li>
                <li>Resum Guia Vaporitzacions</li>
                <li>Proposta protocol amb vapors o altres eines de fitoginecologia per acabar d&apos;abordar el cas</li>
              </ul>
            </div>
            <p className="fase-note">✅ <strong>Mes 4.</strong> Es continuaran aplicant les 3 fases</p>
            <p className="fase-note" style={{ marginTop: ".5rem" }}>✅ <strong>Última setmana del Mes 4:</strong> Sessió online 1h30min. Revisió i valoració</p>
          </div>
          <div className="fases-img">
            <img src="/matrius/assets/ritual-nou.png" alt="Gavina en un bosc" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Inclou / No inclou */}
      <section className="inclou">
        <div className="inclou-inner">
          <p className="inclou-title">Resumidament...<br />Aquest acompanyament individual de 4 mesos...</p>
          <p className="inclou-sub">Inclou:</p>
          <div className="inclou-grid">
            <div className="inclou-box">
              <h4>Inclou</h4>
              <ul className="si">
                <li>2 sessions online amb mi: la primera (de valoració i revisió del teu cas) i l&apos;última (de valoració, revisió i tancament de procés).</li>
                <li>4 vídeos explicatius: alimentació fisiològica, desparasitació amb plantes, vaporitzacions, automassatge pits i exercicis Moviment Pèlvic Uterí.<p className="nota">Accés fins al final dels 4 mesos. No es podran baixar.</p></li>
                <li>5 guies resum (Rutines, Alimentació Fisiològica, Desparasitació amb Plantes, Vaporitzacions i Autocura Pits)</li>
                <li>Àudio &ldquo;La nostra Ciclicitat&rdquo; + Àudio meditació &ldquo;Connecta amb la teva matriu&rdquo;<p className="destacat">Àudios i guies resum es podran baixar.</p></li>
                <li>Seguiment amb resolució de dubtes directa via WhatsApp o correu durant els 4 mesos.</li>
              </ul>
            </div>
            <div className="inclou-box">
              <h4>No inclou</h4>
              <ul className="no">
                <li>Els massatges (matriu, òrgans, articulacions)</li>
                <li>La garantia que el teu desequilibri es resolgui en el temps que dura l&apos;acompanyament</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="faq-inner">
          <h2 className="faq-title">Preguntes freqüents</h2>
          {[
            {
              q: "Segueixo una dieta vegetariana, em pots acompanyar?",
              a: "L'acompanyament que ofereixo està basat en una alimentació fisiològica i regenerativa, és a dir, basada en la nutrició real que necessiten les cèl·lules i que ha permès el desenvolupament i l'evolució de l'espècie humana. Els desequilibris que viuen avui moltes dones venen en gran part d'una manca de nutrició real. Sabem que les dietes vegetariana i vegana tenen una incidència desfavorable en la salut hormonal de la dona. Si vols saber-ne els motius i estàs oberta a implementar canvis a favor de la teva salut, et puc acompanyar.",
            },
            {
              q: "He tingut una pèrdua gestacional, i em sento molt desconnectada de la meva matriu.",
              a: "Aquest és un cas massa habitual avui i que acostuma a estar relacionat amb una vida molt activa, el no permetre's el descans real. T'acompanyaré a revisar rutines, la teva alimentació, una desparasitació amb plantes adequades per tu i un protocol de vapors per netejar el teu úter. I també et recomanaria el ritual de la Cerrada. Tot això, pas a pas.",
            },
            {
              q: "No sento desig sexual i tampoc plaer en la penetració. Tinc 45 anys.",
              a: "La desconnexió del plaer està relacionada amb la desconnexió de la vida. La sexualitat es ressignifica i agafa nous matisos en el Climateri. T'acompanyaré posant èmfasi en l'alimentació, les rutines, els massatges de matriu i la introducció del treball físic i energètic específic per a aquesta preciosa etapa.",
            },
            {
              q: "Com són els tractaments que apliques?",
              a: "No soc metge ni ginecòloga. No recomanaré hormones sintètiques, intervencions quirúrgiques ni fàrmacs. Tot el que he après i aplico ve de tradicions de Llatinoamèrica, basat en medicina natural i ancestral: alimentació regenerativa, rutines, desparasitació amb plantes, moviment pelvicuterí, massatge de matriu i òrgans, massatge amb rebozos i ritual la Cerrada.",
            },
            {
              q: "En principi no tinc cap desequilibri ginecològic però sento la necessitat de connectar amb la meva matriu i amb la meva feminitat.",
              a: "Cuidar-nos com a dones té a veure en com ens nodrim en tots els sentits. Hi han unes bases que ens donen autonomia i que ens mantenen en salut. Són aquells recursos/medicines que han sostingut les dones en tantes cultures ancestrals. Bàsiques, senzilles, sostenibles. Això és el que us ensenyo en els acompanyaments.",
            },
            {
              q: "Em pots garantir que el meu desequilibri s'haurà resolt en 3-4 mesos?",
              a: "Cada procés és únic. El meu compromís és acompanyar-te a restaurar i mantenir la teva salut. Et guiaré pas a pas. En cap cas et puc garantir que obtindràs els resultats que busques.",
            },
            {
              q: "Com puc saber si em podries acompanyar en el meu cas?",
              a: "Escriu-me un WhatsApp i valorem juntes si aquest acompanyament s'adapta al que necessites.",
            },
          ].map(({ q, a }) => (
            <div className="faq-item" key={q}>
              <p className="faq-q">{q}</p>
              <p className="faq-a">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testi">
        <div className="testi-inner">
          <h2 className="testi-title">Algunes dones diuen...</h2>
          <div className="testi-grid">
            {[
              { text: "Visualitzo la Gavina com una sàvia xamana, a la qual acudir i confiar. Trobar dones tan potents com ella, amb aquesta mirada reivindicativa i amorosa, m'encanta i em connecta amb allò que per mi és important.", name: "Alba" },
              { text: "El Massatge Ritual Matriu amb la Gavina va ser molt màgic. Des del primer moment em vaig sentir acompanyada. Un acompanyament dolç, present, conscient. Sobretot m'ha permès connectar amb la meva matriu.", name: "Raquel" },
              { text: "Vam iniciar les sessions perquè la meva filla Laia, de 13 anys, tenia molts dolors durant la menstruació. Durant tot el procés ens vam sentir molt còmodes. Hem fet un aprenentatge, mare i filla, que ens servirà per sempre. Seguint les pautes de la Gavina, la Laia ha millorat molt.", name: "Teresa" },
              { text: "La Gavina em va ensenyar a mirar-me com mai, a posar-me al centre i escoltar el meu cos. Em van trobar un càncer a l'úter que no m'haguessin diagnosticat tan a temps si ella no m'hagués assessorat. La Gavina em va ajudar moltíssim a decidir el meu tractament amb tota la informació.", name: "Lorena" },
            ].map(({ text, name }) => (
              <div className="testi-card" key={name}>
                <p>&ldquo;{text}&rdquo;</p>
                <cite>{name}</cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre la Gavina */}
      <section className="sobre">
        <div className="sobre-inner">
          <div className="sobre-img">
            <img src="/matrius/assets/gavina-nova.jpg" alt="La Gavina" loading="lazy" />
          </div>
          <div className="sobre-text">
            <p>Soc la Gavina, acompanyant de dones que tenen ganes de fer-se càrrec de la seva salut femenina des de <strong>les bases que han sostingut, i sostenen, les dones en diferents tradicions mil·lenàries d&apos;arreu del món.</strong></p>
            <p>T&apos;acompanyo a prevenir i tractar els desequilibris ginecològics que estiguis tenint a partir de les <strong>rutines i pràctiques ancestrals que ens mantenen en salut i que ens ajuden a restaurar-la.</strong></p>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="cta-final">
        <h2>Estàs preparada<br />per iniciar<br />aquest camí?</h2>
        <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="cta-wa">
          <WaIcon />
          Reserva Videotrucada Gratuïta · WhatsApp
        </a>
      </section>

      <footer>Gavina Freixa Rius · Salut Cíclica Femenina</footer>
    </div>
  );
}
