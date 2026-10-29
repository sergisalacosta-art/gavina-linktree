// Line icons for the home cards. Same stroke, size and colour so they read as one family.
type IconProps = { className?: string };

const base = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Open book: the materials and knowledge Gavina shares. */
export function BookIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M32 18c-5-4-12-5-20-4v32c8-1 15 0 20 4 5-4 12-5 20-4V14c-8-1-15 0-20 4Z" />
      <path d="M32 18v32" />
      <path d="M17 22c4-.4 7.5.2 10.5 1.6M17 28c4-.4 7.5.2 10.5 1.6M17 34c4-.4 7.5.2 10.5 1.6M47 22c-4-.4-7.5.2-10.5 1.6M47 28c-4-.4-7.5.2-10.5 1.6M47 34c-4-.4-7.5.2-10.5 1.6" opacity=".55" />
    </svg>
  );
}

/** Sprout: growth, roots and a place to nourish each other. */
export function SproutIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M32 50V28" />
      <path d="M32 34c-1-8-7-13-16-13 0 8 6 13 16 13Z" />
      <path d="M32 29c1-8 7-13 16-13 0 8-6 13-16 13Z" />
      <path d="M18 50c8-3 20-3 28 0" />
      <path d="M26 54c4-1 8-1 12 0" opacity=".55" />
    </svg>
  );
}

/** Circle of women: meeting, learning and sharing. */
export function CircleIcon({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="32" cy="12" r="3.6" />
      <path d="M27.3 20.4A12.5 12.5 0 0 1 36.7 20.4" />
      <circle cx="49.3" cy="22" r="3.6" />
      <path d="M39.7 22.1A12.5 12.5 0 0 1 44.4 30.3" />
      <circle cx="49.3" cy="42" r="3.6" />
      <path d="M44.4 33.7A12.5 12.5 0 0 1 39.7 41.9" />
      <circle cx="32" cy="52" r="3.6" />
      <path d="M36.7 43.6A12.5 12.5 0 0 1 27.3 43.6" />
      <circle cx="14.7" cy="42" r="3.6" />
      <path d="M24.3 41.9A12.5 12.5 0 0 1 19.6 33.7" />
      <circle cx="14.7" cy="22" r="3.6" />
      <path d="M19.6 30.3A12.5 12.5 0 0 1 24.3 22.1" />
      <path d="M32 28.5c1.6 1.6 1.6 3.6 0 5.5-1.6-1.9-1.6-3.9 0-5.5Z" opacity=".7" />
    </svg>
  );
}
