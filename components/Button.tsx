
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
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
  
  const variantClasses = variant === 'primary' 
    ? `bg-nova-violet text-white ${!disabled ? 'shadow-[0_10px_0_0_#5B21B6] active:shadow-none active:translate-y-[10px]' : 'opacity-50 grayscale shadow-none'}`
    : `border-2 border-nova-black text-nova-black ${!disabled ? 'hover:bg-nova-black hover:text-white' : 'opacity-50 grayscale'}`;

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
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses} ${disabled ? 'cursor-not-allowed pointer-events-none' : ''} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {!disabled && variant === 'primary' && (
        <motion.div 
          initial={{ x: '-150%' }}
          whileHover={{ x: '150%' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -z-0"
        />
      )}
    </motion.button>
  );
};

export default Button;
