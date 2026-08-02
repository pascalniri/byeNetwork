import { NextResponse } from "next/server";
import leaders from "@/lib/leaders";

export function GET() {
  return NextResponse.json(leaders);
}
