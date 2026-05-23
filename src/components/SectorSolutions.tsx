import { Activity, ArrowUpRight, CheckCircle2, Layers, ShoppingCart } from 'lucide-react';
import { Card } from '../components/ui/Card';

const SectorSolutions = () => {
  const sectors = [
    {
      icon: Layers,
      title: 'Enterprise Systems',
      badge: 'SaaS & Pharma Scale',
      description:
        'Robust, secure web infrastructure designed for high-availability corporate deployments. Custom internal portals engineered with role-based access architectures.',
      capabilities: [
        'Secure IAM & Role Routing',
        'Automated Reporting Pipelines',
        'High-Performance Data Grids',
      ],
      meta: '99.99% Uptime SLA',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Engines',
      badge: 'Next-Gen Fintech',
      description:
        'Blazing fast, lightning-optimized custom commerce storefronts with tightly unified payment routing, global shipping integrations, and real-time inventory webhooks.',
      capabilities: [
        'Dynamic Edge Caching',
        'Seamless MFS/Fintech Gateways',
        'Optimized Multi-Step Checkout',
      ],
      meta: '<120ms Latency',
    },
    {
      icon: Activity,
      title: 'Industrial & Trading Hubs',
      badge: 'Supply Logistics',
      description:
        'Intelligent platforms built for tracking supply chains, dynamic B2B pricing grids, complex shipping matrices, and industrial raw-material trading layers.',
      capabilities: [
        'Real-time Order Operations',
        'Dynamic Pricing Matrices',
        'Inventory Ledger Syncing',
      ],
      meta: 'Automated Ledger Sync',
    },
  ];

  return (
    <section id="sectors" className="py-24 bg-dark-surface/50 relative overflow-hidden">
      {/* Structural Minimalist Grid Background Layer */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(280_100%_70%/0.08)_1px,transparent_1px),linear-gradient(hsl(280_100%_70%/0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/20 rounded-md mb-4">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#10B981]">
              Industry Specializations
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Tailored for High-Growth{' '}
            <span className="bg-gradient-accent bg-clip-text text-transparent inline-block py-2">
              Market Sectors
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Engineered software solutions delivering elite performance, precision database
            architecture, and absolute operational security.
          </p>
        </div>

        {/* Core Sector Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <Card
                key={index}
                className="group bg-[#111622]/40 border border-gray-900/60 rounded-xl transition-all duration-300 hover:border-[#10B981]/30 hover:bg-[#111622] hover:shadow-[0_0_40px_rgba(16,185,129,0.02)] overflow-hidden relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Header Card Block */}
                  <div className="p-8 pb-4 relative">
                    <div className="flex items-center justify-between mb-6">
                      {/* Premium Technical Icon Frame */}
                      <div className="w-12 h-12 bg-[#0B0F17] border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-[#10B981] group-hover:border-[#10B981]/20 transition-all duration-300 shrink-0">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Architecture System Tags */}
                      <span className="text-[10px] font-mono font-medium bg-[#10B981]/5 text-[#10B981] border border-[#10B981]/10 px-2.5 py-0.5 rounded-md tracking-wider">
                        {sector.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-200 group-hover:text-white transition-colors duration-300 mb-3 flex items-center gap-2">
                      {sector.title}
                      <ArrowUpRight className="h-4 w-4 text-gray-600 group-hover:text-[#10B981] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </h3>

                    <p className="text-muted-foreground text-xs leading-relaxed font-normal">
                      {sector.description}
                    </p>
                  </div>

                  {/* Capabilities List Node Mapping */}
                  <div className="px-8 py-4 border-t border-gray-950/40">
                    <ul className="space-y-3">
                      {sector.capabilities.map((capability, capIndex) => (
                        <li
                          key={capIndex}
                          className="flex items-center text-[11px] text-muted-foreground"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]/70 group-hover:text-[#10B981] mr-2.5 shrink-0 transition-colors" />
                          <span className="group-hover:text-gray-300 transition-colors">
                            {capability}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Micro Meta Dashboard Data Strip */}
                <div className="mt-auto px-8 py-4 bg-[#0B0F17]/30 border-t border-gray-950 flex items-center justify-between text-[10px] font-mono text-gray-500 group-hover:text-gray-400 transition-colors">
                  <span>System Architecture</span>
                  <span className="text-gray-400 font-semibold group-hover:text-[#10B981] transition-colors">
                    {sector.meta}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SectorSolutions;
