import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

export default function CategoryCard({ category }) {
  // Dynamic Icon mapping
  const IconComponent = Icons[category.icon] || Icons.Sparkles;

  return (
    <Link to={`/products?category=${category.id}`}>
      <motion.div
        whileHover={{ y: -6, transition: { duration: 0.25 } }}
        className="group relative h-64 rounded-3xl overflow-hidden bg-white/45 backdrop-blur-xl border border-white/70 p-5 flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(96,165,250,0.18)] transition-all duration-300"
      >
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-full object-cover opacity-85 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
        </div>

        {/* Category Badge & Icon */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="p-3 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 text-white shadow-sm group-hover:bg-white group-hover:text-[#0F172A] transition-colors">
            <IconComponent className="w-5 h-5" />
          </div>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30">
            {category.itemCount} Items
          </span>
        </div>

        {/* Title & Description */}
        <div className="relative z-10 text-white">
          <h3 className="text-xl font-bold tracking-tight mb-1 group-hover:text-[#BFDBFE] transition-colors">
            {category.name}
          </h3>
          <p className="text-xs text-slate-200/90 line-clamp-2 leading-relaxed">
            {category.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
