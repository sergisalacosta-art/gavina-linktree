import { Link } from "@tanstack/react-router";
import { dismenorrea } from "@/content/blog/dismenorrea";

function RichText({text}:{text:string}) {
  return <>{text.split(/(\*\*[^*]+\*\*)/g).map((part,i)=>part.startsWith("**")&&part.endsWith("**")?<strong key={i}>{part.slice(2,-2)}</strong>:part)}</>;
}
export function DismenorreaArticle() {
  return <main className="min-h-screen bg-[#fffdf8] font-serif text-[#6b5347]">
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link to="/blog" className="text-sm text-[#8a4b34] underline underline-offset-4">← Tornar al blog</Link>
      <header className="mt-12 border-b border-[#d8c4b3] pb-10">
        <p className="mb-4 text-xs uppercase tracking-[.2em] text-[#8a4b34]">{dismenorrea.category}</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{dismenorrea.title}</h1>
        <p className="mt-5 text-sm">Gavina Freixa Rius · 10 de novembre de 2026</p>
      </header>
      <figure className="mt-9"><img src={dismenorrea.image} alt={dismenorrea.imageAlt} className="aspect-[16/9] w-full rounded-2xl object-cover" /><figcaption className="mt-2 text-right text-xs text-[#8e6e60]">Fotografia: Michelle Spencer · CC0</figcaption></figure>
      <div className="space-y-10 py-10 text-lg leading-[1.85]">
        {dismenorrea.sections.map((section,i)=><section key={i}>
          {"heading" in section && <h2 className="mb-6 text-3xl font-semibold leading-snug text-[#8a4b34]">{section.heading}</h2>}
          <div className="space-y-5">{section.paragraphs.map((p,j)=><p key={j}><RichText text={p}/></p>)}</div>
        </section>)}
      </div>
      <footer className="border-t border-[#d8c4b3] pt-8"><Link to="/acompanyament-individual" className="text-[#8a4b34] underline underline-offset-4">Coneix l'acompanyament individual</Link></footer>
    </article>
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@type":"BlogPosting",headline:dismenorrea.title,description:dismenorrea.description,datePublished:dismenorrea.date,author:{"@type":"Person",name:"Gavina Freixa Rius"},mainEntityOfPage:"https://www.gavinafreixarius.com/blog/que-es-la-dismenorrea",inLanguage:"ca"})}}/>
  </main>;
}
