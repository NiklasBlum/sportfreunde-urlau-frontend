import { client } from "./client";

const document_id = "radsport_damen_tours";

export type RadsportDamenTour = {
  _id: string;
  date: string;
  route: string | null;
  departureTime: string | null;
  status: "tour" | "cancelled" | "pause";
};

export async function getRadsportDamenTours(): Promise<RadsportDamenTour[]> {
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
