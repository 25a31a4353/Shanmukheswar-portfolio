import React from 'react';
import { Bot, Sparkles, Atom, Users, Target } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const { about } = personalInfo;

  const pillarIcons = [
    <Bot className="w-4 h-4 text-sky-400" key="bot" />,
    <Sparkles className="w-4 h-4 text-sky-400" key="sparkles" />,
    <Atom className="w-4 h-4 text-sky-400" key="atom" />,
    <Users className="w-4 h-4 text-sky-400" key="users" />
  ];

  return (
    <section id="about" className="py-24 sm:py-32 relative border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-3">
            // 01 · ABOUT ME
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            Synthesizing AI Research into Working Systems.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            {about.lead}
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative & Metrics (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 leading-relaxed text-sm sm:text-base">
            {about.bio.map((paragraph, idx) => (
              <p key={idx} className="bg-[#0c0e15] p-6 rounded-xl border border-white/[0.07] text-slate-300">
                {paragraph}
              </p>
            ))}

            {/* Quick Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-2">
              {about.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3 min-[400px]:p-4 rounded-xl bg-[#0c0e15] border border-white/[0.07] text-center"
                >
                  <div className="text-[10px] min-[400px]:text-[11px] font-mono text-slate-400 uppercase tracking-tight">{stat.label}</div>
                  <div className="text-xs min-[400px]:text-sm font-semibold text-white mt-1 font-display truncate">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: 4 Core Architectural Pillars (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Target className="w-3.5 h-3.5 text-sky-400" />
              <span>Architectural Focus Areas</span>
            </div>

            {about.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="p-5 rounded-xl bg-[#0c0e15] border border-white/[0.07] hover:border-sky-500/30 transition-all duration-200"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-[#11141f] border border-white/[0.08] shrink-0">
                    {pillarIcons[idx]}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white font-display">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-normal">
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
