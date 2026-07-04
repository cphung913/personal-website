"use client";
import Link from "next/link";

const SECTIONS = [
  { label: "Experience", href: "/#experience" },
  { label: "Startups", href: "/#startups" },
  { label: "Hackathons", href: "/#hackathons" },
  { label: "Projects", href: "/projects" },
];

export default function Header() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper focus:no-underline"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[1080px] items-center justify-between px-6 py-4 sm:px-12">
          <Link
            href="/"
            className="font-serif text-xl font-medium tracking-tight text-ink no-underline"
          >
            Chase Phung
          </Link>

          <nav className="flex items-center gap-5 text-[13px] font-semibold sm:gap-7">
            {SECTIONS.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="hidden text-ink/60 no-underline transition-colors duration-150 hover:text-ink sm:inline"
              >
                {s.label}
              </Link>
            ))}
            <a
              href="/Tech_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-deep no-underline transition-colors duration-150 hover:text-sage"
            >
              Résumé ↓
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}
