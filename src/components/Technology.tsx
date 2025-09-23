import { Badge } from "../components/ui/Badge";
import { technologies } from "../data/technologies";

const Technology = () => {
  return (
    <section
      id="technology"
      className="py-24 bg-gradient-to-b from-dark-bg to-dark-elevated relative overflow-hidden"
    >
      {/* Subtle animated background dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[2px] h-[2px] bg-blue-400/20 rounded-full animate-pulse top-10 left-20"></div>
        <div className="absolute w-[3px] h-[3px] bg-cyan-400/20 rounded-full animate-pulse top-1/2 left-1/3"></div>
        <div className="absolute w-[2px] h-[2px] bg-emerald-400/20 rounded-full animate-pulse bottom-10 right-20"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-5 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-blue-400">
              ⚡ Technology Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Innovating with
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent block">
              Next-Gen Tech
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Harnessing modern frameworks, cloud infrastructure, and scalable
            solutions to deliver secure and lightning-fast fintech experiences.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative group transform transition-all duration-500 hover:-translate-y-2 hover:scale-105"
            >
              <div className="absolute inset-0 rounded bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-20 blur-2xl transition-all duration-500"></div>

              <div className="relative p-8 rounded bg-dark-elevated/90 border border-border/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow duration-500">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full group-hover:scale-110 transition-transform duration-500">
                      <tech.icon className={`h-10 w-10 ${tech.color}`} />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-blue-400 transition-colors duration-300">
                        {tech.title}
                      </h3>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-400 border border-blue-500/20"
                      >
                        {tech.badge}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                </div>

                {/* Floating animated accent */}
                <div className="absolute -top-3 -left-3 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-60 animate-bounce-slow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
