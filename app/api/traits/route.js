import { NextResponse } from "next/server";
import { traitBuckets } from "../../../lib/data";

export const runtime = "edge";

export async function GET() {
  return NextResponse.json({ buckets: traitBuckets });
}
