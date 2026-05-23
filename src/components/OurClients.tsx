import { ArrowUpRight, Cpu, Globe, ShieldCheck } from 'lucide-react';
import Marquee from 'react-fast-marquee';

import nobinLogo from '../assets/Nobinfashion.png';
import qcoomLogo from '../assets/Qcoom.jpg';
import barakaLogo from '../assets/baraka-fintech-limited.png';
import shodeshLogo from '../assets/showdesh-logo.png';

interface Client {
  name: string;
  logo: string;
  domain: string;
  product: string;
}

export default function OurClients() {
  const clients: Client[] = [
    {
      name: 'Nobin Fashion',
      logo: nobinLogo,
      domain: 'Manufacturing Layer',
      product: 'Supply Chain Tracker',
    },
    {
      name: 'Baraka Fintech Limited',
      logo: barakaLogo,
      domain: 'Liquidity Core',
      product: 'Digital FinTech Solutions',
    },
    {
      name: 'Shodesh Trading',
      logo: shodeshLogo,
      domain: 'Industrial Pipeline',
      product: 'Inventory ERP Network',
    },
    {
      name: 'Qcoom',
      logo: qcoomLogo,
      domain: 'Clearing Engine',
      product: 'High-Volume Gateway',
    },
  ];

  return (
    <section className="bg-[#0B0F17] py-28 border-b border-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293706_1px,transparent_1px),linear-gradient(to_bottom,#1f293706_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute -top-12 left-1/4 w-[600px] h-[300px] bg-[#10B981]/5 rounded-full blur-[150px] pointer-events-none opacity-80" />
      <div className="absolute -bottom-12 right-1/4 w-[500px] h-[250px] bg-[#10B981]/4 rounded-full blur-[130px] pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/20 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#10B981]">
              Enterprise Ecosystem
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
            Trusted by Powering <br />
            <span className="bg-gradient-to-r from-[#10B981] to-emerald-500 bg-clip-text text-transparent">
              Market Leaders
            </span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-400 font-normal leading-relaxed max-w-xl mx-auto">
            Synchronizing mission-critical logic, financial tracking pipelines, and high-capacity
            processing nodes across major national industries.
          </p>
        </div>

        <div className="relative w-full py-4 overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 md:w-56 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/90 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-56 bg-gradient-to-l from-[#0B0F17] via-[#0B0F17]/90 to-transparent z-20 pointer-events-none" />

          <Marquee speed={35} gradient={false} pauseOnHover={true} className="flex items-center">
            {clients.map((client) => (
              <div className="flex items-center gap-5 bg-[#111622]/20 border border-gray-900 hover:border-[#10B981]/30 hover:bg-[#111622]/60 rounded-2xl px-6 py-5 transition-all duration-300 min-w-[320px] md:min-w-[360px] select-none group mr-5 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.2)]">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent opacity-60 group-hover:via-[#10B981]/40 transition-all duration-300" />

                <ArrowUpRight className="absolute top-3 right-3 w-3 h-3 text-gray-700 group-hover:text-[#10B981] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />

                <div className="w-16 h-16 rounded-xl bg-[#080B11] border border-gray-950 flex items-center justify-center shrink-0 group-hover:border-[#10B981]/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.06)] transition-all duration-300 overflow-hidden relative p-2.5">
                  {client.logo ? (
                    <img
                      src={client.logo}
                      alt={`${client.name} System Deck`}
                      className="w-full h-full object-contain filter brightness-90 contrast-105 group-hover:brightness-100 group-hover:scale-105 transition-all duration-300"
                    />
                  ) : (
                    <Cpu className="w-5 h-5 text-gray-600 group-hover:text-[#10B981] transition-colors duration-300" />
                  )}
                </div>

                <div className="text-left min-w-0 flex-1 space-y-1">
                  <div>
                    <p className="text-xs sm:text-sm font-black text-gray-200 group-hover:text-white transition-colors duration-300 truncate tracking-tight uppercase">
                      {client.name}
                    </p>
                    <p className="text-[11px] text-[#10B981] font-semibold tracking-wide truncate mt-0.5">
                      {client.product}
                    </p>
                  </div>

                  <div className="flex flex-col space-y-0.5 pt-1 border-t border-gray-900/40">
                    <span className="text-[10px] text-gray-400 font-medium tracking-wide truncate group-hover:text-gray-300 transition-colors">
                      {client.domain}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="mt-14 pt-6 border-t border-gray-900/40 flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[10px] font-mono text-gray-500">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Validated Production Integrations</span>
          </div>
          <span className="text-gray-800 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5 text-gray-600" />
            <span>Live Node Synchronizers Active</span>
          </div>
        </div>
      </div>
    </section>
  );
}
