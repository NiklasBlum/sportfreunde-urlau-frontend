import { createClient } from "next-sanity";
import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";

export const client = createClient({
  projectId: "n07z17nt",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
  perspective: "published",
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
