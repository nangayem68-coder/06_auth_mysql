// GET /api/me — return the logged-in user
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";
import { verifyToken } from "@/lib/auth";

export async function GET(request) {
  const token = request.cookies.get("token")?.value;
  const payload = await verifyToken(token);
  if (!payload) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const [rows] = await pool.query(
    "SELECT id, email, fullname, created_at FROM users WHERE id = ?",
    [payload.id]
  );
  if (rows.length === 0) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ user: rows[0] });
}
