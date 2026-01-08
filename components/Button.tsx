
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

  const baseClasses = "relative inline-flex items-center justify-center rounded-full transition-all duration-500 uppercase tracking-[0.3em] outline-none select-none overflow-hidden group";
  
  const getVariantClasses = () => {
    if (disabled) return 'opacity-50 grayscale shadow-none';
    
    switch (variant) {
      case 'primary':
      case 'accent':
        // Utilisation du rouge spécifique #9d0a00 pour tous les boutons pleins
        return 'bg-nova-red text-white shadow-[0_10px_0_0_#800800] active:shadow-none active:translate-y-[10px]';
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
        y: -2,
        transition: { type: "spring", stiffness: 400, damping: 15 } 
      } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${getVariantClasses()} ${disabled ? 'cursor-not-allowed pointer-events-none' : ''} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Effet Shine Cristallin (Balayage Laser) */}
      {!disabled && (variant === 'primary' || variant === 'accent') && (
        <>
          <motion.div 
            initial={{ left: '-100%' }}
            whileHover={{ left: '100%' }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[35deg] z-0"
          />
          <motion.div 
            initial={{ left: '-150%' }}
            whileHover={{ left: '150%' }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
            className="absolute top-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[35deg] z-0"
          />
        </>
      )}
    </motion.button>
  );
};

export default Button;
