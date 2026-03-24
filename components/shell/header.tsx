"use client";
import Link from "next/link";

export default function Header() {
  const links = [
    { label: "Home", href: "/", active: true },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 flex h-[52px] items-center justify-between border-b border-[rgba(13,13,13,0.08)] bg-[#F7F5F0] px-10">
      <Link
        href="/"
        className="font-serif text-base text-[#2C3E50] no-underline"
      >
        Chase Phung
      </Link>

      <nav className="flex gap-7">
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={`font-sans text-[13px] transition-colors duration-150 hover:text-[#1A6B4A] ${
              l.active
                ? "text-[#1A6B4A] underline underline-offset-[3px] decoration-2 font-bold"
                : "text-[#888880] no-underline"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
