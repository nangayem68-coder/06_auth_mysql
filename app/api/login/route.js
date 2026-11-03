// POST /api/login — check email + password, then set a JWT cookie
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { pool } from "@/lib/db";
import { signToken } from "@/lib/auth";

export async function POST(request) {
  const { email, password } = await request.json();

  const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
  const user = rows[0];

  // same message for "no such user" and "wrong password"
  if (!user || !(await bcrypt.compare(password || "", user.password))) {
    return NextResponse.json({ message: "Invalid email or password" }, { status: 401 });
  }

  const token = await signToken({ id: user.id, email: user.email });

  const res = NextResponse.json({ message: "Login successful" });
  res.cookies.set("token", token, {
    httpOnly: true, // JavaScript in the browser cannot read it
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60, // 1 hour
  });
  return res;
}
