import { Link } from "@tanstack/react-router";
import { ciclicitat } from "@/content/blog/ciclicitat";

function RichText({text}:{text:string}) {
  return <>{text.split(/(\*\*[^*]+\*\*)/g).map((part,i)=>part.startsWith("**")&&part.endsWith("**")?<strong key={i}>{part.slice(2,-2)}</strong>:part)}</>;
}
export function CiclicitatArticle() {
  return <main className="min-h-screen bg-[#fffdf8] font-serif text-[#6b5347]">
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link to="/blog" className="text-sm text-[#8a4b34] underline underline-offset-4">← Tornar al blog</Link>
      <header className="mt-12 border-b border-[#d8c4b3] pb-10">
        <p className="mb-4 text-xs uppercase tracking-[.2em] text-[#8a4b34]">{ciclicitat.category}</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{ciclicitat.title}</h1>
        <p className="mt-5 text-sm">Gavina Freixa Rius · 11 de novembre de 2026</p>
      </header>
      <figure className="mt-9"><img src={ciclicitat.image} alt={ciclicitat.imageAlt} className="aspect-[16/9] w-full rounded-2xl object-cover" /><figcaption className="mt-2 text-right text-xs text-[#8e6e60]">Fotografia: <a href="https://www.pexels.com/photo/moon-seen-through-branches-11829411/" target="_blank" rel="noreferrer" className="underline">Marek Piwnicki · Pexels</a></figcaption></figure>
      <div className="space-y-10 py-10 text-lg leading-[1.85]">
        {ciclicitat.sections.map((section,i)=><section key={i}>
          {"heading" in section && <h2 className="mb-6 text-3xl font-semibold leading-snug text-[#8a4b34]">{section.heading}</h2>}
          <div className="space-y-5">{section.paragraphs.map((p,j)=><p key={j}><RichText text={p}/></p>)}</div>
        {"resource" in section && section.resource === "pdf" && <a href="/blog/diagrama-lunar.pdf" download="diagrama-lunar.pdf" className="mt-6 inline-block rounded-full bg-[#8a4b34] px-6 py-3 text-base text-white">Descarrega el diagrama lunar · PDF</a>}
          {"resource" in section && section.resource === "audio" && <div className="mt-6 space-y-5 rounded-2xl bg-[#f4ebe0] p-6"><audio controls preload="metadata" aria-label="Meditació sobre ciclicitat" className="w-full"><source src="/blog/meditacio-ciclicitat.mp3" type="audio/mpeg" />El teu navegador no permet reproduir l’àudio. Pots descarregar-lo amb el botó següent.</audio><a href="/blog/meditacio-ciclicitat.mp3" download="meditacio-ciclicitat.mp3" className="inline-block rounded-full bg-[#8a4b34] px-6 py-3 text-base text-white">Descarrega la meditació · Àudio</a></div>}
        </section>)}
      </div>
      <section aria-labelledby="comentaris" className="mb-10 rounded-2xl bg-[#f4ebe0] p-7 text-lg leading-relaxed"><h2 id="comentaris" className="mb-5 text-3xl font-semibold text-[#8a4b34]">Comparteix la teva experiència</h2><p className="font-semibold">Què t’han semblat el diagrama lunar i la meditació?</p><p className="mt-4">T’han ajudat a escoltar-te o a descobrir alguna cosa sobre la teva ciclicitat?</p><p className="mt-4">Envia’m la teva experiència per correu. M’agradarà llegir-te.</p><a href={`mailto:gavina.salutciclica@gmail.com?subject=${encodeURIComponent("La meva experiència amb el diagrama lunar i la meditació")}`} className="mt-6 inline-block rounded-full bg-[#8a4b34] px-6 py-3 text-base text-white">Comparteix la teva experiència</a></section>
      <footer className="border-t border-[#d8c4b3] pt-8"><Link to="/acompanyament-individual" className="text-[#8a4b34] underline underline-offset-4">Coneix l'acompanyament individual</Link></footer>
    </article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",headline:ciclicitat.title,description:ciclicitat.description,datePublished:ciclicitat.date,author:{"@type":"Person",name:"Gavina Freixa Rius"},mainEntityOfPage:"https://www.gavinafreixarius.com/blog/la-teva-ciclicitat",inLanguage:"ca"})}}/>
  </main>;
}
