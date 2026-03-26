import VorstandCard from "@/components/molecules/VorstandCard";
import Section from "../atoms/Section";
import { Headline } from "../atoms/Headline";
import { EmailLink } from "../atoms/EmailLink";
import { VORSTAND } from "@/data/vorstand";



export default function VorstandSection() {
  return (
    <Section id="vorstand">
      <Headline level="h2">Unser Vorstand</Headline>

      <p className="text-body mb-11">
        Die Sportfreunde Urlau werden von einem engagierten Vorstandsteam
        geleitet.
      </p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-6">
        {VORSTAND.map((v) => (
          <VorstandCard
            key={v.role}
            role={v.role}
            name={v.name}
            avatar={v.avatar}
          />
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-body-xs mb-2">Nachricht an den Vorstand</p>

        <EmailLink email="vorstand.sportfreunde.urlau@gmail.com" />
      </div>
    </Section>
  );
}
