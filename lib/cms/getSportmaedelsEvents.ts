import { client } from "./client";

export type SportmaedelsEventImage = {
  _key: string;
  asset: { _ref: string; _type: "reference" };
  alt: string | null;
};

export type SportmaedelsEventPreview = {
  _id: string;
  headline: string;
  description: string | null;
  date: string;
  slug: string;
};

export type SportmaedelsEvent = SportmaedelsEventPreview & {
  images: SportmaedelsEventImage[];
};

export async function getSportmaedelsEvents(): Promise<
  SportmaedelsEventPreview[]
> {
  return client.fetch(
    `*[_type == "sportmaedels_events"] | order(date desc) {
      _id,
      headline,
      description,
      date,
      "slug": slug.current
    }`,
  );
}

export async function getSportmaedelsEventBySlug(
  slug: string,
): Promise<SportmaedelsEvent | null> {
  return client.fetch(
    `*[_type == "sportmaedels_events" && slug.current == $slug][0] {
      _id,
      headline,
      description,
      date,
      "slug": slug.current,
      "images": images[] {
        _key,
        asset,
        alt
      }
    }`,
    { slug },
  );
}
