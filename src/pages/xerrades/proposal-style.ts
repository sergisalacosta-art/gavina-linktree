// Shared look for the "Xerrades i tallers" proposals, matching the standalone
// workshop page (public/taller-mares-i-filles): cream paper, burgundy titles, ochre accents.
export const proposalCss = `
  .pp {
    --cream: #f6ecdf; --paper: #fbf6ef; --burgundy: #7a1f2e; --burgundy-soft: #9b3a46;
    --ink: #4a3a33; --muted: #7a675d; --ochre: #c98a3e; --rose: #d9938c; --blush: #f1d3cb;
    --line: rgba(122, 31, 46, 0.14);
    --serif: "Cormorant Garamond", Georgia, "Times New Roman", serif;
    --sans: "Inter", system-ui, -apple-system, "Segoe UI", sans-serif;
    background: var(--cream); color: var(--ink); font-family: var(--sans); font-size: 17px; line-height: 1.65; overflow-x: clip;
  }
  .pp * { box-sizing: border-box; }
  .pp img { max-width: 100%; height: auto; display: block; }
  .pp a { color: inherit; }
  .pp .wrap { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }
  .pp .narrow { width: min(760px, calc(100% - 40px)); margin: 0 auto; }

  .pp .hero { padding: 40px 0 40px; }
  .pp .hero .wrap { display: grid; grid-template-columns: 1.05fr .95fr; gap: 48px; align-items: center; }
  .pp .eyebrow { display: inline-flex; align-items: center; gap: 12px; font-size: .78rem; letter-spacing: .28em; text-transform: uppercase; color: var(--burgundy); font-weight: 600; margin: 0; }
  .pp .eyebrow::after { content: ""; width: 48px; height: 1px; background: var(--ochre); }
  .pp h1 { font-family: var(--serif); color: var(--burgundy); font-weight: 700; font-size: clamp(2.6rem, 6vw, 4.4rem); line-height: 1; margin: 18px 0 10px; letter-spacing: -.01em; }
  .pp h1 small { display: block; font-size: .5em; font-weight: 600; line-height: 1.15; margin-top: 12px; color: var(--burgundy-soft); }
  .pp .tagline { font-family: var(--serif); font-style: italic; font-size: clamp(1.25rem, 2.2vw, 1.5rem); color: var(--burgundy-soft); line-height: 1.35; margin: 18px 0 26px; }

  .pp .facts { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 0; padding: 0; list-style: none; }
  .pp .facts li { display: flex; gap: 12px; align-items: flex-start; background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 14px 16px; }
  .pp .facts li.wide { grid-column: 1 / -1; }
  .pp .facts svg { flex-shrink: 0; width: 26px; height: 26px; color: var(--ochre); margin-top: 2px; }
  .pp .facts b { display: block; font-size: .95rem; letter-spacing: .14em; margin-bottom: 2px; text-transform: uppercase; color: var(--burgundy); font-weight: 600; }
  .pp .facts span { font-size: .95rem; line-height: 1.45; }
  .pp .notice { margin: 14px 0 0; font-size: .85rem; color: var(--muted); font-style: italic; }

  .pp .hero-art img { width: 100%; border-radius: 28px; box-shadow: 0 30px 60px -34px rgba(74,58,51,.55); }

  .pp .more { text-align: center; padding: 16px 0 24px; }
  .pp .more p { margin: 0; font-family: var(--serif); font-style: italic; font-size: 1.3rem; color: var(--burgundy-soft); }
  .pp .more svg { width: 22px; height: 22px; margin: 8px auto 0; color: var(--ochre); animation: pp-bob 2.4s ease-in-out infinite; }
  @keyframes pp-bob { 50% { transform: translateY(6px); } }

  .pp section.block { padding: 56px 0; }
  .pp section.block.tint { background: linear-gradient(180deg, rgba(241,211,203,.35), rgba(246,236,223,0)); }
  .pp .kicker { font-size: .74rem; letter-spacing: .26em; text-transform: uppercase; color: var(--ochre); font-weight: 600; margin: 0 0 6px; }
  .pp h2.title { font-family: var(--serif); color: var(--burgundy); font-size: clamp(1.9rem, 3.6vw, 2.6rem); line-height: 1.1; margin: 0 0 22px; font-weight: 700; }
  .pp .lead { font-size: 1.08rem; }
  .pp .prose p { margin: 0 0 1em; }

  .pp .objectives { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 14px; list-style: none; padding: 0; margin: 0; }
  .pp .objectives li { background: var(--paper); border: 1px solid var(--line); border-radius: 18px; padding: 16px 18px 16px 50px; position: relative; font-size: .97rem; line-height: 1.5; }
  .pp .objectives li::before {
    content: ""; position: absolute; left: 18px; top: 18px; width: 20px; height: 20px; background: var(--ochre);
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 21c0-6 2-11 8-15-1 7-3 11-8 15Zm0 0C11 15 8 12 3 11c1 5 4 8 9 10Z'/%3E%3C/svg%3E") center / contain no-repeat;
            mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 21c0-6 2-11 8-15-1 7-3 11-8 15Zm0 0C11 15 8 12 3 11c1 5 4 8 9 10Z'/%3E%3C/svg%3E") center / contain no-repeat;
  }

  .pp .photos { display: grid; grid-template-columns: 1.4fr 1fr; gap: 16px; margin-top: 8px; }
  .pp .photos img { width: 100%; height: 100%; object-fit: cover; border-radius: 22px; aspect-ratio: 4 / 3; }

  .pp .facilitator { display: grid; grid-template-columns: 220px 1fr; gap: 32px; align-items: center; }
  .pp .facilitator img { width: 220px; aspect-ratio: 1; object-fit: cover; object-position: center 20%; border-radius: 50%; box-shadow: 0 24px 50px -28px rgba(74,58,51,.6); }
  .pp .facilitator h3 { font-family: var(--serif); font-size: 2rem; color: var(--burgundy); margin: 0; font-weight: 700; }
  .pp .facilitator .role { color: var(--muted); margin: 2px 0 14px; }

  .pp .closing { padding: 64px 0 0; text-align: center; }
  .pp .wash { display: inline-block; background: rgba(241,211,203,.75); border-radius: 60% 40% 55% 45% / 55% 60% 40% 45%; padding: 34px 40px; margin-top: 22px; }
  .pp .wash p { margin: 0; font-family: var(--serif); font-style: italic; font-size: clamp(1.3rem, 2.6vw, 1.7rem); color: var(--burgundy); line-height: 1.35; }
  .pp .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border-radius: 999px; padding: 14px 26px; font: 600 .98rem var(--sans); text-decoration: none; border: 1px solid rgba(122,31,46,.35); color: var(--burgundy); transition: transform .2s ease, background .2s ease; margin-top: 28px; }
  .pp .btn:hover { transform: translateY(-2px); background: rgba(122,31,46,.06); }
  .pp .btn svg { width: 18px; height: 18px; }
  .pp .contact-line { color: var(--muted); font-size: .92rem; margin: 14px 0 0; }
  .pp .contact-line a { color: var(--burgundy); }
  .pp .divider { display: flex; align-items: center; justify-content: center; gap: 14px; color: var(--ochre); }
  .pp .divider::before, .pp .divider::after { content: ""; width: 70px; height: 1px; background: currentColor; opacity: .6; }
  .pp .divider svg { width: 26px; height: 26px; }
  .pp .hills { display: block; width: 100%; height: 120px; margin-top: 48px; }

  /* Hub cards */
  .pp .cards { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .pp .card { display: flex; flex-direction: column; background: var(--paper); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; text-decoration: none; transition: transform .3s ease, box-shadow .3s ease; }
  .pp .card:hover { transform: translateY(-4px); box-shadow: 0 26px 50px -28px rgba(74,58,51,.55); }
  .pp .card .pic { aspect-ratio: 16 / 10; overflow: hidden; background: #f3e6da; }
  .pp .card .pic img { width: 100%; height: 100%; object-fit: cover; transition: transform .9s cubic-bezier(.22,1,.36,1); }
  .pp .card:hover .pic img { transform: scale(1.04); }
  .pp .card .body { padding: 24px 26px 26px; display: flex; flex-direction: column; flex: 1; }
  .pp .card .type { font-size: .72rem; letter-spacing: .24em; text-transform: uppercase; color: var(--ochre); font-weight: 600; margin: 0 0 6px; }
  .pp .card h3 { font-family: var(--serif); color: var(--burgundy); font-size: 1.85rem; line-height: 1.1; margin: 0; font-weight: 700; }
  .pp .card h3 small { display: block; font-size: .62em; font-weight: 600; color: var(--burgundy-soft); margin-top: 6px; }
  .pp .card p { margin: 12px 0 0; color: var(--muted); font-size: .97rem; }
  .pp .card .chips { display: flex; flex-wrap: wrap; gap: 8px; margin: 16px 0 0; padding: 0; list-style: none; }
  .pp .card .chips li { font-size: .8rem; background: rgba(201,138,62,.12); border-radius: 999px; padding: 5px 12px; }
  .pp .card .go { margin-top: auto; padding-top: 18px; color: var(--burgundy); font-weight: 600; font-size: .95rem; }

  @media (max-width: 900px) {
    .pp .hero .wrap, .pp .facilitator, .pp .cards { grid-template-columns: 1fr; }
    .pp .hero-art { order: -1; }
    .pp .facilitator { text-align: center; }
    .pp .facilitator img { width: 180px; margin: 0 auto; }
  }
  @media (max-width: 600px) {
    .pp { font-size: 16px; }
    .pp .facts, .pp .photos { grid-template-columns: 1fr; }
    .pp .wash { padding: 26px 22px; }
  }
  @media (prefers-reduced-motion: reduce) { .pp .more svg { animation: none; } }
`;
