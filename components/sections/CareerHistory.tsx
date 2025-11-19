'use client';

import { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const careerHistory = [
  {
    company: 'Axonall Global',
    position: 'Software Engineer',
    period: '2025 July - Present',
    description:
      'Developed and maintained multiple client-facing web applications. Collaborated with design team to implement pixel-perfect interfaces.',
    achievements: [
      'Worked with sabre API and successfully integrated booking features',
      'Build method for calculating carbon footprint of bookings',
      'Gathered data for calculating carbon footprint from various sources and integrated them into a cohesive system',
    ],
  },
  {
    company: 'DennamLK (Pvt) Ltd',
    position: 'Software Engineer / Software Architect',
    period: '2025 January - Present (Part Time)',
    description:
      'Developed and maintained multiple client-facing web applications with various stacks. Collaborated with design team to implement pixel-perfect interfaces.',
    achievements: [
      'Built 15+ responsive web applications',
      'Improved code quality through testing implementation',
      'Reduced bug reports by 40% through thorough QA',
    ],
  },
  {
    company: 'Agro World (Pvt) Ltd',
    position: 'Associate Software Engineer',
    period: '2024 August - 2025 June',
    description:
      'Focused on creating engaging user interfaces and implementing modern frontend technologies. Worked for both mobile and web applications.',
    achievements: [
      'Manage and planned database architecture for both internal and external projects',
      'Introduced React, angular and Next and modern tooling to the tech stack',
      'Collaborated devOps team to streamline deployment processes',
      'Worked in linux environment and managed cloud infrastructure on AWS and Digital Ocean',
    ],
  },
  {
    company: 'Efito Solutions (Pvt) Ltd',
    position: 'Trainee Software Engineer',
    period: '2024 February - 2025 August',
    description:
      'Worked on several mobile applications and admin panels. Gained experience in full-stack development and cloud deployments.',
    achievements: [
      'Developed mobile application with flutter framework',
      'Design and developed admin panels using React and Node.js',
      'Collaborated development team to implement new features and fix bugs',
    ],
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
            // Animate items sequentially
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
    <section id="career" className="py-20" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Career History
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and experiences
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {careerHistory.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ease-in-out ${
                  visibleItems[index]
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
              >
                <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Left side - Company info */}
                  <div className="md:w-1/2 md:px-8 mb-4 md:mb-0">
                    <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:text-left'} ml-12 md:ml-0`}>
                      <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <Calendar className="h-4 w-4" />
                        {item.period}
                      </div>
                      <h3 className="text-xl font-bold mb-1">{item.position}</h3>
                      <p className="text-lg text-primary mb-3">{item.company}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform md:-translate-x-1/2 border-2 border-background z-10" />

                  {/* Right side - Content card */}
                  <div className="md:w-1/2 md:px-8 ml-12 md:ml-0">
                    <div className="bg-card border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <Briefcase className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="flex-1">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}