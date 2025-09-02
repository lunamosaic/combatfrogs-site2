'use client';
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="CF" className="h-7 w-7" />
        <span className="font-bold tracking-wide">Combat Frogs</span>
      </div>
      <ul className="flex items-center gap-5 text-sm">
        <li><Link href="/explorer">Explorer</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/buy">Buy</Link></li>
        <li>
          <a className="border rounded px-3 py-1" href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        </li>
      </ul>
    </nav>
  );
}