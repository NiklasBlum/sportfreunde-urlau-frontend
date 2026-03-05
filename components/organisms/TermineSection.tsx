import SectionLabel from "@/components/atoms/SectionLabel";
import TerminCard from "@/components/molecules/TerminCard";
import Section from "../atoms/Section";

const termine = [
  {
    day: "15",
    month: "Feb",
    title: "Faschingsnachmittag",
    info: "📍 Sportheim Urlau · 14:00 Uhr",
    tag: "Veranstaltung",
  },
  {
    day: "22",
    month: "Mär",
    title: "9 Meter Turnier",
    info: "📍 Sporthalle Urlau · 10:00 Uhr",
    tag: "Turnier",
  },
  {
    day: "12",
    month: "Apr",
    title: "Jahreshauptversammlung 2025",
    info: "📍 Sportheim Urlau · 19:30 Uhr · Alle Mitglieder herzlich eingeladen",
    tag: "Verein",
  },
  {
    day: "08",
    month: "Jun",
    title: "Sommerfest der Sportfreunde",
    info: "📍 Sportgelände Urlau · Ab 15:00 Uhr",
    tag: "Veranstaltung",
  },
];

export default function TermineSection() {
  return (
    <Section id="termine">
      <SectionLabel>Aktuelles</SectionLabel>
      <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold text-[#1a1a1a] leading-[1.15] mb-[0.9rem]">
        Termine &amp; Veranstaltungen
      </h2>
      <p className="text-[#4a5260] text-[0.98rem] leading-[1.75] max-w-[540px] mb-[2.8rem]">
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
