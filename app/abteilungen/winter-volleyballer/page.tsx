import type { Metadata } from "next";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import AbteilungLinkSection from "@/components/molecules/AbteilungLinkSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Winter-Volleyballer – Sportfreunde Urlau e.V.",
  description:
    "Volleyball in der Wintersaison von Anfang Oktober bis Ende März – montags 20–22 Uhr. Unterabteilung der Radsportabteilung.",
};

export default function WinterVolleyballerPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-blue">
        <SectionLabel light>Abteilung</SectionLabel>
        <Headline level="h1" light>
          Winter-Volleyballer
        </Headline>
        <p className="text-red-tint text-body">
          Volleyball in der Wintersaison von Anfang Oktober bis Ende März.
          Unterabteilung der{" "}
          <Link
            href="/abteilungen/radsport-herren"
            className="text-red-accent font-semibold underline underline-offset-2 hover:text-red-dark focus-visible:ring-3 focus-visible:ring-[--color-gold-highlight] rounded-sm"
          >
            Radsportabteilung
          </Link>
          .
        </p>
      </Section>

      {/* Übungszeiten & Kontakt */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Übungszeiten */}
          <div>
            <SectionLabel>Übungszeiten</SectionLabel>
            <Headline level="h2">Trainingszeiten</Headline>
            <div className="bg-surface rounded-xl p-6 border border-black/6">
              <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                Oktober – März
              </div>
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-baseline gap-3 text-body-xs">
                  <span className="font-semibold text-foreground whitespace-nowrap">
                    Montags, 20:00 – 22:00 Uhr
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <SectionLabel>Kontakt</SectionLabel>
            <Headline level="h2">Ansprechpartner</Headline>
            <div className="flex flex-col gap-3">
              {[
                { name: "Michael Tronsberg", role: "Ansprechpartner" },
                {
                  name: "Roland Krug",
                  role: "Abteilungsleiter Radsport",
                },
              ].map(({ name, role }) => (
                <div
                  key={name}
                  className="bg-surface rounded-xl p-5 border border-black/6 flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-red-dark/10 flex items-center justify-center text-[1.3rem] shrink-0">
                    🏐
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-body-sm">
                      {name}
                    </div>
                    <div className="text-label text-muted uppercase tracking-[0.08em] font-semibold mt-0.5">
                      {role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Back */}
      <AbteilungLinkSection />
    </>
  );
}
