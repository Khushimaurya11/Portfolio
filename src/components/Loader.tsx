import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Cpu, Database, Check } from 'lucide-react';

const bootLogs = [
  { text: 'Initial core workspace booting...', icon: Cpu },
  { text: 'Loading data structures & Java DSA models...', icon: Database },
  { text: 'Compiling responsive styled glassmorphic widgets...', icon: Terminal },
  { text: 'Executing final build check... Done.', icon: Check },
];

interface LoaderProps {
  onComplete: () => void;
  key?: string | number;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [activeLogIndex, setActiveLogIndex] = useState(0);

  useEffect(() => {
    if (activeLogIndex < bootLogs.length - 1) {
      const timer = setTimeout(() => {
        setActiveLogIndex((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        onComplete();
      }, 730);
      return () => clearTimeout(timer);
    }
  }, [activeLogIndex, onComplete]);

  return (
    <div
      id="portfolio-preloader-veil"
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-slate-950 text-slate-100 px-4"
    >
      <div className="w-full max-w-md p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
        
        {/* Loader Header spinner line */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 block animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 block animate-pulse [animation-delay:0.2s]" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 block animate-pulse [animation-delay:0.4s]" />
          </div>
          <span className="font-mono text-[10px] text-slate-500 tracking-widest font-semibold uppercase">
            KM_LOADER v1.0.4
          </span>
        </div>

        {/* Big visual rotating loader core */}
        <div className="flex items-center justify-center py-6">
          <div className="relative w-20 h-20">
            {/* Spinning gradient border */}
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/20" />
            <motion.div
              className="absolute inset-0 rounded-full border-t-2 border-r-2 border-indigo-500"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner static symbol */}
            <div className="absolute inset-4 rounded-full bg-slate-950 flex items-center justify-center border border-slate-850">
              <span className="font-mono text-xs font-bold text-indigo-400">dev</span>
            </div>
          </div>
        </div>

        {/* Terminal Boot console log output */}
        <div className="font-mono text-xs text-slate-400 space-y-2 min-h-[100px]">
          {bootLogs.slice(0, activeLogIndex + 1).map((log, index) => {
            const Icon = log.icon;
            const isLatest = index === activeLogIndex;
            return (
              <motion.div
                key={index}
                className={`flex items-start space-x-2.5 ${isLatest ? 'text-indigo-400 font-bold' : 'text-slate-500'}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Icon size={14} className="mt-0.5 shrink-0" />
                <span>{log.text}</span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
