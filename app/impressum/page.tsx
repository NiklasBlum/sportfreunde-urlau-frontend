import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import { EmailLink } from "@/components/atoms/EmailLink";

export const metadata: Metadata = {
  title: "Impressum – Sportfreunde Urlau e.V.",
  description: "Impressum und Haftungsausschluss der Sportfreunde Urlau e.V.",
};

const vereinsinfo = [
  { label: "Verein", value: "Sportfreunde Urlau e.V." },
  {
    label: "Anschrift",
    value: "Martinsweg 6\n88299 Leutkirch im Allgäu\nDeutschland",
  },
  {
    label: "E-Mail",
    value: "vorstand.sportfreunde.urlau@gmail.com",
    href: "mailto:vorstand.sportfreunde.urlau@gmail.com",
  },
  {
    label: "Verantwortlicher (§ 18 Abs. 2 MStV)",
    value: "Michael Tronsberg\nRiedstr. 7\n88316 Isny",
  },
];

const vorstand = [
  { role: "1. Vorsitzender", name: "Michael Tronsberg" },
  { role: "1. stellv. Vorsitzende", name: "Simone Breins" },
  { role: "2. stellv. Vorsitzender", name: "Hans Bauer" },
  { role: "Kassierin", name: "Martina Dorn" },
  { role: "stellv. Kassier", name: "Thomas Krug" },
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

        {/* Pflichtangaben § 5 TMG */}
        <Section>
          <SectionLabel>Anbieter</SectionLabel>
          <Headline level="h2">Angaben gemäß § 5 TMG</Headline>
          <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/8 max-w-2xl">
            {vereinsinfo.map(({ label, value, href }) => (
              <div
                key={label}
                className="flex flex-col sm:flex-row sm:items-start bg-white px-6 py-4 gap-1 sm:gap-6"
              >
                <span className="text-label text-muted uppercase tracking-[0.08em] font-semibold w-56 shrink-0">
                  {label}
                </span>
                {href ? (
                  <EmailLink email={value} />
                ) : (
                  <span className="font-semibold text-body-sm text-foreground whitespace-pre-line">
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Vorstand */}
        <Section className="bg-surface border-t border-b border-black/6">
          <SectionLabel>Verantwortlich</SectionLabel>
          <Headline level="h2">Vorstandschaft SF Urlau</Headline>
          <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/8 max-w-2xl">
            {vorstand.map(({ role, name }) => (
              <div
                key={role}
                className="flex flex-col sm:flex-row sm:items-center bg-white px-6 py-4 gap-1 sm:gap-6"
              >
                <span className="text-label text-muted uppercase tracking-[0.08em] font-semibold w-48 shrink-0">
                  {role}
                </span>
                <span className="font-semibold text-body-sm text-foreground">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Section>

        {/* Haftungsausschluss */}
        <Section>
          <SectionLabel>Haftungsausschluss</SectionLabel>
          <Headline level="h2">Rechtliche Hinweise</Headline>
          <div className="flex flex-col gap-4 max-w-3xl">
            {haftungsabschnitte.map(({ title, text }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 border border-black/6"
              >
                <div className="font-semibold text-foreground text-body-sm mb-1">
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
