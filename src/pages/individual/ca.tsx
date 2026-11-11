import { useState } from "react";
import logoImage from "@/assets/gavina-logo.png";

const WA_URL = "https://wa.me/34616351534";

export const css = `
  .ip{
    --terra:#8a4b34;
    --terra-fosc:#5d3428;
    --mel:#e5b66d;
    --blanc:#fffdf8;
    --max:1160px;
  }
  .ip *{box-sizing:border-box}
  .ip{
    color:#6b5347;
    background:var(--blanc);
    font-family:Georgia,"Times New Roman",serif;
    line-height:1.55;
    font-size:17px;
    overflow-x:hidden;
    min-height:100vh;
    position:relative;
  }
  .ip img{max-width:100%;display:block}
  .ip a{color:inherit;text-decoration:none}

  /* HERO */
  .ip .hero{
    min-height:86vh;
    position:relative;
    display:grid;
    align-items:end;
    background:
      linear-gradient(90deg, rgba(45,36,27,.55), rgba(45,36,27,.08) 50%, rgba(45,36,27,.35)),
      url("/matrius/assets/capcopaleragemini.png") center center / cover no-repeat,
      linear-gradient(135deg, #5d3428 0%, #8a4b34 60%, #c5a595 100%);
    color:white;
    isolation:isolate;
    z-index:1;
  }
  .ip .hero:after{
    content:"";
    position:absolute;
    inset:auto 0 0 0;
    height:45%;
    background:linear-gradient(180deg, transparent, rgba(36,29,23,.52));
    z-index:-1;
  }
  .ip .hero-inner{
    width:min(var(--max), calc(100% - 40px));
    margin:0 auto;
    padding:7rem 0 5.5rem;
    position:relative;
    z-index:1;
  }
  .ip h1{
    font-family:Georgia,"Times New Roman",serif;
    color:#e1bda6;
    font-size:clamp(1rem, 4.5vw, 5rem);
    letter-spacing:.03em;
    text-transform:uppercase;
    line-height:1.06;
    font-weight:700;
    margin:0;
    text-shadow:0 8px 30px rgba(0,0,0,.22);
  }
  .ip .hero-sub{
    font-family:Georgia,"Times New Roman",serif;
    color:rgba(255,255,255,.92);
    font-size:clamp(0.95rem, 2.5vw, 2rem);
    letter-spacing:.03em;
    line-height:1.4;
    margin:.9rem 0 0;
    font-weight:400;
  }

  /* BUTTONS */
  .ip .btn{
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
  .ip .btn:hover{transform:translateY(-2px)}
  .ip .btn-primary{background:#fff; color:#4a2e22}
  .ip .btn-terra{background:linear-gradient(135deg,#e1bda6 0%,#c5a595 100%); color:#4a2e22; font-size:clamp(1.15rem,2.2vw,1.45rem); padding:1.1rem 2.6rem; box-shadow:0 0 30px rgba(197,162,142,.48), 0 4px 18px rgba(160,118,95,.22); letter-spacing:.1em;}

  /* LAYOUT */
  .ip section{padding:clamp(2.8rem, 5vw, 5rem) 0; position:relative; z-index:1;}
  .ip .wrap{width:min(var(--max), calc(100% - 40px)); margin:0 auto;}
  .ip .cream{background:linear-gradient(180deg, rgba(244,234,215,.55), rgba(255,253,248,.9))}

  /* TYPOGRAPHY */
  .ip .section-title{display:flex; flex-direction:column; gap:.65rem; margin-bottom:2rem;}
  .ip .section-title h2{padding-bottom:.55rem; border-bottom:1.5px solid var(--terra); margin-bottom:0;}
  .ip h2{font-family:Georgia,"Times New Roman",serif; font-size:clamp(1.7rem, 4vw, 3.4rem); color:var(--terra); text-wrap:balance; font-weight:700; line-height:1.06; margin:0 0 1rem;}
  .ip h3{font-size:clamp(1.1rem, 2vw, 1.55rem); color:var(--terra-fosc); margin-bottom:.7rem; font-family:Georgia,"Times New Roman",serif; font-weight:700;}
  .ip p{margin:.75rem 0 0; color:#6b5347; font-size:clamp(1.15rem, 2.2vw, 1.4rem); line-height:1.65; font-family:Georgia,"Times New Roman",serif;}
  .ip p:first-child{margin-top:0}
  .ip strong{font-weight:800; color:#6b5347}

  .ip .soft-img{border-radius:1.7rem; overflow:hidden; box-shadow:0 26px 70px rgba(55,40,25,.16);}
  .ip .soft-img img{width:100%; object-fit:cover; aspect-ratio:3/4; object-position:center top;}

  /* DESTACAT */
  .ip .destacat{background:linear-gradient(135deg,#fceae3,#fef5f1); border-left:4px solid var(--terra); border-radius:1rem; padding:clamp(1.2rem,3vw,2rem); font-size:clamp(1.15rem, 2.2vw, 1.4rem); color:var(--terra-fosc); line-height:1.6; font-family:Georgia,"Times New Roman",serif;}
  .ip .destacat p{color:var(--terra-fosc); font-size:inherit; line-height:inherit; font-family:inherit; margin-top:.6rem;}
  .ip .destacat p:first-child{margin-top:0;}

  /* TESTIMONIALS */
  .ip .testi-carousel{display:flex; align-items:center; gap:1.2rem;}
  .ip .testi-track{flex:1; overflow:hidden;}
  .ip .testi-card{background:#fffdf8; border-radius:1.7rem; padding:2rem 2.2rem; box-shadow:0 4px 20px -8px rgba(90,40,20,.1); border:1px solid rgba(138,75,52,.1);}
  .ip .testi-card p{font-size:clamp(1.15rem, 2.2vw, 1.4rem); color:#6b5347; line-height:1.72; margin-bottom:1rem; font-family:Georgia,"Times New Roman",serif;}
  .ip .testi-card cite{font-style:normal; font-weight:800; font-size:.88rem; color:var(--terra);}
  .ip .testi-arrow{flex-shrink:0; width:2.6rem; height:2.6rem; border-radius:50%; border:none; background:var(--terra); color:#fff; font-size:1.5rem; line-height:1; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .2s, transform .15s;}
  .ip .testi-arrow:hover{background:var(--terra-fosc); transform:scale(1.08);}
  .ip .testi-dots{display:flex; justify-content:center; gap:.55rem; margin-top:1.4rem;}
  .ip .testi-dot{width:.5rem; height:.5rem; border-radius:50%; background:var(--mel); border:none; cursor:pointer; padding:0; transition:background .2s, transform .2s;}
  .ip .testi-dot.active{background:var(--terra); transform:scale(1.3);}

  /* CTA BLOCK */
  .ip .cta-block{background:linear-gradient(135deg,#e1bda6 0%,#c5a595 100%); border-radius:2rem; padding:clamp(2rem,4vw,3.2rem); text-align:center; box-shadow:0 30px 80px rgba(160,115,90,.22);}

  /* FAQ */
  .ip .faq{display:grid; gap:.7rem; margin-top:1.6rem;}
  .ip .faq-item{border:1px solid rgba(138,75,52,.15); border-radius:1.2rem; overflow:hidden; background:#fffdf8;}
  .ip .faq-item summary{list-style:none; cursor:pointer; padding:1.15rem 1.4rem; font-weight:700; font-size:clamp(1.15rem,2.2vw,1.4rem); color:#6b5347; font-family:Georgia,"Times New Roman",serif; display:flex; justify-content:space-between; align-items:center; gap:1rem; user-select:none;}
  .ip .faq-item summary::-webkit-details-marker{display:none;}
  .ip .faq-item summary::after{content:"+"; font-size:1.4rem; font-weight:400; color:var(--terra); flex-shrink:0; transition:transform .2s;}
  .ip .faq-item[open] summary::after{transform:rotate(45deg);}
  .ip .faq-item[open] summary{border-bottom:1px solid rgba(138,75,52,.1);}
  .ip .faq-body{padding:1.1rem 1.4rem 1.3rem; color:#6b5347; font-size:clamp(1.15rem,2.2vw,1.4rem); line-height:1.65; font-family:Georgia,"Times New Roman",serif;}
  .ip .faq-body p{margin:.6rem 0 0; color:#6b5347; font-size:inherit; line-height:inherit; font-family:inherit;}
  .ip .faq-body p:first-child{margin-top:0;}
  .ip .em-sub{display:inline; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 32' preserveAspectRatio='none'%3E%3Cpath d='M6,9 C28,4 65,10 105,6 C142,2 178,8 195,7 C199,11 198,20 193,23 C158,28 115,23 75,25 C40,27 11,23 4,21 C1,18 2,13 6,9 Z' fill='%23ffffff' fill-opacity='0.55'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-size:100% 100%; padding:0.12em 0.4em;}

  /* GRIDS */
  .ip .qui-grid{display:grid; grid-template-columns:1fr clamp(200px,32%,360px); gap:clamp(2rem,4vw,4rem); align-items:start;}
  .ip .mes-grid{display:grid; grid-template-columns:1fr clamp(200px,32%,360px); gap:clamp(2rem,4vw,4rem); align-items:stretch;}
  .ip .camins-grid{display:grid; grid-template-columns:clamp(200px,32%,380px) 1fr; gap:clamp(2rem,4vw,4rem); align-items:start;}

  .ip footer{padding:3rem 0; background:#2d241d; color:rgba(255,255,255,.78); text-align:center; font-size:.94rem;}
  .ip .back-link{display:inline-flex; align-items:center; gap:.4rem; font-size:.88rem; color:var(--terra); padding:1.5rem 1.5rem 0; background:none; border:none; cursor:pointer; transition:color .2s; position:relative; z-index:1;}
  .ip .back-link:hover{color:var(--terra-fosc);}

  @media(max-width:900px){
    .ip .hero{min-height:74vh}
    .ip .qui-grid,.ip .mes-grid{grid-template-columns:1fr}
    .ip .mes-photo{order:1; margin-top:1.4rem}
    .ip .camins-grid{grid-template-columns:1fr}
    .ip .camins-photo{order:-1; margin-bottom:1rem}
  }
  @media(max-width:560px){
    .ip{font-size:16px}
    .ip .hero-inner,.ip .wrap{width:min(100% - 28px, var(--max))}
    .ip section{padding:2.4rem 0}
    .ip .btn{width:100%}
  }
`;

const testimonials = [
  {
    text: "Vaig iniciar l’acompanyament amb la Gavina després d’una operació important en què em van extirpar un ovari, les trompes i dos quists de dimensions considerables. Va ser un moment delicat, tant físicament com emocionalment, i sento que el seu acompanyament ha estat una part molt valuosa del meu procés de recuperació.\n\nDurant aquests vuit mesos de seguiment individualitzat m’he sentit molt cuidada, escoltada i respectada. Valoro especialment la delicadesa amb què m’ha acompanyat, la seva dedicació i la manera d’adaptar cada proposta al moment en què jo em trobava.\n\nTot el treball relacionat amb l’alimentació regenerativa m’ha ajudat a cuidar-me d’una manera molt més conscient i a donar al cos els recursos que necessitava durant la recuperació. També incorporar les rutines circadianes ha estat molt important per recuperar progressivament l’energia, les forces i una sensació més estable de vitalitat.\n\nA això s’hi han sumat totes les pràctiques de connexió amb el cos que hem anat fent: les meditacions sobre la ciclicitat femenina, la connexió amb la matriu, l’automassatge, el moviment pèlvicouterí i altres propostes que m’han permès escoltar-me des d’un lloc diferent. Algunes d’aquestes experiències han estat especialment significatives, com tornar a moure’m i ballar després de sis mesos, sentint que el cos recuperava espai, memòria, confiança i llibertat.\n\nSento que tot aquest procés m’ha ajudat a construir una relació més amable i conscient amb el meu cos, a entendre millor els seus ritmes i a connectar amb la meva ciclicitat des d’una mirada nova, menys exigent i més respectuosa.\n\nAra sento que puc fer un bon tancament d’aquesta etapa. Em noto molt recuperada, amb més energia, força i vitalitat, i sobretot amb moltes eines i aprenentatges que em continuaran acompanyant.\n\nEstic molt agraïda a la Gavina per la seva dedicació, sensibilitat i manera d’estar present durant tot aquest procés. M’enduc no només una sensació de recuperació física, sinó també una manera nova de mirar-me, escoltar-me i cuidar-me.",
    name: "Ruth Aisa",
  },
  {
    text: "Feia temps que tenia problemes menstruals, amenorrea, sagnats intermenstruals i ja m'havien visitat diferents professionals (endocrina ginecòlegs, metges i fins i tot nutricionista sense gaire èxit). Vaig decidir començar amb la Gavina perquè volia provar una altra mirada, buscar l'arrel del problema des d'una perspectiva més natural i entenent el llenguatge del meu cos. La Gavina em va ensenyar a mirar-me com mai, a posar-me al centre i escoltar el meu cos. A donar-li descans i la pausa que necessitava per tenir energia suficient per ovular. També gràcies als seus coneixements, de manera paral·lela, vaig poder obtenir més respostes dels metges. Em van trobar un càncer a l'úter, que no m'haguessin diagnosticat tan a temps si ella no m'hagués assessorat. La Gavina em va ajudar moltíssim a decidir el meu tractament amb tota la informació. Tan de bo hagués trobat una mirada com la de la Gavina anys enrere.",
    name: "Lorena",
  },
  {
    text: "Visualitzo la Gavina com una sàvia xamana, a la qual acudir i confiar. Trobar dones tan potents com ella, amb aquesta mirada reivindicativa i amorosa, m'encanta i em connecta amb allò que per mi és important.",
    name: "Alba",
  },
  {
    text: "El Massatge Ritual Matriu amb la Gavina va ser molt màgic. Des del primer moment em vaig sentir acompanyada. Un acompanyament dolç, present, conscient, tant el dia del ritual com en la revisió prèvia, on em vaig qüestionar coses molt necessàries i sobretot m'ha permès connectar amb la meva matriu.",
    name: "Raquel",
  },
  {
    text: "Vam iniciar les sessions amb la Gavina perquè la meva filla Laia, de 13 anys, tenia molts dolors durant la menstruació. A la Laia li van anar molt bé les sessions presencials perquè eren un espai on es relaxava i connectava, i a mi també. Durant tot el procés ens vam sentir molt còmodes i la Laia va expressar amb tranquil·litat allò que sentia en un clima de molta confiança. Va aprendre a conèixer com funciona el seu cicle, ubicar el seu úter i ovaris. Els massatges matriu, també, fets amb molta delicadesa i tendresa ens van fer sentir molt a gust. Hem fet un aprenentatge, mare i filla, que ens servirà per sempre. Seguint les pautes de la Gavina, la Laia ha millorat molt.",
    name: "Teresa",
  },
  {
    text: "La Gavina em transmet molta confiança cap a una mirada més connectada amb la natura i la meva intuïció femenina. Sento que gran part dels missatges cap als canvis, el cos i la salut es miren molt des de la por i una visió molt medicalitzada. Ancestralment les dones s'acompanyaven entre elles, des de la seva saviesa i coneixements. Sento molta curiositat per provar l'acompanyament amb una dona sensible i empàtica com ella. Tenir a la Gavina és tot un regal!",
    name: "Brenda",
  },
];

const faqData = [
  {
    q: "Com puc saber si aquest acompanyament és per a mi?",
    a: [
      "Parlarem del teu cas, del moment vital que estàs vivint i valorarem juntes si aquest acompanyament és el que necessites ara mateix.",
      "Si sento que un altre camí et pot ajudar més en aquest moment, també t'ho diré amb tota honestedat.",
    ],
  },
  {
    q: "I si no sé per on començar?",
    a: [
      "No cal que arribis sabent què necessites.",
      "Començarem escoltant el teu cas, el moment vital que estàs vivint i què t'ha portat fins aquí.",
      "A partir d'aquí, definirem juntes el camí que tingui més sentit per a tu.",
    ],
  },
  {
    q: "En principi no tinc cap desequilibri ginecològic, però sento la necessitat de reconnectar amb la meva matriu i amb la meva feminitat.",
    a: [
      "Sí. Aquest acompanyament també és per a tu.",
      "No cal esperar que aparegui un desequilibri per començar a cuidar la teva salut femenina.",
      "Si sents el desig de reconnectar amb el teu cos, comprendre millor la teva ciclicitat i incorporar recursos naturals que t'ajudin a cuidar-te d'una manera més conscient, aquest procés també pot ser un bon camí per a tu.",
    ],
  },
  {
    q: "És necessari aplicar tots els recursos que proposes?",
    a: [
      "Els recursos que anirem descobrint són portes d'entrada per començar a construir una nova relació amb el teu cos i amb la teva matriu.",
      "Ara bé, perquè el procés sigui realment transformador, és important que puguis anar incorporant, de manera progressiva, allò que anem treballant. Això ens permetrà observar com respon el teu cos i anar ajustant el procés segons el que necessitis.",
    ],
  },
  {
    q: "I si no tinc temps per incorporar tots aquests recursos?",
    a: [
      "No es tracta de fer més coses.",
      "Buscarem aquells recursos que puguin integrar-se de manera realista en el teu dia a dia perquè cuidar-te sigui una cosa sostenible, no una exigència més.",
    ],
  },
  {
    q: "Quant dura l'acompanyament?",
    a: [
      "No hi ha una durada igual per a totes les dones.",
      "Cada procés és diferent perquè cada història, cada cos i cada moment vital també ho són.",
      "Després de la primera sessió et faré una proposta personalitzada i, a partir d'aquí, anirem valorant juntes l'evolució del procés.",
    ],
  },
  {
    q: "Necessito tenir coneixements previs sobre salut femenina o recursos naturals?",
    a: [
      "No.",
      "Aquest acompanyament s'adapta al teu punt de partida.",
      "No importa si és la primera vegada que t'apropes a aquesta mirada o si fa anys que t'interessa la salut femenina. El procés s'adaptarà al teu punt de partida.",
    ],
  },
  {
    q: "He viscut una pèrdua gestacional i em sento molt desconnectada de la meva matriu.",
    a: [
      "Cada dona viu una pèrdua d'una manera diferent.",
      "Si sents que és el teu moment, t'acompanyaré amb molta delicadesa a recuperar la relació amb el teu cos i la teva matriu, respectant el teu ritme.",
      "I valorarem juntes quins recursos poden sostenir millor el teu moment present.",
    ],
  },
  {
    q: "No sento desig sexual o ja no gaudeixo de la penetració. Aquest acompanyament és per a mi?",
    a: [
      "Sí, pot ser-ho.",
      "La sexualitat canvia al llarg de la vida i, especialment, durant etapes com el climateri.",
      "En aquest procés no ens centrarem només en la sexualitat. També observarem com estàs vivint la resta de dimensions de la teva vida, perquè tot està relacionat.",
      "A partir d'aquí, anirem incorporant aquells recursos que puguin ajudar-te a recuperar, de mica en mica, una relació més conscient amb el teu cos, el teu plaer i la teva sexualitat.",
    ],
  },
  {
    q: "Em pots garantir que el meu desequilibri es resoldrà en 3 o 4 mesos?",
    a: [
      "No.",
      "Cada cos, cada història i cada procés són únics.",
      "El meu compromís és acompanyar-te perquè puguis comprendre millor què t'està explicant el teu cos, incorporar recursos adaptats a tu i crear les condicions perquè recuperi, tant com sigui possible, el seu equilibri.",
      "Els resultats dependran de molts factors, però també del compromís que puguis assumir amb el teu propi procés.",
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
        <button className="testi-arrow" onClick={next} aria-label="Següent">›</button>
      </div>
      <div className="testi-dots">
        {testimonials.map((_, i) => (
          <button key={i} className={`testi-dot${i === idx ? " active" : ""}`} onClick={() => setIdx(i)} aria-label={`Testimoni ${i + 1}`} />
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
          <h1>ACOMPANYAMENT INDIVIDUAL</h1>
          <p className="hero-sub">Aprèn a cuidar-te respectant la teva naturalesa cíclica i recupera l'equilibri dins teu.</p>
        </div>
      </header>

      <main>

        {/* QUÈ ÉS */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Què és?</h2>
            </div>
            <p style={{ marginTop: 0 }}>Aquest acompanyament és un procés personalitzat que et convida a anar més enllà dels símptomes: a comprendre què t&apos;està dient el teu cos i a reconstruir la relació amb tu.</p>
            <p style={{ marginTop: "1rem" }}>Els recursos que anirem incorporant són les portes d&apos;entrada perquè aquesta relació es pugui transformar.</p>
            <p style={{ marginTop: "1rem" }}>Cada dona, cada història i cada matriu són úniques. Per això, cada procés també ho és.</p>
            <p style={{ marginTop: "1.8rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Vull començar el meu procés
              </a>
            </p>

            {/* Destacat + foto */}
            <div className="mes-grid" style={{ marginTop: "3rem" }}>
              <div className="destacat">
                <p style={{ fontWeight: 700, color: "var(--terra)", margin: 0, fontSize: "clamp(1.2rem, 2.3vw, 1.5rem)" }}>
                  Més enllà dels símptomes
                </p>
                <p>Els símptomes són importants, però no són l&apos;única cosa important.</p>
                <p>El dolor menstrual incapacitant, la irritabilitat i sensibilitat extrema en la fase premenstrual, l&apos;absència de menstruació, la irregularitat en el cicle, els sagnats abundants… no són només un desequilibri que cal atendre. També poden ser una invitació a aturar-nos i escoltar què ens està mostrant el cos.</p>
                <p>Per això, en aquest acompanyament no busquem únicament atenuar o eliminar un símptoma. Busquem comprendre què pot estar contribuint a aquest desequilibri i crear les condicions perquè el teu cos pugui recuperar, tant com sigui possible, el seu propi equilibri.</p>
                <p>T&apos;acompanyo a recuperar una relació amb tu.</p>
                <p style={{ marginTop: ".4rem" }}>Amb el teu cos.</p>
                <p style={{ marginTop: ".2rem" }}>Amb la teva matriu i la teva pelvis.</p>
                <p style={{ marginTop: ".2rem" }}>Amb la teva menstruació.</p>
                <p style={{ marginTop: ".2rem" }}>Amb la teva naturalesa cíclica.</p>
              </div>
              <div className="mes-photo" style={{ borderRadius: "1.7rem", overflow: "hidden", boxShadow: "0 16px 50px rgba(107,83,71,.18)", height: "100%", display: "flex", flexDirection: "column" }}>
                <img
                  src="/matrius/assets/gavinasuri.jpg"
                  alt="La Gavina a la natura"
                  loading="lazy"
                  style={{ width: "100%", flex: 1, minHeight: 0, display: "block", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
            </div>

            <p style={{ marginTop: "2rem" }}>Els recursos que t&apos;acompanyaré a incorporar són diferents camins per cultivar aquesta relació.</p>
            <p style={{ marginTop: "1.4rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Perquè quan tornem a escoltar el cos i a confiar en la seva saviesa, també transformem la manera com vivim la nostra salut.
            </p>
            <p style={{ marginTop: ".8rem", textAlign: "center", fontWeight: 700, color: "#6b5347", textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
              I, sobretot, recuperem una cosa essencial: la confiança en nosaltres mateixes.
            </p>
          </div>
        </section>

        {/* PER A QUI ÉS */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Per a qui és?</h2>
            </div>
            <p style={{ marginTop: 0 }}>Aquesta sessió és per a tu si:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "1.2rem 0 0", display: "grid", gap: ".9rem" }}>
              {[
                "Tens dolor menstrual incapacitant (Dismenorrea), cicles irregulars, sagnats abundants, més de tres símptomes persistents en la teva fase premenstrual (Síndrome Premenstrual)",
                "Sents que t'has desconnectat del teu cos, de la teva ciclicitat o de la teva matriu, i vols tornar a escoltar-te.",
                "Vols cuidar la teva salut femenina incorporant recursos i sabers ancestrals que han sostingut les dones en tantes tradicions d'arreu del món.",
                "La teva filla està patint dolors menstruals (Dismenorrea) o Síndrome Premenstrual i la vols acompanyar de manera natural i des de l'arrel",
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
              <h2>Els camins que recorrerem</h2>
            </div>
            <div className="camins-grid">
              <div className="camins-photo">
                <div style={{ borderRadius: "1.7rem", overflow: "hidden", boxShadow: "0 16px 50px rgba(107,83,71,.18)" }}>
                  <img
                    src="/matrius/assets/mansmatriu.jpg"
                    alt="Mans sobre la matriu"
                    loading="lazy"
                    style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "3/4" }}
                  />
                </div>
              </div>
              {/* Text + list on the right */}
              <div>
                <p style={{ marginTop: 0 }}>Durant el procés anirem incorporant aquells camins que més ressonin amb tu i amb el moment vital que estàs vivint:</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1.4rem 0 0", display: "grid", gap: "1.2rem" }}>
                  {[
                    { emoji: "🌿", text: "Nodrir el teu cos. Alimentació regenerativa i rutines que donen vitalitat a les teves cèl·lules." },
                    { emoji: "🌿", text: "Reconnectar amb els ritmes de la natura. Plantes, desparasitació i recursos de fitoginecologia per acompanyar els processos del teu cos." },
                    { emoji: "🌿", text: "Despertar la teva pelvis i la teva veu. Moviment pelvicuterí, respiració i veu per tornar al cos, sentir-lo i expressar-te des d'un lloc més profund." },
                    { emoji: "🌿", text: "Reconèixer la teva naturalesa cíclica. Consciència corporal, sexualitat i ciclicitat per connectar amb el teu plaer." },
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
              Cada un d&apos;aquests camins és una porta d&apos;entrada.
            </p>
            <p style={{ marginTop: ".5rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              A través d&apos;ells, aniràs integrant com cuidar-te de debò i recuperant...
            </p>
            <p style={{ marginTop: ".5rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              ...una relació més conscient amb tu mateixa.
            </p>
          </div>
        </section>

        {/* COM SERÀ EL TEU PROCÉS */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Com serà el teu procés</h2>
            </div>
            <p style={{ marginTop: 0 }}>Aquest és un procés personalitzat, creat a partir de la teva història, del teu moment vital i del que el teu cos està expressant avui.</p>
            <p style={{ marginTop: "1rem" }}>Començarem amb una primera sessió online de revisió i valoració (1h15), on escoltarem què està passant, què necessites i quins aspectes poden estar demanant més atenció.</p>
            <p style={{ marginTop: "1rem" }}>A partir d&apos;aquí, anirem construint juntes un camí adaptat a tu.</p>
            <p style={{ marginTop: "1rem" }}>Durant l&apos;acompanyament anirem incorporant petites pautes i recursos que puguis integrar en el teu dia a dia, respectant els teus ritmes i la teva realitat.</p>
            <p style={{ marginTop: "1rem" }}>No es tracta de fer molts canvis de cop ni de seguir una fórmula concreta.</p>
            <p style={{ marginTop: "1rem" }}>Es tracta d&apos;anar trobant, a poc a poc, allò que té més sentit per a tu i per al moment que estàs vivint.</p>
            <p style={{ marginTop: "1rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Perquè habitar la matriu és un procés:<br />
              una nova manera de relacionar-te amb tu mateixa.
            </p>
          </div>
        </section>

        {/* IMAGINA'T */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Imagina&apos;t d&apos;aquí a uns mesos...</h2>
            </div>
            <p style={{ marginTop: "1.4rem", fontWeight: 700, color: "#6b5347" }}>Després d&apos;aquest procés...</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0 0", display: "grid", gap: "1rem" }}>
              {[
                "Comprendràs millor el llenguatge del teu cos i aprendràs a escoltar què et vol comunicar.",
                "Tindràs recursos senzills per cuidar la teva salut femenina d'una manera més conscient i adaptada al teu moment vital.",
                "Coneixeràs millor els teus ritmes i les teves necessitats, i podràs prendre decisions amb més confiança.",
                "Sentiràs que el teu cos deixa de ser un lloc al qual només escoltes quan apareix un símptoma, i es converteix en un espai de connexió, presència i escolta en el teu dia a dia.",
                "Aniràs recuperant, pas a pas, la confiança en la saviesa que ja habita en la teva matriu i en la teva capacitat de cuidar-te.",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".7rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0 }}>🌿</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "2rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Aquest és el camí de tornar a tu, de recuperar la relació amb la teva matriu i amb la teva ciclicitat
            </p>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Vull començar el meu procés
              </a>
            </p>
          </div>
        </section>

        {/* LES DONES DIUEN */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Les dones diuen...</h2>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* QUI T'ACOMPANYA */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Qui t&apos;acompanya</h2>
            </div>
            <div className="qui-grid">
              <div>
                <p style={{ marginTop: 0 }}>El meu gran despertar va començar fa tretze anys, quan vaig ser mare per primera vegada.</p>
                <p style={{ marginTop: "1rem" }}>La maternitat em va portar a mirar-me profundament i a revisar la relació amb mi mateixa, amb la meva feminitat, la meva sexualitat i la meva matriu. Va ser l&apos;inici d&apos;un camí de recerca, transformació i retorn al meu cos que encara avui continuo recorrent.</p>
                <p style={{ marginTop: "1rem" }}>Durant aquests anys he anat explorant i aprofundint en diferents mirades que han donat forma a la meva manera d&apos;acompanyar: Teràpia Gestalt, Ginecologia Natural i Ancestral, Ciclicitat i Sexualitat Alquímica Femenina, Alimentació Regenerativa, Fitoginecologia, Moviment Pèlvic i altres recursos naturals.</p>
                <p style={{ marginTop: "1rem" }}>Però el més important que he après no ha vingut només de les formacions, sinó del meu propi camí.</p>
              </div>
              <div className="soft-img" style={{ borderRadius: "1.7rem", overflow: "hidden", boxShadow: "0 16px 50px rgba(107,83,71,.18)" }}>
                <img
                  src="/matrius/assets/gavinariu3prop.jpg"
                  alt="La Gavina"
                  loading="lazy"
                  style={{ objectPosition: "center top" }}
                />
              </div>
            </div>

            <p style={{ marginTop: "2rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              He après que el cos sempre ens està parlant i que, quan aprenem a escoltar-lo, recuperem una relació més profunda amb nosaltres mateixes.
            </p>
            <p style={{ marginTop: "1.4rem" }}>
              Aquesta és <strong style={{ color: "#6b5347" }}>la mirada des d&apos;on avui t&apos;acompanyo</strong>: no per donar-te receptes, sinó per oferir-te eines i camins perquè puguis comprendre el teu cos,{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                prendre un paper actiu en la cura de la teva salut i reconnectar amb la saviesa que habita en la teva matriu.
              </span>
            </p>
          </div>
        </section>

        {/* INVERSIÓ */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Inversió</h2>
            </div>
            <p style={{ marginTop: 0, textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Cada dona, cada història i cada matriu són úniques. Per això, cada procés també ho és.
            </p>
            <p style={{ marginTop: "1.6rem" }}>
              Després de la primera sessió de valoració, et faré una proposta d&apos;acompanyament personalitzada, pensada per al moment vital que estàs vivint i per al camí que tingui més sentit per a tu.
            </p>
            <p style={{ marginTop: "1rem" }}>
              En aquell moment també t&apos;explicaré la durada orientativa del procés, la inversió i resoldré tots els dubtes que puguis tenir perquè puguis decidir amb calma si aquest és el teu moment.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Sense cap compromís.
            </p>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Vull començar el meu procés
              </a>
            </p>
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
              <p style={{ marginTop: "1.8rem" }}>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Vull començar el meu procés
                </a>
              </p>
            </div>
          </div>
        </section>

      </main>

    </div>
  );
}
