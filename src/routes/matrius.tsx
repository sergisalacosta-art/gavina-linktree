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

  .mp footer{padding:3rem 0; background:#2d241d; color:rgba(255,255,255,.78); text-align:center; font-size:.94rem;}
  .mp .back-link{display:inline-flex; align-items:center; gap:.4rem; font-size:.88rem; color:var(--terra); padding:1.5rem 1.5rem 0; background:none; border:none; cursor:pointer; transition:color .2s; position:relative; z-index:1;}
  .mp .back-link:hover{color:var(--terra-fosc);}

  @media(max-width:900px){
    .mp .hero{min-height:74vh}
    .mp .grid-2-img{grid-template-columns:1fr}
    .mp .format-grid{grid-template-columns:repeat(2,1fr)}
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
  { text: "Anar al Cercle de Dones és meravellós. Són moltes coses positives per mi. És com anar a la meva illa de la calma i de la pau. És un espai d'autocura total. Un espai on estic pensant només en mi i en les meves companyes. Un espai on puc trobar aquestes mirades còmplices i amoroses de les dones que formen part del cercle amb mi i de la Gavina, que acompanya amb aquesta saviesa tan encertada, que sap acompanyar sense dirigir i això és important perquè em sento acompanyada i escoltada. Un espai on em sento molt sostinguda i on també tinc l'oportunitat de sostenir. M'encanta.", name: "Carolina A." },
  { text: "Visualitzo la Gavina com una sàvia xamana, a la qual acudir i confiar. Trobar dones tan potents com ella, amb aquesta mirada reivindicativa i amorosa, m'encanta i em connecta amb allò que per mi és important.", name: "Alba C." },
  { text: "Gràcies, Gavina, per iniciar-me en aquest camí cap al coneixement de mi mateixa; ara puc mirar els meus fills amb uns altres ulls. Gràcies també per acompanyar-me en l'autoconeixement, per permetre sentir tot el que em passa, incloses les emocions més difícils, i ensenyar-me a escoltar-me, ara soc capaç de reconèixer amb més facilitat les meves emocions, i també les dels altres. He après que la maternitat necessita de saber-nos escoltar per poder escoltar els altres i veure'ls de veritat. També gràcies per la tribu i la companyia, el camí és més fàcil amb les mares del cercle.", name: "Queralt S." },
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
            <p style={{ marginTop: "1.2rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>Perquè quan les dones ens reunim amb la intenció de cuidar-nos, escoltar-nos i recordar la nostra saviesa, alguna cosa es transforma.</p>

            <div className="destacat">
              <p style={{ fontWeight: 700, color: "var(--terra)", margin: 0, fontSize: "clamp(1.2rem, 2.3vw, 1.5rem)" }}>
                Més enllà dels recursos: el poder del cercle
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
                  src="/matrius/assets/haseya-dones.jpg"
                  alt="Cercle de dones"
                  style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "480px", objectPosition: "center" }}
                />
              </div>
              <p style={{ marginTop: "0", textAlign: "center", color: "var(--terra)", fontWeight: 700, textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                No és només un espai per aprendre sobre salut femenina.<br />
                És un espai per caminar aquest procés al costat d&apos;altres dones,<br />
                recordant juntes la saviesa que habita en cada una de nosaltres.
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
            <p>Durant cinc mesos recorrerem diferents camins que t&apos;ajudaran a cultivar aquesta nova relació amb la teva matriu:</p>
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
            <div style={{ marginTop: "2rem", borderRadius: "1.2rem", overflow: "hidden" }}>
              <img
                src="/matrius/assets/surita-copalera.jpg"
                alt="Surita copalera"
                style={{ width: "100%", display: "block", objectFit: "cover", maxHeight: "480px", objectPosition: "center top" }}
              />
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
                <div key={title} style={{ background: "#fffdf8", border: "1.5px solid rgba(138,75,52,.18)", borderRadius: "1.2rem", padding: "clamp(.9rem,2vw,1.4rem)", display: "flex", flexDirection: "column", gap: ".5rem" }}>
                  <p style={{ fontWeight: 700, margin: 0, color: "#6b5347", fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', lineHeight: 1.35 }}>{title}</p>
                  <p style={{ margin: 0, fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)", fontFamily: 'Georgia, "Times New Roman", serif', color: "#6b5347", lineHeight: 1.6 }}>{desc}</p>
                </div>
              ))}
            </div>
            <p style={{ marginTop: "2.4rem", textAlign: "center", fontWeight: 700, color: "#6b5347" }}>
              No es tracta de fer-ho tot ni d&apos;aplicar tots els recursos de cop.<br />
              Es tracta d&apos;anar integrant, pas a pas, allò que tingui sentit per a tu.
            </p>
            <div style={{ marginTop: "1.8rem", background: "linear-gradient(135deg,#fceae3,#fef5f1)", border: "1px solid rgba(138,75,52,.18)", borderRadius: "1rem", padding: "clamp(1.2rem,3vw,2rem)" }}>
              <p style={{ margin: 0, color: "#6b5347", fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)" }}>
                <strong style={{ textTransform: "uppercase" }}>Inici:</strong> finals de novembre
              </p>
              <p style={{ marginTop: ".4rem", color: "#6b5347", fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)" }}>
                <strong style={{ textTransform: "uppercase" }}>Finalització:</strong> finals d&apos;abril
              </p>
              <p style={{ marginTop: ".9rem", textAlign: "center", color: "#6b5347", fontFamily: 'Georgia, "Times New Roman", serif', fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)" }}>
                <strong style={{ textTransform: "uppercase", display: "block" }}>Places limitades.</strong>
                El nombre de dones serà reduït per poder cuidar el grup i oferir un acompanyament proper i personalitzat.
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
