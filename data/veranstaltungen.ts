interface Veranstaltung {
  day: string;
  month: string;
  title: string;
  info: string;
  tag: string;
  href?: string;
}

export const VERANSTALTUNGEN: Veranstaltung[] = [
  {
    day: "14",
    month: "Jun",
    title: "9-Meter-Turnier",
    info: "📍 Urlauer Bahndamm–Arena",
    tag: "Turnier",
  },
  {
    day: "20",
    month: "Mär",
    title: "Jahreshauptversammlung 2026",
    info: "📍 Dorfhalle Urlau · Mit Vorstandswahlen und Abteilungsberichten",
    tag: "Verein",
    href: "/veranstaltungen/jahreshauptversammlung_2026",
  },
  {
    day: "17",
    month: "März",
    title: "Abteilungsversammlung Tischtennis",
    info: "📍 Sporthalle Stube Urlau · 19:30 Uhr · Alle Mitglieder sind herzlich eingeladen",
    tag: "Verein",
  },
  {
    day: "14",
    month: "Feb",
    title: "Faschingsnachmittag",
    info: "📍 Sporthalle Urlau · 14:00 Uhr",
    tag: "Veranstaltung",
  },
];
