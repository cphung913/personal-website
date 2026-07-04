"use client";

import { type ReactNode, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/reveal";
import Wave from "../components/wave";

/* ------------------------------------------------------------------ data */

const HERO = {
  lead: "Hi, I'm Chase,",
  accent: "Software Engineer",
  blurb:
    "Pursuing a career in software engineering and studying computer science at UC Irvine. I have experience across full-stack web and mobile development, databases and cloud, and building AI pipelines. I am passionate about designing systems, tackling hard problems, and shipping projects that solve real-world needs.",
};

const EDUCATION = {
  school: "University of California, Irvine",
  detail: "B.S. Computer Science · 3.84 GPA · Class of 2029",
};

const EXTRACURRICULARS = [
  {
    lead: "Director of External Affairs",
    rest: ", Sigma Eta Pi: UCI's entrepreneurship fraternity",
    when: "Jun 2026 – Present",
  },
  {
    lead: "Learning Assistant",
    rest: ", ICS 6B: Boolean Logic & Discrete Structures",
    when: "Mar 2026 – Jun 2026",
  },
  {
    lead: "Jazz Orchestra",
    rest: ", UC Irvine",
    when: "Sep 2025 - Jun 2026",
  },
];

const EXPERIENCE = {
  company: "Ease, Inc.",
  meta: ["Ease IQ team · Irvine, CA", "Jun 2026 – Present"],
  role: "Software Engineer Intern",
  bullets: [
    "Re-architected a 3-camera label-verification pipeline into a detection-triggered OCR system, cutting compute time by roughly 80%.",
    "Shipped a fully audited, multi-tenant user-impersonation system with defense-in-depth authorization.",
    "Fine-tuned a YOLO11 model to catch PPE non-conformance: 19% fewer false positives, +13% mAP50-95.",
  ],
  tags: ["Python", "React", "Next.js", "PostgreSQL", "Drizzle"],
};

const STARTUP = {
  name: "Pelennor",
  description:
    "An offline-first incident management platform for volunteer fire departments: a sync engine with conflict resolution, multi-tenant auth, and a voice-to-report pipeline that turns firefighter memos into NERIS-ready records.",
  tags: ["FastAPI", "React Native", "ElevenLabs", "Gemini"]
};

const HACKATHONS = [
  {
    badge: "Won Best AI for Environmental Impact",
    highlight: true,
    name: "DownStream",
    description:
      "Real-time chemical-spill propagation simulator for the Mississippi River, delivering cost and mitigation insights for emergency managers. Built at UCI AWS Cloud Hacks 2026.",
  },
  {
    badge: null,
    highlight: false,
    name: "Property Risk Intelligence",
    description:
      "OCR-based document analysis that spots inconsistencies across tax, title, and financial documents in property underwriting. Built at IrvineHacks 2026.",
  },
];

/* -------------------------------------------------------------- primitives */

const INNER = "mx-auto w-full max-w-[1080px] px-6 sm:px-12";

function BigHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-serif text-[clamp(2.25rem,5vw,3.25rem)] font-medium leading-none">
      {children}
    </h2>
  );
}

function Tags({ items, ink = false }: { items: string[]; ink?: boolean }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className={`rounded-full px-3 py-1.5 font-mono text-[11px] ${
            ink
              ? "bg-sage-light/20 text-sage-light"
              : "bg-sage/15 text-sage-deep"
          }`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function PhotoFrame({
  src,
  caption,
  className = "",
  tone = "paper",
  fit = "contain",
}: {
  src: string;
  caption: string;
  className?: string;
  tone?: "paper" | "ink";
  fit?: "contain" | "cover";
}) {
  const isInk = tone === "ink";
  // Until the real photo lands in /public, fall back to a captioned hatch frame
  // instead of a broken-image icon.
  const [broken, setBroken] = useState(false);
  return (
    <div
      className={`relative flex items-end overflow-hidden rounded-[26px] ${
        isInk ? "border border-paper/15" : "border border-ink/10"
      } ${className}`}
      role="img"
      aria-label={caption}
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, ${
          isInk ? "rgba(245,244,239,.06)" : "rgba(28,43,69,.05)"
        } 0 10px, transparent 10px 20px)`,
      }}
    >
      {!broken && (
        <Image
          src={src}
          alt={caption}
          fill
          sizes="(min-width: 1024px) 520px, 100vw"
          className={fit === "cover" ? "object-cover" : "object-contain"}
          onError={() => setBroken(true)}
        />
      )}
      {!broken && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
          style={{
            background: "linear-gradient(to top, rgba(20,26,40,.6), transparent)",
          }}
        />
      )}
      <span
        className={`relative z-10 p-5 font-mono text-[11px] leading-snug ${
          broken ? (isInk ? "text-paper/60" : "text-ink/55") : "text-paper/90"
        }`}
      >
        {caption}
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------- page */

export default function HomePage() {
  return (
    <>
      {/* Hero + Education (paper) */}
      <div className={INNER}>
        <Reveal>
          <section className="grid grid-cols-1 items-center gap-12 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
            <div>
              <h1 className="font-serif text-[clamp(2.75rem,6vw,4rem)] font-medium leading-[1.05]">
                {HERO.lead}{" "}
                <span className="italic text-sage">{HERO.accent}</span>
              </h1>
              <p className="mt-6 max-w-[52ch] text-[17px] leading-[1.65] text-ink/75">
                {HERO.blurb}
              </p>
              <div className="mt-7 flex flex-wrap gap-2.5">
                <a
                  href="mailto:chasephung13@gmail.com"
                  className="rounded-full bg-ink px-4 py-2 text-[13px] font-semibold text-paper no-underline transition-opacity duration-150 hover:opacity-90"
                >
                  Email →
                </a>
                <a
                  href="https://github.com/cphung913"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/25 px-4 py-2 text-[13px] font-semibold text-ink no-underline transition-colors duration-150 hover:border-ink/50"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/chasephung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/25 px-4 py-2 text-[13px] font-semibold text-ink no-underline transition-colors duration-150 hover:border-ink/50"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="justify-self-center">
              <div
                className="relative aspect-[4/5] w-[280px] overflow-hidden sm:w-[340px]"
                style={{
                  borderRadius: "58% 42% 55% 45% / 48% 55% 45% 52%",
                }}
              >
                <Image
                  src="/chase.jpg"
                  alt="Chase Phung"
                  fill
                  className="object-cover"
                  style={{ transform: "scale(1.6)", transformOrigin: "50% 45%" }}
                  sizes="(min-width: 640px) 340px, 280px"
                  priority
                />
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal delay={80}>
          <div className="pb-14 pt-16 sm:pt-20">
            <BigHeading>Education</BigHeading>
            <div className="mt-6 flex flex-col gap-3 rounded-[26px] bg-ink px-8 py-6 text-paper sm:flex-row sm:items-baseline sm:justify-between">
              <span className="font-serif text-[22px] font-medium">
                {EDUCATION.school}
              </span>
              <span className="text-sm text-paper/80">{EDUCATION.detail}</span>
            </div>

            <p className="mt-8 font-mono text-[13px] uppercase tracking-[0.1em] text-sage-deep">
              Extracurriculars
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {EXTRACURRICULARS.map((x) => (
                <li
                  key={x.lead}
                  className="relative pl-6 text-[14.5px] leading-[1.6] text-ink/85 before:absolute before:left-0 before:top-[9px] before:h-2 before:w-2 before:rounded-full before:bg-sage before:content-['']"
                >
                  <strong className="font-semibold">{x.lead}</strong>
                  {x.rest}
                  {x.when && <span className="text-ink/50"> · {x.when}</span>}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      {/* Experience (sage band) */}
      <Wave from="var(--color-paper)" to="var(--color-sage-band)" variant={0} />
      <section id="experience" className="scroll-mt-24 bg-sage-band py-14 sm:py-16">
        <Reveal className={INNER}>
          <BigHeading>Experience</BigHeading>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-[210px_1fr] sm:gap-10">
            <div className="text-[13px] leading-[1.7] text-ink/60">
              <strong className="font-serif text-base text-ink">
                {EXPERIENCE.company}
              </strong>
              {EXPERIENCE.meta.map((m) => (
                <div key={m}>{m}</div>
              ))}
            </div>
            <div>
              <p className="text-xl font-bold">{EXPERIENCE.role}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {EXPERIENCE.bullets.map((b) => (
                  <li
                    key={b}
                    className="relative pl-[22px] text-[14.5px] leading-[1.65] text-ink/85 before:absolute before:left-0 before:top-[9px] before:h-2 before:w-2 before:rounded-full before:bg-sage before:content-['']"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <Tags items={EXPERIENCE.tags} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Startups (ink band) */}
      <Wave from="var(--color-sage-band)" to="var(--color-ink)" variant={1} />
      <section id="startups" className="scroll-mt-24 bg-ink py-14 text-paper sm:py-16">
        <Reveal className={INNER}>
          <BigHeading>Startups</BigHeading>
          <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_480px]">
            <div>
              <p className="font-serif text-[28px] font-semibold">
                {STARTUP.name}
              </p>
              <p className="mt-3 max-w-[54ch] text-[14.5px] leading-[1.65] text-paper/75">
                {STARTUP.description}
              </p>
              <Tags items={STARTUP.tags} ink />
            </div>
            <PhotoFrame
              src="/pelennor.jpg"
              tone="ink"
              className="aspect-[3/2] w-full"
              caption="Chase presenting Pelennor"
            />
          </div>
        </Reveal>
      </section>

      {/* Hackathons (paper band) */}
      <Wave from="var(--color-ink)" to="var(--color-paper)" variant={2} />
      <section id="hackathons" className="scroll-mt-24 bg-paper py-14 sm:py-16">
        <Reveal className={INNER}>
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <BigHeading>Hackathons</BigHeading>
            <Link
              href="/projects"
              className="font-mono text-[13px] font-medium text-sage-deep no-underline transition-colors duration-150 hover:text-sage"
            >
              See all projects →
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {HACKATHONS.map((h) => (
              <div
                key={h.name}
                className="rounded-[26px] border border-ink/10 bg-white/60 p-8 shadow-[0_2px_10px_rgba(28,43,69,.05)]"
              >
                <p className={`font-serif text-[26px] font-semibold ${h.badge ? "mb-2" : ""}`}>
                  {h.name}
                </p>
                {h.badge && (
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.04em] mb-1 ${
                      h.highlight
                        ? "bg-sage text-paper"
                        : "bg-ink/10 text-ink"
                    }`}
                  >
                    {h.highlight && <span aria-hidden>★</span>}
                    {h.badge}
                  </span>
                )}
                <p className="mt-2 text-[14px] leading-[1.65] text-ink/75">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
          <PhotoFrame
            src="/downstream.jpg"
            fit="cover"
            className="mt-6 aspect-[3292/1600] w-full"
            caption="DownStream team: Best AI for Environmental Impact, UCI AWS Cloud Hacks 2026"
          />
        </Reveal>
      </section>
    </>
  );
}
