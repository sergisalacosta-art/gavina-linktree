import { AppLink as Link } from "@/components/site/AppLink";
import { pages, type Lang } from "@/lib/i18n";
import { proposalCss } from "./proposal-style";
import { Hills } from "./parts";

const content = {
  ca: {
    eyebrow: "Xerrades i tallers",
    title: "Xerrades i tallers",
    intro: "Propostes per aprendre i compartir al voltant de la menstruació i la salut femenina.",
    more: "Més informació →",
    talk: {
      type: "Xerrada",
      title: "Menstruar sense dolor",
      subtitle: "Acompanyar la salut femenina de la teva filla des de l'arrel",
      text: "Detectant senyals d'alerta i aplicant recursos naturals d'autocura i prevenció.",
      chips: ["Per a famílies i dones", "Xerrada participativa"],
      alt: "Una mare i una filla caminant juntes per un prat florit",
    },
    workshop: {
      type: "Taller per a mares i filles",
      title: "La menstruació",
      subtitle: "Un camí per descobrir la nostra naturalesa cíclica",
      text: "Aprendre a viure la ciclicitat juntes, per créixer amb més confiança, llibertat i consciència.",
      chips: ["Nenes de 8 a 13 anys i les seves mares", "2 h 30", "Vivencial"],
      alt: "Una mare i una filla assegudes una davant de l'altra, envoltades de les quatre fases del cicle menstrual",
    },
  },
  es: {
    eyebrow: "Charlas y talleres",
    title: "Charlas y talleres",
    intro: "Propuestas para aprender y compartir en torno a la menstruación y la salud femenina.",
    more: "Más información →",
    talk: {
      type: "Charla",
      title: "Menstruar sin dolor",
      subtitle: "Acompañar la salud femenina de tu hija desde la raíz",
      text: "Detectando señales de alerta y aplicando recursos naturales de autocuidado y prevención.",
      chips: ["Para familias y mujeres", "Charla participativa"],
      alt: "Una madre y una hija caminando juntas por un prado florido",
    },
    workshop: {
      type: "Taller para madres e hijas",
      title: "La menstruación",
      subtitle: "Un camino para descubrir nuestra naturaleza cíclica",
      text: "Aprender a vivir la ciclicidad juntas, para crecer con más confianza, libertad y conciencia. (Página en catalán)",
      chips: ["Niñas de 8 a 13 años y sus madres", "2 h 30", "Vivencial"],
      alt: "Una madre y una hija sentadas una frente a la otra, rodeadas de las cuatro fases del ciclo menstrual",
    },
  },
} as const;

export function XerradesHub({ lang }: { lang: Lang }) {
  const t = content[lang];
  const cardBody = (c: (typeof t)["talk"] | (typeof t)["workshop"]) => (
    <div className="body">
      <p className="type">{c.type}</p>
      <h3>
        {c.title}
        <small>{c.subtitle}</small>
      </h3>
      <p>{c.text}</p>
      <ul className="chips">
        {c.chips.map((ch) => (
          <li key={ch}>{ch}</li>
        ))}
      </ul>
      <span className="go">{t.more}</span>
    </div>
  );

  return (
    <main className="pp">
      <style dangerouslySetInnerHTML={{ __html: proposalCss }} />

      <section className="block" style={{ paddingBottom: 24 }}>
        <div className="narrow" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ justifyContent: "center" }}>{t.eyebrow}</p>
          <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}>{t.title}</h1>
          <p className="tagline" style={{ marginBottom: 0 }}>{t.intro}</p>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 24, paddingBottom: 0 }}>
        <div className="wrap cards">
          <Link to={pages.menstruar[lang]} className="card" data-reveal>
            <div className="pic">
              <img src="/web/xerrada-hero.jpg" alt={t.talk.alt} loading="lazy" />
            </div>
            {cardBody(t.talk)}
          </Link>
          <a href="/taller-mares-i-filles" className="card" data-reveal style={{ ["--reveal-delay" as string]: "120ms" }}>
            <div className="pic">
              <img src="/taller-mares-i-filles/il-lustracio.jpg" alt={t.workshop.alt} loading="lazy" style={{ objectFit: "contain", background: "#f6ecdf" }} />
            </div>
            {cardBody(t.workshop)}
          </a>
        </div>
        <Hills />
      </section>
    </main>
  );
}

export const XerradesHubCa = () => <XerradesHub lang="ca" />;
export const XerradesHubEs = () => <XerradesHub lang="es" />;
