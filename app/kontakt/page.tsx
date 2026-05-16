import type { Metadata } from "next";
import { BOOKING_URL, PHONE, PHONE_HREF, ADDRESS, ZIP, INSTAGRAM, EMAIL, OWNER, COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt – Face Up! Studio Košice",
  description: "Rezervujte si termín online alebo nás kontaktujte. Zvonárska 13, Košice. Tel: 0948 422 080.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="bg-brand pt-24 pb-14 lg:pt-32 lg:pb-18">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="font-display font-bold text-xs tracking-widest uppercase text-dark/50 mb-3">Sme tu pre Vás</p>
          <h1 className="font-display font-black text-dark text-[clamp(3rem,9vw,7rem)] leading-none mb-4">
            Kontakt
          </h1>
          <p className="font-display text-dark/60 text-base max-w-lg">
            Rezervujte si termín online alebo nás kontaktujte priamo — telefonicky, emailom alebo cez Instagram.
          </p>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

            {/* Contact info */}
            <div className="lg:col-span-2 flex flex-col gap-5">
              <h2 className="font-display font-black text-dark text-2xl">Nájdete nás tu</h2>

              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  ),
                  label: "Adresa",
                  value: ADDRESS,
                  sub: ZIP,
                  href: `https://maps.google.com/?q=Zvonárska+13,+Košice`,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.338c0-1.16.935-2.11 2.088-2.128l.116-.001c1.005 0 1.88.668 2.125 1.642l.567 2.255a2.141 2.141 0 0 1-.761 2.24l-.594.446a.75.75 0 0 0-.25.872 11.25 11.25 0 0 0 5.026 5.025.75.75 0 0 0 .872-.25l.446-.594a2.141 2.141 0 0 1 2.24-.761l2.256.567a2.14 2.14 0 0 1 1.642 2.125v.116a2.133 2.133 0 0 1-2.128 2.088H17.25C9.097 21.75 2.25 14.903 2.25 6.338Z" />
                    </svg>
                  ),
                  label: "Telefón",
                  value: PHONE,
                  href: PHONE_HREF,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  ),
                  label: "Email",
                  value: EMAIL,
                  href: `mailto:${EMAIL}`,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                    </svg>
                  ),
                  label: "Instagram",
                  value: "@_faceupstudio_",
                  href: INSTAGRAM,
                  external: true,
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-5 border-2 border-brand/20 rounded-2xl hover:border-brand hover:bg-blush transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-brand/20 flex items-center justify-center shrink-0 text-rose group-hover:bg-brand group-hover:text-dark transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-display font-bold text-xs text-dark/40 uppercase tracking-wider mb-0.5">{item.label}</p>
                    <p className="font-display font-black text-dark text-base leading-snug">{item.value}</p>
                    {item.sub && <p className="font-display text-dark/40 text-xs">{item.sub}</p>}
                  </div>
                </a>
              ))}

              {/* Hours */}
              <div className="bg-dark rounded-2xl p-6">
                <p className="font-display font-black text-white text-base mb-4">Otváracie hodiny</p>
                <div className="space-y-2.5">
                  {[
                    { day: "Pondelok – Piatok", time: "9:00 – 19:00" },
                    { day: "Sobota", time: "9:00 – 16:00" },
                    { day: "Nedeľa", time: "Na objednávku" },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between font-display text-sm">
                      <span className="text-white/60">{day}</span>
                      <span className="font-bold text-brand">{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking + Map */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {/* Online booking */}
              <div className="bg-brand rounded-2xl p-8 lg:p-10">
                <p className="font-display font-bold text-xs tracking-widest uppercase text-dark/50 mb-2">Najrýchlejšia možnosť</p>
                <h2 className="font-display font-black text-dark text-3xl mb-3">Rezervovať online 💜</h2>
                <p className="font-display text-dark/60 text-sm leading-relaxed mb-6">
                  Vyberte si službu, dátum a čas priamo v našom booking systéme. Potvrdenie dostanete okamžite.
                </p>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-dark text-white font-display font-black text-sm rounded-full hover:bg-rose transition-colors"
                >
                  Otvoriť rezervačný systém
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border-2 border-brand/20" style={{ height: "340px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.7!2d21.2609!3d48.7181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473ee0b9b1c2f52b%3A0x0!2sZvon%C3%A1rska+13%2C+Ko%C5%A1ice!5e0!3m2!1ssk!2ssk!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "saturate(0.6)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Face Up! Studio – Zvonárska 13, Košice"
                />
              </div>

              {/* Legal */}
              <div className="p-5 border-2 border-brand/15 rounded-2xl">
                <p className="font-display font-bold text-dark text-sm mb-2">Prevádzkovateľ</p>
                <p className="font-display text-dark/50 text-xs leading-relaxed">
                  {COMPANY} · {OWNER}<br />
                  {ADDRESS}, {ZIP}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
