import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import AbteilungLinkSection from "@/components/molecules/AbteilungLinkSection";
import { Card } from "@/components/atoms/Card";

export const metadata: Metadata = {
  title: "Kinderturnen – Sportfreunde Urlau e.V.",
  description:
    "Mittwochs von 16:15–17:15 Uhr – abwechslungsreiches Turnen für Kinder im letzten und vorletzten Kindergartenjahr (5–6 Jahre).",
};

const programm = [
  "Bewegungsgeschichten",
  "Parcoursaufbauten mit Geräten",
  "Verschiedene Spiele",
  "Tanzen",
  "Übungen zur Schulung der Motorik und Koordination",
  "Traumreisen",
];

const leiterinnen = [
  { name: "Natalie Doser", role: "Abteilungsleiterin" },
  { name: "Maike Banhardt", role: "Abteilungsleiterin" },
  { name: "Martina Göser", role: "Abteilungsleiterin" },
];

export default function KindertурnenPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <Section className="bg-blue">
          <SectionLabel light>Abteilung</SectionLabel>
          <Headline level="h1" light>
            Kinderturnen
          </Headline>
          <p className="text-red-tint text-body">
            Abwechslungsreiches Turnen für Kinder im letzten und vorletzten
            Kindergartenjahr (5–6 Jahre) – mittwochs von 16:15 bis 17:15 Uhr.
          </p>
          <p className="text-red-tint text-body">
            Kinder von auswärts sind herzlich willkommen!
          </p>
        </Section>

        {/* Programm */}
        <Section>
          <SectionLabel>Was wir machen</SectionLabel>
          <Headline level="h2">Unser Programm</Headline>

          <div className="bg-surface rounded-xl p-6 border border-black/6 mb-6">
            <ul className="flex flex-col gap-2">
              {programm.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-body-xs text-muted"
                >
                  <span>–</span> {item}
                </li>
              ))}
            </ul>
          </div>

          <Card type="hint">
            Als besonderes Highlight treten wir beim{" "}
            <strong>Faschingsnachmittag</strong> der Sportfreunde auf. Ein
            Einstieg ins Kinderturnen ist immer nach den{" "}
            <strong>Sommerferien im September</strong> möglich.
          </Card>
        </Section>

        {/* Übungszeiten & Kontakt */}
        <Section className="bg-surface border-t border-b border-black/6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Übungszeiten */}
            <div>
              <SectionLabel>Übungszeiten</SectionLabel>
              <Headline level="h2">Trainingszeiten</Headline>
              <div className="bg-background rounded-xl p-6 border border-black/6">
                <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                  Ganzjährig (außer Sommerferien)
                </div>
                <ul className="flex flex-col gap-2.5">
                  <li className="flex items-baseline gap-3 text-body-xs">
                    <span className="font-semibold text-foreground whitespace-nowrap">
                      Mittwochs, 16:15 – 17:15 Uhr
                    </span>
                    <span className="text-muted">Kinderturnen</span>
                  </li>
                  <li className="flex items-baseline gap-3 text-body-xs">
                    <span className="font-semibold text-foreground whitespace-nowrap">
                      Alter: 5–6 Jahre
                    </span>
                    <span className="text-muted">
                      (letztes und vorletztes Kindergartenjahr)
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kontakt */}
            <div>
              <SectionLabel>Kontakt</SectionLabel>
              <Headline level="h2">Abteilungsleiterinnen</Headline>
              <div className="flex flex-col gap-3">
                {leiterinnen.map(({ name, role }) => (
                  <div
                    key={name}
                    className="bg-background rounded-xl p-5 border border-black/6 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-dark/10 flex items-center justify-center text-[1.3rem] shrink-0">
                      🧒
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
