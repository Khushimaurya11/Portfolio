import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import CursorEffect from './components/CursorEffect';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark'); // 'dark' theme default as requested (Dark modern gradient)
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Sync class name on root HTML element
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  // Scroll listener tracking position ratios and active sections
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage
      const totalDepth = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalDepth > 0 ? (window.scrollY / totalDepth) : 0;
      setScrollProgress(progress);

      // Section intersection mapping
      const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'education', 'contact'];
      const currentScrollY = window.scrollY;
      const navOffsetHeight = 120; // safe padding offset for section boundaries
      
      const visible = sections.find((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - navOffsetHeight;
          const bottom = top + el.offsetHeight;
          return currentScrollY >= top && currentScrollY < bottom;
        }
        return false;
      });

      if (visible) {
        setActiveSection(visible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {/* High-fidelity Custom Cursor System */}
      <CursorEffect />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader-panel" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="main-portfolio-space"
            id="portfolio-interactive-hub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="min-h-screen relative flex flex-col justify-between bg-slate-50/5 dark:bg-[#020617]/5 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-500"
          >
            {/* Ambient Base Glowing Bubbles for Frosted Glass Theme */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
              <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/25 dark:bg-indigo-600/35 blur-[130px] animate-pulse-slow" />
              <div className="absolute top-[35%] -right-40 w-[500px] h-[500px] rounded-full bg-cyan-600/20 dark:bg-cyan-600/25 blur-[120px] animate-pulse-slow [animation-delay:4s]" />
              <div className="absolute -bottom-40 left-[25%] w-[600px] h-[600px] rounded-full bg-violet-600/25 dark:bg-violet-600/35 blur-[130px] animate-pulse-slow [animation-delay:8s]" />
            </div>

            {/* Sticky Navigation bar */}
            <Navbar
              theme={theme}
              toggleTheme={toggleTheme}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
            />

            {/* Custom hidden scroll percentage marker bound to header */}
            <div className="sr-only" aria-live="polite">
              Scroll depth percentage: {Math.round(scrollProgress * 100)}%
            </div>

            {/* Principal Content Regions */}
            <main id="portfolio-content" className="flex-1 w-full relative z-10">
              
              {/* Home Section */}
              <Hero />

              {/* Professional Journey Box */}
              <About />

              {/* Skills Area */}
              <Skills />

              {/* Projects Laboratory */}
              <Projects />

              {/* Honors Panel */}
              <Achievements />

              {/* Education Ledger */}
              <Education />

              {/* Connection Console */}
              <Contact />

            </main>

            {/* Legal Footing Area */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
