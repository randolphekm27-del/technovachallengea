
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
    sm: 'px-5 py-2 text-[9px]',
    md: 'px-8 py-3.5 text-[10px]',
    lg: 'px-12 py-5 text-sm font-black',
  };

  const baseClasses = "relative inline-flex items-center justify-center rounded-full transition-all duration-700 uppercase tracking-[0.3em] outline-none select-none overflow-hidden group";
  
  const getVariantClasses = () => {
    if (disabled) return 'opacity-40 grayscale shadow-none';
    
    switch (variant) {
      case 'primary':
      case 'accent':
        return 'bg-nova-red text-white shadow-[0_6px_0_0_#800800] active:shadow-none active:translate-y-[6px]';
      case 'outline':
        return 'border border-nova-black text-nova-black hover:bg-nova-black hover:text-white';
      default:
        return '';
    }
  };

  return (
    <motion.button
      whileHover={!disabled ? { 
        scale: 1.02, 
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 15 } 
      } : {}}
      whileTap={!disabled ? { scale: 0.98, y: 0 } : {}}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${getVariantClasses()} ${disabled ? 'cursor-not-allowed pointer-events-none' : ''} ${className}`}
    >
      <motion.span 
        className="relative z-10 flex items-center gap-2"
        initial={false}
      >
        {children}
      </motion.span>
      
      {!disabled && (variant === 'primary' || variant === 'accent') && (
        <>
          <motion.div 
            initial={{ left: '-100%' }}
            whileHover={{ left: '100%' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-0 w-2/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[30deg] z-0"
          />
        </>
      )}
    </motion.button>
  );
};

export default Button;
