'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion';

interface Job {
  num: string;
  company: string;
  shortName: string;
  role: string;
  period: string;
  yearSpan: string;
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
    shortName: 'Axonall',
    role: 'Software Engineer',
    period: 'Jul 2025 — Present',
    yearSpan: '2025 — Present',
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
    company: 'Miraq LABS (Pvt) Ltd',
    shortName: 'Miraq LABS',
    role: 'Software Engineer / Architect',
    period: 'Jan 2025 — Present',
    yearSpan: '2025 — Present',
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
    shortName: 'Agro World',
    role: 'Associate Software Engineer',
    period: 'Aug 2024 — Jun 2025',
    yearSpan: '2024 — 2025',
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
    shortName: 'Efito',
    role: 'Trainee Software Engineer',
    period: 'Feb 2024 — Aug 2024',
    yearSpan: '2024',
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
  let opacity: MotionValue<number>;
  let scale: MotionValue<number>;
  let y: MotionValue<number>;
  let z: MotionValue<number>;
  let rotateX: MotionValue<number>;
  let watermarkScale: MotionValue<number>;
  let watermarkY: MotionValue<number>;

  if (index === 0) {
    opacity = useTransform(scrollYProgress, [0, 0.15, 0.30, 0.31], [1, 1, 0, 0]);
    scale = useTransform(scrollYProgress, [0, 0.15, 0.30, 0.31], [1, 1, 0.88, 0.88]);
    y = useTransform(scrollYProgress, [0, 0.15, 0.30, 0.31], [0, 0, -35, -35]);
    z = useTransform(scrollYProgress, [0, 0.15, 0.30, 0.31], [0, 0, -240, -240]);
    rotateX = useTransform(scrollYProgress, [0, 0.15, 0.30, 0.31], [0, 0, -6, -6]);
    watermarkScale = useTransform(scrollYProgress, [0, 0.15, 0.30], [1, 1, 0.7]);
    watermarkY = useTransform(scrollYProgress, [0, 0.15, 0.30], [0, 0, -60]);
  } else if (index === 1) {
    opacity = useTransform(scrollYProgress, [0.14, 0.15, 0.30, 0.45, 0.60, 0.61], [0, 0, 1, 1, 0, 0]);
    scale = useTransform(scrollYProgress, [0.14, 0.15, 0.30, 0.45, 0.60, 0.61], [0.92, 0.92, 1, 1, 0.88, 0.88]);
    y = useTransform(scrollYProgress, [0.14, 0.15, 0.30, 0.45, 0.60, 0.61], [35, 35, 0, 0, -35, -35]);
    z = useTransform(scrollYProgress, [0.14, 0.15, 0.30, 0.45, 0.60, 0.61], [80, 80, 0, 0, -240, -240]);
    rotateX = useTransform(scrollYProgress, [0.14, 0.15, 0.30, 0.45, 0.60, 0.61], [6, 6, 0, 0, -6, -6]);
    watermarkScale = useTransform(scrollYProgress, [0.15, 0.30, 0.45, 0.60], [1.3, 1, 1, 0.7]);
    watermarkY = useTransform(scrollYProgress, [0.15, 0.30, 0.45, 0.60], [60, 0, 0, -60]);
  } else if (index === 2) {
    opacity = useTransform(scrollYProgress, [0.44, 0.45, 0.60, 0.75, 0.90, 0.91], [0, 0, 1, 1, 0, 0]);
    scale = useTransform(scrollYProgress, [0.44, 0.45, 0.60, 0.75, 0.90, 0.91], [0.92, 0.92, 1, 1, 0.88, 0.88]);
    y = useTransform(scrollYProgress, [0.44, 0.45, 0.60, 0.75, 0.90, 0.91], [35, 35, 0, 0, -35, -35]);
    z = useTransform(scrollYProgress, [0.44, 0.45, 0.60, 0.75, 0.90, 0.91], [80, 80, 0, 0, -240, -240]);
    rotateX = useTransform(scrollYProgress, [0.44, 0.45, 0.60, 0.75, 0.90, 0.91], [6, 6, 0, 0, -6, -6]);
    watermarkScale = useTransform(scrollYProgress, [0.45, 0.60, 0.75, 0.90], [1.3, 1, 1, 0.7]);
    watermarkY = useTransform(scrollYProgress, [0.45, 0.60, 0.75, 0.90], [60, 0, 0, -60]);
  } else {
    opacity = useTransform(scrollYProgress, [0.74, 0.75, 0.90, 1.0], [0, 0, 1, 1]);
    scale = useTransform(scrollYProgress, [0.74, 0.75, 0.90, 1.0], [0.92, 0.92, 1, 1]);
    y = useTransform(scrollYProgress, [0.74, 0.75, 0.90, 1.0], [35, 35, 0, 0]);
    z = useTransform(scrollYProgress, [0.74, 0.75, 0.90, 1.0], [80, 80, 0, 0]);
    rotateX = useTransform(scrollYProgress, [0.74, 0.75, 0.90, 1.0], [6, 6, 0, 0]);
    watermarkScale = useTransform(scrollYProgress, [0.75, 0.90, 1.0], [1.3, 1, 1]);
    watermarkY = useTransform(scrollYProgress, [0.75, 0.90, 1.0], [60, 0, 0]);
  }

  const visibility = useTransform(opacity, (v) => (v > 0.01 ? 'visible' : 'hidden'));
  const zIndex = useTransform(opacity, (v) => (v > 0.4 ? 20 : 10));

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        z,
        rotateX,
        visibility,
        zIndex,
        transformStyle: 'preserve-3d',
      }}
      className="absolute inset-0 flex items-center justify-center w-full px-6 lg:px-16 pointer-events-auto will-change-transform"
    >
      <div className="w-full max-w-6xl relative pb-12 sm:pb-16">
        {/* Parallax 3D Watermark Milestone Number */}
        <motion.div
          style={{
            scale: watermarkScale,
            y: watermarkY,
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none text-[#111111] font-mono font-bold leading-none hidden lg:block -z-10 transition-transform duration-100 ease-out"
        >
          <span style={{ fontSize: 'clamp(8rem, 18vw, 16rem)' }}>{job.num}</span>
        </motion.div>

        {/* Company Header Row with Clean Monochrome Logo */}
        <div className="flex items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-105"
            style={{
              background: '#0D0D0D',
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

        {/* Minimal Editorial Divider with Animated Amber Trace */}
        <div className="relative w-full h-[1px] bg-[#1E1E1E] my-4 sm:my-6 overflow-hidden">
          <div
            className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-transparent via-[#F59E0B]/60 to-transparent"
            style={{
              animation: 'traceLine 4s ease-in-out infinite',
            }}
          />
        </div>

        {/* Two-Column Editorial Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Key Deliverables & Highlights */}
          <div className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-widest text-[#555] font-mono mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              Key Contributions & Highlights
            </p>
            <ul className="space-y-2.5 sm:space-y-3">
              {job.highlights.map((h, hi) => (
                <li key={hi} className="flex items-start gap-3 group">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 transition-transform duration-200 group-hover:scale-125"
                    style={{ background: '#F59E0B' }}
                  />
                  <span
                    className="text-[#B0B0B0] text-sm sm:text-base leading-relaxed font-sans group-hover:text-[#E0E0E0] transition-colors"
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
                <span key={ti} className="tag text-[11px]">
                  {t}
                </span>
              ))}
            </div>

            {/* Role metadata */}
            <div className="mt-6 pt-4 border-t border-[#1A1A1A] flex items-center justify-between text-xs font-mono text-[#555]">
              <span>
                <span className="text-[#F59E0B] font-semibold">{job.num}</span> / 04
              </span>
              <span className="text-[#777]">{job.type}</span>
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
  const [routeLabel, setRouteLabel] = useState('AT STATION 01 · AXONALL GLOBAL');

  // Directly track scroll position with native responsiveness
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Calculate moving percentage for the traveling waypoint beacon along the trajectory
  const trajectoryProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // Dynamic route tracker: reveals traveling status between places
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    // Determine active index
    if (latest >= 0.75) {
      setActiveIndex(3);
    } else if (latest >= 0.45) {
      setActiveIndex(2);
    } else if (latest >= 0.15) {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }

    // Determine descriptive travel status
    if (latest < 0.15) {
      setRouteLabel('STOP 01 · AXONALL GLOBAL (COLOMBO)');
    } else if (latest < 0.30) {
      setRouteLabel('EN ROUTE: AXONALL → DENNAMLK');
    } else if (latest < 0.45) {
      setRouteLabel('STOP 02 · DENNAMLK PVT LTD (REMOTE)');
    } else if (latest < 0.60) {
      setRouteLabel('EN ROUTE: DENNAMLK → AGRO WORLD');
    } else if (latest < 0.75) {
      setRouteLabel('STOP 03 · AGRO WORLD PVT LTD (COLOMBO)');
    } else if (latest < 0.90) {
      setRouteLabel('EN ROUTE: AGRO WORLD → EFITO SOLUTIONS');
    } else {
      setRouteLabel('STOP 04 · EFITO SOLUTIONS (COLOMBO)');
    }
  });

  // Smooth jump to any specific station when clicked
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
        // 360vh total scroll depth (90vh per company)
        height: `${jobs.length * 90}vh`,
        background: '#050505',
        borderBottom: '1px solid #1F1F1F',
      }}
    >
      {/* Sticky Full-Screen Viewport with 3D Perspective */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between"
        style={{ perspective: '1200px' }}
      >
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

          {/* Quick Route Status readout in top bar */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-xs text-[#777] bg-[#0E0E0E] px-3 py-1.5 rounded-full border border-[#222]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            <span className="text-[#E0E0E0]">{routeLabel}</span>
          </div>
        </div>

        {/* Stacked Full-Screen Unboxed Screens with 3D Depth */}
        <div
          className="relative flex-1 w-full h-full flex items-center justify-center overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {jobs.map((job, index) => (
            <ExperienceScreen
              key={index}
              job={job}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        {/* ============================================================
            BOTTOM JOURNEY TRAJECTORY ROUTE TRACK
            Visually displays traveling from station to station with 
            an animated beacon moving along the route between all 4 stops
        ============================================================ */}
        <div
          className="relative z-30 pb-6 px-6 lg:px-12 w-full max-w-7xl mx-auto"
          style={{ borderTop: '1px solid #141414', paddingTop: '1rem' }}
        >
          {/* Top route metadata */}
          <div className="flex items-center justify-between text-[11px] font-mono text-[#666] mb-3">
            <div className="flex items-center gap-2">
              <span className="text-[#F59E0B] font-bold">CAREER ROUTE //</span>
              <span className="text-[#A0A0A0] uppercase">{routeLabel}</span>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <span>TOTAL: 04 STATIONS</span>
              <span className="text-[#333]">·</span>
              <span>2024 — 2026 ROADMAP</span>
            </div>
          </div>

          {/* The Physical Trajectory Route Track */}
          <div className="relative w-full py-2">
            {/* Background Route Rail Line */}
            <div className="absolute top-1/2 -translate-y-1/2 left-3 right-3 h-[2px] bg-[#181818]" />

            {/* Filled Active Amber Route Line */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 left-3 h-[2px] bg-gradient-to-r from-[#F59E0B] to-[#FCD34D]"
              style={{
                width: trajectoryProgress,
              }}
            />

            {/* Animated Traveling Waypoint Beacon that glides along the route */}
            <motion.div
              style={{
                left: trajectoryProgress,
              }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 pointer-events-none z-20"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-3.5 h-3.5 rounded-full bg-[#F59E0B] shadow-[0_0_12px_#F59E0B]" />
                <div className="absolute w-6 h-6 rounded-full bg-[#F59E0B]/30 animate-ping" />
              </div>
            </motion.div>

            {/* 4 Interactive Waypoint Stations */}
            <div className="relative z-10 flex items-center justify-between">
              {jobs.map((j, i) => {
                const isCurrent = activeIndex === i;
                const isPast = activeIndex > i;

                return (
                  <button
                    key={i}
                    onClick={() => scrollToCard(i)}
                    className="flex flex-col items-center cursor-pointer group transition-all text-left"
                    style={{ background: 'none', border: 'none', padding: 0 }}
                  >
                    {/* Station Waypoint Node */}
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isCurrent ? '#050505' : isPast ? '#F59E0B' : '#111111',
                        border: isCurrent
                          ? '2px solid #F59E0B'
                          : isPast
                            ? '2px solid #F59E0B'
                            : '1.5px solid #282828',
                        boxShadow: isCurrent ? '0 0 10px rgba(245, 158, 11, 0.8)' : 'none',
                        transform: isCurrent ? 'scale(1.2)' : 'scale(1)',
                      }}
                    >
                      {isPast ? (
                        <div className="w-1.5 h-1.5 rounded-full bg-black" />
                      ) : isCurrent ? (
                        <div className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                      ) : (
                        <div className="w-1 h-1 rounded-full bg-[#444]" />
                      )}
                    </div>

                    {/* Station Name & Info Badge */}
                    <div className="mt-2 text-center">
                      <p
                        className="text-xs font-mono font-bold transition-colors duration-200"
                        style={{
                          color: isCurrent ? '#F59E0B' : isPast ? '#C0C0C0' : '#555555',
                        }}
                      >
                        {j.num} {j.shortName}
                      </p>

                      <p
                        className="text-[10px] font-mono hidden md:block transition-colors duration-200"
                        style={{
                          color: isCurrent ? '#A0A0A0' : '#444444',
                        }}
                      >
                        {j.yearSpan}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
