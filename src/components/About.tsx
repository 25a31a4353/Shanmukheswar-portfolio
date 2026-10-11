import React from 'react';
import { Bot, Sparkles, Atom, Users, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const { about } = personalInfo;

  const pillarIcons = [
    <Bot className="w-4 h-4 text-sky-600" key="bot" />,
    <Sparkles className="w-4 h-4 text-indigo-600" key="sparkles" />,
    <Atom className="w-4 h-4 text-sky-600" key="atom" />,
    <Users className="w-4 h-4 text-teal-600" key="users" />
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative border-t border-slate-200/80 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Ranade Typeface & Textured Eyebrow */}
        <div className="max-w-3xl mb-12">
          <div className="eyebrow-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
            <span>01 · ABOUT ME</span>
          </div>
          <h2 className="font-ranade text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Synthesizing AI Research into <span className="text-sky-700">Working Systems.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed max-w-2xl">
            Second-year CSE (AI) undergraduate (9.24 CGPA) turning machine intelligence and backend pipelines into functional, deployed prototypes.
          </p>
        </div>

        {/* 2-Column Minimal Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Minimal Core Statement & Specs */}
          <div className="lg:col-span-7 space-y-5">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-sm space-y-3">
              <h3 className="font-ranade text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-sky-600" />
                Engineering Philosophy
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                I prioritize functional prototypes over theoretical exercises — designing clean FastAPI and Python backends, integrating autonomous LLM agents, and leading squads to competitive finishes.
              </p>
            </div>

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200/80 text-center shadow-xs hover:border-sky-300 transition-colors"
                >
                  <div className="text-[10px] min-[400px]:text-[11px] font-mono text-slate-500 uppercase tracking-tight">{stat.label}</div>
                  <div className="text-xs min-[400px]:text-sm font-bold text-slate-900 mt-1 font-ranade truncate">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Core Focus Areas with Ranade Side Headings */}
          <div className="lg:col-span-5 space-y-3">
            <div className="font-ranade text-xs uppercase tracking-wider text-slate-700 font-bold mb-1 flex items-center gap-2 px-1">
              <Target className="w-3.5 h-3.5 text-sky-600" />
              <span>Architectural Focus Areas</span>
            </div>

            {about.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-4 rounded-xl bg-white border border-slate-200/80 hover:border-sky-400/60 transition-all duration-200 shadow-xs hover:shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 shrink-0 mt-0.5">
                    {pillarIcons[idx]}
                  </div>
                  <div>
                    <h4 className="font-ranade text-sm font-bold text-slate-900">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5 leading-snug">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
