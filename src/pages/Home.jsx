import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Star, Award, ShieldCheck, Heart } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import Hero from '../components/Hero';
import CategoryCard from '../components/CategoryCard';
import ProductGrid from '../components/ProductGrid';
import QuickViewModal from '../components/QuickViewModal';
import Button from '../components/Button';

export default function Home() {
  const { products, categories } = useShop();
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Filter sections
  const trendingProducts = products.filter((p) => p.isTrending).slice(0, 4);
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
  const featuredCategories = categories.slice(0, 6);

  return (
    <div className="space-y-24">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#60A5FA] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Couture & Essentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Browse Wedding Categories
            </h2>
          </div>
          <Link to="/categories">
            <Button variant="ghost" icon={ArrowRight} className="group">
              View All 10 Categories
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCategories.map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* 3. Trending Collections Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#60A5FA] text-xs font-semibold uppercase tracking-wider mb-2">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Curated Selection</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              Trending Bridal Favorites
            </h2>
          </div>
          <Link to="/products">
            <Button variant="outline">Explore All Products</Button>
          </Link>
        </div>

        <ProductGrid
          products={trendingProducts}
          onQuickView={(p) => setQuickViewProduct(p)}
        />
      </section>

      {/* 4. Luxury Glass Banner Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-100/50 via-white/60 to-blue-50/50 backdrop-blur-2xl border border-white p-8 sm:p-14 shadow-[0_20px_50px_rgba(96,165,250,0.1)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-[#0F172A] text-white text-xs font-bold uppercase tracking-wider">
                Bespoke Atelier
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] leading-tight">
                Crafted for Moments That Last Forever.
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed max-w-xl">
                Every Kundan stone, pure zari weave, and diamond setting in our collection is certified and handcrafted by master artisans across India and Milan.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/products?category=bridal-wear">
                  <Button variant="primary" size="lg" icon={ArrowRight}>
                    Discover Bridal Wear
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="secondary" size="lg">
                    Our Quality Promise
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80"
                  alt="Jewellery Mastercraft"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. New Arrivals Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#60A5FA] text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Just Arrived</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight">
              New 2026 Collection
            </h2>
          </div>
          <Link to="/products?filter=new">
            <Button variant="ghost" icon={ArrowRight}>
              View All New
            </Button>
          </Link>
        </div>

        <ProductGrid
          products={newArrivals}
          onQuickView={(p) => setQuickViewProduct(p)}
        />
      </section>

      {/* 6. Why Choose Wedora */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/70 shadow-sm text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-100/70 text-[#60A5FA] flex items-center justify-center mb-5">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">Master Craftsmanship</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Every item passes 18 meticulous quality inspections by senior couture specialists.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/70 shadow-sm text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-blue-100/70 text-[#60A5FA] flex items-center justify-center mb-5">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">Hallmark & Authenticity</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              Certified 22K Gold, VVS Lab-grown Solitaires, and authentic handloom pure zari guarantee.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/70 shadow-sm text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl bg-rose-100/70 text-rose-500 flex items-center justify-center mb-5">
              <Heart className="w-7 h-7 fill-rose-500" />
            </div>
            <h3 className="text-lg font-bold text-[#0F172A] mb-2">Dedicated Concierge</h3>
            <p className="text-sm text-[#64748B] leading-relaxed">
              1-on-1 virtual styling assistance to ensure your outfit fits perfectly for your big day.
            </p>
          </div>
        </div>
      </section>

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
