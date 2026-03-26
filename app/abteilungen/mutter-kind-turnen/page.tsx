import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import AbteilungLinkSection from "@/components/molecules/AbteilungLinkSection";
import { EmailLink } from "@/components/atoms/EmailLink";

export const metadata: Metadata = {
  title: "Mutter-Kind-Turnen – Sportfreunde Urlau e.V.",
  description:
    "Dienstags von 09–11 Uhr treffen sich Eltern mit Kleinkindern (0–3 Jahre) zum Singen, Tanzen und Spielen in der Dorfhalle Urlau.",
};

const programm = [
  {
    icon: "🎵",
    title: "Gemeinsames Lied",
    desc: "Wir starten und enden immer mit unserem gemeinsamen Lied – ein vertrautes Ritual für die Kleinen.",
  },
  {
    icon: "🎶",
    title: "Singen & Tanzen",
    desc: "Lieder und Bewegung für die Kleinsten – Musik fördert Sprache, Motorik und Freude am Miteinander.",
  },
  {
    icon: "🎨",
    title: "Basteln",
    desc: "Kreatives Gestalten gemeinsam mit den Kindern – altersgerecht und mit viel Spaß.",
  },
  {
    icon: "⚽",
    title: "Freies Spiel & Bällebad",
    desc: "Viel Zeit zum freien Entfalten – unser Bällebad ist einfach der Hit!",
  },
  {
    icon: "🌳",
    title: "Ausflüge",
    desc: "Wir besuchen verschiedene Spielplätze, gehen spazieren oder erkunden eine Salzgrotte.",
  },
];

const leiterinnen = [
  {
    name: "Nadine Kurtalic",
    role: "Abteilungsleiterin",
    email: "nadinekurtalic@gmx.de",
  },
  { name: "Karin Mösle", role: "Abteilungsleiterin", email: null },
  { name: "Tanja Schwägele", role: "Abteilungsleiterin", email: null },
];

export default function MutterKindGruppePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <Section className="bg-blue">
          <div className="flex items-center">
            <div>
              <SectionLabel light>Abteilung</SectionLabel>
              <Headline level="h1" light>
                Mutter-Kind-Turnen
              </Headline>
              <p className="text-red-tint text-body">
                Singen, Tanzen, Basteln und freies Spiel für Eltern mit
                Kleinkindern im Alter von 0–3 Jahren.
              </p>
              <p className="text-red-tint text-body">
                Alle Eltern aus Urlau und Umgebung sind herzlich eingeladen mit
                ihren Kleinkindern im Alter von 0-3 Jahren daran teilzunehmen!
              </p>
            </div>
          </div>
        </Section>

        {/* Programm */}
        <Section>
          <SectionLabel>Was wir machen</SectionLabel>
          <Headline level="h2">Unser Programm</Headline>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programm.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-surface rounded-xl p-6 border border-black/6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-[1.8rem]" aria-hidden="true">
                    {icon}
                  </div>
                  <div className="font-semibold text-foreground text-body-sm">
                    {title}
                  </div>
                </div>
                <p className="text-muted text-body-xs">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Übungszeiten & Kontakt */}
        <Section className="bg-surface border-t border-b border-black/6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Übungszeiten */}
            <div>
              <SectionLabel>Übungszeiten</SectionLabel>
              <Headline level="h2">Treffpunkt</Headline>
              <div className="bg-background rounded-xl p-6 border border-black/6">
                <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                  Ganzjährig (außer Schulferien)
                </div>
                <ul className="flex flex-col gap-2.5">
                  <li className="flex items-baseline gap-3 text-body-xs">
                    <span className="font-semibold text-foreground whitespace-nowrap">
                      Dienstags, 09:00 – 11:00 Uhr
                    </span>
                  </li>
                  <li className="flex items-baseline gap-3 text-body-xs">
                    <span className="font-semibold text-foreground whitespace-nowrap">
                      Dorfhalle Urlau
                    </span>
                    <span className="text-muted">(kleiner Raum)</span>
                  </li>
                  <li className="flex items-baseline gap-3 text-body-xs">
                    <span className="font-semibold text-foreground whitespace-nowrap">
                      Alter: 0–3 Jahre
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
                {leiterinnen.map(({ name, role, email }) => (
                  <div
                    key={name}
                    className="bg-background rounded-xl p-5 border border-black/6 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-red-dark/10 flex items-center justify-center text-[1.3rem] shrink-0">
                      👶
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-body-sm">
                        {name}
                      </div>
                      <div className="text-label text-muted uppercase tracking-[0.08em] font-semibold mt-0.5">
                        {role}
                      </div>
                      {email && <EmailLink email={email} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Back */}
        <AbteilungLinkSection sectionClassName="bg-white" />
      </main>
      <Footer />
    </>
  );
}
