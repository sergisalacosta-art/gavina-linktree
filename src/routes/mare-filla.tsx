import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import logoImage from "@/assets/gavina-logo.png";

const WA_URL = "https://wa.me/34616351534";

export const Route = createFileRoute("/mare-filla")({
  component: MareFilla,
});

const css = `
  .mf{
    --terra:#8a4b34;
    --terra-fosc:#5d3428;
    --sorra:#f4ead7;
    --mel:#e5b66d;
    --text:#2b2925;
    --muted:#635d55;
    --blanc:#fffdf8;
    --max:1160px;
  }
  .mf *{box-sizing:border-box}
  .mf{
    color:var(--text);
    background:var(--blanc);
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height:1.55;
    font-size:17px;
    overflow-x:hidden;
    min-height:100vh;
    position:relative;
  }
  .mf img{max-width:100%;display:block}
  .mf a{color:inherit;text-decoration:none}

  /* HERO */
  .mf .hero{
    min-height:90vh;
    position:relative;
    display:grid;
    align-items:end;
    background:
      linear-gradient(90deg, rgba(45,36,27,.55), rgba(45,36,27,.10) 50%, rgba(45,36,27,.38)),
      url("/mare-filla/assets/hero.jpg") center center / cover no-repeat;
    color:white;
    isolation:isolate;
    z-index:1;
  }
  .mf .hero:after{
    content:"";
    position:absolute;
    inset:auto 0 0 0;
    height:55%;
    background:linear-gradient(180deg, transparent, rgba(36,29,23,.60));
    z-index:-1;
  }
  .mf .hero-inner{
    width:min(var(--max), calc(100% - 40px));
    margin:0 auto;
    padding:8rem 0 5.5rem;
    position:relative;
    z-index:1;
  }
  .mf h1,.mf h2,.mf h3{
    font-family: Georgia, "Times New Roman", serif;
    color:var(--terra);
    line-height:1.1;
    margin:0;
    font-weight:700;
  }
  .mf h1{
    color:white;
    font-size:clamp(2.2rem, 6vw, 5.5rem);
    letter-spacing:.04em;
    text-transform:uppercase;
    max-width:900px;
    text-wrap:balance;
    text-shadow:0 6px 24px rgba(0,0,0,.22);
    line-height:1.08;
  }
  .mf h1 .sub-line{
    display:block;
    font-size:clamp(1.3rem, 3vw, 2.8rem);
    text-transform:none;
    letter-spacing:.01em;
    margin-top:.35em;
    color:rgba(255,255,255,.95);
    font-style:italic;
    font-weight:400;
  }

  /* INTRO SECTION (below hero) */
  .mf .intro-subtitle{
    font-family:Georgia, "Times New Roman", serif;
    font-style:italic;
    font-size:clamp(1.2rem, 2.5vw, 1.8rem);
    color:var(--text);
    line-height:1.4;
    margin-bottom:1.8rem;
  }
  .mf .accent{ color:#7b1818; font-weight:700; font-style:normal; }
  .mf .accent-light{ color:#7b1818; font-weight:700; font-style:italic; }
  .mf .intro-desc{ display:flex; flex-direction:column; gap:1rem; }
  .mf .intro-desc p{ margin:0; color:var(--text); font-size:clamp(1.05rem,1.8vw,1.2rem); line-height:1.65; }

  /* SECTIONS */
  .mf section{padding:clamp(2.8rem, 5vw, 5rem) 0; position:relative; z-index:1;}
  .mf .wrap{width:min(var(--max), calc(100% - 40px)); margin:0 auto;}
  .mf .cream{background:linear-gradient(180deg, rgba(244,234,215,.55), rgba(255,253,248,.9))}
  .mf .card{background:#fffdf8; border:1px solid rgba(138,75,52,.12); border-radius:2rem; box-shadow:0 20px 60px rgba(84,54,34,.08);}
  .mf .text-card{padding:clamp(1.4rem,3.5vw,2.8rem)}
  .mf .grid-2{display:grid; grid-template-columns:minmax(0,1.06fr) minmax(300px,.94fr); gap:clamp(2rem,5vw,5rem); align-items:center;}
  .mf .soft-img{border-radius:1.7rem; overflow:hidden; box-shadow:0 26px 70px rgba(55,40,25,.16);}
  .mf .soft-img img{width:100%; object-fit:cover;}
  .mf .soft-img-h img{aspect-ratio:4/3;}
  .mf .soft-img-v img{aspect-ratio:3/4; object-position:center top;}
  .mf .portrait-img{position:relative; min-height:300px;}
  .mf .portrait-img img{position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:top;}

  /* EYEBROW + HEADINGS */
  .mf .eyebrow{
    font-family:Georgia, "Times New Roman", serif;
    color:var(--terra);
    text-transform:uppercase;
    letter-spacing:.12em;
    font-weight:700;
    font-size:1rem;
    display:block;
    padding-bottom:.5rem;
    border-bottom:1.5px solid var(--terra);
    margin-bottom:1.4rem;
  }
  .mf h2{font-size:clamp(1.7rem, 4vw, 3.4rem); color:var(--terra); text-wrap:balance; margin-bottom:1rem;}
  .mf h3{font-size:clamp(1.1rem, 2vw, 1.6rem); color:var(--terra-fosc); margin-bottom:.8rem;}

  /* BODY TEXT */
  .mf p{margin:.75rem 0 0; color:var(--muted); font-size:clamp(1.05rem, 1.8vw, 1.2rem); line-height:1.65;}
  .mf p:first-child{margin-top:0;}

  /* BULLETS */
  .mf .bullets{list-style:none; padding:0; margin:1.2rem 0 0; display:grid; gap:.9rem;}
  .mf .bullets li{position:relative; padding-left:1.5rem; color:var(--muted); font-size:clamp(1.05rem, 1.8vw, 1.2rem); line-height:1.6;}
  .mf .bullets li:before{content:""; position:absolute; left:0; top:.75em; width:.45rem; height:.45rem; border-radius:50%; background:var(--terra);}
  .mf .bullets li em{font-style:italic; color:var(--terra-fosc);}

  /* TESTIMONIALS */
  .mf .testi-carousel{display:flex; align-items:center; gap:1.2rem;}
  .mf .testi-track{flex:1; overflow:hidden;}
  .mf .testi-card{background:#fffdf8; border-radius:1.7rem; padding:2rem 2.2rem; box-shadow:0 4px 20px -8px rgba(90,40,20,.1); border:1px solid rgba(138,75,52,.1);}
  .mf .testi-card p{font-size:.98rem; color:var(--muted); line-height:1.72; font-style:italic; margin-bottom:1rem;}
  .mf .testi-card cite{font-style:normal; font-weight:800; font-size:.88rem; color:var(--terra);}
  .mf .testi-arrow{flex-shrink:0; width:2.6rem; height:2.6rem; border-radius:50%; border:none; background:var(--terra); color:#fff; font-size:1.5rem; line-height:1; cursor:pointer; display:flex; align-items:center; justify-content:center; transition:background .2s, transform .15s;}
  .mf .testi-arrow:hover{background:var(--terra-fosc); transform:scale(1.08);}
  .mf .testi-dots{display:flex; justify-content:center; gap:.55rem; margin-top:1.4rem;}
  .mf .testi-dot{width:.5rem; height:.5rem; border-radius:50%; background:var(--mel); border:none; cursor:pointer; padding:0; transition:background .2s, transform .2s;}
  .mf .testi-dot.active{background:var(--terra); transform:scale(1.3);}

  /* CTA */
  .mf .cta-block{background:var(--terra); border-radius:2rem; padding:clamp(2rem,4vw,3.2rem); text-align:center; box-shadow:0 30px 80px rgba(93,52,40,.22);}
  .mf .btn{display:inline-flex; align-items:center; justify-content:center; border-radius:999px; padding:.9rem 2.2rem; font-weight:700; font-size:1rem; gap:.5rem; text-decoration:none; transition:transform .18s;}
  .mf .btn:hover{transform:translateY(-2px);}
  .mf .btn-white{background:#fff; color:var(--terra);}

  /* FOOTER & BACK */
  .mf footer{padding:3rem 0; background:#2d241d; color:rgba(255,255,255,.78); text-align:center; font-size:.94rem;}
  .mf .back-link{display:inline-flex; align-items:center; gap:.4rem; font-size:.88rem; font-style:italic; color:var(--terra); padding:1.5rem 1.5rem 0; background:none; border:none; cursor:pointer; transition:color .2s; position:relative; z-index:1;}
  .mf .back-link:hover{color:var(--terra-fosc);}

  @media(max-width:900px){
    .mf .hero{min-height:78vh;}
    .mf .grid-2{grid-template-columns:1fr;}
    .mf .portrait-img{min-height:0; aspect-ratio:4/5;}
  }
  @media(max-width:560px){
    .mf{font-size:16px;}
    .mf .hero-inner,.mf .wrap{width:min(100% - 28px, var(--max));}
    .mf section{padding:2.4rem 0;}
  }
`;

const testimonialsData = [
  {
    text: "Vam iniciar les sessions amb la Gavina perquè la meva filla Laia, de 13 anys, tenia molts dolors durant la menstruació. A la Laia li van anar molt bé les sessions presencials perquè eren un espai on es relaxava i connectava, i a mi també. Durant tot el procés ens vam sentir molt còmodes i la Laia va expressar amb tranquil·litat allò que sentia en un clima de molta confiança. Va aprendre a conèixer com funciona el seu cicle, ubicar el seu úter i ovaris. Els massatges matriu, també, fets amb molta delicadesa i tendresa ens van fer sentir molt a gust. Hem fet un aprenentatge, mare i filla, que ens servirà per sempre. Seguint les pautes de la Gavina, la Laia ha millorat molt.",
    name: "Teresa R.",
  },
  {
    text: "Feia temps que tenia problemes menstruals, amenorrea, sagnats intermenstruals i ja m'havien visitat diferents professionals (endocrina ginecòlegs, metges i fins i tot nutricionista sense gaire èxit). Vaig decidir començar amb la Gavina perquè volia provar una altra mirada, buscar l'arrel del problema des d'una perspectiva més natural i entenent el llenguatge del meu cos. La Gavina em va ensenyar a mirar-me com mai, a posar-me al centre i escoltar el meu cos. A donar-li descans i la pausa que necessitava per tenir energia suficient per ovular. També gràcies als seus coneixements, de manera paral·lela, vaig poder obtenir més respostes dels metges. Em van trobar un càncer a l'úter, que no m'haguessin diagnosticat tan a temps si ella no m'hagués assessorat. La Gavina em va ajudar moltíssim a decidir el meu tractament amb tota la informació. Tan de bo hagués trobat una mirada com la de la Gavina anys enrere.",
    name: "Lorena",
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

function MareFilla() {
  return (
    <div className="mf">
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
          <h1>
            Acompanyament <span style={{ whiteSpace: "nowrap" }}>a <span className="accent-light">mares</span> i <span className="accent-light">filles</span></span>
            <span className="sub-line">amb <span className="accent">Dismenorrea</span> o <span className="accent">Síndrome Premenstrual</span></span>
          </h1>
        </div>
      </header>

      <main>
        {/* INTRO */}
        <section>
          <div className="wrap">
            <div className="intro-desc">
              <p>Tenir una <span className="accent">Dismenorrea</span> o <span className="accent">Síndrome Premenstrual</span> equival a <span className="accent">no estar en salut</span>.</p>
              <p>La <span className="accent">Dismenorrea</span> és un dolor incapacitant, acompanyat sovint de nàusees i vòmits, durant els primers dies del sagnat.</p>
              <p>El <span className="accent">Síndrome Premenstrual</span> és un conjunt de símptomes mentals, emocionals i físics que es presenten en cada fase premenstrual.</p>
              <p>Ni la <span className="accent">Dismenorrea</span> ni el <span className="accent">Síndrome Premenstrual</span> s&apos;han de naturalitzar. <span className="accent">Poden acabar desencadenant</span>, a la llarga, <span className="accent">altres desequilibris ginecològics més greus</span>.</p>
            </div>
          </div>
        </section>

        {/* EN QUÈ CONSISTEIX */}
        <section>
          <div className="wrap grid-2">
            <div className="card text-card">
              <span className="eyebrow">En què consisteix</span>
              <p>T&apos;acompanyo perquè aprenguis a <strong>cuidar la teva salut femenina ginecològica</strong> i així puguis <strong>acompanyar la de la teva filla</strong>.</p>
              <p>Et guio perquè vagis integrant les bases que ens mantenen en salut a les dones. I al mateix temps, t&apos;aniré indicant les <strong>pautes perquè puguis acompanyar la teva filla</strong>, <strong>pas a pas</strong>, en la seva situació de dismenorrea i/o Síndrome Premenstrual per <strong>resoldre el seu desequilibri des de l&apos;arrel</strong>, <strong>amb recursos naturals i atenent l&apos;arrel que està ocasionant</strong>.</p>
            </div>
            <div className="soft-img soft-img-h">
              <img src="/mare-filla/assets/mans.jpg" alt="Massatge de matriu" loading="lazy" />
            </div>
          </div>
        </section>

        {/* PER A QUI ÉS */}
        <section className="cream">
          <div className="wrap">
            <span className="eyebrow">Per a qui és</span>
            <h2>És per tu (mare) si…</h2>
            <ul className="bullets">
              <li>La teva filla està patint dolors menstruals (Dismenorrea) o Síndrome Premenstrual i la vols acompanyar de manera natural i des de l&apos;arrel, lluny de fàrmacs i &ldquo;parxes&rdquo;</li>
              <li>Vols aprendre a prevenir i cuidar la teva salut femenina ginecològica per tu mateixa i per tenir més recursos a l&apos;hora d&apos;acompanyar la teva filla</li>
              <li>Mai has tingut dolors menstruals i la teva filla en comença a tenir. No saps com acompanyar-la però tens clar que no vols que depengui d&apos;antiinflamatoris químics ni anticonceptives hormonals</li>
              <li>Has patit sempre dolors menstruals, has pres anticonceptives durant molts anys, ja has comprovat els llargs efectes secundaris i no vols que la teva filla passi pel mateix</li>
              <li>Vols que la teva filla aprengui a cuidar la seva salut menstrual i vols acompanyar-la però no saps com fer-ho perquè tu mai has posat gaire atenció al teu cicle</li>
            </ul>
            <p style={{ marginTop: "1.4rem", fontStyle: "italic" }}>… o algun cas similar als esmentats.</p>
          </div>
        </section>

        {/* COM HO FAREM */}
        <section>
          <div className="wrap grid-2">
            <div className="soft-img soft-img-h">
              <img src="/mare-filla/assets/plantes.jpg" alt="Plantes medicinals" loading="lazy" />
            </div>
            <div className="card text-card">
              <span className="eyebrow">Com ho farem?</span>
              <p>T&apos;acompanyo a integrar bé les 4 bases per millorar i mantenir la teva salut femenina:</p>
              <ul className="bullets">
                <li>Alimentació fisiològica</li>
                <li>Rutines bàsiques adaptades al teu dia a dia</li>
                <li>Desparasitació amb plantes</li>
                <li>Fotoginecologia adaptada al teu cas</li>
              </ul>
              <p style={{ marginTop: "1.4rem" }}>Paral·lelament, t&apos;aniré indicant les pautes a seguir per a la teva filla en el seu cas concret.</p>
            </div>
          </div>
        </section>

        {/* QUÈ INCLOU */}
        <section className="cream">
          <div className="wrap grid-2">
            <div className="card text-card">
              <span className="eyebrow">Què inclou</span>
              <p>Durant 4 mesos us acompanyo a les dues perquè integreu les pautes per cuidar la vostra salut femenina.</p>
              <ul className="bullets">
                <li>Primera sessió online de valoració i revisió del teu cas (1,30h)</li>
                <li>Segona sessió online de valoració i revisió del cas de la teva filla (1,30h)</li>
                <li>4 mesos d&apos;acompanyament individual amb seguiment via correu</li>
                <li>Sessions de vídeo gravades + resum de pautes a seguir</li>
                <li>Última sessió valoració final i tancament del teu cas (1,30h)</li>
                <li>Última sessió valoració final i tancament del cas de la teva filla (1,30h)</li>
                <li>4 massatges matriu</li>
              </ul>
            </div>
            <div className="soft-img soft-img-h">
              <img src="/mare-filla/assets/mm.jpg" alt="Mans sostenint flors de calèndula" loading="lazy" />
            </div>
          </div>
        </section>

        {/* QUI ACOMPANYA */}
        <section>
          <div className="wrap grid-2" style={{ alignItems: "stretch" }}>
            <div className="soft-img portrait-img">
              <img src="/mare-filla/assets/gavina.jpg" alt="La Gavina" loading="lazy" />
            </div>
            <div className="card text-card">
              <span className="eyebrow">Qui acompanya</span>
              <p>Soc la Gavina, acompanyant de dones que tenen ganes de cuidar la seva salut femenina ginecològica aplicant rutines bàsiques d&apos;autocura i pautes de prevenció reals i naturals, lluny de fàrmacs i intervencions quirúrgiques.</p>
              <p>Uns recursos que són les bases de la salut femenina i que han sostingut, i sostenen, les dones en diferents tradicions mil·lenàries d&apos;arreu del món.</p>
            </div>
          </div>
        </section>

        {/* TESTIMONIS */}
        <section className="cream">
          <div className="wrap">
            <div style={{ marginBottom: "2rem" }}>
              <span className="eyebrow">Testimonis</span>
            </div>
            <TestimonialCarousel />
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="wrap">
            <div className="cta-block">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.2rem", height: "1.2rem" }} aria-hidden="true">
                  <path d="M19.05 4.91A10 10 0 0 0 12 2a10 10 0 0 0-8.66 15l-1.3 4.74 4.86-1.27A10 10 0 1 0 19.05 4.91Zm-7.05 15.4a8.27 8.27 0 0 1-4.22-1.16l-.3-.18-2.88.75.77-2.81-.2-.31A8.31 8.31 0 1 1 20.3 12a8.34 8.34 0 0 1-8.3 8.31Zm4.55-6.22c-.25-.13-1.48-.73-1.71-.81s-.4-.13-.56.13-.65.81-.79.97-.29.18-.54.06a6.78 6.78 0 0 1-2-1.23 7.56 7.56 0 0 1-1.4-1.74c-.14-.25 0-.38.11-.51s.25-.29.37-.43a1.62 1.62 0 0 0 .25-.41.46.46 0 0 0 0-.44c-.06-.13-.56-1.34-.76-1.83s-.4-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.81 2.81 0 0 0-.88 2.1 4.91 4.91 0 0 0 1 2.59 11.16 11.16 0 0 0 4.27 3.77 14.43 14.43 0 0 0 1.42.52 3.43 3.43 0 0 0 1.57.1 2.58 2.58 0 0 0 1.69-1.19 2.1 2.1 0 0 0 .14-1.19c-.06-.1-.22-.16-.47-.28Z"/>
                </svg>
                Escriu-me i valorem el vostre cas
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          Gavina Freixa Rius · Salut Cíclica Femenina
        </div>
      </footer>
    </div>
  );
}
