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
    <section id="achievements" className="py-24 sm:py-32 relative border-t border-slate-200/80 dark:border-white/[0.05] bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="font-mono text-xs text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-3">
              // 04 · COMPETITIVE HONORS & SPRINT MILESTONES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-display">
              Hackathons, Sprints & Verified Milestones.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base mt-2">
              Active participant in competitive hackathons, regional finales, and algorithmic challenges — building and deploying real systems under pressure.
            </p>
          </div>

          {/* View Mode Toggle: Grid vs Timeline */}
          <div className="flex items-center gap-1 bg-white dark:bg-[#0c0e15] p-1 rounded-lg border border-slate-200/90 dark:border-white/[0.08] shadow-sm self-start md:self-end">
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-all ${
                viewMode === 'grid'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
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
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-mono transition-all ${
                viewMode === 'timeline'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
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

        {/* Top Spotlight Podium (Hero Highlights) - shown when filter is All */}
        {filter === 'All' && (
          <div className="mb-14">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              <span>Key Hackathon Podiums & Leadership Milestones</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {spotlightItems.slice(0, 4).map((item) => {
                const meta = getCategoryMeta(item.category);
                return (
                  <div
                    key={`spotlight-${item.id}`}
                    className="group relative p-5 rounded-xl bg-white dark:bg-gradient-to-b dark:from-[#0e111a] dark:to-[#0c0e15] border border-slate-200/80 dark:border-white/[0.09] hover:border-amber-500/50 dark:hover:border-amber-500/40 transition-all duration-200 hover:-translate-y-1 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-slate-200/70 dark:shadow-none dark:hover:shadow-black/70 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-lg bg-slate-50 dark:bg-[#07090e] border border-slate-200/80 dark:border-white/[0.08]">
                          {meta.icon}
                        </div>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${meta.color}`}>
                          {item.badge || item.category}
                        </span>
                      </div>

                      <h3 className="text-sm font-bold text-slate-900 dark:text-white font-display group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 mt-1 mb-2">
                        {item.organization}
                      </div>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    {item.highlight && (
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-white/[0.06] text-[11px] font-mono text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shrink-0" />
                        <span className="truncate">{item.highlight}</span>
                      </div>
                    )}
                  </div>
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

        {/* VIEW 1: Grid Mode */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAchievements.map((item) => {
              const meta = getCategoryMeta(item.category);
              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between p-6 rounded-xl bg-white dark:bg-[#0c0e15] border border-slate-200/80 dark:border-white/[0.07] hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all duration-200 hover:-translate-y-1 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-slate-200/70 dark:shadow-none dark:hover:shadow-black/60"
                >
                  <div>
                    {/* Header: Icon, Category & Date */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-slate-50 dark:bg-[#11141f] border border-slate-200/80 dark:border-white/[0.08]">
                        {meta.icon}
                      </div>
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
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-display group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 mb-3">
                      {item.organization}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom Highlight & Optional Link */}
                  <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-mono">
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
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* VIEW 2: Timeline Stream Mode */}
        {viewMode === 'timeline' && (
          <div className="relative border-l border-slate-300 dark:border-white/[0.1] ml-2 sm:ml-8 pl-4 sm:pl-8 space-y-8 sm:space-y-10 py-4">
            {filteredAchievements.map((item) => {
              const meta = getCategoryMeta(item.category);
              return (
                <div key={`timeline-${item.id}`} className="relative group">
                  {/* Timeline Node Point */}
                  <div className="absolute -left-[23px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-white dark:bg-[#0c0e15] border-2 border-sky-600 dark:border-sky-400 flex items-center justify-center group-hover:scale-125 transition-transform shadow-sm">
                    <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-sky-600 dark:bg-white" />
                  </div>

                  {/* Timeline Card */}
                  <div className="p-5 sm:p-6 rounded-xl bg-white dark:bg-[#0c0e15] border border-slate-200/80 dark:border-white/[0.07] hover:border-sky-500/40 dark:hover:border-sky-500/30 transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md">
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

                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-display mt-1">
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
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
