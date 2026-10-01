'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home', 'about', 'expertise', 'career', 'projects', 'contact'];
      const pos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= pos) { setActiveSection(sections[i]); break; }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  const navItems = [
    { id: 'about',    label: 'About' },
    { id: 'expertise', label: 'Skills' },
    { id: 'career',   label: 'Experience' },
    { id: 'projects', label: 'Work' },
    { id: 'contact',  label: 'Contact' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(5, 5, 5, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid #1F1F1F' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="relative group cursor-pointer"
              aria-label="Go to top"
            >
              <span
                className="text-base font-bold tracking-wider"
                style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#F8F8F8' }}
              >
                CP
              </span>
              <span
                className="absolute -bottom-0.5 left-0 w-full h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: '#F59E0B' }}
              />
            </button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative group cursor-pointer transition-colors duration-200"
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    fontFamily: 'Inter, sans-serif',
                    color: activeSection === item.id ? '#F59E0B' : '#A0A0A0',
                    background: 'none',
                    border: 'none',
                  }}
                >
                  {item.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px origin-left transition-all duration-300"
                    style={{
                      width: '100%',
                      background: '#F59E0B',
                      transform: activeSection === item.id ? 'scaleX(1)' : 'scaleX(0)',
                    }}
                  />
                </button>
              ))}

              {/* Hire Me CTA */}
              <button
                onClick={() => scrollTo('contact')}
                className="btn-primary text-xs"
                style={{ padding: '0.4rem 1.1rem' }}
              >
                Hire Me
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden cursor-pointer"
              style={{ background: 'none', border: 'none', color: '#F8F8F8', padding: '0.25rem' }}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-400"
        style={{
          background: 'rgba(5,5,5,0.97)',
          backdropFilter: 'blur(20px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
          transform: mobileOpen ? 'translateY(0)' : 'translateY(-10px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, i) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="cursor-pointer transition-all duration-200"
              style={{
                fontSize: '2rem',
                fontWeight: 700,
                fontFamily: 'Space Grotesk, sans-serif',
                color: activeSection === item.id ? '#F59E0B' : '#A0A0A0',
                background: 'none',
                border: 'none',
                transitionDelay: `${i * 40}ms`,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: mobileOpen ? 1 : 0,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
