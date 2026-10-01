'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scaleUp' | 'rotateIn' | 'blurIn';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

export function ScrollReveal({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className = '',
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getAnimationStyles = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      transition: `all ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    };

    if (!isVisible) {
      switch (animation) {
        case 'fadeUp':
          return { ...base, opacity: 0, transform: 'translateY(40px)' };
        case 'fadeDown':
          return { ...base, opacity: 0, transform: 'translateY(-40px)' };
        case 'fadeLeft':
          return { ...base, opacity: 0, transform: 'translateX(-40px)' };
        case 'fadeRight':
          return { ...base, opacity: 0, transform: 'translateX(40px)' };
        case 'scaleUp':
          return { ...base, opacity: 0, transform: 'scale(0.9)' };
        case 'rotateIn':
          return { ...base, opacity: 0, transform: 'rotate(-5deg) scale(0.95)' };
        case 'blurIn':
          return { ...base, opacity: 0, filter: 'blur(10px)', transform: 'translateY(20px)' };
        default:
          return { ...base, opacity: 0 };
      }
    }

    return {
      ...base,
      opacity: 1,
      transform: 'none',
      filter: 'none',
    };
  };

  return (
    <div ref={ref} style={getAnimationStyles()} className={className}>
      {children}
    </div>
  );
}
