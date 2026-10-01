'use client';

import { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { value: '2+',  label: 'Years Experience' },
  { value: '15+', label: 'Projects Shipped' },
  { value: '4',   label: 'Companies' },
  { value: '∞',   label: 'Lines of Code' },
];

export function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ background: '#050505', borderBottom: '1px solid #1F1F1F' }}>
      {/* Section header strip */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12"
        style={{ borderBottom: '1px solid #1F1F1F', paddingTop: '5rem', paddingBottom: '3rem' }}
      >
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="section-num mb-3">01 — About</p>
            <h2
              className="text-headline"
              style={{
                color: '#F8F8F8',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              Crafting digital<br />
              <span className="accent-text">experiences</span>
            </h2>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-4 flex-shrink-0 pb-2"
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.7s ease',
              transitionDelay: '400ms',
            }}
          >
            {[
              { icon: Github, href: 'https://github.com/GMchalana', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/chalana-prabhashwara/', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:gmchalanaprabhashwara@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="group"
                style={{
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid #1F1F1F',
                  borderRadius: '3px',
                  color: '#555',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#F59E0B';
                  (e.currentTarget as HTMLElement).style.color = '#F59E0B';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#1F1F1F';
                  (e.currentTarget as HTMLElement).style.color = '#555';
                }}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Content: bio + photo + stats */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0" style={{ borderBottom: '1px solid #1F1F1F' }}>

          {/* Left: Bio text */}
          <div
            className="py-16 lg:pr-16"
            style={{
              borderRight: '1px solid #1F1F1F',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '200ms',
            }}
          >
            <p
              style={{
                fontSize: '1.1rem',
                color: '#A0A0A0',
                lineHeight: 1.8,
                fontFamily: 'Inter, sans-serif',
                marginBottom: '1.5rem',
              }}
            >
              I&apos;m a full-stack software engineer based in Sri Lanka with{' '}
              <span style={{ color: '#F8F8F8' }}>2+ years of professional experience</span>{' '}
              building scalable web and mobile applications.
            </p>
            <p
              style={{
                fontSize: '1.1rem',
                color: '#A0A0A0',
                lineHeight: 1.8,
                fontFamily: 'Inter, sans-serif',
                marginBottom: '2.5rem',
              }}
            >
              Currently working at <span style={{ color: '#F59E0B' }}>Axonall Global</span> and{' '}
              <span style={{ color: '#F59E0B' }}>DennamLK</span>, I specialize in React, Next.js,
              Node.js, and cloud infrastructure. I care deeply about performance,
              accessibility, and developer experience.
            </p>

            <a href="/resume.pdf" className="btn-outline" style={{ display: 'inline-flex' }}>
              Download Resume
            </a>
          </div>

          {/* Right: Profile image */}
          <div
            className="flex items-center justify-center py-16 lg:pl-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'scale(1)' : 'scale(0.95)',
              transition: 'all 0.9s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '350ms',
            }}
          >
            <div className="relative">
              {/* Gold corner accents */}
              <span
                className="absolute"
                style={{ top: '-8px', left: '-8px', width: '20px', height: '20px', borderTop: '2px solid #F59E0B', borderLeft: '2px solid #F59E0B' }}
              />
              <span
                className="absolute"
                style={{ top: '-8px', right: '-8px', width: '20px', height: '20px', borderTop: '2px solid #F59E0B', borderRight: '2px solid #F59E0B' }}
              />
              <span
                className="absolute"
                style={{ bottom: '-8px', left: '-8px', width: '20px', height: '20px', borderBottom: '2px solid #F59E0B', borderLeft: '2px solid #F59E0B' }}
              />
              <span
                className="absolute"
                style={{ bottom: '-8px', right: '-8px', width: '20px', height: '20px', borderBottom: '2px solid #F59E0B', borderRight: '2px solid #F59E0B' }}
              />

              <div
                style={{
                  width: '260px',
                  height: '320px',
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '3px',
                  border: '1px solid #1F1F1F',
                  filter: 'grayscale(20%)',
                }}
                className="group"
              >
                <Image
                  src="/profile.jpg"
                  alt="Chalana Prabhashwara"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                {/* Gold tint overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'rgba(245,158,11,0.05)' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '2.5rem 0',
                borderRight: i < 3 ? '1px solid #1F1F1F' : 'none',
                paddingLeft: i === 0 ? '0' : '3rem',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: `${500 + i * 100}ms`,
              }}
            >
              <p
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  fontWeight: 700,
                  fontFamily: 'Space Grotesk, sans-serif',
                  color: '#F59E0B',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                {s.value}
              </p>
              <p className="text-label" style={{ color: '#555555' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
