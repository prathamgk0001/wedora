import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, Sparkles, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useShop } from '../context/ShopContext';
import SearchBar from './SearchBar';

export default function Navbar() {
  const { cartCount, wishlistCount } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-sm' : ''
        } glass-nav`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="h-16 flex items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div className="w-8 h-8 rounded-xl bg-[#3B82F6] flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                <Sparkles className="w-4.5 h-4.5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-[#0F172A]">
                Wedora
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#3B82F6] font-semibold'
                        : 'text-[#64748B] hover:text-[#0F172A]'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1 shrink-0">
              {/* Search icon */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 rounded-xl hover:bg-slate-100/70 text-[#64748B] hover:text-[#0F172A] transition-colors"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Icon */}
              <Link
                to="/wishlist"
                className="relative p-2.5 rounded-xl hover:bg-slate-100/70 text-[#64748B] hover:text-rose-500 transition-colors"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlistCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Button — Blue pill matching screenshot */}
              <Link
                to="/cart"
                className="relative ml-1 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#3B82F6] text-white text-sm font-semibold hover:bg-[#2563EB] transition-colors shadow-md shadow-blue-500/25"
                aria-label="Cart"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Cart</span>
                {cartCount > 0 && (
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white text-[#3B82F6] text-[10px] font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>

              {/* Auth Links */}
              <Link
                to="/login"
                className="hidden sm:block ml-2 px-4 py-2 rounded-xl text-sm font-semibold text-[#64748B] hover:text-[#0F172A] hover:bg-slate-100/70 transition-colors"
              >
                Login
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl hover:bg-slate-100/70 text-[#0F172A] transition-colors ml-1"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Search Dropdown */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="pb-3"
              >
                <SearchBar onSelect={() => setSearchOpen(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-4 top-[72px] z-40 lg:hidden overflow-hidden rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/80 p-4 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-blue-50 text-[#3B82F6]'
                        : 'text-[#0F172A] hover:bg-slate-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="mt-2 pt-2 border-t border-slate-200/60 flex gap-2">
                <Link to="/login" className="flex-1 text-center py-2.5 rounded-xl bg-slate-100 text-sm font-semibold text-[#0F172A]">
                  Login
                </Link>
                <Link to="/signup" className="flex-1 text-center py-2.5 rounded-xl bg-[#3B82F6] text-sm font-semibold text-white">
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
