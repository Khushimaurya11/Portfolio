export interface Project {
  id: string;
  title: string;
  techStack: string[];
  description: string[];
  githubUrl: string;
  liveUrl?: string;
  category: 'web-dev' | 'full-stack' | 'utility';
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'languages' | 'web-dev' | 'auth-apis' | 'cs-fundamentals' | 'tools';
}

export interface Education {
  degree: string;
  field: string;
  institution: string;
  duration: string;
  grade: string;
  details: string[];
}

export interface Achievement {
  title: string;
  organization: string;
  year: string;
  description: string;
  highlight: boolean;
}
