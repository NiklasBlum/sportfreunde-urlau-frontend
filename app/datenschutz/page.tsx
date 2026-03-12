import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";

export const metadata: Metadata = {
  title: "Datenschutz – Sportfreunde Urlau e.V.",
  description:
    "Datenschutzerklärung der Sportfreunde Urlau e.V. gemäß DSGVO und BDSG.",
};

interface DsAbschnitt {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  note?: string;
  externalLinks?: { label: string; href: string }[];
}

const abschnitte: DsAbschnitt[] = [
  {
    id: "verantwortlicher",
    title: "1. Verantwortlicher",
    paragraphs: [
      "Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze sowie sonstiger datenschutzrechtlicher Bestimmungen ist:",
      "Sportfreunde Urlau e.V.\nVertreten durch: Michael Tronsberg (1. Vorsitzender)\nAnschrift: Urlau, 88410 Bad Wurzach, Deutschland\nE-Mail: info@sportfreunde-urlau.de",
    ],
  },
  {
    id: "grundsaetze",
    title: "2. Grundsätze der Datenverarbeitung",
    paragraphs: [
      "Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf unserer Website gemäß der Datenschutz-Grundverordnung (DSGVO) sowie dem Bundesdatenschutzgesetz (BDSG).",
      "Personenbezogene Daten werden von uns nur im notwendigen Umfang und ausschließlich zu den nachfolgend genannten Zwecken verarbeitet. Eine Nutzung Ihrer Daten zu anderen Zwecken oder eine Weitergabe an Dritte ohne Ihre Einwilligung findet – soweit in dieser Erklärung nicht anders angegeben – nicht statt.",
    ],
  },
  {
    id: "hosting",
    title: "3. Hosting – Vercel Inc.",
    paragraphs: [
      "Diese Website wird gehostet von Vercel Inc., 340 Pine Street, Suite 603, San Francisco, CA 94104, USA.",
      "Beim Aufruf unserer Website erfasst Vercel automatisch sogenannte Server-Log-Dateien, die Ihr Browser übermittelt. Zu diesen Daten gehören:",
    ],
    bullets: [
      "IP-Adresse des anfragenden Geräts",
      "Datum und Uhrzeit der Serveranfrage",
      "Name und URL der abgerufenen Ressource",
      "Verwendeter Browser und Betriebssystem",
      "Referrer-URL (zuvor besuchte Seite)",
      "HTTP-Statuscode",
    ],
    note: "Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und nach kurzer Zeit automatisch gelöscht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren, stabilen und fehlerfreien Bereitstellung unserer Website).\n\nVercel verarbeitet Daten ggf. in den USA. Zwischen uns und Vercel besteht ein Auftragsverarbeitungsvertrag (Data Processing Agreement) gemäß Art. 28 DSGVO. Die Übermittlung personenbezogener Daten in die USA erfolgt auf Grundlage der Standardvertragsklauseln der EU-Kommission gemäß Art. 46 Abs. 2 lit. c DSGVO.",
    externalLinks: [
      {
        label: "Datenschutzerklärung von Vercel",
        href: "https://vercel.com/legal/privacy-policy",
      },
    ],
  },
  {
    id: "google-fonts",
    title: "4. Google Fonts",
    paragraphs: [
      "Diese Website verwendet Google Fonts, einen Dienst der Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google Fonts ermöglicht die Einbindung externer Schriftarten.",
      "Beim Laden einer Seite stellt Ihr Browser eine direkte Verbindung zu Googles Servern her, um die benötigten Schriftarten herunterzuladen. Dabei wird Ihre IP-Adresse an Google übermittelt. Wir haben keinen Einfluss auf die anschließende Datenverarbeitung durch Google.",
      "Die Einbindung von Google Fonts erfolgt auf Grundlage unseres berechtigten Interesses an einer einheitlichen und ansprechenden Darstellung unserer Website (Art. 6 Abs. 1 lit. f DSGVO). Soweit eine Einwilligung eingeholt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.",
    ],
    externalLinks: [
      {
        label: "Datenschutzerklärung von Google",
        href: "https://policies.google.com/privacy",
      },
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies und Tracking",
    paragraphs: [
      "Diese Website verwendet keine Tracking-Cookies und verzichtet vollständig auf den Einsatz von Webanalyse-Diensten (z. B. Google Analytics, Matomo o. Ä.).",
      "Es werden keine Nutzerprofile erstellt und keine Nutzungsdaten zu Werbezwecken erhoben oder an Dritte weitergegeben.",
    ],
  },
  {
    id: "kontakt",
    title: "6. Kontaktaufnahme per E-Mail",
    paragraphs: [
      "Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben – einschließlich der von Ihnen angegebenen Kontaktdaten – zwecks Bearbeitung Ihrer Anfrage und für den Fall von Rückfragen bei uns gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.",
      "Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung eingehender Anfragen) bzw. Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf den Abschluss eines Vertrags gerichtet ist. Die Daten werden gelöscht, sobald die Aufbewahrung nicht mehr erforderlich ist, spätestens nach vollständiger Abwicklung des Anliegens.",
    ],
  },
  {
    id: "betroffenenrechte",
    title: "7. Rechte der betroffenen Person",
    paragraphs: [
      "Ihnen stehen gegenüber uns folgende Rechte hinsichtlich Ihrer personenbezogenen Daten zu:",
    ],
    bullets: [
      "Recht auf Auskunft über die verarbeiteten Daten (Art. 15 DSGVO)",
      "Recht auf Berichtigung unrichtiger Daten (Art. 16 DSGVO)",
      "Recht auf Löschung ('Recht auf Vergessenwerden', Art. 17 DSGVO)",
      "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
      "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
      "Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)",
      "Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)",
    ],
    note: "Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an die oben genannte Kontaktadresse des Verantwortlichen.",
  },
  {
    id: "beschwerderecht",
    title: "8. Beschwerderecht bei der Aufsichtsbehörde",
    paragraphs: [
      "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren (Art. 77 DSGVO). Die zuständige Aufsichtsbehörde ist:",
      "Der Landesbeauftragte für Datenschutz und Informationsfreiheit Baden-Württemberg (LfDI BW)\nLautenschlagerstraße 20\n70173 Stuttgart\nTelefon: +49 711 615541-0\nE-Mail: poststelle@lfdi.bwl.de",
    ],
    externalLinks: [
      {
        label: "www.baden-wuerttemberg.datenschutz.de",
        href: "https://www.baden-wuerttemberg.datenschutz.de",
      },
    ],
  },
  {
    id: "aktualitaet",
    title: "9. Aktualität und Änderung dieser Datenschutzerklärung",
    paragraphs: [
      "Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher oder behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Version ist jederzeit auf dieser Seite abrufbar.",
    ],
  },
];

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* Hero */}
        <Section className="bg-blue">
          <SectionLabel light>Rechtliches</SectionLabel>
          <Headline level="h1">Datenschutz</Headline>
          <p className="text-red-tint text-[1rem] leading-[1.75]">
            Datenschutzerklärung gemäß DSGVO und BDSG – Sportfreunde Urlau e.V.
          </p>
        </Section>

        {/* Abschnitte */}
        <Section className="bg-surface border-t border-b border-black/6">
          <SectionLabel>Datenschutzerklärung</SectionLabel>
          <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-foreground leading-[1.15] mb-8">
            Informationen zur Datenverarbeitung
          </h2>

          <div className="flex flex-col gap-4 max-w-3xl">
            {abschnitte.map(
              ({ id, title, paragraphs, bullets, note, externalLinks }) => (
                <article
                  key={id}
                  id={id}
                  className="bg-white rounded-xl p-6 border border-black/6"
                >
                  <h3 className="font-semibold text-foreground text-[0.95rem] mb-3">
                    {title}
                  </h3>

                  {paragraphs?.map((p, i) => (
                    <p
                      key={i}
                      className="text-[0.88rem] text-muted leading-[1.75] mb-3 whitespace-pre-line"
                    >
                      {p}
                    </p>
                  ))}

                  {bullets && bullets.length > 0 && (
                    <ul className="list-disc list-outside pl-5 mb-3 flex flex-col gap-1">
                      {bullets.map((item) => (
                        <li
                          key={item}
                          className="text-[0.88rem] text-muted leading-[1.7]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {note && (
                    <p className="text-[0.88rem] text-muted leading-[1.75] whitespace-pre-line">
                      {note}
                    </p>
                  )}

                  {externalLinks && externalLinks.length > 0 && (
                    <div className="mt-3 flex flex-col gap-1">
                      {externalLinks.map(({ label, href }) => (
                        <Link
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[0.82rem] text-red-accent underline underline-offset-2 hover:text-red-dark transition-colors duration-150"
                        >
                          {label} ↗
                        </Link>
                      ))}
                    </div>
                  )}
                </article>
              ),
            )}
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
