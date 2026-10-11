import React, { useState } from 'react';
import { 
  Code2, 
  Brain, 
  Sparkles, 
  Atom, 
  Server, 
  Cloud, 
  Wrench, 
  Cpu, 
  Search 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-4 h-4 text-sky-400" />;
      case 'Brain': return <Brain className="w-4 h-4 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-sky-400" />;
      case 'Atom': return <Atom className="w-4 h-4 text-sky-400" />;
      case 'Server': return <Server className="w-4 h-4 text-sky-400" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-sky-400" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-sky-400" />;
      default: return <Cpu className="w-4 h-4 text-sky-400" />;
    }
  };

  const categories = ['All', ...skillsData.map(c => c.title)];

  const filteredCategories = skillsData
    .filter(cat => activeCategory === 'All' || cat.title === activeCategory)
    .map(cat => {
      if (!searchTerm.trim()) return cat;
      const matchingSkills = cat.skills.filter(s => 
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (s.tag && s.tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      return {
        ...cat,
        skills: matchingSkills
      };
    })
    .filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 sm:py-32 relative border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="font-mono text-xs text-sky-400 uppercase tracking-widest mb-3">
              // 03 · TECHNICAL ARSENAL
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
              Tools, Frameworks & Core Primitives.
            </h2>
            <p className="text-slate-400 text-base mt-2">
              Curated stack for training models, orchestrating multi-agent loops, simulating quantum states, and shipping fast APIs.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search stack..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search technical stack"
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg bg-[#0c0e15] border border-white/[0.08] text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-sky-500/50 font-mono transition-colors"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all duration-150 active:scale-[0.98] ${
                activeCategory === cat
                  ? 'bg-white text-slate-950 font-semibold shadow-sm'
                  : 'bg-[#0c0e15] text-slate-400 hover:text-white border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.title}
              className="p-6 rounded-xl bg-[#0c0e15] border border-white/[0.07] hover:border-sky-500/35 hover:-translate-y-1 transition-all duration-200 hover:shadow-xl hover:shadow-black/60"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-[#11141f] border border-white/[0.07]">
                  {getIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white font-display">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Badges Grid (NO percentage bars) */}
              <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.05]">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="badge-interactive inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#07090e] border border-white/[0.07] hover:border-sky-500/40 hover:text-sky-300 transition-colors cursor-default"
                  >
                    <span className="text-xs font-medium text-slate-200">
                      {skill.name}
                    </span>
                    {skill.tag && (
                      <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-sky-950/40 text-sky-300 border border-sky-500/20">
                        {skill.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
