import { ArrowUpRight, Cpu, Layers, Shield, Terminal } from 'lucide-react';
import heroImage from '../assets/bg.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#0B0F17] text-white pt-28 pb-20 px-6 sm:px-12 md:px-24 overflow-hidden border-b border-gray-950"
    >
      {/* Background Matrix & Flow Synchronizer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293706_1px,transparent_1px),linear-gradient(to_bottom,#1f293706_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Atmospheric High-Density Glow Nodes */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[250px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[200px] bg-[#10B981]/3 rounded-full blur-[120px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Block: High-Impact Typography Core (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Top Minimalist Context Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/20 rounded-md">
              <span className="w-1 h-1 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#10B981]">
                Platform Architecture
              </span>
            </div>

            {/* Structured Image-Inspired Slogan Sizing */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
                Reliable Software Solutions for
              </h1>
              <span className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight block leading-none bg-gradient-to-r from-[#10B981] via-emerald-500 to-teal-600 bg-clip-text text-transparent opacity-95 uppercase">
                Next-Gen <span className="text-white">Platforms</span>
              </span>
            </div>

            {/* Highly Polished Corporate Description */}
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-xl font-normal text-justify">
              At <strong className="text-white font-semibold">IntegriQ IT</strong>, we engineer
              fault-tolerant architectures and high-throughput digital systems. Empowering
              forward-thinking enterprises with unbreakable backend infrastructure, modular service
              layers, and rapid, secure deployment pipelines.
            </p>

            {/* Dual High-Spec CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#10B981] hover:bg-[#0d9668] text-[#0B0F17] font-bold text-xs tracking-wide uppercase rounded-xl transition-all duration-300 shadow-[0_4px_25px_rgba(16,185,129,0.15)] group"
              >
                <span>Our Services</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent hover:bg-gray-900/40 text-gray-200 hover:text-white font-bold text-xs tracking-wide uppercase rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
              >
                <span>Connect with Us</span>
              </a>
            </div>

            {/* Live Performance System Telemetry Blocks */}
            <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg border-t border-gray-950">
              <div className="bg-[#111622]/20 border border-gray-900/60 p-3.5 rounded-xl">
                <div className="text-lg md:text-xl font-bold text-white font-mono tracking-tight">
                  50+
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mt-0.5">
                  Happy Customers
                </div>
              </div>
              <div className="bg-[#111622]/20 border border-gray-900/60 p-3.5 rounded-xl">
                <div className="text-lg md:text-xl font-bold text-[#10B981] font-mono tracking-tight">
                  99.99%
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mt-0.5">
                  Core Uptime
                </div>
              </div>
              <div className="bg-[#111622]/20 border border-gray-900/60 p-3.5 rounded-xl">
                <div className="text-lg md:text-xl font-bold text-white font-mono tracking-tight">
                  256-bit
                </div>
                <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mt-0.5">
                  AES Cipher
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Secure Console Terminal Image Wrapper (5 Columns) */}
          <div className="lg:col-span-5 relative group">
            {/* Structural Vector Grid Backing */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#10B981]/10 to-transparent opacity-30 rounded-3xl blur-xl group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

            <div className="relative bg-[#111622]/40 border border-gray-900 rounded-2xl p-3 backdrop-blur-sm shadow-[0_0_60px_rgba(0,0,0,0.4)] overflow-hidden">
              {/* Terminal Frame Top-Bar Decoration */}
              <div className="flex items-center justify-between border-b border-gray-900 pb-2 mb-3 px-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gray-800" />
                  <span className="w-2 h-2 rounded-full bg-gray-800" />
                  <span className="w-2 h-2 rounded-full bg-gray-800" />
                  <span className="text-[9px] font-mono text-gray-600 ml-1.5 flex items-center gap-1">
                    <Terminal className="w-2.5 h-2.5" /> system_telemetry.png
                  </span>
                </div>
                <div className="flex gap-2">
                  <Layers className="w-2.5 h-2.5 text-gray-700" />
                  <Shield className="w-2.5 h-2.5 text-gray-700" />
                </div>
              </div>

              {/* Core Hero Asset */}
              <div className="relative rounded-lg overflow-hidden border border-gray-950/60 bg-[#0B0F17]">
                <img
                  src={heroImage}
                  alt="IntegriQ IT Platform Architecture"
                  className="w-full h-auto object-cover opacity-85 group-hover:opacity-100 group-hover:scale-[1.01] transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17] via-transparent to-transparent opacity-40" />
              </div>
            </div>

            {/* Minimal Code Floating Blueprint Tag */}
            <div className="absolute -bottom-4 -left-4 bg-[#0B0F17] border border-gray-900 rounded-lg px-2.5 py-1.5 hidden sm:flex items-center gap-2 shadow-xl pointer-events-none">
              <Cpu className="w-3 h-3 text-[#10B981]" />
              <span className="text-[9px] font-mono text-gray-400">SYS_REV: v4.22</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
