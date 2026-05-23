import { Badge } from '../components/ui/Badge';
import { features } from '../data/features';

const Features = () => {
  return (
    <section id="features" className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Exact Original Background Grid Maintained */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(280_100%_70%/0.1)_1px,transparent_1px),linear-gradient(hsl(280_100%_70%/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/20 rounded-md mb-6">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#10B981]">
              Platform Architecture
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight flex flex-col">
            Smart Finance for
            <span className="bg-gradient-secondary bg-clip-text text-transparent block py-2">
              Everyday Life
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simplifying digital routing matrix layers, instantaneous p2p verification checks, and
            automated savings splits securely.
          </p>
        </div>

        {/* Feature Component Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#111622]/40 border border-gray-900 rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#10B981]/30 hover:bg-[#111622] hover:shadow-[0_0_30px_rgba(16,185,129,0.01)]"
              >
                {/* Micro Tech Matrix Dot Pattern Inside Card */}
                <div className="absolute top-4 right-4 opacity-[0.03] group-hover:opacity-[0.08] text-[#10B981] transition-opacity pointer-events-none">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 20 20">
                    <circle cx="2" cy="2" r="2" />
                    <circle cx="10" cy="2" r="2" />
                    <circle cx="18" cy="2" r="2" />
                    <circle cx="2" cy="10" r="2" />
                    <circle cx="10" cy="10" r="2" />
                    <circle cx="18" cy="10" r="2" />
                    <circle cx="2" cy="18" r="2" />
                    <circle cx="10" cy="18" r="2" />
                    <circle cx="18" cy="18" r="2" />
                  </svg>
                </div>

                <div className="flex flex-col h-full justify-between space-y-6">
                  {/* Icon Frame Setup */}
                  <div className="w-12 h-12 bg-[#0B0F17] border border-gray-800 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-[#10B981] group-hover:border-[#10B981]/20 transition-all duration-300 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Feature Structural Text Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-bold text-gray-200 group-hover:text-white transition-colors">
                        {feature.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="text-[9px] font-mono font-medium bg-[#10B981]/5 text-[#10B981] border border-[#10B981]/10 px-2 py-0 rounded shrink-0"
                      >
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed font-normal">
                      {feature.description}
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
};

export default Features;
