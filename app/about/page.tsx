"use client";

import { useEffect, useRef, useState } from "react";

const COURSEWORK = [
  "ICS 6N: Linear Algebra",
  "ICS 33: Intermediate Programming",
  "IN4MATX 43: Intro to Software Engineering",
  "UNI STU 3: Thrive in Research",
];

export default function AboutPage() {
  const [pdfError, setPdfError] = useState(false);
  const fadeRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
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

  const fadeStyle: React.CSSProperties = {
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 0.6s ease, transform 0.6s ease",
  };

  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#0D0D0D]">
      {/* ── Hero ── */}
      <section className="max-w-3xl mx-auto px-6 pt-20 pb-16">
        <div className="flex flex-col-reverse md:flex-row md:items-start md:gap-12">
          {/* Text */}
          <div className="flex-1 mt-8 md:mt-0">
            <h1
              ref={(el) => addRef(el, 1)}
              style={{ ...fadeStyle, transitionDelay: "80ms" }}
              className="font-['DM_Serif_Display'] text-5xl text-[#2C3E50] leading-tight mb-6"
            >
              About Me
            </h1>
            <div
              ref={(el) => addRef(el, 2)}
              style={{ ...fadeStyle, transitionDelay: "160ms" }}
              className="text-[15px] leading-relaxed text-[#444] space-y-4 font-['DM_Sans']"
            >
              <p>
                I'm studying Computer Science at UC Irvine, focused on building
                my technical skills and getting real experience. In the short
                term I want to ship a full-stack application that solves an
                actual problem, join a research lab working on ML efficiency,
                and land a SWE internship.
              </p>
              <p>
                Long term I'm heading toward a career in software engineering.
                Right now I'm trying to learn fast and find people to grow with.
              </p>
            </div>
          </div>

          {/* Photo + location */}
          <div
            ref={(el) => addRef(el, 3)}
            style={{ ...fadeStyle, transitionDelay: "240ms" }}
            className="flex-shrink-0"
          >
            <div className="w-36 h-44 md:w-44 md:h-56 overflow-hidden bg-[#ddd]">
              {/* Replace src with actual photo path */}
              <img
                src="/chase.jpg"
                alt="Chase Phung"
                className="w-full h-full object-cover grayscale"
                onError={(e) =>
                  ((e.target as HTMLImageElement).style.display = "none")
                }
              />
            </div>
            <div className="mt-4">
              <p className="text-[10px] tracking-[0.2em] text-[#888880] uppercase">
                Location
              </p>
              <p className="text-[11px] tracking-[0.15em] text-[#2C3E50] uppercase font-semibold mt-0.5">
                Irvine, California
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-[#E0DDD6]" />
      </div>

      {/* ── Resume ── */}
      <section
        ref={(el) => addRef(el, 4)}
        style={{ ...fadeStyle, transitionDelay: "0ms" }}
        className="max-w-3xl mx-auto px-6 py-16"
      >
        <h2 className="font-['DM_Serif_Display'] text-3xl text-[#2C3E50] mb-8">
          Resume
        </h2>

        {!pdfError ? (
          <div className="border border-[#E0DDD6] bg-white overflow-hidden">
            <iframe
              src="/resume.pdf"
              className="w-full"
              style={{ height: "680px" }}
              title="Chase Phung Resume"
              onError={() => setPdfError(true)}
            />
          </div>
        ) : (
          <div className="border border-[#E0DDD6] bg-white p-10 text-center">
            <p className="text-sm text-[#888880] mb-4 font-['DM_Sans']">
              Unable to load PDF preview.
            </p>
          </div>
        )}

        <div className="mt-4 flex justify-end">
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase bg-[#1A6B4A] text-white px-5 py-2.5 hover:bg-[#155a3d] transition-colors duration-200 font-['DM_Sans']"
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

      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-[#E0DDD6]" />
      </div>

      {/* ── Coursework ── */}
      <section
        ref={(el) => addRef(el, 5)}
        style={{ ...fadeStyle, transitionDelay: "0ms" }}
        className="max-w-3xl mx-auto px-6 py-16"
      >
        <h2 className="font-['DM_Serif_Display'] text-3xl text-[#2C3E50] mb-8">
          Current Coursework
        </h2>

        <ul className="list-disc space-y-4 pl-5">
          {COURSEWORK.map((course, i) => (
            <li
              key={i}
              ref={(el) => addRef(el, 6 + i)}
              style={{ ...fadeStyle, transitionDelay: `${i * 60}ms` }}
              className="text-[#2C3E50]"
            >
              <p className="font-['DM_Serif_Display'] text-lg leading-snug">
                {course}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="max-w-3xl mx-auto px-6">
        <hr className="border-[#E0DDD6]" />
      </div>

      {/* ── Beyond the Terminal ── */}
      <section
        ref={(el) => addRef(el, 10)}
        style={{ ...fadeStyle, transitionDelay: "0ms" }}
        className="max-w-3xl mx-auto px-6 py-16"
      >
        <h2 className="font-['DM_Serif_Display'] text-3xl text-[#2C3E50] mb-6">
          Beyond the Terminal
        </h2>

        <div className="font-['DM_Sans'] text-[15px] leading-relaxed text-[#444] space-y-4 max-w-xl">
          <p>
            Outside of CS, I am a jazz musician, hiker, and gym goer. I've been to 6 national parks, and I'm always planning the next road trip or vacation. 
          </p>
          <p>
            I show up to hackathons partly for the fun and partly for the
            free food.
          </p>
        </div>

        
      </section>

    </main>
  );
}
