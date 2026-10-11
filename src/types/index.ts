export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  role: string;
  event?: string;
  period?: string;
  description: string;
  problemSolved?: string;
  technologies: string[];
  metrics?: string;
  achievement?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: 'Advanced' | 'Proficient' | 'Exploring';
    tag?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  category: 'Hackathon' | 'Achievement' | 'Leadership' | 'Certification' | 'Technical Event';
  date: string;
  organization: string;
  description: string;
  highlight?: string;
  badge?: string;
  spotlight?: boolean;
  credentialUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: 'Leadership' | 'Research' | 'Technical Sprint';
  highlights: string[];
  technologies: string[];
}

export interface CurrentlyBuildingItem {
  id: string;
  topic: string;
  status: 'Learning / Building' | 'Exploring' | 'Active' | string;
  iconName: 'Brain' | 'Sparkles' | 'Atom' | 'Trophy' | string;
  description: string;
  focusAreas?: string[];
}
