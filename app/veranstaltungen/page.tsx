import type { Metadata } from "next";
// Navbar and Footer are provided by the root layout
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import EventSection from "@/components/organisms/EventSection";

export const metadata: Metadata = {
  title: "Veranstaltungen – Sportfreunde Urlau e.V.",
  description:
    "Alle Veranstaltungen und Termine der Sportfreunde Urlau e.V. auf einen Blick.",
};

export default function VeranstaltungenPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      {/* Hero */}
      <Section className="bg-blue">
        <SectionLabel light>Überblick</SectionLabel>
        <Headline level="h1" light>
          Veranstaltungen
        </Headline>
        <p className="text-red-tint text-body">
          Alle wichtigen Veranstaltungen und Termine der Sportfreunde Urlau e.V.
          auf einen Blick.
        </p>
      </Section>

      <EventSection />
    </main>
  );
}
