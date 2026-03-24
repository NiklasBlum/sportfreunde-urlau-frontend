import { client } from "./client";

export type RadsportDamenEventImage = {
  _key: string;
  asset: { _ref: string; _type: "reference" };
  alt: string | null;
  dimensions: { width: number; height: number } | null;
};

export type RadsportDamenEventPreview = {
  _id: string;
  headline: string;
  description: string | null;
  date: string;
  slug: string;
};

export type RadsportDamenEvent = RadsportDamenEventPreview & {
  images: RadsportDamenEventImage[];
};

export async function getRadsportDamenEvents(): Promise<
  RadsportDamenEventPreview[]
> {
  return client.fetch(
    `*[_type == "radsport_damen_events"] | order(date desc) {
      _id,
      headline,
      description,
      date,
      "slug": slug.current
    }`,
  );
}

export async function getRadsportDamenEventBySlug(
  slug: string,
): Promise<RadsportDamenEvent | null> {
  return client.fetch(
    `*[_type == "radsport_damen_events" && slug.current == $slug][0] {
      _id,
      headline,
      description,
      date,
      "slug": slug.current,
      "images": images[] {
        _key,
        asset,
        "dimensions": asset->metadata.dimensions,
        alt
      }
    }`,
    { slug },
  );
}
