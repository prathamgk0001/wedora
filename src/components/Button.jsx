import React from 'react';
import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  onClick,
  icon: Icon,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none select-none disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#0F172A] text-white hover:bg-slate-800 shadow-md hover:shadow-lg shadow-slate-900/10 active:scale-95',
    secondary: 'bg-white/80 backdrop-blur-md text-[#0F172A] border border-white/80 shadow-sm hover:bg-white hover:border-slate-200 active:scale-95',
    blue: 'bg-[#60A5FA] text-white hover:bg-blue-500 shadow-md shadow-blue-500/20 active:scale-95',
    glass: 'bg-white/45 backdrop-blur-xl border border-white/60 text-[#0F172A] hover:bg-white/80 hover:border-white shadow-sm active:scale-95',
    ghost: 'text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/50',
    outline: 'border border-slate-300/80 text-[#0F172A] hover:bg-white hover:border-slate-400'
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-7 py-3.5 text-base gap-2.5 font-semibold'
  };

  return (
    <motion.button
      whileTap={{ scale: disabled ? 1 : 0.96 }}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4 shrink-0" />}
      {children}
    </motion.button>
  );
}
