import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Users, 
  Flame, 
  Milestone, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  LayoutGrid, 
  GitCommit 
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';
import { SectionTransition } from './motion/SectionTransition';
import { ThreeDCard } from './motion/ThreeDCard';
import { MotionCard } from './motion/MotionCard';
import { ParallaxLayer } from './motion/ParallaxLayer';

type CategoryFilter = 'All' | 'Hackathon' | 'Achievement' | 'Leadership' | 'Certification' | 'Technical Event';

export const Achievements: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('grid');

  const filterTabs: CategoryFilter[] = [
    'All', 
    'Hackathon', 
    'Achievement', 
    'Leadership', 
    'Certification', 
    'Technical Event'
  ];

  const filteredAchievements = filter === 'All'
    ? achievementsData
    : achievementsData.filter((item) => item.category === filter);

  // Spotlight items (top hackathon and competitive achievements)
  const spotlightItems = achievementsData.filter((item) => item.spotlight);

  const getCategoryMeta = (category: string) => {
    switch (category) {
      case 'Hackathon':
        return {
          icon: <Trophy className="w-4 h-4 text-amber-500 dark:text-amber-400" />,
          color: 'text-amber-700 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-950/40 dark:border-amber-500/30'
        };
      case 'Achievement':
        return {
          icon: <Award className="w-4 h-4 text-sky-600 dark:text-sky-400" />,
          color: 'text-sky-700 bg-sky-50 border-sky-200 dark:text-sky-400 dark:bg-sky-950/40 dark:border-sky-500/30'
        };
      case 'Leadership':
        return {
          icon: <Users className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
          color: 'text-emerald-700 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/40 dark:border-emerald-500/30'
        };
      case 'Certification':
        return {
          icon: <Milestone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
          color: 'text-indigo-700 bg-indigo-50 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-950/40 dark:border-indigo-500/30'
        };
      case 'Technical Event':
        return {
          icon: <Flame className="w-4 h-4 text-rose-600 dark:text-rose-400" />,
          color: 'text-rose-700 bg-rose-50 border-rose-200 dark:text-rose-400 dark:bg-rose-950/40 dark:border-rose-500/30'
        };
      default:
        return {
          icon: <Sparkles className="w-4 h-4 text-slate-500 dark:text-slate-400" />,
          color: 'text-slate-600 bg-slate-50 border-slate-200 dark:text-slate-400 dark:bg-[#07090e] dark:border-white/[0.08]'
        };
    }
  };

  return (
    <SectionTransition type="timeline-construct" perspective="1200px" id="achievements">
      <section className="py-20 sm:py-28 relative border-t border-slate-200/80 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Ranade Font */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span>04 · COMPETITIVE MILESTONES</span>
            </div>
            <h2 className="font-ranade text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Competitive <span className="text-sky-700">Milestones.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              National hackathon leadership, problem-solving under pressure, and technical recognitions.
            </p>
          </div>

          {/* View Mode Toggle: Grid vs Timeline */}
          <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200/90 shadow-xs self-start md:self-end">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                viewMode === 'grid'
                  ? 'bg-slate-900 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Card Grid View"
              aria-label="Switch to Card Grid View"
              aria-pressed={viewMode === 'grid'}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Grid</span>
            </button>
            <button
              onClick={() => setViewMode('timeline')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                viewMode === 'timeline'
                  ? 'bg-slate-900 text-white font-bold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="Chronological Timeline View"
              aria-label="Switch to Chronological Timeline View"
              aria-pressed={viewMode === 'timeline'}
            >
              <GitCommit className="w-3.5 h-3.5" />
              <span>Timeline</span>
            </button>
          </div>
        </div>

        {/* Top Spotlight Podium - shown when filter is All */}
        {filter === 'All' && (
          <div className="mb-12">
            <div className="font-ranade text-xs uppercase tracking-wider text-slate-700 font-bold mb-3 flex items-center gap-2 px-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Podium & Leadership Highlights</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {spotlightItems.slice(0, 4).map((item) => {
                const meta = getCategoryMeta(item.category);
                const isIbmFinale = item.id === 'ibm-regional-hackathon';

                return (
                  <ThreeDCard
                    key={`spotlight-${item.id}`}
                    maxTilt={5}
                    depthZ={isIbmFinale ? 18 : 12}
                    className="h-full rounded-2xl"
                  >
                    <div
                      className={`group relative p-4 h-full rounded-2xl bg-white dark:bg-[#0c0e15] border transition-all duration-200 flex flex-col justify-between shadow-xs hover:shadow-md ${
                        isIbmFinale
                          ? 'border-amber-400 dark:border-amber-500/60 ring-2 ring-amber-400/20 shadow-amber-500/10'
                          : 'border-slate-200/90 dark:border-white/[0.08] hover:border-amber-400/60'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2.5">
                          <ParallaxLayer depthZ={18} className="p-1.5 rounded-lg bg-slate-50 dark:bg-[#11141f] border border-slate-100 dark:border-white/[0.08]">
                            {meta.icon}
                          </ParallaxLayer>
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border font-medium ${meta.color}`}>
                            {item.badge || item.category}
                          </span>
                        </div>

                        <ParallaxLayer depthZ={12}>
                          <h3 className="font-ranade text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors leading-snug">
                            {item.title}
                          </h3>
                        </ParallaxLayer>
                        <div className="text-[11px] font-mono text-slate-500 mt-0.5 mb-2">
                          {item.organization}
                        </div>

                        <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal line-clamp-2">
                          {item.description}
                        </p>
                      </div>

                      {item.highlight && (
                        <ParallaxLayer depthZ={16} className="mt-3 pt-2.5 border-t border-slate-100 dark:border-white/[0.06] text-[11px] font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                          <span className="truncate font-medium">{item.highlight}</span>
                        </ParallaxLayer>
                      )}
                    </div>
                  </ThreeDCard>
                );
              })}
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 scrollbar-none bg-white dark:bg-[#0c0e15] p-1.5 rounded-lg border border-slate-200/90 dark:border-white/[0.07] shadow-sm">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                filter === tab
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.04]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* VIEW 1: Grid Mode with 3D emergence */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((item, idx) => {
              const meta = getCategoryMeta(item.category);
              return (
                <MotionCard key={item.id} delay={idx * 40} depth="medium">
                  <ThreeDCard maxTilt={4} depthZ={12} className="h-full rounded-xl">
                    <div
                      className="group relative flex flex-col justify-between h-full p-6 rounded-xl bg-white dark:bg-[#0c0e15] border border-slate-200/80 dark:border-white/[0.07] hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all duration-200 shadow-xs hover:shadow-md"
                    >
                      <div>
                        {/* Header: Icon, Category & Date */}
                        <div className="flex items-center justify-between gap-3 mb-4">
                          <ParallaxLayer depthZ={18} className="p-2 rounded-lg bg-slate-50 dark:bg-[#11141f] border border-slate-200/80 dark:border-white/[0.08]">
                            {meta.icon}
                          </ParallaxLayer>
                          <div className="flex items-center gap-2">
                            {item.badge && (
                              <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${meta.color}`}>
                                {item.badge}
                              </span>
                            )}
                            <span className="text-xs font-mono text-slate-500">
                              {item.date}
                            </span>
                          </div>
                        </div>

                        {/* Title & Organization */}
                        <ParallaxLayer depthZ={10}>
                          <h3 className="font-ranade text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-700 dark:group-hover:text-sky-400 transition-colors leading-snug">
                            {item.title}
                          </h3>
                        </ParallaxLayer>
                        <p className="text-xs font-mono text-slate-500 mt-0.5 mb-2.5">
                          {item.organization}
                        </p>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom Highlight & Optional Link */}
                      <ParallaxLayer depthZ={14} className="pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
                        {item.highlight ? (
                          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                            <span className="truncate">{item.highlight}</span>
                          </div>
                        ) : (
                          <span className="text-slate-500">Verified Technical Event</span>
                        )}

                        {item.credentialUrl && (
                          <a
                            href={item.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-white transition-colors"
                            aria-label="View Credential"
                          >
                            <span>Profile</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </ParallaxLayer>
                    </div>
                  </ThreeDCard>
                </MotionCard>
              );
            })}
          </div>
        )}

        {/* VIEW 2: Timeline Stream Mode with self-drawing line and popping nodes */}
        {viewMode === 'timeline' && (
          <div className="relative ml-2 sm:ml-8 pl-6 sm:pl-10 space-y-8 sm:space-y-10 py-4">
            {/* Self-drawing vertical timeline spine */}
            <div
              className="absolute left-[7px] sm:left-[15px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-sky-500 via-sky-400 to-indigo-500 rounded-full opacity-70"
              aria-hidden="true"
            />

            {filteredAchievements.map((item, idx) => {
              const meta = getCategoryMeta(item.category);
              const isIbm = item.id === 'ibm-regional-hackathon';

              return (
                <MotionCard key={`timeline-${item.id}`} delay={idx * 50} direction="depth">
                  <div className="relative group">
                    {/* Timeline Node Point with accent glow */}
                    <div className="absolute -left-[30px] sm:-left-[38px] top-2 w-4 h-4 rounded-full bg-white dark:bg-[#0c0e15] border-2 border-sky-600 dark:border-sky-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-sm group-hover:shadow-[0_0_10px_rgba(2,132,199,0.5)] z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-600 dark:bg-white" />
                    </div>

                    {/* Timeline Card */}
                    <div className={`p-5 sm:p-6 rounded-xl bg-white dark:bg-[#0c0e15] border transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md ${
                      isIbm
                        ? 'border-amber-400 dark:border-amber-500/60 ring-1 ring-amber-400/30'
                        : 'border-slate-200/80 dark:border-white/[0.07] hover:border-sky-500/40 dark:hover:border-sky-500/30'
                    }`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2">
                          <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${meta.color}`}>
                            {item.badge || item.category}
                          </span>
                          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                            {item.date}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-slate-500">
                          {item.organization}
                        </div>
                      </div>

                      <h3 className="font-ranade text-base font-bold text-slate-900 dark:text-white mt-1">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.06] text-xs font-mono">
                        {item.highlight && (
                          <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                            <span className="truncate">{item.highlight}</span>
                          </div>
                        )}

                        {item.credentialUrl && (
                          <a
                            href={item.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-white transition-colors"
                            aria-label={`Verify credential for ${item.title}`}
                          >
                            <span>Verify Profile</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </MotionCard>
              );
            })}
          </div>
        )}

      </div>
    </section>
  </SectionTransition>
  );
};
