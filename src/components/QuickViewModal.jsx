import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Truck } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import Button from './Button';

const formatINR = (price) => '₹' + price.toLocaleString('en-IN');

export default function QuickViewModal({ product, onClose }) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const [qty, setQty] = useState(1);

  if (!product) return null;
  const isSaved = isInWishlist(product.id);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/35 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative w-full max-w-3xl rounded-3xl bg-white/88 backdrop-blur-2xl border border-white p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.12)] z-10 overflow-hidden"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors shadow-sm z-20"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 shadow-inner">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            </div>

            <div>
              <span className="text-xs font-bold tracking-wider text-[#64748B] uppercase">
                {product.category.replace(/-/g, ' ')}
              </span>

              <h2 className="text-2xl font-extrabold text-[#0F172A] mt-1 mb-2">
                {product.title}
              </h2>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl font-extrabold text-[#0F172A]">
                  {formatINR(product.price)}
                </span>
                <div className="flex items-center gap-1 text-xs text-amber-500 font-bold px-2.5 py-1 rounded-full bg-amber-50">
                  <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                  <span>{product.rating}</span>
                </div>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                {product.description}
              </p>

              <div className="flex items-center gap-3 mb-6">
                <Button
                  variant="blue"
                  size="lg"
                  className="flex-1"
                  icon={ShoppingBag}
                  onClick={() => {
                    addToCart(product, qty);
                    onClose();
                  }}
                >
                  Add to Cart
                </Button>
                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-3.5 rounded-full border transition-all shadow-sm ${
                    isSaved
                      ? 'bg-rose-50 border-rose-200 text-rose-500'
                      : 'bg-white border-slate-200 text-slate-600 hover:text-rose-500'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-rose-500' : ''}`} />
                </button>
              </div>

              <div className="pt-4 border-t border-slate-200/60 grid grid-cols-2 gap-3 text-xs text-[#64748B]">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#3B82F6]" />
                  <span>Free Shipping India</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#3B82F6]" />
                  <span>100% Authenticity</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
