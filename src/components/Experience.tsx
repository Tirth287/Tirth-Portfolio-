import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react';
import resumeData from '../data/resume.json';
import { cn } from '../lib/utils';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-32 px-6 relative bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Experience
          </h2>
          <div className="w-24 h-1 bg-white/20 rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-6">
          {resumeData.experience.map((job, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Connecting line for timeline effect */}
                {index !== resumeData.experience.length - 1 && (
                  <div className="absolute left-[27px] top-16 bottom-[-24px] w-[2px] bg-white/10 group-hover:bg-white/20 transition-colors hidden md:block" />
                )}

                <div 
                  className={cn(
                    "relative overflow-hidden rounded-2xl border transition-all duration-300 cursor-pointer",
                    isExpanded 
                      ? "bg-white/10 border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.05)]" 
                      : "bg-white/5 border-white/10 hover:bg-white/[0.07] hover:border-white/20"
                  )}
                  onClick={() => toggleExpand(index)}
                >
                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-start gap-6 relative z-10">
                    
                    {/* Icon / Timeline Node */}
                    <div className="hidden md:flex flex-shrink-0 w-14 h-14 rounded-full bg-white/10 border border-white/20 items-center justify-center text-white/80 group-hover:text-white group-hover:bg-white/20 transition-all">
                      <Briefcase className="w-6 h-6" />
                    </div>

                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-white tracking-tight">
                            {job.role}
                          </h3>
                          <div className="text-lg text-white/60 font-medium">
                            {job.company}
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-1 text-sm text-white/50 font-mono">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {job.dates}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                        </div>
                      </div>

                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="pt-6 mt-6 border-t border-white/10">
                              <ul className="space-y-4">
                                {job.bullets.map((bullet, i) => {
                                  // Highlight metrics (numbers + %)
                                  const parts = bullet.split(/(\d+(?:%|\+)?)/g);
                                  
                                  return (
                                    <li key={i} className="flex items-start gap-3 text-white/70 leading-relaxed">
                                      <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2.5 flex-shrink-0" />
                                      <p>
                                        {parts.map((part, j) => 
                                          /^\d+(?:%|\+)?$/.test(part) ? (
                                            <span key={j} className="inline-flex items-center px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-sm mx-1">
                                              {part}
                                            </span>
                                          ) : (
                                            <span key={j}>{part}</span>
                                          )
                                        )}
                                      </p>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="absolute top-6 right-6 md:top-8 md:right-8 text-white/40 transition-transform duration-300" style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </div>
                  
                  {/* Subtle gradient overlay for glass effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
