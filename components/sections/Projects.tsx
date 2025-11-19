'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye, ArrowRight, Sparkles, FolderGit2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: 'PDF Converter',
    description: 'A web application that converts various file formats to PDF and vice versa, with support for batch processing and real-time progress tracking.',
    image: 'pdfconverter.png',
    tags: ['Next.js', 'PDFJS', 'TailwindCSS', 'TypeScript'],
    category: 'Web Application',
    gradient: 'from-blue-500 to-cyan-500',
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'ATM Security System',
    description: 'IoT and ML based mobile application for improve security and efficiency of ATM machines with real-time monitoring and predictive analytics.',
    image: 'mock01.png',
    tags: ['Flutter', 'IoT', 'Machine Learning', 'Firebase', 'Python'],
    category: 'Mobile & IoT',
    gradient: 'from-green-500 to-emerald-500',
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'Testing PC',
    description: 'Web application for monitor chemical testing orders and control all orders in ITUM with advanced reporting and analytics dashboard.',
    image: 'testingpc.png',
    tags: ['React', 'NodeJS', 'SQL', 'Express'],
    category: 'Web Application',
    gradient: 'from-purple-500 to-pink-500',
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'Dye Lab Industrial Software',
    description: 'Desktop application for managing dye lab operations in textile industries, including inventory management and order tracking with barcode support.',
    image: 'mock06.png',
    tags: ['Java', 'Swing', 'MySQL', 'Desktop'],
    category: 'Desktop Application',
    gradient: 'from-orange-500 to-red-500',
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'DennamLK Portfolio',
    description: 'AI-powered portfolio website for DennamLK showcasing projects and skills with dynamic content generation and interactive animations.',
    image: 'dennamLK.png',
    tags: ['Next.js', 'OpenAI', 'EmailJS', 'Framer Motion'],
    category: 'Portfolio Website',
    gradient: 'from-indigo-500 to-purple-500',
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'Weather Forecast App',
    description: 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics with 7-day predictions.',
    image: 'weather.png',
    tags: ['NextJs', 'Open Weather API', 'Chart.js'],
    category: 'Web Application',
    gradient: 'from-sky-500 to-blue-500',
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'Cloud POS System',
    description: 'Fully featured cloud-based POS system for retail businesses with inventory management, sales analytics, and multi-store support.',
    image: 'cloudpos.png',
    tags: ['NextJs', 'NodeJS', 'MongoDB', 'Cloudflare', 'Vercel'],
    category: 'SaaS Application',
    gradient: 'from-teal-500 to-green-500',
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'Local POS System',
    description: 'Fully featured Local POS system for retail businesses with inventory management, sales analytics, and offline capability.',
    image: 'localpos.png',
    tags: ['ElectronJS', 'SQLite', 'Desktop'],
    category: 'Desktop Application',
    gradient: 'from-amber-500 to-yellow-500',
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
  {
    title: 'Gemirasa Spices Website',
    description: 'Portfolio website for Gemirasa spices showcasing products, company information with e-commerce capabilities and product catalog.',
    image: 'gemirasaSpices.png',
    tags: ['NextJs', 'E-commerce', 'Responsive'],
    category: 'Business Website',
    gradient: 'from-rose-500 to-pink-500',
    // github: 'https://github.com',
    // demo: 'https://example.com',
  },
];

export function Projects() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            projects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 100);
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
    <section id="projects" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20 dark:to-muted/10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/15 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse-medium" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-green-200/10 dark:bg-green-600/5 rounded-full blur-2xl animate-pulse-fast" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-muted/50 dark:bg-muted/20 rounded-2xl border border-border/50 mb-6">
            <FolderGit2 className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium text-muted-foreground">Project Portfolio</span>
            <FolderGit2 className="h-5 w-5 text-blue-500" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground dark:from-blue-200 dark:to-cyan-200 bg-clip-text text-transparent">
            Personal Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of innovative projects showcasing full-stack development skills, 
            creative problem-solving, and modern technology implementations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
              <div className={`absolute -inset-4 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 dark:group-hover:opacity-10 transition duration-500 ${
                hoveredCard === index ? 'opacity-20 dark:opacity-10' : ''
              }`} />

              {/* Main Card */}
              <Card className="relative group bg-card/80 dark:bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:scale-105 hover:border-border/80 dark:hover:border-border/60">
                
                {/* Image Container */}
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <Badge className="bg-black/80 text-white border-0 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Hover Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {/* <Button size="sm" className="bg-white/90 text-black hover:bg-white backdrop-blur-sm">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" className="bg-white/90 text-black hover:bg-white backdrop-blur-sm">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button> */}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-foreground/80 dark:from-white dark:to-white/80 bg-clip-text text-transparent">
                        {project.title}
                      </CardTitle>
                      <ArrowRight className="h-5 w-5 text-muted-foreground transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0 mt-1" />
                    </div>
                    <CardDescription className="text-muted-foreground leading-relaxed text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  {/* Tags */}
                  <CardContent className="p-0 mb-4 flex-1">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary"
                          className="text-xs font-medium bg-muted/60 dark:bg-muted/40 text-muted-foreground border border-border/30 hover:border-border/50 hover:bg-muted/80 dark:hover:bg-muted/60 transition-all duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  {/* Footer */}
                  <CardFooter className="p-0 mt-auto">
                    <div className="flex gap-2 w-full">
                      {/* <Button size="sm" variant="outline" className="flex-1 gap-2" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" className="flex-1 gap-2 bg-gradient-to-r from-blue-600 to-cyan-600" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <Eye className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button> */}
                    </div>
                  </CardFooter>
                </div>

                {/* Gradient Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
              </Card>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16 pt-12 border-t border-border/30">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-muted/40 dark:bg-muted/20 rounded-2xl border border-border/50">
            <Sparkles className="h-6 w-6 text-yellow-500" />
            <p className="text-lg text-muted-foreground">
              Interested in collaborating? Let's build something amazing together!
            </p>
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </div>
        </div>
      </div>
    </section>
  );
}