import { Smartphone } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { mfsData } from "../data/services";

const MFSPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,hsl(280_100%_70%/0.1),transparent)]"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-20 bg-gradient-primary rounded-3xl flex items-center justify-center shadow-neon">
                <Smartphone className="h-10 w-10 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Mobile Financial
              </span>
              <br />
              Services
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Our Mobile Financial Services (MFS) platform provides a
              comprehensive mobile money solution that empowers millions of
              Bangladeshi users with secure, convenient, and accessible
              financial services directly from their mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-surface/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Core{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive mobile financial services designed for Bangladesh's
              digital economy
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {mfsData.features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-500 border-border/20 bg-dark-elevated/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">
                          {feature.title}
                        </CardTitle>
                        <Badge variant="secondary" className="mt-2">
                          {feature.highlight}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MFSPage;
