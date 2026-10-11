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
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center overflow-hidden transition-colors duration-200"
    >
      {/* Precision Hero Ambient Vignette */}
      <div className="absolute inset-0 bg-grid-refined -z-10 opacity-35 dark:opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 hero-spotlight -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Profile Photo, Name, Headline, Bio & CTAs (7 columns) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Engineering Status Pill */}
            <div className="animate-entrance delay-100 inline-flex max-w-full items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#0c0e15] border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0" />
              <span className="truncate sm:whitespace-normal">CSE (AI) Undergraduate · Hackathon Sprint Lead</span>
            </div>

            {/* Profile Photo + Dominant Name Cohesive Identity Block */}
            <div className="animate-entrance delay-150 flex items-center gap-4 sm:gap-5 pt-1">
              {/* Premium Profile Photo with Graceful Monogram Fallback */}
              <div className="relative shrink-0">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-tr from-sky-500 via-indigo-500 to-sky-300 shadow-md shadow-sky-500/15">
                  <img
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                      const fallback = document.getElementById('profile-monogram-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                    className="w-full h-full object-cover rounded-full bg-slate-100 dark:bg-slate-800"
                  />
                  <div
                    id="profile-monogram-fallback"
                    className="hidden w-full h-full rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 items-center justify-center font-display font-bold text-white text-lg sm:text-xl shadow-inner select-none"
                  >
                    SM
                  </div>
                </div>
                {/* Active Status Indicator */}
                <span
                  className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-[#07090e]"
                  title="Active Undergraduate & Builder"
                />
              </div>

              {/* Dominant Name & Discipline */}
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-0.5">
                  AI & Quantum Builder
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-slate-900 dark:text-white tracking-tight">
                  {personalInfo.name}
                </div>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="animate-entrance delay-150 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.12] font-display break-words">
              AI Engineer in the Making.{' '}
              <span className="block text-slate-500 dark:text-slate-400 font-medium">
                Builder by Curiosity.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="animate-entrance delay-200 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed">
              CSE (AI) student exploring <span className="text-slate-900 dark:text-white font-medium">Artificial Intelligence</span>, <span className="text-slate-900 dark:text-white font-medium">Generative AI</span>, <span className="text-slate-900 dark:text-white font-medium">AI Agents</span>, and <span className="text-sky-600 dark:text-sky-300 font-medium">Quantum Computing</span> — learning by building and solving real-world problems.
            </p>

            {/* Architectural Tags with badge-interactive */}
            <div className="animate-entrance delay-200 flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="badge-interactive px-2.5 py-1 rounded-md bg-white dark:bg-[#0c0e15] border border-slate-200 dark:border-white/[0.07] flex items-center gap-1.5 text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none cursor-default">
                <Terminal className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>Autonomous Agents</span>
              </span>
              <span className="badge-interactive px-2.5 py-1 rounded-md bg-white dark:bg-[#0c0e15] border border-slate-200 dark:border-white/[0.07] flex items-center gap-1.5 text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none cursor-default">
                <Atom className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                <span>Quantum ML (PennyLane/Qiskit)</span>
              </span>
              <span className="badge-interactive px-2.5 py-1 rounded-md bg-white dark:bg-[#0c0e15] border border-slate-200 dark:border-white/[0.07] flex items-center gap-1.5 text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none cursor-default">
                <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                <span>Multi-Hackathon Captain</span>
              </span>
            </div>

            {/* High-Contrast Action Buttons with Tactile Transitions */}
            <div className="animate-entrance delay-300 flex flex-col min-[420px]:flex-row items-stretch min-[420px]:items-center gap-3 pt-3 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-semibold text-sm transition-all duration-150 active:scale-[0.98] shadow-sm hover:shadow-md hover:shadow-slate-900/10 dark:hover:shadow-black/30"
                id="hero-explore-work-button"
              >
                <span>Explore Work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-[#0e111a] hover:bg-slate-50 dark:hover:bg-[#151924] text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white font-medium text-sm border border-slate-300 dark:border-white/[0.12] hover:border-slate-400 dark:hover:border-white/25 transition-all duration-150 active:scale-[0.98] shadow-sm dark:shadow-none"
                id="hero-download-resume-button"
              >
                <FileText className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Curriculum Vitae</span>
              </button>
            </div>

            {/* Connect Strip with Micro Hover feedback */}
            <div className="animate-entrance delay-400 flex items-center gap-4 pt-3 border-t border-slate-200/80 dark:border-white/[0.07]">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Networks:</span>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 group-hover:scale-105 transition-transform" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
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
