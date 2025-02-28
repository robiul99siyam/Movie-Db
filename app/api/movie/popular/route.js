import { popularMovieData } from "@/lib/popular/data-fetch";
import { NextResponse } from "next/server";

export async function GET(_request) {
  const response = await popularMovieData();
  return NextResponse.json(response);
}
