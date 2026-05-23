import emailjs from '@emailjs/browser';
import { AlertCircle, CheckCircle2, Send, ShieldCheck, Terminal } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Card } from '../components/ui/Card';

interface ContactInputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type StatusState = {
  type: 'idle' | 'success' | 'error';
  message: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<StatusState>({ type: 'idle', message: '' });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInputs>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactInputs) => {
    try {
      setStatus({ type: 'idle', message: '' });

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'TRANSMISSION_SUCCESS: Message successfully sent.',
      });

      reset();
    } catch (error) {
      console.error(error);
      setStatus({
        type: 'error',
        message: 'TRANSMISSION_FAILURE: Failed to send message.',
      });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-4">
      <Card className="bg-[#111622]/50 border border-gray-900/90 rounded-3xl p-8 md:p-11 relative backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.4)] w-full overflow-hidden">
        <div className="absolute -top-10 -right-10 w-44 h-44 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between border-b border-gray-800/80 pb-5 mb-8 relative select-none">
          <svg
            width="10"
            height="10"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-1.5 -left-1.5 opacity-30 pointer-events-none"
          >
            <path d="M1 1 L1 8 M1 1 L8 1" stroke="#10B981" strokeWidth="1.2" />
          </svg>

          <div className="flex items-center gap-2 pl-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gray-800" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-800" />
            <span className="w-2.5 h-2.5 rounded-full bg-gray-800" />

            <span className="text-[11px] font-mono tracking-wide text-gray-400 ml-2 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-gray-500" />
              secure_message_transit.sh
            </span>
          </div>

          <span className="text-[10px] font-mono uppercase bg-[#10B981]/10 text-[#10B981] px-2.5 py-0.5 rounded border border-[#10B981]/20 tracking-widest font-bold">
            Gateway Active
          </span>
        </div>

        {/* Inline Telemetry Diagnostics Message */}
        {status.type !== 'idle' && (
          <div
            className={`mb-8 p-4 rounded-xl border font-mono text-[11px] sm:text-xs flex justify-center items-center gap-3 transition-all duration-300 shadow-inner ${
              status.type === 'success'
                ? 'bg-emerald-950/20 border-emerald-800/60 text-[#10B981]'
                : 'bg-red-950/20 border-red-900/60 text-red-400'
            }`}
          >
            {status.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            )}
            <span className="leading-relaxed">{status.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <div className="flex justify-between items-center px-0.5">
                <label className="text-[11px] font-mono text-gray-400 font-semibold uppercase tracking-widest">
                  Full Name <span className="text-xs">*</span>
                </label>
                {errors.name && (
                  <span className="text-[10px] font-mono text-red-400 font-medium">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <input
                type="text"
                placeholder="e.g. My Full Name"
                className={`w-full bg-[#0E131F] border rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 transition-all duration-300 shadow-sm ${
                  errors.name
                    ? 'border-red-900/80 focus:border-red-500/60 focus:ring-red-500/20'
                    : 'border-gray-800/90 focus:border-[#10B981]/50 focus:ring-[#10B981]/10'
                }`}
                {...register('name', { required: 'Identity token required' })}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-0.5">
                <label className="text-[11px] font-mono text-gray-400 font-semibold uppercase tracking-widest">
                  Email Address <span className="text-xs">*</span>
                </label>
                {errors.email && (
                  <span className="text-[10px] font-mono text-red-400 font-medium">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <input
                type="text"
                placeholder="e.g. myemail@domain.com"
                className={`w-full bg-[#0E131F] border rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 transition-all duration-300 shadow-sm ${
                  errors.email
                    ? 'border-red-900/80 focus:border-red-500/60 focus:ring-red-500/20'
                    : 'border-gray-800/90 focus:border-[#10B981]/50 focus:ring-[#10B981]/10'
                }`}
                {...register('email', {
                  required: 'Contact endpoint required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid routing format',
                  },
                })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-0.5">
              <label className="text-[11px] font-mono text-gray-400 font-semibold uppercase tracking-widest">
                Subject Line <span className="text-xs">*</span>
              </label>
              {errors.subject && (
                <span className="text-[10px] font-mono text-red-400 font-medium">
                  {errors.subject.message}
                </span>
              )}
            </div>

            <input
              type="text"
              placeholder="Enterprise Integration / Solution Inquiry"
              className={`w-full bg-[#0E131F] border rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 transition-all duration-300 shadow-sm ${
                errors.subject
                  ? 'border-red-900/80 focus:border-red-500/60 focus:ring-red-500/20'
                  : 'border-gray-800/90 focus:border-[#10B981]/50 focus:ring-[#10B981]/10'
              }`}
              {...register('subject', { required: 'Inquiry context missing' })}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center px-0.5">
              <label className="text-[11px] font-mono text-gray-400 font-semibold uppercase tracking-widest">
                Message <span className="text-xs">*</span>
              </label>
              {errors.message && (
                <span className="text-[10px] font-mono text-red-400 font-medium">
                  {errors.message.message}
                </span>
              )}
            </div>

            <textarea
              rows={5}
              placeholder="Describe your architecture requirements or integration scope details..."
              className={`w-full bg-[#0E131F] border rounded-xl px-4 py-3 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:ring-2 resize-none transition-all duration-300 shadow-sm leading-relaxed ${
                errors.message
                  ? 'border-red-900/80 focus:border-red-500/60 focus:ring-red-500/20'
                  : 'border-gray-800/90 focus:border-[#10B981]/50 focus:ring-[#10B981]/10'
              }`}
              {...register('message', { required: 'Core requirements description required' })}
            />
          </div>

          <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-gray-900/60">
            <div className="flex items-center gap-2.5 text-[11px] font-mono text-gray-500 select-none">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>End-to-End Encrypted Data Pipeline</span>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center px-6 py-3.5 bg-[#10B981] hover:bg-[#0d9668] active:scale-[0.98] disabled:bg-gray-900 text-[#0B0F17] disabled:text-gray-600 font-black text-xs tracking-widest uppercase rounded-xl transition-all duration-300 shadow-[0_4px_25px_rgba(16,185,129,0.2)] disabled:shadow-none disabled:cursor-not-allowed group shrink-0 min-w-[160px]"
            >
              <span>{isSubmitting ? 'Transmitting...' : 'Send Message'}</span>
              <Send className="w-3.5 h-3.5 ml-2.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}
