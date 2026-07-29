import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, HeartHandshake, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85"
          alt="Wedding background"
          className="w-full h-full object-cover object-center"
        />
        {/* Light overlay to keep everything bright & airy */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F8FBFF]/95 via-[#EFF6FF]/88 to-[#F8FBFF]/55" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[calc(100vh-80px)]">

          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start justify-center py-12"
          >
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-blue-100 text-xs font-semibold text-[#0F172A] shadow-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Your Dream Wedding Awaits</span>
            </div>

            {/* Main Heading — matching screenshot layout */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] leading-[1.1] mb-5">
              Everything for{' '}
              <span className="text-[#3B82F6]">
                Your Perfect
              </span>{' '}
              Wedding Day
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#475569] max-w-lg font-normal leading-relaxed mb-8">
              From bridal wear to exquisite jewellery, elegant decorations to personalized gifts — curate your dream wedding with Wedora's premium collection.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/products">
                <button className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl btn-primary-blue text-sm font-bold">
                  Shop Collection
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              <Link to="/categories">
                <button className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white/80 backdrop-blur-md border border-slate-200 text-sm font-bold text-[#0F172A] hover:bg-white hover:shadow-md transition-all">
                  Browse Categories
                </button>
              </Link>
            </div>

            {/* Stats Row */}
            <div className="mt-12 pt-8 border-t border-slate-200/60 grid grid-cols-3 gap-6 w-full max-w-sm">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">30+</p>
                <p className="text-xs text-[#64748B] font-medium mt-0.5">Products</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">10</p>
                <p className="text-xs text-[#64748B] font-medium mt-0.5">Categories</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">5K+</p>
                <p className="text-xs text-[#64748B] font-medium mt-0.5">Happy Brides</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Floating Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex items-center justify-center py-8"
          >
            {/* Floating Premium Quality badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-6 right-6 z-20 flex items-center gap-2 px-4 py-2 rounded-2xl glass-card-hero shadow-lg"
            >
              <span className="text-lg">✨</span>
              <span className="text-xs font-bold text-[#0F172A]">Premium Quality</span>
            </motion.div>

            {/* Main product image card */}
            <div className="relative w-full max-w-md">
              <div className="aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85"
                  alt="Royal Bridal Collection"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom info glass card — exactly like screenshot */}
              <div className="absolute -bottom-5 left-4 right-4 p-5 rounded-2xl glass-card-hero">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-[#0F172A] mb-0.5">
                      Royal Bridal Collection
                    </h3>
                    <p className="text-xs text-[#64748B]">
                      Handcrafted lehengas & sarees for the modern bride
                    </p>
                    <p className="text-base font-extrabold text-[#3B82F6] mt-2">
                      ₹18,500+
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <div className="flex items-center gap-1 text-xs font-bold text-[#0F172A]">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>4.9</span>
                    </div>
                    <Link to="/products?category=bridal-wear">
                      <button className="px-4 py-1.5 rounded-lg bg-[#3B82F6] text-white text-xs font-bold hover:bg-[#2563EB] transition-colors">
                        Explore
                      </button>
                    </Link>
                  </div>
                </div>

                {/* Category count */}
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-[#64748B] font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>30+ Categories</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
