import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Section from "@/components/atoms/Section";
import SectionLabel from "@/components/atoms/SectionLabel";

export const metadata: Metadata = {
  title: "Seite nicht gefunden – Sportfreunde Urlau e.V.",
  description: "Die gesuchte Seite konnte nicht gefunden werden.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Section>
          <div className="flex flex-col items-center text-center py-16 lg:py-28 max-w-xl mx-auto">
            <SectionLabel>Fehler 404</SectionLabel>

            <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] font-bold text-[#1a1a1a] leading-[1.1] mt-4 mb-4">
              Seite nicht gefunden
            </h1>

            <p className="text-[#4a5260] text-[1rem] leading-[1.75] mb-10">
              Die gesuchte Seite existiert leider nicht oder wurde verschoben.
              Zurück zur Startseite oder zu einer unserer Abteilungen.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-red text-white font-semibold text-sm transition-all duration-200 hover:bg-[#7a0b14] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(143,13,23,0.28)] focus-visible:outline-[3px] focus-visible:outline-[#f0c060] focus-visible:outline-offset-[3px]"
              >
                ← Zur Startseite
              </Link>
              <Link
                href="/#abteilungen"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md border border-black/20 text-[#1a1a1a] font-medium text-sm transition-all duration-200 hover:border-black/40 hover:bg-black/[0.03] focus-visible:outline-[3px] focus-visible:outline-[#f0c060] focus-visible:outline-offset-[3px]"
              >
                Unsere Abteilungen
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
