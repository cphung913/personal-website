"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 flex min-h-[52px] flex-col items-start justify-center gap-2 border-b border-[rgba(13,13,13,0.08)] bg-[#F7F5F0] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-6 sm:py-0 lg:px-10">
      <Link
        href="/"
        className="font-serif text-base text-[#2C3E50] no-underline"
      >
        Chase Phung
      </Link>

      <nav className="flex w-full flex-wrap gap-x-4 gap-y-1 sm:w-auto sm:gap-7">
        {links.map((l) => {
          const isActive =
            l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);

          return (
            <Link
              key={l.label}
              href={l.href}
              className={`font-sans text-xs sm:text-[13px] transition-colors transition-transform duration-150 hover:text-[#1A6B4A] hover:scale-105 ${
                isActive
                  ? "text-[#1A6B4A] underline underline-offset-[3px] decoration-2 font-bold"
                  : "text-[#888880] no-underline"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
