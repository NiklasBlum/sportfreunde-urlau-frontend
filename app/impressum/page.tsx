import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";

export const metadata: Metadata = {
  title: "Impressum – Sportfreunde Urlau e.V.",
  description: "Impressum und Haftungsausschluss der Sportfreunde Urlau e.V.",
};

const vorstand = [
  { role: "1. Vorsitzender", name: "Michael Tronsberg" },
  { role: "Stellv. Vorsitzende", name: "Simone Breins, Horst Hüther" },
  { role: "Kassierinnen", name: "Martina Dorn und Iris Haase" },
  { role: "Schriftführerin", name: "Erika Peter" },
  { role: "Webmaster", name: "Niklas Blum" },
];

const haftungsabschnitte = [
  {
    title: "Externe Links",
    text: "Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.",
  },
  {
    title: "Inhaltliche Richtigkeit",
    text: "Der Anbieter übernimmt keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen.",
  },
  {
    title: "Urheberrecht",
    text: "Alle auf dieser Website veröffentlichten Beiträge und Abbildungen sind urheberrechtlich geschützt. Jede vom Urheberrechtsgesetz nicht zugelassene Verwertung bedarf vorheriger schriftlicher Zustimmung. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Fotokopien und Downloads von dieser Website dürfen nur für den persönlichen, privaten und nicht kommerziellen Gebrauch hergestellt werden.",
  },
  {
    title: "Datenschutz",
    text: "Alle auf dieser Website genannten Personen widersprechen hiermit jeder kommerziellen Verwendung und Weitergabe ihrer Daten.",
  },
  {
    title: "E-Mail-Kommunikation",
    text: "Kommunikation via E-Mail ist nicht vor dem Zugriff Dritter geschützt. Sollten wir eine E-Mail von Ihnen erhalten, gehen wir davon aus, dass wir zu einer Beantwortung per E-Mail berechtigt sind. Andernfalls müssen Sie ausdrücklich auf eine andere Art der Kommunikation verweisen.",
  },
];

export default function ImpressumPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Section className="bg-blue">
          <SectionLabel light>Rechtliches</SectionLabel>
          <Headline level="h1" light>
            Impressum
          </Headline>
          <p className="text-red-tint text-body">
            Angaben gemäß § 5 TMG – Sportfreunde Urlau e.V.
          </p>
        </Section>

        {/* Vorstand */}
        <Section>
          <SectionLabel>Verantwortlich</SectionLabel>
          <Headline level="h2"> Vorstandschaft SF Urlau </Headline>
          <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/8 max-w-2xl">
            {vorstand.map(({ role, name }) => (
              <div
                key={role}
                className="flex flex-col sm:flex-row sm:items-center bg-white px-6 py-4 gap-1 sm:gap-6"
              >
                <span className="text-[0.8rem] text-muted uppercase tracking-[0.08em] font-semibold w-48 shrink-0">
                  {role}
                </span>
                <span className="font-semibold text-[0.95rem] text-foreground">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Haftungsausschluss */}
        <Section className="bg-surface border-t border-b border-black/6">
          <SectionLabel>Haftungsausschluss</SectionLabel>
          <Headline level="h2">Rechtliche Hinweise</Headline>
          <div className="flex flex-col gap-4 max-w-3xl">
            {haftungsabschnitte.map(({ title, text }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 border border-black/6"
              >
                <div className="font-semibold text-foreground text-[0.95rem] mb-1">
                  {title}
                </div>
                <p className="text-body-xs text-muted">{text}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
