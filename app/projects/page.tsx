"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";

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

function ArrowIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 6h8M6 2l4 4-4 4" />
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
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex items-center gap-1.5 font-sans text-[11px] font-medium tracking-[0.08em] uppercase text-forest no-underline transition-colors duration-150 hover:underline"
            >
              {link.label} <ArrowIcon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);

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

      <div>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            spacingTop={i > 0}
            style={fadeStyle(120 + i * 80)}
          />
        ))}
      </div>
    </>
  );
}
