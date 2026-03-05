import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { SplashScreen } from './components/SplashScreen';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { SkillsCertifications } from './components/SkillsCertifications';
import { Education } from './components/Education';
import { Footer } from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/30 selection:text-white font-sans overflow-x-hidden">
      <AnimatedBackground />
      
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <main key="main" className="relative z-10 flex flex-col">
            <Hero />
            <Achievements />
            <Experience />
            <SkillsCertifications />
            <Education />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}
