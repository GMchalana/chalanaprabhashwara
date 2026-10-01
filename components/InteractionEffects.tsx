'use client';

import { useEffect, useRef, useState } from 'react';

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticHover({ children, className = '', strength = 0.3 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      el.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    const handleMouseLeave = () => {
      el.style.transform = 'translate(0, 0)';
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
      setTimeout(() => {
        if (el) el.style.transition = '';
      }, 500);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glareEnable?: boolean;
}

export function TiltCard({ children, className = '', maxTilt = 10, glareEnable = true }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (y - 0.5) * maxTilt * -1;
      const tiltY = (x - 0.5) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;

      if (glareRef.current && glareEnable) {
        const glareAngle = Math.atan2(y - 0.5, x - 0.5) * (180 / Math.PI);
        glareRef.current.style.background = `linear-gradient(${glareAngle + 180}deg, rgba(255,255,255,0.15) 0%, transparent 80%)`;
        glareRef.current.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      if (glareRef.current) {
        glareRef.current.style.opacity = '0';
      }
      setTimeout(() => {
        if (card) card.style.transition = '';
      }, 600);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [maxTilt, glareEnable]);

  return (
    <div ref={cardRef} className={`relative ${className}`} style={{ transformStyle: 'preserve-3d' }}>
      {children}
      {glareEnable && (
        <div
          ref={glareRef}
          className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300"
          style={{ zIndex: 10 }}
        />
      )}
    </div>
  );
}

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function TextReveal({ text, className = '', delay = 0, staggerDelay = 30 }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const words = text.split(' ');

  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden"
          style={{ marginRight: '0.3em' }}
        >
          <span
            className="inline-block transition-all"
            style={{
              transitionDuration: '600ms',
              transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: `${delay + i * staggerDelay}ms`,
              transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
              opacity: isVisible ? 1 : 0,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export function GradientText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`bg-clip-text text-transparent bg-[length:200%_auto] ${className}`}
      style={{
        backgroundImage: 'linear-gradient(135deg, #38bdf8, #8b5cf6, #ec4899, #f59e0b, #38bdf8)',
        animation: 'gradientShift 4s ease infinite',
      }}
    >
      {children}
    </span>
  );
}

export function GlowingBorder({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative group ${className}`}>
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{
          background: 'linear-gradient(135deg, #38bdf8, #8b5cf6, #ec4899, #38bdf8)',
          backgroundSize: '300% 300%',
          animation: 'gradientShift 3s ease infinite',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
