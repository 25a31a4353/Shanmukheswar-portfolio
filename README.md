# Shanmukheswar Medicharla — Personal AI Portfolio Website

A personal portfolio built for **Shanmukheswar Medicharla**, a CSE student specializing in Artificial Intelligence, Generative AI, AI Agents, and Quantum Computing.

Designed with a **dark-first**, minimalist aesthetic featuring:
- 🌌 **Interactive Quantum & Neural Visualizer (Canvas 2D)** with dynamic orbital particles and telemetry readouts.
- ⚛️ **Quantum + AI Section** with an interactive **2-Qubit State Simulator** (H, Z, X, CNOT gates with wavefunction collapse measurement).
- 🧩 **Featured Projects** with problem-solved breakdowns, live demos, and category filters (AI & Agents, Quantum ML, Vision, Hackathons).
- 🛠️ **Technical Arsenal** with clean technology badges, real-time search, and category selectors (no percentage bars).
- 🏆 **Hackathons & Achievements Timeline** highlighting team captaincy and podium rankings.
- 👥 **Leadership & Sprint Impact** detailing high-velocity hackathon MVP execution and mentoring.
- 📡 **Live Build Log / Current Focus** displaying active research experiments and velocity meters.
- 📬 **Interactive Contact Form & Copy-to-Clipboard Email**.
- 📄 **Recruiter Resume Modal** with printable CV format.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite + TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **Typography**: Space Grotesk, Inter, JetBrains Mono
- **Icons**: Lucide React + Custom SVG Brand Badges
- **Graphics**: HTML5 Canvas with custom particle & orbital physics

---

## 📁 Project Structure

```text
shanmukheswar-portfolio/
├── public/
│   └── favicon.svg           # Custom Quantum-AI node logo
├── src/
│   ├── components/
│   │   ├── About.tsx         # Concise intro, specs, 4 architectural pillars
│   │   ├── Achievements.tsx  # Hackathon podiums & certifications
│   │   ├── Contact.tsx       # Message form, email copy, availability badge
│   │   ├── CurrentFocus.tsx  # Active build log & velocity tracking
│   │   ├── Experience.tsx    # Team captaincy & sprint architecture
│   │   ├── Footer.tsx        # Minimal footer & smooth back-to-top
│   │   ├── Hero.tsx          # Headline, subheadline, CTAs, connect links
│   │   ├── HeroQuantumVisual.tsx # Interactive canvas quantum simulation
│   │   ├── Icons.tsx         # Custom vector brand icons
│   │   ├── Navbar.tsx        # Sticky responsive navigation & drawer
│   │   ├── Projects.tsx      # Filterable cards with problem solved
│   │   ├── QuantumAI.tsx     # Quantum-AI thesis & interactive simulator
│   │   ├── ResumeModal.tsx   # Recruiter CV preview & print modal
│   │   └── Skills.tsx        # Categorized badge grid with search filter
│   ├── data/
│   │   └── portfolioData.ts  # Modular data file (edit all content here!)
│   ├── types/
│   │   └── index.ts          # TypeScript interfaces
│   ├── utils/
│   │   └── cn.ts             # Tailwind class merging helper
│   ├── App.tsx               # Main layout & reading progress bar
│   ├── index.css             # Glassmorphic utilities, glow, tech grid
│   └── main.tsx              # Application entry point
├── index.html                # SEO meta tags & font imports
├── tailwind.config.js        # Custom cyber & dark color palette
├── tsconfig.json             # TypeScript configuration
└── vite.config.ts            # Vite bundler configuration
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
```
The optimized bundle will be generated in `dist/`.

---

## ✏️ How to Customize Your Data

All text, project details, skills, achievements, and social links are centralized in:
👉 [`src/data/portfolioData.ts`](file:///c:/Users/SHANMUKHESWAR/OneDrive/Desktop/shanmukheswar-portfolio/src/data/portfolioData.ts)

Simply edit this file to update your projects, contact links, resume stats, or new hackathon victories!
