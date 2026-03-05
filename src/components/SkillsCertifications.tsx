import React from 'react';
import { motion } from 'motion/react';
import { Award, Code2 } from 'lucide-react';
import resumeData from '../data/resume.json';
import { cn } from '../lib/utils';

export const SkillsCertifications: React.FC = () => {
  return (
    <section id="skills" className="py-32 px-6 relative bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Skills & Certifications
          </h2>
          <div className="w-24 h-1 bg-white/20 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white/80">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Core Competencies</h3>
            </div>
            
            <div className="space-y-8">
              {resumeData.skills.map((skillGroup, groupIndex) => (
                <div key={groupIndex}>
                  <h4 className="text-lg font-semibold text-white/90 mb-3 tracking-tight">
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (groupIndex * 0.1) + (index * 0.05) }}
                        className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default text-sm"
                      >
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white/80">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {resumeData.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition-all flex items-start gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-white/40 mt-2 flex-shrink-0" />
                  <p className="text-white/80 font-medium leading-relaxed">
                    {cert.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
