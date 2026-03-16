import type { Metadata } from "next";
import Button from "@/components/atoms/Button";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import Section from "@/components/atoms/Section";
import SectionLabel from "@/components/atoms/SectionLabel";
import { Headline } from "@/components/atoms/Headline";

export const metadata: Metadata = {
  title: "Seite nicht gefunden – Sportfreunde Urlau e.V.",
  description: "Die gesuchte Seite konnte nicht gefunden werden.",
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="flex-1 flex flex-col justify-center">
        <Section>
          <div className="flex flex-col items-center text-center py-16 lg:py-28 max-w-xl mx-auto">
            <SectionLabel>Fehler 404</SectionLabel>

            <Headline level="h1">Seite nicht gefunden</Headline>

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
