import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ShoppingBag, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

// Format price to Indian Rupees
const formatINR = (price) =>
  '₹' + price.toLocaleString('en-IN');

export default function ProductCard({ product, onQuickView }) {
  const { addToCart, toggleWishlist, isInWishlist } = useShop();
  const isSaved = isInWishlist(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative rounded-3xl bg-white/55 backdrop-blur-xl border border-white/80 p-3.5 shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(59,130,246,0.12)] hover:bg-white/80 hover:border-white transition-all duration-300 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-100 mb-3.5">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isNew && (
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#0F172A] bg-white/90 backdrop-blur-md rounded-full shadow-sm">
              New
            </span>
          )}
          {product.isTrending && (
            <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-[#3B82F6] rounded-full shadow-sm">
              Trending
            </span>
          )}
        </div>

        {/* Floating Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product);
            }}
            aria-label="Wishlist"
            className={`p-2.5 rounded-full backdrop-blur-md transition-all duration-200 shadow-sm ${
              isSaved
                ? 'bg-rose-500 text-white'
                : 'bg-white/80 hover:bg-white text-slate-600 hover:text-rose-500'
            }`}
          >
            <Heart className={`w-4 h-4 ${isSaved ? 'fill-white' : ''}`} />
          </button>

          {onQuickView && (
            <button
              onClick={(e) => {
                e.preventDefault();
                onQuickView(product);
              }}
              aria-label="Quick view"
              className="p-2.5 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-[#3B82F6] backdrop-blur-md transition-all duration-200 shadow-sm opacity-0 group-hover:opacity-100"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Add overlay on hover */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            onClick={() => addToCart(product)}
            className="w-full py-2.5 px-4 rounded-xl bg-white/92 backdrop-blur-md text-[#0F172A] text-xs font-bold hover:bg-[#3B82F6] hover:text-white transition-colors duration-200 flex items-center justify-center gap-2 shadow-lg"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-1 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-[11px] font-semibold tracking-wide uppercase text-[#64748B]">
              {product.category.replace(/-/g, ' ')}
            </span>
            <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
              <span>{product.rating}</span>
            </div>
          </div>

          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm font-bold text-[#0F172A] line-clamp-1 mb-1 hover:text-[#3B82F6] transition-colors">
              {product.title}
            </h3>
          </Link>
        </div>

        <div className="flex items-center justify-between mt-2 pt-2 border-t border-slate-200/60">
          <span className="text-base font-extrabold text-[#0F172A]">
            {formatINR(product.price)}
          </span>
          <Link
            to={`/product/${product.id}`}
            className="text-xs font-bold text-[#3B82F6] hover:text-blue-700 transition-colors"
          >
            Details →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
