// proxy.js — block /dashboard unless the user has a valid token
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function proxy(request) {
  const token = request.cookies.get("token")?.value;
  const payload = await verifyToken(token);
  if (!payload) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
