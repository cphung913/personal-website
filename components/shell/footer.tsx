"use client";
export default function Footer() {
  return (
    <footer className="flex flex-col items-start gap-4 border-t border-[rgba(13,13,13,0.08)] px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-12">
      <p className="font-sans text-[11px] uppercase tracking-[0.08em] text-[#888880]">
        © 2026 Chase Phung
      </p>

      <div className="flex flex-wrap gap-x-4 gap-y-2 sm:gap-6">
        {[
          { label: "GitHub", href: "https://github.com/cphung913" },
          { label: "LinkedIn", href: "https://linkedin.com/in/chasephung" },
          { label: "Email", href: "mailto:chasephung13@gmail.com" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="font-sans text-[11px] uppercase tracking-[0.08em] text-[#888880] no-underline hover:text-[#1A6B4A] hover:scale-105 transition-colors transition-transform duration-150"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
