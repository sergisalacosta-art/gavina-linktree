import { createFileRoute } from "@tanstack/react-router";
import logoImage from "@/assets/gavina-logo.png";

const WA_URL = "https://wa.me/34616351534";

export const Route = createFileRoute("/mare-filla")({
  component: SessioPage,
});

const css = `
  .sv{
    --terra:#8a4b34;
    --terra-fosc:#5d3428;
    --mel:#e5b66d;
    --blanc:#fffdf8;
    --max:1160px;
  }
  .sv *{box-sizing:border-box}
  .sv{
    color:#6b5347;
    background:var(--blanc);
    font-family:Georgia,"Times New Roman",serif;
    line-height:1.55;
    font-size:17px;
    overflow-x:hidden;
    min-height:100vh;
    position:relative;
  }
  .sv img{max-width:100%;display:block}
  .sv a{color:inherit;text-decoration:none}

  /* HERO */
  .sv .hero{
    min-height:80vh;
    position:relative;
    display:grid;
    align-items:end;
    background:linear-gradient(135deg,#5d3428 0%,#8a4b34 55%,#c5a595 100%);
    color:white;
    isolation:isolate;
    z-index:1;
  }
  .sv .hero:after{
    content:"";
    position:absolute;
    inset:auto 0 0 0;
    height:40%;
    background:linear-gradient(180deg, transparent, rgba(36,29,23,.45));
    z-index:-1;
  }
  .sv .hero-inner{
    width:min(var(--max), calc(100% - 40px));
    margin:0 auto;
    padding:7rem 0 5.5rem;
    position:relative;
    z-index:1;
  }
  .sv .hero-sub{
    font-family:Georgia,"Times New Roman",serif;
    color:rgba(255,255,255,.92);
    font-size:clamp(0.95rem, 2.5vw, 2rem);
    letter-spacing:.03em;
    line-height:1.4;
    margin:.9rem 0 0;
    font-weight:400;
  }
  .sv h1{
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

  /* BUTTONS */
  .sv .btn{
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
  .sv .btn:hover{transform:translateY(-2px)}
  .sv .btn-primary{background:#fff; color:#4a2e22}
  .sv .btn-terra{background:linear-gradient(135deg,#e1bda6 0%,#c5a595 100%); color:#4a2e22; font-size:clamp(1.15rem,2.2vw,1.45rem); padding:1.1rem 2.6rem; box-shadow:0 0 30px rgba(197,162,142,.48), 0 4px 18px rgba(160,118,95,.22); letter-spacing:.1em;}

  /* LAYOUT */
  .sv section{padding:clamp(2.8rem, 5vw, 5rem) 0; position:relative; z-index:1;}
  .sv .wrap{width:min(var(--max), calc(100% - 40px)); margin:0 auto;}
  .sv .cream{background:linear-gradient(180deg, rgba(244,234,215,.55), rgba(255,253,248,.9))}

  /* TYPOGRAPHY */
  .sv .section-title{display:flex; flex-direction:column; gap:.65rem; margin-bottom:2rem;}
  .sv .section-title h2{padding-bottom:.55rem; border-bottom:1.5px solid var(--terra); margin-bottom:0;}
  .sv h2{font-family:Georgia,"Times New Roman",serif; font-size:clamp(1.7rem, 4vw, 3.4rem); color:var(--terra); text-wrap:balance; font-weight:700; line-height:1.06; margin:0 0 1rem;}
  .sv p{margin:.75rem 0 0; color:#6b5347; font-size:clamp(1.15rem, 2.2vw, 1.4rem); line-height:1.65; font-family:Georgia,"Times New Roman",serif;}
  .sv p:first-child{margin-top:0}
  .sv strong{font-weight:800; color:#6b5347}

  .sv .soft-img{border-radius:1.7rem; overflow:hidden; box-shadow:0 26px 70px rgba(55,40,25,.16);}
  .sv .soft-img img{width:100%; object-fit:cover; aspect-ratio:3/4; object-position:center top;}

  /* DESTACAT */
  .sv .destacat{background:linear-gradient(135deg,#fceae3,#fef5f1); border-left:4px solid var(--terra); border-radius:1rem; padding:clamp(1.2rem,3vw,2rem); font-size:clamp(1.15rem, 2.2vw, 1.4rem); color:var(--terra-fosc); line-height:1.65; font-family:Georgia,"Times New Roman",serif;}
  .sv .destacat p{color:var(--terra-fosc); font-size:inherit; line-height:inherit; font-family:inherit; margin-top:.6rem;}
  .sv .destacat p:first-child{margin-top:0;}

  /* PRICE */
  .sv .price-number{font-family:Georgia,"Times New Roman",serif; color:var(--terra); font-size:clamp(2.5rem, 6vw, 4.5rem); font-weight:900; line-height:1; margin:1.4rem 0 .4rem;}

  /* EM-SUB highlight */
  .sv .em-sub{display:inline; background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 32' preserveAspectRatio='none'%3E%3Cpath d='M6,9 C28,4 65,10 105,6 C142,2 178,8 195,7 C199,11 198,20 193,23 C158,28 115,23 75,25 C40,27 11,23 4,21 C1,18 2,13 6,9 Z' fill='%23ffffff' fill-opacity='0.55'/%3E%3C/svg%3E"); background-repeat:no-repeat; background-size:100% 100%; padding:0.12em 0.4em;}

  /* GRIDS */
  .sv .farem-grid{display:grid; grid-template-columns:clamp(200px,35%,400px) 1fr; gap:clamp(2rem,4vw,4rem); align-items:start;}
  .sv .bio-side{display:grid; grid-template-columns:1fr clamp(200px,35%,380px); gap:clamp(2rem,4vw,4rem); align-items:start;}

  /* CTA BLOCK */
  .sv .cta-block{background:linear-gradient(135deg,#e1bda6 0%,#c5a595 100%); border-radius:2rem; padding:clamp(2rem,4vw,3.2rem); text-align:center; box-shadow:0 30px 80px rgba(160,115,90,.22);}

  /* FAQ */
  .sv .faq{display:grid; gap:.7rem; margin-top:1.6rem;}
  .sv .faq-item{border:1px solid rgba(138,75,52,.15); border-radius:1.2rem; overflow:hidden; background:#fffdf8;}
  .sv .faq-item summary{list-style:none; cursor:pointer; padding:1.15rem 1.4rem; font-weight:700; font-size:clamp(1.15rem,2.2vw,1.4rem); color:#6b5347; font-family:Georgia,"Times New Roman",serif; display:flex; justify-content:space-between; align-items:center; gap:1rem; user-select:none;}
  .sv .faq-item summary::-webkit-details-marker{display:none;}
  .sv .faq-item summary::after{content:"+"; font-size:1.4rem; font-weight:400; color:var(--terra); flex-shrink:0; transition:transform .2s;}
  .sv .faq-item[open] summary::after{transform:rotate(45deg);}
  .sv .faq-item[open] summary{border-bottom:1px solid rgba(138,75,52,.1);}
  .sv .faq-body{padding:1.1rem 1.4rem 1.3rem; color:#6b5347; font-size:clamp(1.15rem,2.2vw,1.4rem); line-height:1.65; font-family:Georgia,"Times New Roman",serif;}
  .sv .faq-body p{margin:.6rem 0 0; color:#6b5347; font-size:inherit; line-height:inherit; font-family:inherit;}
  .sv .faq-body p:first-child{margin-top:0;}

  .sv footer{padding:3rem 0; background:#2d241d; color:rgba(255,255,255,.78); text-align:center; font-size:.94rem;}
  .sv .back-link{display:inline-flex; align-items:center; gap:.4rem; font-size:.88rem; color:var(--terra); padding:1.5rem 1.5rem 0; background:none; border:none; cursor:pointer; transition:color .2s; position:relative; z-index:1;}
  .sv .back-link:hover{color:var(--terra-fosc);}

  @media(max-width:900px){
    .sv .hero{min-height:68vh}
    .sv .farem-grid{grid-template-columns:1fr}
    .sv .farem-photo{order:-1; margin-bottom:1rem}
    .sv .bio-side{grid-template-columns:1fr}
    .sv .bio-photo{order:-1; margin-bottom:1rem}
  }
  @media(max-width:560px){
    .sv{font-size:16px}
    .sv .hero-inner,.sv .wrap{width:min(100% - 28px, var(--max))}
    .sv section{padding:2.4rem 0}
    .sv .btn{width:100%}
  }
`;

const faqData = [
  {
    q: "Necessito tenir un diagnòstic o saber exactament què em passa?",
    a: [
      "No.",
      "No cal que arribis a la sessió amb un diagnòstic ni amb les idees clares sobre què t'està passant.",
      "Tant si convius amb un desequilibri ginecològic concret com si simplement sents que alguna cosa no està en equilibri i no saps ben bé com explicar-ho, aquesta sessió és un espai per ordenar tot el que estàs vivint.",
      "Revisarem la teva història, els símptomes, el teu moment vital i aquells aspectes del teu dia a dia que poden estar influint en la teva salut femenina.",
      "A partir d'aquí, t'ajudaré a posar llum al teu cas i a comprendre quin podria ser el camí que té més sentit per a tu.",
    ],
  },
  {
    q: "Què treballarem durant la sessió?",
    a: [
      "Durant la sessió escoltaré el teu cas i et donaré una mirada global sobre allò que m'has compartit.",
      "Revisarem possibles factors que poden estar relacionats amb el teu desequilibri i et proposaré unes primeres orientacions i recursos que poden ajudar-te a començar a cuidar-te.",
      "Si considero que un procés d'acompanyament personalitzat pot ser adequat per a tu, t'explicaré com podria ser aquest camí.",
    ],
  },
  {
    q: "Després de la sessió he de fer obligatòriament l'acompanyament individual?",
    a: [
      "No.",
      "La sessió té valor per ella mateixa, perquè l'objectiu és que surtis amb més claredat sobre el teu cas i amb una millor comprensió del que pot estar passant.",
      "Si després de valorar-ho juntes considero que un procés més profund et pot ajudar, t'explicaré aquesta possibilitat. Però sempre serà una decisió teva.",
    ],
  },
  {
    q: "Quant dura la sessió i què he de preparar?",
    a: [
      "La sessió té una durada aproximada d'1h15min i és online.",
      "Abans de la trobada et demanaré que em comparteixis informació sobre la teva història, els teus símptomes i el moment vital en què et trobes, perquè pugui preparar la sessió i aprofitar millor el temps juntes.",
    ],
  },
  {
    q: "Sortiré de la sessió amb orientacions concretes?",
    a: [
      "L'objectiu principal de la sessió és comprendre què pot estar passant i trobar una orientació personalitzada.",
      "En funció del teu cas, et compartiré algunes primeres indicacions o recursos que poden tenir sentit per a tu, i valorarem si necessites un procés més profund per anar integrant-los i fer-ne seguiment.",
    ],
  },
];

function SessioPage() {
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

      <button onClick={() => window.history.back()} className="back-link">← Tornar</button>

      {/* HERO */}
      <header className="hero">
        <div className="hero-inner">
          <h1>Sessió Online de Valoració i Orientació Personalitzada</h1>
          <p className="hero-sub">El primer pas per posar llum al teu cas.</p>
        </div>
      </header>

      <main>

        {/* INTRO */}
        <section>
          <div className="wrap">
            <p style={{ marginTop: 0, textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              T&apos;ajudo a comprendre què pot estar expressant el teu cos<br />
              i a trobar quin camí pot tenir més sentit per a tu.
            </p>
            <p style={{ marginTop: "1.4rem" }}>
              Potser fa temps que convius amb un desequilibri ginecològic, un símptoma que es repeteix o una sensació que alguna cosa no està en equilibri.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Potser has buscat informació, has provat diferents opcions, però encara no tens clar d&apos;on pot venir el que estàs vivint ni què podries fer a partir d&apos;ara.
            </p>
            <p style={{ marginTop: "1rem" }}>
              En aquesta sessió posarem llum al teu cas.
            </p>
            <p style={{ marginTop: "1rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Un espai per escoltar la teva història, comprendre què pot estar expressant el teu cos i oferir-te una orientació personalitzada perquè puguis prendre decisions amb més claredat.
            </p>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Vull reservar la meva sessió
              </a>
            </p>
          </div>
        </section>

        {/* PER A QUI ÉS? */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Per a qui és?</h2>
            </div>
            <p style={{ marginTop: 0 }}>Aquesta sessió és per a tu si:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "1.2rem 0 0", display: "grid", gap: ".9rem" }}>
              {[
                "Tens un desequilibri ginecològic i vols una mirada integrativa per comprendre millor què pot estar passant al teu cos.",
                "Tens símptomes com dolor menstrual, cicles irregulars, sagnats abundants, amenorrea, miomes, quists, dolor en les relacions o altres molèsties relacionades amb la salut femenina, i sents que necessites una mirada més global i respectuosa sobre el teu cas.",
                "Vols valorar si un procés d'acompanyament personalitzat pot ser el següent pas per a tu.",
                "Sents que t'has desconnectat del teu cos, de la teva ciclicitat o de la teva matriu, i vols tornar a escoltar-lo.",
                "Estàs en els teus primers anys de climateri i vols comprendre millor aquesta nova etapa i trobar recursos naturals per acompanyar-te.",
                "Vols cuidar i autogestionar la teva salut femenina des d'una mirada natural, recuperant recursos i sabers que han sostingut les dones en moltes tradicions al llarg del temps.",
                "No saps per on començar i necessites una orientació personalitzada per saber quin podria ser el millor camí per a tu.",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".6rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>
                  <span style={{ flexShrink: 0, color: "var(--terra)", fontWeight: 700 }}>✔</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Vull reservar la meva sessió
              </a>
            </p>
          </div>
        </section>

        {/* QUÈ FAREM EN AQUESTA SESSIÓ? */}
        <section>
          <div className="wrap">
            <div className="section-title">
              <h2>Què farem en aquesta sessió?</h2>
            </div>
            <div className="farem-grid">
              {/* Photo left */}
              <div className="farem-photo">
                <div style={{ borderRadius: "1.7rem", overflow: "hidden", boxShadow: "0 16px 50px rgba(107,83,71,.18)" }}>
                  <img
                    src="/matrius/assets/gavinacama.jpg"
                    alt="La Gavina a la natura"
                    loading="lazy"
                    style={{ width: "100%", display: "block", objectFit: "cover", aspectRatio: "3/4" }}
                  />
                </div>
              </div>
              {/* Content right */}
              <div>
                <p style={{ marginTop: 0, textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
                  Una mirada global per començar a orientar el teu camí.
                </p>
                <p style={{ marginTop: "1.2rem", textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                  Abans de buscar respostes, necessitem ordenar el que estem vivint.
                </p>
                <p style={{ marginTop: ".3rem", textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                  Aquesta sessió és un espai per fer-ho juntes.
                </p>
                <p style={{ marginTop: "1.4rem" }}>Durant la sessió revisarem:</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0 0", display: "grid", gap: ".9rem" }}>
                  {[
                    "La teva història personal i ginecològica.",
                    "Els símptomes o desequilibris que estàs vivint actualment.",
                    "Els hàbits, rutines i factors que poden estar influint en el teu estat actual.",
                    "La possible relació entre diferents aspectes del teu cos, la teva ciclicitat i el teu moment vital.",
                  ].map((item) => (
                    <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: ".7rem", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>
                      <span style={{ flexShrink: 0 }}>🌿</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ marginTop: "1.4rem", fontWeight: 700, color: "#6b5347" }}>
                  Durada: 1h15 aproximadament.
                </p>
              </div>
            </div>

            <p style={{ marginTop: "1.8rem" }}>
              A partir d&apos;aquesta mirada global, et compartiré la meva comprensió del teu cas i una proposta orientativa sobre els camins que podrien ajudar-te.
            </p>

            {/* I DESPRÉS DE LA SESSIÓ? */}
            <div className="destacat" style={{ marginTop: "1.6rem" }}>
              <p style={{ fontWeight: 700, color: "var(--terra)", margin: 0, fontSize: "clamp(1.2rem, 2.3vw, 1.5rem)", textTransform: "uppercase", letterSpacing: ".04em" }}>
                I després de la sessió?
              </p>
              <p>
                Si després de la sessió totes dues sentim que té sentit continuar aquest camí, aquesta sessió serà el punt de partida per iniciar l&apos;acompanyament individualitzat.
              </p>
              <p>
                A partir del que hàgim observat, podré proposar-te un camí adaptat a tu, al teu moment vital i a les necessitats del teu cos.
              </p>
              <p>
                I si considero que aquest no és el procés més adequat per a tu, també t&apos;ho diré amb honestedat.
              </p>
            </div>
          </div>
        </section>

        {/* QUÈ T'EMPORTARÀS? */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Què t&apos;emportaràs?</h2>
            </div>
            <p style={{ marginTop: 0, textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              Quan entenem millor el que estem vivint,<br />
              també podem començar a decidir amb més calma i més confiança.
            </p>
            <p style={{ marginTop: "1.4rem" }}>Després de la sessió tindràs:</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "1rem 0 0", display: "grid", gap: ".9rem" }}>
              {[
                "Més claredat sobre què pot estar passant al teu cos.",
                "Una mirada més àmplia sobre el teu cas.",
                "Una orientació sobre quins passos podrien tenir més sentit per a tu.",
                "Una proposta inicial amb els camins que poden tenir més sentit per començar a cuidar la teva salut femenina.",
                "Més criteri per decidir si vols iniciar un procés d'acompanyament més profund.",
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
              <h2>Inversió</h2>
            </div>
            <p className="price-number">82€</p>
            <p style={{ marginTop: ".6rem" }}>
              Inclou la sessió online de valoració i orientació personalitzada (1h15 aproximadament).
            </p>
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Vull reservar la meva sessió
              </a>
            </p>
          </div>
        </section>

        {/* QUI T'ACOMPANYA? */}
        <section className="cream">
          <div className="wrap">
            <div className="section-title">
              <h2>Qui t&apos;acompanya?</h2>
            </div>
            <div className="bio-side">
              <div>
                <p style={{ marginTop: 0 }}>
                  Soc la Gavina i des de fa tretze anys recorro un camí de recerca, transformació i aprofundiment al voltant de la salut femenina, la relació amb el cos i la matriu.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  La meva mirada neix de la meva pròpia experiència de vida, del meu procés personal i de les diferents formacions que m&apos;han anat aportant eines per comprendre i acompanyar els processos de les dones: Teràpia Gestalt, Ginecologia Natural i Ancestral, Ciclicitat i Sexualitat Alquímica Femenina, Alimentació Regenerativa, Fitoginecologia, Moviment Pèlvic i altres recursos naturals.
                </p>
                <p style={{ marginTop: "1rem" }}>
                  Però el més important que he après no prové només de les formacions, sinó del meu propi camí.
                </p>
              </div>
              <div className="bio-photo soft-img">
                <img
                  src="/matrius/assets/gavinariu2prop.jpg"
                  alt="La Gavina"
                  loading="lazy"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
            </div>

            <p style={{ marginTop: "2rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              He après que{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                la salut femenina no es transforma només atenent els símptomes
              </span>
              . Necessitem escoltar el cos, comprendre què ens està expressant i recuperar la confiança en la saviesa que ja habita en la nostra matriu.
            </p>
            <p style={{ marginTop: "1.4rem" }}>
              Aquesta és la <strong style={{ color: "#6b5347" }}>mirada des d&apos;on avui t&apos;acompanyo</strong>: oferint-te un{" "}
              <span style={{ textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                espai d&apos;escolta profunda, claredat i orientació
              </span>
              {" "}perquè puguis comprendre millor el teu cas i trobar un camí coherent amb tu i amb el moment vital que estàs vivint.
            </p>
          </div>
        </section>

        {/* PREGUNTES FREQÜENTS */}
        <section>
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
              <details className="faq-item">
                <summary>Com puc saber si aquesta sessió és per a mi?</summary>
                <div className="faq-body">
                  <p>
                    Si sents que necessites entendre millor el teu cos, ordenar el que estàs vivint i trobar un camí més conscient per cuidar la teva salut femenina, aquesta sessió pot ser un bon primer pas.
                  </p>
                  <p style={{ marginTop: "1.4rem" }}>
                    <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra" style={{ fontSize: "clamp(.95rem, 1.8vw, 1.15rem)", padding: ".9rem 1.6rem", letterSpacing: ".04em" }}>
                      Escriu-me i valorarem juntes si és el moment adequat per a tu
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
                Estàs preparada per fer el primer pas?
              </h2>
              <p style={{ marginTop: "1.4rem", color: "#4a2e22", lineHeight: 1.65 }}>
                Si sents que <span className="em-sub">ha arribat el moment de mirar la teva salut femenina</span> des d&apos;un lloc més conscient,<br />
                aquesta sessió pot ser un bon començament.
              </p>
              <p style={{ marginTop: ".8rem", color: "#4a2e22", lineHeight: 1.65, fontWeight: 700, textAlign: "center" }}>
                Un espai per escoltar la teva història,<br />
                ordenar el que estàs vivint<br />
                i valorar juntes quin camí pot tenir més sentit per a tu.
              </p>
              <p style={{ marginTop: "1.8rem" }}>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Vull reservar la meva sessió
                </a>
              </p>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="wrap">
          Sessió Online de Valoració · Orientació Personalitzada · Gavina Freixa Rius
        </div>
      </footer>
    </div>
  );
}
