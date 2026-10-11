import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Experience } from './components/Experience';
import { QuantumAI } from './components/QuantumAI';
import { CurrentFocus } from './components/CurrentFocus';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ScrollReveal } from './components/ScrollReveal';
import { AmbientBackground } from './components/AmbientBackground';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ThemeProvider } from './context/ThemeContext';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col selection:bg-sky-500/20 selection:text-sky-700 relative overflow-x-hidden">
        
        {/* Accessible Skip Link for Keyboard Navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-600 focus:text-white focus:font-semibold focus:rounded-md focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Precision Reading Progress Bar (Isolated RAF, zero root re-renders) */}
        <ScrollProgressBar />

        {/* Persistent Technical Background Grid */}
        <div className="fixed inset-0 bg-grid-refined pointer-events-none opacity-30 -z-20" aria-hidden="true" />

      {/* Gentle, Tasteful Ambient Background Spotlight */}
      <AmbientBackground />

      {/* Navbar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections with Smooth Scroll Reveal */}
      <main id="main-content" className="flex-1 flex flex-col focus:outline-none" tabIndex={-1}>
        {/* 1. Hero (has own entrance keyframes) */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* 2. About Me */}
        <ScrollReveal>
          <About />
        </ScrollReveal>

        {/* 3. Featured Projects */}
        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        {/* 4. Skills / Technical Arsenal */}
        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        {/* 5. Hackathons & Achievements */}
        <ScrollReveal>
          <Achievements />
        </ScrollReveal>

        {/* 6. Experience & Leadership */}
        <ScrollReveal>
          <Experience />
        </ScrollReveal>

        {/* 7. Where AI Meets Quantum */}
        <ScrollReveal>
          <QuantumAI />
        </ScrollReveal>

        {/* 8. Currently Building */}
        <ScrollReveal>
          <CurrentFocus />
        </ScrollReveal>

        {/* 9. Contact */}
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>

      {/* 10. Footer */}
      <Footer />

      {/* Recruiter Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />

      </div>
    </ThemeProvider>
  );
}

export default App;
