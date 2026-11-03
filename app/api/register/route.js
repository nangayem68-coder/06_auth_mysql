// POST /api/register — create a new user
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { pool } from "@/lib/db";

export async function POST(request) {
  const { email, password, fullname } = await request.json();

  if (!email || !password || !fullname) {
    return NextResponse.json({ message: "Please fill in all fields" }, { status: 400 });
  }

  const [rows] = await pool.query("SELECT id FROM users WHERE email = ?", [email]);
  if (rows.length > 0) {
    return NextResponse.json({ message: "This email is already registered" }, { status: 409 });
  }

  // never store the plain password — store a bcrypt hash
  const hash = await bcrypt.hash(password, 10);
  await pool.query(
    "INSERT INTO users (email, password, fullname) VALUES (?, ?, ?)",
    [email, hash, fullname]
  );

  return NextResponse.json({ message: "Registered successfully" }, { status: 201 });
}
