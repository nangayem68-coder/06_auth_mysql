import Link from "next/link";
import "./style.css";

export const metadata = {
  title: "Chimmy's Assignment — Nang Aye Myo Khaing",
  description: "Register / Login / Dashboard with Next.js + MySQL (TiDB Cloud), deployed on Vercel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* top navigation bar, shown on every page */}
        <header className="site-header">
          <Link href="/" className="brand">
            <span className="brand-logo">🎀</span> Chimmy&apos;s Assignment
          </Link>
          <nav className="nav">
            <Link href="/">Home</Link>
            <Link href="/register">Register</Link>
            <Link href="/login">Login</Link>
            <Link href="/dashboard">Dashboard</Link>
          </nav>
        </header>

        <main className="page">{children}</main>

        <footer className="site-footer">
          DIT205 · Nang Aye Myo Khaing · 6808438 · Next.js + TiDB Cloud + Vercel
        </footer>
      </body>
    </html>
  );
}
