import { topRatedMovideData } from "@/lib/top-rated/data-fetch";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(_request) {
  const response = await topRatedMovideData();
  return NextResponse.json(response);
}
