import React, { useState, useRef, useEffect } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export default function SearchBar({ placeholder = "Search bridal wear, rings, decor...", onSelect }) {
  const { searchQuery, setSearchQuery, products } = useShop();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const results = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
    : [];

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsOpen(false);
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      if (onSelect) onSelect();
    }
  };

  const handleItemClick = (id) => {
    setIsOpen(false);
    navigate(`/product/${id}`);
    if (onSelect) onSelect();
  };

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md">
      <form onSubmit={handleSearchSubmit} className="relative flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-11 pr-10 py-2.5 rounded-full bg-white/50 backdrop-blur-xl border border-white/70 text-sm text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:bg-white/80 focus:border-[#60A5FA] focus:ring-4 focus:ring-blue-100/50 transition-all duration-200"
        />
        <Search className="absolute left-4 w-4 h-4 text-[#64748B] pointer-events-none" />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 p-1 text-[#64748B] hover:text-[#0F172A] transition-colors rounded-full hover:bg-slate-200/50"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </form>

      {/* Live Dropdown Results */}
      {isOpen && searchQuery.trim().length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 py-2 rounded-2xl bg-white/90 backdrop-blur-2xl border border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-50 overflow-hidden">
          {results.length > 0 ? (
            <div>
              <div className="px-4 py-1.5 text-[11px] font-semibold tracking-wider text-[#64748B] uppercase">
                Products ({results.length})
              </div>
              {results.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleItemClick(product.id)}
                  className="w-full px-4 py-2.5 flex items-center gap-3 text-left hover:bg-blue-50/60 transition-colors group"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-10 h-10 object-cover rounded-xl shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#0F172A] truncate group-hover:text-[#60A5FA] transition-colors">
                      {product.title}
                    </p>
                    <p className="text-xs text-[#64748B]">
                      ${product.price.toLocaleString()}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#64748B] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </button>
              ))}
              <button
                onClick={handleSearchSubmit}
                className="w-full text-center py-2.5 text-xs font-semibold text-[#60A5FA] hover:bg-blue-50/50 transition-colors border-t border-slate-100"
              >
                View all results for "{searchQuery}"
              </button>
            </div>
          ) : (
            <div className="px-4 py-6 text-center text-xs text-[#64748B]">
              No products found matching "{searchQuery}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
