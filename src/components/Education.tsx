import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Layers } from 'lucide-react';
import { educationHistory } from '../data';

const keyModules = [
  { name: 'Data Structures & Algorithms', label: 'Java based DSA optimization models' },
  { name: 'Object-Oriented Programming', label: 'OOP structures, abstractions, inheritance' },
  { name: 'Database Management (DBMS)', label: 'Relational mapping, query validation & indexing' },
  { name: 'Operating Systems', label: 'Task synchronization & processor thread pipelines' },
  { name: 'Computer Networks', label: 'Inter-process protocols, routing configurations' },
];

export default function Education() {
  const edu = educationHistory[0];

  return (
    <section
      id="education"
      className="py-20 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 right-5 w-64 h-64 bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 border border-indigo-150/40 dark:border-indigo-900/20 text-xs font-semibold uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GraduationCap size={12} />
            <span>Academic Registry</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Education & Academic Focus
          </motion.h2>
          
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Highlight timeline layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: CGPA Spotlight Card (Col span 5) */}
          <motion.div
            className="lg:col-span-5 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl shadow-xl w-full max-w-md group overflow-hidden">
              <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />
              
              <div className="relative glass-panel p-8 rounded-[22px] flex flex-col items-center justify-between min-h-[340px] text-center">
                
                {/* CGPA Big Dial */}
                <div className="relative w-36 h-36 flex items-center justify-center rounded-full border-4 border-dashed border-indigo-500/30 dark:border-indigo-400/20 mb-6 group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-2 bg-indigo-50 dark:bg-indigo-900/10 rounded-full flex flex-col items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-display font-extrabold text-indigo-600 dark:text-indigo-400">
                      7.9
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-mono text-slate-400 mt-1">
                      / 10 CGPA
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-mono">
                    {edu.field}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center justify-center gap-1">
                    <Calendar size={12} />
                    <span>Cohort: {edu.duration}</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: College Details & Core Subjects timelines (Col span 7) */}
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {/* College Details Box */}
            <div className="p-6 sm:p-8 rounded-2xl glass-panel">
              <div className="flex items-start space-x-4 mb-4">
                <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 rounded-xl shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-display font-bold text-slate-900 dark:text-white">
                    {edu.institution}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Uttar Pradesh, India • Affiliated with AKTU
                  </p>
                </div>
              </div>

              <ul className="space-y-3 pl-1 pt-2">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-slate-650 dark:text-slate-350 leading-relaxed font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-2 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Course Modules Grid */}
            <div className="space-y-4">
              <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-550 dark:text-slate-400 flex items-center gap-1.5">
                <BookOpen size={14} className="text-indigo-500" />
                Key Courseware & Core Concentration
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyModules.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl glass-panel hover:border-indigo-500/50 transition-all duration-300 flex items-start space-x-3"
                  >
                    <Layers size={14} className="text-indigo-500 dark:text-indigo-400 mt-1 shrink-0 animate-pulse" />
                    <div>
                      <h5 className="text-xs font-bold text-slate-850 dark:text-slate-100 font-display">
                        {item.name}
                      </h5>
                      <p className="text-[10px] text-slate-450 dark:text-slate-400 mt-0.5 leading-normal">
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
