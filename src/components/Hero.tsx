import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Hero: React.FC = () => {
  const { name, title, summary } = resumeData.basics;

  const handleScrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // In a real app, this would link to a PDF or generate one.
    // For now, we'll just alert or open a new window with the JSON data.
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(resumeData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "Tirth_Parekh_Resume.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 flex flex-col items-start gap-6"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-mono tracking-wide text-white/80 uppercase"
          >
            {title.split(' | ')[0]}
          </motion.div>
          
          <h1 
            className="text-[15vw] lg:text-[10vw] font-bold tracking-tighter leading-[0.85] text-white uppercase"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {name.split(' ')[0]}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/70 to-white/20">
              {name.split(' ')[1]}
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/60 max-w-2xl leading-relaxed mt-4 font-light">
            {summary.split('.')[0]}. {summary.split('.')[1]}.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToExperience}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold tracking-wide hover:bg-white/90 transition-colors"
            >
              View Experience
              <ArrowDown className="w-4 h-4" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 bg-white/5 text-white font-semibold tracking-wide hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Download Resume
              <Download className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, rotate: -90 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex lg:col-span-4 justify-end"
        >
          <div className="w-72 h-72 rounded-full border border-white/10 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border border-white/20 border-t-transparent animate-spin" style={{ animationDuration: '10s' }} />
            <div className="absolute inset-4 rounded-full border border-white/10 border-b-transparent animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            <span className="text-8xl font-bold text-white/20" style={{ fontFamily: 'var(--font-display)' }}>
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
        </motion.div>
      </div>

      {/* Subtle bottom gradient to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
};
