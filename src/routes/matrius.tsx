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
    color:white;
    font-size:clamp(3rem, 8vw, 7.2rem);
    letter-spacing:.045em;
    text-transform:uppercase;
    max-width:980px;
    text-wrap:balance;
    text-shadow:0 8px 30px rgba(0,0,0,.18);
  }
  .mp .subtitle{
    margin:1.4rem 0 0;
    max-width:700px;
    color:rgba(255,255,255,.92);
    font-size:clamp(1.05rem, 2vw, 1.4rem);
    font-family:Georgia,"Times New Roman",serif;
    line-height:1.5;
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
  }
  @media(max-width:560px){
    .mp{font-size:16px}
    .mp .hero-inner,.mp .wrap{width:min(100% - 28px, var(--max))}
    .mp section{padding:2.4rem 0}
    .mp .btn{width:100%}
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
          <p className="subtitle">Un viatge de cinc mesos per recuperar la relació amb la teva matriu i la teva saviesa femenina</p>
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
            <p style={{ marginTop: ".8rem" }}>Perquè quan les dones ens reunim amb la intenció de cuidar-nos, escoltar-nos i recordar la nostra saviesa, alguna cosa es transforma.</p>
            <div style={{ marginTop: "1.8rem", textAlign: "center" }}>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                Vull formar part del cercle
              </a>
            </div>

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
              <p style={{ marginTop: "1.4rem", textAlign: "center", color: "var(--terra)", fontWeight: 700, textDecoration: "underline", textDecorationColor: "#c89684", textDecorationThickness: "2px", textUnderlineOffset: "5px" }}>
                No és només un espai per aprendre sobre salut femenina.<br />
                És un espai per caminar aquest procés al costat d&apos;altres dones,<br />
                recordant juntes la saviesa que habita en cada una de nosaltres.
              </p>
              <div style={{ textAlign: "center", marginTop: "1.8rem" }}>
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-terra">
                  Vull formar part de Matrius en Cercle
                </a>
              </div>
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
