import { client } from "./client";

const document_id = "radsport_herren_tours";

export type RadsportHerrenEvent = {
  _id: string;
  date: string;
  route: string | null;
  departureTime: string | null;
  status: "tour" | "cancelled" | "pause";
};

export async function getRadsportHerrenTours(): Promise<RadsportHerrenEvent[]> {
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
