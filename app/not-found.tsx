import type { Metadata } from "next";
import Button from "@/components/atoms/Button";
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
      <main id="main-content" className="flex-1">
        <Section>
          <div className="flex flex-col items-center text-center py-16 lg:py-28 max-w-xl mx-auto">
            <SectionLabel>Fehler 404</SectionLabel>

            <h1 className="font-serif text-[clamp(2.4rem,5vw,3.8rem)] font-bold text-foreground leading-[1.1] mt-4 mb-4">
              Seite nicht gefunden
            </h1>

            <p className="text-muted text-[1rem] leading-[1.75] mb-10">
              Die gesuchte Seite existiert leider nicht oder wurde verschoben.
              Zurück zur Startseite oder zu einer unserer Abteilungen.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button href="/" variant="red">
                ← Zur Startseite
              </Button>
              <Button href="/#abteilungen" variant="outline-dark">
                Unsere Abteilungen
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
