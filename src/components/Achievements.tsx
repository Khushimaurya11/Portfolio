import { motion } from 'motion/react';
import { Award, Zap, Trophy, ShieldCheck, Flame, Medal, Compass, CheckCircle } from 'lucide-react';
import { achievements } from '../data';

const sihMilestones = [
  {
    phase: 'Phase 01',
    title: 'Internal Hackathon Selection',
    description: 'Pitched and selected among the top teams at Shri Ramswaroop College of Engineering & Management.',
    date: 'August 2024',
    status: 'completed',
  },
  {
    phase: 'Phase 02',
    title: 'Proposal & Idea shortlisting',
    description: 'Submitted solution prototype to the central portal of Ministry of Education. Highly rated.',
    date: 'September 2024',
    status: 'completed',
  },
  {
    phase: 'Phase 03',
    title: 'National Evaluation',
    description: 'Evaluated by a panel of tech industry mentors and government ministry authorities.',
    date: 'October 2024',
    status: 'completed',
  },
  {
    phase: 'Phase 04',
    title: 'National Grand Finale',
    description: 'Acclaimed National Grand Finalist. Engineered full-stack solution during continuous coding sprint.',
    date: 'December 2024',
    status: 'completed',
  },
];

export default function Achievements() {
  const sihData = achievements[0]; // Fetch SIH 2024 details

  return (
    <section
      id="achievements"
      className="py-20 bg-transparent transition-colors duration-300 relative overflow-hidden"
    >
      {/* Visual Ambient Light Blobs */}
      <div className="absolute top-1/3 left-10 w-85 h-85 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400 border border-amber-150/40 dark:border-amber-900/20 text-xs font-semibold uppercase tracking-wider mb-3"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Trophy size={12} />
            <span>Milestone Honors</span>
          </motion.div>
          
          <motion.h2
            className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-slate-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Major Achievements
          </motion.h2>
          
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-amber-500 to-indigo-500 mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>

        {/* Highlight Banner / Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Prominent Spotlight Highlight Card (Col Span 5) */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group p-1 bg-gradient-to-tr from-amber-400 via-purple-500 to-indigo-500 rounded-3xl shadow-xl overflow-hidden shadow-amber-500/10">
              {/* Inner glowing hover sheet */}
              <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative rounded-[22px] glass-panel p-7 sm:p-8 z-10">
                <div className="flex items-center justify-between mb-6">
                  {/* Award badge wrap */}
                  <div className="p-3 bg-amber-50 dark:bg-amber-950/40 text-amber-500 rounded-2xl border border-amber-100 dark:border-amber-900/30">
                    <Trophy size={28} className="animate-pulse" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 px-3 py-1 bg-amber-100/40 dark:bg-amber-950/65 rounded-full border border-amber-250/20 dark:border-amber-900/20 shadow-sm">
                    Grand Finalist
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 dark:text-white leading-tight">
                  {sihData.title}
                </h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1 mb-4 flex items-center gap-1">
                  <Compass size={12} className="text-indigo-400 shrink-0" />
                  <span>National Arena, Government of India</span>
                </p>

                <p className="text-slate-650 dark:text-slate-350 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                  {sihData.description}
                </p>

                {/* Micro metrics highlight inside card */}
                <div className="grid grid-cols-2 gap-3 pt-6 border-t border-slate-100 dark:border-slate-850">
                  <div>
                    <h5 className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Team Scale</h5>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">6 Developers</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Final Venue</h5>
                    <p className="text-sm font-bold text-slate-800 dark:text-slate-200">National Stage</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline Milestones (Col Span 7) */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative pl-6 lg:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-8">
              {sihMilestones.map((milestone, idx) => (
                <div key={idx} className="relative group/timeline">
                  {/* Timeline Node Point indicator */}
                  <div className="absolute -left-[31px] lg:-left-[39px] top-1.5 p-1 rounded-full bg-slate-50 dark:bg-slate-950 transition-transform duration-300 group-hover/timeline:scale-110">
                    <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-amber-500 to-indigo-500 border border-white dark:border-slate-900 shadow-sm flex items-center justify-center">
                      <CheckCircle size={8} className="text-white opacity-0 group-hover/timeline:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Timing metadata */}
                  <div className="text-[10px] font-mono font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest mb-1.5">
                    {milestone.phase} • {milestone.date}
                  </div>

                  {/* Content details bubble */}
                  <h4 className="text-base sm:text-lg font-display font-bold text-slate-900 dark:text-white transition-colors group-hover/timeline:text-indigo-500 dark:group-hover/timeline:text-indigo-400">
                    {milestone.title}
                  </h4>
                  <p className="text-slate-650 dark:text-slate-350 text-xs sm:text-sm mt-1 leading-relaxed max-w-xl">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
