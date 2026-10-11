import React from 'react';
import { X, Printer } from 'lucide-react';
import { personalInfo, projectsData, achievementsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c0e15] border border-white/[0.12] rounded-xl shadow-2xl flex flex-col overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
      >
        {/* Modal Action Header */}
        <div className="px-6 py-3.5 bg-[#07090e] border-b border-white/[0.08] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400" />
            <h3 id="resume-title" className="text-xs font-bold text-white font-display">
              Curriculum Vitae — {personalInfo.name}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#11141f] hover:bg-[#181c2a] text-xs font-mono text-slate-300 hover:text-white border border-white/[0.08] transition-colors"
              aria-label="Print or export Curriculum Vitae to PDF"
            >
              <Printer className="w-3.5 h-3.5 text-sky-400" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-slate-400 hover:text-white bg-[#11141f] hover:bg-[#181c2a] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-7 bg-[#0c0e15] font-sans text-slate-200">
          
          {/* Header */}
          <div className="border-b border-white/[0.08] pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-white font-display">
                  {personalInfo.name}
                </h2>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  ({personalInfo.fullName})
                </p>
                <p className="text-sky-400 font-mono text-xs mt-1">
                  2nd-Year B.Tech Student in Computer Science & Engineering (Artificial Intelligence) · CGPA: 9.24/10
                </p>
                <p className="text-xs text-slate-400 mt-1 max-w-lg">
                  {personalInfo.subheadline}
                </p>
              </div>

              <div className="text-xs font-mono text-slate-400 space-y-0.5 sm:text-right shrink-0">
                <div>Email: {personalInfo.socials.email}</div>
                <div>GitHub: github.com/25a31a4353</div>
                <div>LinkedIn: linkedin.com/in/shanmukheswar-medicharla-a98a6137a</div>
                <div>HackerRank: hackerrank.com/profile/25a31a4353</div>
                <div>Location: {personalInfo.socials.location}</div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2 border-b border-white/[0.06] pb-1">
              Education
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">B.Tech in Computer Science and Engineering (Artificial Intelligence)</div>
                  <div className="text-slate-400 text-xs">Score: 9.24 CGPA</div>
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 sm:mt-0">2025 – Present</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1">
                <div>
                  <div className="font-bold text-white">Intermediate Education</div>
                  <div className="text-slate-400 text-xs">Score: 976 / 1000</div>
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 sm:mt-0">2023 – 2025</div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-1">
                <div>
                  <div className="font-bold text-white">Secondary School Certificate (SSC)</div>
                  <div className="text-slate-400 text-xs">Score: 587 / 600</div>
                </div>
                <div className="text-xs font-mono text-slate-400 mt-1 sm:mt-0">2022 – 2023</div>
              </div>
            </div>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2 border-b border-white/[0.06] pb-1">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-bold text-slate-300 font-mono">Languages:</span>{' '}
                <span className="text-slate-400">Python, Java, C++, C, JavaScript</span>
              </div>
              <div>
                <span className="font-bold text-slate-300 font-mono">AI / ML:</span>{' '}
                <span className="text-slate-400">Artificial Intelligence, Machine Learning, NLU, Predictive Intelligence, Scikit-learn</span>
              </div>
              <div>
                <span className="font-bold text-slate-300 font-mono">Frameworks & Cloud:</span>{' '}
                <span className="text-slate-400">FastAPI, Flask, Docker, Google Cloud Run, GitHub</span>
              </div>
              <div>
                <span className="font-bold text-slate-300 font-mono">Quantum Computing:</span>{' '}
                <span className="text-slate-400">Qiskit, Hadamard & CNOT Gates, Entanglement, Quantum Key Generation</span>
              </div>
              <div>
                <span className="font-bold text-slate-300 font-mono">Problem Solving:</span>{' '}
                <span className="text-slate-400">HackerRank 5-Star in Python, C, C++, and Java; DSA; LeetCode</span>
              </div>
              <div>
                <span className="font-bold text-slate-300 font-mono">ServiceNow:</span>{' '}
                <span className="text-slate-400">17 Skills & 23 Badges (ServiceNow AI Platform, App Engine Studio, NLU Workbench)</span>
              </div>
            </div>
          </div>

          {/* Featured Systems */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-3 border-b border-white/[0.06] pb-1">
              Featured Projects & Sprints
            </h2>
            <div className="space-y-4">
              {projectsData.slice(0, 4).map((p) => (
                <div key={p.id} className="text-xs space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white">{p.title}</span>
                    <span className="font-mono text-sky-400 text-[11px]">{p.technologies.slice(0, 4).join(', ')}</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    Role: {p.role}{p.event ? ` · ${p.event}` : ''}
                  </div>
                  <p className="text-slate-300 leading-normal">{p.description}</p>
                  {p.metrics && (
                    <p className="text-emerald-400 font-mono text-[11px]">→ Result: {p.metrics}</p>
                  )}
                  {p.achievement && (
                    <p className="text-amber-400 font-mono text-[11px]">→ Achievement: {p.achievement}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Hackathons & Leadership */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-3 border-b border-white/[0.06] pb-1">
              Honors, Leadership & Extracurriculars
            </h2>
            <div className="space-y-3">
              {achievementsData.map((a) => (
                <div key={a.id} className="text-xs space-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between font-medium">
                    <span className="text-white font-bold">{a.title} — <span className="text-slate-400">{a.organization}</span></span>
                    <span className="text-slate-500 font-mono">{a.date}</span>
                  </div>
                  <p className="text-slate-300">{a.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-[#07090e] border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400 shrink-0">
          <div className="font-mono text-[11px]">
            Seeking AI/ML and Software Engineering Internships & Sprints
          </div>
          <button
            onClick={onClose}
            className="px-3.5 py-1 rounded bg-white text-slate-950 font-semibold text-xs hover:bg-slate-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
