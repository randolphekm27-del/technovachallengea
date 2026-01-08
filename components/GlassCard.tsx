
import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1]
      }}
      className={`glass rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 soft-border shadow-sm relative overflow-hidden group hover:shadow-[0_20px_40px_rgba(124,58,237,0.1)] md:hover:-translate-y-2 transition-all duration-500 shine-container ${className}`}
    >
      {/* Micro-animation de lueur en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-br from-nova-violet/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Bordure animée subtile */}
      <div className="absolute inset-0 border border-nova-violet/0 group-hover:border-nova-violet/15 rounded-[2rem] md:rounded-[2.5rem] transition-colors duration-500 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
