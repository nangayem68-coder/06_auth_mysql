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

  if (!user) return <div className="card auth-box loading">Loading...</div>;

  return (
    <div className="card dashboard">
      <div className="profile">
        <div className="avatar">{user.fullname.charAt(0).toUpperCase()}</div>
        <div>
          <p className="subtitle">Welcome back,</p>
          <h1>{user.fullname}</h1>
        </div>
      </div>

      <dl className="info-list">
        <div>
          <dt>Email</dt>
          <dd>{user.email}</dd>
        </div>
        <div>
          <dt>Member ID</dt>
          <dd>{user.id}</dd>
        </div>
        <div>
          <dt>Member since</dt>
          <dd>{new Date(user.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</dd>
        </div>
      </dl>

      <button className="logout" onClick={handleLogout}>Logout</button>
    </div>
  );
}
