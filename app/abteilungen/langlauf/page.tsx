import type { Metadata } from "next";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";
import AbteilungLinkSection from "@/components/molecules/AbteilungLinkSection";
import Link from "next/link";
import { Card } from "@/components/atoms/Card";

export const metadata: Metadata = {
  title: "Langlauf – Sportfreunde Urlau e.V.",
  description:
    "Fit durch den Winter – Langlauf und Loipenpflege im Urlauer Raum. Montags ab 19:00 Uhr in der Dorfhalle.",
};

const betreuer = ["Manne", "Josef", "Norbert", "Gerhard"];

const loipenBericht = {
  stand: "11.01.2026, 14:00 Uhr",
  loipen: [
    { name: "Fetzach-Loipe (6,5 km)", gespurt: "11.01.26", zustand: "0/–" },
    {
      name: "Missen-Loipe (8 km)",
      gespurt: "–",
      zustand: "aktuell nicht möglich",
    },
    {
      name: "Märchenwald-Loipe Herlazhofen (6,5 km)",
      gespurt: "verkürzt gesp.",
      zustand: "-",
    },
  ],
};

export default function LanglaufPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-blue">
        <SectionLabel light>Abteilung</SectionLabel>
        <Headline level="h1" light>
          Langlauf
        </Headline>
        <p className="text-red-tint text-body">
          Unsere ehrenamtlichen Loipenbetreuer halten die Urlauer Loipen so gut
          wie möglich in Schuss.
        </p>
        <p className="text-red-tint text-body">
          Fit durch den Winter – ab November montags um 19:00 Uhr in der
          Dorfhalle.
        </p>
      </Section>

      {/* Loipenzustandsbericht */}
      <Section className="bg-surface border-t border-b border-black/6">
        <SectionLabel>Liopennetz</SectionLabel>
        <Headline level="h2">Loipenzustandsbericht</Headline>
        <p className="text-caption text-muted mb-5">
          Stand: {loipenBericht.stand}
        </p>
        <div className="overflow-hidden rounded-xl border-2 border-black/6 mb-6">
          <table className="w-full text-body-xs">
            <thead>
              <tr className="bg-red-dark text-white">
                <th className="text-left px-4 py-3 font-semibold">Loipe</th>
                <th className="text-left px-4 py-3 font-semibold whitespace-nowrap">
                  Gespurt am
                </th>
                <th className="text-left px-4 py-3 font-semibold">Zustand</th>
              </tr>
            </thead>
            <tbody>
              {loipenBericht.loipen.map(({ name, gespurt, zustand }, i) => (
                <tr
                  key={name}
                  className={`border-t border-black/6 ${
                    i % 2 === 0 ? "bg-white" : "bg-surface"
                  }`}
                >
                  <td className="px-4 py-3 text-muted">{name}</td>
                  <td className="px-4 py-3 text-foreground whitespace-nowrap">
                    {gespurt}
                  </td>
                  <td className="px-4 py-3 text-foreground">{zustand}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Hinweise */}
      <Section>
        <SectionLabel>Loipeninfo</SectionLabel>
        <Headline level="h2">Hinweise zur Nutzung</Headline>
        <div className="flex flex-wrap gap-4 ">
          <Card type="default" className="bg-surface">
            <p>Liebe Langlauffreunde,</p>
            <p>
              aktuell kommen wir mit dem &bdquo;neuen&ldquo; breiteren Spurgerät
              noch nicht über die Eschabrücke beim Fallenstock. Vom Sportplatz
              bis zur Falle ist deshalb &bdquo;Selberspuren&ldquo; angesagt.
              Märchenwald ist wegen Schneebruch und Schneebruchgefahr nicht
              passierbar.
            </p>
            <p>
              Die Loipen sind diesen Winter nicht gekennzeichnet, aber die
              &bdquo;Oihoimische&ldquo; kennen sich ja aus.
            </p>
            <p className=" ">
              Unser Loipensystem ist auf <strong>Links</strong> ausgelegt – wer
              die linken Spuren benutzt, ist automatisch in der korrekten
              Laufrichtung unterwegs.
            </p>
          </Card>

          <Card type="hint">
            Bei Schneefall aktuelle Informationen zum Spurzustand auf dieser
            Seite nachlesen. Die Loipenbetreuer aktualisieren den Zustand
            regelmäßig.
          </Card>
        </div>

        {/* Links */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="http://wetterstationen.meteomedia.de/messnetz/forecast/109450.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-surface border border-black/6 rounded-lg px-4 py-2 text-body-xs font-semibold text-foreground hover:text-red-accent transition-colors"
          >
            Wetter Urlau →
          </Link>
          <Link
            href="http://www.allgaeu-cam.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-surface border border-black/6 rounded-lg px-4 py-2 text-body-xs font-semibold text-foreground hover:text-red-accent transition-colors"
          >
            Allgäu-Cam →
          </Link>
          <Link
            href="http://www.loipen-allgaeu.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-surface border border-black/6 rounded-lg px-4 py-2 text-body-xs font-semibold text-foreground hover:text-red-accent transition-colors"
          >
            Loipen Allgäu →
          </Link>
          <Link
            href="http://www.leutkirch.de/Loipenbericht"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-surface border border-black/6 rounded-lg px-4 py-2 text-body-xs font-semibold text-foreground hover:text-red-accent transition-colors"
          >
            Loipenbericht Leutkirch →
          </Link>
        </div>
      </Section>

      {/* Übungszeiten & Loipenbetreuer */}
      <Section className="bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Übungszeiten */}
          <div>
            <SectionLabel>Übungszeiten</SectionLabel>
            <Headline level="h2">Trainingszeiten</Headline>
            <div className="bg-background rounded-xl p-6 border border-black/6">
              <div className="font-serif font-bold text-red-dark text-[1.05rem] mb-4">
                November – März
              </div>
              <ul className="flex flex-col gap-2.5">
                <li className="flex items-baseline gap-3 text-body-xs">
                  <span className="font-semibold text-foreground whitespace-nowrap">
                    Montags, 19:00 Uhr
                  </span>
                  <span className="text-muted">Fit durch den Winter</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Loipenbetreuer */}
          <div>
            <SectionLabel>Kontakt</SectionLabel>
            <Headline level="h2">Loipenbetreuer</Headline>
            <div className="bg-background rounded-xl p-6 border border-black/6">
              <p className="text-body-xs text-muted mb-4">
                Unsere begeisterten Langläufer pflegen die Loipen ehrenamtlich.
                Sollte die Spur nicht olympischen Anforderungen entsprechen –
                bitte Nachsicht!
              </p>
              <div className="flex flex-wrap gap-2">
                {betreuer.map((name) => (
                  <span
                    key={name}
                    className="bg-surface border border-black/6 rounded-lg px-3 py-1.5 text-body-xs font-semibold text-foreground"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Back */}
      <AbteilungLinkSection />
    </>
  );
}
