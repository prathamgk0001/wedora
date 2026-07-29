import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onQuickView }) {
  if (!products || products.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-base text-[#64748B]">No items match your criteria.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
        />
      ))}
    </div>
  );
}
