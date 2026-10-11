import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Hackathons', href: '#achievements' },
    { label: 'Quantum + AI', href: '#quantum-ai' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      const heroEl = document.getElementById('hero');
      if (heroEl) {
        const heroBottom = heroEl.offsetTop + heroEl.offsetHeight - 64;
        setIsOverHero(scrollY < heroBottom);
      } else {
        setIsOverHero(scrollY < 600);
      }

      const sections = ['hero', 'about', 'projects', 'skills', 'achievements', 'quantum-ai', 'contact'];
      const scrollPosition = scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isOverHero
          ? isScrolled
            ? 'bg-[#07090e]/90 backdrop-blur-md border-b border-white/[0.08] shadow-sm shadow-black/40'
            : 'bg-transparent border-b border-transparent'
          : 'bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-sm shadow-slate-900/5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Monogram & Name */}
        <a
          href="#hero"
          className="group flex items-center gap-3 font-semibold text-sm tracking-tight transition-opacity hover:opacity-90"
          aria-label="Shanmukheswar Medicharla Home"
        >
          <div className={`w-7 h-7 rounded-md border flex items-center justify-center font-mono font-bold text-xs transition-colors ${
            isOverHero
              ? 'bg-[#0e111a] border-white/[0.12] text-sky-400 group-hover:border-sky-500/50'
              : 'bg-slate-100 border-slate-200 text-sky-600 group-hover:border-sky-500/50'
          }`}>
            SM
          </div>
          <span className={`font-display tracking-tight font-medium text-sm flex items-center gap-1.5 transition-colors ${
            isOverHero ? 'text-white' : 'text-slate-900'
          }`}>
            Shanmukheswar M.
            <span className={`hidden md:inline-block font-mono text-[11px] font-normal ${
              isOverHero ? 'text-slate-400' : 'text-slate-500'
            }`}>
              / AI Eng
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          aria-label="Main Navigation" 
          className={`hidden md:flex items-center gap-1 px-2 py-1 rounded-full border backdrop-blur-md transition-colors ${
            isOverHero
              ? 'bg-[#0b0e15]/70 border-white/[0.07]'
              : 'bg-slate-100/90 border-slate-200/80'
          }`}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-150 ${
                  isOverHero
                    ? isActive
                      ? 'text-white bg-white/[0.1] shadow-inner font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
                    : isActive
                      ? 'text-slate-900 bg-white shadow-sm font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Socials & Resume CTA */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-1.5 rounded-md border transition-colors ${
              isOverHero
                ? 'text-slate-400 hover:text-white hover:bg-white/[0.05] border-transparent hover:border-white/[0.08]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-transparent hover:border-slate-200'
            }`}
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-1.5 rounded-md border transition-colors ${
              isOverHero
                ? 'text-slate-400 hover:text-white hover:bg-white/[0.05] border-transparent hover:border-white/[0.08]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-transparent hover:border-slate-200'
            }`}
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <div className={`h-4 w-[1px] mx-1 ${isOverHero ? 'bg-white/[0.1]' : 'bg-slate-300'}`} aria-hidden="true" />

          <button
            onClick={onOpenResume}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md border transition-all active:scale-98 ${
              isOverHero
                ? 'bg-[#0e111a] text-slate-200 border-white/[0.12] hover:border-white/25 hover:text-white'
                : 'bg-white text-slate-800 border-slate-300 hover:border-sky-500/50 hover:text-sky-600 shadow-sm'
            }`}
            id="nav-resume-button"
            aria-label="View Curriculum Vitae"
          >
            <FileText className={`w-3.5 h-3.5 ${isOverHero ? 'text-sky-400' : 'text-sky-600'}`} />
            <span>CV</span>
          </button>
        </div>

        {/* Mobile Toggle Buttons */}
        <div className="flex sm:hidden items-center gap-1.5">
          <button
            onClick={onOpenResume}
            className={`px-2.5 py-1 text-xs font-medium rounded border ${
              isOverHero
                ? 'bg-[#0e111a] text-slate-300 border-white/[0.1]'
                : 'bg-white text-slate-800 border-slate-300'
            }`}
            aria-label="View Curriculum Vitae"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-1.5 rounded-md border ${
              isOverHero
                ? 'text-slate-300 hover:text-white bg-[#0e111a] border-white/[0.08]'
                : 'text-slate-600 hover:text-slate-900 bg-slate-100 border-slate-200'
            }`}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className={`md:hidden backdrop-blur-2xl border-b px-5 py-5 space-y-3 ${
            isOverHero
              ? 'bg-[#07090e]/98 border-white/[0.09] text-white shadow-black/50'
              : 'bg-white/95 border-slate-200/90 text-slate-900 shadow-lg'
          }`}
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                  activeSection === link.href.replace('#', '')
                    ? isOverHero
                      ? 'bg-white/[0.08] text-white font-semibold'
                      : 'bg-slate-100 text-slate-900 font-semibold'
                    : isOverHero
                      ? 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className={`pt-4 border-t flex items-center justify-between ${
            isOverHero ? 'border-white/[0.08]' : 'border-slate-200'
          }`}>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-md border ${
                  isOverHero
                    ? 'bg-[#0e111a] border-white/[0.08] text-slate-300'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-md border ${
                  isOverHero
                    ? 'bg-[#0e111a] border-white/[0.08] text-slate-300'
                    : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className={`px-4 py-2 text-xs font-semibold rounded-md shadow-sm ${
                isOverHero
                  ? 'bg-white text-slate-950'
                  : 'bg-slate-900 text-white'
              }`}
            >
              View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
