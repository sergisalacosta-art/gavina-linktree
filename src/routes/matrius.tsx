import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-circle.jpg";
import womanRiver from "@/assets/woman-river.jpg";
import herbsImg from "@/assets/herbs.jpg";
import gavinaImg from "@/assets/gavina.jpg";
import logoMark from "@/assets/logo-mark.png";

const WA_URL = "https://wa.me/34616351536";

export const Route = createFileRoute("/matrius")({
  component: MatriusPage,
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

function WhatsAppButton({
  children = "Consulta disponibilitat per WhatsApp",
  variant = "honey",
}: {
  children?: React.ReactNode;
  variant?: "honey" | "outline";
}) {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={variant === "honey" ? "btn-honey btn-honey-hover" : "btn-outline-light"}
    >
      {children}
    </a>
  );
}

function MatriusPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[oklch(0.22_0.03_40)] text-cream">
        <img
          src={heroImg}
          alt="Cercle de dones a l'exterior"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.03_40)]/85 via-[oklch(0.18_0.03_40)]/55 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-28 md:py-40">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-cream/70 hover:text-cream transition-colors"
          >
            ← Tornar
          </Link>
          <p className="eyebrow !text-[oklch(0.9_0.04_80)] !border-[oklch(0.9_0.04_80)]/40">
            Espai online entre dones
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[0.95] text-cream md:text-7xl lg:text-8xl">
            MATRIUS<br />EN CERCLE
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/90 md:text-lg">
            Un espai mensual per parlar i compartir sobre salut femenina,
            sexualitat i recursos naturals d'autocura i prevenció.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppButton />
            <a href="#que-inclou" className="btn-outline-light">
              Veure què inclou
            </a>
          </div>
        </div>
      </section>

      {/* QUÈ ÉS */}
      <section className="relative bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="card-soft p-8 md:p-12">
            <Eyebrow>Què és</Eyebrow>
            <h2 className="mt-6 text-4xl leading-[1.05] md:text-5xl">
              Un cercle online per cultivar l'escolta, el cos i la paraula.
            </h2>
            <p className="mt-8 text-[15px] leading-relaxed text-foreground/85">
              <strong className="font-semibold text-primary">Matrius en Cercle</strong>{" "}
              és un espai online entre dones on parlarem i reflexionarem sobre
              salut femenina, sexualitat, climateri, ciclicitat, menstruació,
              relacions, maternitat, preparats herbals i altres alquímies.
            </p>
            <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-foreground/85">
              {[
                "Ho farem des de la ment? Segurament. Però també cultivarem, de mica mica, l'expressar-nos des de la matriu.",
                "Traspassarem els tabús per començar a parlar obertament del que les nostres matrius també ens demanen que nombrem: la nostra sang menstrual, els nostres òrgans femenins, la nostra energia sexual.",
                "Us compartiré de manera molt senzilla i pràctica recursos (provinents de la saviesa i medicina natural i ancestral) perquè pugueu anar introduint en l'autocura i la prevenció de la vostra salut femenina.",
                "Podràs nodrir la teva matriu compartint i escoltant altres dones.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-terracotta" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src={womanRiver}
              alt="Dona en un riu en escolta corporal"
              loading="lazy"
              width={800}
              height={1024}
              className="mx-auto h-[520px] w-full max-w-md rounded-3xl object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* PER A QUI ÉS */}
      <section className="relative bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <img
            src={herbsImg}
            alt="Mans preparant herbes"
            loading="lazy"
            width={1024}
            height={800}
            className="h-[420px] w-full rounded-3xl object-cover shadow-soft"
          />
          <div>
            <Eyebrow>Per a qui és</Eyebrow>
            <h2 className="mt-6 text-4xl md:text-5xl">És per a tu si…</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                {
                  t: "Vols cuidar-te amb recursos naturals.",
                  d: "Et ressona el cuidar-te de manera natural i vols recursos per acompanyar-te.",
                },
                {
                  t: "Tens compromís amb tu mateixa.",
                  d: "Vols millorar i mantenir la teva salut femenina.",
                },
                {
                  t: "Et ressonen les medicines que han sostingut les dones en diferents cultures d'arreu del món.",
                  d: "",
                },
                {
                  t: "Vols recursos pràctics d'autocura.",
                  d: "Et ressona introduir recursos senzills i pràctics en l'autocura i la prevenció de la teva salut femenina, provinents de la saviesa i medicina natural i ancestral.",
                },
                {
                  t: "Vols escoltar el teu cos.",
                  d: "Quan sents parlar de medicina natural —vapors vaginals, cataplasmes, òvuls vaginals, desparasitació amb plantes…—, el teu cos et fa saber que \"sí\".",
                },
                {
                  t: "Vols compartir-te amb honestedat amb tu.",
                  d: "Tens ganes d'escoltar altres dones i parlar dels temes que ens cuiden des d'un lloc diferent al que probablement sents al teu voltant.",
                },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-2xl border border-honey/30 bg-card/60 p-5"
                >
                  <p className="font-semibold text-primary text-[15px] leading-snug">{c.t}</p>
                  {c.d && (
                    <p className="mt-2 text-sm leading-relaxed text-foreground/75">{c.d}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUÈ INCLOU */}
      <section id="que-inclou" className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>Què inclou</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-4xl leading-[1.05] md:text-5xl">
            Un recorregut mensual, en directe, gravació i materials complementaris
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {[
              {
                n: "1",
                t: "Una sessió online en directe cada mes",
                d: "Totes les sessions quedaran gravades fins al dia de la propera sessió, per si no pots assistir al directe.",
              },
              {
                n: "2",
                t: "Contingut extra cada trimestre",
                d: "Rebràs contingut de valor sobre salut femenina, sexualitat, climateri, ciclicitat, preparats herbals, alquímies o moviment corporal.",
              },
            ].map((c) => (
              <div key={c.n} className="card-soft p-8">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-honey/25 font-serif text-sm font-semibold text-primary">
                  {c.n}
                </div>
                <h3 className="mt-5 text-2xl">{c.t}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-foreground/80">{c.d}</p>
              </div>
            ))}
          </div>

          <div className="card-soft mx-auto mt-8 max-w-3xl p-7 text-center md:text-left">
            <Eyebrow>Dates a recordar</Eyebrow>
            <h3 className="mt-4 text-2xl">Ens trobem un diumenge al mes</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">
              El primer cercle serà <strong>diumenge 26 de juliol</strong>. Ens
              trobem l'últim diumenge de cada mes, de <strong>16.00 a 17.30 h</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* INVERSIÓ */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl bg-accent/70 p-8 shadow-soft md:p-14">
            <Eyebrow>Inversió</Eyebrow>
            <div className="mt-8 grid gap-10 md:grid-cols-2 md:divide-x md:divide-honey/40">
              <PriceCol
                title="Quota mensual"
                price="35€/mes"
                items={[
                  "Una sessió mensual cada mes en directe",
                  "Contingut de valor cada trimestre",
                ]}
              />
              <PriceCol
                title="Quota trimestral"
                price="105€/trimestre"
                className="md:pl-10"
                items={[
                  "Una sessió mensual cada mes en directe",
                  "Contingut de valor cada trimestre",
                  "Si tries aquesta quota abans l'octubre, t'inclou una plaça per al Retir d'1 dia a l'octubre (el Retir té un valor de 120€ i tu t'estalvies 40€). El trimestre següent, la quota trimestral ja seria de 105€.",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* QUI ACOMPANYA */}
      <section className="relative bg-background py-20 md:py-28">
        <img
          src={logoMark}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-10 w-72 -translate-x-1/2 opacity-20"
        />
        <div className="relative mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-[280px_1fr] md:items-center">
          <img
            src={gavinaImg}
            alt="Retrat de la Gavina"
            loading="lazy"
            width={800}
            height={1024}
            className="h-[340px] w-full rounded-3xl object-cover shadow-soft"
          />
          <div className="card-soft p-8 md:p-10">
            <Eyebrow>Qui acompanya</Eyebrow>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground/85">
              Soc la Gavina, acompanyant de dones que tenen ganes de cuidar la
              seva salut femenina ginecològica aplicant rutines bàsiques
              d'autocura i pautes de prevenció reals i naturals, lluny de
              fàrmacs i intervencions quirúrgiques.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground/85">
              Uns recursos que són les bases de la salut femenina i que han
              sostingut, i sostenen, les dones en diferents tradicions
              mil·lenàries d'arreu del món.
            </p>
            <div className="mt-6">
              <WhatsAppButton>Consulta places per WhatsApp</WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIS */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>Testimonis</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-4xl leading-[1.05] md:text-5xl">
            Les dones que han passat pels cercles diuen…
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                n: "Carolina A.",
                q: "Anar al Cercle de Dones és meravellós. Són moltes coses positives per mi. És com anar a la meva illa de la calma i de la pau. És un espai d'autocura total. Un espai on estic pensant només en mi i en les meves companyes. Un espai on puc trobar aquestes mirades còmplices i amoroses de les dones que formen part del cercle amb mi i de la Gavina, que acompanya amb aquesta saviesa tan encertada, que sap acompanyar sense dirigir i això és important perquè em sento acompanyada i escoltada. Un espai on em sento molt sostinguda i on també tinc l'oportunitat de sostenir. M'encanta.",
              },
              {
                n: "Alba C.",
                q: "Visualitzo la Gavina com una sàvia xamana, a la qual acudir i confiar. Trobar dones tan potents com ella, amb aquesta mirada reivindicativa i amorosa, m'encanta i em connecta amb allò que per mi és important.",
              },
              {
                n: "Queralt S.",
                q: "Gràcies, Gavina, per iniciar-me en aquest camí cap al coneixement de mi mateixa; ara puc mirar els meus fills amb uns altres ulls. Gràcies també per acompanyar-me en l'autoconeixement, per permetre sentir tot el que em passa, incloses les emocions més difícils, i ensenyar-me a escoltar-me, ara soc capaç de reconèixer amb més facilitat les meves emocions, i també les dels altres.",
              },
            ].map((t) => (
              <figure key={t.n} className="card-soft flex flex-col p-7">
                <blockquote className="text-sm leading-relaxed text-foreground/80">
                  &ldquo;{t.q}&rdquo;
                </blockquote>
                <figcaption className="mt-6 font-semibold text-primary">
                  {t.n}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PLACES LIMITADES */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-terracotta p-10 text-cream shadow-soft md:p-14">
            <Eyebrow>
              <span className="!text-cream/90 !border-cream/40">Places limitades</span>
            </Eyebrow>
            <div className="mt-6 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <h2 className="max-w-md font-serif text-4xl leading-[1.05] text-cream md:text-5xl">
                Per tal de cuidar el grup i a cada una.
              </h2>
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[oklch(0.18_0.02_40)] py-6 text-center text-xs text-cream/70">
        Matrius en Cercle · Espai online entre dones
      </footer>
    </main>
  );
}

function PriceCol({
  title,
  price,
  items,
  className = "",
}: {
  title: string;
  price: string;
  items: string[];
  className?: string;
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <p className="eyebrow text-center">{title}</p>
      <p className="mt-4 text-center font-serif text-4xl font-semibold text-primary md:text-5xl">
        {price}
      </p>
      <ul className="mt-6 flex-1 space-y-2.5 text-[14px] leading-relaxed text-foreground/85">
        {items.map((i) => (
          <li key={i} className="flex gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-terracotta" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-center text-xs italic leading-relaxed text-foreground/65">
        (Preu de llançament. A partir de setembre, el preu s'incrementa.
        <br />
        Si t'hi inscrius abans del setembre el preu se't mantindrà)
      </p>
    </div>
  );
}
