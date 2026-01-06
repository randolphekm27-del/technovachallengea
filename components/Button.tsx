
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
    md: 'px-8 py-3 text-sm',
    lg: 'px-12 py-5 text-base font-bold',
  };

  const baseClasses = "relative inline-flex items-center justify-center rounded-full transition-all duration-200 uppercase tracking-widest";
  
  const variantClasses = variant === 'primary' 
    ? "bg-nova-violet text-white nova-3d-button hover:bg-nova-violet-dark active:translate-y-0.5"
    : "border-2 border-nova-black text-nova-black hover:bg-nova-black hover:text-white";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
