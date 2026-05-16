import Link from "next/link";
import { BOOKING_URL, PHONE, PHONE_HREF, ADDRESS } from "@/lib/constants";

const services = [
  {
    id: "01",
    name: "Make Up & Hair",
    sk: "Líčenie & Vlasy",
    desc: "Líčenie a vlasový styling na akúkoľvek príležitosť. Od konzultácie až po finálny look priamo v centre mesta.",
  },
  {
    id: "02",
    name: "Svadba",
    sk: "Svadobné líčenie",
    desc: "Kompletné svadobné služby — od skúšky líčenia, kozmetického ošetrenia a úpravy obočia až po dokonalý bridal look.",
  },
  {
    id: "03",
    name: "Face Gym",
    sk: "Masáž & Omladzovanie",
    desc: "Špeciálne masážne techniky svalov tváre, krku a dekoltu. Pleť svieža, vypnutá a rozžiarená.",
  },
  {
    id: "04",
    name: "Kozmetika",
    sk: "Starostlivosť o pleť",
    desc: "Účinné kozmetické ošetrenia — čistenie pleti, hĺbková výživa, hydratácia a relaxačná masáž.",
  },
  {
    id: "05",
    name: "Obočie",
    sk: "Úprava & Laminácia",
    desc: "Dokonalé obočie na 4–6 týždňov. Konzultácia tvaru, úprava, farbenie a laminácia obočia.",
  },
  {
    id: "06",
    name: "Kurzy",
    sk: "Sebalíčenie & Masterclass",
    desc: "Naučte sa líčiť seba alebo profesionálne techniky na modelke. Pre jednotlivcov aj skupiny.",
  },
];

const portfolioItems = [
  {
    label: "Svadobné",
    gradient: "from-[#1c1220] via-[#281830] to-[#1c1220]",
  },
  {
    label: "Večerné",
    gradient: "from-[#0d0d14] via-[#181826] to-[#0d0d14]",
  },
  {
    label: "Denné",
    gradient: "from-[#1a1610] via-[#262018] to-[#1a1610]",
  },
  {
    label: "Editorál",
    gradient: "from-[#0e161c] via-[#16222e] to-[#0e161c]",
  },
  {
    label: "Hair",
    gradient: "from-[#1c1210] via-[#2e1c18] to-[#1c1210]",
  },
  {
    label: "Prírodné",
    gradient: "from-[#101a14] via-[#182820] to-[#101a14]",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink">
        {/* Atmospheric glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-lavender/10 blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-blush/8 blur-[100px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <h1 className="font-script text-cream leading-none">
            <span className="block text-[clamp(4rem,14vw,10rem)]">
              face up!
            </span>
          </h1>
          <p className="text-[clamp(0.55rem,1.8vw,0.85rem)] tracking-[0.6em] uppercase text-cream/50 font-body mt-1 mb-10">
            studio
          </p>

          <p className="font-heading italic text-cream/80 text-[clamp(1.2rem,3vw,2rem)] mb-3 leading-relaxed">
            "Turning dreams into flawless reality."
          </p>
          <p className="font-body text-cream/40 text-sm tracking-widest uppercase mb-12">
            Váš beauty studio v centre Košíc
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-lavender text-ink font-body text-xs tracking-widest uppercase hover:bg-cream transition-colors duration-300"
            >
              Rezervovať termín
            </a>
            <Link
              href="/sluzby"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-cream/30 text-cream font-body text-xs tracking-widest uppercase hover:border-cream transition-colors duration-300"
            >
              Naše služby
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30">
          <span className="font-body text-[10px] tracking-widest uppercase">
            Scroll
          </span>
          <svg
            className="w-4 h-4 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </section>

      {/* ── IDENTITY STRIP ── */}
      <section className="bg-lavender/10 border-y border-lavender/20 py-5">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center font-body text-xs tracking-widest uppercase text-ink/60">
            <span>💜 Your Beauty Studio in the City Centre</span>
            <span className="hidden sm:block text-ink/20">|</span>
            <a
              href="https://maps.google.com/?q=Zvonárska+13,+Košice"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
            >
              {ADDRESS}
            </a>
            <span className="hidden sm:block text-ink/20">|</span>
            <a href={PHONE_HREF} className="hover:text-ink transition-colors">
              {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 lg:mb-20">
            <p className="font-body text-xs tracking-widest uppercase text-stone mb-4">
              Ponuka 2026
            </p>
            <h2 className="font-heading text-[clamp(2.5rem,6vw,4rem)] text-ink leading-tight">
              Naše Služby
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
            {services.map((s) => (
              <Link
                key={s.id}
                href="/sluzby"
                className="group bg-cream p-8 lg:p-10 hover:bg-ink transition-colors duration-300 flex flex-col gap-4"
              >
                <span className="font-body text-xs tracking-widest text-lavender group-hover:text-lavender/70">
                  {s.id}
                </span>
                <div>
                  <h3 className="font-heading text-2xl lg:text-3xl text-ink group-hover:text-cream transition-colors duration-300 mb-1">
                    {s.sk}
                  </h3>
                  <p className="font-body text-xs tracking-wider uppercase text-stone group-hover:text-cream/40 transition-colors duration-300">
                    {s.name}
                  </p>
                </div>
                <p className="font-body text-sm text-ink/60 group-hover:text-cream/60 transition-colors duration-300 leading-relaxed flex-1">
                  {s.desc}
                </p>
                <span className="font-body text-xs tracking-widest uppercase text-lavender group-hover:text-lavender/70 flex items-center gap-2">
                  Zistiť viac
                  <svg
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-ink text-cream font-body text-xs tracking-widest uppercase hover:bg-lavender hover:text-ink transition-all duration-300"
            >
              Rezervovať termín online
            </a>
          </div>
        </div>
      </section>

      {/* ── WEDDING SEASON ── */}
      <section className="relative bg-ink py-24 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-lavender/8 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-blush/6 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="font-body text-xs tracking-widest uppercase text-lavender/70 mb-6">
            ✨ Svadobná sezóna
          </p>
          <h2 className="font-heading italic text-cream text-[clamp(3rem,8vw,6rem)] leading-none mb-8">
            Wedding
            <br />
            <span className="not-italic font-heading text-[clamp(1.2rem,3vw,2rem)] tracking-[0.3em] uppercase text-cream/50">
              Season 2026
            </span>
          </h2>
          <p className="font-body text-cream/60 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Svadobný deň je pre nevestu jeden z najdôležitejších. Postaráme sa
            o Vás od prvej konzultácie, skúšky líčenia, až po dokonalý svadobný
            look — v salóne alebo priamo na mieste konania svadby.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 border border-lavender text-lavender font-body text-xs tracking-widest uppercase hover:bg-lavender hover:text-ink transition-all duration-300"
          >
            Rezervovať svadobnú konzultáciu
          </a>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section className="py-24 lg:py-32 bg-sand">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
            <div>
              <p className="font-body text-xs tracking-widest uppercase text-stone mb-4">
                Naša práca
              </p>
              <h2 className="font-heading text-[clamp(2.5rem,6vw,4rem)] text-ink leading-tight">
                Portfólio
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="font-body text-xs tracking-widest uppercase text-ink/60 hover:text-ink flex items-center gap-2 transition-colors shrink-0"
            >
              Zobraziť všetko
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
            {portfolioItems.map((item) => (
              <Link
                key={item.label}
                href="/portfolio"
                className={`group relative aspect-[3/4] bg-gradient-to-br ${item.gradient} overflow-hidden`}
              >
                <div className="absolute inset-0 bg-lavender/0 group-hover:bg-lavender/10 transition-colors duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15 pointer-events-none">
                  <svg
                    className="w-8 h-8 text-cream"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-heading text-cream text-lg group-hover:text-lavender transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <p className="font-body text-xs tracking-widest uppercase text-stone mb-4">
              Vzdelávanie
            </p>
            <h2 className="font-heading text-[clamp(2.5rem,6vw,4rem)] text-ink leading-tight">
              Kurzy & Masterclass
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-ink p-10 lg:p-14 flex flex-col gap-6">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-lavender mb-3">
                  Pre každého
                </p>
                <h3 className="font-heading text-cream text-3xl lg:text-4xl mb-1">
                  Kurz sebalíčenia
                </h3>
                <p className="font-body text-xs tracking-wider uppercase text-cream/30">
                  Self-makeup course
                </p>
              </div>
              <p className="font-body text-cream/60 text-sm leading-relaxed">
                Teoretické a praktické znalosti zo sveta beauty a make-upu.
                Naučíme sa nalíčiť na akúkoľvek príležitosť. Všetky produkty a
                pomôcky sú zahrnuté.
              </p>
              <ul className="font-body text-sm text-cream/50 space-y-2">
                {[
                  "Pre kohokoľvek a každú vekovú kategóriu",
                  "Teória + prax na sebe",
                  "Starostlivosť o pleť ako základ líčenia",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-lavender block" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto self-start inline-flex items-center gap-3 px-8 py-3.5 border border-lavender text-lavender font-body text-xs tracking-widest uppercase hover:bg-lavender hover:text-ink transition-all duration-300"
              >
                Rezervovať kurz
              </a>
            </div>

            <div className="bg-sand p-10 lg:p-14 flex flex-col gap-6 border border-ink/10">
              <div>
                <p className="font-body text-xs tracking-widest uppercase text-blush mb-3">
                  Pre skupiny & firmy
                </p>
                <h3 className="font-heading text-ink text-3xl lg:text-4xl mb-1">
                  Masterclass
                </h3>
                <p className="font-body text-xs tracking-wider uppercase text-ink/30">
                  Professional makeup class
                </p>
              </div>
              <p className="font-body text-ink/60 text-sm leading-relaxed">
                Tipy, triky a techniky správnej aplikácie make-upu priamo na
                modelke. Vhodný pre skupiny, teambuildingy a firemné akcie.
              </p>
              <ul className="font-body text-sm text-ink/50 space-y-2">
                {[
                  "Skupiny, teambuildingy, firemné akcie",
                  "Práca na modelke",
                  "Profesionálne techniky & produkty",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blush block" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/kurzy"
                className="mt-auto self-start inline-flex items-center gap-3 px-8 py-3.5 bg-ink text-cream font-body text-xs tracking-widest uppercase hover:bg-lavender hover:text-ink transition-all duration-300"
              >
                Viac o masterclass
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-ink py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <p className="font-body text-xs tracking-widest uppercase text-lavender/70 mb-6">
            Kontakt
          </p>
          <h2 className="font-heading text-cream text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-8">
            Rezervujte si termín dnes
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 font-body text-sm text-cream/50">
            <a
              href={PHONE_HREF}
              className="flex items-center gap-2 hover:text-cream transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.338c0-1.16.935-2.11 2.088-2.128l.116-.001c1.005 0 1.88.668 2.125 1.642l.567 2.255a2.141 2.141 0 0 1-.761 2.24l-.594.446a.75.75 0 0 0-.25.872 11.25 11.25 0 0 0 5.026 5.025.75.75 0 0 0 .872-.25l.446-.594a2.141 2.141 0 0 1 2.24-.761l2.256.567a2.14 2.14 0 0 1 1.642 2.125v.116a2.133 2.133 0 0 1-2.128 2.088H17.25C9.097 21.75 2.25 14.903 2.25 6.338Z"
                />
              </svg>
              {PHONE}
            </a>
            <span className="text-cream/20 hidden sm:block">|</span>
            <a
              href="https://maps.google.com/?q=Zvonárska+13,+Košice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-cream transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              {ADDRESS}
            </a>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-4 bg-lavender text-ink font-body text-xs tracking-widest uppercase hover:bg-cream transition-colors duration-300"
          >
            Rezervovať online
          </a>
        </div>
      </section>
    </>
  );
}
