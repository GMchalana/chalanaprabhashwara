'use client';

import { Hero } from '@/components/sections/Hero';
import { Expertise } from '@/components/sections/Expertise';
import { CareerHistory } from '@/components/sections/CareerHistory';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/Navigation';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <Hero />
        <Expertise />
        <CareerHistory />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
