import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="solutions" className="py-10 bg-dark-surface/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,hsl(280_100%_70%/0.1),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20 px-4">
          {/* Monospace System Pill Badge */}
          <div className="inline-flex items-center px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/20 rounded-md mb-4 select-none">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-[#10B981]">
              Capabilities Core
            </span>
          </div>

          {/* Main Headliner Section */}
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Our{' '}
            <span className="bg-gradient-secondary bg-clip-text text-transparent inline-block py-2">
              Digital Solutions
            </span>
          </h2>

          {/* Subtitle Content Layer */}
          <p className="text-sm text-gray-400 max-w-xl mx-auto mt-4 leading-relaxed font-normal">
            Professional enterprise-ready software engineering pipelines architected for
            high-throughput scalability and flawless operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link key={index} to={service.path}>
              <Card className="group hover:shadow-neon transition-all duration-500 hover:scale-105  overflow-hidden relative cursor-pointer h-full">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"></div>

                <CardHeader className="relative z-10">
                  <div
                    className={`w-14 h-14 ${service.gradient} rounded flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-neon transition-all duration-500`}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed text-justify">
                    {service.description.split(' ').slice(0, 9).join(' ') +
                      (service.description.split(' ').length > 9 ? '...' : '')}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-4">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 group-hover:shadow-glow transition-all duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary-glow transition-colors duration-300">
                    Learn more{' '}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
