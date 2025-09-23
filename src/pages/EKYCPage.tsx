import { ArrowRight } from "lucide-react";
import EKYCImage from "../assets/EKYC.jpeg";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/Card";
import { appSteps, EKYCFeatures } from "../data/services";

const EKYCPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-subtle overflow-hidden">
        <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Digital Identity
              </span>
              <br />
              Verification System
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              Seamless eKYC onboarding with NID integration, biometric
              authentication, and real-time verification.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="shadow-neon hover:scale-105 transition-transform duration-300">
                Try Live Demo <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-600 via-indigo-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            <div className="relative shadow-neon rounded-3xl overflow-hidden w-72 max-w-md">
              <img
                src={EKYCImage}
                alt="eKYC Hero"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-surface/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              Features{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Highlights
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Advanced technology for secure, smooth, and fast digital
              onboarding.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EKYCFeatures.map((f, idx) => (
              <Card
                key={idx}
                className="group bg-dark-elevated/50 border border-border/20 hover:scale-105 hover:shadow-lg transition-all duration-500">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <f.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <CardTitle className="text-lg md:text-xl">
                        {f.title}
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="mt-1 group-hover:bg-indigo-600 transition-colors">
                        {f.highlight}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {f.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Screenshots */}

      <section className="py-20 bg-dark-surface/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
              eKYC{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Walkthrough
              </span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to complete your verification quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {appSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded shadow-lg border border-border/20 bg-dark-surface/50 backdrop-blur-md hover:scale-105 transition-transform duration-300">
                {/* Step Badge */}
                <div className="absolute -top-4 -left-4 bg-gradient-primary text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
                  Step {idx + 1}
                </div>

                {/* Image */}
                <div className="w-full aspect-[4/5] flex items-center justify-center overflow-hidden rounded-t-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-3/4 h-3/4 object-contain"
                  />
                </div>

                {/* Content */}
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EKYCPage;
