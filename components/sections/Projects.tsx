'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface Project {
  num: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  featured?: boolean;
}

const projects: Project[] = [
  {
    num: '01',
    title: 'Cloud POS System',
    category: 'SaaS · Web Application',
    description: 'Fully featured cloud-based POS for retail businesses with inventory management, real-time analytics, and multi-store support.',
    image: 'cloudpos.png',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Cloudflare'],
    featured: true,
  },
  {
    num: '02',
    title: 'ATM Security System',
    category: 'Mobile · IoT · ML',
    description: 'IoT and machine learning based system improving ATM security with real-time monitoring and predictive analytics.',
    image: 'mock01.png',
    tags: ['Flutter', 'Python', 'Firebase', 'ML'],
    featured: true,
  },
  {
    num: '03',
    title: 'PDF Converter',
    category: 'Web Application',
    description: 'Batch file-to-PDF conversion with real-time progress tracking and support for multiple input formats.',
    image: 'pdfconverter.png',
    tags: ['Next.js', 'PDFJS', 'TypeScript'],
  },
  {
    num: '04',
    title: 'Local POS System',
    category: 'Desktop · Offline',
    description: 'Fully offline POS system with inventory management, sales analytics, and SQLite-backed data persistence.',
    image: 'localpos.png',
    tags: ['ElectronJS', 'SQLite', 'React'],
  },
  {
    num: '05',
    title: 'DennamLK Portfolio',
    category: 'Portfolio Website',
    description: 'AI-powered portfolio site with dynamic content generation, interactive animations, and EmailJS integration.',
    image: 'dennamLK.png',
    tags: ['Next.js', 'OpenAI', 'Framer Motion'],
  },
  {
    num: '06',
    title: 'Gemirasa Spices',
    category: 'Business Website',
    description: 'E-commerce ready business website showcasing products and company info with a fully responsive layout.',
    image: 'gemirasaSpices.png',
    tags: ['Next.js', 'E-commerce', 'Responsive'],
  },
  {
    num: '07',
    title: 'Testing PC',
    category: 'Web Application',
    description: 'Chemical testing order management system for ITUM with advanced reporting and analytics dashboard.',
    image: 'testingpc.png',
    tags: ['React', 'Node.js', 'SQL'],
  },
  {
    num: '08',
    title: 'Weather Forecast App',
    category: 'Web Application',
    description: 'Location-based weather application with interactive maps and 7-day forecasts powered by Open Weather API.',
    image: 'weather.png',
    tags: ['Next.js', 'Chart.js', 'API'],
  },
];

export function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [activeProject, setActiveProject] = useState(0);

  // Measure exact pixel distance for horizontal travel along X-axis
  useEffect(() => {
    const calculateDistance = () => {
      if (trackRef.current) {
        const totalWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Keep generous right padding when last project is reached
        const distance = Math.max(0, totalWidth - viewportWidth + 80);
        setScrollRange(distance);
      }
    };

    calculateDistance();
    window.addEventListener('resize', calculateDistance);
    const t = setTimeout(calculateDistance, 400);
    return () => {
      window.removeEventListener('resize', calculateDistance);
      clearTimeout(t);
    };
  }, []);

  // Track vertical page scroll through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Translate horizontal track along X-axis directly with page scroll
  const x = useTransform(scrollYProgress, (v) => -v * scrollRange);

  // Track active project index for indicators
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const idx = Math.min(Math.floor(latest * projects.length), projects.length - 1);
    setActiveProject(Math.max(0, idx));
  });

  // Smooth button jump controls (Previous / Next)
  const scrollToProject = (targetIndex: number) => {
    if (!containerRef.current) return;
    const clamped = Math.min(Math.max(targetIndex, 0), projects.length - 1);
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScroll = containerRef.current.scrollHeight - window.innerHeight;
    const targetProgress = clamped / (projects.length - 1);
    window.scrollTo({
      top: scrollTop + totalScroll * targetProgress,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative"
      style={{
        // 400vh gives a fluid, generous scroll depth to inspect each project comfortably
        height: '420vh',
        background: '#050505',
        borderBottom: '1px solid #1F1F1F',
      }}
    >
      {/* Sticky Full-Screen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        {/* Top Header Row */}
        <div
          className="relative z-30 pt-16 sm:pt-20 px-6 lg:px-12 w-full max-w-7xl mx-auto flex items-end justify-between"
          style={{ borderBottom: '1px solid #141414', paddingBottom: '1rem' }}
        >
          <div>
            <p className="section-num">04 — Work</p>
            <h2
              className="text-lg sm:text-2xl font-bold tracking-tight text-[#F8F8F8] mt-0.5"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              Selected <span className="text-[#F59E0B]">Projects</span>
            </h2>
          </div>

          {/* Project Counter & Arrow Jump Controls */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-[#888]">
              <span className="text-[#F59E0B] font-semibold">{projects[activeProject]?.num}</span>
              {' '}/ 0{projects.length}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => scrollToProject(activeProject - 1)}
                disabled={activeProject === 0}
                aria-label="Previous project"
                className="w-8 h-8 rounded border border-[#222] bg-[#0E0E0E] flex items-center justify-center text-[#888] hover:text-[#F8F8F8] hover:border-[#333] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollToProject(activeProject + 1)}
                disabled={activeProject === projects.length - 1}
                aria-label="Next project"
                className="w-8 h-8 rounded border border-[#222] bg-[#0E0E0E] flex items-center justify-center text-[#888] hover:text-[#F8F8F8] hover:border-[#333] disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Center: Horizontal Sliding Track along X-Axis */}
        <div className="relative flex-1 w-full flex items-center overflow-hidden py-4 sm:py-6">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 sm:gap-8 items-center pl-6 sm:pl-12 lg:pl-16 pr-16 select-none will-change-transform"
          >
            {projects.map((p, i) => (
              <div
                key={i}
                className="group relative flex-shrink-0 w-[300px] sm:w-[440px] lg:w-[500px] xl:w-[540px] rounded-lg overflow-hidden transition-all duration-300 hover:border-[#F59E0B]/50"
                style={{
                  background: '#0B0B0B',
                  border: '1px solid #1E1E1E',
                }}
              >
                {/* Project Image Box */}
                <div
                  className="relative w-full h-[180px] sm:h-[240px] lg:h-[270px] overflow-hidden bg-[#121212]"
                  style={{ borderBottom: '1px solid #1A1A1A' }}
                >
                  <Image
                    src={`/${p.image}`}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 440px, 540px"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(to top, rgba(11,11,11,0.9) 0%, transparent 60%)',
                    }}
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-xs px-2.5 py-1 bg-[#050505]/85 backdrop-blur-md text-[#F59E0B] border border-[#222] rounded">
                      {p.num}
                    </span>

                    <span className="w-7 h-7 rounded border border-[#222] bg-[#050505]/85 backdrop-blur-md flex items-center justify-center text-[#888] group-hover:text-[#F59E0B] group-hover:border-[#F59E0B]/40 transition-colors">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>

                {/* Project Content Box */}
                <div className="p-5 sm:p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-wider text-[#F59E0B] mb-1">
                      {p.category}
                    </p>
                    <h3
                      className="text-lg sm:text-xl font-bold text-[#F8F8F8] tracking-tight group-hover:text-[#F59E0B] transition-colors mb-2"
                      style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-xs sm:text-sm text-[#888888] leading-relaxed line-clamp-2 mb-4 font-sans"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {p.description}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#161616]">
                    {p.tags.map((t, ti) => (
                      <span key={ti} className="tag text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Status / Navigation Bar */}
        <div
          className="relative z-30 pb-5 px-6 lg:px-12 w-full max-w-7xl mx-auto flex items-center justify-between text-xs font-mono text-[#555]"
          style={{ borderTop: '1px solid #141414', paddingTop: '0.75rem' }}
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
            <span>Scroll vertically to browse projects horizontally</span>
          </div>

          {/* Micro Progress Bar */}
          <div className="flex items-center gap-3">
            <span>0{activeProject + 1}</span>
            <div className="w-24 h-[2px] bg-[#1A1A1A] overflow-hidden">
              <div
                className="h-full bg-[#F59E0B] transition-all duration-300 ease-out"
                style={{
                  width: `${((activeProject + 1) / projects.length) * 100}%`,
                }}
              />
            </div>
            <span>0{projects.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
