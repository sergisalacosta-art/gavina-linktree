import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoImage from "@/assets/gavina-logo.png";

const WA_URL = "https://wa.me/34616351534";

export const Route = createFileRoute("/retir")({
  component: RetirPage,
});

const css = `
  .rt{
    --terra:#8a4b34;
    --terra-fosc:#5d3428;
    --sorra:#f4ead7;
    --mel:#e5b66d;
    --mel-suau:#f8df9a;
    --text:#2b2925;
    --muted:#635d55;
    --blanc:#fffdf8;
    --max:1160px;
  }
  .rt *{box-sizing:border-box}
  .rt{
    color:var(--text);
    background:var(--blanc);
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height:1.55;
    font-size:17px;
    overflow-x:hidden;
    min-height:100vh;
    position:relative;
  }
  .rt img{max-width:100%;display:block}
  .rt a{color:inherit;text-decoration:none}

  .rt .hero{
    min-height:82vh;
    position:relative;
    display:grid;
    align-items:end;
    background:
      linear-gradient(90deg, rgba(80,42,16,.38), rgba(150,95,35,.04) 55%, rgba(60,32,10,.18)),
      url("/retir/assets/retir%201.jpg") 20% top / cover no-repeat;
    color:white;
    isolation:isolate;
    z-index:1;
  }
  .rt .hero:before{
    content:"";
    position:absolute;
    inset:0;
    z-index:0;
    background:rgba(220,160,60,.12);
    mix-blend-mode:overlay;
    pointer-events:none;
  }
  .rt .hero:after{
    content:"";
    position:absolute;
    inset:auto 0 0 0;
    height:40%;
    background:linear-gradient(180deg, transparent, rgba(70,35,10,.32));
    z-index:-1;
  }
  .rt .hero-inner{
    width:min(var(--max), calc(100% - 40px));
    margin:0 auto;
    padding:7rem 0 5.5rem;
    position:relative;
    z-index:1;
  }
  .rt .kicker{
    letter-spacing:.18em;
    text-transform:uppercase;
    color:white;
    font-size:.82rem;
    margin:0 0 1rem;
    font-weight:700;
  }
  .rt h1,.rt h2,.rt h3{
    font-family: Georgia, "Times New Roman", serif;
    color:var(--terra);
    line-height:1.06;
    margin:0;
    font-weight:700;
  }
  .rt h1{
    color:#e1bda6;
    font-size:clamp(3rem, 8vw, 7.2rem);
    letter-spacing:.045em;
    text-transform:uppercase;
    max-width:520px;
    text-wrap:balance;
    text-shadow:0 8px 30px rgba(0,0,0,.22);
  }
  .rt .hero-sub{
    margin:.9rem 0 0;
    font-family:Georgia, "Times New Roman", serif;
    font-style:italic;
    font-size:clamp(1.3rem, 3vw, 2.2rem);
    color:#e1bda6;
    font-weight:400;
  }
  .rt .hero-date{
    margin:.5rem 0 0;
    font-size:clamp(1rem, 2vw, 1.35rem);
    color:white;
    font-weight:600;
    letter-spacing:.05em;
  }
  .rt .hero-actions{
    display:flex;
    flex-wrap:wrap;
    gap:.9rem;
    margin-top:2.2rem;
  }
  .rt .btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    border-radius:999px;
    padding:.88rem 1.8rem;
    text-decoration:none;
    font-weight:700;
    letter-spacing:.01em;
    border:1px solid transparent;
    transition:transform .18s ease, background .18s ease;
    gap:.55rem;
  }
  .rt .btn:hover{transform:translateY(-2px)}
  .rt .btn-primary{background:#fff; color:#4a2e22}
  .rt .btn-ghost{border-color:rgba(255,255,255,.55); color:white; background:rgba(255,255,255,.08); backdrop-filter:blur(6px)}
  .rt .btn-terra{background:linear-gradient(135deg,#e1bda6 0%,#c5a595 100%); color:#4a2e22; font-size:clamp(1.15rem,2.2vw,1.45rem); padding:1.1rem 2.6rem; box-shadow:0 0 30px rgba(197,162,142,.48), 0 4px 18px rgba(160,118,95,.22); letter-spacing:.1em;}

  .rt section{padding:clamp(2.8rem, 5vw, 5rem) 0; position:relative; z-index:1;}
  .rt .wrap{width:min(var(--max), calc(100% - 40px)); margin:0 auto;}
  .rt .cream{background:linear-gradient(180deg, rgba(244,234,215,.55), rgba(255,253,248,.9))}
  .rt .card{background:#fffdf8; border:1px solid rgba(138,75,52,.12); border-radius:2rem; box-shadow:0 20px 60px rgba(84,54,34,.08);}
  .rt .text-card{padding:clamp(1.4rem,3.5vw,2.8rem)}

  .rt .section-title{display:flex; flex-direction:column; gap:.65rem; margin-bottom:2rem;}
  .rt .section-title h2{padding-bottom:.55rem; border-bottom:1.5px solid var(--terra); margin-bottom:0;}
  .rt h2{font-family:Georgia,"Times New Roman",serif; font-size:clamp(1.7rem, 4vw, 3.4rem); color:var(--terra); text-wrap:balance; font-weight:700; line-height:1.06; margin:0 0 1rem;}
  .rt .grid-2-img{display:grid; grid-template-columns:1fr 1fr; gap:1.2rem; margin-top:2rem;}
  .rt h3{font-size:clamp(1.1rem, 2vw, 1.55rem); color:var(--terra-fosc); margin-bottom:.7rem;}
  .rt p{margin:.75rem 0 0; color:var(--muted); font-size:clamp(1.05rem, 1.8vw, 1.2rem); line-height:1.65;}
  .rt p:first-child{margin-top:0}
  .rt .lead{font-size:clamp(1.08rem, 2vw, 1.28rem); color:var(--muted);}
  .rt strong{font-weight:800; color:#1f1d1a}

  .rt .bullets{list-style:none; padding:0; margin:1.2rem 0 0; display:grid; gap:.9rem;}
  .rt .bullets li{position:relative; padding-left:1.45rem; color:var(--muted); font-size:clamp(1.05rem, 1.8vw, 1.2rem); line-height:1.6;}
  .rt .bullets li:before{content:""; position:absolute; left:0; top:.75em; width:.45rem; height:.45rem; border-radius:50%; background:var(--terra);}

  .rt .grid-2{display:grid; grid-template-columns:minmax(0,1.1fr) minmax(300px,.9fr); gap:clamp(2rem,5vw,5rem); align-items:center;}
  .rt .grid-3{display:grid; grid-template-columns:repeat(3,1fr); gap:1.2rem; margin-top:2rem;}
  .rt .soft-img{border-radius:1.7rem; overflow:hidden; box-shadow:0 26px 70px rgba(55,40,25,.16);}
  .rt .soft-img img{width:100%; object-fit:cover; aspect-ratio:3/4; object-position:center top;}
  .rt .soft-img-h img{aspect-ratio:4/3; object-position:center;}
  .rt .bio{display:grid; grid-template-columns:340px 1fr; gap:clamp(2rem,5vw,5rem); align-items:stretch;}
  .rt .bio .soft-img{height:100%;}
  .rt .bio .soft-img img{height:100%; aspect-ratio:unset;}
  .rt .bio-side{display:grid; grid-template-columns:1fr clamp(260px,34vw,360px); gap:clamp(2rem,4vw,4rem); align-items:start;}
  .rt .bio-side .soft-img img{aspect-ratio:3/4; object-position:center top;}
  @media(max-width:900px){.rt .bio-side{grid-template-columns:1fr;} .rt .bio-side .soft-img{max-width:320px; margin:0 auto;}}

  /* TIMELINE */
  .rt .timeline{display:grid; gap:0; margin-top:1.8rem;}
  .rt .timeline-item{display:grid; grid-template-columns:7rem 1fr; gap:1.2rem; padding:1.2rem 0; border-top:1px solid rgba(138,75,52,.12);}
  .rt .timeline-item:last-child{border-bottom:1px solid rgba(138,75,52,.12);}
  .rt .timeline-time{font-weight:700; color:var(--terra); font-size:.95rem; padding-top:.15rem; line-height:1.3;}
  .rt .timeline-desc{color:var(--muted); font-size:clamp(1.05rem, 1.8vw, 1.2rem); line-height:1.6; margin:0;}
  .rt .pre-event{background:linear-gradient(135deg, #fceae3, #fef5f1); border-left:4px solid var(--terra); border-radius:1.4rem; padding:clamp(1.4rem,3vw,2.4rem); margin-top:1.8rem;}
  .rt .pre-event h3{margin-bottom:1rem; color:var(--terra-fosc);}

  /* INVERSIÓ */
  .rt .destacat{background:linear-gradient(135deg,#fceae3,#fef5f1); border-left:4px solid var(--terra); border-radius:1rem; padding:clamp(1.2rem,3vw,2rem); margin-top:1.6rem; font-size:clamp(1.15rem, 2.2vw, 1.4rem); color:var(--terra-fosc); line-height:1.6; font-family:Georgia,"Times New Roman",serif; font-style:italic;}
  .rt .destacat p{color:var(--terra-fosc); font-size:inherit; line-height:inherit; font-family:inherit; margin-top:.6rem;}
  .rt .com-ho-farem{background:linear-gradient(135deg,#fceae3,#fef5f1); border-left:4px solid var(--terra); border-radius:1rem; padding:clamp(1.2rem,3vw,2rem); margin-top:2.2rem;}
  .rt .pricing-card{padding:clamp(1.8rem, 3.4vw, 2.8rem); border-radius:2rem; background:linear-gradient(180deg, #fceae3 0%, #fef5f1 100%); border:1px solid rgba(138,75,52,.16); box-shadow:0 22px 65px rgba(84,54,34,.10);}
  .rt .price-number{font-family:Georgia, "Times New Roman", serif; color:var(--terra); font-size:clamp(2.5rem, 6vw, 4.5rem); font-weight:900; line-height:1; margin:1.4rem 0 .4rem;}
  .rt .price-note{font-size:clamp(1.05rem, 1.8vw, 1.2rem); color:var(--muted); font-style:italic; margin:.5rem 0 0;}

  /* CTA */
  .rt .cta-block{background:linear-gradient(135deg,#e1bda6 0%,#c5a595 100%); border-radius:2rem; padding:clamp(2rem,4vw,3.2rem); text-align:center; box-shadow:0 30px 80px rgba(160,115,90,.22);}
  .rt .cta-block h2{color:#4a2e22; margin-bottom:1rem;}
  .rt .cta-block p{color:#5d3c2c;}

  /* TESTIMONIS */
  .rt .testi-carousel{display:flex; align-items:center; gap:1.2rem;}
  .rt .testi-track{flex:1; overflow:hidden;}
  .rt .testi-card{background:#fffdf8; border-radius:1.7rem; padding:2rem 2.2rem; box-shadow:0 4px 20px -8px rgba(90,40,20,.1); border:1px solid rgba(138,75,52,.1);}
  .rt .testi-card p{font-size:clamp(1.05rem, 1.8vw, 1.2rem); color:var(--muted); line-height:1.72; font-style:italic; margin-bottom:1rem;}
  .rt .testi-card cite{font-style:normal; font-weight:800; font-size:.88rem; color:var(--terra);}
  .rt .testi-arrow{flex-shrink:0; width:2.6rem; height:2.6rem; border-radius:50%; border:none; background:var(--terra); color:#fff; font-size:1.5rem; line-height:1; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .2s, transform .15s;}
  .rt .testi-arrow:hover{background:var(--terra-fosc); transform:scale(1.08);}
  .rt .testi-dots{display:flex; justify-content:center; gap:.55rem; margin-top:1.4rem;}
  .rt .testi-dot{width:.5rem; height:.5rem; border-radius:50%; background:var(--mel); border:none; cursor:pointer; padding:0; transition:background .2s, transform .2s;}
  .rt .testi-dot.active{background:var(--terra); transform:scale(1.3);}

  /* FAQ */
  .rt .faq{display:grid; gap:.7rem; margin-top:1.6rem;}
  .rt .faq-item{border:1px solid rgba(138,75,52,.15); border-radius:1.2rem; overflow:hidden; background:#fffdf8;}
  .rt .faq-item summary{list-style:none; cursor:pointer; padding:1.15rem 1.4rem; font-weight:700; font-size:clamp(1rem,1.8vw,1.15rem); color:var(--terra-fosc); display:flex; justify-content:space-between; align-items:center; gap:1rem; user-select:none;}
  .rt .faq-item summary::-webkit-details-marker{display:none;}
  .rt .faq-item summary::after{content:"+"; font-size:1.4rem; font-weight:400; color:var(--terra); flex-shrink:0; transition:transform .2s;}
  .rt .faq-item[open] summary::after{transform:rotate(45deg);}
  .rt .faq-item[open] summary{border-bottom:1px solid rgba(138,75,52,.1);}
  .rt .faq-body{padding:1.1rem 1.4rem 1.3rem; color:var(--muted); font-size:clamp(1rem,1.7vw,1.12rem); line-height:1.65;}
  .rt .faq-body p{margin:.6rem 0 0; color:var(--muted); font-size:inherit; line-height:inherit;}
  .rt .faq-body p:first-child{margin-top:0;}

  .rt .em-sub{display:inline; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 32' preserveAspectRatio='none'%3E%3Cpath d='M6,9 C28,4 65,10 105,6 C142,2 178,8 195,7 C199,11 198,20 193,23 C158,28 115,23 75,25 C40,27 11,23 4,21 C1,18 2,13 6,9 Z' fill='%23ffffff' fill-opacity='0.55'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-size:100% 100%; padding:0.12em 0.4em;}
  .rt footer{padding:3rem 0; background:#2d241d; color:rgba(255,255,255,.78); text-align:center; font-size:.94rem;}
  .rt .back-link{display:inline-flex; align-items:center; gap:.4rem; font-size:.88rem; font-style:italic; color:var(--terra); padding:1.5rem 1.5rem 0; background:none; border:none; cursor:pointer; transition:color .2s; position:relative; z-index:1;}
  .rt .back-link:hover{color:var(--terra-fosc);}

  @media(max-width:900px){
    .rt .hero{min-height:72vh}
    .rt .grid-2,.rt .bio{grid-template-columns:1fr}
    .rt .grid-3{grid-template-columns:1fr 1fr}
    .rt .grid-2-img{grid-template-columns:1fr}
    .rt .timeline-item{grid-template-columns:5.5rem 1fr}
  }
  @media(max-width:560px){
    .rt{font-size:16px}
    .rt .hero-inner,.rt .wrap{width:min(100% - 28px, var(--max))}
    .rt section{padding:2.4rem 0}
    .rt h1{font-size:2.7rem}
    .rt .btn{width:100%}
    .rt .grid-3{grid-template-columns:1fr}
    .rt .timeline-item{grid-template-columns:1fr; gap:.3rem;}
    .rt .timeline-time{font-size:.88rem;}
  }
`;

const testimonialsData = [
  {
    text: "Tuve el regalo de participar en un retiro de mujeres donde Gavina nos acompañó con una presencia amorosa, sosteniendo el espacio con una entrega silenciosa y constante. Desde el primer momento sentí en ella una combinación muy especial de dulzura, fortaleza y calma. Su manera de estar, de escuchar y de cuidar hizo que me sintiera profundamente acompañada y sostenida durante todo el proceso. Hay personas cuya luz no necesita hacer ruido para iluminar a los demás, y para mí Gavina es una de ellas. Su presencia inspira confianza, amor y humanidad. Estoy profundamente agradecida por haber coincidido con ella en ese camino y por todo lo que sembró en mi corazón. La recomiendo de todo corazón a cualquier mujer que sienta el llamado a dejarse acompañar desde un lugar auténtico, consciente y lleno de amor.",
    name: "Kelly",
  },
  {
    text: "La Gavina m'aporta alineació entre el que sento, desitjo i faig, cap-cor-cos. Visualitzo la Gavina com una sàvia xamana, a la qual acudir i confiar. Trobar dones tan potents com ella, amb aquesta mirada reivindicativa i amorosa, m'encanta i em connecta amb allò que per mi és important.",
    name: "Alba C.",
  },
  {
    text: "Amb tu, Gavina, vaig assistir al retir del Foc de les Dones i vaig tocar a pell la teva medicina. El cercle, les dones, la connexió amb el cos, el moviment i la dansa..tot per iniciar un viatge intern profund i restauratiu. Agraïda de la teva mirada i visió cap a les nostres matrius.",
    name: "Maria Rosa, S.",
  },
  {
    text: "Gràcies sempre, Gavina, per la sensibilitat i cura amb la que fas les teves propostes. La teva delicadesa és sempre una invitació amable a treballar profund i amb consciència. Aquest retir com cada taller que proposes són espais de veritable alliberació i sanació per a l'ànima femenina. Pura bellesa i vida.",
    name: "Montserrat, G. @alquimiafemenina.espaidona",
  },
  {
    text: "Vaig conèixer la Gavina per primera vegada al retir Haseya, on era una de les facilitadores. Amb la seva manera d'acompanyar-nos, aconseguia crear espais on les dones ens sentíem segures per mostrar-nos tal com érem. Ens ajudava a conèixer millor el nostre cos, a escoltar les nostres necessitats i a guanyar confiança tant en nosaltres mateixes com en el grup. Aquella experiència va ser tan enriquidora que, l'any següent, vaig decidir repetir i participar en el retir El Foc de les Dones. Entre cants, temazcal i danses, vam aprofundir en diferents aspectes relacionats amb el climateri, el plaer i la Ira Sagrada. Van ser vivències que em van permetre connectar amb mi mateixa i amb altres dones des d'un lloc més sincer, lliure i conscient. Guardo aquests espais amb molta estima, perquè em van oferir eines, aprenentatges i moments compartits que encara avui continuen formant part del meu camí.",
    name: "Ruth, A.",
  },
];

function TestimonialCarousel() {
  const [idx, setIdx] = useState(0);
  const n = testimonialsData.length;
  const prev = () => setIdx(i => (i - 1 + n) % n);
  const next = () => setIdx(i => (i + 1) % n);
  const { text, name } = testimonialsData[idx];
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
        <button className="testi-arrow" onClick={next} aria-label="Següent">›</button>
      </div>
      <div className="testi-dots">
        {testimonialsData.map((_, i) => (
          <button key={i} className={`testi-dot${i === idx ? " active" : ""}`} onClick={() => setIdx(i)} aria-label={`Testimoni ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

function RetirPage() {
  return (
    <div className="rt">
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

      <button onClick={() => window.history.back()} className="back-link">← Tornar</button>

      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <p className="kicker">Retir presencial d&apos;un dia</p>
          <h1>Cures de Matriu</h1>
          <p className="hero-date">Dissabte 17 octubre</p>
          <p className="hero-date">Les Franqueses del Vallès</p>
          <div className="hero-actions">
            <a className="btn btn-terra" href={WA_URL} target="_blank" rel="noopener noreferrer" style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", padding: ".9rem 2rem" }}>Reserva la teva plaça</a>
            <a className="btn btn-ghost" href="#pla">Veure el pla del dia</a>
          </div>
        </div>
      </header>

      <main>
        {/* DE QUÈ VA */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>De què va el retir?</h2>
            </div>
            <p className="lead">Sabem que cada vegada, les dones, vivim més desequilibris en els nostres òrgans femenins, i això té molt a veure amb &ldquo;viure&rdquo; fragmentades i desconnectades de les nostres matrius.</p>
            <p className="lead" style={{ marginTop: "1rem" }}>Si et sents desconnectada de la teva matriu, estàs desconnectada del teu poder intern. I ja sabem que així és com ens vol aquest sistema on vivim: desempoderades i manipulables.</p>
            <div className="destacat" style={{ fontStyle: "normal", marginTop: "1.8rem" }}>
              <p style={{ fontWeight: 700, fontSize: "clamp(1.2rem, 2.3vw, 1.5rem)", margin: 0 }}>Aquest retir és una oportunitat…</p>
              <p style={{ fontStyle: "italic", marginTop: ".6rem" }}>parar, respirar i tornar al cos.<br />I des d&apos;aquí…</p>
              <p style={{ fontStyle: "italic", marginTop: ".6rem" }}>
                …començar a posar consciència en la teva salut femenina a través de la teva matriu.<br />
                …experimentar en pròpia pell algunes de les medicines que han ajudat a cuidar la salut de les dones des de fa milers d&apos;anys.<br />
                …(re)connectar, despertar i nodrir la teva matriu, font de vida i salut.
              </p>
              <p style={{ fontStyle: "italic", marginTop: "1.2rem" }}>Un dia per recordar-nos que quan <strong style={{ fontStyle: "normal" }}>HABITEM</strong> la nostra matriu, ens podem</p>
              <p style={{ fontWeight: 700, color: "var(--terra)", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", lineHeight: 1.4, fontStyle: "normal", marginTop: ".3rem" }}>GESTAR,<br />NODRIR,<br />PARIR</p>
              <p style={{ fontStyle: "italic", marginTop: ".3rem" }}>tantes vegades com necessitem,<br />des que naixem fins que morim.</p>
              <p style={{ fontStyle: "italic", marginTop: "1.2rem" }}>Un espai per compartir amb altres dones,<br />per cuidar-nos i sostenir-nos,<br />sentint el poder del grup.</p>
            </div>
            <div className="grid-2-img">
              <div className="soft-img soft-img-h" style={{ background: "#fceae3" }}>
                <img src="/retir/assets/montse.jpg" alt="Massatge de matriu" loading="lazy" style={{ objectFit: "contain" }} />
              </div>
              <div className="soft-img soft-img-h" style={{ background: "#fceae3" }}>
                <img src="/retir/assets/massatge%20gemma.png" alt="Massatge de matriu" loading="lazy" style={{ objectFit: "contain" }} />
              </div>
            </div>
            <div className="com-ho-farem" style={{ marginTop: "2rem" }}>
              <p style={{ fontSize: "clamp(1.25rem, 2.8vw, 1.9rem)", color: "var(--terra)", lineHeight: 1.45, fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700, margin: "0 0 1rem" }}>Com ho farem?</p>
              <p><strong>Fent un tastet de diverses medicines ancestrals que ens ajudaran a començar a despertar i revitalitzar la matriu:</strong></p>
              <ul className="bullets">
                <li>La ubicarem i sentirem com està el seu batec</li>
                <li>L&apos;hi donarem moviment, flexibilitat i veu</li>
                <li>La humidificarem i li donarem escalfor</li>
                <li>La nodrirem amb plantes</li>
              </ul>
              <p style={{ marginTop: "1.4rem" }}>Connectarem amb la medicina de les plantes en combinació amb els diferents elements que alquimitzarem per rebre&apos;n els beneficis.</p>
              <p><strong>I ho farem juntes, entre dones.</strong></p>
            </div>
          </div>
        </section>

        {/* PER A QUI ÉS */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Aquest retir és per tu si…</h2>
            </div>
            <ul className="bullets">
              <li>Estàs encara menstruant o ja estàs notant canvis en el teu cicle, i sents que el teu cos t&apos;està demanant un canvi, <strong>començar a cuidar-te de debò des de dins</strong>, i no saps per on començar</li>
              <li>Et sents esgotada, amb energia baixa, confusa, trista, enfadada… Si et sents així probablement estàs <strong>desconnectada de la teva matriu</strong></li>
              <li>Tens ganes de viure un dia íntim de <strong>nutrició i atenció plena dedicada a la teva matriu</strong>, i acompanyada d&apos;altres dones</li>
              <li>Et criden les medicines naturals ancestrals, com els <strong>vapors vaginals, el moviment pelvic uterí, els cataplasmes amb plantes i l&apos;automassatge de matriu</strong></li>
            </ul>
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                SOM-HI. VULL SER-HI!
              </a>
            </div>
          </div>
        </section>

        {/* QUAN I ON */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Quan i on?</h2>
            </div>
            <p className="lead">La tardor és el moment de començar a caminar cap a la cova, d&apos;anar trobant l&apos;espai i el temps per estar amb tu, i així regenerar-te després de posar l&apos;energia cap enfora durant la primavera i l&apos;estiu. Per això aquest retir serà en aquesta estació de l&apos;any.</p>
            <p className="lead" style={{ marginTop: "1rem" }}><strong>Dissabte 17 d&apos;octubre, de 10h a 19h.</strong></p>
            <p className="lead" style={{ marginTop: ".6rem" }}>En un espai preciós de <strong>Les Franqueses del Vallès</strong>.</p>
            <div className="grid-2-img">
              <div className="soft-img soft-img-h">
                <img src="/retir/assets/casa1.jpg" alt="Exterior de l'espai" loading="lazy" />
              </div>
              <div className="soft-img soft-img-h">
                <img src="/retir/assets/haseya2.jpg" alt="Haseya" loading="lazy" style={{ objectPosition: "center 30%" }} />
              </div>
            </div>
          </div>
        </section>

        {/* PLA DE L'EXPERIÈNCIA */}
        <section className="cream" id="pla">
          <div className="wrap">
            <div className="section-title">
              <h2>Pla de l&apos;experiència</h2>
            </div>

            <div className="pre-event">
              <p style={{ margin: 0, fontWeight: 700, color: "var(--terra-fosc)" }}>Una setmana abans del retir, hi haurà una sessió online on:</p>
              <ul className="bullets">
                <li>Ubicarem i nombrarem els nostres òrgans femenins</li>
                <li>Repassarem els 5 imprescindibles per cuidar la nostra matriu i mantenir-nos en salut</li>
                <li>Ens presentarem i ens prepararem per a l&apos;experiència presencial</li>
              </ul>
            </div>

            <p style={{ fontWeight: 700, color: "var(--terra-fosc)", marginTop: "1.8rem", fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)" }}>El dia del retir</p>
            <div className="timeline" style={{ marginTop: ".8rem" }}>
              <div className="timeline-item">
                <span className="timeline-time">9.30 – 10.00h</span>
                <p className="timeline-desc">Arribades</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-time">10.00 – 14.00h</span>
                <div>
                  <p className="timeline-desc">Sentir, despertar i activar la matriu. Moviment pelvicuterí amb veu. Nutrició per a la matriu amb cataplasmes de plantes i meditació uterina.</p>
                  <p className="timeline-desc" style={{ marginTop: ".5rem" }}><em>Pausa breu a mig matí amb infusions medicinals.</em></p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-time">14.00 – 15.30h</span>
                <p className="timeline-desc">Pausa dinar lleuger</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-time">15.30 – 19.00h</span>
                <p className="timeline-desc">Automassatge matriu, massatge pelvic amb rebozos, vapors pelvicovaginals. Compartirs i tancament.</p>
              </div>
            </div>

            <div className="grid-2-img">
              <div className="soft-img soft-img-h">
                <img src="/retir/assets/retir%202.jpg" alt="Dones en cercle al bosc" loading="lazy" style={{ objectPosition: "center bottom" }} />
              </div>
              <div className="soft-img soft-img-h">
                <img src="/retir/assets/retir%204.jpg" alt="Dones compartint" loading="lazy" />
              </div>
            </div>
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                NO M&apos;HO VULL PERDRE!
              </a>
            </div>
          </div>
        </section>

        {/* INVERSIÓ */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Inversió</h2>
            </div>
            <div className="pricing-card">
              <p className="price-number">120€</p>
              <p style={{ fontWeight: 700, color: "var(--terra-fosc)", marginTop: "1.4rem" }}>Inclou:</p>
              <ul className="bullets" style={{ marginTop: ".8rem" }}>
                <li>La sessió d&apos;1h30min online uns dies previs al retir: <em>&ldquo;Òrgans femenins i els 5 imprescindibles per cuidar la nostra matriu&rdquo;</em></li>
                <li>El meu acompanyament en el retir</li>
              </ul>
              <p className="price-note" style={{ marginTop: "1.6rem" }}>* El dinar no està inclòs. Cal que portis el teu dinar i també alguna cosa lleugera per picar a mig matí.</p>
              <p className="price-note">* No podrem escalfar menjar ni podrem sortir de l&apos;espai per anar a comprar res.</p>
            </div>
          </div>
        </section>

        {/* FACILITADORA */}
        <section>
          <div className="wrap">
            <div className="bio-side">
              <div>
                <div className="section-title">
                  <h2>Qui t&apos;acompanyarà en aquesta experiència?</h2>
                </div>
                <p className="lead">Soc la Gavina i fa 7 anys que vaig començar a acompanyar dones en el seu procés de creixement de la mà de la maternitat en base a la teràpia Gestalt i la Ciclicitat i Sexualitat Femenines. Aquests espais es van anar transformant i ampliant en pro de la Salut Femenina, al costat de la Ginecologia Natural i Ancestral.</p>
                <p className="lead" style={{ marginTop: ".8rem" }}>Amb aquest retir experimentaràs algunes de les medicines naturals que han ajudat a:</p>
                <p style={{ marginTop: ".8rem", fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700, color: "var(--terra)", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", lineHeight: 1.4 }}>
                  CONNECTAR,<br />
                  NODRIR,<br />
                  DESPERTAR,<br />
                  ACTIVAR...
                </p>
                <p style={{ marginTop: ".4rem", fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700, color: "var(--terra)", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", lineHeight: 1.4 }}>les matrius de tantes dones.</p>
                <p className="lead" style={{ marginTop: ".8rem" }}>I per tant, a <strong>SANAR-LES,</strong> a <strong>SANAR-NOS.</strong></p>
              </div>
              <div className="soft-img">
                <img src="/matrius/assets/gavina-nova.jpg" alt="Retrat de la Gavina" loading="lazy" />
              </div>
            </div>
            <p className="lead" style={{ marginTop: "1.8rem" }}>Crec profundament, perquè així ho he viscut al llarg dels anys, que part del procés de sanació passa per entregar-nos a espais com aquest, amb altres dones. El que passa quan ens ajuntem, no és el mateix que caminant soles ni fent acompanyaments individuals. <strong>Quan les dones ens ajuntem, arribem a nivells més profunds de sanació.</strong></p>
            <p className="lead" style={{ marginTop: "1.2rem" }}>Amb aquesta experiència, t&apos;acompanyo a reconnectar amb el teu centre de poder: la teva matriu. I des d&apos;aquí, ja no hi ha volta enrere. <strong>Tu tries des d&apos;on continuar vivint la teva vida.</strong></p>
          </div>
        </section>

        {/* DESPRÉS */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Després d&apos;aquest retir…</h2>
            </div>
            <ul className="bullets" style={{ marginTop: "1.6rem" }}>
              <li>Recordaràs <strong>on habita la teva energia femenina</strong> i com mantenir-la <strong>desperta i vital</strong></li>
              <li>Et sentiràs <strong>calmada, lleugera, clara, connectada</strong> amb el teu plaer i la teva matriu</li>
              <li>Sabràs <strong>què fer si tornes a perdre&apos;t</strong> en el camí</li>
              <li>Tornaràs a habitar la teva matriu, recuperaràs claredat i començaràs a (re)connectar amb el teu cicle, <strong>tant si encara menstrues com si no</strong></li>
              <li>Coneixeràs i hauràs provat algunes de les <strong>medicines naturals i ancestrals</strong> que han usat les dones en diferents tradicions mil·lenàries</li>
            </ul>
            <div className="soft-img" style={{ marginTop: "2.2rem", height: "460px" }}>
              <img src="/retir/assets/retir3.jpg" alt="Dones abraçades en cercle" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: "unset", objectPosition: "center top" }} />
            </div>
          </div>
        </section>

        {/* TESTIMONIS */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Les dones parlen...</h2>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* FAQ */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Tens preguntes? Aquí tens algunes respostes…</h2>
            </div>
            <div className="faq">
              <details className="faq-item">
                <summary>He d&apos;haver fet algun acompanyament amb tu per assistir al retir?</summary>
                <div className="faq-body">
                  <p>No és necessari. Tant si has fet acompanyament individual amb mi, com si has assistit a alguna de les xerrades que he impartit com si encara no ens hem conegut. Si ressones amb aquesta proposta i amb mi, seràs benvinguda.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary>Necessito haver tingut contacte previ amb aquestes medicines naturals i ancestrals o algun coneixement específic sobre sexualitat femenina?</summary>
                <div className="faq-body">
                  <p>No és necessari.</p>
                  <p>Si et crida l&apos;atenció cuidar-te de manera natural, respectuosa amb el teu cos, amb recursos que et pots aplicar tu mateixa a casa, de manera senzilla i econòmica i així autogestionar fins on puguis la teva salut femenina per cuidar-te i fer prevenció…</p>
                  <p>Si tens ganes de viure una experiència diferent de reconnexió amb el teu cos femení…</p>
                  <p>…hi ha un espai per tu.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary>On és exactament el retir i què hauré de portar?</summary>
                <div className="faq-body">
                  <p>El retir serà a les Franqueses del Vallès. L&apos;adreça exacta i els detalls sobre el que haureu de portar us ho comunicaré un cop reservada la plaça.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary>Com seran les dinàmiques?</summary>
                <div className="faq-body">
                  <p>Totes les propostes són creades i pensades des de la màxima cura i en pro del teu benestar i el del grup. Les dinàmiques són majoritàriament individuals, però el treball el fem juntes. El primer mantra en aquest retir és: escolta&apos;t; això vol dir que no has de fer res amb què no et sentis còmoda. Que us sentiu acollides, sostingudes i segures és una de les meves missions.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary>Tinc dubtes sobre si aquest retir és per mi.</summary>
                <div className="faq-body">
                  <p>Contacta&apos;m i valorem juntes el teu cas.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary>Tens alguna altra pregunta?</summary>
                <div className="faq-body">
                  <p>Serà un plaer respondre&apos;t per WhatsApp.</p>
                  <p style={{ marginTop: "1rem" }}>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra" style={{ fontSize: "clamp(.95rem, 1.8vw, 1.05rem)" }}>
                      <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.2rem", height: "1.2rem", flexShrink: 0 }} aria-hidden="true">
                        <path d="M19.05 4.91A10 10 0 0 0 12 2a10 10 0 0 0-8.66 15l-1.3 4.74 4.86-1.27A10 10 0 1 0 19.05 4.91Zm-7.05 15.4a8.27 8.27 0 0 1-4.22-1.16l-.3-.18-2.88.75.77-2.81-.2-.31A8.31 8.31 0 1 1 20.3 12a8.34 8.34 0 0 1-8.3 8.31Zm4.55-6.22c-.25-.13-1.48-.73-1.71-.81s-.4-.13-.56.13-.65.81-.79.97-.29.18-.54.06a6.78 6.78 0 0 1-2-1.23 7.56 7.56 0 0 1-1.4-1.74c-.14-.25 0-.38.11-.51s.25-.29.37-.43a1.62 1.62 0 0 0 .25-.41.46.46 0 0 0 0-.44c-.06-.13-.56-1.34-.76-1.83s-.4-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.81 2.81 0 0 0-.88 2.1 4.91 4.91 0 0 0 1 2.59 11.16 11.16 0 0 0 4.27 3.77 14.43 14.43 0 0 0 1.42.52 3.43 3.43 0 0 0 1.57.1 2.58 2.58 0 0 0 1.69-1.19 2.1 2.1 0 0 0 .14-1.19c-.06-.1-.22-.16-.47-.28Z"/>
                      </svg>
                      Escriu-me per WhatsApp
                    </a>
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="wrap">
            <div className="cta-block">
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)", lineHeight: 1.3 }}>Estàs preparada<br />per <span className="em-sub">començar a cuidar la teva salut femenina</span><br />amb les <span className="em-sub">Cures per a la teva Matriu</span><br />que coneixeràs en aquest retir?</h2>
              <p style={{ marginTop: "1.8rem" }}>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.4rem", height: "1.4rem", flexShrink: 0 }} aria-hidden="true">
                    <path d="M19.05 4.91A10 10 0 0 0 12 2a10 10 0 0 0-8.66 15l-1.3 4.74 4.86-1.27A10 10 0 1 0 19.05 4.91Zm-7.05 15.4a8.27 8.27 0 0 1-4.22-1.16l-.3-.18-2.88.75.77-2.81-.2-.31A8.31 8.31 0 1 1 20.3 12a8.34 8.34 0 0 1-8.3 8.31Zm4.55-6.22c-.25-.13-1.48-.73-1.71-.81s-.4-.13-.56.13-.65.81-.79.97-.29.18-.54.06a6.78 6.78 0 0 1-2-1.23 7.56 7.56 0 0 1-1.4-1.74c-.14-.25 0-.38.11-.51s.25-.29.37-.43a1.62 1.62 0 0 0 .25-.41.46.46 0 0 0 0-.44c-.06-.13-.56-1.34-.76-1.83s-.4-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.81 2.81 0 0 0-.88 2.1 4.91 4.91 0 0 0 1 2.59 11.16 11.16 0 0 0 4.27 3.77 14.43 14.43 0 0 0 1.42.52 3.43 3.43 0 0 0 1.57.1 2.58 2.58 0 0 0 1.69-1.19 2.1 2.1 0 0 0 .14-1.19c-.06-.1-.22-.16-.47-.28Z"/>
                  </svg>
                  Escriu-me per WhatsApp
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          Cures de Matriu · Retir d&apos;un dia · Gavina Freixa Rius
        </div>
      </footer>
    </div>
  );
}
