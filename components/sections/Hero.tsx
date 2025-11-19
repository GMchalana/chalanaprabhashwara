'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 opacity-80">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] dark:bg-[linear-gradient(rgba(120,119,198,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.05)_1px,transparent_1px)]" />
        
        {/* Floating Shapes Animation */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large floating circles */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full opacity-40 dark:from-blue-800 dark:to-cyan-800 dark:opacity-20 animate-float-slow" />
          <div className="absolute top-1/4 -right-16 w-64 h-64 bg-gradient-to-r from-cyan-200 to-sky-200 rounded-full opacity-30 dark:from-cyan-800 dark:to-sky-800 dark:opacity-15 animate-float-medium" />
          <div className="absolute bottom-1/4 -left-24 w-80 h-80 bg-gradient-to-r from-sky-200 to-blue-200 rounded-full opacity-25 dark:from-sky-800 dark:to-blue-800 dark:opacity-10 animate-float-slow" />
          
          {/* Medium floating circles */}
          <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full opacity-50 dark:from-cyan-700 dark:to-blue-700 dark:opacity-25 animate-float-fast" />
          <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-40 dark:from-blue-700 dark:to-cyan-700 dark:opacity-20 animate-float-medium" />
          
          {/* Small floating dots */}
          <div className="absolute top-20 right-20 w-8 h-8 bg-cyan-300 rounded-full opacity-60 dark:bg-cyan-600 dark:opacity-30 animate-bounce-slow" />
          <div className="absolute bottom-40 left-40 w-6 h-6 bg-blue-300 rounded-full opacity-50 dark:bg-blue-600 dark:opacity-25 animate-bounce-medium" />
          <div className="absolute top-60 right-60 w-4 h-4 bg-sky-300 rounded-full opacity-70 dark:bg-sky-600 dark:opacity-35 animate-bounce-fast" />
        </div>

        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse-slow dark:from-blue-600/10 dark:to-cyan-600/10" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-400/15 to-sky-400/15 rounded-full blur-3xl animate-pulse-medium dark:from-cyan-600/8 dark:to-sky-600/8" />
        </div>
      </div>

      {/* Animated Noise Texture */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjciIG51bU9jdGF2ZXM9IjEwIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIj48L2ZlVHVyYnVsZW5jZT48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIj48L2ZlQ29sb3JNYXRyaXg+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wMyI+PC9yZWN0Pjwvc3ZnPg==')] opacity-20 dark:opacity-10" />

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 flex-1">
            <div
              className={`inline-block transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Chalana Prabhashwara
                </span>
              </h1>
            </div>

            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">
                Full-Stack Developer & Creative Problem Solver
              </p>
            </div>

            <div
              className={`transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Crafting elegant solutions to complex problems. Specializing in modern web
                technologies and creating exceptional user experiences.
              </p>
            </div>

            <div
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-4 transition-all duration-700 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Button size="lg" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
            </div>

            <div
              className={`flex items-center justify-center lg:justify-start gap-6 transition-all duration-700 delay-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <a
                href="https://github.com/GMchalana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/chalana-prabhashwara/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:gmchalanaprabhashwara@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex-1 flex justify-center lg:justify-end transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative">
              {/* Animated gradient background circle */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full blur-xl opacity-20 animate-pulse-slow dark:from-blue-600 dark:to-cyan-600" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-10 animate-pulse-medium dark:opacity-5" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/80 dark:border-gray-800/80 shadow-2xl backdrop-blur-sm">
                <Image
                  src="/profile.jpg"
                  alt="Chalana Prabhashwara - Full-Stack Developer"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
              </div>
              
              {/* Animated decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full border-4 border-white dark:border-gray-800 animate-ping-slow" />
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full border-4 border-white dark:border-gray-800 animate-pulse-fast" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
}