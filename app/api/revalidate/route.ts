import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { getEvents } from "@/lib/cms/getEvents";
import { getNewsReports } from "@/lib/cms/getNewsReports";
import { getMittwochmaedelsEvents } from "@/lib/cms/getMittwochmaedelsEvents";
import { getPianoEvents } from "@/lib/cms/getPianoEvents";
import { getRadsportDamenEvents } from "@/lib/cms/getRadsportDamenEvents";
import { getSportmaedelsEvents } from "@/lib/cms/getSportmaedelsEvents";

// This API route can be used to revalidate the cache for all pages,
// including the dynamic slug pages backed by the CMS.
export async function GET() {
  const [
    events,
    newsReports,
    mittwochmaedelsEvents,
    pianoEvents,
    radsportDamenEvents,
    sportmaedelsEvents,
  ] = await Promise.all([
    getEvents(),
    getNewsReports(),
    getMittwochmaedelsEvents(),
    getPianoEvents(),
    getRadsportDamenEvents(),
    getSportmaedelsEvents(),
  ]);

  // Static pages
  revalidatePath("/");
  revalidatePath("/verein");
  revalidatePath("/kontakt");
  revalidatePath("/downloads");
  revalidatePath("/datenschutz");
  revalidatePath("/impressum");

  // Abteilungen without dynamic slug pages
  revalidatePath("/abteilungen/eltern-kind-turnen");
  revalidatePath("/abteilungen/kinder-turnen");
  revalidatePath("/abteilungen/langlauf");
  revalidatePath("/abteilungen/mutter-kind-turnen");
  revalidatePath("/abteilungen/radsport-herren");
  revalidatePath("/abteilungen/tischtennis");
  revalidatePath("/abteilungen/winter-volleyballer");

  // Abteilungen with dynamic slug pages
  revalidatePath("/abteilungen/mittwochs-maedels");
  for (const event of mittwochmaedelsEvents) {
    if (event.slug) {
      revalidatePath(`/abteilungen/mittwochs-maedels/${event.slug}`);
    }
  }

  revalidatePath("/abteilungen/piano");
  for (const event of pianoEvents) {
    if (event.slug) {
      revalidatePath(`/abteilungen/piano/${event.slug}`);
    }
  }

  revalidatePath("/abteilungen/radsport-damen");
  for (const event of radsportDamenEvents) {
    if (event.slug) {
      revalidatePath(`/abteilungen/radsport-damen/${event.slug}`);
    }
  }

  revalidatePath("/abteilungen/sportmaedels");
  for (const event of sportmaedelsEvents) {
    if (event.slug) {
      revalidatePath(`/abteilungen/sportmaedels/${event.slug}`);
    }
  }

  // Veranstaltungen
  revalidatePath("/veranstaltungen");
  revalidatePath("/veranstaltungen/jahreshauptversammlung_2026");
  for (const event of events) {
    if (event.slug) {
      revalidatePath(`/veranstaltungen/${event.slug}`);
    }
  }

  // News & Berichte
  revalidatePath("/news-berichte");
  for (const report of newsReports) {
    if (report.slug) {
      revalidatePath(`/news-berichte/${report.slug}`);
    }
  }

  return NextResponse.json({ revalidated: true });
}
