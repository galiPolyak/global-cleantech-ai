import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-8 h-18 flex items-center justify-between">

        {/* Logo (far left) */}
        <Link href="/" className="">
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
            href="/identity"
            className="uppercase text-gray-800 hover:text-green-600 transition"
          >
            Identity
          </Link>

          <Link
            href="/innovation"
            className="uppercase text-gray-800 hover:text-green-600 transition"
          >
            Innovation
          </Link>

          {/* Explore Hub (active) */}
          <Link
            href="/help"
            className="uppercase text-gray-800 hover:text-green-600 transition"
          >
            Explore Hub
          </Link>

          <Link
            href="/help"
            className="uppercase text-gray-800 hover:text-green-600 transition"
          >
            Help
          </Link>
        </nav>
      </div>
    </header>
  );
}
