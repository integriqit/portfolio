import { Badge } from '../components/ui/Badge';
import { technologies } from '../data/technologies';

const Technology = () => {
  const upperTrack = [...technologies, ...technologies];
  const lowerTrack = [...technologies, ...technologies].reverse();

  return (
    <section
      id="technology"
      className="py-28 bg-[#0B0F17] text-white relative overflow-hidden border-b border-gray-950"
    >
      {/* 1. Technical Grid Infrastructure Pattern Overlay */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem]"
        style={{
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)',
        }}
      />

      {/* 2. Focused Deep Glow Core */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Inline styles for bi-directional marquee synchronization */}
      <style>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marqueeLeft 100s linear infinite;
        }
        .animate-marquee-right {
          animation: marqueeRight 100s linear infinite;
        }
      `}</style>

      <div className="w-full relative z-10">
        {/* Section Typography Header */}
        <div className="container mx-auto px-4 lg:px-8 text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/20 rounded-md mb-4">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#10B981]">
              Engine Core Architecture
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Innovating with <span className="text-[#10B981]">Next-Gen</span> Tech
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed font-normal">
            Harnessing ultra-low latency frameworks, distributed data nodes, and isolated container
            pipelines to maintain maximum uptime and high-throughput settlement natively.
          </p>
        </div>

        {/* Dual Lane Marquee Group */}
        <div className="flex flex-col gap-5 relative w-full overflow-hidden py-2 group">
          {/* High-End Soft Blur Edge Blenders */}
          <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#0B0F17] via-[#0B0F17]/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#0B0F17] via-[#0B0F17]/80 to-transparent z-20 pointer-events-none" />

          {/* Lane 1: Moving Left */}
          <div className="relative flex w-full overflow-hidden">
            <div className="flex gap-5 shrink-0 min-w-full animate-marquee-left group-hover:[animation-play-state:paused]">
              {upperTrack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={`upper-${index}`}
                    className="flex items-center gap-4 bg-[#111622]/40 border border-gray-900 px-5 py-3.5 rounded-xl w-[280px] md:w-[310px] shrink-0 backdrop-blur-sm transition-all duration-300 hover:border-[#10B981]/30 hover:bg-[#111622]/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.02)]"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#0B0F17] border border-gray-800 flex items-center justify-center text-gray-400 transition-colors shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h4 className="text-xs font-bold text-gray-200 truncate">{tech.title}</h4>
                        <Badge
                          variant="secondary"
                          className="text-[9px] font-mono font-medium bg-[#10B981]/5 text-[#10B981] border border-[#10B981]/10 px-1.5 py-0 rounded shrink-0"
                        >
                          {tech.badge}
                        </Badge>
                      </div>
                      <p className="text-[10px] text-gray-500 line-clamp-1 leading-normal font-normal">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Lane 2: Moving Right */}
          <div className="relative flex w-full overflow-hidden">
            <div className="flex gap-5 shrink-0 min-w-full animate-marquee-right group-hover:[animation-play-state:paused]">
              {lowerTrack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={`lower-${index}`}
                    className="flex items-center gap-4 bg-[#111622]/40 border border-gray-900 px-5 py-3.5 rounded-xl w-[280px] md:w-[310px] shrink-0 backdrop-blur-sm transition-all duration-300 hover:border-[#10B981]/30 hover:bg-[#111622]/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.02)]"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#0B0F17] border border-gray-800 flex items-center justify-center text-gray-400 transition-colors shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-0.5">
                        <h4 className="text-xs font-bold text-gray-200 truncate">{tech.title}</h4>
                        <Badge
                          variant="secondary"
                          className="text-[9px] font-mono font-medium bg-[#10B981]/5 text-[#10B981] border border-[#10B981]/10 px-1.5 py-0 rounded shrink-0"
                        >
                          {tech.badge}
                        </Badge>
                      </div>
                      <p className="text-[10px] text-gray-500 line-clamp-1 leading-normal font-normal">
                        {tech.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
