"use client";

import { useEffect, useState, type CSSProperties } from "react";

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
      { label: "Devpost", href: "https://devpost.com/software/downstream-kytmub"},
      { label: "GitHub", href: "https://github.com/cphung913/DownStream-AWSCloudHacks"}
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

const EXCLUDED_TAGS = new Set(["SQLite", "Tesseract OCR"]);
const ALL_TAGS = Array.from(new Set(PROJECTS.flatMap((p) => p.stack))).filter(
  (t) => !EXCLUDED_TAGS.has(t)
);

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
    >
      <path d="M5 2H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7" />
      <path d="M8 1h3v3" />
      <path d="M11 1L6 6" />
    </svg>
  );
}

function ProjectCard({
  project,
  spacingTop,
  style,
}: {
  project: Project;
  spacingTop: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`grid grid-cols-1 gap-y-4 py-10 sm:grid-cols-[180px_1fr] sm:gap-x-6 sm:gap-y-0 sm:py-16 ${spacingTop ? "pt-14 sm:pt-16" : ""}`}
      style={style}
    >
      <div className="pt-1">
        <p className="mb-1 font-sans text-[11px] font-medium tracking-[0.1em] uppercase text-pencil">
          {project.date}
        </p>
        <p className="font-sans text-[11px] font-medium tracking-[0.1em] uppercase text-pencil">
          {project.label}
        </p>
      </div>

      <div>
        <h2 className="mb-4 font-serif text-[28px] leading-[1.2] text-slate">
          {project.title}
        </h2>

        <p className="mb-5 font-sans text-[15px] leading-[1.7] text-ink">
          {project.description}
        </p>

        <p className="mb-5 font-sans text-[11px] text-pencil">
          {project.stack.join(" · ")}
        </p>

        <div className="flex gap-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans text-[11px] font-medium tracking-[0.08em] uppercase text-forest no-underline transition-colors duration-150 hover:underline"
            >
              {link.label} <ExternalLinkIcon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTag, setActiveTag] = useState<string | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }
    const id = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const fadeStyle = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  });

  const visible = activeTag
    ? PROJECTS.filter((p) => p.stack.includes(activeTag))
    : PROJECTS;

  return (
    <>
      <div className="mb-1" style={fadeStyle(0)}>
        <h1 className="mb-3 font-serif text-[clamp(40px,10vw,64px)] leading-[1.05] text-slate">
          Projects
        </h1>
        <p className="font-sans text-[15px] text-pencil">
          Things I&apos;ve built.
        </p>
      </div>

      <div className="mt-5 mb-10 flex flex-wrap gap-2" style={fadeStyle(80)}>
        {["All", ...ALL_TAGS].map((tag) => (
          <button
            key={tag}
            onClick={() =>
              setActiveTag(tag === "All" ? null : activeTag === tag ? null : tag)
            }
            aria-pressed={(tag === "All" && !activeTag) || activeTag === tag}
            className={`font-sans text-[11px] tracking-[0.08em] uppercase px-3 py-1.5 transition-colors duration-150 ${
              (tag === "All" && !activeTag) || activeTag === tag
                ? "bg-forest text-warm-ash"
                : "text-pencil hover:text-slate"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div>
        {visible.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            spacingTop={i > 0}
            style={fadeStyle(160 + i * 80)}
          />
        ))}
      </div>

      <section className="py-12 sm:py-16 border-t border-[rgba(13,13,13,0.08)]" style={fadeStyle(320)}>
        <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-pencil">
          Get In Touch
        </p>
        <p className="mb-4 font-sans text-[15px] leading-[1.7] text-ink max-w-[52ch]">
          Looking for a SWE intern for Summer 2026, or want to collaborate on research? I&apos;d love to hear from you.
        </p>
        <a
          href="mailto:chasephung13@gmail.com"
          className="font-sans text-[13px] font-medium text-forest no-underline transition-colors duration-150 hover:underline"
        >
          chasephung13@gmail.com
        </a>
      </section>
    </>
  );
}
