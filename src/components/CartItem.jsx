import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

const formatINR = (price) => '₹' + price.toLocaleString('en-IN');

export default function CartItem({ item }) {
  const { updateCartQuantity, removeFromCart } = useShop();
  const { product, quantity } = item;

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
        <span className="text-[11px] font-semibold tracking-wider text-[#64748B] uppercase">
          {product.category.replace(/-/g, ' ')}
        </span>
        <Link to={`/product/${product.id}`}>
          <h4 className="text-base font-bold text-[#0F172A] hover:text-[#3B82F6] transition-colors truncate">
            {product.title}
          </h4>
        </Link>
        <p className="text-sm font-bold text-[#0F172A] mt-1">
          {formatINR(product.price)}
        </p>
      </div>

      <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4 mt-2 sm:mt-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-200/50">
        <div className="flex items-center rounded-full bg-white border border-slate-200 p-1 shadow-sm">
          <button
            onClick={() => updateCartQuantity(product.id, quantity - 1)}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          <span className="w-8 text-center text-sm font-bold text-[#0F172A]">
            {quantity}
          </span>
          <button
            onClick={() => updateCartQuantity(product.id, quantity + 1)}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="text-right min-w-[100px]">
          <span className="text-sm font-extrabold text-[#0F172A]">
            {formatINR(product.price * quantity)}
          </span>
        </div>

        <button
          onClick={() => removeFromCart(product.id)}
          className="p-2 text-slate-400 hover:text-rose-500 rounded-full hover:bg-rose-50 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
