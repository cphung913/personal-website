"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  date: string;
  label: string;
  stack: string[];
  title: string;
  description: string;
  links: { label: string; href: string }[];
}

interface Post {
  date: string;
  readTime: string;
  title: string;
  summary: string;
  href: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FOCUS = {
  label: "Current Technical Focus",
  title: "ML Efficiency Research",
  description:
    "Surveying ML efficiency literature with a PhD student mentor through UCI's UROP Discovery Program. Identifying open research problems and developing a project for lab outreach.",
  status: "In Progress",
};

const POSTS: Post[] = [
  {
    date: "Mar 2025",
    readTime: "8 min read",
    title: "Why Compression Order Matters in Transformer Inference",
    summary:
      "Quantization before pruning vs. after — the ordering changes everything. A look at why sequencing compression ops isn't arbitrary.",
    href: "/blog/compression-ordering",
  },
];

const PROJECTS: Project[] = [
  {
    date: "MARCH 2026",
    label: "IRVINEHACKS PROJECT",
    stack: ["REACT", "NEXT.JS", "FASTAPI", "PYTHON", "SQLITE", "TESSERACT OCR"],
    title: "Property Risk Intelligence",
    description:
      "AI-powered document ingestion pipeline that extracts, classifies, and cross-checks property tax, title, and financial documents to flag collateral inconsistencies and generate structured risk findings for underwriter review. Built in 36 hours, validated with First American employees and industry underwriters.",
    links: [
      { label: "GITHUB", href: "https://github.com/cphung913/Irvine-Hacks-2026" },
      {
        label: "DEVPOST",
        href: "https://devpost.com/software/property-risk-intelligence",
      },
    ],
  },
];

// ─── Icons ────────────────────────────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 6h8M6 2l4 4-4 4" />
    </svg>
  );
}

// ─── Focus Card ───────────────────────────────────────────────────────────────

function FocusCard() {
  return (
    <div className="mb-12 rounded-[6px] border border-[rgba(13,13,13,0.1)] border-l-[3px] border-l-[#1A6B4A] bg-[rgba(26,107,74,0.02)] px-6 py-5">
      <p className="mb-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.12em] text-[#888880]">
        {FOCUS.label}
      </p>

      <h2 className="mb-3 font-serif text-[22px] leading-[1.25] text-[#2C3E50]">
        {FOCUS.title}
      </h2>

      <p className="mb-4 max-w-[520px] font-sans text-sm leading-[1.7] text-[#0D0D0D]">
        {FOCUS.description}
      </p>

      <div className="flex items-center gap-2">
        <span className="inline-block h-[7px] w-[7px] shrink-0 rounded-full bg-[#1A6B4A]" />
        <span className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-[#888880]">
          Status: {FOCUS.status}
        </span>
      </div>
    </div>
  );
}

// ─── Recent Writing ───────────────────────────────────────────────────────────

function RecentWriting() {
  return (
    <section className="mb-14">
      <div className="mb-7 flex items-baseline justify-between border-b border-[rgba(13,13,13,0.08)] pb-7">
        <h2 className="font-serif text-[26px] text-[#2C3E50]">
          Recent Writing
        </h2>
        <Link
          href="/blog"
          className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-[#888880] no-underline hover:text-[#1A6B4A]"
        >
          View All
        </Link>
      </div>

      {POSTS.map((post) => (
        <div key={post.title} className="grid grid-cols-[120px_1fr] gap-x-6 pb-7">
          <div>
            <p className="mb-0.5 font-sans text-[11px] uppercase tracking-[0.08em] text-[#888880]">
              {post.date}
            </p>
            <p className="font-sans text-[11px] uppercase tracking-[0.08em] text-[#888880]">
              {post.readTime}
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-serif text-[18px] leading-[1.3] text-[#2C3E50]">
              {post.title}
            </h3>
            <p className="mb-3 font-sans text-sm leading-[1.7] text-[#0D0D0D]">
              {post.summary}
            </p>
            <Link
              href={post.href}
              className="inline-flex items-center gap-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[#1A6B4A] no-underline hover:scale-105 transition-transform duration-150"
            >
              Read Essay <ArrowIcon />
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}

// ─── Featured Projects ────────────────────────────────────────────────────────

function FeaturedProjects() {
  return (
    <section className="mb-20">
      <div className="mb-7 flex items-baseline justify-between border-b border-[rgba(13,13,13,0.08)] pb-7">
        <h2 className="font-serif text-[26px] text-[#2C3E50]">
          Featured Projects
        </h2>
        <Link
          href="/projects"
          className="font-sans text-[10px] font-medium uppercase tracking-[0.1em] text-[#888880] no-underline hover:text-[#1A6B4A]"
        >
          View All
        </Link>
      </div>

      {PROJECTS.map((project) => (
        <div key={project.title} className="grid grid-cols-[180px_1fr] gap-x-6 pb-7">
          <div className="pt-1">
            <p className="mb-1 font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-[#888880]">
              {project.date}
            </p>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.1em] text-[#888880]">
              {project.label}
            </p>
          </div>

          <div>
            <h3 className="mb-2 font-serif text-[18px] text-[#2C3E50]">
              {project.title}
            </h3>
            <p className="mb-3 font-sans text-sm leading-[1.7] text-[#0D0D0D]">
              {project.description}
            </p>
            <div className="mb-5 flex flex-wrap gap-x-4 gap-y-1">
              {project.stack.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] tracking-[0.08em] text-[#888880]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.08em] text-[#1A6B4A] no-underline hover:scale-105 transition-transform duration-150"
                >
                  {link.label} <ArrowIcon />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
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
    <>
      {/* Hero */}
      <section className="mb-12" style={fadeStyle(0)}>
        <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[0.12em] text-[#888880]">
          CS Freshman · UC Irvine
        </p>

        <h1 className="mb-5 font-serif text-[clamp(48px,6vw,64px)] leading-[1.05] text-[#2C3E50]">
          Chase Phung
        </h1>

        <p className="mb-6 max-w-[480px] font-sans text-base leading-[1.7] text-[#0D0D0D]">
          Freshman at UC Irvine studying Computer Science. Aspriring software engineer with a focus on impact driven full-stack development and machine learning research.
        </p>

        {/* Social links */}
        <div className="flex gap-4">
          {[
            {
              icon: <GitHubIcon />,
              href: "https://github.com/cphung913",
              label: "GitHub",
            },
            {
              icon: <LinkedInIcon />,
              href: "https://linkedin.com/in/chasephung",
              label: "LinkedIn",
            },
            {
              icon: <MailIcon />,
              href: "mailto:chasephung13@gmail.com",
              label: "Email",
            },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="flex items-center text-[#2C3E50] no-underline transition-colors duration-150 hover:text-[#1A6B4A]"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </section>

      <div style={fadeStyle(80)}>
        <FocusCard />
      </div>
      <div style={fadeStyle(160)}>
        <FeaturedProjects />
      </div>
      {/* <RecentWriting /> */}
    </>
  );
}
