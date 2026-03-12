import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";

export const metadata: Metadata = {
  title: "Radsport Herren (VFB) – Sportfreunde Urlau e.V.",
  description:
    "MTB-Touren, Trainingszeiten und Infos zur Radsport-Herrenabteilung (VFB) der Sportfreunde Urlau e.V.",
};

const uebungszeiten = [
  {
    season: "April – September",
    slots: [
      { time: "Montags", label: "MTB-Touren – Abfahrtszeiten individuell" },
    ],
  },
  {
    season: "Oktober – März",
    slots: [
      {
        time: "Montags, 20:00 – 22:00 Uhr",
        label: "Volleyball (Winterbetrieb)",
      },
    ],
  },
];

const gruppen = [
  {
    name: "MTB – Pro",
    description:
      "Fahrtechnisch und konditionell anspruchsvoll. Zum Teil mit Trail-, Trage- und Schiebepassagen.",
  },
  {
    name: "MTB – Sport",
    description:
      "Fahrtechnisch und konditionell sportlich. Zum Teil mit Trail-, Trage- und Schiebepassagen.",
  },
  {
    name: "MTB – Klassik",
    description:
      "Fahrtechnisch und konditionell gut fahrbar. Trailpassagen sind möglich. Trage- und Schiebepassagen werden möglichst vermieden. Auch für erfahrene E-Biker geeignet.",
  },
  {
    name: "MTB – Komfort / Komfort-E",
    description:
      "Fahrtechnisch und konditionell einfach. Keine Trail-, Trage- und Schiebepassagen. Für E-Biker bestens geeignet.",
  },
];

const regeln = [
  {
    title: "Helmpflicht",
    text: "Ohne Helm ist die Teilnahme an der Tour untersagt.",
  },
  {
    title: "Weisung",
    text: "Der jeweilige Guide gibt Weisungen und darf nicht überholt werden. Die Freigabe der Strecke (z. B. bergauf oder Trailabfahrten) erteilt der Guide.",
  },
  {
    title: "Verkehrssicherheit",
    text: "Jeder Teilnehmer ist für ein verkehrssicheres Rad verantwortlich. Hierzu gehören u. a. (voll aufgeladene) Lichter, voll funktionsfähige Bremsen und ordentliche Bereifung. Zudem darf nur max. zu zweit nebeneinander gefahren werden.",
  },
  {
    title: "Organisation",
    text: "Jeder sollte sich einschätzen können und bei der passenden Gruppe mitradeln. Grundsätzlich müssen sich die Teilnehmer beim Verlassen der Gruppe (während der Tour / bei Nichteinkehr in der Gaststätte) beim Guide abmelden.",
  },
  {
    title: "Verantwortung",
    text: "Jeder Teilnehmer ist für seinen Hintermann verantwortlich! Sollte die Geschwindigkeit zu hoch sein oder es eine Panne geben, dann an den Vordermann melden (bis die Info den Guide erreicht hat).",
  },
];

const tabus = [
  "Rechts überholen ist untersagt!",
  "Im Versatz rechts hinten zu fahren ist untersagt!",
  "Downhill nebeneinander zu fahren ist untersagt! Es muss bei jeder Abfahrt hintereinander mit ausreichend Abstand gefahren werden.",
  "Überholen des Guides ohne Streckenfreigabe ist untersagt. Der Guide gibt das Tempo vor.",
];

export default function RadsportHerrenPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        {/* Hero */}
        <Section className="bg-blue">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <SectionLabel light>Abteilung</SectionLabel>
              <Headline level="h1"> Radsport Herren (VFB)</Headline>

              <p className="text-red-tint text-[1rem] leading-[1.75]">
                MTB-Touren für jeden Fahrstil – von Pro bis Komfort, immer
                montags von April bis September.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="/abteilungen/vfb.webp"
                alt="Radsport Herren VFB"
                fill
                className="object-cover"
                sizes="(max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>
          </div>
        </Section>

        {/* Übungszeiten & Kontakt */}
        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Übungszeiten */}
            <div>
              <SectionLabel>Übungszeiten</SectionLabel>
              <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-foreground leading-[1.15] mb-8">
                Trainingszeiten
              </h2>
              <div className="flex flex-col gap-6">
                {uebungszeiten.map(({ season, slots }) => (
                  <div
                    key={season}
                    className="bg-surface rounded-xl p-6 border border-black/[0.06]"
                  >
                    <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                      {season}
                    </div>
                    <ul className="flex flex-col gap-2.5">
                      {slots.map(({ time, label }) => (
                        <li
                          key={time}
                          className="flex items-baseline gap-3 text-[0.9rem]"
                        >
                          <span className="font-semibold text-foreground whitespace-nowrap">
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

            {/* Kontakt */}
            <div>
              <SectionLabel>Kontakt</SectionLabel>
              <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-foreground leading-[1.15] mb-8">
                Abteilungsleiter
              </h2>
              <div className="bg-surface rounded-xl p-6 border border-black/[0.06]">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-red-dark/10 flex items-center justify-center text-[1.5rem]">
                    🚵
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-[1rem]">
                      Roland Krug
                    </div>
                    <div className="text-[0.8rem] text-muted uppercase tracking-[0.1em] font-semibold mt-0.5">
                      Abteilungsleiter Radsport
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Gruppen */}
        <Section className="bg-surface border-t border-b border-black/[0.06]">
          <SectionLabel>Gruppen</SectionLabel>
          <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-foreground leading-[1.15] mb-8">
            MTB-Gruppen
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gruppen.map(({ name, description }) => (
              <div
                key={name}
                className="bg-white rounded-xl p-6 border border-black/[0.06]"
              >
                <div className="font-serif font-bold text-red-dark text-[1rem] mb-2">
                  {name}
                </div>
                <p className="text-[0.88rem] text-muted leading-[1.65]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Regeln */}
        <Section>
          <SectionLabel>Sicherheit</SectionLabel>
          <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-foreground leading-[1.15] mb-8">
            Regeln & Tabus
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Regeln */}
            <div className="flex flex-col gap-4">
              {regeln.map(({ title, text }) => (
                <div
                  key={title}
                  className="bg-surface rounded-xl p-6 border border-black/[0.06]"
                >
                  <div className="font-semibold text-foreground text-[0.95rem] mb-1">
                    {title}
                  </div>
                  <p className="text-[0.88rem] text-muted leading-[1.65]">
                    {text}
                  </p>
                </div>
              ))}
            </div>

            {/* Tabus */}
            <div>
              <div className="bg-red-dark/5 border border-red-dark/20 rounded-xl p-6">
                <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                  Tabus
                </div>
                <ul className="flex flex-col gap-3">
                  {tabus.map((tabu) => (
                    <li
                      key={tabu}
                      className="flex items-start gap-3 text-[0.88rem] text-muted leading-[1.65]"
                    >
                      <span
                        className="mt-[0.25em] text-red-dark font-bold shrink-0"
                        aria-hidden="true"
                      >
                        ✕
                      </span>
                      {tabu}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Back */}
        <Section className="bg-surface border-t border-black/[0.06]">
          <Link
            href="/#abteilungen"
            className="inline-flex items-center gap-2 text-red-accent font-semibold text-[0.9rem] hover:underline"
          >
            ← Alle Abteilungen
          </Link>
        </Section>
      </main>
      <Footer />
    </>
  );
}
