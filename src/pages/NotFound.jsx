import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft } from 'lucide-react';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="pt-36 pb-24 max-w-md mx-auto text-center px-4">
      <div className="w-16 h-16 rounded-3xl bg-blue-100/70 text-[#60A5FA] flex items-center justify-center mx-auto mb-6">
        <Sparkles className="w-8 h-8" />
      </div>
      <span className="text-xs font-bold uppercase tracking-wider text-[#60A5FA]">
        Error 404
      </span>
      <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mt-1 mb-3">
        Page Not Found
      </h1>
      <p className="text-sm text-[#64748B] mb-8">
        The luxury wedding page you are looking for has been moved or does not exist.
      </p>
      <Link to="/">
        <Button variant="primary" icon={ArrowLeft}>
          Return to Homepage
        </Button>
      </Link>
    </div>
  );
}
