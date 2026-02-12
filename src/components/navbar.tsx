import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full h-18 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-8 h-full flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/gcd_logo.png"
            alt="Global Cleantech Directory"
            width={130}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm tracking-wide">

          <Link
            href="/"
            className="uppercase text-gray-800 hover:text-green-600 transition"
          >
            Home
          </Link>

          <Link
            href="/dashboard"
            className="uppercase text-gray-800 hover:text-green-600 transition"
          >
            Conversations
          </Link>

        </nav>
      </div>
    </header>
  );
}
