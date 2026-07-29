import React from 'react';
import { motion } from 'framer-motion';

export default function Loader({ label = "Loading Wedora..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] w-full py-12">
      <div className="relative w-16 h-16 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
          className="w-12 h-12 border-3 border-[#BFDBFE] border-t-[#60A5FA] rounded-full"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-[#60A5FA] rounded-full animate-ping" />
        </div>
      </div>
      {label && (
        <p className="mt-4 text-xs font-medium text-[#64748B] tracking-wider uppercase">
          {label}
        </p>
      )}
    </div>
  );
}
