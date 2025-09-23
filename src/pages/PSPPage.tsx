import { ArrowRight, CheckCircle, CreditCard, Shield } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { pspData } from "../data/services";

const PSPPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,hsl(200_100%_70%/0.1),transparent)]"></div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-20 h-20 bg-gradient-secondary rounded-3xl flex items-center justify-center shadow-neon">
                <CreditCard className="h-10 w-10 text-white" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6">
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Payment Gateway
              </span>
              <br />
              Solutions
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              {pspData.detailedDescription}
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <Button size="lg" className="shadow-neon">
                Start Integration
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                View API Docs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-surface/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Payment{" "}
              <span className="bg-gradient-secondary bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete payment processing solutions for businesses of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pspData.features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-500 border-border/20 bg-dark-elevated/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-secondary rounded-2xl flex items-center justify-center">
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

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
                Powerful{" "}
                <span className="bg-gradient-secondary bg-clip-text text-transparent">
                  Payment Processing
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Streamline your business payments with our comprehensive PSP
                solution.
              </p>

              <div className="space-y-4">
                {pspData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="bg-dark-elevated/50 border-border/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    Security & Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {pspData.techSpecs.map((spec, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="border-primary/20 text-primary">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-secondary text-white">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Process Payments?
                  </h3>
                  <p className="mb-6 opacity-90">
                    Start accepting payments in minutes with our easy
                    integration process.
                  </p>
                  <Button variant="secondary" size="lg" className="w-full">
                    Start Integration
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PSPPage;
