"use client";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.message);
      return;
    }
    // full page navigation so the new cookie is sent and proxy.js runs
    window.location.href = "/dashboard";
  }

  return (
    <div className="card auth-box">
      <span className="auth-icon">🔑</span>
      <h1>Welcome back</h1>
      <p className="subtitle">Log in to see your dashboard.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Login</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="switch">No account yet? <Link href="/register">Register</Link></p>
    </div>
  );
}
