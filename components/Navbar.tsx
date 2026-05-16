"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOKING_URL } from "@/lib/constants";

const links = [
  { href: "/", label: "Domov" },
  { href: "/sluzby", label: "Služby" },
  { href: "/cennik", label: "Cenník" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/kurzy", label: "Kurzy" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = isHome && !scrolled;

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      onHero
        ? "bg-brand/80 backdrop-blur-sm"
        : "bg-white/96 backdrop-blur-md shadow-sm border-b border-brand/20"
    }`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo — matches the real brand logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-10 h-10 rounded-full bg-brand flex flex-col items-center justify-center">
              <span className="font-display font-black text-dark leading-none" style={{ fontSize: "9px", letterSpacing: "-0.01em" }}>
                face up!
              </span>
              <span className="font-display font-light text-dark leading-none tracking-[0.2em] uppercase" style={{ fontSize: "5px" }}>
                studio
              </span>
            </div>
            <div className="hidden sm:flex flex-col leading-none gap-0.5">
              <span className="font-display font-black text-dark text-[1.35rem] leading-none tracking-tight">
                face up!
              </span>
              <span className="font-display font-light text-dark/60 text-[8px] tracking-[0.3em] uppercase leading-none">
                studio
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`font-display font-semibold text-sm transition-colors duration-200 ${
                  pathname === href ? "text-rose" : "text-dark/60 hover:text-dark"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center px-5 py-2 bg-dark text-white font-display font-black text-xs tracking-wide rounded-full hover:bg-rose transition-colors"
            >
              Rezervovať
            </a>
            <button onClick={() => setOpen(!open)} className="lg:hidden text-dark p-1" aria-label="Menu">
              {open ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-brand/30">
          <nav className="px-5 py-5 flex flex-col gap-3">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`font-display font-bold text-base py-1 transition-colors ${
                  pathname === href ? "text-rose" : "text-dark"
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center px-6 py-3 bg-dark text-white font-display font-black text-sm rounded-full hover:bg-rose transition-colors"
            >
              Rezervovať termín
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
