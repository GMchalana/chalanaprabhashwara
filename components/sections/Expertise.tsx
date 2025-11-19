'use client';

import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Layout, Server, Smartphone, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const expertiseAreas = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive and interactive UIs with React, Next.js, and modern CSS frameworks.',
    skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Developing scalable server-side applications and RESTful APIs.',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'API Design'],
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Architecting efficient database schemas and optimizing queries.',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'SQL'],
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with attention to detail.',
    skills: ['Figma', 'Responsive Design', 'Accessibility', 'Design Systems'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Ensuring fast load times and smooth user experiences.',
    skills: ['Web Vitals', 'Code Splitting', 'Caching', 'SEO'],
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications.',
    skills: ['React Native', 'Flutter', 'Progressive Web Apps', 'Mobile-First', 'App Store'],
  },
];

export function Expertise() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(expertiseAreas.map(() => true));
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="expertise" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set across the full stack of modern web development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((area, index) => (
            <Card
              key={index}
              className={`group hover:shadow-lg transition-all duration-500 ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{area.title}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {area.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
