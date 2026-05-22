import type { Metadata } from "next";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import NewsSection from "@/components/organisms/NewsSection";

export const metadata: Metadata = {
  title: "News & Berichte – Sportfreunde Urlau e.V.",
  description:
    "Alle News und Berichte der Sportfreunde Urlau e.V. auf einen Blick.",
};

export default function NewsBerichtePage() {
  return (
    <main
      id="main-content"
      className="flex min-h-full flex-1 flex-col bg-surface"
    >
      <Section className="bg-blue">
        <SectionLabel light>Aktuelles</SectionLabel>
        <Headline level="h1" light>
          News & Berichte
        </Headline>
        <p className="text-red-tint text-body">
          Alle Neuigkeiten und Berichte der Sportfreunde Urlau e.V.
        </p>
      </Section>

      <NewsSection limit={0} isOverviewPage />
    </main>
  );
}
