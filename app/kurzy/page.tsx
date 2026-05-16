import type { Metadata } from "next";
import { BOOKING_URL, PHONE_HREF, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kurzy & Masterclass – Face Up! Studio Košice",
  description:
    "Kurz sebalíčenia a profesionálny masterclass. Naučte sa beauty triky od profesionálky. Vhodné pre jednotlivcov aj firemné tímy. Košice.",
};

export default function KurzyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-body text-xs tracking-widest uppercase text-lavender/70 mb-6">
            Vzdelávanie
          </p>
          <h1 className="font-heading text-cream text-[clamp(3rem,8vw,6rem)] leading-none mb-6">
            Kurzy &<br />
            <span className="italic">Masterclass</span>
          </h1>
          <p className="font-body text-cream/50 text-base max-w-xl leading-relaxed">
            Odovzdám Vám moje nadobudnuté skúsenosti zo sveta beauty a
            make-upu. Pre každého — od absolútnych začiatočníkov až po
            profesionálne skupiny.
          </p>
        </div>
      </section>

      {/* Kurz sebalíčenia */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-ink/10">
            {/* Info */}
            <div className="bg-ink p-10 lg:p-16 flex flex-col gap-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-lavender/20 text-lavender text-[10px] tracking-widest uppercase font-body px-3 py-1.5 mb-6">
                  Pre každého
                </div>
                <h2 className="font-heading text-cream text-4xl lg:text-5xl mb-2">
                  Kurz sebalíčenia
                </h2>
                <p className="font-body text-xs tracking-widest uppercase text-cream/30">
                  Self-makeup course
                </p>
              </div>

              <p className="font-body text-cream/60 text-base leading-relaxed">
                Teoretické a praktické znalosti zo sveta beauty a make-upu.
                Naučíme sa nalíčiť na akúkoľvek príležitosť a preberieme si
                zásady starostlivosti o pleť, ktoré sú základom dokonalého a
                dlhotrvajúceho líčenia.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "Určený pre kohokoľvek a každú vekovú kategóriu",
                  "Teória beauty & make-up sveta",
                  "Prax — nalíčenie seba samej na rôzne príležitosti",
                  "Zásady starostlivosti o pleť ako základ líčenia",
                  "Všetky potrebné produkty a pomôcky sú zahrnuté",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-lavender mt-2 shrink-0" />
                    <span className="font-body text-sm text-cream/60 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start inline-flex items-center gap-3 px-8 py-4 border border-lavender text-lavender font-body text-xs tracking-widest uppercase hover:bg-lavender hover:text-ink transition-all duration-300"
              >
                Rezervovať kurz
              </a>
            </div>

            {/* Visual */}
            <div className="bg-lavender/10 p-10 lg:p-16 flex flex-col justify-center gap-8 border-l border-ink/10">
              <div className="font-heading italic text-ink text-5xl lg:text-6xl leading-tight">
                Hello
                <br />
                <span className="text-lavender">gorgeous</span>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-cream border border-ink/10">
                  <p className="font-body text-xs tracking-widest uppercase text-stone mb-2">
                    Čo sa naučíte
                  </p>
                  <ul className="font-body text-sm text-ink/70 space-y-2 mt-3">
                    <li>✦ Denné, večerné & spoločenské líčenie</li>
                    <li>✦ Správna aplikácia základov a púdrov</li>
                    <li>✦ Techniky pre oči a pery</li>
                    <li>✦ Starostlivosť o pleť pred líčením</li>
                  </ul>
                </div>
                <div className="p-6 bg-cream border border-ink/10">
                  <p className="font-body text-xs tracking-widest uppercase text-stone mb-3">
                    Vhodné pre
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Začiatočníčky",
                      "Pokročilé",
                      "Všetky vekové kategórie",
                      "Darček",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[10px] tracking-wider uppercase px-3 py-1 bg-lavender/20 text-lavender"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masterclass */}
      <section className="py-20 lg:py-28 bg-sand">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-ink/10">
            {/* Visual */}
            <div className="bg-blush/10 p-10 lg:p-16 flex flex-col justify-center gap-8 order-2 lg:order-1">
              <div className="font-heading italic text-ink text-5xl lg:text-6xl leading-tight">
                Hello
                <br />
                <span className="text-blush">masterclass</span>
              </div>
              <div className="space-y-6">
                <div className="p-6 bg-cream border border-ink/10">
                  <p className="font-body text-xs tracking-widest uppercase text-stone mb-2">
                    Čo sa naučíte
                  </p>
                  <ul className="font-body text-sm text-ink/70 space-y-2 mt-3">
                    <li>✦ Profesionálne techniky aplikácie make-upu</li>
                    <li>✦ Práca na modelke — nie na sebe</li>
                    <li>✦ Tipy a triky z praxe</li>
                    <li>✦ Starostlivosť o pleť klienta</li>
                  </ul>
                </div>
                <div className="p-6 bg-cream border border-ink/10">
                  <p className="font-body text-xs tracking-widest uppercase text-stone mb-3">
                    Ideálne pre
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Skupiny",
                      "Teambuilding",
                      "Firemné akcie",
                      "Záujemcov o beauty",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-[10px] tracking-wider uppercase px-3 py-1 bg-blush/20 text-blush"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="bg-ink p-10 lg:p-16 flex flex-col gap-8 order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center gap-2 bg-blush/20 text-blush text-[10px] tracking-widest uppercase font-body px-3 py-1.5 mb-6">
                  Pre skupiny & firmy
                </div>
                <h2 className="font-heading text-cream text-4xl lg:text-5xl mb-2">
                  Masterclass
                </h2>
                <p className="font-body text-xs tracking-widest uppercase text-cream/30">
                  Professional makeup class
                </p>
              </div>

              <p className="font-body text-cream/60 text-base leading-relaxed">
                Počas masterclassu Vám odovzdám moje nadobudnuté skúsenosti z
                oblasti make-upu a starostlivosti o pleť. Tipy, triky a
                techniky správnej aplikácie make-upu na modelke. Vhodný pre
                rôzne skupiny, teambuildingy, firemné akcie alebo kohokoľvek,
                koho zaujíma svet líčenia.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "Skupiny, teambuildingy a firemné akcie",
                  "Práca na profesionálnej modelke",
                  "Techniky správnej aplikácie make-upu",
                  "Tipy a triky z praxe profesionálky",
                  "Interaktívna forma — otázky vítané",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blush mt-2 shrink-0" />
                    <span className="font-body text-sm text-cream/60 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-blush text-blush font-body text-xs tracking-widest uppercase hover:bg-blush hover:text-ink transition-all duration-300"
                >
                  Rezervovať masterclass
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-cream/20 text-cream/60 font-body text-xs tracking-widest uppercase hover:border-cream hover:text-cream transition-all duration-300"
                >
                  {PHONE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="font-heading text-ink text-4xl lg:text-5xl mb-12">
            Často kladené otázky
          </h2>
          <div className="divide-y divide-ink/10">
            {[
              {
                q: "Potrebujem nejaké predchádzajúce skúsenosti?",
                a: "Nie. Kurz sebalíčenia je vhodný pre úplných začiatočníkov aj pokročilé. Prispôsobíme obsah Vašim potrebám.",
              },
              {
                q: "Musím si priniesť vlastné produkty?",
                a: "Nie, všetky potrebné produkty a pomôcky sú zahrnuté v cene kurzu.",
              },
              {
                q: "Môžem si objednať kurz ako darček?",
                a: "Áno! Darčekové poukazy sú dostupné. Kontaktujte nás a pripravíme krásny darček.",
              },
              {
                q: "Pre koľko ľudí je masterclass?",
                a: "Masterclass je ideálny pre skupiny od 5 osôb. Cena závisí od počtu účastníkov — kontaktujte nás pre individuálnu ponuku.",
              },
              {
                q: "Kde sa kurzy konajú?",
                a: "V našom štúdiu na Zvonárskej 13 v Košiciach. Pre väčšie skupiny vieme prísť aj k Vám.",
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="py-6">
                <p className="font-heading text-ink text-xl mb-3">{q}</p>
                <p className="font-body text-ink/60 text-sm leading-relaxed">
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
