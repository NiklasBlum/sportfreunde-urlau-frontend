import VorstandCard from "@/components/molecules/VorstandCard";
import Section from "../atoms/Section";
import { Headline } from "../atoms/Headline";
import Link from "next/link";
import { EmailLink } from "../atoms/EmailLink";

export const vorstand = [
  {
    role: "1. Vorsitzender",
    name: "Michael Tronsberg",
    avatar: "/people/michael_tronsberg.png",
  },
  {
    role: "1. stellv. Vorsitzende",
    name: "Simone Breins",
    avatar: "/people/simone_breins.png",
  },
  {
    role: "2. stellv. Vorsitzender",
    name: "Hans Bauer",
    avatar: "/people/hans_bauer.png",
  },
  {
    role: "Kassierin",
    name: "Martina Dorn",
    avatar: "/people/martina_dorn.png",
  },
  {
    role: "stellv. Kassier",
    name: "Thomas Krug",
    avatar: "/people/thomas_krug.png",
  },
  {
    role: "Schriftführerin",
    name: "Erika Peter",
    avatar: "/people/erika_peter.png",
  },
];

export default function VorstandSection() {
  return (
    <Section id="vorstand">
      <Headline level="h2">Unser Vorstand</Headline>

      <p className="text-body mb-11">
        Die Sportfreunde Urlau werden von einem engagierten Vorstandsteam
        geleitet.
      </p>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-6">
        {vorstand.map((v) => (
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
