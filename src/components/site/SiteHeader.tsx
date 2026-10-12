import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, MessageCircle, X } from "lucide-react";
import logoImage from "@/assets/gavina-logo.png";
import { nav, WA_URL } from "./nav";

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (to: string, children?: { to: string }[]) =>
    to === "/" ? pathname === "/" : pathname === to || !!children?.some((c) => c.to === pathname);

  return (
    <header
      className={`site-header sticky top-0 z-50 border-b font-serif transition-[background-color,box-shadow,border-color] duration-300 ${
        open
          ? "border-[#d8c4b3]/70 bg-[#f4ebe0]"
          : scrolled
            ? "border-[#d8c4b3]/70 bg-[#f4ebe0]/95 shadow-[0_6px_24px_-18px_rgba(42,31,23,.45)] backdrop-blur-md"
            : "border-transparent bg-[#f4ebe0]"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:h-[84px]">
        <Link to="/" className="flex min-w-0 items-center gap-3" aria-label="Gavina Freixa Rius · Inici">
          <img src={logoImage} alt="" className="h-11 w-11 shrink-0 object-contain lg:h-12 lg:w-12" />
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-lg font-semibold text-[#6b5347] lg:text-xl">Gavina Freixa Rius</span>
            <span className="truncate text-[0.68rem] uppercase tracking-[0.22em] text-[#8e6e60] lg:text-xs">Salut Cíclica Femenina</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Menú principal">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className={`nav-link inline-flex items-center gap-1 ${isActive(item.to, item.children) ? "is-active" : ""}`}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 w-[300px] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-[#d8c4b3]/70 bg-[#faf5ef] p-2 shadow-[0_18px_40px_-20px_rgba(42,31,23,.45)]">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={`block rounded-xl px-4 py-3 transition-colors hover:bg-[#ece0d2] ${pathname === child.to ? "bg-[#ece0d2]" : ""}`}
                      >
                        <span className="block text-[1.02rem] text-[#6b5347]">{child.label}</span>
                        {child.hint && <span className="mt-0.5 block text-xs italic text-[#8e6e60]">{child.hint}</span>}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.to} to={item.to} className={`nav-link ${isActive(item.to) ? "is-active" : ""}`}>
                {item.label}
              </Link>
            ),
          )}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-[#8e6e60] px-5 py-2.5 text-[0.98rem] tracking-[0.04em] text-[#f4ebe0] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b5347] hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            Contacta&apos;m
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#6b5347] transition-colors hover:bg-[#ece0d2] lg:hidden"
          aria-label={open ? "Tanca el menú" : "Obre el menú"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`fixed inset-x-0 top-[72px] bottom-0 z-40 overflow-y-auto bg-[#f4ebe0] px-6 pb-10 pt-4 transition-all duration-300 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <nav className="flex flex-col" aria-label="Menú mòbil">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-[#d8c4b3]/70 py-4">
                <p className="mb-2 text-xs uppercase tracking-[0.22em] text-[#8e6e60]">{item.label}</p>
                {item.children.map((child) => (
                  <Link key={child.to} to={child.to} className="block py-2 pl-3 text-lg text-[#6b5347]">
                    {child.label}
                    {child.hint && <span className="block text-xs italic text-[#8e6e60]">{child.hint}</span>}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className={`border-b border-[#d8c4b3]/70 py-4 text-xl ${isActive(item.to) ? "text-[#8a4b34]" : "text-[#6b5347]"}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#8e6e60] px-6 py-4 text-lg tracking-[0.04em] text-[#f4ebe0]"
        >
          <MessageCircle className="h-5 w-5" />
          Contacta&apos;m per WhatsApp
        </a>
      </div>
    </header>
  );
}
