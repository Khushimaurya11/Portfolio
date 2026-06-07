import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer
      id="main-app-footer"
      className="bg-white dark:bg-slate-950 text-slate-650 dark:text-slate-400 py-12 border-t border-slate-150/50 dark:border-slate-850/50 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-150/40 dark:border-slate-850/40">
          
          {/* Logo & Pitch */}
          <div className="md:col-span-4 text-center md:text-left space-y-3">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <span className="font-display font-extrabold text-xl text-slate-900 dark:text-white">
                Khushi Maurya
              </span>
              <span className="font-mono text-xs px-1.5 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                CSE.2027
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-sans max-w-sm">
              Passionate Computer Science student and software engineering enthusiast, constantly iterating frameworks and algorithms for real-world impact.
            </p>
          </div>

          {/* Quick links lists */}
          <div className="md:col-span-5 flex flex-wrap justify-center gap-x-4 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                id={`footer-link-${link.id}`}
                onClick={() => handleLinkClick(link.id)}
                className="text-xs sm:text-sm text-slate-500 dark:text-slate-450 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors py-1 px-1.5 font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Social icons & scroll up (md: col spin 3) */}
          <div className="md:col-span-3 flex flex-col sm:flex-row items-center justify-center md:justify-end gap-4">
            <div className="flex items-center space-x-4">
              <a
                id="footer-social-linkedin"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-50 hover:bg-indigo-50 text-slate-500 hover:text-indigo-550 dark:bg-slate-900 dark:hover:bg-slate-850 dark:text-slate-400 dark:hover:text-indigo-400 rounded-full transition-all"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={16} />
              </a>

              <a
                id="footer-social-github"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 bg-slate-50 hover:bg-indigo-50 text-slate-500 hover:text-indigo-550 dark:bg-slate-900 dark:hover:bg-slate-850 dark:text-slate-400 dark:hover:text-indigo-400 rounded-full transition-all"
                aria-label="GitHub profile"
              >
                <Github size={16} />
              </a>

              <a
                id="footer-social-email"
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-slate-50 hover:bg-indigo-50 text-slate-500 hover:text-indigo-550 dark:bg-slate-900 dark:hover:bg-slate-850 dark:text-slate-400 dark:hover:text-indigo-400 rounded-full transition-all"
                aria-label="Email direct"
              >
                <Mail size={16} />
              </a>
            </div>

            {/* Back to top widget */}
            <motion.button
              id="footer-back-to-top"
              onClick={handleScrollToTop}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-850 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </motion.button>
          </div>

        </div>

        {/* Legal copyrights context */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-[11px] font-sans text-slate-500 dark:text-slate-550 gap-4">
          <p className="flex items-center gap-1">
            <span>© {new Date().getFullYear()} Khushi Maurya. All rights reserved.</span>
          </p>
          <p className="flex items-center gap-1.5 font-mono">
            <span>Built with React & Tailwind</span>
            <Heart size={10} className="text-red-500 fill-red-500 animate-pulse" />
          </p>
        </div>

      </div>
    </footer>
  );
}
