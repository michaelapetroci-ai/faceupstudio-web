import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-lavender flex items-center justify-center shrink-0">
                <span className="font-script text-ink text-sm">fu!</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-script text-2xl text-cream">face up!</span>
                <span className="text-[7px] tracking-[0.35em] uppercase text-cream/40 font-body">
                  studio
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-cream/50 font-body max-w-xs">
              Váš beauty studio v centre Košíc. Krása, kozmetika a osobná
              starostlivosť.
            </p>
            <p className="mt-5 font-heading italic text-lavender/80 text-base">
              "Turning dreams into flawless reality."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-cream text-xl mb-6 tracking-wide">
              Navigácia
            </h3>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/", label: "Domov" },
                { href: "/sluzby", label: "Služby" },
                { href: "/portfolio", label: "Portfólio" },
                { href: "/kurzy", label: "Kurzy" },
                { href: "/kontakt", label: "Kontakt" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm font-body text-cream/50 hover:text-cream transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-cream text-xl mb-6 tracking-wide">
              Kontakt
            </h3>
            <div className="flex flex-col gap-4 text-sm font-body">
              <a
                href="https://maps.google.com/?q=Zvonárska+13,+Košice"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-cream/50 hover:text-cream transition-colors"
              >
                <span className="mt-0.5">
                  <svg
                    className="w-4 h-4 shrink-0"
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
                </span>
                Zvonárska 13, Košice
              </a>
              <a
                href="tel:+421948422080"
                className="flex items-center gap-3 text-cream/50 hover:text-cream transition-colors"
              >
                <svg
                  className="w-4 h-4 shrink-0"
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
                0948 422 080
              </a>
              <a
                href="https://www.instagram.com/_faceupstudio_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-cream/50 hover:text-lavender transition-colors"
              >
                <svg
                  className="w-4 h-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" />
                </svg>
                @_faceupstudio_
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-xs tracking-widest uppercase font-body px-5 py-2.5 border border-lavender/60 text-lavender hover:bg-lavender hover:text-ink transition-all duration-200"
              >
                Rezervovať online
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/25 font-body">
          <span>
            © {new Date().getFullYear()} Face Up! Studio. Všetky práva
            vyhradené.
          </span>
          <span>Zvonárska 13, Košice</span>
        </div>
      </div>
    </footer>
  );
}
