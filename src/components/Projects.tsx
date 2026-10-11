import React, { useState } from 'react';
import { ExternalLink, CheckCircle2, Award, User, Calendar } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types';
import { SectionTransition } from './motion/SectionTransition';
import { ThreeDCard } from './motion/ThreeDCard';
import { MotionCard } from './motion/MotionCard';
import { ParallaxLayer } from './motion/ParallaxLayer';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(projectsData.map((p) => p.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <SectionTransition type="depth-tunnel" perspective="1200px" id="projects">
      <section className="py-20 sm:py-28 relative border-t border-slate-200/80 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Ranade Font & Minimal Copy */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="max-w-2xl">
              <div className="eyebrow-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse" />
                <span>02 · VERIFIED PROJECTS</span>
              </div>
              <h2 className="font-ranade text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Real-World AI & Cloud <span className="text-sky-700">Builds.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Competitive hackathon finalist systems and research prototypes with verified roles.
              </p>
            </div>

            {/* Dynamic Category Filter Controls */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none bg-white p-1.5 rounded-xl border border-slate-200/90 shadow-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-150 active:scale-[0.98] ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic Projects Grid with Staggered 3D Depth Entrance */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <MotionCard key={project.id} delay={idx * 60} depth="medium">
                <ProjectCard project={project} />
              </MotionCard>
            ))}
          </div>

        </div>
      </section>
    </SectionTransition>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <ThreeDCard maxTilt={5.5} depthZ={16} className="h-full rounded-2xl">
      <div className="group relative flex flex-col justify-between h-full rounded-2xl bg-white border border-slate-200/90 hover:border-sky-400/60 p-6 transition-colors shadow-xs">
        
        {/* Top Header & Content */}
        <div>
          {/* Category & Role Badges at elevated Z-depth */}
          <ParallaxLayer depthZ={20} className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200/80 font-medium">
              {project.category}
            </span>
            <div className="flex items-center gap-1 text-[11px] font-mono text-slate-600 bg-slate-50 px-2 py-0.5 rounded-md border border-slate-200/80">
              <User className="w-3 h-3 text-sky-600" />
              <span>{project.role}</span>
            </div>
          </ParallaxLayer>

          {/* Event or Period */}
          {(project.event || project.period) && (
            <div className="text-[11px] font-mono text-slate-500 mb-2 flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-slate-400" />
              <span>{project.event ? `${project.event}` : ''}{project.period ? ` · ${project.period}` : ''}</span>
            </div>
          )}

          {/* Project Title with Ranade Font */}
          <ParallaxLayer depthZ={12}>
            <h3 className="font-ranade text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
              {project.title}
            </h3>
          </ParallaxLayer>
          
          {/* Tagline */}
          <p className="text-xs font-mono text-slate-500 mt-1 mb-3">
            {project.tagline}
          </p>

          {/* Achievement Banner at elevated Z-depth */}
          {project.achievement && (
            <ParallaxLayer depthZ={22} className="mb-3">
              <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="font-semibold">{project.achievement}</span>
              </div>
            </ParallaxLayer>
          )}

          {/* Performance Metric at elevated Z-depth */}
          {project.metrics && (
            <ParallaxLayer depthZ={22} className="mb-3">
              <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{project.metrics}</span>
              </div>
            </ParallaxLayer>
          )}

          {/* Description - Minimal & High Signal */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Bottom Stack Badges & Action Buttons */}
        <div>
          {/* Technologies Badges with floating parallax */}
          <ParallaxLayer depthZ={24} className="flex flex-wrap gap-1.5 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200/90 font-medium cursor-default hover:border-sky-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </ParallaxLayer>

          {/* Action Controls */}
          {(project.liveUrl || project.githubUrl) ? (
            <ParallaxLayer depthZ={18} className="flex items-center gap-2 pt-3 border-t border-slate-100">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold border border-sky-200 transition-colors active:scale-[0.98]"
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
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-200 transition-colors active:scale-[0.98]"
                  aria-label={`${project.title} GitHub`}
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              )}
            </ParallaxLayer>
          ) : (
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Architecture</span>
              <span className="text-slate-600 font-medium">Deployed & Verified</span>
            </div>
          )}
        </div>

      </div>
    </ThreeDCard>
  );
};
