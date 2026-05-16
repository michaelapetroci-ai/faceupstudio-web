"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOKING_URL } from "@/lib/constants";

const links = [
  { href: "/", label: "Domov" },
  { href: "/sluzby", label: "Služby" },
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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-ink/96 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="w-9 h-9 rounded-full bg-lavender flex items-center justify-center">
              <span className="font-script text-ink text-sm leading-none">
                fu!
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-script text-xl text-cream leading-tight">
                face up!
              </span>
              <span className="text-[7px] tracking-[0.35em] uppercase text-cream/50 font-body">
                studio
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm tracking-widest uppercase font-body transition-colors duration-200 ${
                  pathname === href
                    ? "text-lavender"
                    : "text-cream/70 hover:text-cream"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex text-xs tracking-widest uppercase font-body px-6 py-2.5 border border-lavender text-lavender hover:bg-lavender hover:text-ink transition-all duration-200"
            >
              Rezervovať
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-cream p-1"
              aria-label="Menu"
            >
              {open ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-ink border-t border-cream/10">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={`text-base font-body tracking-wide transition-colors ${
                  pathname === href
                    ? "text-lavender"
                    : "text-cream/70 hover:text-cream"
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
              className="mt-4 text-xs tracking-widest uppercase font-body px-6 py-3 border border-lavender text-lavender hover:bg-lavender hover:text-ink transition-all duration-200 text-center"
            >
              Rezervovať termín
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
