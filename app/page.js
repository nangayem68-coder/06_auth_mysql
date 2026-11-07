import Link from "next/link";

// home page: student info + links to every page in the project
export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <span className="badge">DIT205 · Web Application Development</span>
        <h1>Chimmy&apos;s Assignment</h1>
        <p className="lead">
          A membership system with Register, Login and a members-only Dashboard,
          built with Next.js and MySQL on TiDB Cloud.
        </p>
      </section>

      {/* student information card */}
      <section className="card student-card">
        <h2>Student Information</h2>
        <dl className="info-list">
          <div>
            <dt>First name</dt>
            <dd>Nang Aye Myo</dd>
          </div>
          <div>
            <dt>Last name</dt>
            <dd>Khaing</dd>
          </div>
          <div>
            <dt>Student ID</dt>
            <dd>6808438</dd>
          </div>
        </dl>
      </section>

      {/* links to every page */}
      <section className="link-grid">
        <Link href="/register" className="link-card">
          <span className="link-icon">📝</span>
          <strong>Register</strong>
          <span>Create a new account</span>
        </Link>
        <Link href="/login" className="link-card">
          <span className="link-icon">🔑</span>
          <strong>Login</strong>
          <span>Sign in with your email</span>
        </Link>
        <Link href="/dashboard" className="link-card">
          <span className="link-icon">📊</span>
          <strong>Dashboard</strong>
          <span>Members only</span>
        </Link>
      </section>
    </div>
  );
}
