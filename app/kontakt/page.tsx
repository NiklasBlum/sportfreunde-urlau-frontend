import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/organisms/Navbar";
import Footer from "@/components/organisms/Footer";
import SectionLabel from "@/components/atoms/SectionLabel";
import Section from "@/components/atoms/Section";
import { Headline } from "@/components/atoms/Headline";

export const metadata: Metadata = {
  title: "Kontakt – Sportfreunde Urlau e.V.",
  description:
    "Nehmen Sie Kontakt mit den Sportfreunden Urlau e.V. auf – Adresse, E-Mail und Ansprechpartner.",
};

const kontaktKarten = [
  {
    icon: (
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
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Adresse",
    lines: ["Sportfreunde Urlau e.V.", "Urlau", "88410 Bad Wurzach"],
    href: "https://maps.google.com/?q=Urlau",
    hrefLabel: "In Google Maps öffnen",
  },
  {
    icon: (
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
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "E-Mail Vorstand",
    lines: ["vorstand@sportfreunde-urlau.de"],
    href: "mailto:vorstand@sportfreunde-urlau.de",
    hrefLabel: "E-Mail schreiben",
  },
  {
    icon: (
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
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    label: "1. Vorsitzender",
    lines: ["Michael Tronsberg"],
    href: "mailto:vorstand@sportfreunde-urlau.de",
    hrefLabel: "E-Mail schreiben",
  },
];

const ansprechpartner = [
  { rolle: "1. Vorsitzender", name: "Michael Tronsberg" },
  { rolle: "1. stellv. Vorsitzende", name: "Simone Breins" },
  { rolle: "2. stellv. Vorsitzender", name: "Hans Bauer" },
  { rolle: "Schriftführerin", name: "Erika Peter" },
  { rolle: "Webmaster", name: "Niklas Blum" },
];

export default function KontaktPage() {
  return (
    <>
      <Navbar />

      <main id="main-content">
        {/* Hero */}
        <Section className="bg-blue">
          <SectionLabel light>Verein</SectionLabel>
          <Headline level="h1">Kontakt</Headline>
          <p className="text-red-tint text-[1rem] leading-[1.75] max-w-xl">
            Fragen, Anregungen oder Interesse an einer Mitgliedschaft? Wir
            freuen uns über Ihre Nachricht.
          </p>
        </Section>

        {/* Contact cards + Ansprechpartner */}
        <Section className="bg-surface border-t border-black/6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: contact info cards */}
            <div>
              <SectionLabel>Erreichbarkeit</SectionLabel>
              <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-foreground leading-[1.15] mb-6">
                So erreichen Sie uns
              </h2>
              <div className="flex flex-col gap-4">
                {kontaktKarten.map(
                  ({ icon, label, lines, href, hrefLabel }) => (
                    <div
                      key={label}
                      className="bg-white rounded-xl border border-black/6 px-5 py-5 flex items-start gap-4"
                    >
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-red-accent/8 flex items-center justify-center mt-0.5">
                        {icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-[0.72rem] font-semibold tracking-widest uppercase text-muted mb-1">
                          {label}
                        </div>
                        {lines.map((line) => (
                          <p
                            key={line}
                            className="text-[0.93rem] font-semibold text-foreground leading-snug"
                          >
                            {line}
                          </p>
                        ))}
                        <a
                          href={href}
                          target={
                            href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="inline-block mt-2 text-[0.8rem] font-semibold text-red-accent hover:underline underline-offset-2 transition-colors duration-150"
                        >
                          {hrefLabel} →
                        </a>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Right: Ansprechpartner */}
            <div>
              <SectionLabel>Ansprechpartner</SectionLabel>
              <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.2rem)] font-bold text-foreground leading-[1.15] mb-6">
                Vorstand & Verantwortliche
              </h2>
              <div className="flex flex-col gap-px bg-black/6 rounded-xl overflow-hidden border border-black/6">
                {ansprechpartner.map(({ rolle, name }) => (
                  <div
                    key={rolle}
                    className="flex flex-col sm:flex-row sm:items-center bg-white px-6 py-4 gap-1 sm:gap-6"
                  >
                    <span className="text-[0.8rem] text-muted uppercase tracking-[0.08em] font-semibold sm:w-52 shrink-0">
                      {rolle}
                    </span>
                    <span className="font-semibold text-[0.95rem] text-foreground">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[0.82rem] text-muted mt-4 leading-relaxed">
                Für abteilungsspezifische Anfragen wenden Sie sich bitte direkt
                an die jeweilige{" "}
                <Link
                  href="/#abteilungen"
                  className="text-red-accent font-semibold hover:underline underline-offset-2"
                >
                  Abteilungsleitung
                </Link>
                .
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
