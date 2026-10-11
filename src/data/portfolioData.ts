import { Project, SkillCategory, Achievement, ExperienceItem, CurrentlyBuildingItem } from '../types';

export const personalInfo = {
  name: "Shanmukheswar Medicharla",
  fullName: "Medicharla Shanmukheswara N N S Gupta",
  shortName: "Shanmukheswar",
  headline: "AI Engineer in the Making. Builder by Curiosity.",
  subheadline: "Second-year B.Tech student in Computer Science & Engineering (Artificial Intelligence) exploring AI/ML, cloud computing, quantum computing, and software development — learning by building and solving real-world problems.",
  about: {
    lead: "Second-year B.Tech student in Computer Science and Engineering (Artificial Intelligence) with a 9.24 CGPA and hands-on experience leading teams to build real-world AI, cloud, and quantum computing applications.",
    bio: [
      "I focus on designing and deploying functional technology solutions using Python, FastAPI, Qiskit, Docker, and Google Cloud. Rather than studying algorithms solely in theory, I have led multidisciplinary project squads in competitive environments including the Google Solution Challenge and IBM SkillsBuild Hackathons.",
      "As a team leader and Class Representative, I enjoy coordinating technical execution end-to-end: scoping complex problem statements, developing clean backend and ML architectures, coordinating deployment pipelines, and presenting prototypes to technical evaluators."
    ],
    stats: [
      { label: "Academic CGPA", value: "9.24 / 10" },
      { label: "Current Status", value: "2nd Year B.Tech" },
      { label: "Degree & Major", value: "CSE (Artificial Intelligence)" },
      { label: "Location", value: "Andhra Pradesh, India" }
    ],
    pillars: [
      {
        title: "AI Crisis & Predictive Systems",
        description: "Building explainable AI and crisis response platforms utilizing Gemini API, predictive simulation, and containerized cloud deployment."
      },
      {
        title: "Quantum Computing Prototypes",
        description: "Implementing quantum circuits, entanglement simulations, and quantum-secured communication protocols using Qiskit."
      },
      {
        title: "Disaster & Spatial Intelligence",
        description: "Synthesizing hazard data, population metrics, and weather information into actionable interactive geographic risk visualizers."
      },
      {
        title: "Engineering Team Leadership",
        description: "Directing 3 to 4-member teams in hackathons from conceptualization to functional MVP deployment and final defense."
      }
    ]
  },
  education: [
    {
      qualification: "B.Tech in Computer Science and Engineering (Artificial Intelligence)",
      institution: "Undergraduate",
      score: "9.24 CGPA",
      period: "2025 – Present"
    },
    {
      qualification: "Intermediate Education",
      institution: "State Board",
      score: "976 / 1000",
      period: "2023 – 2025"
    },
    {
      qualification: "Secondary School Certificate (SSC)",
      institution: "State Board",
      score: "587 / 600",
      period: "2022 – 2023"
    }
  ],
  socials: {
    github: "https://github.com/25a31a4353",
    linkedin: "https://linkedin.com/in/shanmukheswar-medicharla-a98a6137a",
    leetcode: "https://leetcode.com/u/25a31a4353/",
    hackerrank: "https://hackerrank.com/profile/25a31a4353",
    email: "shanmukheswar.medicharla@gmail.com",
    location: "Kakinada, Andhra Pradesh, India",
    availability: "Open to AI/ML & Software Engineering Internships and Technical Collaborations"
  }
};

export const projectsData: Project[] = [
  {
    id: "crisis-ai",
    title: "CrisisAI — AI Crisis Orchestration System",
    tagline: "Real-time AI hospital fire-evacuation optimization with predictive simulation",
    category: "AI & Cloud",
    role: "Team Leader (Led 4-member team)",
    event: "Google Solution Challenge 2026",
    period: "March – June 2026",
    description: "Led a 4-member team to develop a real-time, AI-based hospital fire-evacuation system using predictive simulation and the Google Gemini API. Deployed the application to Google Cloud Run using FastAPI and Docker.",
    problemSolved: "Hospital fire emergencies require dynamic, explainable evacuation routes that account for patient mobility, obstacle propagation, and changing hazard vectors.",
    metrics: "32% higher rescue rate than baseline models",
    technologies: ["Python", "FastAPI", "Google Gemini API", "Docker", "Google Cloud Run"],
    featured: true
  },
  {
    id: "akashvani-disaster",
    title: "Akashvani — Disaster Intelligence Platform",
    tagline: "AI-powered disaster risk intelligence with interactive India map visualization",
    category: "Disaster Intelligence",
    role: "Core Developer",
    description: "An AI-powered disaster intelligence platform focused on analyzing hazards, geographic information, population density, weather-related information, and disaster risk with an interactive India map.",
    problemSolved: "Integrates disparate environmental, meteorological, and demographic datasets into a centralized visualization platform to identify regional vulnerability hotspots and support proactive disaster mitigation.",
    technologies: ["Python", "Disaster Intelligence", "Geographic Visualization", "Hazard Analysis", "Weather Data", "Interactive India Map"],
    featured: true
  },
  {
    id: "quantum-secure-chat",
    title: "Quantum Secure Chat System",
    tagline: "Quantum-secured communication platform with Qiskit-based key generation",
    category: "Quantum & Security",
    role: "Individual Project",
    event: "World Quantum Day No-Code Hackathon 2026",
    period: "April 2026",
    description: "Developed a quantum-secure communication system using Qiskit-based quantum key generation and XOR encryption, paired with AI-powered classification of messages as safe, spam, or sensitive. Implemented attack simulation and an interactive visualization panel.",
    problemSolved: "Explores quantum cryptography principles to protect communication against future computational decryption while using machine learning for real-time content safety assessment.",
    technologies: ["Python", "Qiskit", "Flask", "Scikit-learn", "HTML", "CSS", "JavaScript"],
    featured: true
  },
  {
    id: "quantum-entanglement-simulator",
    title: "Quantum Entanglement Simulator",
    tagline: "Interactive 2-qubit entanglement simulation using quantum logic gates",
    category: "Quantum Computing",
    role: "Developer",
    description: "An interactive simulator demonstrating quantum entanglement between two qubits. Implements Hadamard and CNOT gates to generate Bell states and visualize measurement correlations across basis states.",
    problemSolved: "Provides a practical, accessible interface to explore fundamental quantum superposition, gate transformations, and non-local measurement collapse.",
    technologies: ["Python", "Qiskit", "Quantum Computing", "Hadamard Gate", "CNOT Gate"],
    featured: false
  },
  {
    id: "chemclash",
    title: "ChemClash — Gamified Organic Chemistry Learning Platform",
    tagline: "Interactive chemistry learning platform with mechanism challenges and ELO leaderboards",
    category: "EdTech & Web",
    role: "Team Leader (Led 3-member team)",
    event: "IBM Project | IBM SkillsBuild Regional Hackathon Finale",
    period: "August – September 2026",
    achievement: "7th Place — IBM SkillsBuild Regional Hackathon Finale",
    description: "Led a 3-member team to develop an interactive chemistry learning platform featuring gamified reaction challenges, mechanism building, adaptive JEE PYQ practice, curriculum-based learning, reagent exploration, and competitive ELO-based leaderboards. Developed and deployed a functional MVP.",
    problemSolved: "Organic chemistry reaction mechanisms are traditionally memorized without conceptual retention. ChemClash gamifies step-by-step mechanism construction and reagent dynamics.",
    technologies: ["React", "JavaScript", "Gamification", "ELO Leaderboards", "Vercel"],
    liveUrl: "https://chemclash.vercel.app/",
    featured: true
  },
  {
    id: "contextual-emotion-analysis",
    title: "Contextual Emotion Analysis with Confidence Scoring",
    tagline: "NLP system analyzing textual data to detect emotional tone with granular confidence",
    category: "NLP & AI",
    role: "Team Leader (Led 3-member team)",
    event: "College Hackathon",
    period: "January 2026",
    description: "Led a 3-member team to develop a natural language processing system that analyzes textual data to detect emotional tone and context, providing a confidence score for each detected emotion.",
    problemSolved: "Standard sentiment analyzers collapse emotional spectrums into binary positive/negative buckets. This system detects nuanced context and provides probabilistic confidence scoring.",
    technologies: ["Python", "Scikit-learn", "NLP", "Text Analysis"],
    featured: false
  }
];

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    iconName: "Code2",
    description: "Core languages for algorithmic problem solving, software engineering, and systems",
    skills: [
      { name: "Python", level: "Advanced", tag: "Primary / 5-Star HackerRank" },
      { name: "C++", level: "Proficient", tag: "DSA / 5-Star HackerRank" },
      { name: "Java", level: "Proficient", tag: "5-Star HackerRank" },
      { name: "C", level: "Exploring", tag: "Beginner / 5-Star HackerRank" },
      { name: "JavaScript", level: "Proficient", tag: "Web / Frontend" }
    ]
  },
  {
    title: "Problem Solving & DSA",
    iconName: "Brain",
    description: "Data structures, algorithmic analysis, and competitive programming profiles",
    skills: [
      { name: "Data Structures & Algorithms", level: "Advanced" },
      { name: "HackerRank 5-Star (Python, C, C++, Java)", level: "Advanced", tag: "Verified" },
      { name: "LeetCode Problem Solving", level: "Proficient" }
    ]
  },
  {
    title: "AI & Machine Learning",
    iconName: "Sparkles",
    description: "Machine learning, natural language understanding, and predictive intelligence",
    skills: [
      { name: "Artificial Intelligence", level: "Advanced" },
      { name: "Machine Learning", level: "Advanced" },
      { name: "Natural Language Understanding (NLU)", level: "Proficient" },
      { name: "Predictive Intelligence", level: "Proficient" },
      { name: "Scikit-learn", level: "Proficient" }
    ]
  },
  {
    title: "Cloud & Frameworks",
    iconName: "Server",
    description: "Modern asynchronous web frameworks, containerization, and cloud deployment",
    skills: [
      { name: "FastAPI", level: "Advanced", tag: "Backend APIs" },
      { name: "Flask", level: "Proficient", tag: "Microservices" },
      { name: "Docker", level: "Proficient", tag: "Containers" },
      { name: "Google Cloud Run", level: "Proficient", tag: "Deployment" },
      { name: "GitHub", level: "Advanced", tag: "Version Control" }
    ]
  },
  {
    title: "Quantum Computing",
    iconName: "Atom",
    description: "Quantum circuit design, gate manipulation, and quantum communication concepts",
    skills: [
      { name: "Qiskit", level: "Proficient", tag: "Quantum Circuits" },
      { name: "Quantum Computing Principles", level: "Proficient" },
      { name: "Hadamard & CNOT Gates", level: "Proficient", tag: "Entanglement" },
      { name: "Quantum Key Distribution Concepts", level: "Proficient" }
    ]
  },
  {
    title: "ServiceNow Platform Learning",
    iconName: "Wrench",
    description: "ServiceNow University learning achievements covering AI and app studio",
    skills: [
      { name: "ServiceNow AI Platform", level: "Proficient", tag: "23 Badges Earned" },
      { name: "App Engine Studio", level: "Proficient", tag: "17 Skills Earned" },
      { name: "Creator Studio", level: "Proficient" },
      { name: "NLU Workbench", level: "Proficient" },
      { name: "Platform Analytics & Playbooks", level: "Proficient" }
    ]
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "ibm-regional-hackathon",
    title: "7th Place — IBM SkillsBuild Regional Hackathon Finale",
    category: "Hackathon",
    date: "2026",
    organization: "IBM SkillsBuild",
    description: "Presented ChemClash (gamified organic chemistry learning MVP) directly to judges and IBM officials, earning 7th place in the regional hackathon finale.",
    highlight: "7th Place Regional Finalist",
    badge: "IBM Hackathon Finale",
    spotlight: true
  },
  {
    id: "google-solution-challenge",
    title: "Google Solution Challenge 2026 / Build with AI",
    category: "Hackathon",
    date: "March – June 2026",
    organization: "Google Developer Student Clubs",
    description: "Led a 4-member team to develop CrisisAI, a real-time hospital fire-evacuation optimization platform using predictive simulation and the Google Gemini API, deployed to Google Cloud Run.",
    highlight: "32% higher rescue rate than baseline models",
    badge: "Google Solution Challenge",
    spotlight: true
  },
  {
    id: "team-leadership",
    title: "Team Lead — AI & Quantum Computing Hackathon Projects",
    category: "Leadership",
    date: "2025 – Present",
    organization: "Competitive Hackathons & Collegiate Sprints",
    description: "Team Lead in multiple AI and Quantum Computing hackathons, directing architecture, model integration, and cloud deployment across teams of 3 to 4 engineers.",
    highlight: "Led 3–4 Member Engineering Squads",
    badge: "Team Lead",
    spotlight: true
  },
  {
    id: "world-quantum-day",
    title: "World Quantum Day No-Code Hackathon 2026",
    category: "Hackathon",
    date: "April 2026",
    organization: "World Quantum Day",
    description: "Developed Quantum Secure Chat System as an individual project using Qiskit-based quantum key generation and XOR encryption, paired with AI-powered message safety classification.",
    highlight: "Quantum Key Distribution & Attack Simulation",
    badge: "Quantum Hackathon",
    spotlight: true
  },
  {
    id: "hackerrank-ratings",
    title: "HackerRank 5-Star Ratings in Programming",
    category: "Achievement",
    date: "Verified",
    organization: "HackerRank",
    description: "Earned 5-Star ratings across Python, C, C++, and Java through consistent problem solving, algorithmic challenges, and data structure implementations.",
    highlight: "5-Star Badges in Python, C, C++, and Java",
    badge: "5-Star Quad Badges",
    credentialUrl: "https://hackerrank.com/profile/25a31a4353",
    spotlight: true
  },
  {
    id: "quantum-workshop",
    title: "Quantum Computing: Principles, Algorithms & Applications",
    category: "Certification",
    date: "Technical Workshop",
    organization: "Spypro Security Solutions, Hyderabad",
    description: "Completed intensive technical workshop covering quantum mechanics principles, quantum algorithms, circuit architectures, and computational quantum computing applications.",
    highlight: "Quantum Principles & Algorithm Architectures",
    badge: "Quantum Workshop"
  },
  {
    id: "google-bootcamp-nit",
    title: "Google Build with AI Bootcamp, NIT",
    category: "Technical Event",
    date: "Bootcamp",
    organization: "National Institute of Technology (NIT)",
    description: "Explored AI-assisted software development, generative models, and rapid application building using modern developer tools including Google Antigravity.",
    highlight: "AI-Assisted Application Building",
    badge: "NIT Bootcamp"
  },
  {
    id: "azure-workshop",
    title: "Microsoft Azure: Advanced Cloud Architecture & Infrastructure",
    category: "Certification",
    date: "Technical Training",
    organization: "Department of IT & CSE (Cyber Security), Pragati Engineering College",
    description: "Hands-on training on advanced cloud architecture, infrastructure scalability, virtualization, and resilient enterprise cloud engineering.",
    highlight: "Cloud Architecture & Scalable Systems",
    badge: "Cloud Architecture"
  },
  {
    id: "technical-presentations",
    title: "Technical Presentations & Project Exhibitions",
    category: "Technical Event",
    date: "Ongoing",
    organization: "Collegiate Technical Forums & Expos",
    description: "Active participant and presenter in technical presentations, poster showcases, project expos, chatbot challenge demonstrations, and campus technical symposia.",
    highlight: "Project Expos & Live Demonstrations",
    badge: "Presenter"
  },
  {
    id: "servicenow-badges",
    title: "ServiceNow Learning: 17 Skills & 23 Badges",
    category: "Certification",
    date: "Platform Learning",
    organization: "ServiceNow University",
    description: "Completed learning modules covering ServiceNow AI Platform, App Engine Studio, Creator Studio, NLU Workbench, Platform Analytics, and Playbooks.",
    highlight: "17 Skills · 23 Platform Badges",
    badge: "ServiceNow Platform"
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "hackathon-sprint-lead",
    role: "Hackathon Team Leader & Project Architect",
    organization: "Google Solution Challenge, IBM SkillsBuild & Collegiate Sprints",
    period: "2025 – Present",
    type: "Leadership",
    highlights: [
      "Led a 4-member team on CrisisAI for the Google Solution Challenge, architecting a real-time hospital evacuation system with Gemini API and deploying to Google Cloud Run.",
      "Directed a 3-member team to develop ChemClash for the IBM SkillsBuild Regional Hackathon, securing 7th place in the finale with a live deployed MVP.",
      "Coordinated full-cycle hackathon workflows: scoping problems, assigning modular tasks, integrating APIs, containerizing with Docker, and presenting technical defenses to evaluators."
    ],
    technologies: ["Python", "FastAPI", "Qiskit", "Docker", "Google Cloud Run", "React"]
  },
  {
    id: "class-representative-lead",
    role: "Class Representative (CR) & Technical Contributor",
    organization: "Department of Computer Science & Engineering (Artificial Intelligence)",
    period: "2025 – Present",
    type: "Leadership",
    highlights: [
      "Liaising between undergraduate peers and faculty, driving student participation in hackathons, workshops, and coding challenges.",
      "Maintained a 9.24 CGPA while actively building competitive projects across AI, cloud computing, and quantum algorithms.",
      "Participated actively in technical presentations, project expos, and bootcamp sessions including Google Build with AI."
    ],
    technologies: ["Python", "C++", "Java", "DSA", "FastAPI", "GitHub"]
  }
];

export const currentlyBuildingData: CurrentlyBuildingItem[] = [
  {
    id: "building-ai-engineering",
    topic: "AI Engineering",
    status: "Learning / Building",
    iconName: "Brain",
    description: "Deepening practical knowledge in machine learning systems, predictive pipelines, containerized microservices with FastAPI and Docker, and deploying scalable endpoints to Google Cloud Run.",
    focusAreas: ["FastAPI", "Docker", "Google Cloud Run", "Predictive Modeling"]
  },
  {
    id: "building-generative-ai",
    topic: "Generative AI",
    status: "Exploring",
    iconName: "Sparkles",
    description: "Investigating large language models, structured prompt engineering, Gemini API integration, and explainable AI reasoning for real-world decision workflows like crisis evacuation.",
    focusAreas: ["Google Gemini API", "Explainable AI", "NLU", "Multimodal Systems"]
  },
  {
    id: "building-quantum-computing",
    topic: "Quantum Computing",
    status: "Exploring",
    iconName: "Atom",
    description: "Exploring quantum logic circuits, unitary gate operations (Hadamard, CNOT), 2-qubit state entanglement, and quantum-secured communication protocols using Qiskit.",
    focusAreas: ["Qiskit", "Entanglement", "Quantum Gates", "Secure Channels"]
  },
  {
    id: "building-hackathon-projects",
    topic: "Hackathon Projects",
    status: "Active",
    iconName: "Trophy",
    description: "Leading and collaborating in rapid-prototyping hackathon sprints, architecting end-to-end MVPs from scratch under tight deadlines, and competing in collegiate and industry challenges.",
    focusAreas: ["Team Leadership", "Rapid Prototyping", "Full-Stack AI", "Pitch & Demo"]
  }
];

export const quantumAIInsights = {
  title: "The Quantum Computing Frontier",
  subtitle: "Exploring how quantum principles, gate entanglement, and quantum-secured communication redefine computational security.",
  coreQuote: "From quantum entanglement using Hadamard and CNOT gates to Qiskit-based key generation, quantum computing offers fundamentally new paradigms for security and simulation.",
  pillars: [
    {
      title: "Quantum Entanglement & Bell States",
      icon: "Atom",
      description: "Utilizing Hadamard and CNOT gates in Qiskit to create maximally entangled 2-qubit Bell states (|ψ⟩ = (|00⟩ + |11⟩)/√2) and analyzing statevector correlations."
    },
    {
      title: "Quantum-Secured Communication",
      icon: "Shield",
      description: "Applying quantum key generation principles combined with XOR encryption and AI message risk classification to prototype secure communication pipelines."
    },
    {
      title: "Hands-on Circuit Simulation",
      icon: "Cpu",
      description: "Modeling quantum state transformations, simulating attack vectors, and visualizing probability distributions through practical Qiskit implementations."
    }
  ],
  toolbox: [
    { name: "Qiskit", role: "IBM Quantum Circuit Modeling & Simulation" },
    { name: "Quantum Gates", role: "Hadamard, CNOT, Pauli-X, Pauli-Z Operations" },
    { name: "Quantum Key Generation", role: "Quantum-Secured Communication Protocols" },
    { name: "Python / Flask", role: "Simulated Interactive Attack & Verification Panels" }
  ]
};
