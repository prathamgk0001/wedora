import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Instagram, Facebook, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/60 bg-white/40 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & About Column */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-[#60A5FA] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="text-xl font-extrabold text-[#0F172A] tracking-tight">
                  Wedora
                </span>
              </Link>
              <p className="text-sm text-[#64748B] max-w-sm leading-relaxed mb-6">
                Redefining wedding shopping with Apple-inspired luxury, glassmorphic clarity, and curated artisan bridal collections. Everything for your dream wedding.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/70 hover:bg-white text-slate-700 hover:text-[#60A5FA] border border-white/80 shadow-sm transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/70 hover:bg-white text-slate-700 hover:text-[#60A5FA] border border-white/80 shadow-sm transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/70 hover:bg-white text-slate-700 hover:text-[#60A5FA] border border-white/80 shadow-sm transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#64748B]">
              <li>
                <Link to="/" className="hover:text-[#60A5FA] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#60A5FA] transition-colors">
                  Shop Collection
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-[#60A5FA] transition-colors">
                  Wedding Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#60A5FA] transition-colors">
                  Our Atelier Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#60A5FA] transition-colors">
                  Concierge Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-4">
              Featured Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-[#64748B]">
              <li>
                <Link to="/products?category=bridal-wear" className="hover:text-[#60A5FA] transition-colors">
                  Bridal Lehengas & Sarees
                </Link>
              </li>
              <li>
                <Link to="/products?category=groom-wear" className="hover:text-[#60A5FA] transition-colors">
                  Royal Groom Sherwanis
                </Link>
              </li>
              <li>
                <Link to="/products?category=jewellery" className="hover:text-[#60A5FA] transition-colors">
                  Heritage Kundan & Diamonds
                </Link>
              </li>
              <li>
                <Link to="/products?category=wedding-rings" className="hover:text-[#60A5FA] transition-colors">
                  Solitaire Wedding Bands
                </Link>
              </li>
              <li>
                <Link to="/products?category=decoration" className="hover:text-[#60A5FA] transition-colors">
                  Mandap & Floral Stage Decor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Concierge */}
          <div>
            <h4 className="text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-4">
              Concierge Desk
            </h4>
            <div className="space-y-3 text-sm text-[#64748B]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <span>5th Avenue Atelier, NY 10001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <span>concierge@wedora.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#60A5FA] shrink-0" />
                <span>+1 (800) 933-6721</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>© {new Date().getFullYear()} Wedora Inc. All rights reserved.</p>
          <div className="flex items-center gap-1 font-medium">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for your special day.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
