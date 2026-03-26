import Image from "next/image";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import { abteilungen } from "@/data/abteilungen";
import { VORSTAND } from "@/data/vorstand";

interface AusschussMitglied {
  role: string;
  leader: string;
}

interface AusschussGruppe {
  label: string;
  members: AusschussMitglied[];
}

const gruppen: AusschussGruppe[] = [
  {
    label: "Vorstand",
    
    members: VORSTAND.map(({ role, name }) => ({
      role,
      leader: name,
    })),
  },
  {
    label: "Abteilungsleitung",
    members: abteilungen.map(({ name, leader }) => ({
      role: name,
      leader,
    })),
  },
  {
    label: "Jugend",
    members: [
      { role: "Jugendleiterin", leader: "Franziska Kolros" },
      { role: "Jugendsprecherin", leader: "Luana Peter" },
    ],
  },
];

export default function AusschussSection() {
  return (
    <Section id="ausschuss" className="bg-surface border-t border-black/6">
      {/* Header row: text + image side by side on lg */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center mb-12">
        <div>
          <Headline level="h2">Ausschuss</Headline>
          <p className="text-muted text-body">
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
            <SectionLabel>{label}</SectionLabel>

            <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/6 h-fit">
              {members.map(({ role, leader: name }) => (
                <div
                  key={role}
                  className="flex flex-col bg-white px-4 py-3 gap-0.5"
                >
                  <span className="text-label text-muted uppercase tracking-[0.08em] font-semibold leading-none">
                    {role}
                  </span>
                  <span className="font-semibold text-body-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
