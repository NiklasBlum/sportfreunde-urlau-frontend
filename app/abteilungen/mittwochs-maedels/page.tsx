import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import AbteilungLinkSection from "@/components/molecules/AbteilungLinkSection";

export const metadata: Metadata = {
  title: "Mittwochsmädels – Sportfreunde Urlau e.V.",
  description:
    "Mittwochs ab 19:30/20:00 Uhr in der Urlauer Dorfhalle – Outdoor- und Indoor-Programm für alle Leistungsstufen.",
};

const outdoor = [
  "Radtouren (gerne mit einem Sprung in den Weiher)",
  "Wanderungen",
  "Nordic Walking",
];

const indoor = ["Volleyball", "Badminton", "Tischtennis"];

const indoorEinleitung =
  "Den Hallensport-Abend leiten wir mit Zirkeltraining, Steppen, Flexibar oder Gymnastik ein. Danach gibt es Spiel und Spaß mit:";

export default function MittwochsmaedelsPage() {
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
                Mittwochsmädels
              </Headline>
              <p className="text-red-tint text-body max-w-130">
                Wir treffen uns immer mittwochs ab 19:30/20:00 Uhr in der
                Urlauer Dorfhalle. Unsere Gruppe freut sich über Neueinsteiger –
                komm einfach zum Schnuppern vorbei!
              </p>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="/abteilungen/mittwochmaedels.webp"
                alt="Mittwochsmädels"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>
          </div>
        </Section>

        {/* Programm */}
        <Section>
          <SectionLabel>Programm</SectionLabel>
          <Headline level="h2">Outdoor & Indoor</Headline>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Outdoor */}
            <div className="bg-surface rounded-xl p-6 border border-black/6">
              <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                Outdoor-Programm im Sommer
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

            {/* Indoor */}
            <div className="bg-surface rounded-xl p-6 border border-black/6">
              <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                Indoor-Programm bei schlechtem Wetter & im Winter
              </div>
              <p className="text-body-xs text-muted mb-4">{indoorEinleitung}</p>
              <ul className="flex flex-col gap-2">
                {indoor.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-body-xs text-muted"
                  >
                    <span>–</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
                  Ganzjährig
                </div>
                <ul className="flex flex-col gap-2.5">
                  <li className="flex items-baseline gap-3 text-body-xs">
                    <span className="font-semibold text-foreground whitespace-nowrap">
                      Mittwochs, 19:30 / 20:00 Uhr
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Kontakt */}
            <div>
              <SectionLabel>Kontakt</SectionLabel>
              <Headline level="h2">Abteilungsleiterin</Headline>
              <div className="bg-background rounded-xl p-6 border border-black/6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-red-dark/10 flex items-center justify-center text-[1.5rem] shrink-0">
                  💃
                </div>
                <div>
                  <div className="font-semibold text-foreground text-[1rem]">
                    Tanja Heinz
                  </div>
                  <div className="text-label text-muted uppercase tracking-[0.08em] font-semibold mt-0.5">
                    Abteilungsleiterin
                  </div>
                </div>
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
