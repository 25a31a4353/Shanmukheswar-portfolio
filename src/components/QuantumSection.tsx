import React from 'react';
import { Atom, Shield, Cpu, Sparkles, Terminal, ArrowDownRight } from 'lucide-react';
import { QuantumVisual3D } from './QuantumVisual3D';
import { quantumAIInsights } from '../data/portfolioData';
import { ThreeDCard } from './motion/ThreeDCard';
import { ParallaxLayer } from './motion/ParallaxLayer';

export const QuantumSection: React.FC = () => {
  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'Atom':
        return <Atom className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case 'Shield':
        return <Shield className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-amber-500" />;
    }
  };

  return (
    <section
      id="ai-quantum"
      className="py-20 sm:py-28 relative border-t border-slate-200/80 dark:border-white/[0.08] bg-[#F8FAFC] dark:bg-[#07090e] overflow-hidden"
    >
      {/* Background radial ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/[0.04] dark:bg-sky-500/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="eyebrow-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3">
            <Atom className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>06 · WHERE AI MEETS QUANTUM</span>
          </div>
          <h2 className="font-ranade text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight leading-tight">
            The Quantum Computing <span className="text-sky-700 dark:text-sky-400">Frontier.</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3 leading-relaxed max-w-2xl">
            {quantumAIInsights.subtitle}
          </p>
        </div>

        {/* 2-Column Showcase: Left = Interactive 3D Visual, Right = Core Architecture & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive 3D Bloch & Neural Sphere */}
          <div className="lg:col-span-6 flex flex-col items-center">
            <QuantumVisual3D />
            
            <p className="mt-6 text-center text-xs font-mono text-slate-500 dark:text-slate-400 max-w-sm">
              Bloch sphere orbital projection & synaptic statevector nodes. Move cursor to inspect perspective.
            </p>
          </div>

          {/* Right Column: Pillars & Research Focus */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Core Quote Box */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#0c0e15] border border-slate-200/90 dark:border-white/[0.08] shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono text-sky-700 dark:text-sky-400 font-semibold mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>Core Research Thesis</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-mono">
                "{quantumAIInsights.coreQuote}"
              </p>
            </div>

            {/* 3 Physical Depth Cards for Pillars */}
            {quantumAIInsights.pillars.map((pillar, idx) => (
              <ThreeDCard
                key={pillar.title}
                maxTilt={4.5}
                depthZ={12}
                className="rounded-2xl"
              >
                <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#0c0e15] border border-slate-200/90 dark:border-white/[0.08] hover:border-sky-400/60 dark:hover:border-sky-500/40 transition-colors shadow-xs">
                  <div className="flex items-start gap-3.5">
                    <ParallaxLayer depthZ={18} className="p-2 rounded-xl bg-slate-50 dark:bg-[#11141f] border border-slate-100 dark:border-white/[0.08] shrink-0">
                      {getPillarIcon(pillar.icon)}
                    </ParallaxLayer>
                    <div>
                      <h3 className="font-ranade text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        {pillar.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ThreeDCard>
            ))}

            {/* Toolbox Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 mr-1">Toolbox:</span>
              {quantumAIInsights.toolbox.map(tool => (
                <span
                  key={tool.name}
                  className="px-2.5 py-1 rounded-md bg-white dark:bg-[#0c0e15] border border-slate-200/90 dark:border-white/[0.08] text-xs font-mono text-slate-700 dark:text-slate-300 font-medium shadow-xs"
                >
                  {tool.name}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
