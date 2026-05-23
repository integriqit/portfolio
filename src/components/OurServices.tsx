import { Cloud, Code2, Cpu, Database, Monitor, Terminal, Wrench } from 'lucide-react';
import { Card } from '../components/ui/Card';

export default function OurServices() {
  const services = [
    {
      icon: Code2,
      code: '01',
      title: 'Custom Software Development',
      description:
        'Tailor-made software solutions designed to meet your specific business needs and workflow requirements with pure performance architectures.',
    },
    {
      icon: Monitor,
      code: '02',
      title: 'Web Application Development',
      description:
        'Responsive, high-performance web applications built with modern engineering frameworks, modular structures, and scalable systems.',
    },
    {
      icon: Database,
      code: '03',
      title: 'Backend & API Development',
      description:
        'Robust and scalable backend frameworks with secure, lightning-fast RESTful APIs designed to reliably fuel your entire digital ecosystem.',
    },
    {
      icon: Cloud,
      code: '04',
      title: 'Cloud & Microservices',
      description:
        'Scalable cloud-native architectures and microservice clustering deployed to ensure complete flexibility, high-availability, and zero downtime.',
    },
    {
      icon: Cpu,
      code: '05',
      title: 'System Integration',
      description:
        'Seamlessly connecting separate enterprise software architectures together to drastically optimize operational data flow and speed.',
    },
    {
      icon: Wrench,
      code: '06',
      title: 'Maintenance & Support',
      description:
        'Ongoing precision monitoring, proactive server optimization, and codebase maintenance loops to guarantee systems remain stable and up-to-date.',
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#0B0F17] text-white py-24 px-6 sm:px-12 md:px-24 relative overflow-hidden border-b border-gray-950"
    >
      {/* Structural Minimalist Technical Accent Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(280_100%_70%/0.08)_1px,transparent_1px),linear-gradient(hsl(280_100%_70%/0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      {/* Atmospheric Blur Node Spotlights */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-[#10B981]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-[#10B981]/3 rounded-full blur-[140px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Component Header Block */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/20 rounded-md mb-4">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#10B981]">
              Capabilities Core
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
            Our{' '}
            <span className="bg-gradient-to-r from-[#10B981] to-[#0d9668] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto mt-4 leading-relaxed font-normal">
            Professional enterprise-ready software engineering pipelines architected for
            high-throughput scalability and flawless operations.
          </p>
        </div>

        {/* Technical Subsystem Dashboard Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group bg-[#111622]/40 border border-gray-900/80 rounded-xl p-6 transition-all duration-300 hover:border-[#10B981]/30 hover:bg-[#111622]/90 hover:shadow-[0_0_30px_rgba(16,185,129,0.02)] overflow-hidden relative flex flex-col justify-between"
              >
                {/* Active Grid Window Anchor Highlights */}
                <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-[#10B981] rounded-l-xl transition-transform duration-300 scale-y-0 origin-center group-hover:scale-y-50" />

                <div>
                  {/* Pseudo Terminal Action Window Micro-Controls */}
                  <div className="flex items-center justify-between mb-8">
                    {/* High-Contrast Dynamic Icon Frame */}
                    <div className="w-12 h-12 bg-[#0B0F17] border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-[#10B981] group-hover:border-[#10B981]/20 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.05)] transition-all duration-300 shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>

                    {/* Window Controls Min/Max Decoration */}
                    <div className="flex items-center gap-1 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white border border-transparent" />
                      <span className="w-1.5 h-1.5 bg-transparent border border-white" />
                      <span className="w-1.5 h-[1px] bg-white" />
                    </div>
                  </div>

                  {/* Core Structural Text Alignment */}
                  <div className="space-y-3">
                    <h3 className="text-sm md:text-base font-bold text-gray-200 group-hover:text-white transition-colors duration-300 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed font-normal group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Micro Meta Core Terminal Indexing String Footer */}
                <div className="mt-8 pt-4 border-t border-gray-900/60 flex items-center justify-between opacity-40 group-hover:opacity-80 transition-opacity duration-300">
                  <div className="flex items-center gap-1 text-[9px] font-mono text-gray-500">
                    <Terminal className="w-3 h-3 text-gray-600" />
                    <span>system_node</span>
                  </div>
                  <span className="text-[9px] font-mono text-[#10B981] bg-[#10B981]/5 px-2 py-0.5 rounded border border-[#10B981]/10 uppercase tracking-wider">
                    [ Svc_Code // {service.code} ]
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
