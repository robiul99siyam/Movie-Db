import { individualVideoOpen } from "@/lib/open-video";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
export async function GET(_request, { params: { id } }) {
  const res = await individualVideoOpen(id);
  return NextResponse.json(res);
}
