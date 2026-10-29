import { proposalCss } from "./proposal-style";
import { Down, factIcons, Hills, Sprig, WA_URL, WhatsAppIcon } from "./parts";
import type { Lang } from "@/lib/i18n";

const content = {
  ca: {
    eyebrow: "Xerrada per a famílies",
    title: "Menstruar sense dolor",
    subtitle: "Acompanyar la salut femenina de la teva filla des de l'arrel",
    tagline: "Detectant senyals d'alerta i aplicant recursos naturals d'autocura i prevenció.",
    facts: [
      { icon: "people", label: "Per a qui", text: "Famílies de nenes menstruants o que estan a punt, i dones que volen conèixer recursos naturals per cuidar la seva salut femenina.", wide: true },
      { icon: "talk", label: "Format", text: "Xerrada participativa, amb espai per a preguntes, dubtes i casos personals." },
      { icon: "place", label: "Per a", text: "AFAs, ajuntaments i altres entitats." },
    ],
    notice: "Avís important: el contingut no és el mateix que el d'una xerrada taller d'educació sexual.",
    heroAlt: "Una mare i una filla caminant juntes per un prat florit",
    more: "Vols saber-ne més?",
    presKicker: "Presentació de la xerrada",
    presTitle: "Un espai per a dones que volen trencar amb l'herència del patiment menstrual.",
    pres: [
      "Per cuidar la salut femenina de la teva filla cal començar per la teva. Com pots acompanyar-la si tens dubtes sobre el teu cicle? Sabries identificar quan un símptoma premenstrual o menstrual és un senyal d'alerta?",
      "Es normalitza el dolor menstrual i la solució no és tapar-lo amb una pastilla, sinó entendre'n la causa, cuidar-se de debò i resoldre'l des de l'arrel amb respecte vers el teu cos per prevenir desequilibris ginecològics futurs.",
    ],
    objKicker: "Objectius i contingut",
    objTitle: "Què hi trobaràs",
    objLead:
      "El meu objectiu és que les famílies coneguin bé les pautes per cuidar de debò la salut femenina des dels inicis de l'etapa fèrtil, i així prevenir el desenvolupament de símptomes futurs. I que siguin conscients de la importància d'atendre a temps els dolors menstruals, si apareixen, perquè no desencadenin altres desequilibris ginecològics.",
    items: [
      "Entendre els orígens del dolor en els òrgans femenins: més enllà de la fisiologia.",
      "Senyals d'un cicle saludable vs. senyals d'alerta durant la fase premenstrual i la menstruació. Què és normal i què no hem de naturalitzar?",
      "Passos a seguir si apareixen símptomes i riscos de no atendre'ls.",
      "Conseqüències de les anticonceptives hormonals, els antiinflamatoris, les compreses de plàstic i les extirpacions.",
      "Tractament natural per a la dismenorrea i la síndrome premenstrual.",
      "Aprendre a cuidar-se de forma natural, pràctica, econòmica i senzilla. Pautes d'autocura.",
      "Hàbits i rutines per atenuar símptomes i prevenir-los.",
    ],
    photosAlt: ["Xerrada en grup", "Xerrada en petit grup"],
    facKicker: "Facilitadora",
    role: "Terapeuta en Salut Cíclica Femenina",
    fac: [
      "El meu objectiu és que les famílies de les adolescents tinguin tota la informació clara damunt la taula per poder compartir-la amb les seves filles i, juntes, decidir com actuar. Per això els la vull transmetre d'una manera resumida, simple, clara i sense tabús.",
    ],
    portraitAlt: "Retrat de Gavina Freixa Rius",
    closing:
      "Totes ens mereixem viure la nostra ciclicitat sent conscients i entenent com funciona el nostre cicle, i així viure'l amb autonomia, respectant els nostres cossos i gaudint de totes les nostres fases.",
    cta: "Escriu-me per a més informació",
    waText: "Hola Gavina! M'interessa la xerrada «Menstruar sense dolor».",
  },
  es: {
    eyebrow: "Charla para familias",
    title: "Menstruar sin dolor",
    subtitle: "Acompañar la salud femenina de tu hija desde la raíz",
    tagline: "Detectando señales de alerta y aplicando recursos naturales de autocuidado y prevención.",
    facts: [
      { icon: "people", label: "Para quién", text: "Familias de niñas que ya menstrúan o que están a punto, y mujeres que quieren conocer recursos naturales para cuidar su salud femenina.", wide: true },
      { icon: "talk", label: "Formato", text: "Charla participativa, con espacio para preguntas, dudas y casos personales." },
      { icon: "place", label: "Para", text: "AFAs, ayuntamientos y otras entidades." },
    ],
    notice: "Aviso importante: el contenido no es el mismo que el de una charla taller de educación sexual.",
    heroAlt: "Una madre y una hija caminando juntas por un prado florido",
    more: "¿Quieres saber más?",
    presKicker: "Presentación de la charla",
    presTitle: "Un espacio para mujeres que quieren romper con la herencia del sufrimiento menstrual.",
    pres: [
      "Para cuidar la salud femenina de tu hija hay que empezar por la tuya. ¿Cómo puedes acompañarla si tienes dudas sobre tu ciclo? ¿Sabrías identificar cuándo un síntoma premenstrual o menstrual es una señal de alerta?",
      "Se normaliza el dolor menstrual y la solución no es taparlo con una pastilla, sino entender su causa, cuidarse de verdad y resolverlo desde la raíz con respeto hacia tu cuerpo para prevenir desequilibrios ginecológicos futuros.",
    ],
    objKicker: "Objetivos y contenido",
    objTitle: "Qué encontrarás",
    objLead:
      "Mi objetivo es que las familias conozcan bien las pautas para cuidar de verdad la salud femenina desde los inicios de la etapa fértil, y así prevenir el desarrollo de síntomas futuros. Y que sean conscientes de la importancia de atender a tiempo los dolores menstruales, si aparecen, para que no desencadenen otros desequilibrios ginecológicos.",
    items: [
      "Entender los orígenes del dolor en los órganos femeninos: más allá de la fisiología.",
      "Señales de un ciclo saludable vs. señales de alerta durante la fase premenstrual y la menstruación. ¿Qué es normal y qué no debemos naturalizar?",
      "Pasos a seguir si aparecen síntomas y riesgos de no atenderlos.",
      "Consecuencias de los anticonceptivos hormonales, los antiinflamatorios, las compresas de plástico y las extirpaciones.",
      "Tratamiento natural para la dismenorrea y el síndrome premenstrual.",
      "Aprender a cuidarse de forma natural, práctica, económica y sencilla. Pautas de autocuidado.",
      "Hábitos y rutinas para atenuar síntomas y prevenirlos.",
    ],
    photosAlt: ["Charla en grupo", "Charla en grupo pequeño"],
    facKicker: "Facilitadora",
    role: "Terapeuta en Salud Cíclica Femenina",
    fac: [
      "Mi objetivo es que las familias de las adolescentes tengan toda la información clara sobre la mesa para poder compartirla con sus hijas y, juntas, decidir cómo actuar. Por eso se la quiero transmitir de una manera resumida, simple, clara y sin tabúes.",
    ],
    portraitAlt: "Retrato de Gavina Freixa Rius",
    closing:
      "Todas merecemos vivir nuestra ciclicidad siendo conscientes y entendiendo cómo funciona nuestro ciclo, y así vivirlo con autonomía, respetando nuestros cuerpos y disfrutando de todas nuestras fases.",
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
            <p className="notice">{t.notice}</p>
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
