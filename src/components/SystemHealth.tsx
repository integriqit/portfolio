import { Activity, Cpu, ShieldCheck, Zap } from 'lucide-react';

const SystemHealth = () => {
  const metrics = [
    {
      icon: Activity,
      title: '99.99% Core SLA',
      subtitle: 'High availability architecture backed by fault-tolerant multi-zone servers.',
      accent: true,
    },
    {
      icon: Zap,
      title: '< 50ms Engine Latency',
      subtitle: 'Low latency financial transaction settlement pipelines.',
      accent: false,
    },
    {
      icon: Cpu,
      title: '10K+ Max TPS Capacity',
      subtitle: 'Asynchronous processing ledger built for national bulk traffic spikes.',
      accent: false,
    },
    {
      icon: ShieldCheck,
      title: 'In-line Fraud Detection',
      subtitle: 'Rule engine parsing anomalies dynamically pre-authorization.',
      accent: false,
    },
  ];

  return (
    <section
      id="security"
      className="bg-[#0B0F17] text-white py-24 px-6 sm:px-12 md:px-24 relative overflow-hidden border-b border-gray-950"
    >
      {/* Background Seamless Glow Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Side: Layout Heading and Split Metric Grid */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-8">
            <span className="text-xs font-semibold tracking-wider uppercase text-[#10B981] bg-[#10B981]/10 px-3 py-1 rounded-md border border-[#10B981]/20">
              System Telemetry
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 tracking-tight leading-tight">
              Built for Scale. <br />
              <span className="text-[#10B981]">Hardened</span> for Security.
            </h2>
          </div>

          {/* Compact 2-column or stacked grid specifically tracking metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {metrics.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <div
                  key={idx}
                  className={`bg-[#111622] border rounded-xl p-5 transition-all duration-300
                    ${
                      metric.accent
                        ? 'border-[#10B981]/40 shadow-[0_0_20px_rgba(16,185,129,0.03)]'
                        : 'border-gray-800/60 hover:border-[#10B981]/30'
                    }`}
                >
                  <div
                    className={`p-2 rounded-lg w-fit ${metric.accent ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#0B0F17] text-gray-400'}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm mt-3 text-gray-200">{metric.title}</h4>
                  <p className="text-[11px] text-gray-400 mt-1 leading-relaxed">
                    {metric.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: The Interactive Live Monitoring Terminal Dashboard */}
        <div className="lg:col-span-7 bg-[#111622] border border-gray-900 rounded-2xl p-6 min-h-[400px] flex flex-col justify-between relative overflow-hidden hover:border-[#10B981]/30 transition-colors duration-300 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#10B981]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Dashboard Window Header Control Row */}
          <div className="flex items-center justify-between border-b border-gray-800 pb-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
              <span className="text-[11px] text-gray-500 font-mono ml-2 tracking-wide">
                integriq_core_health.sys
              </span>
            </div>

            {/* Live Pulsing Infrastructure Badge */}
            <div className="flex items-center gap-2 text-[10px] font-mono uppercase bg-[#10B981]/10 text-[#10B981] px-2.5 py-1 rounded border border-[#10B981]/20 tracking-wider">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]"></span>
              </span>
              Operational Logs
            </div>
          </div>

          {/* Running Terminal Log Output Stack */}
          <div className="font-mono text-xs space-y-3.5 my-6 flex-1 justify-center flex flex-col">
            <p className="text-gray-500">
              {'// Connecting terminal framework metrics monitoring nodes...'}
            </p>
            <p className="text-gray-300">
              <span className="text-[#10B981]">➜ HEALTH_CHECK</span> status:{' '}
              <span className="text-[#10B981]">OK</span> | cluster_nodes:{' '}
              <span className="text-blue-400">4/4 ACTIVE</span>
            </p>
            <p className="text-gray-300">
              <span className="text-purple-400">⚡ INFRA_LOAD:</span> Ledger queue throughput
              standard at <span className="text-[#10B981]">0.02% variance</span>.
            </p>
            <p className="text-gray-400">
              <span className="text-blue-400">✔ CACHE_LAYER:</span> Redis pipelines operating at
              sub-millisecond execution times.
            </p>
            <p className="text-gray-300">
              <span className="text-[#10B981]">➜ API_GATEWAY</span> latency check:{' '}
              <span className="text-[#10B981]">34ms</span> response code{' '}
              <span className="text-[#10B981]">200 OK</span>
            </p>
          </div>

          {/* Bottom Card Summary Output Row */}
          <div className="bg-[#0B0F17] border border-gray-800/80 rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-semibold uppercase text-gray-500 tracking-wider">
                Real-time Node Activity
              </p>
              <p className="text-xs font-bold text-gray-200 mt-0.5">
                Parsing localized network transactional traffic logs...
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-gray-400 bg-[#111622] px-2 py-1 rounded border border-gray-800">
                Uptime: 100.00%
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemHealth;
