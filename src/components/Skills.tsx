import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Server, ShieldCheck, Database, Sliders, CheckCircle2 } from 'lucide-react';
import { skills } from '../data';
import { Skill } from '../types';

type CategoryFilter = 'all' | 'languages' | 'web-dev' | 'auth-apis' | 'cs-fundamentals' | 'tools';

interface CategoryConfig {
  id: CategoryFilter;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const categories: CategoryConfig[] = [
  { id: 'all', label: 'All Stack', icon: Sliders },
  { id: 'languages', label: 'Languages', icon: Code },
  { id: 'web-dev', label: 'Web Dev & MERN', icon: Server },
  { id: 'auth-apis', label: 'Auth & APIs', icon: ShieldCheck },
  { id: 'cs-fundamentals', label: 'CS Core', icon: Database },
  { id: 'tools', label: 'Tools', icon: CheckCircle2 },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredSkills = skills.filter((skill) => {
    if (activeCategory === 'all') return true;
    return skill.category === activeCategory;
  });

  // Simple category description mapper for premium look
  const getCategoryDetails = (cat: CategoryFilter) => {
    switch (cat) {
      case 'languages':
        return 'Multi-paradigm programming foundations for efficient engine compilation and problem solving.';
      case 'web-dev':
        return 'Full-stack client and server frameworks with component lifecycles and modern fluid stylesheets.';
      case 'auth-apis':
        return 'Inter-service communication networks, endpoint safety routing, and token validation layers.';
      case 'cs-fundamentals':
        return 'Computer Science core architectures including efficient algorithms, OS pipelines, and database relations.';
      case 'tools':
        return 'Source integration workflows, package deployments, lint engines, and advanced editors.';
      default:
        return 'An exhaustive inventory of certified frameworks, core algorithms, and engineering tools.';
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400 border border-purple-150/40 dark:border-purple-900/20 text-xs font-semibold uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Code size={12} />
            <span>Abilities Matrix</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Technical Stack & Expertise
          </motion.h2>
          
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                id={`skill-filter-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md'
                    : 'glass-panel text-slate-650 hover:text-slate-900 dark:text-slate-350 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={14} />
                <span>{cat.label}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Active Category Description Panel */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <p className="text-sm font-sans text-slate-550 dark:text-slate-400 italic">
            "{getCategoryDetails(activeCategory)}"
          </p>
        </motion.div>

        {/* Grid of skill progress cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="p-6 rounded-2xl glass-panel hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-slate-850 dark:text-slate-100 text-sm sm:text-base group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100/35 dark:border-indigo-900/10">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar and glow track */}
                <div className="relative h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
