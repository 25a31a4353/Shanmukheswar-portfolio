import React, { useState } from 'react';
import { 
  Brain, 
  Sparkles, 
  Atom, 
  Trophy, 
  Terminal, 
  ArrowUpRight,
  Radio
} from 'lucide-react';
import { currentlyBuildingData } from '../data/portfolioData';
import { SectionTransition } from './motion/SectionTransition';
import { ThreeDCard } from './motion/ThreeDCard';
import { MotionCard } from './motion/MotionCard';
import { ParallaxLayer } from './motion/ParallaxLayer';

export const CurrentFocus: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-sky-600" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-indigo-600" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-emerald-600" />;
      default:
        return <Terminal className="w-5 h-5 text-sky-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return {
          bg: 'bg-emerald-50 text-emerald-700 border-emerald-200',
          dot: 'bg-emerald-500',
          ping: true
        };
      case 'Learning / Building':
        return {
          bg: 'bg-sky-50 text-sky-700 border-sky-200',
          dot: 'bg-sky-500',
          ping: true
        };
      case 'Exploring':
        return {
          bg: 'bg-indigo-50 text-indigo-700 border-indigo-200',
          dot: 'bg-indigo-500',
          ping: false
        };
      default:
        return {
          bg: 'bg-slate-50 text-slate-600 border-slate-200',
          dot: 'bg-slate-400',
          ping: false
        };
    }
  };

  return (
    <SectionTransition type="quantum-exit" perspective="1200px" id="currently-building">
      <section className="py-20 sm:py-28 relative border-t border-slate-200/80 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Ranade Font */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div className="max-w-2xl">
              <div className="eyebrow-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3">
                <Radio className="w-3.5 h-3.5 animate-pulse text-sky-600" />
                <span>07 · NOW BUILDING</span>
              </div>
              <h2 className="font-ranade text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Currently <span className="text-sky-700">Building.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Active engineering prototypes, conceptual testbenches, and live commitments.
              </p>
            </div>

            <div className="text-xs font-mono text-slate-600 flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-slate-200/90 shadow-xs self-start md:self-end">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-medium">Active Sprint Focus</span>
            </div>
          </div>

          {/* 4 Interactive 3D Cards Grid with Staggered Entrance */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {currentlyBuildingData.map((item, idx) => {
              const statusConfig = getStatusBadge(item.status);

              return (
                <MotionCard key={item.id} delay={idx * 75} depth="medium">
                  <ThreeDCard
                    maxTilt={4.5}
                    depthZ={14}
                    className="h-full rounded-2xl"
                  >
                    <div
                      onMouseEnter={() => setActiveCardId(item.id)}
                      onMouseLeave={() => setActiveCardId(null)}
                      className={`group relative p-5 sm:p-6 h-full rounded-2xl bg-white border transition-colors shadow-xs hover:shadow-md flex flex-col justify-between ${
                        activeCardId === item.id
                          ? 'border-sky-400 bg-sky-50/10'
                          : 'border-slate-200/90'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <ParallaxLayer depthZ={20} className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                            {getIcon(item.iconName)}
                          </ParallaxLayer>
                          <ParallaxLayer depthZ={16}>
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-mono border font-medium ${statusConfig.bg}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${statusConfig.dot} ${statusConfig.ping ? 'animate-pulse' : ''}`} />
                              <span>{item.status}</span>
                            </span>
                          </ParallaxLayer>
                        </div>

                        <ParallaxLayer depthZ={12}>
                          <h3 className="font-ranade text-base sm:text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                            {item.topic}
                          </h3>
                        </ParallaxLayer>

                        <p className="text-xs sm:text-sm text-slate-600 mt-2 mb-4 leading-relaxed line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      <ParallaxLayer depthZ={16} className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                          {(item.focusAreas || []).map((area) => (
                            <span
                              key={area}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200/80 font-medium"
                            >
                              {area}
                            </span>
                          ))}
                        </div>

                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </ParallaxLayer>
                    </div>
                  </ThreeDCard>
                </MotionCard>
              );
            })}
          </div>

        </div>
      </section>
    </SectionTransition>
  );
};
