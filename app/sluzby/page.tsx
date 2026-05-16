import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Služby – Face Up! Studio Košice",
  description:
    "Make Up & Hair, svadobné líčenie, Face Gym, kozmetika, obočie, kurzy. Kompletné beauty služby v centre Košíc.",
};

const services = [
  {
    emoji: "💄",
    name: "Make Up & Hair",
    color: "bg-brand/15 border-brand/30",
    from: "od 60 €",
    description: "Kompletný look na akúkoľvek príležitosť. Líčenie a vlasový styling v centre mesta.",
    details: [
      "Natural Makeup — jemný elegantný look bez umelých mihálnic (55 min)",
      "Glam Makeup — plný výrazný look s umelými mihálnicami (70 min)",
      "Bridal Trial — skúška makeupu s konzultáciou (70 min)",
      "Hair styling — od jemných vĺn po elegantné vyčesané vlasy (30–90 min)",
      "Konzultácia Vašej predstavy v cene",
    ],
  },
  {
    emoji: "💍",
    name: "Svadba",
    color: "bg-rose/10 border-rose/20",
    from: "od 65 €",
    description: "Svadobný deň si zaslúži dokonalú prípravu. V salóne alebo priamo na mieste.",
    details: [
      "Glam Makeup — luxusný dlhotrvajúci svadobný makeup (70 min, 70 €)",
      "Bridal Trial — individuálna skúška s návrhom looku (70 min, 65 €)",
      "Hair styling — na mieru (30–90 min, 30–60 €)",
      "Kompletná konzultácia a príprava pleti",
      "Výjazd zo salónu po individuálnej dohode · záloha 50%",
    ],
  },
  {
    emoji: "💪",
    name: "Face Gym",
    color: "bg-brand/15 border-brand/30",
    from: "od 35 €",
    description: "Tréning, ktorý odcvičíme za Vás. Pleť svieža, vypnutá a rozžiarená.",
    details: [
      "FACE UP REFRESH — masáž tváre, krku a dekoltu (45 min, 35 €)",
      "FACE UP INTENSE — intenzívna masáž so zameraním na problematické partie (60 min, 45 €)",
      "FACE UP RITUAL — kozmetika + čistenie + intenzívna masáž (90 min, 80 €)",
      "Zmierňovanie napätia, vrások a príznakov starnutia",
      "Pleť hydratovaná, vypnutá a rozjasnená",
    ],
  },
  {
    emoji: "✨",
    name: "Kozmetika",
    color: "bg-rose/10 border-rose/20",
    from: "od 40 €",
    description: "Algotherm ošetrenia s tými najlepšími produktami pre Vašu pleť.",
    details: [
      "Algotherm DISCOVERY — základné čistenie a ošetrenie pleti (45 min, 40 €)",
      "Algotherm INTENSE — komplexné čistenie s masážou tváre a dekoltu (60 min, 50 €)",
      "Hĺbková výživa a intenzívna hydratácia",
      "Relaxačná masáž tváre, krku a dekoltu",
    ],
  },
  {
    emoji: "👁️",
    name: "Obočie",
    color: "bg-brand/15 border-brand/30",
    from: "od 5 €",
    description: "Dokonalé obočie na 4–6 týždňov pre dámy aj pánov. Konzultácia tvaru v cene.",
    details: [
      "Úprava obočia — 13 €",
      "Úprava obočia a farbenie — 18 €",
      "Laminácia obočia — 25 €",
      "Laminácia obočia s farbením — 30 €",
      "Farbenie mihálnic — 10 € · Depilácia pery voskom — 5 €",
    ],
  },
  {
    emoji: "🎓",
    name: "Kurzy & Masterclass",
    color: "bg-rose/10 border-rose/20",
    from: "od 200 €",
    description: "Naučte sa líčiť seba alebo profesionálne techniky na modelke.",
    details: [
      "The Art of Natural Beauty — základný kurz, 3 hod (200 €)",
      "The Art of Glam — pokročilý kurz, 3 hod (200 €)",
      "10% zľava pre klientov Face Up! Studio",
      "Masterclass pre skupiny, teambuildingy a firmy — cena individuálne",
      "Všetky produkty a pomôcky zahrnuté",
    ],
  },
];

export default function SluzbyPage() {
  return (
    <>
      <section className="bg-brand pt-24 pb-14 lg:pt-32 lg:pb-18">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-display font-bold text-xs tracking-widest uppercase text-dark/50 mb-3">Ponuka 2026</p>
          <h1 className="font-display font-black text-dark text-[clamp(3rem,9vw,7rem)] leading-none mb-4">
            Naše<br />Služby
          </h1>
          <p className="font-display text-dark/60 text-base max-w-lg">
            Kompletné beauty služby v centre Košíc. Líčenie, vlasy, kozmetika, obočie, Face Gym a kurzy.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 flex flex-col gap-8">
          {services.map((s) => (
            <div key={s.name} className={`border-2 ${s.color} rounded-2xl overflow-hidden`}>
              <div className={`${s.color} px-7 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{s.emoji}</span>
                  <div>
                    <h2 className="font-display font-black text-dark text-2xl leading-tight">{s.name}</h2>
                    <p className="font-display text-dark/50 text-sm">{s.description}</p>
                  </div>
                </div>
                <span className="font-display font-black text-dark text-base shrink-0 bg-white/60 px-4 py-1.5 rounded-full">
                  {s.from}
                </span>
              </div>
              <div className="px-7 py-6">
                <ul className="space-y-3">
                  {s.details.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 font-display text-sm text-dark/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose mt-1.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3 mt-7">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-dark text-white font-display font-black text-sm rounded-full hover:bg-rose transition-colors"
                  >
                    Rezervovať
                  </a>
                  <Link
                    href="/cennik"
                    className="inline-flex items-center justify-center px-6 py-2.5 border-2 border-dark/20 text-dark font-display font-bold text-sm rounded-full hover:border-dark transition-colors"
                  >
                    Zobraziť cenník
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand py-16 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-display font-black text-dark text-3xl lg:text-4xl mb-4">
            Máte otázky? 💜
          </h2>
          <p className="font-display text-dark/60 text-sm mb-8">
            Radi poradíme s výberom služby.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-dark text-white font-display font-black text-sm rounded-full hover:bg-rose transition-colors"
          >
            Rezervovať termín
          </a>
        </div>
      </section>
    </>
  );
}
