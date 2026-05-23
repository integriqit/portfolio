import { ArrowRight, GitBranch, Rocket, ShieldCheck, Terminal } from 'lucide-react';
import { Card } from '../components/ui/Card';

const ProcessWorkflow = () => {
  const steps = [
    {
      phase: '01',
      icon: Terminal,
      title: 'Architecture & Discovery',
      description:
        'We map data routing models, security layers, and API interface points to build an exhaustive structural project blueprint before writing code.',
      deliverable: 'System Design Spec',
    },
    {
      phase: '02',
      icon: GitBranch,
      title: 'Agile Engineering Sprints',
      description:
        'Modular development utilizing clean, modular TypeScript architecture. We work in structured sprints with absolute visibility via regular code reviews.',
      deliverable: 'Staging Pipeline Builds',
    },
    {
      phase: '03',
      icon: ShieldCheck,
      title: 'Rigorous Testing & QA',
      description:
        'Comprehensive functional testing, security stress-testing, and database load validation to guarantee complete runtime stability under peak traffic.',
      deliverable: 'Zero-Vulnerability Signoff',
    },
    {
      phase: '04',
      icon: Rocket,
      title: 'Optimized Cloud Launch',
      description:
        'Deployment to highly scalable, low-latency edge servers with integrated CDN distribution networks, secure caching setups, and live monitoring matrix loops.',
      deliverable: 'Production Deployment',
    },
  ];

  return (
    <section
      id="process"
      className="bg-[#0B0F17] text-white py-24 px-6 sm:px-12 md:px-24 relative overflow-hidden border-b border-gray-950"
    >
      {/* Existing Background System & Soft Mesh Layer Applied */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(280_100%_70%/0.08)_1px,transparent_1px),linear-gradient(hsl(280_100%_70%/0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/20 rounded-md mb-4">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#10B981]">
              Execution Strategy
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Our Engineering{' '}
            <span className="bg-gradient-secondary bg-clip-text text-transparent inline-block py-2">
              Workflow Lifecycle
            </span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
            From raw system design schemas to resilient cloud deployments—how we consistently build
            and ship predictable corporate products.
          </p>
        </div>

        {/* 4-Column Timeline Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Subtle connecting architectural grid runner line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[52px] left-8 right-8 h-[1px] bg-gradient-to-r from-gray-900 via-[#10B981]/20 to-gray-900 z-0 pointer-events-none" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                className="group bg-[#111622]/40 border border-gray-900/60 rounded-xl transition-all duration-300 hover:border-[#10B981]/30 hover:bg-[#111622] hover:shadow-[0_0_30px_rgba(16,185,129,0.01)] overflow-hidden relative flex flex-col justify-between z-10 cursor-pointer"
              >
                <div className="p-6">
                  {/* Top Header Step Matrix */}
                  <div className="flex items-center justify-between mb-6">
                    {/* Modern Dynamic Icon Box */}
                    <div className="w-10 h-10 bg-[#0B0F17] border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-[#10B981] group-hover:border-[#10B981]/20 transition-all duration-300 shrink-0">
                      <Icon className="h-4 w-4" />
                    </div>

                    {/* Numeric Tracking Code */}
                    <span className="text-sm font-mono font-black text-gray-800 group-hover:text-[#10B981]/80 transition-colors duration-300 select-none">
                      {step.phase}
                    </span>
                  </div>

                  {/* Structural Text Descriptions */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-gray-200 group-hover:text-white transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-[11px] leading-relaxed font-normal text-justify">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Micro Meta Blueprint Footers */}
                <div className="mt-auto px-6 py-3 bg-[#0B0F17]/30 border-t border-gray-950 flex items-center justify-between text-[10px] font-mono text-gray-500 transition-colors group-hover:text-gray-400">
                  <span>Key Output</span>
                  <div className="flex items-center gap-1 font-semibold text-gray-400 group-hover:text-[#10B981] transition-colors">
                    <span>{step.deliverable}</span>
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessWorkflow;
