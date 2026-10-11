import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sun, Moon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
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
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'achievements', 'quantum-ai', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/85 dark:bg-[#07090e]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm shadow-slate-900/5 dark:shadow-black/40'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Monogram & Name */}
        <a
          href="#hero"
          className="group flex items-center gap-3 text-slate-900 dark:text-slate-100 font-semibold text-sm tracking-tight transition-opacity hover:opacity-90"
          aria-label="Shanmukheswar Medicharla Home"
        >
          <div className="w-7 h-7 rounded-md bg-slate-100 dark:bg-[#0e111a] border border-slate-200 dark:border-white/[0.12] flex items-center justify-center font-mono text-sky-600 dark:text-sky-400 font-bold text-xs group-hover:border-sky-500/50 transition-colors">
            SM
          </div>
          <span className="font-display tracking-tight text-slate-900 dark:text-white font-medium text-sm flex items-center gap-1.5">
            Shanmukheswar M.
            <span className="hidden md:inline-block font-mono text-[11px] text-slate-500 font-normal">
              / AI Eng
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav 
          aria-label="Main Navigation" 
          className="hidden md:flex items-center gap-1 bg-slate-100/90 dark:bg-[#0b0e15]/70 px-2 py-1 rounded-full border border-slate-200/80 dark:border-white/[0.07] backdrop-blur-md"
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
                  isActive
                    ? 'text-slate-900 dark:text-white bg-white dark:bg-white/[0.09] shadow-sm dark:shadow-inner font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-white/60 dark:hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls: Theme Switcher, Socials & Resume CTA */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100/80 dark:bg-[#0e111a] hover:bg-slate-200/80 dark:hover:bg-white/[0.06] border border-slate-200/80 dark:border-white/[0.08] transition-colors"
            aria-label={theme === 'dark' ? "Switch to light theme" : "Switch to dark theme"}
            title={theme === 'dark' ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 transition-transform hover:-rotate-12" />
            )}
          </button>

          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05] border border-transparent hover:border-slate-200 dark:hover:border-white/[0.08] transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.05] border border-transparent hover:border-slate-200 dark:hover:border-white/[0.08] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <div className="h-4 w-[1px] bg-slate-300 dark:bg-white/[0.1] mx-1" aria-hidden="true" />

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md bg-white dark:bg-[#0e111a] text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-white/[0.12] hover:border-sky-500/50 hover:text-sky-600 dark:hover:text-white transition-all active:scale-98 shadow-sm dark:shadow-none"
            id="nav-resume-button"
            aria-label="View Curriculum Vitae"
          >
            <FileText className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>CV</span>
          </button>
        </div>

        {/* Mobile Toggle Buttons (Theme + Menu) */}
        <div className="flex sm:hidden items-center gap-1.5">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-[#0e111a] border border-slate-200 dark:border-white/[0.08]"
            aria-label={theme === 'dark' ? "Switch to light theme" : "Switch to dark theme"}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1 text-xs font-medium rounded bg-white dark:bg-[#0e111a] text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-white/[0.1]"
            aria-label="View Curriculum Vitae"
          >
            CV
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-md text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-[#0e111a] border border-slate-200 dark:border-white/[0.08]"
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
          className="md:hidden bg-white/95 dark:bg-[#07090e]/98 backdrop-blur-2xl border-b border-slate-200/90 dark:border-white/[0.09] px-5 py-5 space-y-3 shadow-lg dark:shadow-none"
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
                    ? 'bg-slate-100 dark:bg-white/[0.08] text-slate-900 dark:text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-white/[0.04]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-slate-100 dark:bg-[#0e111a] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-slate-100 dark:bg-[#0e111a] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-300"
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
              className="px-4 py-2 text-xs font-semibold rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-sm"
            >
              View Resume
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
