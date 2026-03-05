export interface Abteilung {
  icon: string;
  name: string;
  slug: string;
}

export const abteilungen: Abteilung[] = [
  { icon: "🏓", name: "Tischtennis", slug: "tischtennis" },
  { icon: "🤸", name: "Sportmädels", slug: "sportmaedels" },
  { icon: "👨‍👩‍👧", name: "Eltern-Kind-Turnen", slug: "eltern-kind-turnen" },
  { icon: "🚴", name: "Radsport Herren (VFB)", slug: "radsport-herren-vfb" },
  { icon: "🚵‍♀️", name: "MTB-Ladies", slug: "mtb-ladies" },
  { icon: "🏐", name: "Winter-Volleyballer", slug: "winter-volleyballer" },
  { icon: "💃", name: "Mittwochsmädels", slug: "mittwochsmaedels" },
  { icon: "🧒", name: "Kinderturnen", slug: "kinderturnen" },
  { icon: "🎹", name: "Piano", slug: "piano" },
  { icon: "⛷️", name: "Langlauf", slug: "langlauf" },
];
