
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ 
        y: -12,
        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
      }}
      className={`glass rounded-[2.5rem] p-10 soft-border shadow-sm relative overflow-hidden group hover:shadow-[0_30px_60px_rgba(124,58,237,0.15)] transition-all duration-500 ${className}`}
    >
      {/* Micro-animation de lueur en arrière-plan au hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-nova-violet/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Bordure animée subtile au hover */}
      <div className="absolute inset-0 border border-nova-violet/0 group-hover:border-nova-violet/10 rounded-[2.5rem] transition-colors duration-500 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
