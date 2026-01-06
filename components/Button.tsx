import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md'
}) => {
  const sizeClasses = {
    sm: 'px-8 py-3 text-[10px]',
    md: 'px-12 py-5 text-xs',
    lg: 'px-20 py-8 text-lg font-black',
  };

  const baseClasses = "relative inline-flex items-center justify-center rounded-full transition-all duration-300 uppercase tracking-[0.3em] outline-none select-none";
  
  const variantClasses = variant === 'primary' 
    ? "bg-nova-violet text-white shadow-[0_10px_0_0_#5B21B6] hover:shadow-[0_5px_0_0_#5B21B6] hover:translate-y-[2px] active:shadow-none active:translate-y-[10px]"
    : "border-2 border-nova-black text-nova-black hover:bg-nova-black hover:text-white";

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;