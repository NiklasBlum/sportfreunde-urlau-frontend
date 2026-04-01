import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import TerminCard from "@/components/molecules/TerminCard";
import { VERANSTALTUNGEN } from "@/data/veranstaltungen";

export const metadata: Metadata = {
  title: "Veranstaltungen – Sportfreunde Urlau e.V.",
  description:
    "Alle Veranstaltungen und Termine der Sportfreunde Urlau e.V. auf einen Blick.",
};

export default function VeranstaltungenPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex flex-1 flex-col">
        {/* Hero */}
        <Section className="bg-blue">
          <SectionLabel light>Überblick</SectionLabel>
          <Headline level="h1" light>
            Veranstaltungen
          </Headline>
          <p className="text-red-tint text-body">
            Alle wichtigen Veranstaltungen und Termine der Sportfreunde Urlau
            e.V. auf einen Blick.
          </p>
        </Section>

        {/* Events List */}
        <Section className="bg-surface border-t border-black/6">
          <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/8">
            {VERANSTALTUNGEN.map((v) => (
              <TerminCard
                key={v.title}
                day={v.day}
                month={v.month}
                title={v.title}
                info={v.info}
                tag={v.tag}
                href={v.href}
              />
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
