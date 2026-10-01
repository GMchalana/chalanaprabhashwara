'use client';

import { useEffect, useRef, useState } from 'react';

const skills = [
  {
    num: '01',
    title: 'Frontend',
    tags: ['React', 'Next.js', 'Angular', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    desc: 'Pixel-perfect interfaces with emphasis on performance, accessibility, and responsive design.',
  },
  {
    num: '02',
    title: 'Backend',
    tags: ['Node.js', 'Express', 'GraphQL', 'REST APIs', 'Microservices', 'WebSockets'],
    desc: 'Scalable server-side architecture built for reliability, speed, and maintainability.',
  },
  {
    num: '03',
    title: 'Database',
    tags: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma', 'SQL'],
    desc: 'Efficient schema design and query optimization for complex data requirements.',
  },
  {
    num: '04',
    title: 'Mobile',
    tags: ['React Native', 'Flutter', 'PWA', 'iOS', 'Android', 'Expo'],
    desc: 'Cross-platform mobile applications delivering native-like user experiences.',
  },
  {
    num: '05',
    title: 'DevOps & Cloud',
    tags: ['AWS', 'Docker', 'CI/CD', 'Linux', 'Vercel', 'Digital Ocean', 'Cloudflare'],
    desc: 'Infrastructure management, deployment pipelines, and cloud architecture.',
  },
  {
    num: '06',
    title: 'UI/UX Design',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research', 'Accessibility'],
    desc: 'Human-centered design that balances aesthetics with usability and function.',
  },
];

export function Expertise() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="expertise" ref={ref} style={{ background: '#050505', borderBottom: '1px solid #1F1F1F' }}>
      {/* Header */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-12"
        style={{ borderBottom: '1px solid #1F1F1F', paddingTop: '5rem', paddingBottom: '3rem' }}
      >
        <p className="section-num mb-3">02 — Skills</p>
        <h2
          className="text-headline"
          style={{
            color: '#F8F8F8',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.16,1,0.3,1)',
          }}
        >
          Technical<br />
          <span className="accent-text">Expertise</span>
        </h2>
      </div>

      {/* Skills list — editorial numbered rows */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {skills.map((skill, i) => (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              borderBottom: '1px solid #1F1F1F',
              padding: '2rem 0',
              display: 'grid',
              gridTemplateColumns: '3rem 1fr auto',
              gap: '2rem',
              alignItems: 'start',
              cursor: 'default',
              transition: 'background 0.3s ease',
              background: hovered === i ? 'rgba(245,158,11,0.02)' : 'transparent',
              marginLeft: '-1.5rem',
              marginRight: '-1.5rem',
              paddingLeft: '1.5rem',
              paddingRight: '1.5rem',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(-20px)',
              transitionProperty: 'opacity, transform, background',
              transitionDuration: '0.7s, 0.7s, 0.3s',
              transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: `${i * 80}ms, ${i * 80}ms, 0ms`,
            }}
          >
            {/* Number */}
            <span
              className="section-num"
              style={{
                color: hovered === i ? '#F59E0B' : '#2A2A2A',
                transition: 'color 0.3s ease',
                paddingTop: '0.25rem',
              }}
            >
              {skill.num}
            </span>

            {/* Left: title + tags */}
            <div>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  fontFamily: 'Space Grotesk, sans-serif',
                  letterSpacing: '-0.02em',
                  color: hovered === i ? '#F59E0B' : '#F8F8F8',
                  transition: 'color 0.3s ease',
                  marginBottom: '0.75rem',
                }}
              >
                {skill.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {skill.tags.map((tag, ti) => (
                  <span key={ti} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Right: description */}
            <p
              style={{
                maxWidth: '280px',
                fontSize: '0.85rem',
                color: hovered === i ? '#A0A0A0' : '#3A3A3A',
                lineHeight: 1.7,
                fontFamily: 'Inter, sans-serif',
                transition: 'color 0.3s ease',
                flexShrink: 0,
                display: 'none',
              }}
              className="lg:block"
            >
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
