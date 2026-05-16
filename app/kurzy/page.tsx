import type { Metadata } from "next";
import { BOOKING_URL, PHONE_HREF, PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kurzy & Masterclass – Face Up! Studio Košice",
  description: "Kurz sebalíčenia The Art of Natural Beauty a The Art of Glam. Masterclass pre skupiny a firmy. Košice.",
};

export default function KurzyPage() {
  return (
    <>
      <section className="bg-brand pt-24 pb-14 lg:pt-32 lg:pb-18">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-display font-bold text-xs tracking-widest uppercase text-dark/50 mb-3">Vzdelávanie</p>
          <h1 className="font-display font-black text-dark text-[clamp(3rem,9vw,7rem)] leading-none mb-4">
            Kurzy &<br />
            <span className="italic font-black">Masterclass</span>
          </h1>
          <p className="font-display text-dark/60 text-base max-w-lg">
            Naučte sa líčiť seba alebo profesionálne techniky na modelke. Pre každého — od absolútnych začiatočníkov po skupiny a firmy.
          </p>
        </div>
      </section>

      {/* Kurzy */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <h2 className="font-display font-black text-dark text-3xl mb-8">Kurz sebalíčenia 🎓</h2>
          <p className="font-display text-dark/60 text-base mb-10 max-w-xl leading-relaxed">
            Teoretické a praktické znalosti zo sveta beauty a make-upu. Vytvorte si svoj signature look pre akúkoľvek príležitosť. Všetky produkty a pomôcky zahrnuté.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {[
              {
                name: "The Art of Natural Beauty",
                level: "základný kurz",
                duration: "3 hodiny",
                price: "200 €",
                desc: "Základy líčenia a starostlivosti o pleť na každý deň. Správne použitie produktov a ich aplikácia. Zvolenie vhodného líčenia pre akúkoľvek príležitosť.",
                points: [
                  "Starostlivosť o pleť ako základ líčenia",
                  "Správna technika nanášania základov",
                  "Prírodný denný look",
                  "Zvolenie produktov pre Váš typ pleti",
                ],
                available: true,
              },
              {
                name: "The Art of Glam",
                level: "pokročilý kurz",
                duration: "3 hodiny",
                price: "200 €",
                desc: "Pokročilý kurz zameraný na výrazný elegantný look s dôrazom na intenzitu, výdrž a eleganciu. Absolvovateľný až po základnom kurze.",
                points: [
                  "Výrazný večerný a spoločenský look",
                  "Pokročilé techniky tieňovania",
                  "Dlhá výdrž líčenia",
                  "Glamour & elegancia",
                ],
                available: true,
              },
            ].map((k) => (
              <div key={k.name} className="bg-dark rounded-2xl p-8 flex flex-col gap-5">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 bg-brand/20 text-brand text-xs font-black rounded-full">
                      {k.level} · {k.duration}
                    </span>
                    <span className="font-display font-black text-brand text-2xl">{k.price}</span>
                  </div>
                  <h3 className="font-display font-black text-white text-xl">{k.name}</h3>
                </div>
                <p className="font-display text-white/60 text-sm leading-relaxed">{k.desc}</p>
                <ul className="space-y-2">
                  {k.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 font-display text-sm text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                  className="self-start inline-flex items-center px-6 py-2.5 bg-brand text-dark font-display font-black text-sm rounded-full hover:bg-white transition-colors">
                  Rezervovať
                </a>
              </div>
            ))}
          </div>
          <p className="font-display text-dark/40 text-xs text-center">
            * Pre klientov Face Up! Studio 10% zľava na kurzy. The Art of Glam je možné absolvovať až po základnom kurze.
          </p>
        </div>
      </section>

      {/* Masterclass */}
      <section className="py-14 lg:py-20 bg-blush">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="font-display font-bold text-xs tracking-widest uppercase text-rose mb-3">Pre skupiny & firmy</p>
              <h2 className="font-display font-black text-dark text-4xl lg:text-5xl mb-5">
                Masterclass 💅
              </h2>
              <p className="font-display text-dark/60 text-base leading-relaxed mb-6">
                Tipy, triky a techniky správnej aplikácie make-upu priamo na modelke. Odovzdám Vám moje nadobudnuté skúsenosti z oblasti make-upu a starostlivosti o pleť.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Skupiny, teambuildingy, firemné akcie",
                  "Práca na modelke — nie na sebe",
                  "Profesionálne techniky z praxe",
                  "Interaktívna forma s priestorom na otázky",
                  "Cenová ponuka individuálne",
                ].map((i) => (
                  <li key={i} className="flex items-center gap-2.5 font-display text-sm text-dark/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-3 bg-dark text-white font-display font-black text-sm rounded-full hover:bg-rose transition-colors">
                  Unboxing termínu
                </a>
                <a href={PHONE_HREF}
                  className="inline-flex items-center justify-center px-7 py-3 border-2 border-dark/20 text-dark font-display font-bold text-sm rounded-full hover:border-dark transition-colors">
                  {PHONE}
                </a>
              </div>
            </div>
            {/* Info box */}
            <div className="bg-white rounded-2xl p-8 border-2 border-brand/20">
              <p className="font-display font-black text-dark text-lg mb-5">Čo zahŕňa masterclass</p>
              <ul className="space-y-4">
                {[
                  { icon: "✨", text: "Profesionálne techniky aplikácie make-upu" },
                  { icon: "👩", text: "Práca na modelke" },
                  { icon: "💡", text: "Tipy a triky z praxe" },
                  { icon: "🎓", text: "Teória aj prax" },
                  { icon: "💬", text: "Priestor na otázky" },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3 font-display text-sm text-dark/70">
                    <span className="text-base shrink-0">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-blush rounded-xl">
                <p className="font-display font-bold text-dark text-sm">💌 Cenová ponuka</p>
                <p className="font-display text-dark/50 text-xs mt-1">
                  Kontaktujte nás pre individuálnu cenovú ponuku na{" "}
                  <a href={PHONE_HREF} className="text-rose hover:underline">{PHONE}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
