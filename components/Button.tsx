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
    sm: 'px-6 py-2 text-xs',
    md: 'px-8 py-3.5 text-sm',
    lg: 'px-14 py-5 text-base font-black',
  };

  const baseClasses = "relative inline-flex items-center justify-center rounded-full transition-all duration-200 uppercase tracking-widest outline-none";
  
  const variantClasses = variant === 'primary' 
    ? "bg-nova-violet text-white nova-3d-button active:shadow-none"
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