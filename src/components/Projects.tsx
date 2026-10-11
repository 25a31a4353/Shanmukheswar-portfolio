import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Award, User, Calendar } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Dynamically compute unique categories so new projects can be added/removed in portfolioData without touching UI components
  const categories = ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 relative border-t border-slate-200/80 dark:border-white/[0.05] bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="font-mono text-xs text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-3">
              // 02 · VERIFIED PROJECTS & SYSTEMS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-display">
              Real-World AI, Cloud & Quantum Builds.
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base mt-2">
              End-to-end applications built for competitive hackathons, regional finales, and research prototypes — with verified roles and outcomes.
            </p>
          </div>

          {/* Dynamic Category Filter Controls */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none bg-white dark:bg-[#0c0e15] p-1.5 rounded-lg border border-slate-200/90 dark:border-white/[0.07] shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium whitespace-nowrap transition-all duration-150 active:scale-[0.98] ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl bg-white dark:bg-[#0c0e15] border border-slate-200/80 dark:border-white/[0.07] hover:border-sky-500/50 dark:hover:border-sky-500/35 p-6 transition-all duration-200 hover:-translate-y-1.5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-xl hover:shadow-slate-200/70 dark:shadow-none dark:hover:shadow-black/70">
      
      {/* Top Header & Content */}
      <div>
        {/* Category & Role Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40 px-2 py-0.5 rounded border border-sky-200/80 dark:border-sky-500/20">
            {project.category}
          </span>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-[#07090e] px-2 py-0.5 rounded border border-slate-200/80 dark:border-white/[0.06]">
            <User className="w-3 h-3 text-sky-600 dark:text-sky-400" />
            <span>{project.role}</span>
          </div>
        </div>

        {/* Event or Period if available */}
        {(project.event || project.period) && (
          <div className="text-[11px] font-mono text-slate-500 mb-2 flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-slate-400 dark:text-slate-500" />
            <span>{project.event ? `${project.event}` : ''}{project.period ? ` (${project.period})` : ''}</span>
          </div>
        )}

        {/* Project Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display group-hover:text-sky-600 dark:group-hover:text-sky-300 transition-colors">
          {project.title}
        </h3>
        
        {/* Tagline */}
        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 mb-3">
          {project.tagline}
        </p>

        {/* Achievement Banner if explicitly present */}
        {project.achievement && (
          <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-800 dark:text-amber-300 text-xs font-mono mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
            <span className="font-semibold">{project.achievement}</span>
          </div>
        )}

        {/* Performance Metric if explicitly verified */}
        {project.metrics && (
          <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-800 dark:text-emerald-300 text-xs font-mono mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span>{project.metrics}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Problem Solved Block */}
        {project.problemSolved && (
          <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-[#07090e] border border-slate-200/80 dark:border-white/[0.06] mb-5">
            <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Key Focus & Problem Solved:</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-normal">
              {project.problemSolved}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Stack Badges & Action Buttons */}
      <div>
        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="badge-interactive text-[11px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/90 hover:border-sky-500/40 hover:text-sky-700 dark:bg-[#11141f] dark:text-slate-300 dark:border-white/[0.06] dark:hover:border-sky-500/30 dark:hover:text-sky-300 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Controls: Live Demo / GitHub (Only displayed when provided or marked) */}
        {(project.liveUrl || project.githubUrl) ? (
          <div className="flex items-center gap-2 pt-3 border-t border-slate-200/80 dark:border-white/[0.06]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 hover:text-sky-800 text-xs font-semibold border border-sky-300/80 hover:border-sky-400 dark:bg-sky-500/10 dark:hover:bg-sky-500/20 dark:text-sky-300 dark:hover:text-sky-200 dark:border-sky-500/30 dark:hover:border-sky-400/50 transition-all active:scale-[0.98] shadow-sm"
                aria-label={`${project.title} Live Demo`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-slate-900 text-xs font-semibold border border-slate-200/90 hover:border-slate-300 dark:bg-[#11141f] dark:hover:bg-[#181c2a] dark:text-slate-300 dark:hover:text-white dark:border-white/[0.08] dark:hover:border-white/20 transition-all active:scale-[0.98] shadow-sm"
                aria-label={`${project.title} GitHub`}
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
          </div>
        ) : (
          <div className="pt-3 border-t border-slate-200/80 dark:border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Project Architecture</span>
            <span className="text-slate-600 dark:text-slate-400">Deployed / Evaluated</span>
          </div>
        )}
      </div>

    </div>
  );
};
