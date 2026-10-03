'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface SkillBlueprint {
  num: string;
  title: string;
  category: string;
  manifesto: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  spec: string;
}

const skills: SkillBlueprint[] = [
  {
    num: '01',
    title: 'Frontend Architecture',
    category: 'Client Engineering',
    manifesto:
      'Engineering pixel-perfect, accessible, and high-performance web applications with strict attention to Core Web Vitals, fluid responsive ergonomics, and micro-interactions.',
    tags: ['React 18', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Angular', 'Vue.js', 'Framer Motion'],
    metrics: [
      { label: 'Core Web Vitals', value: '99+' },
      { label: 'Type Safety', value: '100% Strict' },
      { label: 'Rendering', value: 'SSR & Edge' },
    ],
    spec: 'SPEC // FE.01 · MODULAR COMPONENT SYSTEMS',
  },
  {
    num: '02',
    title: 'Backend & Microservices',
    category: 'Server Systems',
    manifesto:
      'Architecting resilient distributed server systems, scalable REST & GraphQL API gateways, asynchronous message queues, and real-time WebSocket pipelines.',
    tags: ['Node.js', 'Express', 'TypeScript', 'GraphQL', 'REST APIs', 'Microservices', 'WebSockets'],
    metrics: [
      { label: 'API Latency', value: '<45ms p95' },
      { label: 'Concurrency', value: 'Non-blocking I/O' },
      { label: 'Availability', value: '99.9% SLA' },
    ],
    spec: 'SPEC // BE.02 · HIGH-THROUGHPUT RUNTIME',
  },
  {
    num: '03',
    title: 'Database & Persistence',
    category: 'Data Architecture',
    manifesto:
      'Designing normalized relational models, optimized document stores, indexing strategies, and multi-tier in-memory caching to guarantee data integrity at scale.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis Caching', 'Supabase', 'Prisma ORM', 'SQL Optimization'],
    metrics: [
      { label: 'Query Performance', value: 'Sub-10ms Index' },
      { label: 'Integrity', value: 'ACID Compliant' },
      { label: 'Cache Strategy', value: 'Redis Layered' },
    ],
    spec: 'SPEC // DB.03 · RELATIONAL & DOCUMENT PERSISTENCE',
  },
  {
    num: '04',
    title: 'Mobile Engineering',
    category: 'Cross-Platform',
    manifesto:
      'Crafting fluid cross-platform mobile experiences with native compiled performance, reactive state architectures, and robust offline-first synchronization.',
    tags: ['Flutter', 'Dart', 'React Native', 'Expo', 'iOS & Android', 'State Management'],
    metrics: [
      { label: 'Frame Budget', value: '60 / 120 FPS' },
      { label: 'Architecture', value: 'Clean BLoC / Hooks' },
      { label: 'Offline Sync', value: 'SQLite / Local Cache' },
    ],
    spec: 'SPEC // MOB.04 · COMPILED NATIVE RUNTIME',
  },
  {
    num: '05',
    title: 'Cloud & Infrastructure',
    category: 'DevOps & Systems',
    manifesto:
      'Deploying zero-downtime CI/CD delivery pipelines, multi-stage Docker containerization, and automated cloud infrastructure management.',
    tags: ['AWS Ecosystem', 'Docker Containers', 'CI/CD Pipelines', 'Linux Sysadmin', 'Vercel', 'DigitalOcean'],
    metrics: [
      { label: 'Deployments', value: 'Automated CI/CD' },
      { label: 'Isolation', value: 'Containerized Docker' },
      { label: 'Environments', value: 'Multi-Cloud Native' },
    ],
    spec: 'SPEC // INFRA.05 · CONTINUOUS AUTOMATION',
  },
  {
    num: '06',
    title: 'UI/UX & Design Systems',
    category: 'Design Engineering',
    manifesto:
      'Bridging technical precision with ergonomic design elegance through mathematical Swiss typography tokens, component primitives, and accessible design systems.',
    tags: ['Figma Mastery', 'Design Systems', 'Prototyping', 'WCAG Accessibility', 'Spring Physics'],
    metrics: [
      { label: 'Accessibility', value: 'WCAG AAA Standard' },
      { label: 'Design Tokens', value: 'Systematic Grid' },
      { label: 'Prototyping', value: 'Hi-Fi Motion' },
    ],
    spec: 'SPEC // UX.06 · SWISS-STYLE PRECISION',
  },
];

export function Expertise() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedIndex, setExpandedIndex] = useState(0);

  // Track vertical page scroll inside the multi-height section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Automatically expand each drawer one-by-one as user scrolls through the section
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const raw = Math.floor(latest * skills.length);
    const clamped = Math.min(Math.max(raw, 0), skills.length - 1);
    setExpandedIndex(clamped);
  });

  // Smooth scroll to any specific skill when clicked
  const scrollToSkill = (index: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const scrollableDistance = containerRef.current.scrollHeight - window.innerHeight;
    const targetFraction = (index + 0.35) / skills.length;
    window.scrollTo({
      top: scrollTop + scrollableDistance * Math.min(Math.max(targetFraction, 0), 0.99),
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="expertise"
      ref={containerRef}
      className="relative"
      style={{
        // Generous scroll height so each drawer has time to be inspected naturally
        height: `${skills.length * 55}vh`,
        background: '#050505',
        borderBottom: '1px solid #1F1F1F',
      }}
    >
      {/* Sticky Full-Screen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between py-12 sm:py-16">
        {/* Header */}
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12 w-full"
          style={{
            borderBottom: '1px solid #141414',
            paddingBottom: '1rem',
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <p className="section-num mb-1">02 — Skills & Capabilities</p>
              <h2
                className="text-lg sm:text-2xl font-bold tracking-tight text-[#F8F8F8]"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                Technical <span className="text-[#F59E0B]">Expertise</span>
              </h2>
            </div>

            {/* Live Scroll Auto-Expansion Indicator */}
            <div className="flex items-center gap-3 text-xs font-mono text-[#666]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
              <span>SCROLL TO AUTO-EXPAND</span>
              <span className="text-[#333]">/</span>
              <span className="text-[#F59E0B] font-semibold">{skills[expandedIndex]?.num}</span>
              <span>OF 0{skills.length}</span>
            </div>
          </div>
        </div>

        {/* Kinetic Architectural Blueprint Drawers */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex-1 flex flex-col justify-center my-auto">
          {skills.map((skill, index) => {
            const isOpen = expandedIndex === index;

            return (
              <div
                key={index}
                style={{
                  borderBottom: '1px solid #1A1A1A',
                }}
              >
                {/* Clickable Drawer Header Row */}
                <button
                  onClick={() => scrollToSkill(index)}
                  aria-expanded={isOpen}
                  className="w-full text-left cursor-pointer group py-3 sm:py-4 flex items-center justify-between gap-4 transition-colors"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'inherit',
                  }}
                >
                  {/* Left: Number + Title + Category */}
                  <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                    <span
                      className="font-mono text-xs sm:text-sm font-bold transition-colors duration-300 flex-shrink-0"
                      style={{
                        color: isOpen ? '#F59E0B' : '#444444',
                      }}
                    >
                      {skill.num}
                    </span>

                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-5 min-w-0">
                      <h3
                        className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight transition-colors duration-300 group-hover:text-[#F59E0B]"
                        style={{
                          fontFamily: 'Space Grotesk, sans-serif',
                          color: isOpen ? '#F8F8F8' : '#777777',
                        }}
                      >
                        {skill.title}
                      </h3>

                      <span className="text-[11px] font-mono text-[#555] uppercase tracking-wider">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Right: Sneak peek & Toggle Button */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    {!isOpen && (
                      <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#555]">
                        <span>{skill.tags.slice(0, 3).join(' · ')}</span>
                        {skill.tags.length > 3 && <span>+more</span>}
                      </div>
                    )}

                    <div
                      className="w-7 h-7 rounded border flex items-center justify-center transition-all duration-300"
                      style={{
                        borderColor: isOpen ? '#F59E0B' : '#222222',
                        background: isOpen ? 'rgba(245, 158, 11, 0.08)' : '#0A0A0A',
                        color: isOpen ? '#F59E0B' : '#666666',
                      }}
                    >
                      {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                    </div>
                  </div>
                </button>

                {/* Smooth Animated Blueprint Drawer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.3, delay: 0.1 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div
                        className="pb-5 pt-1 pl-4 sm:pl-6 border-l-2 my-1"
                        style={{
                          borderColor: '#F59E0B',
                          background:
                            'linear-gradient(90deg, rgba(245, 158, 11, 0.015) 0%, transparent 100%)',
                        }}
                      >
                        {/* Blueprint Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                          {/* Col 1: Architecture Manifesto (5 cols) */}
                          <div className="lg:col-span-5">
                            <p className="text-[10px] uppercase tracking-widest text-[#F59E0B] font-mono mb-1.5">
                              {skill.spec}
                            </p>
                            <p
                              className="text-[#C0C0C0] text-xs sm:text-sm leading-relaxed font-sans"
                              style={{ fontFamily: 'Inter, sans-serif' }}
                            >
                              {skill.manifesto}
                            </p>
                          </div>

                          {/* Col 2: Engineering Telemetry Metrics (3 cols) */}
                          <div className="lg:col-span-3 space-y-1.5">
                            <p className="text-[10px] uppercase tracking-widest text-[#555] font-mono mb-1.5">
                              Engineering Telemetry
                            </p>
                            {skill.metrics.map((m, mi) => (
                              <div
                                key={mi}
                                className="p-2 rounded bg-[#0D0D0D] border border-[#1A1A1A] flex items-center justify-between"
                              >
                                <span className="text-[11px] text-[#777] font-sans">{m.label}</span>
                                <span className="text-[11px] font-mono font-semibold text-[#F8F8F8]">
                                  {m.value}
                                </span>
                              </div>
                            ))}
                          </div>

                          {/* Col 3: Technology Ecosystem (4 cols) */}
                          <div className="lg:col-span-4">
                            <p className="text-[10px] uppercase tracking-widest text-[#555] font-mono mb-1.5">
                              Production Ecosystem
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                              {skill.tags.map((t, ti) => (
                                <span
                                  key={ti}
                                  className="tag text-[11px] transition-all duration-200 hover:border-[#F59E0B] hover:text-[#F59E0B]"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Progress Bar */}
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex items-center justify-between text-xs font-mono text-[#555]"
          style={{ borderTop: '1px solid #141414', paddingTop: '0.75rem' }}
        >
          <span>Scroll to traverse architectural domains</span>
          <div className="flex items-center gap-3">
            <span>0{expandedIndex + 1}</span>
            <div className="w-24 h-[2px] bg-[#1A1A1A] overflow-hidden">
              <div
                className="h-full bg-[#F59E0B] transition-all duration-300 ease-out"
                style={{
                  width: `${((expandedIndex + 1) / skills.length) * 100}%`,
                }}
              />
            </div>
            <span>0{skills.length}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
