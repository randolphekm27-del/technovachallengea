import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  // Fix: Add disabled prop to the interface to resolve TypeScript errors in pages/Participate.tsx
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  variant = 'primary',
  size = 'md',
  // Fix: Default disabled to false and destructure it from props
  disabled = false
}) => {
  const sizeClasses = {
    sm: 'px-8 py-3 text-[10px]',
    md: 'px-12 py-5 text-xs',
    lg: 'px-20 py-8 text-lg font-black',
  };

  const baseClasses = "relative inline-flex items-center justify-center rounded-full transition-all duration-300 uppercase tracking-[0.3em] outline-none select-none";
  
  // Fix: Add conditional styling for the disabled state to improve UX and visual feedback by dimming and removing interactive effects
  const variantClasses = variant === 'primary' 
    ? `bg-nova-violet text-white ${!disabled ? 'shadow-[0_10px_0_0_#5B21B6] hover:shadow-[0_5px_0_0_#5B21B6] hover:translate-y-[2px] active:shadow-none active:translate-y-[10px]' : 'opacity-50 grayscale shadow-none'}`
    : `border-2 border-nova-black text-nova-black ${!disabled ? 'hover:bg-nova-black hover:text-white' : 'opacity-50 grayscale'}`;

  return (
    <motion.button
      // Fix: Disable tap animation when the button is in a disabled state
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={disabled ? undefined : onClick}
      // Fix: Apply the native disabled attribute to the motion.button element
      disabled={disabled}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses} ${disabled ? 'cursor-not-allowed pointer-events-none' : ''} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;