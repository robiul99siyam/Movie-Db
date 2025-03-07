import { TrandingDataIndividual } from "@/lib/trending/indivial-data-fetch";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(_request, { params: { id } }) {
  const res = await TrandingDataIndividual(id);
  return NextResponse.json(res);
}
