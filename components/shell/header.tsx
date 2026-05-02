"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ];

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-forest focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:text-warm-ash focus:no-underline"
      >
        Skip to content
      </a>
    <header className="sticky top-0 z-50 flex min-h-[52px] flex-col items-start justify-center gap-2 border-b border-[rgba(13,13,13,0.08)] bg-warm-ash px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-0 sm:px-6 sm:py-0 lg:px-10">
      <Link
        href="/"
        className="font-serif text-base text-slate no-underline"
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
              className={`font-sans text-xs sm:text-[13px] no-underline transition-colors duration-150 ${
                isActive
                  ? "text-forest"
                  : "text-pencil hover:text-slate"
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </nav>
    </header>
    </>
  );
}
