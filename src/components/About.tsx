import { Award, Building2, Target, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';

const CountUpMetric = ({
  value,
  duration = 1800,
  isLiveFluditiy = true,
}: {
  value: string;
  duration?: number;
  isLiveFluditiy?: boolean;
}) => {
  const numericTarget = parseInt(value.replace(/[^0-9]/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, '');

  const [count, setCount] = useState(0);
  const [isLiveUpdating, setIsLiveUpdating] = useState(false);
  const currentCountRef = useRef(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const progressRatio = Math.min(progress / duration, 1);
      const easeOutQuad = progressRatio * (2 - progressRatio);
      const currentCount = Math.floor(easeOutQuad * numericTarget);

      currentCountRef.current = currentCount;
      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animateCount);
      }
    };

    requestAnimationFrame(animateCount);
  }, [numericTarget, duration]);

  // Infinite Server-Pulse Simulation Engine
  useEffect(() => {
    if (!isLiveFluditiy) return;

    // Set up intermittent background intervals to simulate dynamic data parsing
    const pulseInterval = setInterval(() => {
      // 30% chance to update the specific metric node layout on this heartbeat pulse
      if (Math.random() > 0.3) {
        setIsLiveUpdating(true);

        let drift = 0;
        const rollChance = Math.random();

        if (suffix === '%') {
          // Keep 100% steady or tiny drop & recovery behavior
          drift = rollChance > 0.85 ? -1 : 0;
        } else if (numericTarget <= 10) {
          // Slow incremental scale for small baseline scopes
          drift = rollChance > 0.92 ? 1 : 0;
        } else {
          // Steady progression variance for larger transaction metrics
          drift = rollChance > 0.7 ? Math.floor(Math.random() * 2) + 1 : 0;
        }

        const nextValue = Math.max(numericTarget, currentCountRef.current + drift);
        currentCountRef.current = nextValue;
        setCount(nextValue);

        // Turn off the flashing indicator state after the animation lifecycle clears
        setTimeout(() => setIsLiveUpdating(false), 600);
      }
    }, 4500); // Ticks globally every 4.5 seconds

    return () => clearInterval(pulseInterval);
  }, [numericTarget, isLiveFluditiy, suffix]);

  return (
    <span
      className={`transition-colors duration-500 ease-out inline-block ${
        isLiveUpdating ? 'text-[#10B981] scale-[1.02] transform' : ''
      }`}
    >
      {count}
      {suffix}
    </span>
  );
};

const About = () => {
  const stats = [
    {
      icon: Users,
      value: '50+',
      label: 'Clients Served',
      live: true,
    },
    {
      icon: Building2,
      value: '5+',
      label: 'Industries Covered',
      live: true,
    },
    {
      icon: Award,
      value: '3+',
      label: 'Recognitions',
      live: false, // Legacy verification keeps static baseline
    },
    {
      icon: Target,
      value: '100%',
      label: 'Client Commitment',
      live: true,
    },
  ];

  return (
    <section id="about" className="py-24 bg-dark-surface/30 relative overflow-hidden">
      {/* Existing Background System Preserved */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-neo-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-neo-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Panel: Content Block Architecture (7 Columns) */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                About{' '}
                <span className="bg-gradient-accent bg-clip-text text-transparent inline-block py-2">
                  IntegriQ IT
                </span>
              </h2>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-xl">
                At IntegriQ IT, we are passionate about leveraging technology to shape a brighter
                future for businesses and individuals. Our journey began with a simple belief:
                innovsolutions can transform industries and drive progress.
              </p>
            </div>

            {/* Structured Minimalist Corporate Info Nodes */}
            <div className="space-y-6 border-l border-gray-900 pl-4">
              <div className="space-y-2 relative">
                <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  Our Mission
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-lg">
                  To empower clients with state-of-the-art software solutions that go beyond
                  expectations — fostering growth, efficiency, and success in every project.
                </p>
              </div>

              <div className="space-y-2 relative">
                <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                  What We Do
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-lg">
                  We are more than a fintech company — we are a strategic partner helping businesses
                  navigate the evolving world of finance and technology through innovation,
                  collaboration, and expertise.
                </p>
              </div>
            </div>
          </div>

          {/* Right Panel: Clean Dashboard Metric Grid (5 Columns) with Active Live CountUp Interfacing */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="group bg-[#111622]/40 border border-gray-900/60 rounded-xl transition-all duration-300 hover:border-[#10B981]/30 hover:bg-[#111622] hover:shadow-[0_0_30px_rgba(16,185,129,0.01)] overflow-hidden relative"
                >
                  {/* Subtle Top Right Green Operational Dot Matrix Indicator */}
                  {stat.live && (
                    <div className="absolute top-3 right-3 flex items-center space-x-1.5 z-20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      <span className="text-[8px] font-mono uppercase tracking-widest text-[#10B981]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Live
                      </span>
                    </div>
                  )}

                  <CardContent className="p-6 text-center relative z-10 flex flex-col items-center justify-center">
                    {/* Icon Container Frame */}
                    <div className="w-10 h-10 bg-[#0B0F17] border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-[#10B981] group-hover:border-[#10B981]/20 transition-all duration-300 mb-4">
                      <Icon className="h-4 w-4" />
                    </div>

                    {/* Metrics Values with Dynamic Real-Time Micro Fluctuations */}
                    <div className="text-2xl md:text-3xl font-bold tracking-tight text-gray-200 group-hover:text-white transition-colors duration-300">
                      <CountUpMetric
                        value={stat.value}
                        duration={1800}
                        isLiveFluditiy={stat.live}
                      />
                    </div>

                    {/* Metrics Subtitles */}
                    <div className="text-[11px] font-medium text-muted-foreground mt-1 tracking-normal">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
