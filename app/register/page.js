"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullname, email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.message);
      return;
    }
    router.push("/login");
  }

  return (
    <div className="card auth-box">
      <span className="auth-icon">📝</span>
      <h1>Create an account</h1>
      <p className="subtitle">Register to access the members-only dashboard.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Full name
          <input placeholder="e.g. Nang Aye Myo Khaing" value={fullname} onChange={(e) => setFullname(e.target.value)} required />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>
        <button type="submit">Register</button>
      </form>
      {error && <p className="error">{error}</p>}
      <p className="switch">Already have an account? <Link href="/login">Login</Link></p>
    </div>
  );
}
