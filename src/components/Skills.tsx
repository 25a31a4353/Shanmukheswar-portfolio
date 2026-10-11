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
      case 'Code2': return <Code2 className="w-4 h-4 text-sky-600" />;
      case 'Brain': return <Brain className="w-4 h-4 text-indigo-600" />;
      case 'Sparkles': return <Sparkles className="w-4 h-4 text-amber-600" />;
      case 'Atom': return <Atom className="w-4 h-4 text-sky-600" />;
      case 'Server': return <Server className="w-4 h-4 text-teal-600" />;
      case 'Cloud': return <Cloud className="w-4 h-4 text-blue-600" />;
      case 'Wrench': return <Wrench className="w-4 h-4 text-slate-600" />;
      default: return <Cpu className="w-4 h-4 text-sky-600" />;
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
    <section id="skills" className="py-20 sm:py-28 relative border-t border-slate-200/80 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Ranade Font */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="eyebrow-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
              <span>03 · TECHNICAL STACK</span>
            </div>
            <h2 className="font-ranade text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
              Core Technical <span className="text-sky-700">Capabilities.</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Curated stack for building autonomous agents, backend services, and quantum experiments.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-60">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search technical stack"
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white border border-slate-200/90 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-sky-500 font-mono transition-colors shadow-xs"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all duration-150 active:scale-[0.98] ${
                activeCategory === cat
                  ? 'bg-slate-900 text-white font-semibold shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80 shadow-xs'
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
              className="p-5 rounded-2xl bg-white border border-slate-200/90 hover:border-sky-400/60 hover:-translate-y-0.5 transition-all duration-200 shadow-xs hover:shadow-md"
            >
              {/* Category Side Heading with Ranade */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 shrink-0">
                  {getIcon(category.iconName)}
                </div>
                <div>
                  <h3 className="font-ranade text-sm font-bold text-slate-900">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Badges Grid */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200/80 text-xs font-medium text-slate-700 hover:border-sky-300 transition-colors cursor-default"
                  >
                    <span>{skill.name}</span>
                    {skill.tag && (
                      <span className="text-[10px] font-mono px-1 py-0.2 rounded bg-sky-50 text-sky-700 border border-sky-200/70 font-semibold">
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
