import type { Metadata } from "next";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";

export const metadata: Metadata = {
  title: "Downloads – Sportfreunde Urlau e.V.",
  description:
    "Satzung, Chronik und weitere Dokumente der Sportfreunde Urlau e.V. zum Herunterladen.",
};

interface Dokument {
  label: string;
  description: string;
  href: string;
  filename: string;
}

interface Kategorie {
  id: string;
  title: string;
  subtitle: string;
  docs: Dokument[];
}

const kategorien: Kategorie[] = [
  {
    id: "satzung",
    title: "Satzung",
    subtitle: "Rechtliche Grundlagen des Vereins",
    docs: [
      {
        label: "Vereinssatzung",
        description: "Satzung der Sportfreunde Urlau e.V. (Stand 2022)",
        href: "https://sportfreunde-urlau.de/tl_files/spfreundeurlau/Vorstand/Ab%20Maerz%202023/Satzung%20SFU%202022.pdf",
        filename: "Satzung_SFU_2022.pdf",
      },
      {
        label: "Jugendordnung",
        description: "Jugendsatzung der Sportfreunde Urlau e.V.",
        href: "https://sportfreunde-urlau.de/tl_files/spfreundeurlau/Vorstand/Ab%20Maerz%202023/Jugendordnung.pdf",
        filename: "Jugendordnung.pdf",
      },
    ],
  },
  {
    id: "chronik",
    title: "Chronik",
    subtitle: "Geschichte des Vereins",
    docs: [
      {
        label: "Chronik 50 Jahre SFU",
        description:
          "Die Vereinschronik der Sportfreunde Urlau zum 50-jährigen Jubiläum",
        href: "https://sportfreunde-urlau.de/tl_files/spfreundeurlau/Vorstand/Ab%20Maerz%202023/Chronik%2050%20Jahre%20SFU%20DIN%20A4-komprimiert.pdf",
        filename: "Chronik_50_Jahre_SFU.pdf",
      },
    ],
  },
  {
    id: "formulare",
    title: "Formulare & Pläne",
    subtitle: "Wichtige Dokumente für Mitglieder",
    docs: [
      {
        label: "Beitrittserklärung",
        description: "Beitrittserklärung Sportfreunde Urlau e.V. (Stand 2022)",
        href: "https://sportfreunde-urlau.de/tl_files/spfreundeurlau/Vorstand/Beitrittserklaerung%202022.pdf",
        filename: "Beitrittserklaerung_2022.pdf",
      },
      {
        label: "Hallenbelegungsplan",
        description: "Hallenbelegungsplan der Sportfreunde Urlau (2023)",
        href: "https://sportfreunde-urlau.de/tl_files/spfreundeurlau/Vorstand/Ab%20Maerz%202023/Hallenbelegungsplan_2023.pdf",
        filename: "Hallenbelegungsplan_2023.pdf",
      },
    ],
  },
];

export default function DownloadsPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* Hero */}
        <Section className="bg-blue">
          <SectionLabel light>Verein</SectionLabel>
          <Headline level="h1" light>
            Downloads
          </Headline>
          <p className="text-red-tint text-body">
            Satzung, Chronik und weitere Dokumente der Sportfreunde Urlau e.V.
            zum Herunterladen.
          </p>
        </Section>

        {/* Document sections */}
        <Section className="bg-surface border-t border-black/6">
          <div className="flex flex-col gap-12">
            {kategorien.map(({ id, title, subtitle, docs }) => (
              <div key={id} id={id}>
                <SectionLabel>{subtitle}</SectionLabel>
                <Headline level="h2">{title}</Headline>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {docs.map(({ label, description, href, filename }) => (
                    <a
                      key={filename}
                      href={href}
                      download={filename}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col justify-between gap-4 bg-white rounded-xl border border-black/6 px-5 py-5 hover:bg-surface-hover-warm hover:-translate-y-0.5 transition-all duration-150"
                    >
                      <div className="flex items-start gap-3">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-red-accent/8 flex items-center justify-center mt-0.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-5 h-5 text-red-accent"
                            aria-hidden="true"
                          >
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold text-[0.95rem] text-foreground group-hover:text-red-accent transition-colors duration-150 leading-snug">
                            {label}
                          </div>
                          <div className="text-[0.8rem] text-muted mt-1 leading-snug">
                            {description}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-[0.75rem] font-semibold text-red-accent self-end">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3.5 h-3.5"
                          aria-hidden="true"
                        >
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                          <polyline points="7 10 12 15 17 10" />
                          <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        PDF herunterladen
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
