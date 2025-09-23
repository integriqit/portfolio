import { Badge } from "../components/ui/Badge";
import { features } from "../data/features";

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 bg-dark-bg relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,hsl(280_100%_70%/0.1)_1px,transparent_1px),linear-gradient(hsl(280_100%_70%/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-neo-cyan/10 border border-neo-cyan/20 rounded-full mb-6">
            <span className="text-sm font-medium text-neo-cyan">
              💳 Fintech Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Smart Finance for
            <span className="bg-gradient-secondary bg-clip-text text-transparent block">
              Everyday Life
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Simplifying payments, transfers, and savings for millions of users
            in Bangladesh.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500"></div>

              <div className="relative p-8 rounded-3xl border border-border/20 bg-dark-elevated/80 backdrop-blur-sm group-hover:border-primary/30 transition-all duration-500 hover:shadow-elevated">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-surface rounded-2xl flex items-center justify-center group-hover:shadow-neon group-hover:scale-110 transition-all duration-500">
                      <feature.icon className={`h-8 w-8 ${feature.color}`} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-4">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary border-primary/20">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Animated corner accent */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-primary rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
