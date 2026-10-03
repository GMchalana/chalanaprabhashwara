'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const roles = ['Full-Stack Developer', 'UI/UX Engineer', 'Software Architect', 'Problem Solver'];

export function Hero() {
  const [visible, setVisible] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 150);
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => { clearTimeout(t); window.removeEventListener('mousemove', handleMouse); };
  }, []);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(p => (p + 1) % roles.length), 3500);
    return () => clearInterval(t);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: '#050505' }}
    >
      {/* Ambient light — moves with mouse */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%)',
          left: `${mousePos.x * 100 - 30}%`,
          top: `${mousePos.y * 100 - 30}%`,
          transition: 'left 0.8s ease-out, top 0.8s ease-out',
          filter: 'blur(40px)',
        }}
      />

      {/* Grid lines background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Main content */}
      <div className="flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-12 pt-28 pb-16">

        {/* Top row: availability badge */}
        <div
          className="flex items-center gap-3 mb-auto transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '100ms',
          }}
        >
          {/* <span className="relative flex h-2 w-2">
            <span
              className="absolute inline-flex h-full w-full rounded-full animate-ping-slow"
              style={{ background: '#22c55e', opacity: 0.5 }}
            />
            <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: '#22c55e' }} />
          </span> */}
          {/* <span className="text-label" style={{ color: '#A0A0A0' }}>Available for new projects</span> */}
        </div>

        {/* Center: Giant name */}
        <div className="flex-1 flex flex-col justify-center py-8">
          <div
            className="transition-all duration-1000"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '200ms',
            }}
          >
            {/* Pre-name label */}
            <p
              className="section-num mb-4"
              style={{ color: '#F59E0B' }}
            >
              Software Engineer — Sri Lanka
            </p>

            {/* Giant name */}
            <h1 className="text-display" style={{ color: '#F8F8F8', lineHeight: 0.92 }}>
              <span
                className="block"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(60px)',
                  transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '300ms',
                }}
              >
                Chalana
              </span>
              <span
                className="block"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(60px)',
                  transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
                  transitionDelay: '450ms',
                  WebkitTextStroke: '1px rgba(248,248,248,0.25)',
                  color: 'transparent',
                }}
              >
                Prabhashwara
              </span>
            </h1>
          </div>

          {/* Role ticker */}
          <div
            className="mt-8 overflow-hidden"
            style={{
              height: '2.5rem',
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.7s ease',
              transitionDelay: '700ms',
            }}
          >
            <div
              style={{
                transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                transform: `translateY(-${roleIdx * 40}px)`,
              }}
            >
              {roles.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3"
                  style={{ height: '40px' }}
                >
                  <span style={{ width: '24px', height: '1px', background: '#F59E0B', display: 'inline-block' }} />
                  <span
                    style={{
                      fontSize: '1.1rem',
                      fontWeight: 400,
                      color: '#A0A0A0',
                      fontFamily: 'Space Grotesk, sans-serif',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {r}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom row: description + CTAs */}
        <div
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease',
            transitionDelay: '900ms',
          }}
        >
          {/* Description */}
          <p
            style={{
              fontSize: '1rem',
              color: '#6B6B6B',
              maxWidth: '380px',
              lineHeight: 1.7,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Crafting high-performance digital products with modern web technologies.
            Obsessed with clean code, precise interfaces, and seamless user experiences.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              onClick={() => scrollTo('projects')}
              className="btn-primary flex items-center gap-2"
            >
              View Work
              <ArrowRight size={14} />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn-outline"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
        style={{
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.7s ease',
          transitionDelay: '1200ms',
        }}
      >
        <span className="text-label" style={{ color: '#333333', writingMode: 'vertical-rl', letterSpacing: '0.15em' }}>
          Scroll
        </span>
        <div className="animate-bounce" style={{ color: '#333333' }}>
          <ArrowDown size={14} />
        </div>
      </div>

      {/* Bottom border */}
      <div style={{ height: '1px', background: '#1F1F1F' }} />
    </section>
  );
}
