import type { Metadata } from "next";
import { BOOKING_URL, PHONE, PHONE_HREF, ADDRESS, INSTAGRAM } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt – Face Up! Studio Košice",
  description:
    "Rezervujte si termín online alebo nás kontaktujte. Zvonárska 13, Košice. Tel: 0948 422 080.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-ink pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="font-body text-xs tracking-widest uppercase text-lavender/70 mb-6">
            Sme tu pre Vás
          </p>
          <h1 className="font-heading text-cream text-[clamp(3rem,8vw,6rem)] leading-none mb-6">
            Kontakt
          </h1>
          <p className="font-body text-cream/50 text-base max-w-xl leading-relaxed">
            Rezervujte si termín online alebo nás kontaktujte priamo. Radi Vám
            poradíme s výberom služby a zodpovieme všetky otázky.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              <div>
                <h2 className="font-heading text-ink text-3xl lg:text-4xl mb-8">
                  Nájdete nás tu
                </h2>

                <div className="flex flex-col gap-6">
                  {/* Address */}
                  <div className="flex items-start gap-4 p-5 border border-ink/10 hover:border-lavender/40 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-lavender/15 flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-lavender"
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
                    </div>
                    <div>
                      <p className="font-body text-[10px] tracking-widest uppercase text-stone mb-1">
                        Adresa
                      </p>
                      <a
                        href="https://maps.google.com/?q=Zvonárska+13,+Košice"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading text-ink text-xl group-hover:text-lavender transition-colors"
                      >
                        {ADDRESS}
                      </a>
                      <p className="font-body text-xs text-stone mt-1">
                        Centrum mesta, Košice
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-5 border border-ink/10 hover:border-lavender/40 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-lavender/15 flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-lavender"
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
                    </div>
                    <div>
                      <p className="font-body text-[10px] tracking-widest uppercase text-stone mb-1">
                        Telefón
                      </p>
                      <a
                        href={PHONE_HREF}
                        className="font-heading text-ink text-xl group-hover:text-lavender transition-colors"
                      >
                        {PHONE}
                      </a>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4 p-5 border border-ink/10 hover:border-lavender/40 transition-colors group">
                    <div className="w-10 h-10 rounded-full bg-lavender/15 flex items-center justify-center shrink-0">
                      <svg
                        className="w-4 h-4 text-lavender"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-body text-[10px] tracking-widest uppercase text-stone mb-1">
                        Instagram
                      </p>
                      <a
                        href={INSTAGRAM}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading text-ink text-xl group-hover:text-lavender transition-colors"
                      >
                        @_faceupstudio_
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening hours */}
              <div className="p-8 bg-ink text-cream">
                <h3 className="font-heading text-cream text-2xl mb-6">
                  Otváracie hodiny
                </h3>
                <div className="space-y-3 font-body text-sm">
                  {[
                    { day: "Pondelok – Piatok", time: "9:00 – 19:00" },
                    { day: "Sobota", time: "9:00 – 16:00" },
                    { day: "Nedeľa", time: "Na objednávku" },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between text-cream/70">
                      <span>{day}</span>
                      <span className="text-lavender">{time}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-[10px] text-cream/30 font-body">
                  * Otváracie hodiny sa môžu líšiť. Odporúčame vopred rezervovať.
                </p>
              </div>
            </div>

            {/* Booking & Map */}
            <div className="lg:col-span-3 flex flex-col gap-8">
              {/* Online booking */}
              <div className="p-10 lg:p-12 bg-lavender/10 border border-lavender/20 flex flex-col gap-6">
                <div>
                  <p className="font-body text-[10px] tracking-widest uppercase text-lavender mb-3">
                    Najrýchlejšia možnosť
                  </p>
                  <h2 className="font-heading text-ink text-3xl lg:text-4xl">
                    Rezervovať online
                  </h2>
                </div>
                <p className="font-body text-ink/60 text-sm leading-relaxed">
                  Rezervujte si termín jednoducho online cez náš booking systém.
                  Vyberte si službu, dátum a čas — potvrdenie dostanete
                  okamžite.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start inline-flex items-center gap-3 px-10 py-4 bg-ink text-cream font-body text-xs tracking-widest uppercase hover:bg-lavender hover:text-ink transition-all duration-300"
                >
                  Otvoriť rezervačný systém
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
                      d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </a>
              </div>

              {/* Map embed placeholder */}
              <div className="relative overflow-hidden bg-sand border border-ink/10" style={{ height: "380px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.7!2d21.2609!3d48.7181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee0b9b1c2f52b%3A0x0!2sZvon%C3%A1rska+13%2C+Ko%C5%A1ice!5e0!3m2!1ssk!2ssk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) contrast(1.1)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Face Up! Studio — Zvonárska 13, Košice"
                />
                <div className="absolute bottom-4 right-4">
                  <a
                    href="https://maps.google.com/?q=Zvonárska+13,+Košice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-ink text-cream font-body text-[10px] tracking-widest uppercase px-4 py-2 hover:bg-lavender hover:text-ink transition-all duration-200"
                  >
                    Otvoriť v Google Maps
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick contact note */}
              <div className="p-6 border border-ink/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blush/15 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-blush"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                </div>
                <p className="font-body text-sm text-ink/60">
                  Radi zodpovieme Vaše otázky na Instagrame{" "}
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blush hover:underline"
                  >
                    @_faceupstudio_
                  </a>{" "}
                  alebo telefonicky na{" "}
                  <a href={PHONE_HREF} className="text-blush hover:underline">
                    {PHONE}
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
