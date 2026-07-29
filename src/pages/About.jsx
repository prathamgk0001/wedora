import React from 'react';
import { Sparkles, ShieldCheck, Heart, Award, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function About() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#60A5FA] text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Our Atelier Story</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0F172A] tracking-tight mb-6">
          Redefining Wedding Luxury with iOS Simplicity.
        </h1>
        <p className="text-[#64748B] text-lg leading-relaxed">
          Wedora was born out of a desire to streamline wedding shopping — bringing together world-class bridal ateliers, certified jewellery houses, and artisan decorators into a seamless, Apple-inspired glass interface.
        </p>
      </div>

      {/* Main Feature Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-2 border-white">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80"
            alt="Wedora Craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-bold text-[#60A5FA] uppercase tracking-wider">
            Uncompromising Excellence
          </span>
          <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
            Every Detail Curated for Your Special Day.
          </h2>
          <p className="text-[#64748B] text-sm leading-relaxed">
            We partner exclusively with master weavers in Kanchipuram and Jaipur, hallmarked goldsmiths, and premier floral architects to deliver an unmatched standard of beauty.
          </p>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-blue-100/70 text-[#60A5FA] shrink-0 mt-1">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A]">Certified Quality Guarantee</h4>
                <p className="text-xs text-[#64748B]">All jewellery carries BIS Hallmark and IGI diamond certification.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-rose-100/70 text-rose-500 shrink-0 mt-1">
                <Heart className="w-4 h-4 fill-rose-500" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0F172A]">Bespoke Customization</h4>
                <p className="text-xs text-[#64748B]">Tailor embroidery patterns, metal finishes, and colors with our stylists.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/70 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-4xl font-extrabold text-[#0F172A]">5,000+</p>
          <p className="text-xs text-[#64748B] font-semibold mt-1">Happy Couples</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-[#0F172A]">10</p>
          <p className="text-xs text-[#64748B] font-semibold mt-1">Luxury Categories</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-[#0F172A]">100%</p>
          <p className="text-xs text-[#64748B] font-semibold mt-1">Insured Shipping</p>
        </div>
        <div>
          <p className="text-4xl font-extrabold text-[#0F172A]">24/7</p>
          <p className="text-xs text-[#64748B] font-semibold mt-1">Personal Concierge</p>
        </div>
      </div>
    </div>
  );
}
