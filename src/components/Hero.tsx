import React from 'react';
import { ArrowUpRight, ArrowDownRight, FileText, Terminal, Atom, Sparkles, MapPin, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

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
      className="relative min-h-[95vh] pt-28 pb-12 lg:pt-36 lg:pb-16 flex flex-col justify-between overflow-hidden transition-colors duration-200"
    >
      {/* Precision Hero Ambient Grid & Vignette */}
      <div className="absolute inset-0 bg-grid-refined -z-20 opacity-30 dark:opacity-25 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 hero-spotlight -z-20 pointer-events-none" />

      {/* DESKTOP FULL-BLEED RIGHT PORTRAIT PHOTO (matching reference site) */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[48%] xl:w-[50%] h-full pointer-events-none z-0 overflow-hidden">
        <img
          src="/profile.jpg"
          alt="Shanmukheswar Medicharla - AI Engineer & Builder"
          fetchPriority="high"
          loading="eager"
          className="w-full h-full object-cover object-[center_18%] select-none scale-[1.02] transition-transform duration-700 hover:scale-105"
        />

        {/* Seamless Multi-Directional Gradient Blend into Theme Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/70 via-25% to-transparent dark:from-[#07090e] dark:via-[#07090e]/70 dark:via-25% dark:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent via-20% dark:from-[#07090e] dark:via-transparent dark:to-transparent dark:via-20%" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/80 via-transparent to-transparent via-10% dark:from-[#07090e]/80 dark:via-transparent dark:to-transparent dark:via-10%" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Content (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Eyebrow Badge (matching reference site style) */}
            <div className="animate-entrance delay-100 inline-flex max-w-full items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-[#0c0e15] border border-slate-200 dark:border-white/[0.08] text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm dark:shadow-none">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0 animate-pulse" />
              <span className="truncate sm:whitespace-normal font-medium uppercase tracking-wider text-[11px]">
                OPEN TO LEARNING, HACKATHONS & COLLABORATION
              </span>
            </div>

            {/* Dominant Name Heading */}
            <div className="animate-entrance delay-150">
              <div className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold mb-1">
                CSE (AI) UNDERGRADUATE & BUILDER
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.08] font-display break-words">
                Shanmukheswar<br />
                Medicharla<span className="text-sky-600 dark:text-sky-400">.</span>
              </h1>
            </div>

            {/* Headline & Bio Intro */}
            <div className="animate-entrance delay-200 space-y-2 max-w-xl">
              <p className="text-lg sm:text-xl font-medium text-slate-900 dark:text-white font-display">
                AI Engineer in the Making. Driven to build what matters.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                CSE (AI) student exploring <span className="text-slate-900 dark:text-white font-medium">Artificial Intelligence</span>, <span className="text-slate-900 dark:text-white font-medium">Generative AI</span>, <span className="text-slate-900 dark:text-white font-medium">Autonomous Agents</span>, and <span className="text-sky-600 dark:text-sky-400 font-medium">Quantum Computing</span> — learning by building and solving real-world problems.
              </p>
            </div>

            {/* Architectural Tags */}
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

            {/* High-Contrast Action Buttons */}
            <div className="animate-entrance delay-300 flex flex-col min-[420px]:flex-row items-stretch min-[420px]:items-center gap-3 pt-3 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 font-semibold text-sm transition-all duration-150 active:scale-[0.98] shadow-sm hover:shadow-md"
                id="hero-explore-work-button"
              >
                <span>Explore my work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-[#0e111a] hover:bg-slate-50 dark:hover:bg-[#151924] text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white font-medium text-sm border border-slate-300 dark:border-white/[0.12] hover:border-slate-400 dark:hover:border-white/25 transition-all duration-150 active:scale-[0.98] shadow-sm"
                id="hero-download-resume-button"
              >
                <FileText className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                <span>Curriculum Vitae</span>
              </button>
            </div>

          </div>

          {/* MOBILE PORTRAIT CARD (Visible only on screens < 1024px, matching reference site mobile layout) */}
          <div className="block lg:hidden w-full max-w-md mx-auto pt-4 animate-entrance delay-200">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/10 shadow-xl bg-white dark:bg-[#0c0e15] aspect-[4/5] sm:aspect-[16/11]">
              <img
                src="/profile.jpg"
                alt="Shanmukheswar Medicharla"
                loading="eager"
                fetchPriority="high"
                className="w-full h-full object-cover object-[center_18%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              
              {/* Photo Caption Overlay on Mobile */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10 text-white font-mono text-[11px]">
                <div>
                  <div className="text-[10px] text-sky-300 uppercase tracking-wider">AI Engineer</div>
                  <div className="font-bold text-sm tracking-tight font-display">Shanmukheswar M.</div>
                </div>
                <div className="text-right text-[10px] uppercase tracking-wider text-slate-300">
                  STUDENT. BUILDER.<br />
                  ALWAYS CURIOUS.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* HERO BOTTOM UTILITY STRIP (matching reference site) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 lg:pt-12 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/80 dark:border-white/[0.08] text-xs font-mono text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
            <span className="uppercase tracking-wider">KAKINADA, INDIA</span>
          </div>

          <a
            href="#about"
            className="hidden sm:flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
