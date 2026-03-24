export default function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-[rgba(13,13,13,0.08)] py-6 pl-12 pr-12">
      <p className="font-sans text-[11px] uppercase tracking-[0.08em] text-[#888880]">
        © 2025 Chase Phung
      </p>

      <div className="flex gap-6">
        {[
          { label: "GitHub", href: "https://github.com/chasephung" },
          { label: "LinkedIn", href: "https://linkedin.com/in/chasephung" },
          { label: "Email", href: "mailto:chase@chasephung.dev" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="font-sans text-[11px] uppercase tracking-[0.08em] text-[#888880] no-underline"
          >
            {l.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
