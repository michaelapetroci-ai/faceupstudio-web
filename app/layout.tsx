import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Face Up! Studio – Líčenie, Kozmetika & Hair | Košice",
  description:
    "Váš beauty studio v centre Košíc. Profesionálne líčenie, vlasový styling, kozmetické ošetrenia, úprava obočia, Face Gym a kurzy líčenia. Zvonárska 13, Košice.",
  keywords: [
    "líčenie košice",
    "makeup studio košice",
    "svadobné líčenie",
    "kozmetika košice",
    "face gym",
    "hair styling",
    "kurzy líčenia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="sk"
      className={`${cormorant.variable} ${inter.variable} ${dancing.variable}`}
    >
      <body className="antialiased min-h-screen flex flex-col bg-cream text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
