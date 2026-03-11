import SectionLabel from "@/components/atoms/SectionLabel";
import TerminCard from "@/components/molecules/TerminCard";
import Section from "../atoms/Section";
import { Headline } from "../atoms/Headline";

const termine = [
  {
    day: "20",
    month: "März",
    title: "Jahreshauptversammlung 2026",
    info: "📍 Sporthalle Urlau · 19:30 Uhr · Alle Mitglieder sind herzlich eingeladen",
    tag: "Verein",
  },
  {
    day: "17",
    month: "März",
    title: "Abteilungsversammlung Tischtennis",
    info: "📍 Sporthalle Stube Urlau · 19:30 Uhr · Alle Mitglieder sind herzlich eingeladen",
    tag: "Verein",
  },
  {
    day: "14",
    month: "Feb",
    title: "Faschingsnachmittag",
    info: "📍 Sporthalle Urlau · 14:00 Uhr",
    tag: "Veranstaltung",
  },
];

export default function TermineSection() {
  return (
    <Section id="termine">
      <SectionLabel>Aktuelles</SectionLabel>

      <Headline level="h2"> Termine &amp; Veranstaltungen</Headline>

      <p className="text-[#4a5260] text-[0.98rem] leading-[1.75] mb-[2.8rem]">
        Was ist bei den Sportfreunden Urlau geplant? Hier findet ihr alle
        wichtigen Termine.
      </p>
      <div className="flex flex-col gap-px bg-black/[0.06] rounded-xl overflow-hidden border border-black/[0.08]">
        {termine.map((t) => (
          <TerminCard key={t.title} {...t} />
        ))}
      </div>
    </Section>
  );
}
