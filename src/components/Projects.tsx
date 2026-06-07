import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Github, ExternalLink, Sparkles, Server, Laptop, ChevronRight, Play, Link, Check, BookOpen, Layers } from 'lucide-react';
import { projects } from '../data';

export default function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  // States for URL Shortener interactive visual mockup
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleShorten = (e: React.FormEvent) => {
    e.preventDefault();
    if (!longUrl) return;
    const cleanUrl = longUrl.replace(/https?:\/\//, '').substring(0, 15);
    const randomHash = Math.random().toString(36).substring(2, 7);
    setShortUrl(`km.dev/${randomHash}`);
    setCopied(false);
  };

  const copyToClipboard = () => {
    if (!shortUrl) return;
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="projects"
      className="py-20 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      {/* Dynamic Background Circles */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 border border-cyan-150/40 dark:border-cyan-900/20 text-xs font-semibold uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Code size={12} />
            <span>Developer Lab</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Featured Solutions & Architecture
          </motion.h2>
          
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Projects Showcase Container */}
        <div className="space-y-16">
          {projects.map((project, projIndex) => {
            const isLms = project.id === 'lms';
            return (
              <motion.div
                key={project.id}
                id={`project-panel-${project.id}`}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
              >
                
                {/* Odd/Even Alternate Visual Mockup - Col span 5 */}
                <div className={`lg:col-span-5 ${projIndex % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="p-1 rounded-3xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 shadow-xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    {/* Visual Mockup Container (Glass Panel) */}
                    <div className="rounded-[22px] bg-slate-950 p-4 border border-white/5 relative z-10 w-full min-h-[300px] flex flex-col justify-between">
                      {/* Terminal window headers */}
                      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                        <div className="flex items-center space-x-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500 block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 block" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block" />
                        </div>
                        <span className="font-mono text-[10px] text-slate-500 tracking-wider">
                          {isLms ? 'LMS_CORE.SYSTEM' : 'LINK_REDIRECT.SRV'}
                        </span>
                      </div>

                      {/* --- CUSTOM INTERACTIVE WIDGET 1: LEARNING MANAGEMENT SYSTEM --- */}
                      {isLms && (
                        <div className="flex-1 space-y-3 px-1 text-slate-300">
                          <div className="flex items-center space-x-2 text-indigo-400">
                            <BookOpen size={16} />
                            <span className="font-mono text-xs font-semibold">Teacher Workstation</span>
                          </div>
                          <div className="bg-white/[0.03] rounded-xl p-3 border border-white/5 space-y-1">
                            <div className="text-[11px] text-slate-400 flex justify-between">
                              <span>Course Title</span>
                              <span className="text-purple-400">Auth Tier</span>
                            </div>
                            <div className="text-xs font-bold text-slate-100 flex items-center justify-between">
                              <span>Advanced Java Structures</span>
                              <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded border border-purple-500/30">
                                Instructor
                              </span>
                            </div>
                          </div>

                          {/* AI Recommendation Simulation Visual */}
                          <div className="border border-indigo-500/20 bg-indigo-500/5 rounded-xl p-3 space-y-1.5">
                            <div className="flex items-center space-x-1 text-cyan-400">
                              <Sparkles size={11} className="animate-spin-slow" />
                              <span className="text-[10px] font-mono tracking-wider font-semibold uppercase">AI Suggestion</span>
                            </div>
                            <p className="text-[11px] text-slate-400 font-sans leading-tight">
                              Smart categorizer detects Java algorithms and auto-matches matching video lessons.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* --- CUSTOM INTERACTIVE WIDGET 2: URL SHORTENER --- */}
                      {!isLms && (
                        <div className="flex-1 space-y-3 px-1 text-slate-300 flex flex-col justify-center">
                          <div className="flex items-center space-x-2 text-cyan-400 mb-1">
                            <Link size={16} />
                            <span className="font-mono text-xs font-semibold">Live Link Hashing</span>
                          </div>

                          <form onSubmit={handleShorten} className="space-y-2">
                            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                              <input
                                type="text"
                                placeholder="Paste long URL here..."
                                value={longUrl}
                                onChange={(e) => setLongUrl(e.target.value)}
                                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                              />
                              <button
                                type="submit"
                                className="px-3.5 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl text-xs font-semibold shrink-0 transition-all flex items-center justify-center gap-1"
                              >
                                <span>Shorten</span>
                              </button>
                            </div>
                          </form>

                          {/* Outputs shortened result */}
                          <AnimatePresence>
                            {shortUrl && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-2.5 flex items-center justify-between"
                              >
                                <span className="font-mono text-xs font-semibold text-emerald-400">
                                  {shortUrl}
                                </span>
                                <button
                                  type="button"
                                  onClick={copyToClipboard}
                                  className="text-emerald-400 hover:bg-emerald-500/25 p-1 rounded transition-colors"
                                  aria-label="Copy code"
                                >
                                  {copied ? <Check size={14} /> : <Layers size={14} />}
                                </button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )}

                      {/* Tech badges footer inside the custom graphics */}
                      <div className="pt-3 border-t border-white/5 flex items-center justify-between text-slate-500 text-[10px] font-mono">
                        <span>EST. 2024</span>
                        <span>COMPILED OK</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info Text - Col span 7 */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                  <div>
                    {/* Project Category Tag */}
                    <span className="inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-150/40 dark:border-indigo-900/30 mb-3">
                      <span>{project.category === 'full-stack' ? '⭐ Full Stack Enterprise' : '⚡ Single Utility System'}</span>
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Bullet description layout */}
                  <ul className="space-y-2.5 text-slate-650 dark:text-slate-350 text-sm leading-relaxed">
                    {project.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start space-x-2">
                        <ChevronRight size={16} className="text-indigo-500 dark:text-indigo-400 mt-1 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack Horizontal List */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* External Resource Actions */}
                  <div className="flex flex-wrap gap-4 pt-2">
                    <motion.a
                      id={`project-${project.id}-github`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-4.5 py-2 border border-slate-250 dark:border-slate-800 rounded-full text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors shadow-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={14} className="mr-2" />
                      View Repository
                    </motion.a>

                    <motion.button
                      id={`project-${project.id}-click-mock`}
                      onClick={() => {
                        // Triggers animation visual mockup click alert or shows active highlight
                        setLongUrl(isLms ? '' : 'https://github.com/khushimaurya');
                        if (!isLms) {
                          setShortUrl('km.dev/custom');
                        }
                      }}
                      className="inline-flex items-center justify-center px-4.5 py-2 border border-transparent rounded-full text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-colors shadow-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} className="mr-2" />
                      Interactive Demo
                    </motion.button>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
