'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'PDF Converter',
    description: 'A web application that converts various file formats to PDF and vice versa, with support for batch processing.',
    image: 'pdfconverter.png',
    tags: ['Next.js', 'PDFJS', 'TailwindCSS'],
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'ATM seis',
    description: 'IoT and ML based mobile application for improve security and efficiency of ATM machines.',
    image: 'mock01.png',
    tags: ['Flutter', 'IoT', 'Machine Learning', 'Firebase', 'Python'],
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'Testing PC',
    description: 'Web application for monitor chemical testing orders and control all orders in ITUM',
    image: 'testingpc.png',
    tags: ['React', 'NodeJS', 'SQL'],
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'Dye Lab Industrial Software',
    description: 'Desktop application for managing dye lab operations in textile industries, including inventory and order tracking.',
    image: 'mock06.png',
    tags: ['Java', 'Swing', 'MySQL'],
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'DennamLK WebSite',
    description: 'AI-powered portfolio website for DennamLK showcasing projects and skills with dynamic content generation.',
    image: 'dennamLK.png',
    tags: ['Next.js', 'OpenAI', 'EmailJS'],
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with location-based forecasts and interactive maps.',
    image: 'weather.png',
    tags: ['NextJs', 'Open Weather API'],
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'DennamLK Cloud POS system',
    description: 'Fully featured cloud-based POS system for retail businesses with inventory management and sales analytics.',
    image: 'cloudpos.png',
    tags: ['NextJs', 'NodeJS', 'MongoDB', 'Cloudflaire', 'Vercel'],
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'DennamLK Local POS system',
    description: 'Fully featured Local POS system for retail businesses with inventory management and sales analytics.',
    image: 'localpos.png',
    tags: ['ElectronJS'],
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'Gemirasa spices website',
    description: 'Portfolio website for Gemirasa spices showcasing products and company information.',
    image: 'gemirasaSpices.png',
    tags: ['NextJs'],
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
];

export function Projects() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleCards(projects.map(() => true));
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
    <section id="projects" className="py-20 bg-muted/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Personal Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden group hover:shadow-xl transition-all duration-500 ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {/* <CardFooter className="gap-2">
                <Button size="sm" variant="outline" asChild className="flex-1">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button size="sm" asChild className="flex-1">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter> */}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
