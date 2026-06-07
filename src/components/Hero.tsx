import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail, Sparkles, MapPin, Terminal, Coffee, Layers } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const roles = [
    'Future Software Engineer',
    'B.Tech CSE Student',
    'Full Stack Web Developer',
    'Data Structures & Algorithms Enthusiast',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect logic
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 30 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      typingSpeed = 1800; // Pause at full word
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      typingSpeed = 500; // Pause before typing next
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? currentRole.substring(0, charIndex - 1)
          : currentRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
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

  // Simulates or notifies on resume download
  const handleDownloadResume = () => {
    // Generate a beautiful mock resumefor recruiter convenience
    const resumeUrl = 'https://docs.google.com/document/d/1GCHz-NymVjO-OqH02u8iIia9Fj37R2MpxsXG_7_p6E4/export?format=pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-transparent transition-colors"
    >
      {/* Abstract Animated Ambient Glow Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Purple top-right blob */}
        <motion.div
          className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-500/10 dark:bg-purple-600/10 blur-[80px]"
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        {/* Indigo bottom-left blob */}
        <motion.div
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/15 blur-[100px]"
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 60, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        {/* Cyan middle blob */}
        <motion.div
          className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 dark:bg-cyan-500/5 blur-[90px]"
          animate={{
            scale: [1, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        
        {/* Modern Dot Matrix Grid background overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
      </div>

      {/* Floating Interactive Programming Bubbles (Framer-motion) */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {/* Java bubble */}
        <motion.div
          className="absolute left-10 top-1/4 p-3 rounded-2xl glass-panel text-indigo-600 dark:text-indigo-400 bg-white/40 dark:bg-slate-900/45 border border-indigo-150 dark:border-indigo-900/20 backdrop-blur-md shadow-md flex items-center space-x-2"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <Terminal size={16} />
          <span className="font-mono text-xs font-semibold">Java (DSA)</span>
        </motion.div>

        {/* SIH Finalist Badge */}
        <motion.div
          className="absolute right-12 top-1/3 p-3 rounded-2xl glass-panel text-amber-600 dark:text-amber-400 bg-white/40 dark:bg-slate-900/45 border border-amber-150 dark:border-amber-900/20 backdrop-blur-md shadow-md flex items-center space-x-2"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        >
          <Sparkles size={16} />
          <span className="font-mono text-xs font-semibold">SIH 2024 Finalist</span>
        </motion.div>

        {/* Full-Stack MERN Badge */}
        <motion.div
          className="absolute left-1/4 bottom-1/4 p-3 rounded-2xl glass-panel text-cyan-600 dark:text-cyan-400 bg-white/40 dark:bg-slate-900/45 border border-cyan-150 dark:border-cyan-900/20 backdrop-blur-md shadow-md flex items-center space-x-2"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <Layers size={16} />
          <span className="font-mono text-xs font-semibold">MERN Systems</span>
        </motion.div>

        {/* Coffee cup */}
        <motion.div
          className="absolute right-1/4 bottom-1/3 p-3 rounded-2xl glass-panel text-purple-600 dark:text-purple-400 bg-white/40 dark:bg-slate-900/45 border border-purple-150 dark:border-purple-900/20 backdrop-blur-md shadow-md flex items-center space-x-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        >
          <Coffee size={16} />
          <span className="font-mono text-xs font-semibold">Continuous Dev</span>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center py-12 md:py-16">
          
          {/* Hero Left Content Column */}
          <motion.div
            id="hero-intro-text"
            className="flex flex-col items-center justify-center text-center space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Soft, recruiter-centric locator badge */}
            <div className="inline-flex items-center justify-center space-x-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold font-mono flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/30">
                <MapPin size={12} className="text-indigo-500 animate-pulse" />
                Lucknow, UP, India
              </span>
            </div>

            {/* Profile Avatar Frame positioned just above the heading */}
            <div className="relative group mb-2 mt-4">
              {/* Animated glowing gradient backdrops */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 opacity-75 blur-md group-hover:opacity-100 group-hover:blur-lg transition duration-700 animate-spin-slow" />
              
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 opacity-30 blur-xl group-hover:opacity-40 transition duration-700 pointer-events-none" />

              {/* Glassmorphic border ring around photo */}
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full p-1.5 bg-white/10 dark:bg-slate-950/40 backdrop-blur-md overflow-hidden flex items-center justify-center shadow-2xl">
                {/* Profile photo container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 dark:border-slate-800">
                  <img
                    id="hero-profile-avatar"
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Glass shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-transparent to-white/10 pointer-events-none" />
                </div>
              </div>

              {/* Floating micro accent cards (Framer-motion) */}
              <motion.div
                className="absolute -right-3 bottom-3 p-1.5 px-2.5 rounded-2xl glass-panel bg-slate-900/80 text-white border border-white/10 backdrop-blur-md shadow-lg flex items-center space-x-1 pointer-events-none"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles size={10} className="text-yellow-400 fill-yellow-400" />
                <span className="font-sans text-[9px] font-bold tracking-wider uppercase">Active Coder</span>
              </motion.div>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 glow-shadow">
                {personalInfo.name}
              </span>
            </h1>

            {/* Typewriter text block with fixed height to prevent structural movement */}
            <div className="h-10 sm:h-12 flex items-center justify-center">
              <p className="text-xl sm:text-2xl font-semibold font-display text-slate-700 dark:text-slate-200">
                <span className="text-indigo-600 dark:text-indigo-400">
                  {typedText}
                </span>
                <span className="animate-pulse font-light ml-0.5 text-indigo-500">|</span>
              </p>
            </div>

            {/* Professional tag/pitch */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-sans leading-relaxed">
              {personalInfo.tagline} Currently pursuing B.Tech in Computer Science and Engineering from{' '}
              <span className="font-semibold text-slate-800 dark:text-slate-200">
                SRMCEM
              </span>
              . Focused on code efficiency, web platforms, and continuous engineering iterations.
            </p>

            {/* Slider Call To Action Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <motion.button
                id="hero-cta-contact"
                onClick={scrollToContact}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 focus:outline-none shadow-md shadow-indigo-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
                <ArrowRight size={16} className="ml-2 animate-pulse" />
              </motion.button>

              <motion.button
                id="hero-cta-resume"
                onClick={handleDownloadResume}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-slate-800 hover:bg-slate-50 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-850 hover:shadow-md transition-all border border-slate-200 dark:border-slate-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} className="mr-2" />
                Resume / CV
              </motion.button>
            </div>

            {/* Social handles quick index */}
            <div className="flex items-center justify-center space-x-5 pt-6 border-t border-slate-200/50 dark:border-slate-800/50 w-full max-w-sm mx-auto">
              <motion.a
                id="hero-social-linkedin"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-indigo-400 rounded-full transition-all border border-slate-200/50 dark:border-slate-800/50"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn profile"
              >
                <Linkedin size={18} />
              </motion.a>

              <motion.a
                id="hero-social-github"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-400 dark:hover:text-indigo-400 rounded-full transition-all border border-slate-200/50 dark:border-slate-800/50"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="GitHub profile"
              >
                <Github size={18} />
              </motion.a>

              <motion.a
                id="hero-social-mail"
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-slate-100 hover:bg-indigo-50 text-slate-600 hover:text-indigo-600 dark:bg-slate-900 dark:hover:bg-slate-850 dark:text-slate-400 dark:hover:text-indigo-400 rounded-full transition-all border border-slate-200/50 dark:border-slate-800/50"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email Address"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
