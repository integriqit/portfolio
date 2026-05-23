import { Send, ShieldCheck, Terminal } from 'lucide-react';
import React, { useState } from 'react';
import { Card } from '../components/ui/Card';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => setIsSubmitting(false), 1200);
  };

  return (
    <Card className="bg-[#111622]/40 border border-gray-900 rounded-2xl p-6 md:p-8 relative backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.3)] w-full">
      {/* Soft Radial Glow behind the Form Canvas */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#10B981]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Pseudo Window Header System */}
      <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6 relative">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -top-1 -left-1 opacity-20 pointer-events-none"
        >
          <path d="M1 1 L1 8 M1 1 L8 1" stroke="#10B981" strokeWidth="1.2" />
        </svg>

        <div className="flex items-center gap-1.5 pl-2">
          <span className="w-2 h-2 rounded-full bg-gray-800" />
          <span className="w-2 h-2 rounded-full bg-gray-800" />
          <span className="w-2 h-2 rounded-full bg-gray-800" />
          <span className="text-[10px] font-mono text-gray-500 ml-2 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-gray-600" /> secure_message_transit.sh
          </span>
        </div>
        <span className="text-[9px] font-mono uppercase bg-[#10B981]/10 text-[#10B981] px-2 py-0.5 rounded border border-[#10B981]/20 tracking-wider">
          Gateway Active
        </span>
      </div>

      {/* Secure Terminal Form System */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Brahmmando Saha"
              className="w-full bg-[#0B0F17]/60 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#10B981]/40 focus:ring-1 focus:ring-[#10B981]/40 transition-all duration-300"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
              Email
            </label>
            <input
              type="email"
              required
              placeholder="name@company.com"
              className="w-full bg-[#0B0F17]/60 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#10B981]/40 focus:ring-1 focus:ring-[#10B981]/40 transition-all duration-300"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
            Subject
          </label>
          <input
            type="text"
            required
            placeholder="Enterprise Integration / Solution Inquiry"
            className="w-full bg-[#0B0F17]/60 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#10B981]/40 focus:ring-1 focus:ring-[#10B981]/40 transition-all duration-300"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
            Message
          </label>
          <textarea
            required
            rows={4}
            placeholder="Describe your architecture requirements or integration scope details..."
            className="w-full bg-[#0B0F17]/60 border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#10B981]/40 focus:ring-1 focus:ring-[#10B981]/40 transition-all duration-300 resize-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        {/* Form Submission Action Row */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            <span>End-to-End Encrypted Data Pipeline</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center px-5 py-2.5 bg-[#10B981] hover:bg-[#0d9668] disabled:bg-gray-800 text-[#0B0F17] font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(16,185,129,0.15)] disabled:cursor-not-allowed group shrink-0"
          >
            <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
            <Send className="w-3 h-3 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </form>
    </Card>
  );
}
