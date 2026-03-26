export interface Abteilung {
  icon: string;
  name: string;
  slug: string;
  leader: string;
}

export const abteilungen: Abteilung[] = [
  { icon: "👨‍👩‍👧", name: "Eltern-Kind-Turnen", slug: "eltern-kind-turnen", leader: "Patricia Mathy" },
  { icon: "🧒", name: "Kinder-Turnen", slug: "kinder-turnen", leader: "Natalie Doser" },
  { icon: "⛷️", name: "Langlauf", slug: "langlauf", leader: "Manfred Heinz" },
  { icon: "💃", name: "Mittwochs-Mädels", slug: "mittwochs-maedels", leader: "Tanja Heinz" },
  { icon: "👶", name: "Mutter-Kind-Turnen", slug: "mutter-kind-turnen", leader: "Nadine Kurtalic" },
  { icon: "🤸🏻", name: "Piano", slug: "piano", leader: "Hermine Oettinger" },
  { icon: "🚵‍♀️", name: "Radsport Damen", slug: "radsport-damen", leader: "Brigitte Krug" },
  { icon: "🚴", name: "Radsport Herren", slug: "radsport-herren", leader: "Roland Krug" },
  { icon: "🤸", name: "Sportmädels", slug: "sportmaedels", leader: "Tanja Ruf" },
  { icon: "🏓", name: "Tischtennis", slug: "tischtennis", leader: "Ulrich Jechle" },
  { icon: "🏐", name: "Winter-Volleyballer", slug: "winter-volleyballer", leader: "Michael Tronsberg" },
];
