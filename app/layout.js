import "./style.css";

export const metadata = {
  title: "Auth Demo",
  description: "Register / Login / Dashboard with Next.js + MySQL",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
