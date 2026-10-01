'use client';

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{ background: '#050505', borderTop: '1px solid #1F1F1F' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

          {/* Left */}
          <div>
            <p
              style={{
                fontSize: '1.2rem',
                fontWeight: 700,
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#F8F8F8',
                letterSpacing: '-0.02em',
                marginBottom: '0.4rem',
              }}
            >
              Chalana Prabhashwara
            </p>
            <p className="text-label" style={{ color: '#555' }}>
              Software Engineer · Sri Lanka · {new Date().getFullYear()}
            </p>
          </div>

          {/* Center: links */}
          <div className="flex items-center gap-6">
            {['About', 'Skills', 'Experience', 'Work', 'Contact'].map((item, i) => {
              const ids = ['about', 'expertise', 'career', 'projects', 'contact'];
              return (
                <button
                  key={item}
                  onClick={() => document.getElementById(ids[i])?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-label cursor-pointer"
                  style={{
                    color: '#555',
                    background: 'none',
                    border: 'none',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#F59E0B'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = '#555'}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Right: social + back to top */}
          <div className="flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/GMchalana' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/chalana-prabhashwara/' },
              { icon: Mail, href: 'mailto:gmchalanaprabhashwara@gmail.com' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  width: '34px',
                  height: '34px',
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
                <Icon size={14} />
              </a>
            ))}

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                width: '34px',
                height: '34px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid #F59E0B',
                borderRadius: '3px',
                color: '#F59E0B',
                background: 'rgba(245,158,11,0.05)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(245,158,11,0.12)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(245,158,11,0.05)';
              }}
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
