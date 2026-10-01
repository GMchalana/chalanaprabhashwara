'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion';

interface Job {
  num: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  highlights: string[];
  tech: string[];
  renderLogo: () => JSX.Element;
}

const jobs: Job[] = [
  {
    num: '01',
    company: 'Axonall Global',
    role: 'Software Engineer',
    period: 'Jul 2025 — Present',
    location: 'Colombo, Sri Lanka',
    type: 'Full-time',
    highlights: [
      'Integrated Sabre booking API and carbon footprint calculation system',
      'Built responsive client-facing web applications with React & Next.js',
      'Developed carbon data aggregation pipeline from multiple external sources',
      'Engineered cloud infrastructure and microservices deployed on AWS',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'AWS', 'REST APIs'],
    renderLogo: () => (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 7L32 31H26L23.5 25H16.5L14 31H8L20 7Z"
          stroke="#F8F8F8"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M18 21H22" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="7" r="2" fill="#F59E0B" />
      </svg>
    ),
  },
  {
    num: '02',
    company: 'DennamLK (Pvt) Ltd',
    role: 'Software Engineer / Architect',
    period: 'Jan 2025 — Present',
    location: 'Remote',
    type: 'Part-time',
    highlights: [
      'Built 15+ responsive web applications across diverse client projects',
      'Improved code quality through systematic unit testing and QA processes',
      'Reduced bug reports by 40% through rigorous architecture and code reviews',
      'Designed high-performance database schemas and query structures in PostgreSQL',
    ],
    tech: ['React', 'Angular', 'Vue.js', 'Python', 'PostgreSQL', 'TailwindCSS'],
    renderLogo: () => (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 9H22C28.075 9 33 13.925 33 20C33 26.075 28.075 31 22 31H12V9Z"
          stroke="#F8F8F8"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M18 16H21C23.209 16 25 17.791 25 20C25 22.209 23.209 24 21 24H18V16Z"
          stroke="#F59E0B"
          strokeWidth="1.8"
        />
      </svg>
    ),
  },
  {
    num: '03',
    company: 'Agro World (Pvt) Ltd',
    role: 'Associate Software Engineer',
    period: 'Aug 2024 — Jun 2025',
    location: 'Colombo, Sri Lanka',
    type: 'Full-time',
    highlights: [
      'Designed and managed database architecture for multiple production systems',
      'Introduced React, Next.js and modern tooling to the existing tech stack',
      'Managed cloud infrastructure on AWS and Digital Ocean with containerization',
      'Implemented IoT telemetry interfaces for real-time agricultural data',
    ],
    tech: ['React', 'Next.js', 'Flutter', 'AWS', 'DigitalOcean', 'Docker', 'Linux'],
    renderLogo: () => (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M31 10C31 10 23 10 18 15C13 20 13 28 13 28C13 28 21 28 26 23C31 18 31 10 31 10Z"
          stroke="#F8F8F8"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M16 25L26 15" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
        <path d="M11 29C13 26 16 24 20 22" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '04',
    company: 'Efito Solutions (Pvt) Ltd',
    role: 'Trainee Software Engineer',
    period: 'Feb 2024 — Aug 2024',
    location: 'Colombo, Sri Lanka',
    type: 'Full-time',
    highlights: [
      'Developed cross-platform mobile application features with Flutter framework',
      'Designed and built administrative web dashboards using React and Node.js',
      'Collaborated on feature implementation, bug resolution, and agile sprints',
      'Integrated Firebase real-time database and authentication services',
    ],
    tech: ['Flutter', 'React', 'Node.js', 'MongoDB', 'Firebase'],
    renderLogo: () => (
      <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="20,7 33,14.5 33,29.5 20,37 7,29.5 7,14.5"
          stroke="#F8F8F8"
          strokeWidth="2"
          fill="none"
        />
        <path d="M15 17H26M15 22H23M15 27H26" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

interface ScreenProps {
  job: Job;
  index: number;
  scrollYProgress: MotionValue<number>;
}

function ExperienceScreen({ job, index, scrollYProgress }: ScreenProps) {
  // Deterministic, perfectly calibrated scroll ranges for each card
  let opacity: MotionValue<number>;
  let scale: MotionValue<number>;
  let y: MotionValue<number>;

  if (index === 0) {
    // Card 0: starts visible, fades/scales back from 0.15 to 0.30
    opacity = useTransform(scrollYProgress, [0, 0.15, 0.30, 0.31], [1, 1, 0, 0]);
    scale = useTransform(scrollYProgress, [0, 0.15, 0.30, 0.31], [1, 1, 0.94, 0.94]);
    y = useTransform(scrollYProgress, [0, 0.15, 0.30, 0.31], [0, 0, -25, -25]);
  } else if (index === 1) {
    // Card 1: enters 0.15-0.30, stays visible 0.30-0.45, exits 0.45-0.60
    opacity = useTransform(scrollYProgress, [0.14, 0.15, 0.30, 0.45, 0.60, 0.61], [0, 0, 1, 1, 0, 0]);
    scale = useTransform(scrollYProgress, [0.14, 0.15, 0.30, 0.45, 0.60, 0.61], [0.94, 0.94, 1, 1, 0.94, 0.94]);
    y = useTransform(scrollYProgress, [0.14, 0.15, 0.30, 0.45, 0.60, 0.61], [25, 25, 0, 0, -25, -25]);
  } else if (index === 2) {
    // Card 2: enters 0.45-0.60, stays visible 0.60-0.75, exits 0.75-0.90
    opacity = useTransform(scrollYProgress, [0.44, 0.45, 0.60, 0.75, 0.90, 0.91], [0, 0, 1, 1, 0, 0]);
    scale = useTransform(scrollYProgress, [0.44, 0.45, 0.60, 0.75, 0.90, 0.91], [0.94, 0.94, 1, 1, 0.94, 0.94]);
    y = useTransform(scrollYProgress, [0.44, 0.45, 0.60, 0.75, 0.90, 0.91], [25, 25, 0, 0, -25, -25]);
  } else {
    // Card 3: enters 0.75-0.90, stays visible to end 0.90-1.00
    opacity = useTransform(scrollYProgress, [0.74, 0.75, 0.90, 1.0], [0, 0, 1, 1]);
    scale = useTransform(scrollYProgress, [0.74, 0.75, 0.90, 1.0], [0.94, 0.94, 1, 1]);
    y = useTransform(scrollYProgress, [0.74, 0.75, 0.90, 1.0], [25, 25, 0, 0]);
  }

  // Ensure inactive cards are hidden and cannot block pointer interactions
  const visibility = useTransform(opacity, (v) => (v > 0.01 ? 'visible' : 'hidden'));
  const zIndex = useTransform(opacity, (v) => (v > 0.4 ? 20 : 10));

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        visibility,
        zIndex,
      }}
      className="absolute inset-0 flex items-center justify-center w-full px-6 lg:px-12 pointer-events-auto"
    >
      <div className="w-full max-w-6xl relative">
        {/* Background Watermark Index */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[#121212] font-mono font-bold leading-none hidden lg:block -z-10"
          style={{ fontSize: 'clamp(6rem, 15vw, 14rem)' }}
        >
          {job.num}
        </div>

        {/* Company Header Row */}
        <div className="flex items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Clean Monochrome Dummy Logo */}
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{
              background: '#0E0E0E',
              border: '1px solid #222222',
            }}
          >
            {job.renderLogo()}
          </div>

          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <h3
                className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F8F8F8]"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {job.company}
              </h3>
              <span className="tag-accent">{job.type}</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5 text-xs sm:text-sm">
              <span className="text-[#F59E0B] font-medium font-sans">{job.role}</span>
              <span className="text-[#444] hidden sm:inline">/</span>
              <span className="text-[#888] font-mono">{job.period}</span>
              <span className="text-[#444] hidden sm:inline">/</span>
              <span className="text-[#888] font-sans">{job.location}</span>
            </div>
          </div>
        </div>

        {/* Minimal Divider */}
        <div className="w-full h-[1px] bg-[#1F1F1F] my-4 sm:my-6" />

        {/* Two-Column Editorial Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Key Deliverables / Highlights */}
          <div className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-widest text-[#555] font-mono mb-3 sm:mb-4">
              Key Contributions & Highlights
            </p>
            <ul className="space-y-2.5 sm:space-y-3">
              {job.highlights.map((h, hi) => (
                <li key={hi} className="flex items-start gap-3">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ background: '#F59E0B' }}
                  />
                  <span
                    className="text-[#B0B0B0] text-sm sm:text-base leading-relaxed font-sans"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {h}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Column */}
          <div className="lg:col-span-4">
            <p className="text-[11px] uppercase tracking-widest text-[#555] font-mono mb-3 sm:mb-4">
              Technologies & Tools
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {job.tech.map((t, ti) => (
                <span key={ti} className="tag">
                  {t}
                </span>
              ))}
            </div>

            {/* Role index meta */}
            <div className="mt-6 pt-4 border-t border-[#1A1A1A] text-xs font-mono text-[#555]">
              <span className="text-[#F59E0B]">{job.num}</span> of 04 · {job.type} Position
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function CareerHistory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Directly track scroll position with native responsiveness
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Deterministic active index matching the 4 stages
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest >= 0.75) {
      setActiveIndex(3);
    } else if (latest >= 0.45) {
      setActiveIndex(2);
    } else if (latest >= 0.15) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }
  });

  // Smooth jump to any card
  const scrollToCard = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const scrollableDistance = containerRef.current.scrollHeight - window.innerHeight;
    const targets = [0.05, 0.38, 0.68, 0.95];
    window.scrollTo({
      top: scrollTop + scrollableDistance * targets[index],
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="career"
      ref={containerRef}
      className="relative"
      style={{
        // 360vh total scroll depth (90vh per company), providing comfortable natural scrolling
        height: `${jobs.length * 90}vh`,
        background: '#050505',
        borderBottom: '1px solid #1F1F1F',
      }}
    >
      {/* Sticky Full-Screen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Top Minimal Editorial Navigation */}
        <div
          className="relative z-30 pt-16 sm:pt-20 px-6 lg:px-12 w-full max-w-7xl mx-auto flex items-center justify-between"
          style={{ borderBottom: '1px solid #141414', paddingBottom: '1rem' }}
        >
          <div>
            <p className="section-num">03 — Experience</p>
            <h2
              className="text-lg sm:text-xl font-bold tracking-tight text-[#F8F8F8] mt-0.5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Work <span className="text-[#F59E0B]">History</span>
            </h2>
          </div>

          {/* Minimal Company Numbers / Switcher */}
          <div className="flex items-center gap-2 sm:gap-4 font-mono text-xs">
            {jobs.map((j, i) => (
              <button
                key={i}
                onClick={() => scrollToCard(i)}
                className="transition-colors duration-200 cursor-pointer flex items-center gap-1.5 py-1 px-1.5"
                style={{
                  color: activeIndex === i ? '#F59E0B' : '#555555',
                  borderBottom: activeIndex === i ? '1px solid #F59E0B' : '1px solid transparent',
                }}
              >
                <span>{j.num}</span>
                <span className="hidden md:inline">{j.company.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Stacked Full-Screen Unboxed Screens */}
        <div className="relative flex-1 w-full h-full flex items-center justify-center overflow-hidden">
          {jobs.map((job, index) => (
            <ExperienceScreen
              key={index}
              job={job}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* Bottom Minimal Progress Bar */}
        <div
          className="relative z-30 pb-5 px-6 lg:px-12 w-full max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-[#555]"
          style={{ borderTop: '1px solid #141414', paddingTop: '0.75rem' }}
        >
          <span>Scroll to explore timeline</span>
          <div className="flex items-center gap-3">
            <span>0{activeIndex + 1}</span>
            <div className="w-24 h-[2px] bg-[#1A1A1A] overflow-hidden">
              <div
                className="h-full bg-[#F59E0B] transition-all duration-300 ease-out"
                style={{ width: `${((activeIndex + 1) / jobs.length) * 100}%` }}
              />
            </div>
            <span>0{jobs.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
