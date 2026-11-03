// POST /api/logout — remove the token cookie
import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({ message: "Logged out" });
  res.cookies.delete("token");
  return res;
}
