import Image from "next/image";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";

interface AusschussMitglied {
  role: string;
  name: string;
}

interface AusschussGruppe {
  label: string;
  members: AusschussMitglied[];
}

const gruppen: AusschussGruppe[] = [
  {
    label: "Vorstand",
    members: [
      { role: "1. Vorsitzender", name: "Michael Tronsberg" },
      { role: "1. stellv. Vorsitzende", name: "Simone Breins" },
      { role: "2. stellv. Vorsitzender", name: "Hans Bauer" },
      { role: "1. Kassierin", name: "Martina Dorn" },
      { role: "stellv. Kassier", name: "Thomas Krug" },
      { role: "Gerätewart", name: "Ingolf Milius" },
      { role: "Schriftführerin", name: "Erika Peter" },
    ],
  },
  {
    label: "Abteilungsleitung",
    members: [
      { role: "Tischtennis", name: "Ulrich Jechle" },
      { role: "Sportmädels", name: "Tanja Ruf" },
      { role: "Langlauf", name: "Manfred Heinz" },
      { role: "Mutter-Kindturnen", name: "Anastasia Wirtz" },
      { role: "Kinderturnen", name: "Marion Reischmann" },
      { role: "Eltern-Kindturnen", name: "Natalie Doser" },
      { role: "Radsport Herren (VFB)", name: "Roland Krug" },
      { role: "M&M-Mädels", name: "Tanja Heinz" },
      { role: "Piano", name: "Hermine Oettinger" },
      { role: "Winter-Volleyballer", name: "Michael Tronsberg" },
    ],
  },
  {
    label: "Jugend",
    members: [
      { role: "Jugendleiterin", name: "Franziska Kolros" },
      { role: "Jugendsprecherin", name: "Luana Peter" },
    ],
  },
];

export default function AusschussSection() {
  return (
    <Section id="ausschuss" className="bg-surface border-t border-black/6">
      {/* Header row: text + image side by side on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-12">
        <div>
          <SectionLabel>Gremium</SectionLabel>
          <Headline level="h2">Ausschuss</Headline>
          <p className="text-muted text-[0.98rem] leading-[1.75] max-w-xl">
            Der Ausschuss leitet gemeinsam die Geschicke der Sportfreunde Urlau.
          </p>
        </div>
        <div className="relative w-full rounded-2xl overflow-hidden border border-black/6">
          <Image
            src="/commitee.webp"
            alt="Ausschuss der Sportfreunde Urlau"
            width={1200}
            height={800}
            className="w-full h-auto object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Groups grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gruppen.map(({ label, members }) => (
          <div key={label}>
            <h3 className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-red-accent mb-3 flex items-center gap-2.5 before:content-[''] before:w-5.5 before:h-0.5 before:bg-gold">
              {label}
            </h3>
            <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/6 h-fit">
              {members.map(({ role, name }) => (
                <div
                  key={role}
                  className="flex flex-col bg-white px-4 py-3 gap-0.5"
                >
                  <span className="text-[0.72rem] text-muted uppercase tracking-[0.08em] font-semibold leading-none">
                    {role}
                  </span>
                  <span className="font-semibold text-[0.93rem] text-foreground">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
