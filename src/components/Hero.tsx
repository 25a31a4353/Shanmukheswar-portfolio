import React from 'react';
import { ArrowDownRight, FileText, ExternalLink, Terminal, Atom, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { HeroQuantumVisual } from './HeroQuantumVisual';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden"
    >
      {/* Precision Hero Ambient Vignette */}
      <div className="absolute inset-0 bg-grid-refined -z-10 opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 hero-spotlight -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Bio & CTAs (7 columns) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Engineering Status Pill */}
            <div className="animate-entrance delay-100 inline-flex max-w-full items-center gap-2 px-3 py-1 rounded-full bg-[#0c0e15] border border-white/[0.08] text-xs font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span className="truncate sm:whitespace-normal">CSE (AI) Undergraduate · Hackathon Sprint Lead</span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-entrance delay-150 text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] font-display break-words">
              AI Engineer in the Making.{' '}
              <span className="block text-slate-400 font-medium">
                Builder by Curiosity.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="animate-entrance delay-200 text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              CSE (AI) student exploring <span className="text-white font-medium">Artificial Intelligence</span>, <span className="text-white font-medium">Generative AI</span>, <span className="text-white font-medium">AI Agents</span>, and <span className="text-sky-300 font-medium">Quantum Computing</span> — learning by building and solving real-world problems.
            </p>

            {/* Architectural Tags with badge-interactive */}
            <div className="animate-entrance delay-200 flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-slate-400">
              <span className="badge-interactive px-2.5 py-1 rounded-md bg-[#0c0e15] border border-white/[0.07] flex items-center gap-1.5 text-slate-300 cursor-default">
                <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Autonomous Agents</span>
              </span>
              <span className="badge-interactive px-2.5 py-1 rounded-md bg-[#0c0e15] border border-white/[0.07] flex items-center gap-1.5 text-slate-300 cursor-default">
                <Atom className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Quantum ML (PennyLane/Qiskit)</span>
              </span>
              <span className="badge-interactive px-2.5 py-1 rounded-md bg-[#0c0e15] border border-white/[0.07] flex items-center gap-1.5 text-slate-300 cursor-default">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Multi-Hackathon Captain</span>
              </span>
            </div>

            {/* High-Contrast Action Buttons with Tactile Transitions */}
            <div className="animate-entrance delay-300 flex flex-col min-[420px]:flex-row items-stretch min-[420px]:items-center gap-3 pt-3 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-950 font-semibold text-sm hover:bg-slate-100 transition-all duration-150 active:scale-[0.98] shadow-sm hover:shadow-md hover:shadow-black/30"
                id="hero-explore-work-button"
              >
                <span>Explore Work</span>
                <ArrowDownRight className="w-4 h-4 text-slate-950 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0e111a] hover:bg-[#151924] text-slate-200 hover:text-white font-medium text-sm border border-white/[0.12] hover:border-white/25 transition-all duration-150 active:scale-[0.98]"
                id="hero-download-resume-button"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Curriculum Vitae</span>
              </button>
            </div>

            {/* Connect Strip with Micro Hover feedback */}
            <div className="animate-entrance delay-400 flex items-center gap-4 pt-3 border-t border-white/[0.07]">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Networks:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors group"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300 transition-colors" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400 group-hover:scale-105 transition-transform" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-slate-300 transition-colors" />
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Quantum AI Canvas (5 columns) with Subtle Fade */}
          <div className="animate-entrance delay-200 lg:col-span-5 flex justify-center items-center">
            <HeroQuantumVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
