import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, INSTAGRAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Portfólio – Face Up! Studio Košice",
  description: "Pozrite si naše práce — svadobné líčenie, večerné looky, denné make-upy, editorálne fotenia a vlasový styling.",
};

const items = [
  { label: "Svadobné", cat: "Svadba", gradient: "from-[#1c1220] via-[#2a1830] to-[#1c1220]" },
  { label: "Glam Makeup", cat: "Večerné", gradient: "from-[#180818] via-[#280828] to-[#180818]" },
  { label: "Natural", cat: "Denné", gradient: "from-[#1a1610] via-[#262018] to-[#1a1610]" },
  { label: "Editorál", cat: "Fashion", gradient: "from-[#0e161c] via-[#16222e] to-[#0e161c]" },
  { label: "Hair", cat: "Vlasy", gradient: "from-[#1c1210] via-[#2e1c18] to-[#1c1210]" },
  { label: "Bridal Trial", cat: "Svadba", gradient: "from-[#1a1020] via-[#281630] to-[#1a1020]" },
  { label: "Prírodné", cat: "Denné", gradient: "from-[#101a14] via-[#182820] to-[#101a14]" },
  { label: "Smoky", cat: "Večerné", gradient: "from-[#100e14] via-[#181420] to-[#100e14]" },
  { label: "Face Gym", cat: "Starostlivosť", gradient: "from-[#14100e] via-[#20180e] to-[#14100e]" },
  { label: "Updo", cat: "Vlasy", gradient: "from-[#201410] via-[#301e18] to-[#201410]" },
  { label: "Gala", cat: "Večerné", gradient: "from-[#12101c] via-[#1e1a2e] to-[#12101c]" },
  { label: "Obočie", cat: "Brows", gradient: "from-[#181218] via-[#261a24] to-[#181218]" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-brand pt-24 pb-14 lg:pt-32 lg:pb-18">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-display font-bold text-xs tracking-widest uppercase text-dark/50 mb-3">Naša práca</p>
          <h1 className="font-display font-black text-dark text-[clamp(3rem,9vw,7rem)] leading-none mb-4">
            Portfólio
          </h1>
          <p className="font-display text-dark/60 text-base max-w-lg">
            Každý klient je jedinečný. Pozrite si výber z našich prác — od jemných denných lookov po dramatické večerné transformácie.
          </p>
        </div>
      </section>

      <section className="py-4 bg-blush border-b border-brand/20">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-display text-xs text-dark/50 text-center">
            Ďalšie fotky a videá nájdete na{" "}
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="font-bold text-rose hover:underline">
              @_faceupstudio_
            </a>
          </p>
        </div>
      </section>

      <section className="py-10 lg:py-14 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {items.map((item) => (
              <div
                key={item.label}
                className={`group relative aspect-[3/4] bg-gradient-to-br ${item.gradient} rounded-xl overflow-hidden cursor-pointer`}
              >
                <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/15 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                  <span className="font-display font-black text-white text-sm group-hover:text-brand transition-colors">{item.label}</span>
                  <span className="font-display text-white/40 text-[9px] font-semibold uppercase">{item.cat}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand py-16 text-center">
        <div className="mx-auto max-w-2xl px-5">
          <h2 className="font-display font-black text-dark text-3xl lg:text-4xl mb-4">
            Sledujte nás na Instagrame 💜
          </h2>
          <p className="font-display text-dark/60 text-sm mb-8">Každý deň nové looky, zákulisie a beauty tipy.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-dark text-dark font-display font-black text-sm rounded-full hover:bg-dark hover:text-white transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
              </svg>
              @_faceupstudio_
            </a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-dark text-white font-display font-black text-sm rounded-full hover:bg-rose transition-colors">
              Rezervovať termín
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
