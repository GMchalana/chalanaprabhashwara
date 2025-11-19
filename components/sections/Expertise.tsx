'use client';

import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Layout, Server, Smartphone, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const expertiseAreas = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'Building responsive and interactive UIs with React, Next.js, and modern CSS frameworks.',
    skills: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
    gradient: 'from-blue-500 to-cyan-500',
    hoverGradient: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Developing scalable server-side applications and RESTful APIs with robust architecture.',
    skills: ['Node.js', 'Express', 'PostgreSQL', 'API Design', 'Microservices', 'GraphQL'],
    gradient: 'from-green-500 to-emerald-500',
    hoverGradient: 'from-green-600 to-emerald-600',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Architecting efficient database schemas and optimizing queries for performance.',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'SQL', 'Database Architecture'],
    gradient: 'from-purple-500 to-pink-500',
    hoverGradient: 'from-purple-600 to-pink-600',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with attention to detail and accessibility.',
    skills: ['Figma', 'Responsive Design', 'Accessibility', 'Design Systems', 'User Research', 'Prototyping'],
    gradient: 'from-orange-500 to-red-500',
    hoverGradient: 'from-orange-600 to-red-600',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Ensuring fast load times and smooth user experiences through advanced optimization techniques.',
    skills: ['Web Vitals', 'Code Splitting', 'Caching', 'SEO', 'Lighthouse', 'Bundle Optimization'],
    gradient: 'from-yellow-500 to-amber-500',
    hoverGradient: 'from-yellow-600 to-amber-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Building cross-platform mobile applications with native-like performance.',
    skills: ['React Native', 'Flutter', 'Progressive Web Apps', 'Mobile-First', 'App Store', 'Cross-Platform'],
    gradient: 'from-indigo-500 to-purple-500',
    hoverGradient: 'from-indigo-600 to-purple-600',
  },
];

export function Expertise() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            expertiseAreas.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
            });
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
    <section id="expertise" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 dark:to-muted/10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200/15 dark:bg-cyan-600/10 rounded-full blur-3xl animate-pulse-medium" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200/10 dark:bg-purple-600/5 rounded-full blur-2xl animate-pulse-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted/50 dark:bg-muted/20 rounded-2xl border border-border/50 mb-6">
            <Sparkles className="h-5 w-5 text-yellow-500" />
            <span className="text-sm font-medium text-muted-foreground">Technical Expertise</span>
            <Sparkles className="h-5 w-5 text-yellow-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground dark:from-blue-200 dark:to-cyan-200 bg-clip-text text-transparent">
            Areas of Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive full-stack development skills with focus on modern technologies, 
            performance optimization, and exceptional user experiences
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={index}
              className={`relative transition-all duration-700 ease-out ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Glow Effect */}
              <div className={`absolute -inset-4 bg-gradient-to-r ${area.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 transition duration-500 ${
                hoveredCard === index ? 'opacity-20 dark:opacity-10' : ''
              }`} />

              {/* Main Card */}
              <Card className="relative group bg-card/80 dark:bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 h-full overflow-hidden hover:border-border/80 dark:hover:border-border/60 hover:scale-105">
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${area.gradient} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition duration-500 ${
                  hoveredCard === index ? 'opacity-5 dark:opacity-10' : ''
                }`} />

                {/* Icon Container */}
                <CardHeader className="p-0 mb-6">
                  <div className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r ${area.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <area.icon className="h-8 w-8 text-white" />
                  </div>
                </CardHeader>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent mb-2">
                      {area.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed text-base">
                      {area.description}
                    </CardDescription>
                  </div>

                  {/* Skills Tags */}
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 text-xs font-medium bg-muted/60 dark:bg-muted/40 text-muted-foreground rounded-lg border border-border/30 transition-all duration-300 group-hover:border-border/50 group-hover:bg-muted/80 dark:group-hover:bg-muted/60 hover:scale-105 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  {/* Hover Indicator */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>

                {/* Subtle Pattern Overlay */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-current to-transparent opacity-[0.02] rounded-tl-2xl" />
              </Card>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16 pt-12 border-t border-border/30">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-muted/40 dark:bg-muted/20 rounded-2xl border border-border/50">
            <Zap className="h-6 w-6 text-yellow-500" />
            <p className="text-lg text-muted-foreground">
              Ready to bring your ideas to life with cutting-edge technology
            </p>
            <Zap className="h-6 w-6 text-yellow-500" />
          </div>
        </div>
      </div>
    </section>
  );
}