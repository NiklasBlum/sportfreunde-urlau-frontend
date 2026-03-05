import SectionLabel from "@/components/atoms/SectionLabel";
import VorstandCard from "@/components/molecules/VorstandCard";
import Section from "../atoms/Section";

const vorstand = [
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
    <Section id="vorstand" className="bg-[#7a0b14]">
      <SectionLabel light>Führung</SectionLabel>
      <h2 className="font-serif text-[clamp(1.9rem,3.2vw,2.7rem)] font-bold text-white leading-[1.15] mb-[0.9rem]">
        Unser Vorstand
      </h2>
      <p className="text-[#f0dde0] text-[0.98rem] leading-[1.75] mb-[2.8rem]">
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
        <p className="text-[#f0dde0] text-[0.95rem] mb-2">
          Nachricht an den Vorstand
        </p>
        <a
          href="mailto:vorstand@sportfreunde-urlau.de"
          className="text-white font-semibold underline underline-offset-4 hover:text-[#f0dde0] transition-colors"
        >
          vorstand@sportfreunde-urlau.de
        </a>
      </div>
    </Section>
  );
}
