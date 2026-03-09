import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";

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
      <Navbar />

      <main id="main-content">
        {/* Hero */}
        <Section className="bg-[#7a0b14]">
          <SectionLabel light>Abteilung</SectionLabel>
          <h1 className="font-serif text-[clamp(2.4rem,4.5vw,3.6rem)] font-bold text-white leading-[1.1] mb-4">
            <span className="mr-4" aria-hidden="true">
              🏓
            </span>
            Tischtennis
          </h1>
          <p className="text-[#f0dde0] text-[1rem] leading-[1.75] ">
            Wettkampfsport und Freizeitspiel für jedes Alter – von den Bambinis
            bis zu den Aktiven.
          </p>
        </Section>

        {/* Training & Contact */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Training times */}
            <div>
              <SectionLabel>Training</SectionLabel>
              <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-[#1a1a1a] leading-[1.15] mb-8">
                Trainingszeiten
              </h2>
              <div className="flex flex-col gap-6">
                {trainingDays.map(({ day, slots }) => (
                  <div
                    key={day}
                    className="bg-[#f2eeeb] rounded-xl p-6 border border-black/[0.06]"
                  >
                    <div className="font-serif font-bold text-[#7a0b14] text-[1.05rem] mb-4">
                      {day}
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {slots.map(({ time, label }) => (
                        <li
                          key={time}
                          className="flex items-baseline gap-3 text-[0.9rem]"
                        >
                          <span className="font-semibold text-[#1a1a1a] tabular-nums whitespace-nowrap">
                            {time}
                          </span>
                          <span className="text-[#4a5260]">{label}</span>
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
              <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-[#1a1a1a] leading-[1.15] mb-8">
                Abteilungsleiter
              </h2>
              <div className="bg-[#f2eeeb] rounded-xl p-6 border border-black/[0.06]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#7a0b14]/10 flex items-center justify-center text-[1.5rem]">
                    🏓
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a1a1a] text-[1rem]">
                      Jakob Butscher
                    </div>
                    <div className="text-[0.8rem] text-[#4a5260] uppercase tracking-[0.1em] font-semibold mt-0.5">
                      Abteilungsleiter Tischtennis
                    </div>
                  </div>
                </div>
                <a
                  href="mailto:jakob.butscher@web.de"
                  className="inline-flex items-center gap-2 text-[#b00e1b] font-semibold text-[0.9rem] hover:underline"
                >
                  jakob.butscher@web.de
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Teams */}
        <Section className="bg-[#f2eeeb] border-t border-b border-black/[0.06]">
          <SectionLabel>Saison 2025/2026</SectionLabel>
          <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-[#1a1a1a] leading-[1.15] mb-8">
            Mannschaften
          </h2>
          <div className="flex flex-col gap-px bg-black/[0.06] rounded-xl overflow-hidden border border-black/[0.08]">
            {mannschaften.map(({ name, liga, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white px-6 py-4 no-underline group hover:bg-[#fff8f8] transition-colors duration-150"
              >
                <div>
                  <span className="font-semibold text-[0.95rem] text-[#1a1a1a] group-hover:text-[#b00e1b] transition-colors">
                    {name}
                  </span>
                  <span className="ml-3 text-[0.85rem] text-[#4a5260]">
                    {liga}
                  </span>
                </div>
                <span className="text-[#b00e1b] text-[0.8rem] font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">
                  Spielplan →
                </span>
              </a>
            ))}
          </div>
        </Section>

        {/* Back */}
        <Section>
          <Link
            href="/#abteilungen"
            className="inline-flex items-center gap-2 text-[#b00e1b] font-semibold text-[0.9rem] hover:underline"
          >
            ← Alle Abteilungen
          </Link>
        </Section>
      </main>
      <Footer />
    </>
  );
}
