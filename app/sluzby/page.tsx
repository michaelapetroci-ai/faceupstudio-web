import type { Metadata } from "next";
import { BOOKING_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Služby – Face Up! Studio Košice",
  description:
    "Make Up & Hair, svadobné líčenie, Face Gym, kozmetika, obočie, kurzy. Kompletné beauty služby v centre Košíc.",
};

const services = [
  {
    id: "01",
    name: "Make Up & Hair",
    sk: "Líčenie & Vlasový styling",
    color: "bg-lavender/10 border-lavender/30",
    accentColor: "text-lavender",
    description:
      "Líčenie a vlasový styling na akúkoľvek príležitosť. Dokonalá príprava na Váš najbližší event.",
    details: [
      "Konzultácia Vašej predstavy a požiadaviek",
      "Príprava a ošetrenie pleti pred líčením",
      "Profesionálne denné, večerné alebo spoločenské líčenie",
      "Vlasový styling — fúkanie, vlny, updo",
      "Priamo v centre mesta na Zvonárskej 13",
    ],
  },
  {
    id: "02",
    name: "Wedding",
    sk: "Svadobné líčenie",
    color: "bg-blush/10 border-blush/30",
    accentColor: "text-blush",
    description:
      "Svadobný deň je pre nevestu jeden z najdôležitejších. Nezaobíde sa bez dôkladnej prípravy.",
    details: [
      "Úvodná konzultácia a skúška líčenia",
      "Kozmetické ošetrenie pred svadbou",
      "Profesionálna úprava obočia",
      "Dokonalý svadobný make up & hair",
      "Služby v salóne alebo na mieste konania svadby",
    ],
  },
  {
    id: "03",
    name: "Face Gym",
    sk: "Face Gym",
    color: "bg-champagne/10 border-champagne/30",
    accentColor: "text-champagne",
    description:
      "Tréning, ktorý odcvičíme za Vás. Špeciálne masážne techniky pre omladenejšiu a rozžiarenú pleť.",
    details: [
      "Masáž svalov tváre, krku a dekoltu",
      "Zmierňovanie napätia a bolestí hlavy",
      "Redukcia mimických vrások a príznakov starnutia",
      "Pleť svieža, vypnutá a rozžiarená",
      "Relaxačný a omladzujúci efekt",
    ],
  },
  {
    id: "04",
    name: "Skincare",
    sk: "Kozmetika",
    color: "bg-lavender/10 border-lavender/30",
    accentColor: "text-lavender",
    description:
      "Účinné kozmetické ošetrenia s tými najlepšími produktami špeciálne pre Vašu pleť.",
    details: [
      "Čistenie pleti — hĺbkové a šetrné",
      "Hĺbková výživa a intenzívna hydratácia",
      "Relaxačná masáž tváre, krku a dekoltu",
      "Výber produktov podľa typu pleti",
      "Viditeľné výsledky po prvom ošetrení",
    ],
  },
  {
    id: "05",
    name: "Brows",
    sk: "Obočie",
    color: "bg-blush/10 border-blush/30",
    accentColor: "text-blush",
    description:
      "Dokonalé obočie po dobu 4–6 týždňov. Konzultácia tvaru, úprava, farbenie aj laminácia.",
    details: [
      "Konzultácia a zameranie vhodného tvaru pre Váš typ tváre",
      "Úprava pinzetou alebo voskom",
      "Farbenie obočia",
      "Laminácia obočia",
      "Dlhotrvajúci efekt 4–6 týždňov",
    ],
  },
  {
    id: "06",
    name: "Voucher",
    sk: "Darčekový poukaz",
    color: "bg-champagne/10 border-champagne/30",
    accentColor: "text-champagne",
    description:
      "Darujte krásny zážitok. Poukaz na akúkoľvek službu alebo v ľubovoľnej hodnote.",
    details: [
      "Poukaz na konkrétnu službu alebo v hodnote",
      "Ideálny darček pre každú príležitosť",
      "Platný po dohodnutú dobu",
      "Možnosť osobného vyzdvihnutia alebo zaslania",
      "Dostupné od 200 € a viac",
    ],
  },
];

export default function SluzbyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-body text-xs tracking-widest uppercase text-lavender/70 mb-6">
            Ponuka 2026
          </p>
          <h1 className="font-heading text-cream text-[clamp(3rem,8vw,6rem)] leading-none mb-6">
            Naše Služby
          </h1>
          <p className="font-body text-cream/50 text-base max-w-xl leading-relaxed">
            Kompletné beauty služby v centre Košíc. Od líčenia a vlasového
            stylingu až po kozmetické ošetrenia, úpravu obočia a kurzy.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {services.map((s, i) => (
              <div
                key={s.id}
                className={`flex flex-col lg:flex-row gap-0 border ${s.color} ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Number + Name */}
                <div className="lg:w-2/5 p-10 lg:p-14 flex flex-col justify-between border-r border-ink/10">
                  <span
                    className={`font-body text-xs tracking-widest ${s.accentColor} mb-6 block`}
                  >
                    {s.id}
                  </span>
                  <div>
                    <h2 className="font-heading text-4xl lg:text-5xl text-ink leading-tight mb-2">
                      {s.sk}
                    </h2>
                    <p className="font-body text-xs tracking-widest uppercase text-stone">
                      {s.name}
                    </p>
                  </div>
                  <p className="font-body text-ink/60 text-sm leading-relaxed mt-6">
                    {s.description}
                  </p>
                </div>

                {/* Details */}
                <div className="lg:w-3/5 p-10 lg:p-14 flex flex-col justify-center">
                  <p className="font-body text-xs tracking-widest uppercase text-stone mb-6">
                    Čo zahŕňa
                  </p>
                  <ul className="space-y-4">
                    {s.details.map((d, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${s.accentColor.replace("text-", "bg-")} mt-2 shrink-0`}
                        />
                        <span className="font-body text-sm text-ink/70 leading-relaxed">
                          {d}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-10 self-start inline-flex items-center gap-3 px-8 py-3.5 border ${s.color} ${s.accentColor} font-body text-xs tracking-widest uppercase hover:bg-ink hover:text-cream hover:border-ink transition-all duration-300`}
                  >
                    Rezervovať
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="font-heading italic text-cream text-4xl lg:text-5xl mb-6">
            Máte otázky?
          </h2>
          <p className="font-body text-cream/50 text-sm mb-10">
            Kontaktujte nás a radi Vám poradíme s výberom služby.
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-lavender text-ink font-body text-xs tracking-widest uppercase hover:bg-cream transition-colors duration-300"
          >
            Rezervovať online
          </a>
        </div>
      </section>
    </>
  );
}
