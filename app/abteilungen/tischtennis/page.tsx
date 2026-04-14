import type { Metadata } from "next";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import AbteilungLinkSection from "@/components/molecules/AbteilungLinkSection";
import { EmailLink } from "@/components/atoms/EmailLink";

export const metadata: Metadata = {
  title: "Tischtennis – Sportfreunde Urlau e.V.",
  description:
    "Trainingszeiten, Mannschaften und Infos zur Tischtennisabteilung der Sportfreunde Urlau e.V.",
};

const trainingDays = [
  {
    day: "Dienstag",
    slots: [{ time: "19:00 – 21:00 Uhr", label: "Training der Aktiven" }],
  },
  {
    day: "Freitag",
    slots: [
      { time: "17:00 – 18:00 Uhr", label: "Bambini-Training" },
      { time: "18:00 – 19:00 Uhr", label: "Jugendtraining" },
      { time: "19:00 – 22:00 Uhr", label: "Training der Aktiven" },
    ],
  },
];

const mannschaften = [
  {
    name: "Herren I",
    liga: "Kreisliga A Gr. 1 Allgäu",
    href: "https://www.mytischtennis.de/click-tt/TTBW/25--26/ligen/Erwachsene_Kreisliga_A_Gr._1/gruppe/494832/mannschaft/2960448/Erwachsene/spielerbilanzen/gesamt",
  },
  {
    name: "Herren II",
    liga: "Kreisklasse Gr. 1 Allgäu",
    href: "https://www.mytischtennis.de/click-tt/TTBW/25--26/ligen/Erwachsene_Kreisklasse_Gr._1/gruppe/494550/mannschaft/2958088/Erwachsene_II_(4er)/spielerbilanzen/gesamt",
  },
  {
    name: "Damen",
    liga: "Landesklasse Gruppe 8",
    href: "https://www.mytischtennis.de/click-tt/TTBW/25--26/ligen/Damen_Landesklasse_Gr._8/gruppe/494845/mannschaft/2960913/Damen/spielerbilanzen/gesamt",
  },
  {
    name: "Jugend",
    liga: "Kreisliga C Gr. 1",
    href: "https://www.mytischtennis.de/click-tt/TTBW/25--26/ligen/Jugend_19_Kreisliga_C_Gr._1_RR/gruppe/507798/tabelle/vr",
  },
];

export default function TischtennisPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-blue">
        <SectionLabel light>Abteilung</SectionLabel>
        <Headline level="h1" light>
          Tischtennis
        </Headline>

        <p className="text-red-tint text-body">
          Wettkampfsport und Freizeitspiel für jedes Alter – von den Bambinis
          bis zu den Aktiven.
        </p>
      </Section>

      {/* Training & Contact */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionLabel>Übungszeiten</SectionLabel>
            <Headline level="h2">Trainingszeiten</Headline>
            <div className="flex flex-col gap-6">
              {trainingDays.map(({ day, slots }) => (
                <div
                  key={day}
                  className="bg-surface rounded-xl p-6 border border-black/6"
                >
                  <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                    {day}
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {slots.map(({ time, label }) => (
                      <li
                        key={time}
                        className="flex items-baseline gap-3 text-body-xs"
                      >
                        <span className="font-semibold text-foreground tabular-nums whitespace-nowrap">
                          {time}
                        </span>
                        <span className="text-muted">{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <SectionLabel>Kontakt</SectionLabel>
            <Headline level="h2">Abteilungsleiter</Headline>
            <div className="bg-surface rounded-xl p-6 border border-black/6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-red-dark/10 flex items-center justify-center text-[1.5rem]">
                  🏓
                </div>
                <div>
                  <div className="font-semibold text-foreground text-[1rem]">
                    Jakob Butscher
                  </div>
                  <EmailLink email="jakob.butscher@web.de" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Teams */}
      <Section className="bg-surface border-t border-b border-black/6">
        <SectionLabel>Saison 2025/2026</SectionLabel>
        <Headline level="h2"> Mannschaften</Headline>

        <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/8">
          {mannschaften.map(({ name, liga, href }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-white px-6 py-4 no-underline group hover:bg-surface-hover transition-colors duration-150"
            >
              <div>
                <span className="font-semibold text-body-sm text-foreground group-hover:text-red-accent transition-colors">
                  {name}
                </span>
                <span className="ml-3 text-body-xs text-muted">{liga}</span>
              </div>
              <span className="text-red-accent text-label font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                Spielplan →
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* Back */}
      <AbteilungLinkSection />
    </>
  );
}
