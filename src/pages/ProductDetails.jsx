import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Minus, Plus, ArrowLeft } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const formatINR = (price) => '₹' + price.toLocaleString('en-IN');
import ProductGrid from '../components/ProductGrid';
import QuickViewModal from '../components/QuickViewModal';
import Button from '../components/Button';
import Loader from '../components/Loader';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, toggleWishlist, isInWishlist } = useShop();

  const [quantity, setQuantity] = useState(1);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="pt-36 pb-20 max-w-xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-3">Product Not Found</h2>
        <p className="text-sm text-[#64748B] mb-6">
          The requested luxury wedding item could not be located.
        </p>
        <Button variant="primary" onClick={() => navigate('/products')} icon={ArrowLeft}>
          Back to Catalog
        </Button>
      </div>
    );
  }

  const isSaved = isInWishlist(product.id);
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back Link */}
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2 text-xs font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to products</span>
      </button>

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Column: Image Showcase */}
        <div className="lg:col-span-6 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
            {product.isNew && (
              <span className="absolute top-4 left-4 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0F172A] bg-white/80 backdrop-blur-md rounded-full shadow-sm">
                New Arrival
              </span>
            )}
          </motion.div>
        </div>

        {/* Right Column: Info & Actions */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-semibold tracking-wider text-[#60A5FA] uppercase">
                {product.category.replace('-', ' ')}
              </span>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold">
                <Star className="w-3.5 h-3.5 fill-amber-400 stroke-none" />
                <span>{product.rating} / 5.0 Rating</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight mb-4">
              {product.title}
            </h1>

            <div className="text-3xl font-extrabold text-[#0F172A] mb-6">
              {formatINR(product.price)}
            </div>

            <p className="text-[#64748B] text-base leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Product Specifications Table */}
            {product.specs && (
              <div className="mb-8 p-5 rounded-2xl bg-white/50 backdrop-blur-xl border border-white/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-3">
                  Product Specifications
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  {Object.entries(product.specs).map(([key, val]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-[#64748B] font-medium">{key}</span>
                      <span className="text-[#0F172A] font-semibold">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Stepper & CTA Row */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-[#64748B] uppercase">Quantity:</span>
                <div className="flex items-center rounded-full bg-white/80 border border-slate-200 p-1 shadow-sm">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-bold text-[#0F172A]">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1"
                  icon={ShoppingBag}
                  onClick={() => addToCart(product, quantity)}
                >
                  Add to Cart
                </Button>

                <button
                  onClick={() => toggleWishlist(product)}
                  className={`p-4 rounded-full border transition-all shadow-sm ${
                    isSaved
                      ? 'bg-rose-50 border-rose-200 text-rose-500'
                      : 'bg-white/80 border-white text-slate-700 hover:text-rose-500'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isSaved ? 'fill-rose-500' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="pt-6 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#64748B]">
            <div className="flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-[#60A5FA]" />
              <span>Free Insured Delivery</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
              <span>Certified Hallmark</span>
            </div>
            <div className="flex items-center gap-2.5">
              <RotateCcw className="w-4 h-4 text-[#60A5FA]" />
              <span>14-Day Atelier Returns</span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="pt-12 border-t border-slate-200/60">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">
              You May Also Love
            </h3>
            <p className="text-sm text-[#64748B]">
              Similar items in {product.category.replace('-', ' ')}
            </p>
          </div>

          <ProductGrid
            products={relatedProducts}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        </section>
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
