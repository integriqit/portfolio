import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import ContactForm from './ContactForm';

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Corporate Headquarters',
      details: 'Road: 33, House: 6, Gulshan, Dhaka, Bangladesh',
    },
    { icon: Phone, title: 'Institutional Routing Desk', details: '+880 1717-797343' },
    { icon: Mail, title: 'Communications Hub', details: 'integriqit@gmail.com' },
    { icon: Clock, title: 'System Support Windows', details: '24/7 Monitored Infrastructure' },
  ];

  return (
    <section
      id="contact"
      className="bg-[#0B0F17] text-white py-24 px-6 sm:px-12 md:px-24 relative overflow-hidden border-b border-gray-950"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Block Architecture */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-md border border-[#10B981]/20">
                Support Node
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight leading-tight">
                Get in Touch. <br />
                Find <span className="text-[#10B981]">Answers</span>.
              </h2>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-[#111622]/40 border border-gray-900/60 p-4 rounded-xl hover:border-[#10B981]/30 transition-colors duration-300 group"
                  >
                    <div className="w-9 h-9 bg-[#0B0F17] border border-gray-800 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-[#10B981] group-hover:border-[#10B981]/20 transition-colors shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                        {info.title}
                      </p>
                      <p className="text-xs font-medium text-gray-200 mt-0.5 truncate group-hover:text-white transition-colors">
                        {info.details}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Block: Dynamic Form Ingestion */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
