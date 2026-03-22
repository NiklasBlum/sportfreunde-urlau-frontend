import { client } from "./client";

const document_id = "radsport_herren_tours";

export type RadsportHerrenTour = {
  _id: string;
  date: string;
  route: string | null;
  departureTime: string | null;
  status: "tour" | "cancelled" | "pause";
};

export async function getRadsportHerrenTours(): Promise<RadsportHerrenTour[]> {
  return client.fetch(
    `*[_type == "${document_id}"] | order(date desc) {
      _id,
      date,
      route,
      departureTime,
      status
    }`,
  );
}
