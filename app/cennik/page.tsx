import type { Metadata } from "next";
import { BOOKING_URL, PHONE_HREF, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cenník – Face Up! Studio Košice",
  description:
    "Cenník služieb Face Up! Studio platný od 1.2.2026. Make up, Hair, Face Gym, Kozmetika, Obočie, Kurzy.",
};

const sections = [
  {
    id: "makeup-hair",
    title: "Make Up & Hair",
    emoji: "💄",
    color: "bg-brand/15 border-brand/30",
    accentBg: "bg-brand",
    note: "Cenník výjazdu zo salónu po individuálnej dohode. Termín platný po uhradení zálohy 50%.",
    items: [
      {
        name: "Natural Makeup",
        desc: "Jemný elegantný makeup bez aplikácie umelých mihálnic",
        duration: "55 min",
        price: "60 €",
      },
      {
        name: "Glam Makeup",
        desc: "Príležitostný makeup pre eventy, hostí, nevesty aj fotenie, vrátane umelých mihálnic",
        duration: "70 min",
        price: "70 €",
      },
      {
        name: "Bridal Trial",
        desc: "Individuálna skúška makeupu s konzultáciou a návrhom finálneho looku",
        duration: "70 min",
        price: "65 €",
      },
      {
        name: "Hair styling",
        desc: "Vlasový styling na mieru — od jemných vĺn po elegantné vyčesané vlasy",
        duration: "30–90 min",
        price: "30–60 €",
      },
    ],
  },
  {
    id: "face-gym",
    title: "Face Gym",
    emoji: "💪",
    color: "bg-rose/10 border-rose/20",
    accentBg: "bg-rose",
    note: "Face Gym nie je vhodný pre pleť so stredne ťažkým až ťažkým akné, aktívnymi zápalmi a tesne po estetických zákrokoch. Potrebné konzultovať.",
    items: [
      {
        name: "FACE UP REFRESH",
        desc: "Masáž tváre, krku a dekoltu. Dokonalý relax a uvoľnenie svalov tváre.",
        duration: "45 min",
        price: "35 €",
      },
      {
        name: "FACE UP INTENSE",
        desc: "Intenzívna masáž tváre, krku a dekoltu so zameraním na problematické partie",
        duration: "60 min",
        price: "45 €",
      },
      {
        name: "FACE UP RITUAL",
        desc: "Kombinácia kozmetického ošetrenia, čistenia pleti a intenzívnej masáže tváre, krku a dekoltu",
        duration: "90 min",
        price: "80 €",
      },
    ],
  },
  {
    id: "kozmetika",
    title: "Kozmetika",
    emoji: "✨",
    color: "bg-brand/15 border-brand/30",
    accentBg: "bg-brand",
    note: "Relax, čistenie pleti a účinné kozmetické ošetrenia s tými najlepšími produktami Algotherm.",
    items: [
      {
        name: "Algotherm DISCOVERY",
        desc: "Základné čistenie a ošetrenie pleti vyvinuté značkou Algotherm",
        duration: "45 min",
        price: "40 €",
      },
      {
        name: "Algotherm INTENSE",
        desc: "Komplexné intenzívne čistenie a ošetrenie pleti s masážou tváre, krku a dekoltu",
        duration: "60 min",
        price: "50 €",
      },
    ],
  },
  {
    id: "svadba",
    title: "Svadba",
    emoji: "💍",
    color: "bg-rose/10 border-rose/20",
    accentBg: "bg-rose",
    note: "Cenník výjazdu zo salónu po individuálnej dohode na vyžiadanie. Termín je platný po uhradení zálohy vo výške 50%.",
    items: [
      {
        name: "Glam Makeup",
        desc: "Luxusný dlhotrvajúci makeup s dôrazom na detail a preferencie nevesty",
        duration: "70 min",
        price: "70 €",
      },
      {
        name: "Bridal Trial",
        desc: "Individuálna skúška makeupu s konzultáciou a návrhom finálneho looku",
        duration: "70 min",
        price: "65 €",
      },
      {
        name: "Hair styling",
        desc: "Vlasový styling vytvorený na mieru od jemných vĺn po elegantné vyčesané vlasy",
        duration: "30–90 min",
        price: "30–60 €",
      },
    ],
  },
  {
    id: "obocie",
    title: "Obočie",
    emoji: "👁️",
    color: "bg-brand/15 border-brand/30",
    accentBg: "bg-brand",
    note: "Dokonalé obočie po dobu 4–6 týždňov pre dámy aj pánov. Konzultácia a zameranie vhodného tvaru v cene.",
    items: [
      { name: "Úprava obočia", desc: "", duration: "", price: "13 €" },
      { name: "Úprava obočia a farbenie", desc: "", duration: "", price: "18 €" },
      { name: "Laminácia obočia", desc: "", duration: "", price: "25 €" },
      { name: "Laminácia obočia s farbením", desc: "", duration: "", price: "30 €" },
      { name: "Farbenie mihálnic", desc: "", duration: "", price: "10 €" },
      { name: "Depilácia hornej pery voskom", desc: "", duration: "", price: "5 €" },
    ],
  },
];

const kurzy = [
  {
    name: "The Art of Natural Beauty",
    sub: "základný kurz · 3 hodiny",
    desc: "Základy líčenia a starostlivosti o pleť na každý deň, správne použitie produktov a ich aplikácia. Zvolenie vhodného líčenia pre akúkoľvek príležitosť.",
    price: "200 €",
  },
  {
    name: "The Art of Glam",
    sub: "pokročilý kurz · 3 hodiny",
    desc: "Pokročilý kurz zameraný na výrazný elegantný look s dôrazom na intenzitu, výdrž a eleganciu. Absolvovateľný až po základnom kurze.",
    price: "200 €",
  },
];

export default function CennikPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-display font-bold text-xs tracking-widest uppercase text-dark/50 mb-3">
            Platný od 1.2.2026
          </p>
          <h1 className="font-display font-black text-dark text-[clamp(3rem,9vw,7rem)] leading-none mb-4">
            cenník<br />
            <span className="font-light tracking-widest text-dark/50 text-[clamp(1rem,3vw,2rem)]">
              služieb
            </span>
          </h1>
          <p className="font-display text-dark/60 text-base max-w-lg leading-relaxed">
            Všetky ceny sú konečné. Pre rezerváciu termínu a viac informácií nás kontaktujte telefonicky alebo cez rezervačný systém.
          </p>
        </div>
      </section>

      {/* Price sections */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-5 lg:px-8 flex flex-col gap-10">
          {sections.map((sec) => (
            <div key={sec.id} className={`border-2 ${sec.color} rounded-2xl overflow-hidden`}>
              {/* Section header */}
              <div className={`${sec.color} px-7 py-5 flex items-center gap-3`}>
                <span className="text-2xl">{sec.emoji}</span>
                <h2 className="font-display font-black text-dark text-2xl">{sec.title}</h2>
              </div>

              {/* Items */}
              <div className="divide-y divide-dark/5">
                {sec.items.map((item, i) => (
                  <div key={i} className="px-7 py-4 flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="font-display font-bold text-dark text-base leading-snug">{item.name}</p>
                      {item.desc && (
                        <p className="font-display text-dark/50 text-sm leading-relaxed mt-0.5">{item.desc}</p>
                      )}
                      {item.duration && (
                        <p className="font-display text-dark/35 text-xs mt-1">{item.duration}</p>
                      )}
                    </div>
                    <span className="font-display font-black text-dark text-lg shrink-0">{item.price}</span>
                  </div>
                ))}
              </div>

              {/* Note */}
              {sec.note && (
                <div className="px-7 pb-5">
                  <p className="font-display text-dark/40 text-xs leading-relaxed border-t border-dark/5 pt-4">
                    * {sec.note}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Kurzy */}
          <div className="border-2 border-dark/15 rounded-2xl overflow-hidden bg-dark">
            <div className="px-7 py-5 flex items-center gap-3">
              <span className="text-2xl">🎓</span>
              <h2 className="font-display font-black text-white text-2xl">Kurz sebalíčenia</h2>
            </div>
            <div className="divide-y divide-white/10">
              {kurzy.map((k, i) => (
                <div key={i} className="px-7 py-5 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="font-display font-bold text-white text-base">{k.name}</p>
                    <p className="font-display text-white/40 text-xs mb-2">{k.sub}</p>
                    <p className="font-display text-white/60 text-sm leading-relaxed">{k.desc}</p>
                  </div>
                  <span className="font-display font-black text-brand text-xl shrink-0">{k.price}</span>
                </div>
              ))}
            </div>
            <div className="px-7 pb-6">
              <p className="font-display text-white/30 text-xs border-t border-white/10 pt-4">
                * Pre klientov Face Up! Studio 10% zľava na kurzy. The Art of Glam je možné absolvovať až po základnom kurze.
              </p>
            </div>
          </div>

          {/* Masterclass */}
          <div className="border-2 border-rose/20 rounded-2xl overflow-hidden">
            <div className="bg-rose/10 px-7 py-5 flex items-center gap-3">
              <span className="text-2xl">💅</span>
              <h2 className="font-display font-black text-dark text-2xl">Masterclass</h2>
            </div>
            <div className="px-7 py-6">
              <p className="font-display text-dark/60 text-base leading-relaxed mb-4">
                Tipy, triky a techniky správnej aplikácie make-upu na modelke. Vhodný pre skupiny, teambuildingy a firemné akcie.
              </p>
              <p className="font-display font-bold text-dark text-sm">
                💌 Cenová ponuka v správe alebo na tel. čísle{" "}
                <a href={PHONE_HREF} className="text-rose hover:underline">{PHONE}</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand py-16 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-display font-black text-dark text-3xl lg:text-4xl mb-4">
            Rezervujte si termín online 💜
          </h2>
          <p className="font-display text-dark/60 text-sm mb-8">
            Rýchla a jednoduchá rezervácia cez náš booking systém.
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
