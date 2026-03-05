import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-32 px-6 relative bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Education
          </h2>
          <div className="w-24 h-1 bg-white/20 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300"
            >
              <div className="flex items-start gap-6 relative z-10">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-white/20 transition-all">
                  <GraduationCap className="w-6 h-6" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    {edu.degree}
                  </h3>
                  <div className="text-lg text-white/60 font-medium mb-4">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/50 font-mono">
                    <Calendar className="w-4 h-4" />
                    {edu.dates}
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
