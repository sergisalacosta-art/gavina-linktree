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
      linear-gradient(90deg, rgba(80,42,16,.68), rgba(150,95,35,.10) 55%, rgba(60,32,10,.42)),
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
    background:rgba(200,145,55,.18);
    mix-blend-mode:multiply;
    pointer-events:none;
  }
  .rt .hero:after{
    content:"";
    position:absolute;
    inset:auto 0 0 0;
    height:40%;
    background:linear-gradient(180deg, transparent, rgba(70,35,10,.55));
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
    color:var(--mel);
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
    color:white;
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
    color:rgba(255,255,255,.92);
    font-weight:400;
  }
  .rt .hero-date{
    margin:.5rem 0 0;
    font-size:clamp(1rem, 2vw, 1.35rem);
    color:var(--mel);
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
  .rt .btn-primary{background:var(--mel); color:#221a14}
  .rt .btn-ghost{border-color:rgba(255,255,255,.55); color:white; background:rgba(255,255,255,.08); backdrop-filter:blur(6px)}
  .rt .btn-terra{background:var(--terra); color:white}

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

  /* TIMELINE */
  .rt .timeline{display:grid; gap:0; margin-top:1.8rem;}
  .rt .timeline-item{display:grid; grid-template-columns:7rem 1fr; gap:1.2rem; padding:1.2rem 0; border-top:1px solid rgba(138,75,52,.12);}
  .rt .timeline-item:last-child{border-bottom:1px solid rgba(138,75,52,.12);}
  .rt .timeline-time{font-weight:700; color:var(--terra); font-size:.95rem; padding-top:.15rem; line-height:1.3;}
  .rt .timeline-desc{color:var(--muted); font-size:clamp(1.05rem, 1.8vw, 1.2rem); line-height:1.6; margin:0;}
  .rt .pre-event{background:linear-gradient(135deg, #f7ead3, #fff8ea); border-left:4px solid var(--terra); border-radius:1.4rem; padding:clamp(1.4rem,3vw,2.4rem); margin-top:1.8rem;}
  .rt .pre-event h3{margin-bottom:1rem; color:var(--terra-fosc);}

  /* INVERSIÓ */
  .rt .destacat{background:linear-gradient(135deg,#f7ead3,#fff5e4); border-left:4px solid var(--terra); border-radius:1rem; padding:clamp(1.2rem,3vw,2rem); margin-top:1.6rem; font-size:clamp(1.15rem, 2.2vw, 1.4rem); color:var(--terra-fosc); line-height:1.6; font-family:Georgia,"Times New Roman",serif; font-style:italic;}
  .rt .com-ho-farem{background:linear-gradient(135deg,#f7ead3,#fff5e4); border-left:4px solid var(--terra); border-radius:1rem; padding:clamp(1.2rem,3vw,2rem); margin-top:2.2rem;}
  .rt .pricing-card{padding:clamp(1.8rem, 3.4vw, 2.8rem); border-radius:2rem; background:linear-gradient(180deg, #f7ead3 0%, #fff5e4 100%); border:1px solid rgba(138,75,52,.16); box-shadow:0 22px 65px rgba(84,54,34,.10);}
  .rt .price-number{font-family:Georgia, "Times New Roman", serif; color:var(--terra); font-size:clamp(2.5rem, 6vw, 4.5rem); font-weight:900; line-height:1; margin:1.4rem 0 .4rem;}
  .rt .price-note{font-size:clamp(1.05rem, 1.8vw, 1.2rem); color:var(--muted); font-style:italic; margin:.5rem 0 0;}

  /* CTA */
  .rt .cta-block{background:var(--terra); border-radius:2rem; padding:clamp(2rem,4vw,3.2rem); text-align:center; box-shadow:0 30px 80px rgba(93,52,40,.22);}
  .rt .cta-block h2{color:white; margin-bottom:1rem;}
  .rt .cta-block p{color:rgba(255,255,255,.88);}

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
    text: "El Cercle de Dones que facilita la Gavina m'aporta alineació entre el que sento, desitjo i faig, cap-cor-cos. En les sessions em connecto amb el sentiment de pertinença, sento gaudi, sento que la ment es mou en consonància amb la resta, sense que pesi tant. I aquesta alineació és just l'oposat al que moltes vegades em porta el dia a dia, que es alienació. Canvia una lletra de lloc, però ho canvia tot. Després de cada cercle m'emporto més unió amb les companyes, allà trobo mirades i actituds còmplices, que acaronen per dins. I visualitzo la Gavina com una sàvia xamana, a la qual acudir i confiar. Trobar dones tan potents com ella, amb aquesta mirada reivindicativa i amorosa, m'encanta i em connecta amb allò que per mi és important.",
    name: "Alba C.",
  },
  {
    text: "Per mi l'acompanyament de la Gavina ha sigut sincer, honest, entregat, intuïtiu i professional. L'he sentida molt propera, entregada i sincera amb mi i amb totes les mares del grup. Això ha sigut el més valuós que m'emporto d'aquesta experiència. El cercle de dones mares ha sigut una experiència increïble, sobretot per l'acompanyament i professionalitat de la Gavina.",
    name: "Montse G.",
  },
  {
    text: "M'he sentit immensament acompanyada, escoltada, compresa, sostinguda en tot moment tan per part de la Gavina com la resta de mares. Per mi l'acompanyament de la Gavina ha estat excel·lent.",
    name: "Ester V.",
  },
  {
    text: "L'acompanyament de la Gavina per mi ha estat impecable; sempre acurat i amb gran contingut de valor. És una gran terapeuta, una gran professional i una gran acompanyant de mares. Amb ella m'he sentit molt sostinguda, acompanyada i escoltada; treballa amb molta delicadesa, respecte i amor des del no judici en totes les seves intervencions. M'alegro molt d'haver entrat en aquest cercle inicialment sense expectativa i que m'ha ajudat tant i m'ha transformat com a persona i com a mare. Sempre estaré agraïda a la Gavina per aquest projecte preciós que ha creat.",
    name: "Josefina C.",
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
          <p className="kicker">Retir presencial · Les Franqueses del Vallès</p>
          <h1>Cures de Matriu</h1>
          <p className="hero-sub">Retir d&apos;un dia</p>
          <p className="hero-date">Dissabte 17 octubre</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={WA_URL} target="_blank" rel="noopener noreferrer">Reserva la teva plaça</a>
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
            <p style={{ fontSize: "clamp(1.25rem, 2.8vw, 1.9rem)", color: "var(--terra)", lineHeight: 1.45, fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 400 }}>Si estàs desconnectada de la teva matriu, estàs desconnectada del teu poder intern. I ja sabem que així és com ens vol aquest sistema on vivim: desempoderades.</p>
            <ul className="bullets" style={{ marginTop: "1.6rem" }}>
              <li>Un dia per <strong>(re)connectar amb la teva matriu…</strong></li>
              <li>Un dia per <strong>nodrir-te amb les cures femenines</strong> que han acompanyat les dones de tantes tradicions mil·lenàries…</li>
              <li>Un dia per recordar-nos que <strong>des de la matriu ens gestem, ens nodrim i ens parim</strong> des que naixem fins que morim</li>
            </ul>
            <div className="com-ho-farem">
              <p style={{ fontSize: "clamp(1.25rem, 2.8vw, 1.9rem)", color: "var(--terra)", lineHeight: 1.45, fontFamily: "Georgia, 'Times New Roman', serif", fontWeight: 700, margin: "0 0 1rem" }}>Com ho farem?</p>
              <p><strong>Fent un tastet de diverses medicines ancestrals que ens ajudaran a començar a despertar i revitalitzar la matriu:</strong></p>
              <ul className="bullets">
                <li>La ubicarem i sentirem com està el seu batec</li>
                <li>L&apos;hi donarem moviment i flexibilitat</li>
                <li>La humidificarem i li donarem escalfor</li>
                <li>La nodrirem amb plantes</li>
              </ul>
              <p style={{ marginTop: "1.4rem" }}>Connectarem amb la medicina de les plantes en combinació amb els diferents elements que alquimitzarem per rebre&apos;n els beneficis.</p>
              <p><strong>I ho farem juntes, entre dones.</strong></p>
            </div>
            <div className="grid-3">
              <div className="soft-img soft-img-h">
                <img src="/retir/assets/massatge.jpg" alt="Massatge de matriu" loading="lazy" />
              </div>
              <div className="soft-img soft-img-h">
                <img src="/retir/assets/vv.jpg" alt="Vapors pelvicovaginals amb plantes" loading="lazy" />
              </div>
              <div className="soft-img soft-img-h">
                <img src="/retir/assets/rebozo.jpg" alt="Massatge pelvic amb rebozo" loading="lazy" />
              </div>
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
          </div>
        </section>

        {/* QUAN I ON */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Quan i on?</h2>
            </div>
            <p className="lead"><strong>Dissabte 17 d&apos;octubre, de 10h a 19h.</strong></p>
            <p className="lead" style={{ marginTop: ".6rem" }}>En un espai preciós de <strong>Les Franqueses del Vallès</strong>.</p>
            <div className="grid-3" style={{ marginTop: "2rem" }}>
              <div className="soft-img soft-img-h">
                <img src="/retir/assets/casa1.jpg" alt="Exterior de l'espai" loading="lazy" />
              </div>
              <div className="soft-img soft-img-h">
                <img src="/retir/assets/casa2.jpeg" alt="Camí d'entrada a l'espai" loading="lazy" />
              </div>
              <div className="soft-img soft-img-h">
                <img src="/retir/assets/casa3.jpg" alt="Vistes des de l'interior" loading="lazy" />
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

            <div className="timeline" style={{ marginTop: "2rem" }}>
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
          </div>
        </section>

        {/* INVERSIÓ */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Inversió</h2>
            </div>
            <div className="pricing-card">
              <p style={{ margin: 0, color: "var(--muted)" }}>El preu d&apos;aquesta trobada és de</p>
              <p className="price-number">120€</p>
              <p style={{ fontWeight: 700, color: "var(--terra-fosc)", marginTop: "1.4rem" }}>Inclou:</p>
              <ul className="bullets" style={{ marginTop: ".8rem" }}>
                <li>La sessió d&apos;1h30min online uns dies previs al retir: <em>&ldquo;Òrgans femenins i els 5 imprescindibles per cuidar la nostra matriu&rdquo;</em></li>
                <li>El meu acompanyament des del dia de la sessió online fins uns dies després del retir</li>
                <li>El lloguer de la sala</li>
                <li>L&apos;organització i la gestió del retir</li>
              </ul>
              <p className="price-note" style={{ marginTop: "1.6rem" }}>* El dinar no està inclòs. Cal que portis el teu dinar i també alguna cosa lleugera per picar a mig matí.</p>
              <p className="price-note">* No podrem escalfar menjar ni podrem sortir de l&apos;espai per anar a comprar res.</p>
            </div>
          </div>
        </section>

        {/* FACILITADORA */}
        <section>
          <div className="wrap bio">
            <div className="soft-img">
              <img src="/matrius/assets/gavina-nova.jpg" alt="Retrat de la Gavina" loading="lazy" />
            </div>
            <div className="card text-card">
              <div className="section-title">
                <h2>Facilitadora</h2>
              </div>
              <p className="lead">Soc la Gavina i t&apos;acompanyo a <strong>cuidar i transformar la teva salut femenina</strong> a partir de <strong>rutines d&apos;autocura conscients i pautes de prevenció reals, respectuoses i naturals,</strong> lluny de fàrmacs i intervencions quirúrgiques.</p>
              <p className="lead" style={{ marginTop: "1.2rem" }}>La meva missió és <strong>ajudar-te a integrar nous hàbits</strong> en el teu dia a dia com a base sòlida per connectar amb el teu cos. Juntes, adaptarem aquestes pràctiques <strong>segons les teves necessitats i el moment vital</strong> en què et trobis: <em>Alimentació regenerativa, Desparasitació amb plantes, Moviment pelvicuterí, Vapors pelvicovaginals, Massatge de matriu, Automassatge de pits…</em></p>
              <p style={{ marginTop: "1.4rem" }}><strong>Si estàs disposada a comprometre&apos;t amb tu</strong>, et guio en aquest camí de <strong>transformació amorosa cap a tu</strong>.</p>
            </div>
          </div>
        </section>

        {/* DESPRÉS */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Després d&apos;aquest retir…</h2>
            </div>
            <p className="lead">Tingues present que fa masses anys que estem vivint en desequilibri en els nostres cossos; i <strong>recuperar el benestar integral demana compromís, amor i temps.</strong></p>
            <blockquote className="destacat">
              Aquest retir és un inici per provar algunes de les medicines que han ajudat a cuidar, restaurar i mantenir la salut de les dones des de fa milers d&apos;anys.
            </blockquote>
            <ul className="bullets" style={{ marginTop: "1.6rem" }}>
              <li>Recordaràs <strong>on habita la teva energia femenina</strong> i com mantenir-la <strong>desperta i vital</strong></li>
              <li>Et sentiràs <strong>calmada, lleugera, clara, connectada</strong> amb el teu plaer i la teva matriu</li>
              <li>Sabràs <strong>què fer si tornes a perdre&apos;t</strong> en el camí</li>
              <li>Tornaràs a habitar el teu cos, recuperaràs claredat i començaràs a (re)connectar amb el teu cicle, <strong>tant si encara menstrues com si no</strong></li>
              <li>Coneixeràs i hauràs provat algunes de les <strong>medicines naturals i ancestrals</strong> que han usat les dones en diferents tradicions mil·lenàries</li>
            </ul>
            <div className="soft-img soft-img-h" style={{ marginTop: "2.2rem" }}>
              <img src="/retir/assets/retir3.jpg" alt="Dones abraçades en cercle" loading="lazy" />
            </div>
          </div>
        </section>

        {/* TESTIMONIS */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Testimonis</h2>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="wrap">
            <div className="cta-block">
              <h2>Reserva la teva plaça</h2>
              <p>Places limitades per cuidar el grup i a cada una.</p>
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
