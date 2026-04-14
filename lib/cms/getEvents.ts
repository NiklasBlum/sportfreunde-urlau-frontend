import { client } from "./client";

export interface EventPreview {
  _id: string;
  title: string;
  info: string | null;
  date: string;
  slug: string | null;
  tag: string | null;
}

export interface Event extends EventPreview {
  description: string | null;
}

export async function getEvents(): Promise<EventPreview[]> {
  return client.fetch(
    `*[_type == "events"] | order(date desc) {
      _id,
      title,
      info,
      date,
      "slug": slug.current,
      tag
    }`,
  );
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  if (!slug) return null;

  return client.fetch(
    `*[_type == "events" && slug.current == $slug][0] {
      _id,
      title,
      info,
      date,
      tag,
      description,
      "slug": slug.current
    }`,
    { slug },
  );
}
