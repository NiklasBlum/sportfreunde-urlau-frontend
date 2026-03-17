import SectionLabel from "@/components/atoms/SectionLabel";
import AbteilungCard from "@/components/molecules/AbteilungCard";
import { abteilungen } from "@/lib/abteilungen";
import Section from "../atoms/Section";
import { Headline } from "../atoms/Headline";

export default function AbteilungenSection() {
  return (
    <Section
      id="abteilungen"
      className="bg-surface border-t border-b border-black/6"
    >
      <SectionLabel>Sport für alle</SectionLabel>

      <Headline level="h2">Unsere Abteilungen</Headline>

      <p className="text-muted text-body mb-11">
        Ob Jung oder Alt, Profi oder Einsteiger – bei uns findet jeder die
        passende Sportart.
      </p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(190px,1fr))] gap-4">
        {abteilungen.map((a) => (
          <AbteilungCard
            key={a.name}
            icon={a.icon}
            name={a.name}
            href={`/abteilungen/${a.slug}`}
          />
        ))}
      </div>
    </Section>
  );
}
