import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Achievements } from './components/Achievements';
import { Experience } from './components/Experience';
import { QuantumNetworkBridge } from './components/motion/QuantumNetworkBridge';
import { QuantumSection } from './components/QuantumSection';
import { CurrentFocus } from './components/CurrentFocus';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
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

        {/* Main Content Sections with Continuous 3D Motion System */}
        <main id="main-content" className="flex-1 flex flex-col focus:outline-none" tabIndex={-1}>
          {/* 1. Hero (has own 3D scroll depth retreat & parallax grid) */}
          <Hero onOpenResume={() => setResumeOpen(true)} />

          {/* 2. About Me (perspective-reveal 3D exit into projects) */}
          <About />

          {/* 3. Featured Projects (depth-tunnel transition & tactile 3D cards) */}
          <Projects />

          {/* 4. Skills / Technical Arsenal (floating depth system & 3D tilt) */}
          <Skills />

          {/* 5. Hackathons & Achievements (physically constructed timeline & IBM 7th place emphasis) */}
          <Achievements />

          {/* 6. Experience & Leadership (3D execution cards) */}
          <Experience />

          {/* 7. Achievements/Experience -> AI × Quantum Convergence Bridge */}
          <QuantumNetworkBridge />

          {/* 8. Where AI Meets Quantum (interactive 3D Bloch sphere & research pillars) */}
          <QuantumSection />

          {/* 9. Currently Building (staggered 3D cards & calm transition) */}
          <CurrentFocus />

          {/* 10. Contact (final calm destination settling) */}
          <Contact />
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
