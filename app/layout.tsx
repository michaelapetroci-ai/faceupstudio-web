import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin", "latin-ext"],
  variable: "--font-spartan",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="sk" className={leagueSpartan.variable}>
      <body className="antialiased min-h-screen flex flex-col bg-white text-dark font-body">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
