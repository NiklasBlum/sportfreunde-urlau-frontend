import { client } from "./client";

export type MtbTour = {
  _id: string;
  date: string;
  route: string | null;
  departureTime: string | null;
  status: "tour" | "cancelled" | "pause";
  season: number;
};

export async function getMtbTours(season?: number): Promise<MtbTour[]> {
  const filter = season
    ? `_type == "vfbHerren" && season == ${season}`
    : `_type == "vfbHerren"`;

  return client.fetch(
    `*[${filter}] | order(date asc) {
      _id,
      date,
      route,
      departureTime,
      status,
      season
    }`,
  );
}
