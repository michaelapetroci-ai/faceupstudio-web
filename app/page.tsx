import Link from "next/link";
import { BOOKING_URL, PHONE, PHONE_HREF, ADDRESS } from "@/lib/constants";

const services = [
  {
    id: "01",
    emoji: "💄",
    name: "Make Up & Hair",
    desc: "Natural Makeup, Glam Makeup, vlasový styling na akúkoľvek príležitosť.",
    from: "od 60 €",
  },
  {
    id: "02",
    emoji: "💍",
    name: "Svadba",
    desc: "Kompletná príprava nevesty — od Bridal Trial po dokonalý svadobný look.",
    from: "od 65 €",
  },
  {
    id: "03",
    emoji: "💪",
    name: "Face Gym",
    desc: "Masáž svalov tváre, krku a dekoltu. Pleť svieža, vypnutá a rozžiarená.",
    from: "od 35 €",
  },
  {
    id: "04",
    emoji: "✨",
    name: "Kozmetika",
    desc: "Algotherm ošetrenia — hĺbkové čistenie, výživa a relaxačná masáž.",
    from: "od 40 €",
  },
  {
    id: "05",
    emoji: "👁️",
    name: "Obočie",
    desc: "Úprava, farbenie a laminácia obočia. Dokonalý tvar na 4–6 týždňov.",
    from: "od 13 €",
  },
  {
    id: "06",
    emoji: "🎓",
    name: "Kurzy",
    desc: "The Art of Natural Beauty & The Art of Glam. Sebalíčenie aj masterclass.",
    from: "od 200 €",
  },
];

const portfolioItems = [
  { label: "Svadobné", gradient: "from-[#1c1220] via-[#2a1830] to-[#1c1220]" },
  { label: "Glam", gradient: "from-[#180818] via-[#280828] to-[#180818]" },
  { label: "Natural", gradient: "from-[#1a1610] via-[#262018] to-[#1a1610]" },
  { label: "Editorál", gradient: "from-[#0e161c] via-[#16222e] to-[#0e161c]" },
  { label: "Hair", gradient: "from-[#1c1210] via-[#2e1c18] to-[#1c1210]" },
  { label: "Face Gym", gradient: "from-[#101a14] via-[#182820] to-[#101a14]" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-brand flex items-center justify-center overflow-hidden pt-16">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-white/20 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-rose/20 blur-[60px] pointer-events-none" />

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          {/* Logo wordmark */}
          <div className="mb-6">
            <h1 className="font-display font-black text-dark leading-none text-[clamp(4.5rem,16vw,11rem)]">
              face up!
            </h1>
            <p className="font-display font-light text-dark/60 tracking-[0.4em] uppercase text-sm -mt-2">
              studio
            </p>
          </div>

          <p className="font-display font-semibold italic text-dark/70 text-[clamp(1rem,2.5vw,1.5rem)] mb-2">
            "Turning dreams into flawless reality."
          </p>
          <p className="font-display text-dark/50 text-sm font-medium mb-10">
            Váš beauty studio v centre Košíc 💜
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-dark text-white font-black text-sm rounded-full hover:bg-rose transition-colors duration-200"
            >
              Rezervovať termín
            </a>
            <Link
              href="/cennik"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white/60 text-dark font-black text-sm rounded-full hover:bg-white transition-colors duration-200"
            >
              Zobraziť cenník ✨
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-dark/40 flex flex-col items-center gap-1">
          <span className="font-display text-[10px] font-semibold tracking-widest uppercase">Scroll</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <section className="bg-dark py-4">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-center font-display font-semibold text-xs text-white/60 tracking-wide">
            <span className="text-brand">💜 Your Beauty Studio in the City Centre</span>
            <span className="hidden sm:block text-white/20">·</span>
            <a href="https://maps.google.com/?q=Zvonárska+13,+Košice" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{ADDRESS}</a>
            <span className="hidden sm:block text-white/20">·</span>
            <a href={PHONE_HREF} className="hover:text-white transition-colors">{PHONE}</a>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12">
            <p className="font-display font-bold text-xs tracking-widest uppercase text-rose mb-2">Ponuka 2026</p>
            <h2 className="font-display font-black text-dark text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              Naše Služby
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.id}
                href="/sluzby"
                className="group border-2 border-brand/30 hover:border-brand hover:bg-blush p-7 rounded-2xl transition-all duration-200 flex flex-col gap-4"
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{s.emoji}</span>
                  <span className="font-display font-black text-xs text-brand bg-brand/15 px-2.5 py-1 rounded-full">
                    {s.from}
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-black text-dark text-xl mb-1">{s.name}</h3>
                  <p className="font-display text-dark/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <span className="font-display font-bold text-xs text-rose flex items-center gap-1.5 group-hover:gap-3 transition-all">
                  Zistiť viac
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-dark text-white font-black text-sm rounded-full hover:bg-rose transition-colors"
            >
              Rezervovať online
            </a>
            <Link
              href="/cennik"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-brand text-dark font-black text-sm rounded-full hover:bg-brand transition-colors"
            >
              Zobraziť celý cenník
            </Link>
          </div>
        </div>
      </section>

      {/* ── WEDDING ── */}
      <section className="bg-blush py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <p className="font-display font-bold text-xs tracking-widest uppercase text-rose mb-3">✨ Svadobná sezóna</p>
              <h2 className="font-display font-black text-dark text-[clamp(2.5rem,6vw,4.5rem)] leading-none mb-5">
                Wedding<br />Season<br />
                <span className="text-rose">2026</span>
              </h2>
              <p className="font-display text-dark/60 text-base leading-relaxed mb-8 max-w-md">
                Svadobný deň je pre nevestu jeden z najdôležitejších. Kompletná príprava od Bridal Trial, kozmetického ošetrenia, úpravy obočia až po dokonalý svadobný look — v salóne alebo na mieste.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3.5 bg-dark text-white font-black text-sm rounded-full hover:bg-rose transition-colors"
                >
                  Rezervovať konzultáciu
                </a>
                <Link
                  href="/cennik"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-dark text-dark font-black text-sm rounded-full hover:bg-dark hover:text-white transition-colors"
                >
                  Svadobný cenník
                </Link>
              </div>
            </div>
            {/* Price preview */}
            <div className="w-full lg:w-80 bg-white rounded-2xl p-7 shadow-sm border border-brand/20">
              <p className="font-display font-black text-dark text-lg mb-5">Svadba — cenník</p>
              <div className="space-y-4">
                {[
                  { name: "Glam Makeup", time: "70 min", price: "70 €" },
                  { name: "Bridal Trial", time: "70 min", price: "65 €" },
                  { name: "Hair styling", time: "30–90 min", price: "30–60 €" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between gap-3 pb-4 border-b border-brand/15 last:border-0 last:pb-0">
                    <div>
                      <p className="font-display font-bold text-dark text-sm">{item.name}</p>
                      <p className="font-display text-dark/40 text-xs">{item.time}</p>
                    </div>
                    <span className="font-display font-black text-dark text-sm shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 font-display text-dark/40 text-[11px] leading-relaxed">
                * Záloha 50% pri rezervácii. Výjazd zo salónu po dohode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-5">
            <div>
              <p className="font-display font-bold text-xs tracking-widest uppercase text-rose mb-2">Naša práca</p>
              <h2 className="font-display font-black text-dark text-[clamp(2rem,5vw,3.5rem)] leading-tight">Portfólio</h2>
            </div>
            <Link href="/portfolio" className="font-display font-bold text-sm text-dark/50 hover:text-dark flex items-center gap-2 transition-colors shrink-0">
              Zobraziť všetko
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {portfolioItems.map((item) => (
              <Link
                key={item.label}
                href="/portfolio"
                className={`group relative aspect-[3/4] bg-gradient-to-br ${item.gradient} rounded-xl overflow-hidden`}
              >
                <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/15 transition-colors duration-300 rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="font-display font-black text-white text-base group-hover:text-brand transition-colors">{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ── */}
      <section className="py-20 lg:py-28 bg-blush">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12">
            <p className="font-display font-bold text-xs tracking-widest uppercase text-rose mb-2">Vzdelávanie</p>
            <h2 className="font-display font-black text-dark text-[clamp(2rem,5vw,3.5rem)] leading-tight">Kurzy & Masterclass</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Kurz sebalíčenia */}
            <div className="bg-dark rounded-2xl p-8 lg:p-10 flex flex-col gap-5">
              <div>
                <span className="inline-flex items-center px-3 py-1 bg-brand/20 text-brand text-xs font-black rounded-full mb-4">Pre každého ✨</span>
                <h3 className="font-display font-black text-white text-2xl lg:text-3xl">Kurz sebalíčenia</h3>
              </div>
              <div className="space-y-3">
                {[
                  { name: "The Art of Natural Beauty", sub: "základný kurz · 3 hod", price: "200 €" },
                  { name: "The Art of Glam", sub: "pokročilý kurz · 3 hod", price: "200 €" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center justify-between bg-white/10 rounded-xl px-4 py-3">
                    <div>
                      <p className="font-display font-bold text-white text-sm">{c.name}</p>
                      <p className="font-display text-white/40 text-xs">{c.sub}</p>
                    </div>
                    <span className="font-display font-black text-brand text-base">{c.price}</span>
                  </div>
                ))}
              </div>
              <p className="font-display text-white/40 text-xs">10% zľava pre klientov Face Up! Studio</p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="self-start inline-flex items-center px-6 py-2.5 bg-brand text-dark font-black text-sm rounded-full hover:bg-white transition-colors">
                Rezervovať kurz
              </a>
            </div>

            {/* Masterclass */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 flex flex-col gap-5 border-2 border-brand/30">
              <div>
                <span className="inline-flex items-center px-3 py-1 bg-rose/15 text-rose text-xs font-black rounded-full mb-4">Pre skupiny 💅</span>
                <h3 className="font-display font-black text-dark text-2xl lg:text-3xl">Masterclass</h3>
              </div>
              <p className="font-display text-dark/60 text-sm leading-relaxed">
                Tipy, triky a techniky správnej aplikácie make-upu na modelke. Pre skupiny, teambuildingy a firemné akcie. Cenová ponuka individuálne.
              </p>
              <ul className="space-y-2">
                {["Práca na modelke", "Skupiny, firmy, teambuildingy", "Profesionálne techniky & produkty"].map((i) => (
                  <li key={i} className="flex items-center gap-2 font-display text-sm text-dark/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose block shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <Link href="/kurzy"
                className="self-start inline-flex items-center px-6 py-2.5 bg-dark text-white font-black text-sm rounded-full hover:bg-rose transition-colors">
                Viac o masterclass
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ── */}
      <section className="bg-brand py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <h2 className="font-display font-black text-dark text-[clamp(2rem,5vw,3.5rem)] leading-tight mb-4">
            Rezervujte si termín dnes! 💜
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 font-display text-sm text-dark/60 font-semibold">
            <a href={PHONE_HREF} className="hover:text-dark transition-colors">{PHONE}</a>
            <span className="hidden sm:block text-dark/20">·</span>
            <a href="https://maps.google.com/?q=Zvonárska+13,+Košice" target="_blank" rel="noopener noreferrer" className="hover:text-dark transition-colors">{ADDRESS}</a>
          </div>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-dark text-white font-black text-sm rounded-full hover:bg-rose transition-colors duration-200"
          >
            Rezervovať online
          </a>
        </div>
      </section>
    </>
  );
}
