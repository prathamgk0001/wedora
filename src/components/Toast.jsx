import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Heart, Info, CheckCircle2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export default function Toast() {
  const { toast } = useShop();

  if (!toast.show) return null;

  const icons = {
    cart: <ShoppingBag className="w-4 h-4 text-[#60A5FA]" />,
    wishlist: <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />,
    info: <CheckCircle2 className="w-4 h-4 text-emerald-500" />
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-white/80 backdrop-blur-2xl border border-white shadow-[0_15px_35px_rgba(0,0,0,0.08)] text-[#0F172A] text-sm font-medium"
      >
        <div className="p-2 rounded-xl bg-blue-50/80 shrink-0">
          {icons[toast.type] || <Info className="w-4 h-4 text-blue-500" />}
        </div>
        <p className="pr-2">{toast.message}</p>
      </motion.div>
    </AnimatePresence>
  );
}
