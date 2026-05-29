import { createFileRoute, Link } from "@tanstack/react-router";

const WA_URL = "https://wa.me/34616351534";

export const Route = createFileRoute("/matrius")({
  component: MatriusPage,
});

const css = `
  .mp{
    --terra:#8a4b34;
    --terra-fosc:#5d3428;
    --sorra:#f4ead7;
    --sorra-2:#fff8ea;
    --mel:#e5b66d;
    --mel-suau:#f8df9a;
    --text:#2b2925;
    --muted:#635d55;
    --blanc:#fffdf8;
    --max:1160px;
  }
  .mp *{box-sizing:border-box}
  .mp{
    color:var(--text);
    background:var(--blanc);
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height:1.55;
    font-size:17px;
    overflow-x:hidden;
    min-height:100vh;
    position:relative;
  }
  .mp::after{
    content:"";
    position:fixed;
    inset:0;
    z-index:0;
    pointer-events:none;
    background:url("/matrius/assets/logo-watermark.png") center 58% / 720px auto no-repeat;
    opacity:.18;
  }
  .mp img{max-width:100%;display:block}
  .mp a{color:inherit;text-decoration:none}

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
  .mp .kicker{
    letter-spacing:.18em;
    text-transform:uppercase;
    color:rgba(255,255,255,.86);
    font-size:.78rem;
    margin:0 0 1rem;
    font-weight:600;
  }
  .mp h1,.mp h2,.mp h3{
    font-family: Georgia, "Times New Roman", serif;
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
    max-width:660px;
    color:rgba(255,255,255,.92);
    font-size:clamp(1.05rem, 2vw, 1.35rem);
  }
  .mp .hero-actions{
    display:flex;
    flex-wrap:wrap;
    gap:.9rem;
    margin-top:2rem;
  }
  .mp .btn{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    border-radius:999px;
    padding:.88rem 1.35rem;
    text-decoration:none;
    font-weight:700;
    letter-spacing:.01em;
    border:1px solid transparent;
    transition:transform .18s ease, background .18s ease;
  }
  .mp .btn:hover{transform:translateY(-2px)}
  .mp .btn-primary{background:var(--mel); color:#221a14}
  .mp .btn-ghost{border-color:rgba(255,255,255,.55); color:white; background:rgba(255,255,255,.08); backdrop-filter:blur(6px)}
  .mp section{padding:clamp(4.5rem, 8vw, 7.5rem) 0; position:relative; z-index:1;}
  .mp .wrap{width:min(var(--max), calc(100% - 40px)); margin:0 auto;}
  .mp .section-title{display:flex; flex-direction:column; gap:.65rem; margin-bottom:2rem;}
  .mp .eyebrow{
    font-family:Georgia, "Times New Roman", serif;
    color:var(--terra);
    text-transform:uppercase;
    letter-spacing:.12em;
    font-weight:700;
    text-decoration:underline;
    text-decoration-thickness:1px;
    text-underline-offset:5px;
    font-size:1rem;
  }
  .mp h2{font-size:clamp(2rem, 4.7vw, 4rem); color:var(--terra); text-wrap:balance;}
  .mp h3{font-size:clamp(1.35rem, 2.5vw, 2.15rem); color:var(--terra-fosc);}
  .mp .lead{font-size:clamp(1.08rem, 2vw, 1.28rem); max-width:780px; color:var(--muted);}
  .mp .grid-2{display:grid; grid-template-columns:minmax(0,1.06fr) minmax(310px,.94fr); gap:clamp(2rem,5vw,5rem); align-items:center;}
  .mp .card{background:rgba(255,253,248,.78); border:1px solid rgba(138,75,52,.12); border-radius:2rem; box-shadow:0 20px 60px rgba(84,54,34,.08); backdrop-filter:blur(8px);}
  .mp .text-card{padding:clamp(1.4rem,3.5vw,2.8rem)}
  .mp .soft-img{border-radius:1.7rem; overflow:hidden; box-shadow:0 26px 70px rgba(55,40,25,.16);}
  .mp .soft-img img{aspect-ratio:4/3; width:100%; object-fit:cover;}
  .mp .soft-img-vertical img{aspect-ratio:3/4; object-position:center top;}
  .mp .bullets{list-style:none; padding:0; margin:1.5rem 0 0; display:grid; gap:1.05rem;}
  .mp .bullets li{position:relative; padding-left:1.45rem;}
  .mp .bullets li:before{content:""; position:absolute; left:0; top:.72em; width:.46rem; height:.46rem; border-radius:50%; background:var(--terra);}
  .mp strong{font-weight:800; color:#1f1d1a}
  .mp .section-note{margin:2.1rem 0 0; font-style:italic; color:var(--muted);}
  .mp .cream{background:linear-gradient(180deg, rgba(244,234,215,.55), rgba(255,253,248,.9))}
  .mp .testimonials{background:linear-gradient(180deg, rgba(255,248,234,.82), rgba(244,234,215,.38));}
  .mp .testimonials-grid{display:grid; grid-template-columns:repeat(3, minmax(0, 1fr)); gap:1.4rem; margin-top:2rem;}
  .mp .testimonial-card{padding:1.8rem; border-radius:1.7rem; background:rgba(255,253,248,.84); border:1px solid rgba(138,75,52,.14); box-shadow:0 18px 50px rgba(84,54,34,.08); display:flex; flex-direction:column; gap:1rem; min-height:100%;}
  .mp .testimonial-quote{margin:0; color:var(--text); line-height:1.72; font-size:1rem;}
  .mp .testimonial-author{margin-top:auto; font-weight:800; color:var(--terra); letter-spacing:.01em;}
  .mp .split{display:grid; grid-template-columns:1fr 1fr; gap:1.1rem; margin-top:2rem;}
  .mp .mini{padding:1.25rem 1.3rem; border-left:3px solid var(--mel); background:rgba(255,255,255,.68); border-radius:1rem;}
  .mp .mini p{margin:.4rem 0 0; color:var(--muted)}
  .mp .include-grid{display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:1.4rem; margin-top:2rem;}
  .mp .include{padding:2rem; min-height:240px; display:flex; flex-direction:column; justify-content:space-between;}
  .mp .include span{display:inline-flex; align-items:center; justify-content:center; width:3rem; height:3rem; border-radius:50%; background:var(--mel-suau); color:var(--terra-fosc); font-weight:900; margin-bottom:1rem;}
  .mp .details-stack{max-width:960px; margin:2.8rem auto 0; display:grid; gap:1.4rem;}
  .mp .single-detail{margin-top:0;}
  .mp .detail-card{padding:clamp(1.6rem, 3vw, 2.4rem); background:rgba(255,253,248,.88); color:var(--text); text-align:left;}
  .mp .detail-card .eyebrow{display:inline-block; margin-bottom:.85rem;}
  .mp .detail-card h3{margin-bottom:1rem;}
  .mp .detail-card p{margin:.75rem 0 0;}
  .mp .pricing-card{padding:clamp(1.8rem, 3.4vw, 2.8rem); border-radius:2rem; background:linear-gradient(180deg, #f7ead3 0%, #fff5e4 100%); border:1px solid rgba(138,75,52,.16); box-shadow:0 22px 65px rgba(84,54,34,.10); color:var(--text);}
  .mp .pricing-options{display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:1.2rem; align-items:stretch; margin-top:.8rem;}
  .mp .price-option{background:transparent; border:0; border-radius:0; padding:.35rem 1rem; text-align:center; min-height:0; display:flex; flex-direction:column; align-items:center; justify-content:flex-start; width:100%; height:100%; box-sizing:border-box;}
  .mp .price-option.annual{border-left:1px solid rgba(138,75,52,.18);}
  .mp .price-option h3{text-transform:uppercase; letter-spacing:.08em; font-size:1rem; margin:0 0 .8rem; text-align:center;}
  .mp .price-list{list-style:none; padding:0; margin:0; width:100%; max-width:30ch; color:var(--muted); font-size:.97rem; line-height:1.45; text-align:left;}
  .mp .price-list li{position:relative; padding-left:1.15rem; margin:0 0 .65rem;}
  .mp .price-list li::before{content:"•"; position:absolute; left:0; top:0; color:var(--terra); font-weight:700;}
  .mp .price-number{font-family:Arial, Helvetica, sans-serif; color:var(--terra); font-size:clamp(1.7rem, 3.3vw, 2.55rem); line-height:1; font-weight:900; margin:.15rem 0 1.1rem; text-align:center; width:100%; letter-spacing:-.02em;}
  .mp .price-launch-note{margin:.65rem 0 0; color:var(--muted); font-size:.9rem; line-height:1.35; text-align:center;}
  .mp .price-note{margin:0; color:var(--muted); line-height:1.4; text-align:center; max-width:31ch; font-size:.95rem;}
  .mp .bio{display:grid; grid-template-columns:380px 1fr; gap:clamp(2rem,5vw,5rem); align-items:center;}
  .mp .bio .soft-img img{aspect-ratio:1/1.12;}
  .mp .price-block{background:var(--terra); color:white; border-radius:2rem; padding:clamp(2rem,4vw,3.2rem); display:grid; grid-template-columns:1fr 1.2fr; gap:2rem; align-items:center; box-shadow:0 30px 80px rgba(93,52,40,.22);}
  .mp .price-block h2,.mp .price-block h3{color:white}
  .mp .price-block .eyebrow{color:#f1d2a3}
  .mp .price-block ul{margin:.8rem 0 0}
  .mp .price-block li{margin:.55rem 0}
  .mp footer{padding:3rem 0; background:#2d241d; color:rgba(255,255,255,.78); text-align:center; font-size:.94rem;}
  .mp .back-link{display:inline-flex; align-items:center; gap:.4rem; font-size:.88rem; font-style:italic; color:rgba(255,255,255,.7); margin-bottom:1.2rem;}
  .mp .back-link:hover{color:white;}
  #inclou{padding-bottom:0!important}
  #dates{padding-top:0!important;margin-top:.6rem!important}
  #dates .details-stack{margin-top:0!important}
  @media(max-width:900px){
    .mp .hero{min-height:74vh}
    .mp .grid-2,.mp .price-block,.mp .bio{grid-template-columns:1fr}
    .mp .include-grid,.mp .split,.mp .testimonials-grid,.mp .pricing-options{grid-template-columns:1fr}
    .mp .price-option.annual{border-left:0;border-top:1px solid rgba(138,75,52,.18);padding-top:1.2rem;margin-top:.6rem;}
    .mp .hero-inner{padding-bottom:4rem}
    .mp::after{background-size:460px auto;opacity:.14;}
  }
  @media(max-width:560px){
    .mp{font-size:16px}
    .mp .hero-inner,.mp .wrap{width:min(100% - 28px, var(--max))}
    .mp section{padding:3.8rem 0}
    .mp .btn{width:100%}
    .mp h1{font-size:2.7rem}
    .mp .text-card,.mp .include{padding:1.35rem}
  }
`;

function MatriusPage() {
  return (
    <div className="mp">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="hero">
        <div className="hero-inner">
          <Link to="/" className="back-link">← Tornar</Link>
          <p className="kicker">Espai online entre dones</p>
          <h1>Matrius en Cercle</h1>
          <p className="subtitle">Un espai mensual per parlar i compartir sobre salut femenina, sexualitat i recursos naturals d'autocura i prevenció.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={WA_URL} target="_blank" rel="noopener noreferrer">Consulta disponibilitat per WhatsApp</a>
            <a className="btn btn-ghost" href="#que-es">Veure què inclou</a>
          </div>
        </div>
      </header>

      <main>
        <section id="que-es">
          <div className="wrap grid-2">
            <div className="card text-card">
              <div className="section-title">
                <span className="eyebrow">Què és</span>
                <h2>Un cercle online per cultivar l'escolta, el cos i la paraula.</h2>
              </div>
              <p className="lead"><strong>Matrius en Cercle</strong> és un espai online entre dones on parlarem i reflexionarem sobre salut femenina, sexualitat, climateri, ciclicitat, menstruació, relacions, maternitat, preparats herbals i altres alquímies.</p>
              <ul className="bullets">
                <li>Ho farem des de la ment? Segurament. Però també cultivarem, de mica mica, l'expressar-nos des de la matriu.</li>
                <li>Traspassarem els tabús per començar a parlar obertament del que les nostres matrius també ens demanen que nombrem: la nostra sang menstrual, els nostres òrgans femenins, la nostra energia sexual.</li>
                <li>Us compartiré de manera molt senzilla i pràctica recursos (provinents de la saviesa i medicina natural i ancestral) perquè pugueu anar introduint en l'autocura i la prevenció de la vostra salut femenina.</li>
                <li>Podràs nodrir la teva matriu compartint i escoltant altres dones.</li>
              </ul>
            </div>
            <div className="soft-img soft-img-vertical">
              <img src="/matrius/assets/ritual-nou.png" alt="Dona en un entorn natural practicant escolta corporal" />
            </div>
          </div>
        </section>

        <section className="cream" id="per-a-qui">
          <div className="wrap grid-2">
            <div className="soft-img">
              <img src="/matrius/assets/herbes.jpg" alt="Mans preparant herbes en un cistell" />
            </div>
            <div>
              <div className="section-title">
                <span className="eyebrow">Per a qui és</span>
                <h2>És per a tu si...</h2>
              </div>
              <div className="split">
                <div className="mini"><strong>Vols cuidar-te amb recursos naturals.</strong><p>Et ressona el cuidar-te de manera natural i vols recursos per acompanyar-te.</p></div>
                <div className="mini"><strong>Tens compromís amb tu mateixa.</strong><p>Vols millorar i mantenir la teva salut femenina.</p></div>
                <div className="mini"><strong>Et ressonen les medicines que han sostingut les dones en diferents cultures d'arreu del món</strong><p>Quan sents a parlar de medicina natural —vapors vaginals, cataplasmes, òvuls vaginals, desparasitació amb plantes…—, el teu cos et fa saber que &ldquo;sí&rdquo;.</p></div>
                <div className="mini"><strong>Vols recursos pràctics d'autocura.</strong><p>Et ressona introduir recursos senzills i pràctics en l'autocura i la prevenció de la teva salut femenina, provinents de la saviesa i medicina natural i ancestral.</p></div>
                <div className="mini"><strong>Vols escoltar el teu cos.</strong><p>Et fan soroll els missatges ràpids sobre salut i sexualitat femenines.</p></div>
                <div className="mini"><strong>Vols compartir-te amb honestedat amb tu</strong><p>Tens ganes d'escoltar altres dones i parlar dels temes que ens cuiden des d'un lloc diferent al que probablement sents al teu voltant.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="inclou">
          <div className="wrap">
            <div className="section-title">
              <span className="eyebrow">Què inclou</span>
              <h2>Un recorregut mensual, en directe, gravació i materials complementaris</h2>
            </div>
            <div className="include-grid">
              <article className="card include">
                <div>
                  <span>1</span>
                  <h3>Una sessió online en directe cada mes</h3>
                  <p>Totes les sessions quedaran gravades fins al dia de la propera sessió, per si no pots assistir al directe.</p>
                </div>
              </article>
              <article className="card include">
                <div>
                  <span>2</span>
                  <h3>Contingut extra cada trimestre</h3>
                  <p>Rebràs contingut de valor sobre salut femenina, sexualitat, climateri, ciclicitat, preparats herbals, alquímies o moviment corporal.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="dates">
          <div className="wrap details-stack single-detail">
            <article className="card detail-card">
              <span className="eyebrow">Dates a recordar</span>
              <h3>Ens trobem un diumenge al mes</h3>
              <p>El primer cercle serà <strong>diumenge 26 de juliol</strong>. Ens trobem l'últim diumenge de cada mes, de <strong>16.00 a 17.30 h</strong>.</p>
            </article>
          </div>
        </section>

        <section id="inversio" className="cream">
          <div className="wrap details-stack single-detail">
            <article className="pricing-card">
              <span className="eyebrow">Inversió</span>
              <div className="pricing-options">
                <div className="price-option monthly">
                  <h3>Quota mensual</h3>
                  <p className="price-number">35€/mes</p>
                  <ul className="price-list">
                    <li>Una sessió mensual cada mes en directe</li>
                    <li>Contingut de valor cada trimestre</li>
                  </ul>
                  <p className="price-launch-note">(Preu de llançament.<br />A partir de setembre, el preu s'incrementa.<br />Si t'hi inscrius abans del setembre el preu se't mantindrà)</p>
                </div>
                <div className="price-option annual">
                  <h3>Quota trimestral</h3>
                  <p className="price-number">105€/trimestre</p>
                  <ul className="price-list">
                    <li>Una sessió mensual cada mes en directe</li>
                    <li>Contingut de valor cada trimestre</li>
                    <li>Si tries aquesta quota abans l'octubre, t'inclou una plaça per al Retir d'1 dia a l'octubre (el Retir té un valor de 120€ i tu t'estalvies 40€). El trimestre següent, la quota trimestral ja seria de 105€.</li>
                  </ul>
                  <p className="price-launch-note">(Preu de llançament.<br />A partir de setembre, el preu s'incrementa.<br />Si t'hi inscrius abans del setembre el preu se't mantindrà)</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="gavina">
          <div className="wrap bio">
            <div className="soft-img">
              <img src="/matrius/assets/gavina-nova.jpg" alt="Retrat de Gavina" />
            </div>
            <div className="card text-card">
              <div className="section-title">
                <span className="eyebrow">Qui acompanya</span>
              </div>
              <p className="lead">Soc la Gavina, acompanyant de dones que tenen ganes de cuidar la seva salut femenina ginecològica aplicant rutines bàsiques d'autocura i pautes de prevenció reals i naturals, lluny de fàrmacs i intervencions quirúrgiques.</p>
              <p>Uns recursos que són les bases de la salut femenina i que han sostingut, i sostenen, les dones en diferents tradicions mil·lenàries d'arreu del món.</p>
              <p><a className="btn btn-primary" href={WA_URL} target="_blank" rel="noopener noreferrer">Consulta places per WhatsApp</a></p>
            </div>
          </div>
        </section>

        <section className="testimonials" id="testimonis">
          <div className="wrap">
            <div className="section-title">
              <span className="eyebrow">Testimonis</span>
              <h2>Les dones que han passat pels cercles diuen...</h2>
            </div>
            <div className="testimonials-grid">
              <article className="testimonial-card">
                <p className="testimonial-quote">&ldquo;Anar al Cercle de Dones és meravellós. Són moltes coses positives per mi. És com anar a la meva illa de la calma i de la pau. És un espai d'autocura total. Un espai on estic pensant només en mi i en les meves companyes. Un espai on puc trobar aquestes mirades còmplices i amoroses de les dones que formen part del cercle amb mi i de la Gavina, que acompanya amb aquesta saviesa tan encertada, que sap acompanyar sense dirigir i això és important perquè em sento acompanyada i escoltada. Un espai on em sento molt sostinguda i on també tinc l'oportunitat de sostenir. M'encanta.&rdquo;</p>
                <div className="testimonial-author">Carolina A.</div>
              </article>
              <article className="testimonial-card">
                <p className="testimonial-quote">&ldquo;Visualitzo la Gavina com una sàvia xamana, a la qual acudir i confiar. Trobar dones tan potents com ella, amb aquesta mirada reivindicativa i amorosa, m'encanta i em connecta amb allò que per mi és important.&rdquo;</p>
                <div className="testimonial-author">Alba C.</div>
              </article>
              <article className="testimonial-card">
                <p className="testimonial-quote">&ldquo;Gràcies, Gavina, per iniciar-me en aquest camí cap al coneixement de mi mateixa; ara puc mirar els meus fills amb uns altres ulls. Gràcies també per acompanyar-me en l'autoconeixement, per permetre sentir tot el que em passa, incloses les emocions més difícils, i ensenyar-me a escoltar-me, ara soc capaç de reconèixer amb més facilitat les meves emocions, i també les dels altres. He après que la maternitat necessita de saber-nos escoltar per poder escoltar els altres i veure'ls de veritat. També gràcies per la tribu i la companyia, el camí és més fàcil amb les mares del cercle.&rdquo;</p>
                <div className="testimonial-author">Queralt S.</div>
              </article>
            </div>
          </div>
        </section>

        <section id="places" className="cream">
          <div className="wrap price-block">
            <div>
              <span className="eyebrow">Places limitades</span>
              <h2>Per tal de cuidar el grup i a cada una.</h2>
            </div>
            <div>
              <p><a className="btn btn-primary" href={WA_URL} target="_blank" rel="noopener noreferrer">Consulta disponibilitat per WhatsApp</a></p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          Matrius en Cercle · Espai online entre dones
        </div>
      </footer>
    </div>
  );
}
