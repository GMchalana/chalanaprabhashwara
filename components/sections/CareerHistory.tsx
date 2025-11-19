'use client';

import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, Star, MapPin, ArrowRight } from 'lucide-react';

const careerHistory = [
  {
    company: 'Axonall Global',
    position: 'Software Engineer',
    period: '2025 July - Present',
    location: 'Colombo, Sri Lanka',
    description:
      'Developed and maintained multiple client-facing web applications. Collaborated with design team to implement pixel-perfect interfaces.',
    achievements: [
      'Worked with sabre API and successfully integrated booking features',
      'Build method for calculating carbon footprint of bookings',
      'Gathered data for calculating carbon footprint from various sources and integrated them into a cohesive system',
    ],
    tech: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'],
  },
  {
    company: 'DennamLK (Pvt) Ltd',
    position: 'Software Engineer / Software Architect',
    period: '2025 January - Present (Part Time)',
    location: 'Remote',
    description:
      'Developed and maintained multiple client-facing web applications with various stacks. Collaborated with design team to implement pixel-perfect interfaces.',
    achievements: [
      'Built 15+ responsive web applications',
      'Improved code quality through testing implementation',
      'Reduced bug reports by 40% through thorough QA',
    ],
    tech: ['React', 'Angular', 'Vue.js', 'Python', 'PostgreSQL'],
  },
  {
    company: 'Agro World (Pvt) Ltd',
    position: 'Associate Software Engineer',
    period: '2024 August - 2025 June',
    location: 'Colombo, Sri Lanka',
    description:
      'Focused on creating engaging user interfaces and implementing modern frontend technologies. Worked for both mobile and web applications.',
    achievements: [
      'Manage and planned database architecture for both internal and external projects',
      'Introduced React, angular and Next and modern tooling to the tech stack',
      'Collaborated devOps team to streamline deployment processes',
      'Worked in linux environment and managed cloud infrastructure on AWS and Digital Ocean',
    ],
    tech: ['React', 'Next.js', 'Flutter', 'AWS', 'Docker', 'Linux'],
  },
  {
    company: 'Efito Solutions (Pvt) Ltd',
    position: 'Trainee Software Engineer',
    period: '2024 February - 2025 August',
    location: 'Colombo, Sri Lanka',
    description:
      'Worked on several mobile applications and admin panels. Gained experience in full-stack development and cloud deployments.',
    achievements: [
      'Developed mobile application with flutter framework',
      'Design and developed admin panels using React and Node.js',
      'Collaborated development team to implement new features and fix bugs',
    ],
    tech: ['Flutter', 'React', 'Node.js', 'MongoDB', 'Firebase'],
  },
];

export function CareerHistory() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            careerHistory.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 200);
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
    <section id="career" className="py-20 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/20 dark:to-muted/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/15 dark:bg-cyan-600/10 rounded-full blur-3xl animate-pulse-medium" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4 px-4 py-2 bg-muted/50 dark:bg-muted/20 rounded-full">
            <Star className="h-4 w-4 text-yellow-500" />
            Professional Journey
            <Star className="h-4 w-4 text-yellow-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground dark:from-blue-200 dark:to-cyan-200 bg-clip-text text-transparent">
            Career History
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional growth through innovative companies and challenging projects
          </p>
        </div>

        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400/50 via-cyan-400/50 to-sky-400/50 dark:from-blue-600/30 dark:via-cyan-600/30 dark:to-sky-600/30 transform md:-translate-x-1/2">
            <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-background to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="space-y-16">
            {careerHistory.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ease-out ${
                  visibleItems[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  
                  {/* Company Info Side */}
                  <div className="md:w-5/12 md:px-8">
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-12 md:ml-0`}>
                      {/* Period Badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 rounded-full text-sm text-blue-600 dark:text-blue-400 mb-3 border border-blue-200/50 dark:border-blue-500/30">
                        <Calendar className="h-3 w-3" />
                        {item.period}
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-foreground to-muted-foreground dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        {item.position}
                      </h3>
                      
                      <div className="flex items-center gap-2 mb-3">
                        <p className="text-lg font-semibold text-primary">{item.company}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {item.location}
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className={`flex flex-wrap gap-1.5 mt-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        {item.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs bg-muted/60 dark:bg-muted/40 text-muted-foreground rounded-md border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot with Animation */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform md:-translate-x-1/2 border-4 border-background dark:border-gray-900 z-20 shadow-lg">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-ping opacity-20" />
                  </div>

                  {/* Content Card Side */}
                  <div className="md:w-7/12 md:px-8 ml-12 md:ml-0">
                    <div className="group relative">
                      {/* Card Glow Effect */}
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                      
                      {/* Main Card */}
                      <div className="relative bg-card/80 dark:bg-card/90 border border-border/50 rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 backdrop-blur-sm group-hover:border-blue-300/30 dark:group-hover:border-blue-500/30 group-hover:scale-[1.02]">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-2 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg">
                            <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          </div>
                          <p className="text-muted-foreground leading-relaxed flex-1">
                            {item.description}
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold text-sm text-foreground/80 flex items-center gap-2">
                            <ArrowRight className="h-4 w-4 text-green-500" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2.5">
                            {item.achievements.map((achievement, i) => (
                              <li 
                                key={i} 
                                className="flex items-start gap-3 text-sm group/achievement"
                              >
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 group-hover/achievement:scale-125 transition-transform duration-200" />
                                <span className="text-muted-foreground leading-relaxed group-hover/achievement:text-foreground/90 transition-colors duration-200">
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Hover Border Animation */}
                        <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-sky-500/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-sky-500/10 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connecting Line between items */}
                {index < careerHistory.length - 1 && (
                  <div className="absolute left-4 md:left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-cyan-400/30 to-blue-400/30 dark:from-cyan-600/20 dark:to-blue-600/20 transform md:-translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Career Progress Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border/50">
          <p className="text-muted-foreground text-sm">
            Continuously growing and embracing new challenges in software development
          </p>
        </div>
      </div>
    </section>
  );
}