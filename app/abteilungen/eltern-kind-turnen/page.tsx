import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import AbteilungLinkSection from "@/components/molecules/AbteilungLinkSection";
import { Card } from "@/components/atoms/Card";

export const metadata: Metadata = {
  title: "Eltern-Kind-Turnen – Sportfreunde Urlau e.V.",
  description:
    "Dienstags von 16–17 Uhr treffen sich Eltern mit Kindern (ca. 1–5 Jahre) zum gemeinsamen Turnen in der Dorfhalle Urlau.",
};

const programm = [
  {
    icon: "🎵",
    title: "Begrüßungslied",
    desc: "Zum Einstieg singen wir gemeinsam ein Begrüßungslied – der perfekte Start in die Turnstunde.",
  },
  {
    icon: "🤸",
    title: "Bewegungslandschaft",
    desc: "Gemeinsam wird eine Bewegungslandschaft aufgebaut und fleißig geturnt – Klettern, Hüpfen, Balancieren und vieles mehr.",
  },
  {
    icon: "🎶",
    title: "Hit des Monats",
    desc: "Zum Abschluss tanzen wir zu unserem \u201eHit des Monats\u201c \u2013 jedes Mal ein anderes Bewegungslied.",
  },
];

const leiterinnen = [
  { name: "Patricia Mathy", role: "Abteilungsleiterin" },
];

export default function ElternKindTurnenPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <Section className="bg-blue">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionLabel light>Abteilung</SectionLabel>
              <Headline level="h1" light>
                Eltern-Kind-Turnen
              </Headline>
              <p className="text-red-tint text-body">
                Bewegung, Spaß und Gemeinschaft für die Kleinsten – Eltern,
                Großeltern und Kinder im Alter von ca. 1–5 Jahren turnen
                gemeinsam in der Dorfhalle Urlau.
              </p>
            </div>
          </div>
        </Section>

        {/* Programm */}
        <Section>
          <SectionLabel>Ablauf</SectionLabel>
          <Headline level="h2">So läuft die Stunde ab</Headline>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
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

          {/* Hinweis */}
          <Card type="hint" className="mt-8">
            <span className="font-semibold">Bitte mitbringen:</span> Turnschuhe,
            Turnbekleidung und ausreichend Getränke
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
                  Ganzjährig (außer Schulferien)
                </div>
                <ul className="flex flex-col gap-2.5">
                  <li className="flex items-baseline gap-3 text-body-xs">
                    <span className="font-semibold text-foreground whitespace-nowrap">
                      Dienstags, 16:00 – 17:00 Uhr
                    </span>
                  </li>
                  <li className="flex items-baseline gap-3 text-body-xs">
                    <span className="font-semibold text-foreground whitespace-nowrap">
                      Alter: ca. 1–5 Jahre
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
                      👶
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
        <AbteilungLinkSection sectionClassName="bg-white" />
      </main>
      <Footer />
    </>
  );
}
