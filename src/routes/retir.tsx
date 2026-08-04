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
    align-items:start;
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
    padding:2.5rem 0 5.5rem;
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
    font-size:clamp(1rem, 4.5vw, 5rem);
    letter-spacing:.03em;
    text-transform:uppercase;
    max-width:none;
    text-shadow:0 8px 30px rgba(0,0,0,.22);
  }
  .rt .hero-sub{
    margin:.9rem 0 0;
    font-family:Georgia, "Times New Roman", serif;
    font-size:clamp(0.95rem, 2.5vw, 2rem);
    color:rgba(255,255,255,.92);
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
    font-family:Georgia,"Times New Roman",serif;
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
  .rt p{margin:.75rem 0 0; color:#6b5347; font-size:clamp(1.05rem, 1.8vw, 1.3rem); line-height:1.65; font-family:Georgia,"Times New Roman",serif;}
  .rt p:first-child{margin-top:0}
  .rt .lead{font-size:clamp(1.05rem, 1.8vw, 1.3rem); color:#6b5347; font-family:Georgia,"Times New Roman",serif;}
  .rt strong{font-weight:800; color:#6b5347}

  .rt .bullets{list-style:none; padding:0; margin:1.2rem 0 0; display:grid; gap:.9rem;}
  .rt .bullets li{position:relative; padding-left:1.45rem; color:#6b5347; font-size:clamp(1.05rem, 1.8vw, 1.3rem); line-height:1.6; font-family:Georgia,"Times New Roman",serif;}
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
  .rt .timeline-item{display:grid; grid-template-columns:10rem 1fr; gap:1.2rem; padding:1.2rem 0; border-top:1px solid rgba(138,75,52,.12);}
  .rt .timeline-item:last-child{border-bottom:1px solid rgba(138,75,52,.12);}
  .rt .timeline-time{font-weight:700; color:#6b5347; font-size:clamp(1.05rem, 1.8vw, 1.3rem); padding-top:.15rem; line-height:1.3; font-family:Georgia,"Times New Roman",serif;}
  .rt .timeline-desc{color:#6b5347; font-size:clamp(1.05rem, 1.8vw, 1.3rem); line-height:1.6; margin:0; font-family:Georgia,"Times New Roman",serif;}
  .rt .pre-event{background:linear-gradient(135deg, #fceae3, #fef5f1); border-left:4px solid var(--terra); border-radius:1.4rem; padding:clamp(1.4rem,3vw,2.4rem); margin-top:1.8rem;}
  .rt .pre-event h3{margin-bottom:1rem; color:var(--terra-fosc);}

  /* INVERSIÓ */
  .rt .destacat{background:linear-gradient(135deg,#fceae3,#fef5f1); border-left:4px solid var(--terra); border-radius:1rem; padding:clamp(1.2rem,3vw,2rem); margin-top:1.6rem; font-size:clamp(1.15rem, 2.2vw, 1.4rem); color:var(--terra-fosc); line-height:1.6; font-family:Georgia,"Times New Roman",serif;}
  .rt .destacat p{color:var(--terra-fosc); font-size:inherit; line-height:inherit; font-family:inherit; margin-top:.6rem;}
  .rt .com-ho-farem{background:linear-gradient(135deg,#fceae3,#fef5f1); border-left:4px solid var(--terra); border-radius:1rem; padding:clamp(1.2rem,3vw,2rem); margin-top:2.2rem;}
  .rt .pricing-card{padding:clamp(1.8rem, 3.4vw, 2.8rem); border-radius:2rem; background:linear-gradient(180deg, #fceae3 0%, #fef5f1 100%); border:1px solid rgba(138,75,52,.16); box-shadow:0 22px 65px rgba(84,54,34,.10);}
  .rt .price-number{font-family:Georgia, "Times New Roman", serif; color:var(--terra); font-size:clamp(2.5rem, 6vw, 4.5rem); font-weight:900; line-height:1; margin:1.4rem 0 .4rem;}
  .rt .price-note{font-size:clamp(1.05rem, 1.8vw, 1.2rem); color:var(--muted); margin:.5rem 0 0;}

  /* CTA */
  .rt .cta-block{background:linear-gradient(135deg,#e1bda6 0%,#c5a595 100%); border-radius:2rem; padding:clamp(2rem,4vw,3.2rem); text-align:center; box-shadow:0 30px 80px rgba(160,115,90,.22);}
  .rt .cta-block h2{color:#4a2e22; margin-bottom:1rem;}
  .rt .cta-block p{color:#5d3c2c;}

  /* TESTIMONIS */
  .rt .testi-carousel{display:flex; align-items:center; gap:1.2rem;}
  .rt .testi-track{flex:1; overflow:hidden;}
  .rt .testi-card{background:#fffdf8; border-radius:1.7rem; padding:2rem 2.2rem; box-shadow:0 4px 20px -8px rgba(90,40,20,.1); border:1px solid rgba(138,75,52,.1);}
  .rt .testi-card p{font-size:clamp(1.05rem, 1.8vw, 1.3rem); color:#6b5347; line-height:1.72; margin-bottom:1rem; font-family:Georgia,"Times New Roman",serif;}
  .rt .testi-card cite{font-style:normal; font-weight:800; font-size:.88rem; color:var(--terra);}
  .rt .testi-arrow{flex-shrink:0; width:2.6rem; height:2.6rem; border-radius:50%; border:none; background:var(--terra); color:#fff; font-size:1.5rem; line-height:1; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .2s, transform .15s;}
  .rt .testi-arrow:hover{background:var(--terra-fosc); transform:scale(1.08);}
  .rt .testi-dots{display:flex; justify-content:center; gap:.55rem; margin-top:1.4rem;}
  .rt .testi-dot{width:.5rem; height:.5rem; border-radius:50%; background:var(--mel); border:none; cursor:pointer; padding:0; transition:background .2s, transform .2s;}
  .rt .testi-dot.active{background:var(--terra); transform:scale(1.3);}

  /* FAQ */
  .rt .faq{display:grid; gap:.7rem; margin-top:1.6rem;}
  .rt .faq-item{border:1px solid rgba(138,75,52,.15); border-radius:1.2rem; overflow:hidden; background:#fffdf8;}
  .rt .faq-item summary{list-style:none; cursor:pointer; padding:1.15rem 1.4rem; font-weight:700; font-size:clamp(1.05rem,1.8vw,1.3rem); color:#6b5347; font-family:Georgia,"Times New Roman",serif; display:flex; justify-content:space-between; align-items:center; gap:1rem; user-select:none;}
  .rt .faq-item summary::-webkit-details-marker{display:none;}
  .rt .faq-item summary::after{content:"+"; font-size:1.4rem; font-weight:400; color:var(--terra); flex-shrink:0; transition:transform .2s;}
  .rt .faq-item[open] summary::after{transform:rotate(45deg);}
  .rt .faq-item[open] summary{border-bottom:1px solid rgba(138,75,52,.1);}
  .rt .faq-body{padding:1.1rem 1.4rem 1.3rem; color:#6b5347; font-size:clamp(1.05rem,1.8vw,1.3rem); line-height:1.65; font-family:Georgia,"Times New Roman",serif;}
  .rt .faq-body p{margin:.6rem 0 0; color:#6b5347; font-size:inherit; line-height:inherit; font-family:inherit;}
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
    text: "Vaig participar en el retir \"El foc de les Dones\" i l'acompanyament de la Gavina va ser molt bonic. Ens va fer connectar amb el cos i treballar les creences limitants, sortir del soroll de la ment i per mi va ser molt alliberador. I fer-ho amb una tribu de dones és una experiència molt més potent. Molt recomanable per a totes les dones en qualsevol edat i etapa de la seva vida.",
    name: "Pilar, A.",
  },
  {
    text: "Vaig conèixer la Gavina per primera vegada al retir Haseya, on era una de les facilitadores. Amb la seva manera d'acompanyar-nos, aconseguia crear espais on les dones ens sentíem segures per mostrar-nos tal com érem. Ens ajudava a conèixer millor el nostre cos, a escoltar les nostres necessitats i a guanyar confiança tant en nosaltres mateixes com en el grup. Aquella experiència va ser tan enriquidora que, l'any següent, vaig decidir repetir i participar en el retir El Foc de les Dones. Entre cants, temazcal i danses, vam aprofundir en diferents aspectes relacionats amb el climateri, el plaer i la Ira Sagrada. Van ser vivències que em van permetre connectar amb mi mateixa i amb altres dones des d'un lloc més sincer, lliure i conscient. Guardo aquests espais amb molta estima, perquè em van oferir eines, aprenentatges i moments compartits que encara avui continuen formant part del meu camí.",
    name: "Ruth, A.",
  },
  {
    text: "En els espais que la Gavina organitza, ho fa amb molt mimo i cura, cada detall en l'arribada i durant les diferents activitats. La seva escolta, la seva entrega, el respecte pels diferents ritmes aporta escolta, tacte, carinyo en el seu acompanyament. Recordo que tant les meditacions per connectar amb l'úter com el moviment corporal en grup per mi va ser molt alliberador. La Gavina és d'aquestes dones amb una sensibilitat, un sosté i una fortalesa que ajuden a transitar els moviments emocionals que emergeixen. Gràcies, gràcies, gràcies, Gavina!!",
    name: "Montse, P.",
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
          <h1>HABITA LA TEVA MATRIU</h1>
          <p className="hero-sub">Retir de reconnexió, presència<br />i cures ancestrals</p>
          <p className="hero-date">Dissabte 17 octubre</p>
          <p className="hero-date">Les Franqueses del Vallès</p>
        </div>
      </header>

      <main>
        {/* DE QUÈ VA */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>De què va el retir?</h2>
            </div>
            <div style={{ display: "grid", gap: ".55rem" }}>
              <p style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)", color: "#6b5347", fontWeight: 700, margin: 0 }}>
                Un dia per <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "3px", textUnderlineOffset: "6px" }}>tornar al teu centre</span>.
              </p>
              <p style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)", color: "#6b5347", fontWeight: 700, margin: 0 }}>
                Un dia per escoltar, sentir i reconnectar amb <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "3px", textUnderlineOffset: "6px" }}>la saviesa que habita en la teva matriu</span>.
              </p>
              <p style={{ margin: 0, fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", color: "var(--terra)", fontWeight: 700, fontStyle: "normal", textAlign: "center" }}>
                Perqu&egrave; vivim desconnectades de la nostra naturalesa femenina, dels nostres ritmes naturals<br />
                i de la saviesa que habita en la nostra matriu.
              </p>
            </div>
            <div className="destacat" style={{ marginTop: "1.8rem" }}>
              <p style={{ fontWeight: 700, color: "var(--terra)", margin: 0 }}>Aquest retir és una invitació a parar, respirar i escoltar el teu cos i especialment la teva matriu per:</p>
              <ul style={{ listStyle: "none", padding: 0, margin: ".9rem 0 0", display: "grid", gap: ".75rem" }}>
                {[
                  "Començar a posar consciència en la teva salut femenina des de la mirada de la matriu.",
                  "Experimentar algunes de les medicines naturals que han acompanyat les dones durant milers d’anys.",
                  "Nodrir i despertar la relació amb la teva matriu amb consciència i presència.",
                  "Compartir un espai de confiança amb altres dones, recordant la força i la saviesa que emergeixen quan ens sostenim juntes.",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".5rem" }}>
                    <span style={{ flexShrink: 0 }}>🌿</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "1.2rem" }}>Un dia per recordar-nos que quan <strong style={{ color: "var(--terra)" }}>HABITEM</strong> la nostra matriu, ens podem</p>
              <p style={{ fontWeight: 700, color: "var(--terra)", lineHeight: 1.4, marginTop: ".3rem" }}>GESTAR,<br />NODRIR,<br />PARIR</p>
              <p style={{ marginTop: ".3rem" }}>tantes vegades com necessitem.</p>
              <p style={{ marginTop: "1.4rem", textAlign: "center", color: "var(--terra)", fontWeight: 700, textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                No és només un dia per conèixer noves eines.<br />
                És un dia per obrir un espai d&apos;escolta, presència i reconnexió amb la teva matriu.
              </p>
              <div style={{ textAlign: "center", marginTop: "1.8rem" }}>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                  Vull viure aquesta experiència
                </a>
              </div>
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
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: ".75rem", fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", color: "var(--terra-fosc)" }}>
                {[
                  "Escoltaràs la teva matriu. A través del contacte i la meditació guiada.",
                  "L'hi donaràs moviment i veu. Amb pràctica pelvicuterina, respiració i veu.",
                  "La nodriràs. Amb plantes i escalfor.",
                  "Obrirem un espai de cercle compartit i d'escolta.",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".5rem" }}>
                    <span style={{ flexShrink: 0 }}>🌿</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop: "1.4rem", textAlign: "center", color: "var(--terra)", fontWeight: 700, fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                Durant aquest dia no només parlarem de salut femenina.<br />
                És un dia per sentir, experimentar i començar a habitar la teva matriu.
              </p>
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
              <li>Estiguis menstruant o transitant una nova etapa del teu cicle vital, i sentis que el teu cos et demana fer canvis: parar, escoltar-te i començar a cuidar-te des d&apos;un lloc més profund.</li>
              <li>Et sents cansada, amb poca energia, desconnectada de tu mateixa o sents que necessites recuperar vitalitat i tornar a escoltar el teu cos.</li>
              <li>Tens ganes de regalar-te un dia d&apos;escolta, nutrició i cura dedicat a la teva matriu, compartint l&apos;experiència amb altres dones.</li>
              <li>Et criden les medicines naturals i ancestrals com una manera de reconnectar amb el teu cos i cuidar la teva salut femenina des d&apos;una mirada més natural i conscient.</li>
            </ul>
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Vull reservar la meva plaça
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

            <p style={{ fontWeight: 700, color: "var(--terra-fosc)", marginTop: "1.8rem", fontSize: "clamp(1.05rem, 1.8vw, 1.3rem)" }}>El dia del retir</p>
            <div className="timeline" style={{ marginTop: ".8rem" }}>
              <div className="timeline-item">
                <span className="timeline-time">9.30 – 9.50h</span>
                <p className="timeline-desc">Arribades</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-time">10h – 14h</span>
                <div>
                  <p className="timeline-desc">Sentir, despertar i activar la matriu. Moviment pelvicuterí i veu. Nutrició per a la matriu. Cataplasmes amb plantes. Meditació uterina.</p>
                  <p className="timeline-desc" style={{ marginTop: ".5rem" }}>Pausa breu a mig matí amb infusions medicinals.</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="timeline-time">14h – 15.30h</span>
                <p className="timeline-desc">Dinar lleuger i estona de quietud</p>
              </div>
              <div className="timeline-item">
                <span className="timeline-time">15.30 – 19.00h</span>
                <p className="timeline-desc">Massatges matriu i vapors pelvicovaginals. Compartirs i tancament.</p>
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
              <p className="price-number">120€</p>
              <p style={{ fontWeight: 700, color: "var(--terra-fosc)", marginTop: "1.4rem" }}>Inclou:</p>
              <ul className="bullets" style={{ marginTop: ".8rem" }}>
                <li>La sessió d&apos;1h30min online uns dies previs al retir: &ldquo;Òrgans femenins i els 5 imprescindibles per cuidar la nostra matriu&rdquo;</li>
                <li>El meu acompanyament en el retir</li>
                <li>La sessió en directe d&apos;octubre (dimecres 28, de 17.45 a 19.15 h) a Matrius en Cercle per continuar profunditzant en la dona que ets avui</li>
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
                <p className="lead">Soc la Gavina i el meu gran despertar va començar fa tretze anys, quan vaig ser mare per primera vegada.</p>
                <p className="lead" style={{ marginTop: ".8rem" }}>La maternitat em va portar a mirar-me profundament i a revisar la relació amb el meu cos, la meva feminitat, la meva sexualitat i la meva matriu. Va ser l&apos;inici d&apos;un camí de recerca, transformació i retorn a mi mateixa que encara avui continuo recorrent.</p>
                <p className="lead" style={{ marginTop: ".8rem" }}>Amb els anys he anat integrant diferents mirades i recursos que han donat forma a la meva manera d&apos;acompanyar: Teràpia Gestalt, Ginecologia Natural i Ancestral, Ciclicitat i Sexualitat Alquímica Femenina, Alimentació Regenerativa, Fitoginecologia, Moviment Pèlvic i altres recursos naturals.</p>
              </div>
              <div className="soft-img">
                <img src="/matrius/assets/gavina-nova.jpg" alt="Retrat de la Gavina" loading="lazy" />
              </div>
            </div>
            <p className="lead" style={{ marginTop: "1.8rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>Però sobretot, aquest camí m&apos;ha ensenyat que <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "3px", textUnderlineOffset: "6px" }}>la salut femenina no es transforma només incorporant eines, sinó recuperant la relació amb el nostre cos i amb la saviesa que ja habita en la nostra matriu</span>.</p>
            <p className="lead" style={{ marginTop: "1.8rem", fontWeight: 700 }}>Crec profundament que hi ha processos que necessiten ser viscuts en companyia d&apos;altres dones. Perquè quan ens trobem, compartim i ens sostenim, alguna cosa profunda es transforma. No és el mateix caminar soles que habitar un espai on altres dones també estan escoltant-se, recordant-se i reconnectant amb elles mateixes.</p>
            <p className="lead" style={{ marginTop: "1.2rem", fontWeight: 700 }}>Amb aquesta experiència t&apos;acompanyo a reconnectar amb el teu centre de poder: la teva matriu. Un espai intern des d&apos;on poder escoltar-te, prendre decisions més alineades amb tu i caminar amb més claredat i confiança.</p>
            <p className="lead" style={{ marginTop: "1.2rem", fontWeight: 700 }}>Aquest és el sentit d&apos;aquest retir: crear un espai segur i sostingut on puguis parar, sentir i recordar la saviesa que ja habita en tu.</p>
          </div>
        </section>

        {/* DESPRÉS */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Després d&apos;aquest retir…</h2>
            </div>
            <ul className="bullets" style={{ marginTop: "1.6rem" }}>
              <li>Tornaràs a connectar amb la teva matriu i el teu cicle, tant si encara menstrues com si no.</li>
              <li>Comprendràs millor la relació amb el teu cos i la teva matriu.</li>
              <li>Hauràs experimentat eines i medicines naturals d&apos;autocura per a la teva matriu, i que podràs continuar explorant en el teu dia a dia.</li>
              <li>Sentiràs més connexió amb el teu cos, la teva ciclicitat i la teva energia femenina, i això t&apos;aportarà calma i claredat i et connectarà amb el plaer.</li>
            </ul>
            <div className="soft-img" style={{ marginTop: "2.2rem", height: "460px" }}>
              <img src="/retir/assets/retir3.jpg" alt="Dones abraçades en cercle" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", aspectRatio: "unset", objectPosition: "center top" }} />
            </div>
            <p style={{ marginTop: "1.4rem", textAlign: "center", color: "var(--terra)", fontWeight: 700, fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
              Aquest retir és una invitació a reconnectar amb una saviesa que ja habita en tu.<br />
              És un dia per reconnectar amb la saviesa que habita en la teva matriu.
            </p>
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
              <details className="faq-item">
                <summary>M&apos;atrau la proposta, però em tira enrera fer-la en grup</summary>
                <div className="faq-body">
                  <p>Contacta&apos;m i en parlem.</p>
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
              <h2 style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)", lineHeight: 1.3, margin: 0 }}>
                Si sents la crida de tornar al teu cos, <span className="em-sub">reconnectar amb la teva matriu i recordar la saviesa que hi habita</span>...
              </h2>
              <p style={{ marginTop: "1.4rem", fontSize: "clamp(1.1rem, 2.4vw, 1.7rem)", fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700, lineHeight: 1.4 }}>
                Et convido a regalar-te un dia per parar, sentir<br />i comen&ccedil;ar a habitar la teva matriu.
              </p>
              <p style={{ marginTop: "1.8rem" }}>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Vull viure aquesta experi&egrave;ncia
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
