import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Search, RotateCcw, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import ProductGrid from '../components/ProductGrid';
import QuickViewModal from '../components/QuickViewModal';
import Button from '../components/Button';

export default function Products() {
  const { products, categories } = useShop();
  const [searchParams, setSearchParams] = useSearchParams();

  // State initialization from URL query parameters
  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || '';
  const filterParam = searchParams.get('filter') || 'all';

  const [selectedCat, setSelectedCat] = useState(categoryParam);
  const [searchTerm, setSearchTerm] = useState(searchParam);
  const [sortBy, setSortBy] = useState('featured');
  const [tagFilter, setTagFilter] = useState(filterParam);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Sync URL changes to local state
  useEffect(() => {
    setSelectedCat(searchParams.get('category') || 'all');
    setSearchTerm(searchParams.get('search') || '');
    setTagFilter(searchParams.get('filter') || 'all');
  }, [searchParams]);

  // Update query params on user selection
  const updateCategory = (catId) => {
    setSelectedCat(catId);
    const newParams = new URLSearchParams(searchParams);
    if (catId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', catId);
    }
    setSearchParams(newParams);
  };

  const handleReset = () => {
    setSelectedCat('all');
    setSearchTerm('');
    setTagFilter('all');
    setSortBy('featured');
    setSearchParams({});
  };

  // Filter & Sort Pipeline
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCat !== 'all' && product.category !== selectedCat) {
          return false;
        }

        // Tag filter (New / Trending)
        if (tagFilter === 'new' && !product.isNew) return false;
        if (tagFilter === 'trending' && !product.isTrending) return false;

        // Search Term filter
        if (searchTerm.trim()) {
          const term = searchTerm.toLowerCase();
          const matchesTitle = product.title.toLowerCase().includes(term);
          const matchesCategory = product.category.toLowerCase().includes(term);
          const matchesDesc = product.description.toLowerCase().includes(term);
          return matchesTitle || matchesCategory || matchesDesc;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0; // featured default
      });
  }, [products, selectedCat, searchTerm, tagFilter, sortBy]);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-10 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#60A5FA] text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Wedding Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-3">
          Explore Wedding Collections
        </h1>
        <p className="text-[#64748B] text-base">
          Browse through {products.length} luxury wedding items handcrafted for your unforgettable celebration.
        </p>
      </div>

      {/* Filter Toolbar */}
      <div className="mb-10 p-4 sm:p-6 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/70 shadow-sm space-y-6">
        {/* Top Row: Search Input & Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Local Search Input */}
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/80 border border-slate-200/80 text-sm text-[#0F172A] focus:outline-none focus:border-[#60A5FA]"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#64748B]" />
          </div>

          {/* Sort Dropdown & Tag Filters */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-1.5 bg-white/80 rounded-full p-1 border border-slate-200/80 text-xs font-semibold">
              <button
                onClick={() => setTagFilter('all')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  tagFilter === 'all' ? 'bg-[#0F172A] text-white shadow-sm' : 'text-[#64748B]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setTagFilter('new')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  tagFilter === 'new' ? 'bg-[#0F172A] text-white shadow-sm' : 'text-[#64748B]'
                }`}
              >
                New
              </button>
              <button
                onClick={() => setTagFilter('trending')}
                className={`px-3 py-1.5 rounded-full transition-all ${
                  tagFilter === 'trending' ? 'bg-[#0F172A] text-white shadow-sm' : 'text-[#64748B]'
                }`}
              >
                Trending
              </button>
            </div>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-[#64748B]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="py-2 px-3 rounded-full bg-white/80 border border-slate-200/80 text-xs font-semibold text-[#0F172A] focus:outline-none"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => updateCategory('all')}
            className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCat === 'all'
                ? 'bg-[#60A5FA] text-white shadow-md shadow-blue-500/20'
                : 'bg-white/70 text-[#64748B] hover:bg-white hover:text-[#0F172A]'
            }`}
          >
            All Categories ({products.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => updateCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCat === cat.id
                  ? 'bg-[#60A5FA] text-white shadow-md shadow-blue-500/20'
                  : 'bg-white/70 text-[#64748B] hover:bg-white hover:text-[#0F172A]'
              }`}
            >
              {cat.name} ({cat.itemCount})
            </button>
          ))}
        </div>
      </div>

      {/* Results Count & Reset */}
      <div className="flex items-center justify-between mb-6">
        <p className="text-sm font-semibold text-[#64748B]">
          Showing <span className="text-[#0F172A] font-bold">{filteredProducts.length}</span> items
        </p>

        {(selectedCat !== 'all' || searchTerm || tagFilter !== 'all') && (
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#60A5FA] hover:text-blue-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Filters
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <ProductGrid
          products={filteredProducts}
          onQuickView={(p) => setQuickViewProduct(p)}
        />
      ) : (
        <div className="py-20 text-center rounded-3xl bg-white/40 backdrop-blur-xl border border-white p-8">
          <p className="text-lg font-bold text-[#0F172A] mb-2">No matching products found</p>
          <p className="text-sm text-[#64748B] mb-6">
            Try adjusting your search criteria or resetting filters.
          </p>
          <Button variant="primary" onClick={handleReset} icon={RotateCcw}>
            Reset All Filters
          </Button>
        </div>
      )}

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </div>
  );
}
