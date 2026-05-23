import { ChevronDown, HelpCircle, Terminal } from 'lucide-react';
import { useState } from 'react';

export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do we initialize an enterprise integration?',
      answer:
        'You can target our sandbox infrastructure immediately using our REST endpoints. For live production ledger keys, please submit your KYC credentials through your institutional dashboard portal.',
    },
    {
      question: 'Is the ledger infrastructure licensed and regulated?',
      answer:
        'Yes. We are structurally incorporated in Bangladesh and maintain strict compliance with systemic sandbox frameworks and security guidelines issued by Bangladesh Bank.',
    },
    {
      question: 'What transaction modalities do you natively support?',
      answer:
        'Our unified ledger core handles high-throughput MFS routing, automated enterprise bulk salary disbursements, and instant multi-vendor merchant checkout settlement splits.',
    },
    {
      question: 'What security frameworks govern the core matching engine?',
      answer:
        'We enforce end-to-end 256-bit AES encryption layer tokens, inline biometric data validation checks, and automatic sub-50ms heuristic AI risk scoring modules pre-authorization.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-dark-surface/30 relative overflow-hidden">
      {/* Background Matrix Sync - Preserved Exactly */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Structural Ambient Blur Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none opacity-60" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Component Title Context Panel */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/20 rounded-md mb-4">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#10B981] flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" /> System Documentation
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked <span className="text-[#10B981]">Questions</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
            Review live operational guardrails, technical capabilities, and localized structural
            regulatory compliance structures.
          </p>
        </div>

        {/* Seamless Interactive Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                onClick={() => setOpenFaq(isOpen ? null : idx)}
                className={`border rounded-xl p-5 transition-all duration-300 bg-[#111622]/20 cursor-pointer select-none relative group
                  ${
                    isOpen
                      ? 'border-[#10B981]/30 bg-[#111622]/50 shadow-[0_0_40px_rgba(16,185,129,0.01)]'
                      : 'border-gray-900/80 hover:border-gray-800/80 hover:bg-[#111622]/30'
                  }`}
              >
                {/* Horizontal Active Highlight Accent Tag */}
                <div
                  className={`absolute top-0 bottom-0 left-0 w-[2px] bg-[#10B981] rounded-l-xl transition-transform duration-300 scale-y-0 origin-center ${isOpen ? 'scale-y-50' : ''}`}
                />

                <div className="flex justify-between items-center gap-6 relative z-10">
                  <div className="flex items-center gap-4 min-w-0">
                    {/* Index Sequence Node Tracer */}
                    <span className="hidden sm:inline font-mono text-[10px] text-gray-600 tracking-wider font-medium group-hover:text-gray-500 transition-colors">
                      [ 0{idx + 1} ]
                    </span>
                    <h4
                      className={`text-xs md:text-sm font-bold tracking-tight transition-colors duration-300 leading-snug ${isOpen ? 'text-[#10B981]' : 'text-gray-200 group-hover:text-white'}`}
                    >
                      {faq.question}
                    </h4>
                  </div>

                  <div className="relative shrink-0">
                    {isOpen && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 animate-pulse"
                      >
                        <circle cx="12" cy="12" r="10" stroke="#10B981" strokeWidth="1.5" />
                      </svg>
                    )}
                    <div
                      className={`w-7 h-7 bg-[#0B0F17]/80 border rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'border-[#10B981]/30 text-[#10B981]' : 'border-gray-800 text-gray-500 group-hover:text-gray-400 group-hover:border-gray-700'}`}
                    >
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </div>
                  </div>
                </div>

                {/* Secure Architecture Smooth Drawer Wrapper */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="border-t border-gray-900/60 mt-4 pt-4 flex gap-3 items-start">
                    <Terminal className="w-3.5 h-3.5 text-gray-600 mt-0.5 shrink-0 hidden sm:block" />
                    <p className="text-gray-400 text-xs leading-relaxed font-normal flex-1">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
