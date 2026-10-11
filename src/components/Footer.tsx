import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-200/80 bg-slate-100/70 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Monogram & Meta */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-white border border-slate-200/90 flex items-center justify-center font-mono text-sky-600 font-bold text-xs shadow-xs">
              SM
            </div>
            <div>
              <div className="font-ranade font-bold text-slate-900 text-sm">
                {personalInfo.name}
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Artificial Intelligence & System Builds
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top & Copyright */}
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-slate-500">
              © {new Date().getFullYear()} Shanmukheswar M.
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white border border-slate-200/90 hover:border-slate-300 text-slate-600 hover:text-slate-900 transition-all shadow-xs"
              aria-label="Back to Top"
              id="footer-back-to-top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
