import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import Button from '../components/Button';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How far in advance should I order my bridal outfit?",
      a: "We recommend ordering bridal lehengas and sherwanis at least 6-8 weeks prior to your wedding to allow time for fitting and custom hand embroidery."
    },
    {
      q: "Are the jewellery items certified?",
      a: "Yes, every gold and Kundan piece comes with a hallmarked certificate of authenticity, and all solitaire diamonds are IGI certified."
    },
    {
      q: "Can I request custom colors or size alterations?",
      a: "Absolutely. Our Wedora Concierge team provides virtual measurement sessions and bespoke color matching."
    },
    {
      q: "What is your shipping and return policy?",
      a: "We offer complimentary global insured shipping. Ready-to-ship items can be returned within 14 days."
    }
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight mb-3">
          Concierge & Support
        </h1>
        <p className="text-[#64748B] text-base">
          Have questions about sizing, customization, or shipping? Our wedding stylists are here to assist.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Contact Details */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/70 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#0F172A]">Get in Touch</h3>

            <div className="space-y-4 text-sm text-[#64748B]">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-100/70 text-[#60A5FA] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">Flagship Atelier</p>
                  <p>5th Avenue Luxury Suite, New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-100/70 text-[#60A5FA] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">Email Concierge</p>
                  <p>concierge@wedora.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-100/70 text-[#60A5FA] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">Toll-Free Phone</p>
                  <p>+1 (800) 933-6721 (24/7 Support)</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs Accordion */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#0F172A] uppercase tracking-wider px-1">
              Frequently Asked Questions
            </h4>
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white/40 backdrop-blur-xl border border-white overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 text-left font-semibold text-sm text-[#0F172A] flex items-center justify-between gap-2"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#64748B] transition-transform ${
                      activeFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-[#64748B] leading-relaxed border-t border-slate-100 pt-2">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="p-8 rounded-3xl bg-white/50 backdrop-blur-xl border border-white/70 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-[#0F172A] mb-4">
                  Send a Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Olivia Vance"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-slate-200 text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#60A5FA]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="olivia@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-slate-200 text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#60A5FA]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Bridal Lehenga Sizing Query"
                    className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-slate-200 text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#60A5FA]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell us about your wedding date and styling requirements..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/80 border border-slate-200 text-xs font-medium text-[#0F172A] focus:outline-none focus:border-[#60A5FA]"
                  ></textarea>
                </div>

                <Button variant="primary" size="lg" className="w-full" type="submit" icon={Send}>
                  Send Message
                </Button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F172A]">Message Received</h3>
                <p className="text-xs text-[#64748B] max-w-sm mx-auto">
                  Thank you for reaching out to Wedora. Our concierge will review your note and respond within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
