import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// This API route can be used to revalidate the cache for the cms pages
export async function GET() {
  revalidatePath("/abteilungen/radsport-herren");
  revalidatePath("/abteilungen/radsport-damen");
  revalidatePath("/abteilungen/sportmaedels");
  revalidatePath("/veranstaltungen");

  return NextResponse.json({ revalidated: true });
}
