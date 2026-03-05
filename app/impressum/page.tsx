import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";

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
        {/* Hero */}
        <Section className="bg-[#7a0b14] py-10">
          <SectionLabel light>Rechtliches</SectionLabel>
          <h1 className="font-serif text-[clamp(2.4rem,4.5vw,3.6rem)] font-bold text-white leading-[1.1] mb-4">
            Impressum
          </h1>
          <p className="text-[#f0dde0] text-[1rem] leading-[1.75]">
            Angaben gemäß § 5 TMG – Sportfreunde Urlau e.V.
          </p>
        </Section>

        {/* Vorstand */}
        <Section>
          <SectionLabel>Verantwortlich</SectionLabel>
          <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-[#1a1a1a] leading-[1.15] mb-8">
            Vorstandschaft SF Urlau
          </h2>
          <div className="flex flex-col gap-px bg-black/[0.06] rounded-xl overflow-hidden border border-black/[0.08] max-w-2xl">
            {vorstand.map(({ role, name }) => (
              <div
                key={role}
                className="flex flex-col sm:flex-row sm:items-center bg-white px-6 py-4 gap-1 sm:gap-6"
              >
                <span className="text-[0.8rem] text-[#4a5260] uppercase tracking-[0.08em] font-semibold w-48 shrink-0">
                  {role}
                </span>
                <span className="font-semibold text-[0.95rem] text-[#1a1a1a]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Haftungsausschluss */}
        <Section className="bg-[#f2eeeb] border-t border-b border-black/[0.06]">
          <SectionLabel>Haftungsausschluss</SectionLabel>
          <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-[#1a1a1a] leading-[1.15] mb-8">
            Rechtliche Hinweise
          </h2>
          <div className="flex flex-col gap-4 max-w-3xl">
            {haftungsabschnitte.map(({ title, text }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 border border-black/[0.06]"
              >
                <div className="font-semibold text-[#1a1a1a] text-[0.95rem] mb-1">
                  {title}
                </div>
                <p className="text-[0.88rem] text-[#4a5260] leading-[1.7]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
