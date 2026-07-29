import React, { useState } from 'react';
import { Sparkles, Search } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import CategoryCard from '../components/CategoryCard';

export default function Categories() {
  const { categories } = useShop();
  const [filterQuery, setFilterQuery] = useState('');

  const filtered = categories.filter((cat) =>
    cat.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#60A5FA] text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complete Wedding Suite</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-3">
          Browse by Category
        </h1>
        <p className="text-[#64748B] text-base">
          From royal bridal lehengas to bespoke invitations and mandap decor, discover all 10 wedding departments.
        </p>

        {/* Filter input */}
        <div className="relative max-w-md mx-auto mt-8">
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Search categories (e.g. Jewellery, Groom, Decor)..."
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white/60 backdrop-blur-xl border border-white/80 text-sm text-[#0F172A] focus:outline-none focus:border-[#60A5FA]"
          />
          <Search className="absolute left-4 top-3.5 w-4 h-4 text-[#64748B]" />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((cat) => (
          <CategoryCard key={cat.id} category={cat} />
        ))}
      </div>
    </div>
  );
}
