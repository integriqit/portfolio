import { Award, Building2, Target, Users } from "lucide-react";
import { Card, CardContent } from "../components/ui/Card";

const About = () => {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Clients Served",
      color: "text-neo-purple",
    },
    {
      icon: Building2,
      value: "5+",
      label: "Industries Covered",
      color: "text-neo-cyan",
    },
    {
      icon: Award,
      value: "3+",
      label: "Recognitions",
      color: "text-neo-pink",
    },
    {
      icon: Target,
      value: "100%",
      label: "Client Commitment",
      color: "text-neo-blue",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-dark-surface/30 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-neo-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-neo-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
                About{" "}
                <span className="bg-gradient-accent bg-clip-text text-transparent">
                  IntegriQ IT
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                At IntegriQ IT, we’re passionate about leveraging technology to
                shape a brighter future for businesses and individuals. Our
                journey began with a simple belief: innovative solutions can
                transform industries and drive progress.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower clients with state-of-the-art software solutions that
                go beyond expectations — fostering growth, efficiency, and
                success in every project.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">What We Do</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are more than a fintech company — we are a strategic partner
                helping businesses navigate the evolving world of finance and
                technology through innovation, collaboration, and expertise.
              </p>
            </div>
          </div>

          {/* Right Content: Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-500 hover:scale-105 border-border/20 bg-dark-elevated/80 backdrop-blur-sm overflow-hidden relative"
              >
                <CardContent className="p-6 text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-surface rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-black text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
