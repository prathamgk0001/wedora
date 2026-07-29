import React, { useState } from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Tag, Trash2, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import CartItem from '../components/CartItem';
import Button from '../components/Button';

const formatINR = (price) => '₹' + price.toLocaleString('en-IN');

export default function Cart() {
  const { cart, cartTotal, clearCart } = useShop();
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  // Calculations
  const shipping = cartTotal > 1000 ? 0 : 49;
  const tax = Math.round(cartTotal * 0.08);
  const discount = promoApplied ? Math.round(cartTotal * 0.1) : 0;
  const grandTotal = Math.max(0, cartTotal + shipping + tax - discount);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toLowerCase() === 'wedora10' || promoCode.trim().length > 2) {
      setPromoApplied(true);
    }
  };

  const handleSimulateCheckout = (e) => {
    e.preventDefault();
    setOrderComplete(true);
    setTimeout(() => {
      clearCart();
    }, 1500);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Your Shopping Cart
          </h1>
          <p className="text-sm text-[#64748B] mt-1">
            Review your selected wedding items before placing your order.
          </p>
        </div>

        {cart.length > 0 && (
          <button
            onClick={clearCart}
            className="text-xs font-semibold text-rose-500 hover:text-rose-600 flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear Cart
          </button>
        )}
      </div>

      {cart.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart Items Column */}
          <div className="lg:col-span-7 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>

          {/* Order Summary Glass Card Column */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 p-6 sm:p-8 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/80 shadow-[0_15px_35px_rgba(0,0,0,0.04)] space-y-6">
              <h3 className="text-xl font-bold text-[#0F172A]">Order Summary</h3>

              {/* Price Rows */}
              <div className="space-y-3 text-sm text-[#64748B] pt-2 border-t border-slate-200/60">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                   <span className="font-semibold text-[#0F172A]">
                    {formatINR(cartTotal)}
                   </span>
                </div>

                <div className="flex justify-between">
                  <span>Estimated Tax (8%)</span>
                   <span className="font-semibold text-[#0F172A]">
                    {formatINR(tax)}
                   </span>
                </div>

                <div className="flex justify-between">
                  <span>Insured Express Shipping</span>
                  <span className="font-semibold text-[#0F172A]">
                    {shipping === 0 ? (
                      <span className="text-emerald-600">Complimentary</span>
                    ) : (
                      formatINR(shipping)
                    )}
                  </span>
                </div>

                {promoApplied && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Promo Discount (10%)</span>
                    <span>-{formatINR(discount)}</span>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-200/60 flex justify-between text-lg font-bold text-[#0F172A]">
                  <span>Total</span>
                   <span>{formatINR(grandTotal)}</span>
                </div>
              </div>

              {/* Promo Code Form */}
              <form onSubmit={handleApplyPromo} className="flex gap-2 pt-2">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Promo code (e.g. WEDORA10)"
                    disabled={promoApplied}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-white/80 border border-slate-200 text-xs font-semibold text-[#0F172A] focus:outline-none focus:border-[#60A5FA]"
                  />
                  <Tag className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
                </div>
                <Button variant="outline" size="sm" type="submit" disabled={promoApplied}>
                  {promoApplied ? 'Applied' : 'Apply'}
                </Button>
              </form>

              {/* Checkout Button */}
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                icon={ShoppingBag}
                onClick={() => setCheckoutModalOpen(true)}
              >
                Proceed to Checkout
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#64748B]">
                <ShieldCheck className="w-4 h-4 text-[#60A5FA]" />
                <span>Encrypted 256-Bit SSL Checkout Security</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 px-4 text-center rounded-3xl bg-white/40 backdrop-blur-xl border border-white max-w-md mx-auto">
          <div className="w-16 h-16 rounded-full bg-blue-50 text-[#60A5FA] flex items-center justify-center mx-auto mb-4">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-[#0F172A] mb-2">Your cart is empty</h3>
          <p className="text-sm text-[#64748B] mb-6">
            Explore our handcrafted bridal wear, rings, and decor to add items to your cart.
          </p>
          <Link to="/products">
            <Button variant="primary" icon={ArrowRight}>
              Shop Wedding Collection
            </Button>
          </Link>
        </div>
      )}

      {/* Checkout UI Modal */}
      <AnimatePresence>
        {checkoutModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setCheckoutModalOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg rounded-3xl bg-white/90 backdrop-blur-2xl border border-white p-6 sm:p-8 shadow-2xl z-10"
            >
              <button
                onClick={() => setCheckoutModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>

              {!orderComplete ? (
                <div>
                  <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                    Complete Your Order
                  </h3>
                  <p className="text-xs text-[#64748B] mb-6">
                    Enter shipping details to simulate Wedora Concierge checkout.
                  </p>

                  <form onSubmit={handleSimulateCheckout} className="space-y-4 text-xs">
                    <div>
                      <label className="block font-semibold text-[#0F172A] mb-1">Full Name</label>
                      <input
                        required
                        type="text"
                        defaultValue="Sophia Bennett"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 font-medium"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block font-semibold text-[#0F172A] mb-1">Email</label>
                        <input
                          required
                          type="email"
                          defaultValue="sophia@example.com"
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 font-medium"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold text-[#0F172A] mb-1">Phone</label>
                        <input
                          required
                          type="tel"
                          defaultValue="+1 (555) 234-5678"
                          className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 font-medium"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold text-[#0F172A] mb-1">Shipping Address</label>
                      <input
                        required
                        type="text"
                        defaultValue="742 Evergreen Terrace, New York, NY"
                        className="w-full px-3 py-2 rounded-xl bg-white border border-slate-200 font-medium"
                      />
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex justify-between items-center text-sm font-bold text-[#0F172A]">
                      <span>Total Amount:</span>
                      <span className="text-base text-[#60A5FA]">${grandTotal.toLocaleString()}</span>
                    </div>

                    <Button variant="primary" size="lg" className="w-full mt-4" type="submit">
                      Place Test Order (${grandTotal.toLocaleString()})
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0F172A]">
                    Order Placed Successfully!
                  </h3>
                  <p className="text-xs text-[#64748B] max-w-xs mx-auto">
                    Thank you for choosing Wedora. A confirmation has been sent to your email and your concierge assistant will contact you shortly.
                  </p>
                  <Button variant="primary" onClick={() => setCheckoutModalOpen(false)}>
                    Done
                  </Button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
