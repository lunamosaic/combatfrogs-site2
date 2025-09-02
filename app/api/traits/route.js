import { NextResponse } from "next/server";
import { traitBuckets } from "../../../lib/data";

export const runtime = "edge"; // важно для Cloudflare Pages

export async function GET() {
  return NextResponse.json({ buckets: traitBuckets });
}
