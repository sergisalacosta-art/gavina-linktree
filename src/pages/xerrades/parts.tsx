// Small shared pieces for the "Xerrades i tallers" pages.
export const WA_URL = "https://wa.me/34616351534";

export function Hills() {
  return (
    <svg className="hills" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 60C160 18 300 26 430 52s250 42 380 9 300-52 420-26 160 34 210 34V120H0Z" fill="#b9b08a" opacity=".55" />
      <path d="M0 82c140-34 280-38 420-13s260 38 400 9 290-38 410-17 170 30 210 26V120H0Z" fill="#e3a79c" opacity=".7" />
      <path d="M0 99c180-26 330-26 480-7s300 21 460 2 320-21 500 0V120H0Z" fill="#e9b9ad" />
    </svg>
  );
}

export function Sprig() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" d="M12 22V9m0 6c-3-.5-5-2.5-5.5-5.5 3 .3 5 2.3 5.5 5.5Zm0-3c3-.5 5-2.5 5.5-5.5-3 .3-5 2.3-5.5 5.5Zm0-3c-.2-2.8 1-4.8 0-7-1 2.2.2 4.2 0 7Z" />
    </svg>
  );
}

export function Down() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path fill="currentColor" d="M19.05 4.91A10 10 0 0 0 3.34 17l-1.3 4.74 4.86-1.27A10 10 0 1 0 19.05 4.91Zm-7.05 15.4a8.27 8.27 0 0 1-4.22-1.16l-.3-.18-2.88.75.77-2.81-.2-.31A8.31 8.31 0 1 1 20.3 12a8.34 8.34 0 0 1-8.3 8.31Zm4.55-6.22c-.25-.13-1.48-.73-1.71-.81s-.4-.13-.56.13-.65.81-.79.97-.29.18-.54.06a6.78 6.78 0 0 1-2-1.23 7.56 7.56 0 0 1-1.4-1.74c-.14-.25 0-.38.11-.51s.25-.29.37-.43a1.62 1.62 0 0 0 .25-.41.46.46 0 0 0 0-.44c-.06-.13-.56-1.34-.76-1.83s-.4-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.81 2.81 0 0 0-.88 2.1 4.91 4.91 0 0 0 1 2.59 11.16 11.16 0 0 0 4.27 3.77 14.43 14.43 0 0 0 1.42.52 3.43 3.43 0 0 0 1.57.1 2.58 2.58 0 0 0 1.69-1.19 2.1 2.1 0 0 0 .14-1.19c-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

export const factIcons = {
  people: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><circle cx="8" cy="7" r="3" /><circle cx="17" cy="9" r="2.4" /><path d="M2.5 20c.6-3.6 2.8-5.5 5.5-5.5s4.9 1.9 5.5 5.5M13.5 20c.4-2.8 1.8-4.3 3.5-4.3s3.1 1.5 3.5 4.3" /></g></svg>
  ),
  talk: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" d="M4 5h16v10H9l-4 4v-4H4Z" /></svg>
  ),
  place: (
    <svg viewBox="0 0 24 24" aria-hidden="true"><g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"><path d="M3 21h18M5 21V10l7-5 7 5v11" /><path d="M10 21v-5h4v5" /></g></svg>
  ),
};
