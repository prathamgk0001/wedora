import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, User, Phone, Sparkles, ArrowRight, Heart, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', password: '', confirm: '', agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!form.firstName || !form.lastName || !form.email || !form.password || !form.confirm) {
      setError('Please fill in all required fields.');
      return;
    }
    if (form.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match.');
      return;
    }
    if (!form.agree) {
      setError('Please accept the terms & conditions to continue.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => navigate('/'), 1800);
    }, 1400);
  };

  return (
    <div className="min-h-screen flex overflow-hidden">
      {/* LEFT PANEL — decorative */}
      <div className="hidden lg:flex lg:w-5/12 xl:w-2/5 relative overflow-hidden flex-col">
        <img
          src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=85"
          alt="Wedora Bridal"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#EFF6FF]/85 via-[#DBEAFE]/65 to-[#1E3A8A]/25" />

        <div className="absolute inset-0 flex flex-col justify-between p-10">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-[#3B82F6] flex items-center justify-center text-white shadow-lg">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-white drop-shadow-sm">
              Wedora
            </span>
          </Link>

          <div className="space-y-4">
            <div className="p-5 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/40 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 fill-rose-300 text-rose-300" />
                <span className="font-bold">Start Your Wedding Journey</span>
              </div>
              <p className="text-sm text-white/85">
                Join thousands of brides who discovered their perfect wedding look with Wedora's curated luxury.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-2.5">
              {[
                'Access exclusive bridal lookbooks',
                'Save wishlist & track orders',
                'Get concierge styling advice',
                '₹500 off your first order',
              ].map((benefit) => (
                <div key={benefit} className="flex items-center gap-2.5 text-white text-sm font-medium">
                  <div className="w-5 h-5 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL — Signup Form */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-10 bg-[#F8FBFF] overflow-y-auto">
        <div className="w-full max-w-md py-8">
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
            {!success ? (
              <>
                <div className="text-center mb-7">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#3B82F6] text-xs font-bold uppercase tracking-wider mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Create Account</span>
                  </div>
                  <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight">
                    Join Wedora
                  </h1>
                  <p className="text-sm text-[#64748B] mt-1.5">
                    Everything for your dream wedding, all in one place.
                  </p>
                </div>

                {error && (
                  <div className="mb-4 p-3 rounded-2xl bg-rose-50 border border-rose-100 text-xs font-semibold text-rose-600 text-center">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                        First Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="First name"
                          className="w-full pl-11 pr-4 py-3 rounded-2xl glass-input text-sm font-medium text-[#0F172A] placeholder-[#94A3B8]"
                        />
                        <User className="absolute left-4 top-3.5 w-4 h-4 text-[#94A3B8]" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                        Last Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="Last name"
                          className="w-full pl-11 pr-4 py-3 rounded-2xl glass-input text-sm font-medium text-[#0F172A] placeholder-[#94A3B8]"
                        />
                        <User className="absolute left-4 top-3.5 w-4 h-4 text-[#94A3B8]" />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full pl-11 pr-4 py-3 rounded-2xl glass-input text-sm font-medium text-[#0F172A] placeholder-[#94A3B8]"
                      />
                      <Mail className="absolute left-4 top-3.5 w-4 h-4 text-[#94A3B8]" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full pl-11 pr-4 py-3 rounded-2xl glass-input text-sm font-medium text-[#0F172A] placeholder-[#94A3B8]"
                      />
                      <Phone className="absolute left-4 top-3.5 w-4 h-4 text-[#94A3B8]" />
                    </div>
                  </div>

                  {/* Password & Confirm (side by side) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                        Password <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showPass ? 'text' : 'password'}
                          name="password"
                          value={form.password}
                          onChange={handleChange}
                          placeholder="Min 6 characters"
                          className="w-full pl-11 pr-10 py-3 rounded-2xl glass-input text-sm font-medium text-[#0F172A] placeholder-[#94A3B8]"
                        />
                        <Lock className="absolute left-4 top-3.5 w-4 h-4 text-[#94A3B8]" />
                        <button
                          type="button"
                          onClick={() => setShowPass(!showPass)}
                          className="absolute right-3.5 top-3.5 text-[#94A3B8] hover:text-[#0F172A]"
                        >
                          {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0F172A] mb-1.5">
                        Confirm Password <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type={showConfirm ? 'text' : 'password'}
                          name="confirm"
                          value={form.confirm}
                          onChange={handleChange}
                          placeholder="Re-enter password"
                          className="w-full pl-11 pr-10 py-3 rounded-2xl glass-input text-sm font-medium text-[#0F172A] placeholder-[#94A3B8]"
                        />
                        <Lock className="absolute left-4 top-3.5 w-4 h-4 text-[#94A3B8]" />
                        <button
                          type="button"
                          onClick={() => setShowConfirm(!showConfirm)}
                          className="absolute right-3.5 top-3.5 text-[#94A3B8] hover:text-[#0F172A]"
                        >
                          {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Terms & Conditions */}
                  <div className="flex items-start gap-2.5">
                    <input
                      type="checkbox"
                      id="agree"
                      name="agree"
                      checked={form.agree}
                      onChange={handleChange}
                      className="w-4 h-4 mt-0.5 rounded accent-[#3B82F6] shrink-0"
                    />
                    <label htmlFor="agree" className="text-xs font-medium text-[#64748B] leading-relaxed">
                      I agree to Wedora's{' '}
                      <span className="text-[#3B82F6] font-bold cursor-pointer">Terms of Service</span>
                      {' '}and{' '}
                      <span className="text-[#3B82F6] font-bold cursor-pointer">Privacy Policy</span>
                    </label>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl btn-primary-blue text-sm font-bold disabled:opacity-70 mt-2"
                  >
                    {loading ? (
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Create My Wedora Account
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                {/* Sign In Link */}
                <p className="text-center mt-5 text-xs text-[#64748B]">
                  Already have an account?{' '}
                  <Link to="/login" className="text-[#3B82F6] font-bold hover:text-blue-700">
                    Sign in →
                  </Link>
                </p>
              </>
            ) : (
              /* Success State */
              <div className="py-8 text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto"
                >
                  <CheckCircle2 className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-extrabold text-[#0F172A]">
                  Account Created! 🎉
                </h3>
                <p className="text-sm text-[#64748B] max-w-xs mx-auto">
                  Welcome to Wedora, {form.firstName}! Your wedding luxury journey begins now. Redirecting…
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
