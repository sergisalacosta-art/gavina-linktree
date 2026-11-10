import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { dismenorrea } from "@/content/blog/dismenorrea";

const categories = ["Tots", "Menstruació i salut menstrual", "Ciclicitat femenina", "Autocures femenines ancestrals", "Menarquia i adolescència", "Climateri i maduresa femenina", "Matriu, pelvis i sexualitat"];
export function BlogIndex() {
  const [selected, setSelected] = useState("Tots");
  const visible = selected === "Tots" || dismenorrea.categories.some((category) => category === selected);
  return <main className="min-h-screen bg-[#fffdf8] font-serif text-[#6b5347]">
    <header className="bg-[#f4ebe0] px-6 py-20 text-center">
      <p className="mb-4 text-xs uppercase tracking-[.25em] text-[#8a4b34]">SALUT CÍCLICA FEMENINA</p>
      <h1 className="text-5xl font-semibold">El blog</h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg">Un espai per aprofundir en la nostra naturalesa cíclica, comprendre el llenguatge del cos i recuperar els sabers femenins ancestrals.</p>
    </header>
    <div className="mx-auto max-w-5xl px-6 py-14">
      <nav aria-label="Categories del blog" className="mb-10 flex flex-wrap gap-2">
        {categories.map((category)=><button type="button" onClick={()=>setSelected(category)} aria-pressed={selected===category} key={category} className={`rounded-full border border-[#d8c4b3] px-4 py-2 text-sm ${selected===category?"bg-[#8a4b34] text-white":""}`}>{category}</button>)}
      </nav>
      <div className="grid gap-8 md:grid-cols-2">
        {visible && <Link to="/blog/que-es-la-dismenorrea" className="group block overflow-hidden rounded-3xl border border-[#e4d6c9] bg-[#faf5ef] shadow-sm hover:shadow-lg">
          <div className="h-52 bg-[#e9d9cb] p-10 flex items-center justify-center text-center text-[#8a4b34] text-2xl">Menstruació i salut menstrual</div>
          <div className="p-7"><p className="mb-3 text-xs uppercase tracking-[.16em] text-[#8a4b34]">{dismenorrea.category}</p><h2 className="text-2xl font-semibold group-hover:underline">{dismenorrea.title}</h2><p className="mt-3 text-base">{dismenorrea.description}</p><p className="mt-5 text-[#8a4b34]">Llegir l'article →</p></div>
        </Link>}
      </div>
      {!visible && <p className="mt-6 text-[#6b5347]">Encara no hi ha articles en aquesta categoria.</p>}
    </div>
  </main>;
}
