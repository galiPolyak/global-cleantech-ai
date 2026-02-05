import Link from "next/link";

export default function Navbar() {
  return (
    <header style={{ padding: "16px 24px", display: "flex", gap: 16 }}>
      <Link href="/">Home</Link>
      <Link href="/about">About Us</Link>
      <Link href="/help">Help</Link>
      <Link href="/why-us">Why Us</Link>
      <Link href="/news">News</Link>
      <Link href="/contact">Contact</Link>
    </header>
  );
}
