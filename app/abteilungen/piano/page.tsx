import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import AbteilungLinkSection from "@/components/molecules/AbteilungLinkSection";

export const metadata: Metadata = {
  title: "Piano – Sportfreunde Urlau e.V.",
  description:
    "Mittwochs von 20–22 Uhr im kleinen Raum der Dorfhalle Urlau – Grundfitness durch Gymnastik und Ausdauer zu rhythmischer Musik.",
};

const indoor = [
  "Zirkeltraining",
  "Flexibar-Übungen",
  "Stepper-Einheiten",
  "Badminton",
];

const outdoor = ["Radtouren", "Walking Tour", "Wikinger-Schach"];

const team = [
  { name: "Hermine Oettinger", role: "Abteilungsleiterin" },
  { name: "Marga Zindstein", role: "Übungsleiterin" },
];

export default function PianoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <Section className="bg-blue">
          <SectionLabel light>Abteilung</SectionLabel>
          <Headline level="h1" light>
            Piano
          </Headline>
          <p className="text-red-tint text-body">
            Wir &bdquo;Pianos&ldquo; streben nach Grundfitness durch Gymnastik-
            und Ausdauerübungen zu rhythmischer Musik &ndash; jeder macht so
            viel und so gut er gerade kann.
          </p>
        </Section>

        {/* Über uns */}
        <Section>
          <SectionLabel>Über uns</SectionLabel>
          <Headline level="h2">Wer sind die Pianos?</Headline>

          <div className="bg-surface rounded-xl p-6 border border-black/6 ">
            <p className="text-body-xs text-muted">
              Unsere Gruppe besteht derzeit aus ca. 8–10 Damen im Alter zwischen
              ca. 40 und 60 Jahren. Alle sind willkommen, die sich uns
              anschließen möchten.
            </p>
            <p className="mt-3 text-body-xs text-muted">
              Warum nennen wir uns &bdquo;Pianos&ldquo;? &ndash; Weil sportliche
              Höchstleistungen nicht unser Ziel sind: Jeder macht so viel und so
              gut er gerade kann.
            </p>
          </div>
        </Section>

        {/* Programm */}
        <Section className="bg-surface border-t border-b border-black/6">
          <SectionLabel>Programm</SectionLabel>
          <Headline level="h2">Indoor & Outdoor</Headline>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Indoor */}
            <div className="bg-background rounded-xl p-6 border border-black/6">
              <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                Indoor – zu rhythmischer Musik
              </div>
              <ul className="flex flex-col gap-2">
                {indoor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-body-xs text-muted"
                  >
                    <span>–</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Outdoor */}
            <div className="bg-background rounded-xl p-6 border border-black/6">
              <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                Outdoor im Sommer
              </div>
              <ul className="flex flex-col gap-2">
                {outdoor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-body-xs text-muted"
                  >
                    <span>–</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Übungszeiten & Kontakt */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Übungszeiten */}
            <div>
              <SectionLabel>Übungszeiten</SectionLabel>
              <Headline level="h2">Trainingszeiten</Headline>
              <div className="bg-surface rounded-xl p-6 border border-black/6">
                <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                  Ganzjährig
                </div>
                <ul className="flex flex-col gap-2.5">
                  <li className="flex items-baseline gap-3 text-body-xs">
                    <span className="font-semibold text-foreground whitespace-nowrap">
                      Mittwochs, 20:00 – 22:00 Uhr
                    </span>
                    <span className="text-muted">
                      Im kleinen Raum der Dorfhalle Urlau
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kontakt */}
            <div>
              <SectionLabel>Kontakt</SectionLabel>
              <Headline level="h2">Leitung</Headline>
              <div className="flex flex-col gap-3">
                {team.map(({ name, role }) => (
                  <div
                    key={name}
                    className="bg-surface rounded-xl p-5 border border-black/6 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-dark/10 flex items-center justify-center text-[1.3rem] shrink-0">
                      🤸🏻
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-body-sm">
                        {name}
                      </div>
                      <div className="text-label text-muted uppercase tracking-[0.08em] font-semibold mt-0.5">
                        {role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Back */}
        <AbteilungLinkSection />
      </main>
      <Footer />
    </>
  );
}
