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
    sm: 'px-6 py-2.5 text-xs',
    md: 'px-10 py-4 text-sm',
    lg: 'px-16 py-6 text-base font-black',
  };

  const baseClasses = "relative inline-flex items-center justify-center rounded-full transition-all duration-300 uppercase tracking-[0.2em] outline-none";
  
  const variantClasses = variant === 'primary' 
    ? "bg-nova-violet text-white nova-3d-button"
    : "border-2 border-nova-black text-nova-black hover:bg-nova-black hover:text-white";

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;