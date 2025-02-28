import { TrendingData } from "@/lib/trending/data-fetch";
import { NextResponse } from "next/server";

export async function GET(request) {
  const response = await TrendingData();
  return NextResponse.json(response);
}
