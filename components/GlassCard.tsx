
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
      whileHover={{ y: -5, scale: 1.01, rotate: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1],
        hover: { duration: 0.3 }
      }}
      className={`glass rounded-[2.5rem] p-10 soft-border shadow-sm hover:shadow-2xl transition-all duration-500 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
