// Scroll-reveal animations shared by every page.
// - Elements with [data-reveal] are always animated.
// - On pages whose <main> lacks data-motion="manual", the content blocks of each
//   <section> are animated automatically, so existing pages get motion for free.
// Elements already on screen when the page loads are left alone (the page fade
// covers them), so nothing above the fold ever flashes.

const DONE = "revealDone";
const DURATION = 900;

function autoTargets(root: ParentNode): HTMLElement[] {
  const out: HTMLElement[] = [];
  root.querySelectorAll<HTMLElement>("main:not([data-motion='manual']) section").forEach((section) => {
    let container: Element = section;
    for (let depth = 0; depth < 3 && container.children.length === 1; depth++) {
      container = container.children[0];
    }
    Array.from(container.children).forEach((child) => {
      if (child instanceof HTMLElement && !child.matches("style, script")) out.push(child);
    });
  });
  return out;
}

export function setupReveal(root: HTMLElement): () => void {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return () => {};
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => {};

  const timers = new Set<number>();

  const io = new IntersectionObserver(
    (entries) => {
      let batch = 0;
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        io.unobserve(el);
        if (!el.style.getPropertyValue("--reveal-delay") && !el.hasAttribute("data-reveal")) {
          el.style.setProperty("--reveal-delay", `${Math.min(batch, 5) * 90}ms`);
        }
        batch++;
        el.classList.add("is-visible");
        const delay = parseInt(el.style.getPropertyValue("--reveal-delay") || "0", 10) || 0;
        // Hand the element back to its own styles (hover transitions etc.) once done.
        const t = window.setTimeout(() => {
          el.classList.remove("reveal", "is-visible");
          timers.delete(t);
        }, DURATION + delay + 100);
        timers.add(t);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  const scan = () => {
    const vh = window.innerHeight;
    const targets = new Set<HTMLElement>([
      ...root.querySelectorAll<HTMLElement>("[data-reveal]"),
      ...autoTargets(root),
    ]);
    targets.forEach((el) => {
      if (el.dataset[DONE]) return;
      el.dataset[DONE] = "1";
      if (el.getBoundingClientRect().top < vh * 0.92) return;
      el.classList.add("reveal");
      io.observe(el);
    });
  };

  scan();
  let raf = 0;
  const mo = new MutationObserver(() => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(scan);
  });
  mo.observe(root, { childList: true, subtree: true });

  return () => {
    mo.disconnect();
    io.disconnect();
    cancelAnimationFrame(raf);
    timers.forEach((t) => clearTimeout(t));
  };
}
