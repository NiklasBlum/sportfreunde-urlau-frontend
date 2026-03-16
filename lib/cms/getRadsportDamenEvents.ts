import { client } from "./client";

export type RadsportDamenEvent = {
  _id: string;
  headline: string;
  beschreibung: string | null;
  images: {
    _key: string;
    url: string;
    alt: string | null;
  }[];
};

export async function getRadsportDamenEvents(): Promise<RadsportDamenEvent[]> {
  return client.fetch(
    `*[_type == "mtbEventsLadies"] | order(_createdAt desc) {
      _id,
      headline,
      beschreibung,
      "images": images[] {
        _key,
        "url": asset->url,
        alt
      }
    }`,
  );
}
