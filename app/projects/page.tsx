"use client";

import Reveal from "../../components/reveal";

interface Project {
  date: string;
  label: string;
  title: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
}

const PROJECTS: Project[] = [
  {
    date: "April 2026",
    label: "UCI AWS Cloud Hacks",
    title: "DownStream",
    description:
      "Won Best AI for Environmental Impact at UCI AWS Cloud Hacks 2026. A real-time chemical spill propagation simulator for emergency managers, using the Mississippi River as a geospatial case study. Budget-constrained mitigation options use spill-type-aware effectiveness logic anchored to FEMA HMGP cost benchmarks from 597 federal projects. Integrated Amazon Location Service for map infrastructure and deployed via AWS Amplify, resolving a 10-hour deployment blocker with secrets configuration.",
    stack: ["React", "TypeScript", "AWS"],
    links: [
      { label: "Devpost", href: "https://devpost.com/software/downstream-kytmub" },
      { label: "GitHub", href: "https://github.com/cphung913/DownStream-AWSCloudHacks" },
    ],
  },
  {
    date: "March 2026",
    label: "IrvineHacks",
    title: "Property Risk Intelligence",
    description:
      "OCR-based document analysis system that identifies inconsistencies in property underwriting workflows, targeting risk detection across tax, title, and financial documents. Rule-based classification and discrepancy detection logic extracts and validates structured financial data. Validated system design and risk criteria through direct consultation with First American employees and industry underwriters during a 36-hour hackathon.",
    stack: ["React", "Next.js", "FastAPI", "Python", "SQLite", "Tesseract OCR"],
    links: [
      { label: "GitHub", href: "https://github.com/cphung913/Irvine-Hacks-2026" },
      { label: "Devpost", href: "https://devpost.com/software/property-risk-intelligence" },
    ],
  },
];

const CONTAINER = "mx-auto w-full max-w-[1080px] px-6 sm:px-12";

function ExternalLinkIcon() {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7" />
      <path d="M8 1h3v3" />
      <path d="M11 1L6 6" />
    </svg>
  );
}

export default function ProjectsPage() {
  return (
    <div className={CONTAINER}>
      <Reveal>
        <h1 className="pt-14 font-serif text-[clamp(2.75rem,7vw,4.5rem)] font-medium leading-[1.02] sm:pt-20">
          Projects
        </h1>
        <p className="mt-4 text-[17px] text-ink/70">Things I&apos;ve built.</p>
      </Reveal>

      {PROJECTS.map((project, i) => (
        <Reveal key={project.title} delay={i === 0 ? 100 : 0}>
          <article className="mt-16 grid grid-cols-1 gap-y-4 sm:mt-20 sm:grid-cols-[180px_1fr] sm:gap-x-12">
            <div className="pt-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-sage-deep">
                {project.date}
              </p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink/50">
                {project.label}
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[1.9rem] font-semibold leading-tight">
                {project.title}
              </h2>
              <p className="mt-4 max-w-[62ch] text-[15px] leading-[1.65] text-ink/85">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-sage/15 px-3 py-1.5 font-mono text-[11px] text-sage-deep"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 py-2 text-sm font-semibold text-sage-deep no-underline transition-colors duration-150 hover:text-sage"
                  >
                    {link.label} <ExternalLinkIcon />
                  </a>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      ))}

      <div className="h-16 sm:h-20" />
    </div>
  );
}
