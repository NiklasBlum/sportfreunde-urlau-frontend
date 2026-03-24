import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

// This API route can be used to revalidate the cache for the cms pages
export async function GET(req: NextRequest) {
  revalidatePath("/abteilungen/radsport-herren");
  revalidatePath("/abteilungen/radsport-damen");
  revalidatePath("/abteilungen/sportmaedels");

  return NextResponse.json({ revalidated: true });
}
