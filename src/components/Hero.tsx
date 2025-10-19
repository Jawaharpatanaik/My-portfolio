import { ArrowRight, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Turning data into insights and ideas into{" "}
              <span className="gradient-text">solutions 💡</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Hi, I'm <span className="font-semibold text-foreground">Chakramahanti Jawahar</span> — 
              a fresher passionate about front-end development, Python, and cloud deployment.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground"
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
                className="group border-2"
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
              <div className="glass-card rounded-3xl p-8 space-y-4">
                <div className="w-full h-64 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded-full w-3/4"></div>
                  <div className="h-4 bg-muted rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
