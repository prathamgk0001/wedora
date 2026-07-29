import React from 'react';
import { ShoppingBag, Trash2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import Button from './Button';

const formatINR = (price) => '₹' + price.toLocaleString('en-IN');

export default function WishlistItem({ product }) {
  const { addToCart, toggleWishlist } = useShop();

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 shadow-sm transition-all hover:bg-white/85">
      <Link to={`/product/${product.id}`} className="shrink-0">
        <img
          src={product.image}
          alt={product.title}
          className="w-20 h-24 sm:w-24 sm:h-24 object-cover rounded-2xl bg-slate-100"
        />
      </Link>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-[11px] font-semibold tracking-wider text-[#64748B] uppercase">
            {product.category.replace(/-/g, ' ')}
          </span>
          <div className="flex items-center gap-1 text-xs text-amber-500 font-semibold">
            <Star className="w-3 h-3 fill-amber-400 stroke-none" />
            <span>{product.rating}</span>
          </div>
        </div>
        <Link to={`/product/${product.id}`}>
          <h4 className="text-base font-bold text-[#0F172A] hover:text-[#3B82F6] transition-colors truncate">
            {product.title}
          </h4>
        </Link>
        <p className="text-sm font-extrabold text-[#0F172A] mt-1">
          {formatINR(product.price)}
        </p>
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200/50">
        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            addToCart(product);
            toggleWishlist(product);
          }}
          icon={ShoppingBag}
        >
          Move to Cart
        </Button>
        <button
          onClick={() => toggleWishlist(product)}
          className="p-2 text-slate-400 hover:text-rose-500 rounded-full hover:bg-rose-50 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
