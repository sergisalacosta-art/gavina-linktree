import { proposalCss } from "./proposal-style";
import { Down, factIcons, Hills, Sprig, WA_URL, WhatsAppIcon } from "./parts";
import type { Lang } from "@/lib/i18n";

const content = {
  ca: {
    eyebrow: "Xerrada per a famílies",
    title: "Menstruar sense dolor",
    subtitle: "Com acompanyar la teva filla en els seus primers anys de menstruació",
    tagline: "Prevenció i tractament natural de la dismenorrea i la síndrome premenstrual.",
    facts: [
      { icon: "people", label: "A qui s'adreça", text: "Famílies de nenes menstruants o que estan a punt, i dones que volen conèixer recursos naturals per cuidar la seva salut femenina.", wide: true },
      { icon: "talk", label: "Format", text: "Xerrada en cercle, amb espai per a preguntes, resolució de dubtes i compartició de casos personals si cal." },
      { icon: "place", label: "Per a", text: "AFAs, ajuntaments i altres entitats." },
      { icon: "talk", label: "Durada", text: "1 h 30 min aproximadament." },
      { icon: "place", label: "Inversió", text: "200 € + 21% d'IVA + desplaçament." },
    ],
    notice: "El contingut d'aquesta xerrada no és el mateix que el d'un taller d'educació sexual.",
    heroAlt: "Una mare i una filla caminant juntes per un prat florit",
    more: "Vols saber-ne més?",
    presKicker: "Presentació de la xerrada",
    presTitle: "Acompanyar els primers anys de menstruació amb informació clara i sense tabús.",
    pres: [
      "El meu objectiu és que les famílies sàpiguen com acompanyar els primers anys de menstruació: entendre com és un cicle saludable i reconèixer els senyals d'alerta.",
      "També compartirem pautes d'autocura per prevenir i atendre desequilibris com la dismenorrea i la síndrome premenstrual (SPM), amb informació clara perquè les famílies puguin parlar-ne i decidir juntes com actuar.",
    ],
    objKicker: "Objectius i contingut",
    objTitle: "Què hi trobaràs",
    objLead:
      "Una xerrada per entendre què és un cicle menstrual saludable, quins senyals d'alerta cal observar i quines pautes d'autocura poden ajudar a prevenir i atendre desequilibris menstruals.",
    items: [
      "Senyals d'un cicle saludable i senyals d'alerta durant la fase premenstrual i la menstruació: què és normal i què no hem de naturalitzar?",
      "Què és el cicle menstrual ovulatori i què vol dir ser cíclica?",
      "Recursos per acompanyar els primers anys de menstruació.",
      "Conseqüències i riscos d'emmascarar els símptomes, i què cal saber sobre els anticonceptius hormonals.",
      "Pautes de tractament natural per a la dismenorrea i la síndrome premenstrual.",
      "Hàbits i rutines d'autocura al llarg del cicle: aprendre a cuidar-se de manera natural, pràctica, econòmica i senzilla.",
    ],
    photosAlt: ["Xerrada en grup", "Xerrada en petit grup"],
    facKicker: "Facilitadora",
    role: "Terapeuta en Salut Cíclica Femenina",
    fac: [
      "El meu objectiu és que les famílies de les adolescents tinguin tota la informació clara damunt la taula per poder compartir-la amb les seves filles i, juntes, decidir com actuar. Per això, els la vull transmetre d'una manera resumida, simple, clara i sense tabús.",
      "Totes ens mereixem viure una menstruació amb el màxim respecte cap als nostres cossos, sent conscients i entenent què ens cuida i què no, i per què.",
    ],
    portraitAlt: "Retrat de Gavina Freixa Rius",
    closing:
      "Totes ens mereixem viure la menstruació amb el màxim respecte pels nostres cossos, entenent què ens cuida i què no, i per què.",
    cta: "Escriu-me per a més informació",
    waText: "Hola Gavina! M'interessa la xerrada «Menstruar sense dolor».",
  },
  es: {
    eyebrow: "Charla para familias",
    title: "Menstruar sin dolor",
    subtitle: "Cómo acompañar a tu hija en sus primeros años de menstruación",
    tagline: "Prevención y tratamiento natural de la dismenorrea y el síndrome premenstrual.",
    facts: [
      { icon: "people", label: "A quién se dirige", text: "Familias de niñas que ya menstrúan o están a punto de hacerlo, y mujeres que quieren conocer recursos naturales para cuidar su salud femenina.", wide: true },
      { icon: "talk", label: "Formato", text: "Charla en círculo, con espacio para preguntas, resolución de dudas y para compartir casos personales si surge la necesidad." },
      { icon: "place", label: "Para", text: "AFAs, ayuntamientos y otras entidades." },
      { icon: "talk", label: "Duración", text: "1 h 30 min aproximadamente." },
      { icon: "place", label: "Inversión", text: "200 € + 21% de IVA + desplazamiento." },
    ],
    notice: "El contenido de esta charla no es el mismo que el de un taller de educación sexual.",
    heroAlt: "Una madre y una hija caminando juntas por un prado florido",
    more: "¿Quieres saber más?",
    presKicker: "Presentación de la charla",
    presTitle: "Acompañar los primeros años de menstruación con información clara y sin tabúes.",
    pres: [
      "Mi objetivo es que las familias sepan cómo acompañar los primeros años de menstruación: entender cómo es un ciclo saludable y reconocer las señales de alerta.",
      "También compartiremos pautas de autocuidado para prevenir y atender desequilibrios como la dismenorrea y el síndrome premenstrual (SPM), con información clara para que las familias puedan hablarlo y decidir juntas cómo actuar.",
    ],
    objKicker: "Objetivos y contenido",
    objTitle: "Qué encontrarás",
    objLead:
      "Una charla para entender qué es un ciclo menstrual saludable, qué señales de alerta conviene observar y qué pautas de autocuidado pueden ayudar a prevenir y atender desequilibrios menstruales.",
    items: [
      "Señales de un ciclo saludable y señales de alerta durante la fase premenstrual y la menstruación: ¿qué es normal y qué no debemos naturalizar?",
      "Qué es el ciclo menstrual ovulatorio y qué significa ser cíclica.",
      "Recursos para acompañar los primeros años de menstruación.",
      "Consecuencias y riesgos de enmascarar los síntomas, y qué conviene saber sobre los anticonceptivos hormonales.",
      "Pautas de tratamiento natural para la dismenorrea y el síndrome premenstrual.",
      "Hábitos y rutinas de autocuidado a lo largo del ciclo: aprender a cuidarse de forma natural, práctica, económica y sencilla.",
    ],
    photosAlt: ["Charla en grupo", "Charla en grupo pequeño"],
    facKicker: "Facilitadora",
    role: "Terapeuta en Salud Cíclica Femenina",
    fac: [
      "Mi objetivo es que las familias de las adolescentes tengan toda la información clara sobre la mesa para poder compartirla con sus hijas y, juntas, decidir cómo actuar. Por eso, se la quiero transmitir de una manera resumida, simple, clara y sin tabúes.",
      "Todas merecemos vivir la menstruación con el máximo respeto por nuestros cuerpos, siendo conscientes y entendiendo qué nos cuida y qué no, y por qué.",
    ],
    portraitAlt: "Retrato de Gavina Freixa Rius",
    closing:
      "Todas merecemos vivir la menstruación con el máximo respeto por nuestros cuerpos, entendiendo qué nos cuida y qué no, y por qué.",
    cta: "Escríbeme para más información",
    waText: "¡Hola Gavina! Me interesa la charla «Menstruar sin dolor».",
  },
} as const;

export function MenstruarPage({ lang }: { lang: Lang }) {
  const t = content[lang];
  return (
    <main className="pp">
      <style dangerouslySetInnerHTML={{ __html: proposalCss }} />

      <section className="hero">
        <div className="wrap">
          <div>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>
              {t.title}
              <small>{t.subtitle}</small>
            </h1>
            <p className="tagline">{t.tagline}</p>
            <p className="menstruar-notice">{t.notice}</p>
            <ul className="facts">
              {t.facts.map((f) => (
                <li key={f.label} className={"wide" in f && f.wide ? "wide" : undefined}>
                  {factIcons[f.icon]}
                  <div>
                    <b>{f.label}</b>
                    <span>{f.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-art">
            <img src="/web/xerrada-hero.jpg" width={1400} height={764} alt={t.heroAlt} />
          </div>
        </div>
      </section>

      <div className="more">
        <p>{t.more}</p>
        <Down />
      </div>

      <section className="block">
        <div className="narrow">
          <p className="kicker">{t.presKicker}</p>
          <h2 className="title">{t.presTitle}</h2>
          <div className="prose">
            {t.pres.map((p, i) => (
              <p key={i} className={i === 0 ? "lead" : undefined}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="block tint">
        <div className="wrap">
          <p className="kicker">{t.objKicker}</p>
          <h2 className="title">{t.objTitle}</h2>
          <p className="lead" style={{ maxWidth: 820, marginTop: 0, marginBottom: 22 }}>{t.objLead}</p>
          <ul className="objectives">
            {t.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
          <div className="photos" style={{ marginTop: 28 }}>
            <img src="/web/xerrada-2.jpg" alt={t.photosAlt[0]} loading="lazy" />
            <img src="/web/xerrada-1.jpg" alt={t.photosAlt[1]} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="block">
        <div className="wrap facilitator">
          <img src="/web/retrat.jpg" alt={t.portraitAlt} loading="lazy" />
          <div>
            <p className="kicker">{t.facKicker}</p>
            <h3>Gavina Freixa Rius</h3>
            <p className="role">{t.role}</p>
            <div className="prose">
              {t.fac.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="closing">
        <div className="narrow">
          <div className="divider"><Sprig /></div>
          <div className="wash">
            <p>{t.closing}</p>
          </div>
          <div>
            <a className="btn" href={`${WA_URL}?text=${encodeURIComponent(t.waText)}`} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              {t.cta}
            </a>
          </div>
          <p className="contact-line">
            Gavina Freixa Rius · <a href="tel:+34616351534">616 351 534</a> ·{" "}
            <a href="mailto:gavina.salutciclica@gmail.com">gavina.salutciclica@gmail.com</a>
          </p>
        </div>
        <Hills />
      </section>
    </main>
  );
}

export const MenstruarCa = () => <MenstruarPage lang="ca" />;
export const MenstruarEs = () => <MenstruarPage lang="es" />;
