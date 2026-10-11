import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, ArrowDownRight, FileText, Terminal, Atom, Sparkles, MapPin, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useReducedMotion, useIsMobile } from '../motion/useReducedMotion';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const prefersReduced = useReducedMotion();
  const isMobile = useIsMobile();

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (prefersReduced) return;

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current) return;
          const rect = sectionRef.current.getBoundingClientRect();
          const height = rect.height || window.innerHeight;
          // Progress from 0 (at top) to 1 (when scrolled past hero)
          const p = Math.max(0, Math.min(1, -rect.top / height));
          setScrollProgress(p);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReduced]);

  // Derived 3D retreat values (subtle, camera moving away)
  const retreatScale = prefersReduced ? 1 : 1 - scrollProgress * 0.05;
  const retreatZ = prefersReduced ? 0 : -scrollProgress * (isMobile ? 30 : 80);
  const retreatRotateX = prefersReduced ? 0 : scrollProgress * (isMobile ? 0.6 : 1.5);
  const retreatOpacity = prefersReduced ? 1 : 1 - scrollProgress * 0.22;
  const gridTranslateY = prefersReduced ? 0 : scrollProgress * 65;

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[95vh] pt-28 pb-12 lg:pt-36 lg:pb-16 flex flex-col justify-between overflow-hidden bg-[#07090e] text-white border-b border-white/[0.08] perspective-1400"
    >
      {/* Precision Hero Ambient Grid & Vignette with Depth Parallax */}
      <div
        className="absolute inset-0 bg-grid-refined -z-20 opacity-25 pointer-events-none will-change-transform"
        style={{
          transform: prefersReduced
            ? undefined
            : `translate3d(0, ${gridTranslateY.toFixed(1)}px, -120px) scale(${1 + scrollProgress * 0.05})`,
          transition: 'transform 0.05s linear',
        }}
        aria-hidden="true"
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 hero-spotlight -z-20 pointer-events-none" />

      {/* DESKTOP FULL-BLEED RIGHT PORTRAIT PHOTO (matching reference site, visually anchored) */}
      <div
        className="hidden lg:block absolute right-0 top-0 bottom-0 w-[48%] xl:w-[50%] h-full pointer-events-none z-0 overflow-hidden"
        style={{
          opacity: prefersReduced ? 1 : Math.max(0.7, 1 - scrollProgress * 0.3),
          transition: 'opacity 0.1s linear',
        }}
      >
        <img
          src="/profile.jpg"
          alt="Shanmukheswar Medicharla - AI Engineer & Builder"
          loading="eager"
          className="w-full h-full object-cover object-[center_18%] select-none scale-[1.02] transition-transform duration-700 hover:scale-105"
        />

        {/* Seamless Multi-Directional Gradient Blend into Dark Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/75 via-25% to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-transparent to-transparent via-20%" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/80 via-transparent to-transparent via-10%" />
      </div>

      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto preserve-3d will-change-transform"
        style={{
          transform: prefersReduced
            ? undefined
            : `perspective(1400px) scale(${retreatScale.toFixed(3)}) translateZ(${retreatZ.toFixed(1)}px) rotateX(${retreatRotateX.toFixed(2)}deg)`,
          opacity: retreatOpacity,
          transition: 'transform 0.08s ease-out, opacity 0.1s ease-out',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Hero Content (7 columns on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Eyebrow Badge (Permanent Dark Mode) */}
            <div className="animate-entrance delay-100 inline-flex max-w-full items-center gap-2 px-3 py-1 rounded-full bg-[#0c0e15] border border-white/[0.08] text-xs font-mono text-slate-300 shadow-none">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
              <span className="truncate sm:whitespace-normal font-medium uppercase tracking-wider text-[11px]">
                OPEN TO LEARNING, HACKATHONS & COLLABORATION
              </span>
            </div>

            {/* Dominant Name Heading */}
            <div className="animate-entrance delay-150">
              <div className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold mb-1">
                CSE (AI) UNDERGRADUATE & BUILDER
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] font-ranade break-words">
                Shanmukheswar<br />
                Medicharla<span className="text-sky-400">.</span>
              </h1>
            </div>

            {/* Headline & Bio Intro */}
            <div className="animate-entrance delay-200 space-y-2 max-w-xl">
              <p className="text-lg sm:text-xl font-medium text-white font-ranade">
                AI Engineer in the Making. Driven to build what matters.
              </p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                CSE (AI) student exploring <span className="text-white font-medium">Artificial Intelligence</span>, <span className="text-white font-medium">Generative AI</span>, <span className="text-white font-medium">Autonomous Agents</span>, and <span className="text-sky-400 font-medium">Quantum Computing</span> — learning by building and solving real-world problems.
              </p>
            </div>

            {/* Architectural Tags */}
            <div className="animate-entrance delay-200 flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-slate-400">
              <span className="badge-interactive px-2.5 py-1 rounded-md bg-[#0c0e15] border border-white/[0.07] flex items-center gap-1.5 text-slate-300 shadow-none cursor-default">
                <Terminal className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Autonomous Agents</span>
              </span>
              <span className="badge-interactive px-2.5 py-1 rounded-md bg-[#0c0e15] border border-white/[0.07] flex items-center gap-1.5 text-slate-300 shadow-none cursor-default">
                <Atom className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Quantum ML (PennyLane/Qiskit)</span>
              </span>
              <span className="badge-interactive px-2.5 py-1 rounded-md bg-[#0c0e15] border border-white/[0.07] flex items-center gap-1.5 text-slate-300 shadow-none cursor-default">
                <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Multi-Hackathon Captain</span>
              </span>
            </div>

            {/* High-Contrast Action Buttons */}
            <div className="animate-entrance delay-300 flex flex-col min-[420px]:flex-row items-stretch min-[420px]:items-center gap-3 pt-3 w-full sm:w-auto">
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white text-slate-950 hover:bg-slate-100 font-semibold text-sm transition-all duration-150 active:scale-[0.98] shadow-sm hover:shadow-md"
                id="hero-explore-work-button"
              >
                <span>Explore my work</span>
                <ArrowDownRight className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#0e111a] hover:bg-[#151924] text-slate-200 hover:text-white font-medium text-sm border border-white/[0.12] hover:border-white/25 transition-all duration-150 active:scale-[0.98] shadow-sm"
                id="hero-download-resume-button"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Curriculum Vitae</span>
              </button>
            </div>

          </div>

          {/* MOBILE PORTRAIT CARD (Visible only on screens < 1024px) */}
          <div className="block lg:hidden w-full max-w-md mx-auto pt-4 animate-entrance delay-200">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0c0e15] aspect-[4/5] sm:aspect-[16/11]">
              <img
                src="/profile.jpg"
                alt="Shanmukheswar Medicharla"
                loading="eager"
                className="w-full h-full object-cover object-[center_18%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
              
              {/* Photo Caption Overlay on Mobile */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10 text-white font-mono text-[11px]">
                <div>
                  <div className="text-[10px] text-sky-300 uppercase tracking-wider">AI Engineer</div>
                  <div className="font-bold text-sm tracking-tight font-ranade">Shanmukheswar M.</div>
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

      {/* HERO BOTTOM UTILITY STRIP (Permanent Dark Mode) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 lg:pt-12 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08] text-xs font-mono text-slate-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="uppercase tracking-wider text-slate-300">KAKINADA, INDIA</span>
          </div>

          <a
            href="#about"
            className="hidden sm:flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
          >
            <span>SCROLL TO EXPLORE</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
