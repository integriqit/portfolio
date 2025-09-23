import heroImage from "../assets/bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-dark-bg overflow-hidden"
    >
      {/* Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neo-purple/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neo-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neo-pink/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            {/* <div className="inline-flex items-center px-4 py-2 bg-gradient-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-medium text-primary">
                🇧🇩 Bangladesh’s Trusted Fintech Partner
              </span>
            </div> */}

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-black text-foreground leading-tight">
              Building the Future of
              <span className="bg-gradient-accent bg-clip-text text-transparent block mt-2">
                Digital Finance in Bangladesh
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              At <strong>IntegriQ IT</strong>, we empower businesses and
              individuals with secure, reliable, and innovative digital
              financial solutions — making finance simpler, faster, and more
              accessible for everyone.
            </p>

            {/* CTA */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" className="text-lg px-8 py-6">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Live Demo
              </Button>
            </div> */}

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-surface rounded-xl group-hover:shadow-neon transition-all duration-300">
                    <TrendingUp className="h-6 w-6 text-neo-purple" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-surface rounded-xl group-hover:shadow-neon transition-all duration-300">
                    <Shield className="h-6 w-6 text-neo-cyan" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Secure</div>
              </div>
              <div className="text-center group">
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-gradient-surface rounded-xl group-hover:shadow-neon transition-all duration-300">
                    <Zap className="h-6 w-6 text-neo-pink" />
                  </div>
                </div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div> */}
          </div>

          {/* Right Content: Hero Image */}
          <div className="relative">
            <div className="relative z-10 group">
              <img
                src={heroImage}
                alt="IntegriQ IT Solutions"
                className="w-full h-auto rounded-xl shadow-elevated"
              />
              <div className="absolute inset-0 bg-gradient-accent opacity-10 rounded-xl blur-lg group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>

            {/* Floating Accent */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-xl shadow-neon animate-float opacity-80"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
