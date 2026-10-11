import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 relative border-t border-slate-200/80 dark:border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-3">
            // 05 · LEADERSHIP & SPRINT IMPACT
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-display">
            Captaincy, Architecture & High-Velocity Execution.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base mt-2">
            Taking technical ownership in intense hackathons and student research circles — balancing product vision with pragmatic engineering tradeoffs.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#0c0e15] border border-slate-200/80 dark:border-white/[0.07] hover:border-slate-300 dark:hover:border-white/20 transition-all duration-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-slate-200/70 dark:shadow-none"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <span className="text-[11px] font-mono text-sky-700 dark:text-sky-400 uppercase tracking-wider bg-sky-50 dark:bg-sky-950/40 px-2 py-0.5 rounded border border-sky-200 dark:border-sky-500/20">
                    {item.type}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mt-2">
                    {item.role}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {item.organization}
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-[#07090e] px-2.5 py-1 rounded border border-slate-200/80 dark:border-white/[0.06] self-start sm:self-auto">
                  {item.period}
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-2.5 my-5">
                {item.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Core Tools */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                <span className="text-xs font-mono text-slate-500 mr-2">Core Tools:</span>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-700 border border-slate-200/80 dark:bg-[#07090e] dark:text-slate-300 dark:border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
