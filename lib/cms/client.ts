import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "n07z17nt",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
