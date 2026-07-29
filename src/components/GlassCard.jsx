import React from 'react';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hoverable = true, ...props }) {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4, transition: { duration: 0.25, ease: "easeOut" } } : {}}
      className={`relative rounded-3xl bg-white/50 backdrop-blur-xl border border-white/70 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(96,165,250,0.12)] hover:bg-white/75 hover:border-white transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
