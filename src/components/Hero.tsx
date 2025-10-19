import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 md:px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Turning data into insights and ideas into{" "}
              <span className="neon-text animate-neon-pulse">solutions 💡</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Hi, I'm <span className="font-semibold neon-text">Chakramahanti Jawahar</span> — 
              a fresher passionate about front-end development, Python, and cloud deployment.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground neon-glow hover:scale-105 transition-all"
                asChild
              >
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group neon-border hover:bg-primary/10 hover:scale-105 transition-all"
                asChild
              >
                <a href="#" download>
                  <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                  View Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-in-right hidden md:block">
            <div className="relative z-10 animate-float">
              <div className="glass-card neon-border rounded-3xl p-8 space-y-4">
                <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center neon-glow">
                  <div className="text-6xl animate-float">👨‍💻</div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-gradient-to-r from-primary to-secondary rounded-full w-3/4 neon-glow"></div>
                  <div className="h-4 bg-gradient-to-r from-secondary to-primary rounded-full w-1/2 neon-glow"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-3xl neon-glow"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-secondary/20 rounded-full blur-3xl neon-glow-blue"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
