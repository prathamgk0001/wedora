import React from 'react';
import { Heart, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import WishlistItem from '../components/WishlistItem';
import Button from '../components/Button';

export default function Wishlist() {
  const { wishlist, addToCart, toggleWishlist } = useShop();

  const handleMoveAllToCart = () => {
    wishlist.forEach((product) => {
      addToCart(product);
      toggleWishlist(product);
    });
  };

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight flex items-center gap-3">
            <span>Your Saved Wishlist</span>
            <span className="px-3 py-1 rounded-full bg-rose-50 text-rose-500 text-xs font-bold">
              {wishlist.length} Items
            </span>
          </h1>
          <p className="text-sm text-[#64748B] mt-1">
            Curate your dream bridal trousseau and save products for later.
          </p>
        </div>

        {wishlist.length > 0 && (
          <Button variant="primary" size="sm" icon={ShoppingBag} onClick={handleMoveAllToCart}>
            Move All to Cart
          </Button>
        )}
      </div>

      {/* Wishlist List or Empty State */}
      {wishlist.length > 0 ? (
        <div className="space-y-4">
          {wishlist.map((product) => (
            <WishlistItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* Empty State Illustration */
        <div className="py-20 px-4 text-center rounded-3xl bg-white/40 backdrop-blur-xl border border-white max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-rose-100/70 text-rose-500 flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 fill-rose-500/20" />
          </div>
          <h3 className="text-xl font-bold text-[#0F172A] mb-2">Your wishlist is empty</h3>
          <p className="text-sm text-[#64748B] mb-6">
            Tap the heart icon on any wedding item to save it to your personal luxury moodboard.
          </p>
          <Link to="/products">
            <Button variant="primary" icon={ArrowRight}>
              Explore Wedding Collection
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
