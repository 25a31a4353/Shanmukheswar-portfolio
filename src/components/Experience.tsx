import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { experienceData } from '../data/portfolioData';
import { SectionTransition } from './motion/SectionTransition';
import { ThreeDCard } from './motion/ThreeDCard';
import { MotionCard } from './motion/MotionCard';
import { ParallaxLayer } from './motion/ParallaxLayer';

export const Experience: React.FC = () => {
  return (
    <SectionTransition type="divergent-depth" perspective="1200px" id="experience">
      <section className="py-20 sm:py-28 relative border-t border-slate-200/80 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Ranade Font */}
          <div className="max-w-3xl mb-10">
            <div className="eyebrow-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span>05 · LEADERSHIP & DIRECTION</span>
            </div>
            <h2 className="font-ranade text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Engineering Leadership & <span className="text-sky-700">Execution.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Taking technical ownership in intense hackathons and student research circles.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="space-y-5">
            {experienceData.map((item, idx) => (
              <MotionCard key={item.id} delay={idx * 70} depth="medium">
                <ThreeDCard maxTilt={3.5} depthZ={12} className="rounded-2xl">
                  <div
                    className="p-5 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-300 transition-colors shadow-xs hover:shadow-md"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <div>
                        <span className="text-[11px] font-mono text-sky-700 uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200 font-medium">
                          {item.type}
                        </span>
                        <ParallaxLayer depthZ={12}>
                          <h3 className="font-ranade text-base sm:text-lg font-bold text-slate-900 mt-2 leading-snug">
                            {item.role}
                          </h3>
                        </ParallaxLayer>
                        <p className="text-xs font-mono text-slate-500 mt-0.5">
                          {item.organization}
                        </p>
                      </div>
                      <div className="text-xs font-mono text-slate-600 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/80 self-start sm:self-auto font-medium">
                        {item.period}
                      </div>
                    </div>

                    {/* Highlights List */}
                    <ParallaxLayer depthZ={14} className="space-y-2 my-4">
                      {item.highlights.slice(0, 3).map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                          <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </ParallaxLayer>

                    {/* Core Tools */}
                    <ParallaxLayer depthZ={16} className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-slate-100">
                      <span className="text-xs font-mono text-slate-500 mr-1.5">Stack:</span>
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200/80 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </ParallaxLayer>
                  </div>
                </ThreeDCard>
              </MotionCard>
            ))}
          </div>

        </div>
      </section>
    </SectionTransition>
  );
};
