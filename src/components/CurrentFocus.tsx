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

export const CurrentFocus: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-sky-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Atom':
        return <Atom className="w-5 h-5 text-indigo-400" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5 text-emerald-400" />;
      default:
        return <Terminal className="w-5 h-5 text-sky-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Active':
        return {
          bg: 'bg-emerald-950/40 text-emerald-400 border-emerald-500/30',
          dot: 'bg-emerald-400',
          ping: true
        };
      case 'Learning / Building':
        return {
          bg: 'bg-sky-950/40 text-sky-400 border-sky-500/30',
          dot: 'bg-sky-400',
          ping: true
        };
      case 'Exploring':
        return {
          bg: 'bg-indigo-950/40 text-indigo-300 border-indigo-500/30',
          dot: 'bg-indigo-400',
          ping: false
        };
      default:
        return {
          bg: 'bg-[#07090e] text-slate-400 border-white/[0.08]',
          dot: 'bg-slate-400',
          ping: false
        };
    }
  };

  return (
    <section id="currently-building" className="py-24 sm:py-32 relative border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Radio className="w-3.5 h-3.5 animate-pulse text-sky-400" />
              <span>What I'm exploring right now</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
              Currently Building
            </h2>
            <p className="text-slate-400 text-base mt-2">
              Active engineering testbenches, conceptual explorations, and live sprint commitments.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-500 flex items-center gap-2 bg-[#0c0e15] px-3 py-1.5 rounded-lg border border-white/[0.06] self-start md:self-end">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Real-time Engineering Focus</span>
          </div>
        </div>

        {/* 4 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentlyBuildingData.map((item) => {
            const statusConfig = getStatusBadge(item.status);
            const isHovered = activeCardId === item.id;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveCardId(item.id)}
                onMouseLeave={() => setActiveCardId(null)}
                className={`group relative p-6 sm:p-7 rounded-xl bg-[#0c0e15] border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/70 flex flex-col justify-between ${
                  isHovered
                    ? 'border-sky-500/40 bg-[#0f121b]'
                    : 'border-white/[0.07]'
                }`}
              >
                <div>
                  {/* Top: Icon & Status Indicator */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-[#07090e] border border-white/[0.08] group-hover:border-sky-500/30 transition-colors">
                      {getIcon(item.iconName)}
                    </div>

                    {/* Status Indicator Pill */}
                    <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono border ${statusConfig.bg}`}>
                      <span className="relative flex h-2 w-2">
                        {statusConfig.ping && (
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${statusConfig.dot}`} />
                        )}
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${statusConfig.dot}`} />
                      </span>
                      <span className="font-medium">{item.status}</span>
                    </div>
                  </div>

                  {/* Topic Title */}
                  <h3 className="text-lg font-bold text-white font-display group-hover:text-sky-300 transition-colors flex items-center justify-between">
                    <span>{item.topic}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Focus Areas Badges */}
                {item.focusAreas && (
                  <div className="flex flex-wrap items-center gap-1.5 mt-5 pt-4 border-t border-white/[0.06]">
                    {item.focusAreas.map((area) => (
                      <span
                        key={area}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#07090e] text-slate-400 border border-white/[0.06] group-hover:border-sky-500/20 group-hover:text-slate-300 transition-colors"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
