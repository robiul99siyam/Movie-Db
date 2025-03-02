import { TrendingData } from "@/lib/trending/data-fetch";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(request) {
  const response = await TrendingData();
  return NextResponse.json(response);
}
