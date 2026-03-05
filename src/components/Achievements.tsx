import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';
import { Trophy, TrendingUp, Target } from 'lucide-react';
import resumeData from '../data/resume.json';
import { cn } from '../lib/utils';

interface AnimatedCounterProps {
  value: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ value }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const numMatch = value.match(/\d+/);
  const targetNumber = numMatch ? parseInt(numMatch[0], 10) : 0;
  const suffix = value.replace(/\d+/, '');

  useEffect(() => {
    if (isInView && targetNumber > 0) {
      let start = 0;
      const duration = 2000;
      const increment = targetNumber / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          setCount(targetNumber);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, targetNumber]);

  if (!targetNumber) return <span>{value}</span>;

  return (
    <span ref={ref} className="font-mono text-6xl md:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40" style={{ fontFamily: 'var(--font-display)' }}>
      {count}{suffix}
    </span>
  );
};

export const Achievements: React.FC = () => {
  const icons = [TrendingUp, Target, Trophy];

  return (
    <section id="achievements" className="py-32 px-6 relative bg-[#050505] overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Impact & Achievements
          </h2>
          <div className="w-24 h-1 bg-white/20 rounded-full mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resumeData.achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative rounded-3xl bg-white/5 border border-white/10 p-8 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col items-center text-center"
              >
                {/* Spotlight hover effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/20">
                  <Icon className="w-8 h-8 text-white/80 group-hover:text-white" />
                </div>

                <div className="mb-6">
                  <AnimatedCounter value={achievement.metric} />
                </div>

                <p className="text-white/60 leading-relaxed font-medium">
                  {achievement.context}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
