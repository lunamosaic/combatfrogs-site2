import { NextResponse } from "next/server";
import { tokens } from "../../../lib/data";

export async function GET(req) {
  // Simple server-side search by 'q' or 'upgraded' — traits are demo-filtered on client
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get("q") || "").toLowerCase();
  const upgraded = searchParams.get("upgraded");

  let list = tokens;
  if (q) list = list.filter(t => String(t.id).includes(q) || t.name.toLowerCase().includes(q));
  if (upgraded === "true") list = list.filter(t => t.upgraded === true);

  return NextResponse.json({ items: list });
}