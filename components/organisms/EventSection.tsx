import SectionLabel from "@/components/atoms/SectionLabel";
import TerminCard from "@/components/molecules/TerminCard";
import Section from "../atoms/Section";
import { Headline } from "../atoms/Headline";
import { VERANSTALTUNGEN } from "@/data/veranstaltungen";

export default function EventSection() {
  return (
    <Section id="termine">
      <SectionLabel>Organisation</SectionLabel>

      <Headline level="h2"> Termine &amp; Veranstaltungen</Headline>

      <p className="text-muted text-body mb-11">
        Was ist bei den Sportfreunden Urlau geplant? Hier findet ihr alle
        wichtigen Termine.
      </p>
      <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/8">
        {VERANSTALTUNGEN.map((t) => (
          <TerminCard key={t.title} {...t} />
        ))}
      </div>
    </Section>
  );
}
