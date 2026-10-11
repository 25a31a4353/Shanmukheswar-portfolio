import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#07090e] py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Monogram & Meta */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-md bg-[#0e111a] border border-white/[0.1] flex items-center justify-center font-mono text-sky-400 font-bold text-xs">
              SM
            </div>
            <div>
              <div className="font-display font-bold text-white text-sm">
                {personalInfo.name}
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Artificial Intelligence & Quantum Computing
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.socials.email}`}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.04] transition-colors"
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
              className="p-2 rounded-md bg-[#0c0e15] border border-white/[0.08] hover:border-white/20 text-slate-400 hover:text-white transition-all"
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
