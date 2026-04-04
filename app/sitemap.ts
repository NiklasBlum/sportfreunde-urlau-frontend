import type { MetadataRoute } from "next";
import { abteilungen } from "@/data/abteilungen";
import { getRadsportDamenEvents } from "@/lib/cms/getRadsportDamenEvents";
import { getSportmaedelsEvents } from "@/lib/cms/getSportmaedelsEvents";

const BASE_URL = "https://sportfreunde-urlau.de";

const staticRoutes: MetadataRoute.Sitemap = [
  {
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    url: `${BASE_URL}/verein`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/veranstaltungen`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${BASE_URL}/veranstaltungen/jahreshauptversammlung_2026`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  },
  {
    url: `${BASE_URL}/downloads`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  },
  {
    url: `${BASE_URL}/kontakt`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.7,
  },
  {
    url: `${BASE_URL}/impressum`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.2,
  },
  {
    url: `${BASE_URL}/datenschutz`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.2,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const abteilungRoutes: MetadataRoute.Sitemap = abteilungen.map((a) => ({
    url: `${BASE_URL}/abteilungen/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const [radsportDamenEvents, sportmaedelsEvents] = await Promise.all([
    getRadsportDamenEvents(),
    getSportmaedelsEvents(),
  ]);

  const radsportDamenEventRoutes: MetadataRoute.Sitemap = radsportDamenEvents
    .filter((e) => e.slug)
    .map((e) => ({
      url: `${BASE_URL}/abteilungen/radsport-damen/${e.slug}`,
      lastModified: new Date(e.date),
      changeFrequency: "yearly",
      priority: 0.5,
    }));

  const sportmaedelsEventRoutes: MetadataRoute.Sitemap = sportmaedelsEvents
    .filter((e) => e.slug)
    .map((e) => ({
      url: `${BASE_URL}/abteilungen/sportmaedels/${e.slug}`,
      lastModified: new Date(e.date),
      changeFrequency: "yearly",
      priority: 0.5,
    }));

  return [
    ...staticRoutes,
    ...abteilungRoutes,
    ...radsportDamenEventRoutes,
    ...sportmaedelsEventRoutes,
  ];
}
