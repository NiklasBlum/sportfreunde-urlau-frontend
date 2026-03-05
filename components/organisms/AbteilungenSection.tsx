import SectionLabel from "@/components/atoms/SectionLabel";
import AbteilungCard from "@/components/molecules/AbteilungCard";
import { abteilungen } from "@/lib/abteilungen";
import Section from "../atoms/Section";

export default function AbteilungenSection() {
  return (
    <Section
      id="abteilungen"
      className="bg-[#f2eeeb] border-t border-b border-black/[0.06]"
    >
      <SectionLabel>Sport für alle</SectionLabel>
      <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold text-[#1a1a1a] leading-[1.15] mb-[0.9rem]">
        Unsere Abteilungen
      </h2>
      <p className="text-[#4a5260] text-[0.98rem] leading-[1.75] mb-[2.8rem]">
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
