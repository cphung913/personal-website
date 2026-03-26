"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  date: string;
  label: string;
  title: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS: Project[] = [
  {
    date: "PRESENT",
    label: "ACTIVE DEV",
    title: "ML Compression Ordering Benchmark",
    description:
      "This project benchmarks three standard ML compression techniques (quantization, attention head pruning, and knowledge distillation) against a BERT-base baseline, measuring the efficiency to accuracy tradeoff across five experimental configurations on AWS EC2 GPU hardware.",
    stack: ["PYTHON", "PYTORCH", "DOCKER", "AWS"],
    links: [{ label: "GITHUB", href: "https://github.com/cphung913" }],
  },
  {
    date: "MARCH 2026",
    label: "IRVINEHACKS PROJECT",
    title: "Property Risk Intelligence",
    description:
      "AI-powered document ingestion pipeline that extracts, classifies, and cross-checks property tax, title, and financial documents to flag collateral inconsistencies and generate structured risk findings for underwriter review. Built in 36 hours, validated with First American employees and industry underwriters.",
    stack: ["REACT", "NEXT.JS", "FASTAPI", "PYTHON", "SQLITE", "TESSERACT OCR"],
    links: [
      { label: "GITHUB", href: "https://github.com/cphung913/Irvine-Hacks-2026" },
      { label: "DEVPOST", href: "https://devpost.com/software/property-risk-intelligence" },
    ],
  },
];

// ─── Arrow Icon ───────────────────────────────────────────────────────────────

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

// ─── Project Card ─────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  showDivider,
  style,
}: {
  project: Project;
  showDivider: boolean;
  style?: CSSProperties;
}) {
  return (
    <>
      {showDivider && (
        <hr className="border-t border-[rgba(13,13,13,0.08)] mb-0" />
      )}
      <div className="grid grid-cols-1 gap-y-4 py-10 sm:grid-cols-[180px_1fr] sm:gap-x-6 sm:gap-y-0 sm:py-16" style={style}>
        {/* Left column */}
        <div className="pt-1">
          <p
            className="text-[11px] font-medium tracking-[0.1em] uppercase mb-1"
            style={{ color: "#888880", fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.date}
          </p>
          <p
            className="text-[11px] font-medium tracking-[0.1em] uppercase"
            style={{ color: "#888880", fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.label}
          </p>
        </div>

        {/* Right column */}
        <div>
          <h2
            className="text-[28px] leading-[1.2] mb-4"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: "#2C3E50",
            }}
          >
            {project.title}
          </h2>

          <p
            className="text-[15px] leading-[1.7] mb-5"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#2C3E50" }}
          >
            {project.description}
          </p>

          {/* Stack tags */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mb-5">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="text-[10px] tracking-[0.08em]"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "#888880" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.08em] uppercase transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#1A6B4A",
                  textDecoration: "none",
                }}
              >
                {link.label} <ArrowIcon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProjectsPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const fadeStyle = (delay: number) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  });

  return (
    <main
      className="min-h-screen"
      style={{ background: "#F7F5F0" }}
    >
      <div className="mx-auto max-w-[720px] px-4 pt-4 pb-16 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">

        {/* Page header */}
        <div className="mb-1" style={fadeStyle(0)}>
          <h1
            className="mb-3 text-[clamp(40px,10vw,64px)] leading-[1.05]"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: "#2C3E50",
            }}
          >
            Projects
          </h1>
          <p
            className="text-[15px]"
            style={{ fontFamily: "'DM Sans', sans-serif", color: "#888880" }}
          >
            Things I&apos;ve built.
          </p>
        </div>

        {/* Project list */}
        <div>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              showDivider={i > 0}
              style={fadeStyle(120 + i * 80)}
            />
          ))}
        </div>

      </div>
    </main>
  );
}
