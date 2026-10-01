'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
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
    featured: false,
  },
  {
    num: '04',
    title: 'Local POS System',
    category: 'Desktop · Offline',
    description: 'Fully offline POS system with inventory management, sales analytics, and SQLite-backed data persistence.',
    image: 'localpos.png',
    tags: ['ElectronJS', 'SQLite', 'React'],
    featured: false,
  },
  {
    num: '05',
    title: 'DennamLK Portfolio',
    category: 'Portfolio Website',
    description: 'AI-powered portfolio site with dynamic content generation, interactive animations, and EmailJS integration.',
    image: 'dennamLK.png',
    tags: ['Next.js', 'OpenAI', 'Framer Motion'],
    featured: false,
  },
  {
    num: '06',
    title: 'Gemirasa Spices',
    category: 'Business Website',
    description: 'E-commerce ready business website showcasing products and company info with a fully responsive layout.',
    image: 'gemirasaSpices.png',
    tags: ['Next.js', 'E-commerce', 'Responsive'],
    featured: false,
  },
  {
    num: '07',
    title: 'Testing PC',
    category: 'Web Application',
    description: 'Chemical testing order management system for ITUM with advanced reporting and analytics dashboard.',
    image: 'testingpc.png',
    tags: ['React', 'Node.js', 'SQL'],
    featured: false,
  },
  {
    num: '08',
    title: 'Weather Forecast App',
    category: 'Web Application',
    description: 'Location-based weather application with interactive maps and 7-day forecasts powered by Open Weather API.',
    image: 'weather.png',
    tags: ['Next.js', 'Chart.js', 'API'],
    featured: false,
  },
];

export function Projects() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const featured = projects.filter(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" ref={ref} style={{ background: '#050505', borderBottom: '1px solid #1F1F1F' }}>
      {/* Header */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12"
        style={{ borderBottom: '1px solid #1F1F1F', paddingTop: '5rem', paddingBottom: '3rem' }}
      >
        <div className="flex items-end justify-between">
          <div>
            <p className="section-num mb-3">04 — Work</p>
            <h2
              className="text-headline"
              style={{
                color: '#F8F8F8',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              Selected<br />
              <span className="accent-text">Projects</span>
            </h2>
          </div>
          <p
            className="text-label pb-2 hidden lg:block"
            style={{
              color: '#555',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.7s ease',
              transitionDelay: '400ms',
            }}
          >
            {projects.length} Projects Total
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Featured 2-col grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2"
          style={{ borderBottom: '1px solid #1F1F1F' }}
        >
          {featured.map((p, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRight: i === 0 ? '1px solid #1F1F1F' : 'none',
                borderBottom: 'none',
                padding: '3rem 0',
                paddingRight: i === 0 ? '3rem' : '0',
                paddingLeft: i === 1 ? '3rem' : '0',
                cursor: 'default',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: `${200 + i * 150}ms`,
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  height: '260px',
                  overflow: 'hidden',
                  borderRadius: '2px',
                  marginBottom: '1.5rem',
                  border: '1px solid #1F1F1F',
                }}
                className="group"
              >
                <Image
                  src={`/${p.image}`}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end"
                  style={{ background: 'linear-gradient(to top, rgba(5,5,5,0.9) 0%, transparent 60%)' }}
                >
                  <div className="p-5 w-full">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t, ti) => (
                        <span key={ti} className="tag-accent">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Number overlay */}
                <div
                  className="absolute top-4 right-4"
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '4rem',
                    fontWeight: 700,
                    color: 'rgba(245,158,11,0.08)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {p.num}
                </div>
              </div>

              {/* Info */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-label mb-2" style={{ color: '#F59E0B' }}>{p.category}</p>
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      fontFamily: 'Space Grotesk, sans-serif',
                      letterSpacing: '-0.02em',
                      color: '#F8F8F8',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      color: '#6B6B6B',
                      lineHeight: 1.7,
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {p.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rest — compact list */}
        {rest.map((p, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(100 + i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              borderBottom: '1px solid #1F1F1F',
              padding: '1.75rem 0',
              display: 'grid',
              gridTemplateColumns: '3rem 1fr auto',
              gap: '1.5rem 2rem',
              alignItems: 'center',
              cursor: 'default',
              transition: 'background 0.3s ease',
              background: hovered === 100 + i ? 'rgba(245,158,11,0.015)' : 'transparent',
              marginLeft: '-1.5rem',
              marginRight: '-1.5rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-15px)',
              transitionProperty: 'opacity, transform, background',
              transitionDuration: '0.7s, 0.7s, 0.3s',
              transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: `${300 + i * 80}ms, ${300 + i * 80}ms, 0ms`,
            }}
          >
            <span className="section-num" style={{ color: '#2A2A2A' }}>{p.num}</span>

            <div>
              <div className="flex items-center gap-3 mb-1 flex-wrap">
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    fontFamily: 'Space Grotesk, sans-serif',
                    color: hovered === 100 + i ? '#F59E0B' : '#F8F8F8',
                    transition: 'color 0.3s ease',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {p.title}
                </h3>
                <span className="text-label" style={{ color: '#555' }}>{p.category}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t, ti) => (
                  <span key={ti} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <ArrowUpRight
              size={16}
              style={{
                color: hovered === 100 + i ? '#F59E0B' : '#2A2A2A',
                transition: 'color 0.3s ease',
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
