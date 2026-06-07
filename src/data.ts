import { Project, Skill, Education, Achievement } from './types';
// @ts-ignore
import avatarImg from './assets/images/regenerated_image_1780806445529.jpg';

export const personalInfo = {
  name: 'Khushi Maurya',
  role: 'Future Software Engineer',
  subtitle: 'B.Tech Computer Science & Engineering Student',
  tagline: 'Building innovative solutions through code, creativity, and continuous learning.',
  location: 'Lucknow, Uttar Pradesh, India',
  email: 'khushimaurya0527@gmail.com',
  linkedin: 'https://linkedin.com/in/khushimaurya',
  github: 'https://github.com/khushimaurya', // Placeholder URL
  avatar: avatarImg,
  aboutBrief: 'I am a passionate B.Tech Computer Science Engineering student currently pursuing my degree from Shri Ramswaroop College of Engineering and Management. I focus on backend development, web architecture, problem-solving, and efficient data structures.',
  aboutFull: [
    'I am a B.Tech Computer Science Engineering student at Shri Ramswaroop College of Engineering and Management (2023 - 2027), deeply enthusiastic about Software Development, Full Stack Web Development, Data Structures and Algorithms, and intuitive problem-solving.',
    'I love translating complex technical problems into elegant user-centric solutions. From engineering scalable Node.js backend services to modeling relational and document structures, I constantly seek out best practices and architectural optimization.',
    'Currently, I am sharpening my Data Structures and Algorithms (DSA) expertise in Java, working on advanced full-stack systems, and actively seeking internship opportunities where I can apply my dedication, learn from industry leaders, and make impactful contributions.',
    'My eventual goal is to work alongside high-performing product engineering teams or deep tech systems to build products that handle real-world challenges at scale.'
  ],
  languages: ['English', 'Hindi']
};

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Java', level: 85, category: 'languages' },
  { name: 'Python', level: 75, category: 'languages' },
  { name: 'JavaScript', level: 90, category: 'languages' },
  { name: 'SQL', level: 80, category: 'languages' },

  // Web Development
  { name: 'HTML5 & CSS3', level: 95, category: 'web-dev' },
  { name: 'Tailwind CSS', level: 90, category: 'web-dev' },
  { name: 'React.js', level: 85, category: 'web-dev' },
  { name: 'Node.js', level: 80, category: 'web-dev' },
  { name: 'Express.js', level: 80, category: 'web-dev' },
  { name: 'MongoDB', level: 80, category: 'web-dev' },
  { name: 'MERN Stack', level: 85, category: 'web-dev' },

  // Authentication & APIs
  { name: 'Firebase', level: 75, category: 'auth-apis' },
  { name: 'JWT Authentication', level: 85, category: 'auth-apis' },
  { name: 'REST APIs', level: 90, category: 'auth-apis' },
  { name: 'MongoDB Atlas', level: 80, category: 'auth-apis' },

  // CS Fundamentals
  { name: 'Data Structures & Algorithms', level: 80, category: 'cs-fundamentals' },
  { name: 'Object-Oriented Programming (OOP)', level: 85, category: 'cs-fundamentals' },
  { name: 'Database Management Systems (DBMS)', level: 80, category: 'cs-fundamentals' },
  { name: 'Operating Systems (OS)', level: 75, category: 'cs-fundamentals' },
  { name: 'Computer Networks (CN)', level: 75, category: 'cs-fundamentals' },

  // Tools & Workflows
  { name: 'Git & Version Control', level: 85, category: 'tools' },
  { name: 'GitHub Collaboration', level: 80, category: 'tools' },
  { name: 'VS Code Ecosystem', level: 90, category: 'tools' }
];

export const projects: Project[] = [
  {
    id: 'lms',
    title: 'Learning Management System',
    category: 'full-stack',
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Tailwind CSS'],
    featured: true,
    description: [
      'Engineered a complete full-stack educational environment for students and course instructors.',
      'Developed backend infrastructure enabling role-based content administration (teachers upload multimedia, students consume resources).',
      'Engineered JWT authorization and secure role authentication guards inside Express routers.',
      'Implemented an smart content recommendation search with query weights and multi-criteria filters.'
    ],
    githubUrl: 'https://github.com/khushimaurya/learning-management-system'
  },
  {
    id: 'url-shortener',
    title: 'URL Shortener Service',
    category: 'web-dev',
    techStack: ['Node.js', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs'],
    featured: true,
    description: [
      'Developed a core utility service converting elongated links into short, highly shareable, unique hash routes.',
      'Constructed modular backend controllers inside Node.js for ultra-compact hash lookup.',
      'Designed a clean, responsive single-page client interface focused on instantaneous click-to-copy workflows.',
      'Optimized URL persistence layers for microsecond redirection lookups.'
    ],
    githubUrl: 'https://github.com/khushimaurya/url-shortener'
  }
];

export const educationHistory: Education[] = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    field: 'Computer Science and Engineering',
    institution: 'Shri Ramswaroop College of Engineering and Management',
    duration: '2023 - 2027',
    grade: 'CGPA: 7.9/10',
    details: [
      'In-depth academic concentration on Data Structures and Algorithms, Design of Database Systems, Network Architecture, and Software Engineering Methodologies.',
      'Actively engaged in programming forums, hackathons, and innovative collaborative labs modeling industry pipelines.'
    ]
  }
];

export const achievements: Achievement[] = [
  {
    title: 'Smart India Hackathon (SIH) 2024',
    organization: 'Ministry of Education & AICTE, India',
    year: '2024',
    description: 'Recognized as an National Grand Finalist for designing and proposing high-impact smart civic or institutional tech platforms, proving real-world collaborative build capabilities.',
    highlight: true
  }
];
