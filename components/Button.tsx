
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md',
  disabled = false
}) => {
  const sizeClasses = {
    sm: 'px-8 py-3 text-[10px]',
    md: 'px-12 py-5 text-xs',
    lg: 'px-20 py-8 text-lg font-black',
  };

  const baseClasses = "relative inline-flex items-center justify-center rounded-full transition-all duration-700 uppercase tracking-[0.4em] outline-none select-none overflow-hidden group";
  
  const getVariantClasses = () => {
    if (disabled) return 'opacity-40 grayscale shadow-none';
    
    switch (variant) {
      case 'primary':
      case 'accent':
        // Universal Red #9d0a00 for all filled buttons
        return 'bg-nova-red text-white shadow-[0_12px_0_0_#800800] active:shadow-none active:translate-y-[12px]';
      case 'outline':
        return 'border-2 border-nova-black text-nova-black hover:bg-nova-black hover:text-white';
      default:
        return '';
    }
  };

  return (
    <motion.button
      whileHover={!disabled ? { 
        scale: 1.05, 
        y: -4,
        transition: { type: "spring", stiffness: 350, damping: 12 } 
      } : {}}
      whileTap={!disabled ? { scale: 0.94, y: 0 } : {}}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${getVariantClasses()} ${disabled ? 'cursor-not-allowed pointer-events-none' : ''} ${className}`}
    >
      <motion.span 
        className="relative z-10 flex items-center gap-3"
        initial={false}
      >
        {children}
      </motion.span>
      
      {/* Cinematic Sensory Shimmer */}
      {!disabled && (variant === 'primary' || variant === 'accent') && (
        <>
          <motion.div 
            initial={{ left: '-100%' }}
            whileHover={{ left: '100%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[30deg] z-0"
          />
          <motion.div 
            initial={{ left: '-150%' }}
            whileHover={{ left: '150%' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="absolute top-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[30deg] z-0"
          />
        </>
      )}
      
      {/* Background Soft Glow on Hover */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.2 }}
        className="absolute inset-0 bg-white z-0 pointer-events-none transition-opacity duration-500"
      />
    </motion.button>
  );
};

export default Button;
