"use client";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data) => setUser(data.user))
      .catch(() => (window.location.href = "/login"));
  }, []);

  async function handleLogout() {
    await fetch("/api/logout", { method: "POST" });
    window.location.href = "/login";
  }

  if (!user) return <div className="auth-box">Loading...</div>;

  return (
    <div className="auth-box">
      <h1>Dashboard</h1>
      <p>Welcome, <b>{user.fullname}</b></p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
