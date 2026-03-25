export interface Abteilung {
  icon: string;
  name: string;
  slug: string;
}

export const abteilungen: Abteilung[] = [
  { icon: "👨‍👩‍👧", name: "Eltern-Kind-Turnen", slug: "eltern-kind-turnen" },
  { icon: "🧒", name: "Kinderturnen", slug: "kinderturnen" },
  { icon: "⛷️", name: "Langlauf", slug: "langlauf" },
  { icon: "💃", name: "Mittwochsmädels", slug: "mittwochsmaedels" },
  { icon: "👶", name: "Mutter-Kind-Gruppe", slug: "mutter-kind-gruppe" },
  { icon: "🤸🏻", name: "Piano", slug: "piano" },
  { icon: "🚵‍♀️", name: "Radsport Damen", slug: "radsport-damen" },
  { icon: "🚴", name: "Radsport Herren", slug: "radsport-herren" },
  { icon: "🤸", name: "Sportmädels", slug: "sportmaedels" },
  { icon: "🏓", name: "Tischtennis", slug: "tischtennis" },
  { icon: "🏐", name: "Winter-Volleyballer", slug: "winter-volleyballer" },
];
