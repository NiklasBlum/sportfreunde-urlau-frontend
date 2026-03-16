import { client } from "./client";

export type RadsportDamenTour = {
  _id: string;
  date: string;
  route: string | null;
  departureTime: string | null;
  status: "tour" | "cancelled" | "pause";
  season: number;
};

export async function getRadsportDamenTours(
  season?: number,
): Promise<RadsportDamenTour[]> {
  const filter = season
    ? `_type == "mtbToursLadies" && season == ${season}`
    : `_type == "mtbToursLadies"`;

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
