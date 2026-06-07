import { motion } from 'motion/react';
import { User, Award, GraduationCap, Code2, Globe2, Languages, Terminal } from 'lucide-react';
import { personalInfo } from '../data';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-1/4 left-1/10 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-150/40 dark:border-indigo-900/20 text-xs font-semibold uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <User size={12} />
            <span>Know Me Better</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            About My Developer Journey
          </motion.h2>
          
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Stylized stat cards & core facts */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="p-6 rounded-2xl glass-panel hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <GraduationCap className="h-8 w-8 text-indigo-500 mb-4" />
              <div className="text-xl font-bold text-slate-800 dark:text-slate-100 font-display">B.Tech CSE</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Shri Ramswaroop College of Eng. (2023 - 2027)</p>
            </div>

            <div className="p-6 rounded-2xl glass-panel hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Award className="h-8 w-8 text-purple-500 mb-4" />
              <div className="text-xl font-bold text-slate-800 dark:text-slate-100 font-display">SIH '24</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">National Grand Finalist, Government of India</p>
            </div>

            <div className="p-6 rounded-2xl glass-panel hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Code2 className="h-8 w-8 text-cyan-500 mb-4" />
              <div className="text-xl font-bold text-slate-800 dark:text-slate-100 font-display">Java (DSA)</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Strengthening data structures & algorithms</p>
            </div>

            <div className="p-6 rounded-2xl glass-panel hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Languages className="h-8 w-8 text-emerald-500 mb-4" />
              <div className="text-xl font-bold text-slate-800 dark:text-slate-100 font-display">Bilingual</div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Fluent communication in Hindi and English</p>
            </div>
          </motion.div>

          {/* Right Column: In-depth biography */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-4 text-slate-650 dark:text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
              {personalInfo.aboutFull.map((paragraph, index) => (
                <p key={index} className="transition-all hover:text-slate-850 dark:hover:text-white">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Language Badges Showcase */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-850 space-y-3">
              <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Globe2 size={14} className="text-indigo-500" />
                Language Capabilities
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {personalInfo.languages.map((language, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center space-x-1 px-3 py-1 bg-slate-150/40 dark:bg-slate-950/30 text-slate-700 dark:text-slate-200 text-xs font-semibold rounded-full border border-slate-200/40 dark:border-slate-850/50 font-mono"
                  >
                    <Terminal size={10} className="text-indigo-400" />
                    <span>{language}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
