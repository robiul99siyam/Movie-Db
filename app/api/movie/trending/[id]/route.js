import { TrandingDataIndividual } from "@/lib/trending/indivial-data-fetch";
import { NextResponse } from "next/server";

export async function GET(_request, { params: { id } }) {
  const res = await TrandingDataIndividual(id);
  return NextResponse.json(res);
}
