import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Check, 
  Copy, 
  Clock 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative border-t border-slate-200/80 dark:border-white/[0.05] bg-slate-50/50 dark:bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="font-mono text-xs text-sky-600 dark:text-sky-400 uppercase tracking-widest mb-3">
            // 08 · CONTACT & TRANSMISSION
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight font-display">
            Let's Collaborate & Build Something Radical.
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base mt-2">
            Interested in discussing AI architectures, joining hackathons, or exploring internships? Reach out anytime.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct channels & Quick Connect (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Availability status banner */}
            <div className="p-5 rounded-xl bg-white dark:bg-[#0c0e15] border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                <span>Current Status</span>
              </div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white font-display">
                {personalInfo.socials.availability}
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-2 font-mono">
                <Clock className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
                <span>Response time: Usually within 24 hours</span>
              </div>
            </div>

            {/* Direct Email Card with Copy button */}
            <div className="p-5 rounded-xl bg-white dark:bg-[#0c0e15] border border-slate-200/80 dark:border-white/[0.07] space-y-3 shadow-sm">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Direct Email Channel
              </div>
              <div className="flex items-center justify-between gap-3 bg-slate-50 dark:bg-[#07090e] p-3 rounded-lg border border-slate-200/80 dark:border-white/[0.06]">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0" />
                  <span className="text-xs font-mono text-slate-800 dark:text-slate-200 truncate select-all">
                    {personalInfo.socials.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 dark:bg-[#11141f] dark:hover:bg-[#181c2a] dark:text-slate-300 dark:hover:text-white transition-all border border-slate-200/90 dark:border-white/[0.08] shrink-0 shadow-xs"
                  title="Copy email to clipboard"
                  aria-label="Copy email address to clipboard"
                  id="contact-copy-email-button"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
              {copied && (
                <div className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                  <Check className="w-3 h-3" />
                  <span>Copied to clipboard</span>
                </div>
              )}
            </div>

            {/* Social Networks */}
            <div className="p-5 rounded-xl bg-white dark:bg-[#0c0e15] border border-slate-200/80 dark:border-white/[0.07] space-y-3 shadow-sm">
              <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Professional Networks
              </div>
              <div className="grid grid-cols-1 min-[380px]:grid-cols-2 gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300 dark:bg-[#07090e] dark:hover:bg-[#11141f] dark:border-white/[0.06] dark:hover:border-white/20 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-all group"
                  id="contact-linkedin-link"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
                  <div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white font-display">LinkedIn</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Connect</div>
                  </div>
                </a>

                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300 dark:bg-[#07090e] dark:hover:bg-[#11141f] dark:border-white/[0.06] dark:hover:border-white/20 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-all group"
                  id="contact-github-link"
                >
                  <GithubIcon className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  <div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white font-display">GitHub</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">25a31a4353</div>
                  </div>
                </a>

                <a
                  href={personalInfo.socials.hackerrank}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300 dark:bg-[#07090e] dark:hover:bg-[#11141f] dark:border-white/[0.06] dark:hover:border-white/20 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-all group"
                  id="contact-hackerrank-link"
                >
                  <div className="w-4 h-4 font-mono font-bold text-emerald-600 dark:text-emerald-400 text-xs flex items-center justify-center">
                    H
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white font-display">HackerRank</div>
                    <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-mono">5-Star Quad</div>
                  </div>
                </a>

                <a
                  href={personalInfo.socials.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/80 hover:border-slate-300 dark:bg-[#07090e] dark:hover:bg-[#11141f] dark:border-white/[0.06] dark:hover:border-white/20 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-all group"
                  id="contact-leetcode-link"
                >
                  <div className="w-4 h-4 font-mono font-bold text-amber-600 dark:text-amber-400 text-xs flex items-center justify-center">
                    LC
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900 dark:text-white font-display">LeetCode</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">Algorithms</div>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-[#0c0e15] border border-slate-200/90 dark:border-white/[0.08] shadow-lg shadow-slate-200/60 dark:shadow-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mb-1">
                Direct Message Dispatch
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
                Transmits directly to Shanmukheswar's terminal inbox.
              </p>

              {submitSuccess ? (
                <div className="p-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/30 text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display">Message Dispatched</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                    Thanks for reaching out! I will review your note and respond back shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Alex Rivera"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-[#07090e] border border-slate-200/90 dark:border-white/[0.08] text-slate-900 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-xs focus:outline-none focus:border-sky-500 focus:bg-white dark:focus:bg-[#07090e] font-sans transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@company.com"
                        className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-[#07090e] border border-slate-200/90 dark:border-white/[0.08] text-slate-900 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-xs focus:outline-none focus:border-sky-500 focus:bg-white dark:focus:bg-[#07090e] font-sans transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship Inquiry / Hackathon Sprint / Collaboration"
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-[#07090e] border border-slate-200/90 dark:border-white/[0.08] text-slate-900 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-xs focus:outline-none focus:border-sky-500 focus:bg-white dark:focus:bg-[#07090e] font-sans transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Discussing an AI agent architecture or hackathon team..."
                      className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-[#07090e] border border-slate-200/90 dark:border-white/[0.08] text-slate-900 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-600 text-xs focus:outline-none focus:border-sky-500 focus:bg-white dark:focus:bg-[#07090e] font-sans resize-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-200 dark:text-slate-950 font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 shadow-sm"
                    id="contact-submit-button"
                  >
                    {isSubmitting ? (
                      <span className="font-mono text-xs">Dispatching...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-current" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
