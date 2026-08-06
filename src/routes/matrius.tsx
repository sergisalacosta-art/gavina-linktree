import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoImage from "@/assets/gavina-logo.png";

const WA_URL = "https://wa.me/34616351534";

export const Route = createFileRoute("/matrius")({
  component: MatriusPage,
});

const css = `
  .mp{
    --terra:#8a4b34;
    --terra-fosc:#5d3428;
    --mel:#e5b66d;
    --mel-suau:#f8df9a;
    --muted:#635d55;
    --blanc:#fffdf8;
    --max:1160px;
  }
  .mp *{box-sizing:border-box}
  .mp{
    color:#6b5347;
    background:var(--blanc);
    font-family:Georgia,"Times New Roman",serif;
    line-height:1.55;
    font-size:17px;
    overflow-x:hidden;
    min-height:100vh;
    position:relative;
  }
  .mp img{max-width:100%;display:block}
  .mp a{color:inherit;text-decoration:none}

  /* HERO */
  .mp .hero{
    min-height:86vh;
    position:relative;
    display:grid;
    align-items:end;
    background:
      linear-gradient(90deg, rgba(45,36,27,.50), rgba(45,36,27,.08) 44%, rgba(45,36,27,.32)),
      url("/matrius/assets/hero-new.png") center center / cover no-repeat;
    color:white;
    isolation:isolate;
    z-index:1;
  }
  .mp .hero:after{
    content:"";
    position:absolute;
    inset:auto 0 0 0;
    height:45%;
    background:linear-gradient(180deg, transparent, rgba(36,29,23,.52));
    z-index:-1;
  }
  .mp .hero-inner{
    width:min(var(--max), calc(100% - 40px));
    margin:0 auto;
    padding:7rem 0 5.5rem;
    position:relative;
    z-index:1;
  }
  .mp h1,.mp h2,.mp h3{
    font-family:Georgia,"Times New Roman",serif;
    color:var(--terra);
    line-height:1.06;
    margin:0;
    font-weight:700;
  }
  .mp h1{
    color:#e1bda6;
    font-size:clamp(1rem, 4.5vw, 5rem);
    letter-spacing:.03em;
    text-transform:uppercase;
    max-width:none;
    text-shadow:0 8px 30px rgba(0,0,0,.22);
  }
  .mp .subtitle{
    margin:.9rem 0 0;
    color:rgba(255,255,255,.92);
    font-size:clamp(0.95rem, 2.5vw, 2rem);
    font-family:Georgia,"Times New Roman",serif;
    font-weight:400;
    line-height:1.4;
  }
  .mp .hero-date{
    margin:.5rem 0 0;
    font-size:clamp(1rem, 2vw, 1.35rem);
    color:white;
    font-weight:700;
    font-family:Georgia,"Times New Roman",serif;
    letter-spacing:.03em;
  }

  /* BUTTONS */
  .mp .btn{
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
  .mp .btn:hover{transform:translateY(-2px)}
  .mp .btn-primary{background:#fff; color:#4a2e22}
  .mp .btn-terra{background:linear-gradient(135deg,#e1bda6 0%,#c5a595 100%); color:#4a2e22; font-size:clamp(1.15rem,2.2vw,1.45rem); padding:1.1rem 2.6rem; box-shadow:0 0 30px rgba(197,162,142,.48), 0 4px 18px rgba(160,118,95,.22); letter-spacing:.1em;}

  /* LAYOUT */
  .mp section{padding:clamp(2.8rem, 5vw, 5rem) 0; position:relative; z-index:1;}
  .mp .wrap{width:min(var(--max), calc(100% - 40px)); margin:0 auto;}
  .mp .cream{background:linear-gradient(180deg, rgba(244,234,215,.55), rgba(255,253,248,.9))}

  /* TYPOGRAPHY */
  .mp .section-title{display:flex; flex-direction:column; gap:.65rem; margin-bottom:2rem;}
  .mp .section-title h2{padding-bottom:.55rem; border-bottom:1.5px solid var(--terra); margin-bottom:0;}
  .mp h2{font-family:Georgia,"Times New Roman",serif; font-size:clamp(1.7rem, 4vw, 3.4rem); color:var(--terra); text-wrap:balance; font-weight:700; line-height:1.06; margin:0 0 1rem;}
  .mp h3{font-size:clamp(1.1rem, 2vw, 1.55rem); color:var(--terra-fosc); margin-bottom:.7rem; font-family:Georgia,"Times New Roman",serif;}
  .mp p{margin:.75rem 0 0; color:#6b5347; font-size:clamp(1.15rem, 2.2vw, 1.4rem); line-height:1.65; font-family:Georgia,"Times New Roman",serif;}
  .mp p:first-child{margin-top:0}
  .mp .lead{font-size:clamp(1.15rem, 2.2vw, 1.4rem); color:#6b5347; font-family:Georgia,"Times New Roman",serif;}
  .mp strong{font-weight:800; color:#6b5347}

  .mp .bullets{list-style:none; padding:0; margin:1.2rem 0 0; display:grid; gap:.9rem;}
  .mp .bullets li{position:relative; padding-left:1.45rem; color:#6b5347; font-size:clamp(1.15rem, 2.2vw, 1.4rem); line-height:1.6; font-family:Georgia,"Times New Roman",serif;}
  .mp .bullets li:before{content:""; position:absolute; left:0; top:.75em; width:.45rem; height:.45rem; border-radius:50%; background:var(--terra);}

  .mp .soft-img{border-radius:1.7rem; overflow:hidden; box-shadow:0 26px 70px rgba(55,40,25,.16);}
  .mp .soft-img img{width:100%; object-fit:cover; aspect-ratio:4/3; object-position:center;}
  .mp .grid-2-img{display:grid; grid-template-columns:1fr 1fr; gap:1.2rem; margin-top:2rem;}

  /* DESTACAT */
  .mp .destacat{background:linear-gradient(135deg,#fceae3,#fef5f1); border-left:4px solid var(--terra); border-radius:1rem; padding:clamp(1.2rem,3vw,2rem); margin-top:2rem; font-size:clamp(1.15rem, 2.2vw, 1.4rem); color:var(--terra-fosc); line-height:1.6; font-family:Georgia,"Times New Roman",serif;}
  .mp .destacat p{color:var(--terra-fosc); font-size:inherit; line-height:inherit; font-family:inherit; margin-top:.6rem;}
  .mp .destacat p:first-child{margin-top:0;}

  /* TESTIMONIALS */
  .mp .testi-carousel{display:flex; align-items:center; gap:1.2rem;}
  .mp .testi-track{flex:1; overflow:hidden;}
  .mp .testi-card{background:#fffdf8; border-radius:1.7rem; padding:2rem 2.2rem; box-shadow:0 4px 20px -8px rgba(90,40,20,.1); border:1px solid rgba(138,75,52,.1);}
  .mp .testi-card p{font-size:clamp(1.15rem, 2.2vw, 1.4rem); color:#6b5347; line-height:1.72; margin-bottom:1rem; font-family:Georgia,"Times New Roman",serif;}
  .mp .testi-card cite{font-style:normal; font-weight:800; font-size:.88rem; color:var(--terra);}
  .mp .testi-arrow{flex-shrink:0; width:2.6rem; height:2.6rem; border-radius:50%; border:none; background:var(--terra); color:#fff; font-size:1.5rem; line-height:1; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .2s, transform .15s;}
  .mp .testi-arrow:hover{background:var(--terra-fosc); transform:scale(1.08);}
  .mp .testi-dots{display:flex; justify-content:center; gap:.55rem; margin-top:1.4rem;}
  .mp .testi-dot{width:.5rem; height:.5rem; border-radius:50%; background:var(--mel); border:none; cursor:pointer; padding:0; transition:background .2s, transform .2s;}
  .mp .testi-dot.active{background:var(--terra); transform:scale(1.3);}

  /* FAQ */
  .mp .faq{display:grid; gap:.7rem; margin-top:1.6rem;}
  .mp .faq-item{border:1px solid rgba(138,75,52,.15); border-radius:1.2rem; overflow:hidden; background:#fffdf8;}
  .mp .faq-item summary{list-style:none; cursor:pointer; padding:1.15rem 1.4rem; font-weight:700; font-size:clamp(1.15rem,2.2vw,1.4rem); color:#6b5347; font-family:Georgia,"Times New Roman",serif; display:flex; justify-content:space-between; align-items:center; gap:1rem; user-select:none;}
  .mp .faq-item summary::-webkit-details-marker{display:none;}
  .mp .faq-item summary::after{content:"+"; font-size:1.4rem; font-weight:400; color:var(--terra); flex-shrink:0; transition:transform .2s;}
  .mp .faq-item[open] summary::after{transform:rotate(45deg);}
  .mp .faq-item[open] summary{border-bottom:1px solid rgba(138,75,52,.1);}
  .mp .faq-body{padding:1.1rem 1.4rem 1.3rem; color:#6b5347; font-size:clamp(1.15rem,2.2vw,1.4rem); line-height:1.65; font-family:Georgia,"Times New Roman",serif;}
  .mp .faq-body p{margin:.6rem 0 0; color:#6b5347; font-size:inherit; line-height:inherit; font-family:inherit;}
  .mp .faq-body p:first-child{margin-top:0;}

  /* CTA */
  .mp .cta-block{background:linear-gradient(135deg,#e1bda6 0%,#c5a595 100%); border-radius:2rem; padding:clamp(2rem,4vw,3.2rem); text-align:center; box-shadow:0 30px 80px rgba(160,115,90,.22);}
  .mp .cta-block h2{color:#4a2e22; margin-bottom:1rem;}
  .mp .cta-block p{color:#5d3c2c;}
  .mp .em-sub{display:inline; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 32' preserveAspectRatio='none'%3E%3Cpath d='M6,9 C28,4 65,10 105,6 C142,2 178,8 195,7 C199,11 198,20 193,23 C158,28 115,23 75,25 C40,27 11,23 4,21 C1,18 2,13 6,9 Z' fill='%23ffffff' fill-opacity='0.55'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-size:100% 100%; padding:0.12em 0.4em;}

  .mp footer{padding:3rem 0; background:#2d241d; color:rgba(255,255,255,.78); text-align:center; font-size:.94rem;}
  .mp .back-link{display:inline-flex; align-items:center; gap:.4rem; font-size:.88rem; color:var(--terra); padding:1.5rem 1.5rem 0; background:none; border:none; cursor:pointer; transition:color .2s; position:relative; z-index:1;}
  .mp .back-link:hover{color:var(--terra-fosc);}

  .mp .qui-grid{display:grid; grid-template-columns:1fr clamp(200px,32%,360px); gap:clamp(2rem,4vw,4rem); align-items:start;}
  .mp .proces-grid{display:grid; grid-template-columns:clamp(200px,35%,380px) 1fr; gap:clamp(1.5rem,3vw,3rem); align-items:start;}

  @media(max-width:900px){
    .mp .hero{min-height:74vh}
    .mp .grid-2-img{grid-template-columns:1fr}
    .mp .format-grid{grid-template-columns:repeat(2,1fr)}
    .mp .qui-grid{grid-template-columns:1fr}
    .mp .qui-photo{order:-1; margin-bottom:1rem}
    .mp .proces-grid{grid-template-columns:1fr}
    .mp .proces-photo{order:-1; margin-bottom:1rem}
  }
  @media(max-width:560px){
    .mp{font-size:16px}
    .mp .hero-inner,.mp .wrap{width:min(100% - 28px, var(--max))}
    .mp section{padding:2.4rem 0}
    .mp .btn{width:100%}
    .mp .format-grid{grid-template-columns:1fr}
  }
`;

const testimonialsData = [
  { text: "La Gavina em transmet molta confiança cap a una mirada més connectada amb la natura i la meva intuïció femenina. Sento que gran part dels missatges cap als canvis, el cos i la salut es miren molt des de la por i una visió molt medicalitzada. Ancestralment les dones s'acompanyaven entre elles, des de la seva saviesa i coneixements. Sento molta curiositat per provar l'acompanyament amb una dona sensible i empàtica com ella. Tenir a la Gavina és tot un regal!", name: "Brenda" },
  { text: "Feia temps que tenia problemes menstruals, amenorrea, sagnats intermenstruals i ja m'havien visitat diferents professionals (endocrina ginecòlegs, metges i fins i tot nutricionista sense gaire èxit). Vaig decidir començar amb la Gavina perquè volia provar una altra mirada, buscar l'arrel del problema des d'una perspectiva més natural i entenent el llenguatge del meu cos. La Gavina em va ensenyar a mirar-me com mai, a posar-me al centre i escoltar el meu cos. A donar-li descans i la pausa que necessitava per tenir energia suficient per ovular. També gràcies als seus coneixements, de manera paral·lela, vaig poder obtenir més respostes dels metges. Em van trobar un càncer a l'úter, que no m'haguessin diagnosticat tan a temps si ella no m'hagués assessorat. La Gavina em va ajudar moltíssim a decidir el meu tractament amb tota la informació. Tan de bo hagués trobat una mirada com la de la Gavina anys enrere.", name: "Lorena" },
  { text: "En els espais que la Gavina organitza, ho fa amb molt mimo i cura, cada detall en l'arribada i durant les diferents activitats. La seva escolta, la seva entrega, el respecte pels diferents ritmes aporta escolta, tacte, carinyo en el seu acompanyament. Recordo que tant les meditacions per connectar amb l'úter com el moviment corporal en grup per mi va ser molt alliberador. La Gavina és d'aquestes dones amb una sensibilitat, un sosté i una fortalesa que ajuden a transitar els moviments emocionals que emergeixen. Gràcies, gràcies, gràcies, Gavina!!", name: "Montse P." },
];

const faqData: { q: string; a: string[] }[] = [
  {
    q: "És necessari tenir un desequilibri ginecològic per participar a Matrius en Cercle?",
    a: [
      "No.",
      "Aquest procés és tant per a dones que estan vivint algun desequilibri concret com per a dones que senten el desig de reconnectar amb el seu cos, la seva ciclicitat i la seva matriu.",
      "No cal esperar que alguna cosa no funcioni per començar a cuidar-nos. La salut femenina també es cultiva quan escoltem el cos, integrem nous recursos i recuperem la confiança en la nostra pròpia saviesa.",
    ],
  },
  {
    q: "Necessito tenir coneixements previs sobre salut femenina o plantes?",
    a: [
      "No.",
      "Matrius en Cercle està pensat perquè cada dona pugui començar des del seu propi punt de partida.",
      "No importa si és la primera vegada que t'apropes a aquesta mirada o si ja fa temps que explores la salut femenina. Anirem construint, juntes, el procés pas a pas.",
    ],
  },
  {
    q: "És un grup. Tindré un acompanyament personalitzat?",
    a: [
      "Sí.",
      "Tot i ser un procés grupal, cada dona té la seva pròpia història, el seu moment vital i les seves necessitats.",
      "Al llarg del procés podràs compartir dubtes i experiències dins del cercle, i també rebràs el meu acompanyament i feedback per poder adaptar els recursos a la teva realitat.",
    ],
  },
  {
    q: "He de fer tots els recursos que proposes? I si no tinc gaire temps per dedicar-hi?",
    a: [
      "Els recursos que anirem descobrint són portes d'entrada per començar a construir una nova relació amb el teu cos i amb la teva matriu.",
      "Anirem pas a pas, mes a mes, incorporant-los d'un en un, perquè puguis integrar-los amb calma i observar com responen en tu.",
      "Ara bé, perquè el procés sigui realment transformador, és important que puguis posar en pràctica allò que anem treballant i compartir què va passant en el teu cos.",
      "Així podré acompanyar-te millor, anar ajustant el procés a les teves necessitats i avançar juntes en el teu propi camí.",
    ],
  },
  {
    q: "Què passa si no puc assistir a alguna de les sessions en directe?",
    a: [
      "Les sessions en directe seran un espai molt important del procés, perquè és on compartirem, resoldrem dubtes i aprofundirem juntes.",
      "Si algun dia no pots assistir, buscarem la millor manera perquè puguis continuar connectada amb el procés i aprofitar el contingut treballat.",
    ],
  },
  {
    q: "Com funciona el grup privat de WhatsApp?",
    a: [
      "El grup de WhatsApp serà un espai de suport durant tot el procés.",
      "Hi podràs compartir dubtes més pràctics del dia a dia, i les respostes podran nodrir també la resta de dones del cercle.",
      "La idea és que sigui un espai viu, respectuós i de suport mutu.",
    ],
  },
  {
    q: "Quant dura Matrius en Cercle?",
    a: [
      "El procés té una durada de cinc mesos.",
      "Començarem a finals de novembre i finalitzarem a finals d'abril.",
      "Cada mes obrirem un nou camí de treball, amb temps perquè puguis integrar els recursos i observar com es transformen la teva relació amb el cos i amb la teva matriu.",
    ],
  },
  {
    q: "Quantes dones formaran part del cercle?",
    a: [
      "El nombre de places és limitat.",
      "Vull poder cuidar l'espai, sostenir el procés del grup i oferir l'acompanyament necessari perquè cada dona se senti vista i acompanyada.",
    ],
  },
  {
    q: "I si sento que aquest no és el moment per a mi?",
    a: [
      "Escoltar el teu moment també forma part del procés.",
      "Si sents la crida però tens dubtes, pots escriure'm i valorarem juntes si Matrius en Cercle és l'espai adequat per a tu ara mateix.",
    ],
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

function MatriusPage() {
  return (
    <div className="mp">
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
        <img src={logoImage} alt="" style={{ width: "90vw", maxWidth: "1300px", opacity: 0.12 }} />
      </div>

      <button onClick={() => window.history.back()} className="back-link">← Tornar</button>

      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <h1>Matrius en Cercle</h1>
          <p className="subtitle">Un viatge de cinc mesos per recuperar la relació<br />amb la teva matriu i la teva saviesa femenina</p>
          <p className="hero-date">De finals de novembre a finals d&apos;abril</p>
        </div>
      </header>

      <main>

        {/* QUÈ ÉS */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Què és Matrius en Cercle?</h2>
            </div>
            <p>Un acompanyament grupal i online de cinc mesos per recuperar i cultivar la relació amb la teva matriu, integrar recursos naturals que t&apos;ajudin a cuidar-la amb més consciència, confiança i autonomia.</p>
            <p style={{ marginTop: ".8rem" }}>Un espai per aprendre, compartir i caminar juntes.</p>
            <p style={{ marginTop: "1.2rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>Perquè quan les dones ens reunim amb la intenció de cuidar-nos,<br />escoltar-nos i recordar la nostra saviesa, alguna cosa es transforma.</p>

            <div className="destacat">
              <p style={{ fontWeight: 700, color: "var(--terra)", margin: 0, fontSize: "clamp(1.2rem, 2.3vw, 1.5rem)" }}>
                Més enllà dels recursos: EL PODER DEL CERCLE
              </p>
              <p>Durant molts anys les dones hem compartit coneixements, remeis, experiències i saviesa en comunitat.</p>
              <p>El cercle recupera aquest espai.</p>
              <p>Un lloc on no només rebem informació, sinó on podem compartir el nostre propi procés, sentir-nos sostingudes i recordar que no caminem soles.</p>
              <p style={{ marginTop: "1rem" }}>Quan les dones ens ajuntem amb la intenció de cuidar-nos, alguna cosa passa.</p>
              <p style={{ marginTop: ".35rem" }}>Ens escoltem.</p>
              <p style={{ marginTop: ".35rem" }}>Ens reconeixem.</p>
              <p style={{ marginTop: ".35rem" }}>Ens nodrim.</p>
              <p style={{ marginTop: ".8rem" }}>I aquesta experiència compartida també forma part de la medicina del cercle.</p>
              <div style={{ margin: "2rem 0 1.6rem", borderRadius: "1.2rem", overflow: "hidden" }}>
                <img
                  src="/matrius/assets/haseya%20dones.jpg"
                  alt="Cercle de dones"
                  style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "480px", objectPosition: "center" }}
                />
              </div>
              <p style={{ marginTop: "0", textAlign: "center", color: "var(--terra)", fontWeight: 700 }}>
                No és només un espai per aprendre sobre salut femenina.<br />
                És un espai per <span className="em-sub">CAMINAR</span> aquest procés <span className="em-sub">AL COSTAT D&apos;ALTRES DONES</span>,<br />
                <span className="em-sub">RECORDANT juntes</span> la <span className="em-sub">saviesa</span> que habita en cada una de nosaltres.
              </p>
            </div>
          </div>
        </section>

        {/* PER A QUI ÉS */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Per a qui és</h2>
            </div>
            <p>Aquest espai és per a tu si...</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "1.2rem 0 0", display: "grid", gap: ".75rem" }}>
              {[
                "Sents que vols recuperar la connexió amb el teu cos, la teva ciclicitat i la teva matriu.",
                "Vols comprendre millor la teva salut femenina i adquirir recursos naturals per cuidar-te.",
                "Sents que necessites tornar a escoltar el teu cos i confiar més en la seva saviesa.",
                "Vols aprendre sobre alimentació, plantes, fitoginecologia i moviment des d'una mirada femenina i conscient.",
                "Estàs transitant un moment de canvi vital i vols sentir-te acompanyada per altres dones.",
                "Sents el desig de formar part d'un espai compartit on créixer, aprendre i nodrir-te.",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0, color: "var(--terra)", fontWeight: 700 }}>✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Vull formar part de Matrius en Cercle
              </a>
            </div>
          </div>
        </section>

        {/* COM SERÀ EL PROCÉS */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Com serà el procés: els camins que recorrerem</h2>
            </div>
            <div className="proces-grid">
              <div className="proces-photo" style={{ borderRadius: "1.2rem", overflow: "hidden" }}>
                <img
                  src="/matrius/assets/surita%20copalera.jpg"
                  alt="Surita copalera"
                  style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              <div>
                <p style={{ marginTop: 0 }}>Durant cinc mesos recorrerem diferents camins que t&apos;ajudaran a cultivar aquesta nova relació amb la teva matriu:</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1.4rem 0 0", display: "grid", gap: "1.2rem" }}>
                  {[
                    { title: "Mes 1 · Nodrir el teu cos", desc: "Alimentació regenerativa, rutines bàsiques, ciclicitat i una primera aproximació a la teva matriu." },
                    { title: "Mes 2 · Reconnectar amb els ritmes de la natura", desc: "Desparasitar, depurar i comprendre el paper de les plantes en el sosteniment de la salut femenina." },
                    { title: "Mes 3 · Endinsar-nos en la fitoginecologia", desc: "Aprendre recursos ancestrals amb plantes per acompanyar els processos del cos femení." },
                    { title: "Mes 4 · Conèixer el teu cos femení", desc: "Comprendre els òrgans femenins i la relació entre les diferents parts del teu cos." },
                    { title: "Mes 5 · Despertar la pelvis i la matriu", desc: "Moviment pelvicuterí acompanyat de la respiració i la veu per començar a alliberar memòries." },
                  ].map(({ title, desc }) => (
                    <li key={title} style={{ display: "flex", alignItems: "flex-start", gap: ".7rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>
                      <span style={{ flexShrink: 0, marginTop: ".1em" }}>🌿</span>
                      <div>
                        <p style={{ fontWeight: 700, margin: 0, color: "#6b5347" }}>{title}</p>
                        <p style={{ marginTop: ".3rem" }}>{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FORMAT I DATES */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Format i dates</h2>
            </div>
            <p>Durant aquests cinc mesos tindràs accés a:</p>
            <div className="format-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginTop: "1.4rem" }}>
              {[
                { title: "Contingut nou a l'inici de cada mes", desc: "Cada inici de mes tindràs disponible el nou contingut, perquè puguis veure'l al teu ritme i integrar-lo amb calma." },
                { title: "Un grup privat de WhatsApp", desc: "Un espai per compartir preguntes, dubtes pràctics i experiències, nodrint-nos també de les respostes de les altres dones." },
                { title: "Una trobada online (2 hores) al final de cada mes", desc: "A finals de cada mes ens trobarem online per compartir el procés de cada una, resoldre dubtes i aprofundir juntes en allò que estiguem vivint." },
                { title: "Acompanyament personalitzat dins del grup", desc: "Tot i ser un procés grupal, cada dona tindrà el seu propi camí. Jo aniré observant i oferint feedback per adaptar el procés a les necessitats de cadascuna." },
              ].map(({ title, desc }) => (
                <div key={title} style={{ background: "#fffdf8", borderTop: "1.5px solid rgba(138,75,52,.18)", borderRight: "1.5px solid rgba(138,75,52,.18)", borderBottom: "1.5px solid rgba(138,75,52,.18)", borderLeft: "4px solid #8a4b34", borderRadius: "1.2rem", padding: "clamp(.9rem,2vw,1.4rem)", display: "flex", flexDirection: "column", gap: ".5rem" }}>
                  <p style={{ fontWeight: 700, margin: 0, color: "#6b5347", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: 1.35 }}>{title}</p>
                  <p style={{ margin: 0, fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "2.4rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              No es tracta de fer-ho tot ni d&apos;aplicar tots els recursos de cop.<br />
              Es tracta d&apos;anar integrant, pas a pas, allò que tingui sentit per a tu.
            </p>
            <div style={{ marginTop: "1.8rem", background: "linear-gradient(135deg,#fceae3,#fef5f1)", border: "1px solid rgba(138,75,52,.18)", borderRadius: "1rem", padding: "clamp(1.2rem,3vw,2rem)", display: "flex", flexDirection: "column", gap: ".8rem" }}>
              <p style={{ margin: 0, textAlign: "center", color: "#6b5347", fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)" }}>
                <strong style={{ textTransform: "uppercase", display: "block" }}>Inici:</strong>
                finals de novembre
              </p>
              <p style={{ margin: 0, textAlign: "center", color: "#6b5347", fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)" }}>
                <strong style={{ textTransform: "uppercase", display: "block" }}>Finalització:</strong>
                finals d&apos;abril
              </p>
              <p style={{ margin: 0, textAlign: "center", color: "#6b5347", fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)" }}>
                <strong style={{ textTransform: "uppercase", display: "block" }}>Places limitades</strong>
                El nombre de dones serà reduït per poder cuidar el grup<br />
                i oferir un acompanyament més proper i personalitzat.
              </p>
            </div>
          </div>
        </section>

        {/* QUI T'ACOMPANYA */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Qui t&apos;acompanya</h2>
            </div>

            <div className="qui-grid">
              {/* Text — 4 paragraphs beside the photo */}
              <div>
                <p style={{ marginTop: 0 }}>Soc la Gavina i el meu camí amb la salut femenina va començar fa tretze anys, quan vaig ser mare per primera vegada.</p>
                <p>La maternitat va obrir una porta de transformació profunda: em va portar a revisar la relació amb mi mateixa, amb el meu cos, la meva feminitat, la meva sexualitat i la meva matriu.</p>
                <p>Des d&apos;aleshores he recorregut un camí de recerca, aprenentatge i transformació que encara avui continuo caminant. Un camí que m&apos;ha portat a escoltar el meu propi cos, a aprofundir en diferents mirades sobre la salut femenina i a recuperar una relació més conscient amb la meva matriu.</p>
                <p>Al llarg d&apos;aquest procés m&apos;he format en Teràpia Gestalt, Ginecologia Natural i Ancestral, Ciclicitat i Sexualitat Alquímica Femenina, Alimentació Regenerativa, Fitoginecologia, Moviment Pèlvic i altres recursos naturals que avui formen part de la meva manera d&apos;acompanyar.</p>
              </div>
              {/* Photo */}
              <div className="qui-photo" style={{ borderRadius: "1.7rem", overflow: "hidden", boxShadow: "0 16px 50px rgba(107,83,71,.18)" }}>
                <img
                  src="/matrius/assets/gavina%20riu.jpeg"
                  alt="La Gavina"
                  style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "3/4", objectPosition: "center top" }}
                />
              </div>
            </div>

            {/* 5th paragraph below both columns */}
            <p style={{ marginTop: "1.4rem" }}>Però el meu acompanyament no neix només de les formacions, sinó sobretot de la meva pròpia experiència de vida i del camí recorregut.</p>

            <p style={{ marginTop: "2rem", textAlign: "center", fontWeight: 700, color: "#6b5347", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: 1.65 }}>
              He après que{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                la salut femenina no es transforma només incorporant recursos, sinó quan recuperem la relació amb el nostre cos, escoltem els seus missatges i tornem a confiar en la saviesa que habita en la nostra matriu.
              </span>
            </p>

            <p style={{ marginTop: "1.4rem" }}>
              Aquesta és <strong>la mirada que sosté Matrius en Cercle</strong>: un espai per{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>aprendre</span>
              ,{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>compartir</span>
              {" "}i{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>caminar juntes</span>
              {" "}en el procés de reconnectar amb la nostra matriu.
            </p>

            <p style={{ marginTop: "2rem", textAlign: "center", fontWeight: 700, color: "#6b5347", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: 1.8 }}>
              Perquè quan les dones ens reunim i ens sostenim, recordem que<br />
              no estem soles en aquest camí<br />
              i que la saviesa que habita en la matriu de cada una també es nodreix del cercle.
            </p>
          </div>
        </section>

        {/* DESPRÉS D'AQUESTS 5 MESOS */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Després d&apos;aquests 5 mesos…</h2>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "1.2rem 0 0", display: "grid", gap: ".75rem" }}>
              {[
                "Comprendràs millor el teu cos i els seus ritmes.",
                "Tindràs recursos naturals per cuidar la teva salut femenina amb més autonomia.",
                "Aprendràs a escoltar els missatges del teu cos i prendre decisions amb més confiança.",
                "Sentiràs més connexió amb la teva matriu i amb la teva naturalesa cíclica.",
                "Formaràs part d'un cercle de dones amb qui compartir un camí de consciència i transformació.",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0, color: "var(--terra)", fontWeight: 700 }}>✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
              <p style={{ margin: 0, fontWeight: 700, color: "#6b5347", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                Perquè habitar la matriu és un procés.
              </p>
              <p style={{ marginTop: ".6rem", fontWeight: 700, color: "#6b5347", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                Un camí de retorn a tu.
              </p>
            </div>
          </div>
        </section>

        {/* LES DONES PARLEN */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Les dones parlen...</h2>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* PREGUNTES FREQÜENTS */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Preguntes freqüents</h2>
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
                Si sents que ha arribat el moment de deixar de caminar sola...
              </h2>
              <p style={{ marginTop: "1.4rem", fontSize: "clamp(1.1rem, 2.4vw, 1.7rem)", fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 700, lineHeight: 1.4, color: "#4a2e22" }}>
                Et convido a regalar-te <span className="em-sub">un espai on aprendre, compartir i habitar la teva matriu al costat d&apos;altres dones</span>.
              </p>
              <p style={{ marginTop: "1.8rem" }}>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Vull formar part de Matrius en Cercle
                </a>
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="wrap">
          Matrius en Cercle · Acompanyament grupal online · Gavina Freixa Rius
        </div>
      </footer>
    </div>
  );
}
