import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: '', password: '', remember: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password) {
      setError('Please fill in all fields.');
      return;
    }
    setLoading(true);
    // Simulate auth delay
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1200);
  };

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* LEFT PANEL — decorative wedding image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85"
          alt="Wedora Wedding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF]/80 via-[#DBEAFE]/60 to-[#0F172A]/20" />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-[#3B82F6] flex items-center justify-center text-white shadow-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Wedora
            </span>
          </Link>

          {/* Feature Cards */}
          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 text-white">
              <h3 className="font-bold text-lg mb-1">Your Dream Wedding Awaits</h3>
              <p className="text-sm text-white/80">
                Access exclusive bridal collections, track your orders, and save your favourite picks.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '30+', label: 'Products' },
                { value: '10', label: 'Categories' },
                { value: '5K+', label: 'Happy Brides' },
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-center text-white">
                  <p className="text-xl font-extrabold">{stat.value}</p>
                  <p className="text-xs font-medium text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — Glass login form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 bg-[#F8FBFF]">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <div className="w-9 h-9 rounded-2xl bg-[#3B82F6] flex items-center justify-center text-white">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold text-[#0F172A]">Wedora</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="p-8 sm:p-10 rounded-3xl bg-white/70 backdrop-blur-2xl border border-white shadow-[0_20px_60px_rgba(96,165,250,0.10)]"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-3">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Welcome Back</span>
              </div>
              <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
                Sign in to Wedora
              </h1>
              <p className="text-sm text-[#64748B] mt-1.5">
                Access your wishlist, orders & luxury bridal lookbook.
              </p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-4 p-3 rounded-2xl bg-rose-50 border border-rose-100 text-xs font-semibold text-rose-600 text-center">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3 rounded-2xl glass-input text-sm font-medium text-[#0F172A] placeholder-[#94A3B8]"
                  />
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-[#94A3B8]" />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-xs font-bold text-[#0F172A]">Password</label>
                  <button type="button" className="text-xs font-semibold text-[#3B82F6] hover:text-blue-700 transition-colors">
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="Enter your password"
                    className="w-full pl-11 pr-12 py-3 rounded-2xl glass-input text-sm font-medium text-[#0F172A] placeholder-[#94A3B8]"
                  />
                  <Lock className="absolute left-4 top-3.5 w-4 h-4 text-[#94A3B8]" />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-3.5 text-[#94A3B8] hover:text-[#0F172A] transition-colors"
                  >
                    {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2.5">
                <input
                  type="checkbox"
                  id="remember"
                  checked={form.remember}
                  onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                  className="w-4 h-4 rounded accent-[#3B82F6]"
                />
                <label htmlFor="remember" className="text-xs font-medium text-[#64748B]">
                  Keep me signed in
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl btn-primary-blue text-sm font-bold disabled:opacity-70"
              >
                {loading ? (
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Sign In to Wedora
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-slate-200/80" />
              <span className="text-xs text-[#94A3B8] font-medium">or continue with</span>
              <div className="flex-1 h-px bg-slate-200/80" />
            </div>

            {/* Social Login Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-semibold text-[#0F172A] hover:bg-slate-50 hover:shadow-md transition-all">
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="w-4 h-4"
                />
                Google
              </button>
              <button className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-semibold text-[#0F172A] hover:bg-slate-50 hover:shadow-md transition-all">
                <svg className="w-4 h-4 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
                Facebook
              </button>
            </div>

            {/* Sign Up Link */}
            <p className="text-center mt-6 text-xs text-[#64748B]">
              Don't have an account?{' '}
              <Link to="/signup" className="text-[#3B82F6] font-bold hover:text-blue-700">
                Create one free →
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
