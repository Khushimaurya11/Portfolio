import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle, Copy, Check, Terminal } from 'lucide-react';
import { personalInfo } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    // Simulate API delivery thread
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      {/* Decorative Lights */}
      <div className="absolute top-1/2 left-[-10%] w-72 h-72 bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />

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
            <Mail size={12} />
            <span>Connect Interface</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Get In Touch
          </motion.h2>
          
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Form grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct coordinates cards (Col span 5) */}
          <motion.div
            className="lg:col-span-5 space-y-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed mb-6">
              I am actively seeking B.Tech CSE frontend, backend, or full-stack software development internships. Let's form an impact-oriented partnership! Feel free to message or use direct channels below:
            </div>

            {/* Email coordinate card */}
            <div className="p-5 rounded-2xl glass-panel hover:border-indigo-500/50 transition-all flex items-center justify-between group">
              <div className="flex items-center space-x-4">
                <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 rounded-xl">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Direct Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-sm font-semibold text-slate-850 dark:text-slate-100 hover:text-indigo-500">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-950 dark:hover:bg-slate-850 text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
                aria-label="Copy address"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              id="contact-coordinate-linkedin"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl glass-panel hover:border-indigo-500/50 transition-all flex items-center space-x-4 group"
            >
              <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 rounded-xl group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <Linkedin size={20} />
              </div>
              <div>
                <h4 className="text-[10px] uppercase font-mono tracking-wider text-slate-400">LinkedIn Business network</h4>
                <p className="text-sm font-semibold text-slate-850 dark:text-slate-100 group-hover:text-indigo-500 transition-colors">
                  linkedin.com/in/khushimaurya
                </p>
              </div>
            </a>

            {/* GitHub Card */}
            <a
              id="contact-coordinate-github"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-5 rounded-2xl glass-panel hover:border-indigo-500/50 transition-all flex items-center space-x-4 group"
            >
              <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 rounded-xl group-hover:bg-slate-800 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-950 transition-all">
                <Github size={20} />
              </div>
              <div>
                <h4 className="text-[10px] uppercase font-mono tracking-wider text-slate-400">GitHub Lab Repository</h4>
                <p className="text-sm font-semibold text-slate-850 dark:text-slate-100 group-hover:text-indigo-500 transition-colors">
                  github.com/khushimaurya
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl glass-panel hover:border-indigo-500/50 transition-all flex items-center space-x-4">
              <div className="p-3.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-500 rounded-xl">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Headquarters Location</h4>
                <p className="text-sm font-semibold text-slate-850 dark:text-slate-100">
                  {personalInfo.location}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact form panel (Col span 7) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="p-6 sm:p-8 rounded-3xl glass-card">
              <h3 className="font-display font-bold text-lg text-slate-850 dark:text-slate-100 flex items-center gap-1.5 mb-6">
                <Terminal size={18} className="text-indigo-500" />
                Dispatch Console
              </h3>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="sent-alert"
                    id="contact-sent-confirmation"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 flex flex-col items-center text-center space-y-4"
                  >
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/45 rounded-full border border-emerald-150 dark:border-emerald-900/30 text-emerald-500 animate-bounce">
                      <CheckCircle size={36} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                        Transmission Complete!
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                        Thank you for your message, Khushi Maurya has received your connection! She will get back to you shortly.
                      </p>
                    </div>

                    <motion.button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full text-xs font-semibold shrink-0 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      New Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form key="active-input-form" onSubmit={handleSubmit} className="space-y-5">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-name" className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                        Introduce Yourself
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        required
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        disabled={status === 'sending'}
                        className="w-full bg-slate-100/30 dark:bg-slate-950/30 border border-slate-200/50 dark:border-white/10 rounded-xl px-4 py-3 placeholder-slate-400 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white/40 dark:focus:bg-slate-950/40 backdrop-blur-sm transition-colors"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-email" className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                        Communication Node
                      </label>
                      <input
                        type="email"
                        id="form-email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        disabled={status === 'sending'}
                        className="w-full bg-slate-100/30 dark:bg-slate-950/30 border border-slate-200/50 dark:border-white/10 rounded-xl px-4 py-3 placeholder-slate-400 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white/40 dark:focus:bg-slate-950/40 backdrop-blur-sm transition-colors"
                      />
                    </div>

                    {/* Message input */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-message" className="text-xs uppercase font-mono tracking-wider font-semibold text-slate-500 dark:text-slate-400">
                        Inquiry / Message
                      </label>
                      <textarea
                        id="form-message"
                        required
                        rows={4}
                        placeholder="Briefly detail your invitation or engineering challenge..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        disabled={status === 'sending'}
                        className="w-full bg-slate-100/30 dark:bg-slate-950/30 border border-slate-200/50 dark:border-white/10 rounded-xl px-4 py-3 placeholder-slate-400 text-slate-800 dark:text-slate-100 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white/40 dark:focus:bg-slate-950/40 backdrop-blur-sm transition-colors resize-none"
                      />
                    </div>

                    {/* Action buttons */}
                    <div className="pt-2">
                      <motion.button
                        id="form-submit-bttn"
                        type="submit"
                        disabled={status === 'sending'}
                        className="w-full inline-flex items-center justify-center px-6 py-3.5 border border-transparent rounded-xl text-center text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 text-sm font-semibold shadow-md focus:outline-none transition-all disabled:opacity-50"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {status === 'sending' ? (
                          <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce-slow" />
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce-slow [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce-slow [animation-delay:0.4s]" />
                            <span>Transmitting...</span>
                          </span>
                        ) : (
                          <>
                            <Send size={16} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
