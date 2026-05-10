"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/work", label: "Engineering Work" },
  { href: "/robotics", label: "Robotics" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="font-bold text-navy text-lg tracking-tight group-hover:text-teal-600 transition-colors">
              Mauricio Meza
            </span>
            <span className="text-xs text-gray-500 font-medium">
              Mechanical Designer · Mechatronics Engineer
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "text-teal-700 bg-teal-50"
                      : "text-gray-600 hover:text-navy hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href="https://docs.google.com/document/d/1-dLvyX3TRGO-UIzUJhaP2SBk-xyW3D64/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 rounded-md text-sm font-semibold text-white btn-gradient"
            >
              Resume
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-navy hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "text-teal-700 bg-teal-50"
                      : "text-gray-600 hover:text-navy hover:bg-gray-50"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <a
              href="https://docs.google.com/document/d/1-dLvyX3TRGO-UIzUJhaP2SBk-xyW3D64/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 px-4 py-2 rounded-md text-sm font-semibold text-white text-center btn-gradient"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
