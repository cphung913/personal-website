import Wave from "../wave";
import { GitHubIcon, LinkedInIcon, MailIcon, ResumeIcon } from "../icons";

const LINKS = [
  { label: "GitHub", href: "https://github.com/cphung913", icon: GitHubIcon },
  { label: "LinkedIn", href: "https://linkedin.com/in/chasephung", icon: LinkedInIcon },
  { label: "Résumé PDF", href: "/Tech_Resume.pdf", icon: ResumeIcon },
];

export default function Footer() {
  return (
    <footer>
      <Wave from="var(--color-paper)" to="var(--color-sage-band)" variant={2} />
      <div className="bg-sage-band">
        <div className="mx-auto w-full max-w-[1080px] px-6 pb-16 pt-8 text-center sm:px-12 sm:pb-20">
          <p className="font-serif text-[clamp(1.5rem,6vw,3rem)] font-medium italic leading-none text-ink">
            Looking for a SWE intern? — get in touch!
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:chasephung13@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-paper no-underline transition-opacity duration-150 hover:opacity-90"
            >
              <MailIcon /> Email →
            </a>
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-5 py-2.5 text-[13px] font-semibold text-ink no-underline transition-colors duration-150 hover:border-ink/50"
              >
                <l.icon /> {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
