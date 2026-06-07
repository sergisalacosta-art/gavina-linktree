import { createFileRoute } from "@tanstack/react-router";
import logoImage from "@/assets/gavina-logo.png";

const WA_URL = "https://wa.me/34616351534";

export const Route = createFileRoute("/xerrades")({
  component: XerradesPage,
});

const css = `
  .xp{
    --terra:#8a4b34;
    --terra-fosc:#5d3428;
    --sorra:#f4ead7;
    --sorra-2:#fff8ea;
    --mel:#e5b66d;
    --text:#2b2925;
    --muted:#635d55;
    --blanc:#fffdf8;
    --max:1160px;
  }
  .xp *{box-sizing:border-box}
  .xp{
    color:var(--text);
    background:var(--blanc);
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height:1.55;
    font-size:17px;
    overflow-x:hidden;
    min-height:100vh;
    position:relative;
  }
  .xp img{max-width:100%;display:block}
  .xp a{color:inherit;text-decoration:none}

  .xp .hero{
    min-height:86vh;
    position:relative;
    display:grid;
    align-items:end;
    background: linear-gradient(90deg, rgba(45,36,27,.50), rgba(45,36,27,.08) 44%, rgba(45,36,27,.32)),
      url("/xerrades/assets/Hero.png") center center / cover no-repeat;
    color:white;
    isolation:isolate;
    z-index:1;
  }
  .xp .hero:after{
    content:"";
    position:absolute;
    inset:auto 0 0 0;
    height:45%;
    background:linear-gradient(180deg, transparent, rgba(36,29,23,.52));
    z-index:-1;
  }
  .xp .hero-inner{
    width:min(var(--max), calc(100% - 40px));
    margin:0 auto;
    padding:7rem 0 5.5rem;
    position:relative;
    z-index:1;
  }
  .xp .kicker{
    letter-spacing:.18em;
    text-transform:uppercase;
    color:rgba(255,255,255,.86);
    font-size:.78rem;
    margin:0 0 1rem;
    font-weight:600;
  }
  .xp h1,.xp h2,.xp h3{
    font-family: Georgia, "Times New Roman", serif;
    color:var(--terra);
    line-height:1.06;
    margin:0;
    font-weight:700;
  }
  .xp h1{
    color:white;
    font-size:clamp(3rem, 8vw, 7.2rem);
    letter-spacing:.045em;
    text-transform:uppercase;
    max-width:980px;
    text-wrap:balance;
    text-shadow:0 8px 30px rgba(0,0,0,.18);
  }
  .xp .subtitle{
    margin:1.2rem 0 0;
    max-width:660px;
    color:rgba(255,255,255,.92);
    font-size:clamp(1.05rem, 2vw, 1.35rem);
    line-height:1.4;
  }
  .xp .avís{
    margin:.8rem 0 0;
    max-width:660px;
    color:rgba(255,255,255,.75);
    font-size:clamp(.85rem, 1.5vw, 1rem);
    font-style:italic;
    line-height:1.4;
  }
  .xp .btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    border-radius:999px;
    padding:.88rem 2rem;
    text-decoration:none;
    font-weight:700;
    font-size:1rem;
    letter-spacing:.01em;
    border:1px solid transparent;
    transition:transform .18s ease, background .18s ease;
    gap:.5rem;
  }
  .xp .btn:hover{transform:translateY(-2px)}
  .xp .btn-primary{background:var(--mel); color:#221a14}
  .xp section{padding:clamp(2.8rem, 5vw, 5rem) 0; position:relative; z-index:1;}
  .xp .wrap{width:min(var(--max), calc(100% - 40px)); margin:0 auto;}
  .xp .eyebrow{
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
  .xp h2{font-size:clamp(1.7rem, 4vw, 3.4rem); color:var(--terra); text-wrap:balance; margin-bottom:1rem;}
  .xp h3{font-size:clamp(1.15rem, 2.1vw, 1.83rem); color:var(--terra-fosc); margin-bottom:.8rem;}
  .xp .lead{font-size:clamp(1.08rem, 2vw, 1.28rem); max-width:780px; color:var(--muted); margin-bottom:1rem; line-height:1.6;}
  .xp p{margin:.75rem 0 0; color:var(--text); line-height:1.65;}
  .xp .cream{background:linear-gradient(180deg, rgba(244,234,215,.55), rgba(255,253,248,.9))}
  .xp .card{background:#fffdf8; border:1px solid rgba(138,75,52,.12); border-radius:2rem; box-shadow:0 20px 60px rgba(84,54,34,.08);}
  .xp .text-card{padding:clamp(1.4rem,3.5vw,2.8rem)}
  .xp .grid-2{display:grid; grid-template-columns:minmax(0,1.06fr) minmax(300px,.94fr); gap:clamp(2rem,5vw,5rem); align-items:center;}
  .xp .soft-img{border-radius:1.7rem; overflow:hidden; box-shadow:0 26px 70px rgba(55,40,25,.16);}
  .xp .soft-img img{width:100%; object-fit:cover;}
  .xp .soft-img-h img{aspect-ratio:4/3;}
  .xp .soft-img-v img{aspect-ratio:3/4; object-position:center top;}
  .xp .bullets{list-style:none; padding:0; margin:1.2rem 0 0; display:grid; gap:.9rem;}
  .xp .bullets li{position:relative; padding-left:1.45rem; color:var(--text); line-height:1.55;}
  .xp .bullets li:before{content:""; position:absolute; left:0; top:.72em; width:.46rem; height:.46rem; border-radius:50%; background:var(--terra);}
  .xp .photos-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:1.2rem; margin-top:2.5rem;}
  .xp .photos-grid .soft-img img{aspect-ratio:4/3;}
  .xp .cta-block{background:var(--terra); color:white; border-radius:2rem; padding:clamp(2rem,4vw,3.2rem); text-align:center; box-shadow:0 30px 80px rgba(93,52,40,.22);}
  .xp .cta-block h2{color:white; font-size:clamp(1.5rem,3vw,2.4rem); margin-bottom:1.2rem;}
  .xp .btn-white{background:#fff; color:var(--terra); font-weight:700;}
  .xp footer{padding:3rem 0; background:#2d241d; color:rgba(255,255,255,.78); text-align:center; font-size:.94rem;}
  .xp .back-link{display:inline-flex; align-items:center; gap:.4rem; font-size:.88rem; font-style:italic; color:var(--terra); padding:1.5rem 1.5rem 0; background:none; border:none; cursor:pointer; transition:color .2s; position:relative; z-index:1;}
  .xp .back-link:hover{color:var(--terra-fosc);}
  @media(max-width:900px){
    .xp .hero{min-height:74vh}
    .xp .grid-2{grid-template-columns:1fr}
    .xp .photos-grid{grid-template-columns:1fr 1fr}
  }
  @media(max-width:560px){
    .xp{font-size:16px}
    .xp .hero-inner,.xp .wrap{width:min(100% - 28px, var(--max))}
    .xp section{padding:2.4rem 0}
    .xp .photos-grid{grid-template-columns:1fr}
  }
`;

function XerradesPage() {
  return (
    <div className="xp">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 55%, transparent 80%)",
        }}
      >
        <img src={logoImage} alt="" style={{ width: "90vw", maxWidth: "1300px", opacity: 0.12 }} />
      </div>

      <button onClick={() => window.history.back()} className="back-link">← Tornar</button>

      <header className="hero">
        <div className="hero-inner">
          <p className="kicker">Xerrada per a AFAs, ajuntaments i d'altres</p>
          <h1>Menstruar sense dolor</h1>
          <p className="subtitle">Acompanyar la salut femenina de la teva filla des de l'arrel, detectant senyals d'alerta i aplicant recursos naturals d'autocura i prevenció</p>
          <p className="avís">(AVÍS IMPORTANT: El contingut no és el mateix que el d'una xerrada taller d'educació sexual).</p>
        </div>
      </header>

      <main>
        {/* Presentació */}
        <section>
          <div className="wrap grid-2">
            <div className="card text-card">
              <span className="eyebrow">Presentació</span>
              <p className="lead">Per cuidar la salut femenina de la teva filla cal començar per la teva. Com pots acompanyar-la si tens dubtes sobre el teu cicle? Sabries identificar quan un símptoma premenstrual o menstrual és un senyal d'alerta?</p>
              <p>Es normalitza el dolor menstrual i la solució no és tapar-lo amb una pastilla, sinó entendre'n la causa, cuidar-se de debò i resoldre'l des de l'arrel amb respecte vers el teu cos per prevenir desequilibris ginecològics futurs.</p>
              <p style={{ marginTop: "1.4rem", fontStyle: "italic", color: "var(--terra-fosc)", fontWeight: 600 }}>Aquesta xerrada és un espai per a dones que volen trencar amb l'herència del patiment menstrual.</p>
            </div>
            <div className="soft-img soft-img-v">
              <img src="/xerrades/assets/Hero.png" alt="Mare i filla passejant entre flors" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Per a qui és */}
        <section className="cream">
          <div className="wrap">
            <span className="eyebrow">Per a qui és</span>
            <ul className="bullets">
              <li>Famílies de nenes menstruants o que estan a punt.</li>
              <li>Dones que volen conèixer recursos naturals per cuidar la seva salut femenina.</li>
            </ul>
          </div>
        </section>

        {/* Objectius i contingut */}
        <section>
          <div className="wrap">
            <span className="eyebrow">Objectius i contingut</span>
            <p className="lead">El meu objectiu és que les famílies coneguin bé les pautes per cuidar de debò la salut femenina des dels inicis de l'etapa fèrtil, i així prevenir el desenvolupament de símptomes futurs. I que siguin conscients de la importància d'atendre a temps els dolors menstruals, si apareixen, perquè no desencadenin altres desequilibris ginecològics.</p>
            <ul className="bullets">
              <li>Entendre els orígens del dolor en els òrgans femenins: més enllà de la fisiologia</li>
              <li>Senyals d'un cicle saludable vs senyals d'alerta durant la fase premenstrual i la menstruació. Què és normal i què no hem de naturalitzar?</li>
              <li>Passos a seguir si apareixen símptomes i riscos de no atendre'ls</li>
              <li>Conseqüències de les anticonceptives hormonals, els antinflamatoris, les compreses de plàstic, i les extirpacions</li>
              <li>Tractament natural per a dismenorrea i síndrome premenstrual</li>
              <li>Aprendre a cuidar-se de forma natural, pràctica, econòmica i senzilla. Pautes d'autocura</li>
              <li>Hàbits i rutines per atenuar símptomes i prevenir-los</li>
            </ul>
          </div>
        </section>

        {/* Format */}
        <section className="cream">
          <div className="wrap grid-2">
            <div>
              <span className="eyebrow">Format</span>
              <p className="lead">Xerrada participativa. Hi haurà espai per a preguntes, resolució de dubtes, i compartirs de casos personals si sorgeix la necessitat.</p>
            </div>
            <div className="soft-img soft-img-h">
              <img src="/xerrades/assets/xerrada-1.jpg" alt="Xerrada en petit grup" loading="lazy" />
            </div>
          </div>
        </section>

        {/* Qui soc */}
        <section>
          <div className="wrap grid-2">
            <div className="soft-img soft-img-h">
              <img src="/xerrades/assets/xerrada-2.jpg" alt="Xerrada en grup gran" loading="lazy" />
            </div>
            <div className="card text-card">
              <span className="eyebrow">Qui soc</span>
              <p>El meu objectiu és que les famílies de les adolescents tinguin tota la informació clara damunt la taula per poder compartir-la amb les seves filles i, juntes, decidir com actuar. Per això els la vull transmetre d'una manera resumida, simple, clara i sense tabús.</p>
              <p style={{ marginTop: "1rem" }}>Totes ens mereixem viure la nostra ciclicitat sent conscients i entenent com funciona el nostre cicle i així viure'l amb autonomia, respectant els nostres cossos i gaudint de totes les nostres fases. Amb naturalitat, comoditat i plaer, i amb productes que ens cuiden.</p>
            </div>
          </div>
        </section>

        {/* Galeria fotos */}
        <section className="cream">
          <div className="wrap">
            <div className="photos-grid">
              <div className="soft-img"><img src="/xerrades/assets/xerrada-1.jpg" alt="Xerrada grup" loading="lazy" /></div>
              <div className="soft-img"><img src="/xerrades/assets/xerrada-2.jpg" alt="Xerrada grup gran" loading="lazy" /></div>
              <div className="soft-img"><img src="/xerrades/assets/xerrada-3.jpg" alt="Xerrada amb participants" loading="lazy" /></div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className="wrap">
            <div className="cta-block">
              <h2>Contacte</h2>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="btn btn-white">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.2rem", height: "1.2rem" }} aria-hidden="true">
                  <path d="M19.05 4.91A10 10 0 0 0 12 2a10 10 0 0 0-8.66 15l-1.3 4.74 4.86-1.27A10 10 0 1 0 19.05 4.91Zm-7.05 15.4a8.27 8.27 0 0 1-4.22-1.16l-.3-.18-2.88.75.77-2.81-.2-.31A8.31 8.31 0 1 1 20.3 12a8.34 8.34 0 0 1-8.3 8.31Zm4.55-6.22c-.25-.13-1.48-.73-1.71-.81s-.4-.13-.56.13-.65.81-.79.97-.29.18-.54.06a6.78 6.78 0 0 1-2-1.23 7.56 7.56 0 0 1-1.4-1.74c-.14-.25 0-.38.11-.51s.25-.29.37-.43a1.62 1.62 0 0 0 .25-.41.46.46 0 0 0 0-.44c-.06-.13-.56-1.34-.76-1.83s-.4-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.81 2.81 0 0 0-.88 2.1 4.91 4.91 0 0 0 1 2.59 11.16 11.16 0 0 0 4.27 3.77 14.43 14.43 0 0 0 1.42.52 3.43 3.43 0 0 0 1.57.1 2.58 2.58 0 0 0 1.69-1.19 2.1 2.1 0 0 0 .14-1.19c-.06-.1-.22-.16-.47-.28Z"/>
                </svg>
                Escriu-me per a més informació
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
