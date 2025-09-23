import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { services, solutions } from "../data/services";

const Services = () => {
  return (
    <section
      id="services"
      className="py-10 bg-dark-surface/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_500px_at_50%_200px,hsl(280_100%_70%/0.1),transparent)]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Our Digital Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {solutions.subtitle}
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
                    className={`w-14 h-14 ${service.gradient} rounded flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-neon transition-all duration-500`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mr-3 group-hover:shadow-glow transition-all duration-300"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-primary text-sm font-medium group-hover:text-primary-glow transition-colors duration-300">
                    Learn more{" "}
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
