"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const COURSEWORK = [
  "ICS 6B: Boolean Logic and Discrete Structures",
  "ICS 6N: Computational Linear Algebra",
  "ICS 33: Intermediate Programming",
  "IN4MATX 43: Intro to Software Engineering",
];

export default function AboutPage() {
  const fadeRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      fadeRefs.current.forEach((el) => {
        if (!el) return;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
        el.style.transition = "none";
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    fadeRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el: HTMLElement | null, i: number) => {
    fadeRefs.current[i] = el;
  };

  const fadeStyle = (delay = 0): React.CSSProperties => ({
    opacity: 0,
    transform: "translateY(20px)",
    transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
  });

  return (
    <>
      {/* Hero */}
      <section className="pb-12 pt-4 sm:pb-16 sm:pt-8">
        <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-12">
          <div className="flex-1 mt-8 md:mt-0">
            <h1
              ref={(el) => addRef(el, 1)}
              style={fadeStyle(80)}
              className="mb-6 font-serif text-4xl leading-tight text-slate sm:text-5xl"
            >
              About Me
            </h1>
            <div
              ref={(el) => addRef(el, 2)}
              style={fadeStyle(160)}
              className="font-sans text-[15px] leading-relaxed text-ink space-y-4 max-w-[65ch]"
            >
              <p>
                I&apos;m studying Computer Science at UC Irvine (GPA: 3.88), working as a Learning Assistant for ICS 6B and pursuing undergraduate ML research through UCI&apos;s UROP research discovery program. I&apos;m AWS Certified Cloud Practitioner and a Hackathon winner.
              </p>
              <p>
                In the short term I want to ship products that solve real problems and land a SWE internship. Long term I&apos;m heading toward a career in software engineering. Right now I&apos;m trying to learn fast and find people to grow with.
              </p>
            </div>
          </div>

          <div
            ref={(el) => addRef(el, 3)}
            style={fadeStyle(240)}
            className="flex-shrink-0"
          >
            <div className="relative h-40 w-32 overflow-hidden bg-fog md:h-56 md:w-44">
              <Image
                src="/chase.jpg"
                alt="Chase Phung"
                fill
                className="object-cover grayscale"
                sizes="(min-width: 768px) 176px, 128px"
                priority
              />
            </div>
            <div className="mt-4">
              <p className="font-sans text-[10px] tracking-[0.2em] text-pencil uppercase">
                Location
              </p>
              <p className="font-sans text-[11px] tracking-[0.15em] text-slate uppercase font-semibold mt-0.5">
                Irvine, California
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section
        ref={(el) => addRef(el, 4)}
        style={fadeStyle(0)}
        className="py-12 sm:py-16"
      >
        <h2 className="mb-8 font-serif text-2xl text-slate sm:text-3xl">
          Resume
        </h2>

        <div className="border border-[rgba(13,13,13,0.08)] bg-warm-ash overflow-hidden">
          <iframe
            src="/resume.pdf#page=1&zoom=page-width&pagemode=none&navpanes=0&toolbar=0&scrollbar=0"
            className="w-full"
            style={{ height: "680px" }}
            title="Chase Phung Resume"
          >
            <p className="p-6 font-sans text-sm text-ink">
              Your browser does not support embedded PDFs.{" "}
              <a href="/resume.pdf" download className="text-forest underline">
                Download the resume instead.
              </a>
            </p>
          </iframe>
        </div>

        <div className="mt-4 flex justify-end">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.15em] uppercase bg-forest text-warm-ash px-5 py-2.5 transition-colors duration-150 hover:bg-forest-deep"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </div>
      </section>

      {/* Coursework */}
      <section
        ref={(el) => addRef(el, 5)}
        style={fadeStyle(0)}
        className="py-12 sm:py-16"
      >
        <h2 className="mb-8 font-serif text-2xl text-slate sm:text-3xl">
          Current Coursework
        </h2>

        <ul className="space-y-3 list-none p-0">
          {COURSEWORK.map((course, i) => (
            <li
              key={i}
              ref={(el) => addRef(el, 6 + i)}
              style={fadeStyle(i * 60)}
              className="font-sans text-[15px] leading-snug text-ink"
            >
              {course}
            </li>
          ))}
        </ul>
      </section>

      {/* Beyond the Terminal */}
      <section
        ref={(el) => addRef(el, 10)}
        style={fadeStyle(0)}
        className="py-12 sm:py-16"
      >
        <h2 className="mb-6 font-serif text-2xl text-slate sm:text-3xl">
          Beyond the Terminal
        </h2>

        <div className="font-sans text-[15px] leading-relaxed text-ink space-y-4 max-w-[65ch]">
          <p>
            Outside of CS, I am a jazz musician, hiker, and gym rat. I&apos;ve been to 6 national parks, and I&apos;m always planning the next road trip or flight.
          </p>
          <p>
            I go to hackathons mostly for fun and partly for the free food.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section
        ref={(el) => addRef(el, 11)}
        style={fadeStyle(0)}
        className="py-12 sm:py-16 border-t border-[rgba(13,13,13,0.08)]"
      >
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
