import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Footer: React.FC = () => {
  const { name, email, phone, links } = resumeData.basics;
  const linkedinUrl = links.find(l => l.network === 'LinkedIn')?.url;

  return (
    <footer className="py-20 px-6 relative bg-[#050505] border-t border-white/10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center md:items-start gap-2"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-white">
            {name}
          </h2>
          <p className="text-white/50 font-mono text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center gap-6"
        >
          <a
            href={`mailto:${email}`}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
          {linkedinUrl && (
            <a
              href={`https://${linkedinUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
        </motion.div>
      </div>
    </footer>
  );
};
