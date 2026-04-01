import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";

export const metadata: Metadata = {
  title: "Jahreshauptversammlung 2026 – Sportfreunde Urlau e.V.",
  description:
    "Jahreshauptversammlung der Sportfreunde Urlau e.V. mit Vorstandswahlen und Abteilungsberichten.",
};

export default function JahreshauptversammlungPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* Hero */}
        <Section className="bg-blue">
          <SectionLabel light>Verein</SectionLabel>
          <Headline level="h1" light>
            Jahreshauptversammlung 2026
          </Headline>
          <p className="text-red-tint text-body">
            Sportfreunde Urlau präsentieren Jahresbericht und wählen neues
            Vorstandsteam
          </p>
        </Section>

        {/* Content */}
        <Section className="bg-surface border-t border-black/6">
          <article className="prose prose-sm ">
            <Headline level="h2">
              Sportfreunde Urlau halten Jahreshauptversammlung
            </Headline>
            <p className="text-body font-semibold text-red-accent mb-8">
              Sandrina Fasser ergänzt das Vorstandsteam
            </p>

            <p className="text-body mb-4">
              Am 20.03.2026 haben 54 Vereinsmitglieder ihre
              Jahreshauptversammlung im kleinen Raum der Dorfhalle Urlau
              abgehalten.
            </p>

            <p className="text-body mb-4">
              1. Vorsitzender Michael Tronsberg eröffnete die Versammlung und
              schilderte in seinem Jahresbericht die wichtigsten Ereignisse vom
              letzten Jahr, so nahmen wir z.B. wieder am Stadtradeln teil und
              erhielten hierfür eine Urkunde vom Klimabündnis in Gold. Die
              Fahrradsegnung war trotz schlechtem Wetter gut besucht. Außerdem
              bewirteten wir 150 Pilger nachts bei der 22-Std.-Wanderung und
              veranstalteten wieder unseren traditionellen Faschingsnachmittag.
              Der Kassenbericht von Martina Dorn zeigt, dass wir ein sehr
              erfolgreiches Jahr hinter uns haben. Brigitte Krug und Johann
              Peter haben die Kasse vorab geprüft und Martina wieder eine
              einwandfreie Führung bestätigt. Ebenso zeigen die verschiedenen
              Abteilungsberichte wie vielseitig und aktiv unser Verein ist, so
              wurde die Jugendmannschaft im Tischtennis in eine reguläre
              Mannschaft überführt und belegt aktuell einen sehr guten 3. Platz.
              Ein paar von der Radsportabteilung haben am historischem Radrennen
              in Wielazhofen teilgenommen, hier ging Manfred Heinz als Sieger
              hervor. Zum ersten Mal veranstalteten die Abteilung Kinderturnen
              und Eltern-Kindturnen einen Secondhand-Faschingsmarkt über die
              Hilfsorganisation „Aktion Hoffnung“. Der Erlös wurde an„Hoffnung
              Kindheit“ in Indien gespendet.
            </p>

            <p className="text-body mb-4">
              Unter der Leitung von Ortsvorsteher Sven Stöckle standen die
              Wahlen auf dem Programm. Hierbei wurde wieder Michael Tronsberg
              zum 1. Vorsitzenden, Simone Breins zur stellvertretenden
              Vorsitzenden und Hansi Bauer zum 2. stellvertretenden Vorsitzenden
              gewählt. Martina Dorn wurde als Kassiererin und Erika Peter als
              Schriftführerin bestätigt. Sandrina Fasser vervollständigt das
              Vorstandsteam als neu gewählte 2. Kassiererin. Neue
              Jugendvertreter der Sportfreunde sind Fabian Menig (Jugendleiter)
              und Benedikt Ziegerer (Jugendsprecher).
            </p>

            <p className="text-body mb-4">
              Am 14.06.2026 veranstalten die Sportfreunde Urlau wieder ein
              9-Meter-Turnier in der „Urlauer Bahndamm–Arena“.
            </p>
          </article>
        </Section>
      </main>

      <Footer />
    </>
  );
}
