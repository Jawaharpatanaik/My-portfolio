const About = () => {
  return (
    <section id="about" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-center">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full neon-glow"></div>
        
        <div className="glass-card neon-border rounded-3xl p-8 md:p-12 animate-fade-in hover:neon-glow transition-all">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            I'm a passionate and detail-oriented fresher skilled in{" "}
            <span className="text-primary font-semibold">front-end development</span>,{" "}
            <span className="text-secondary font-semibold">Python programming</span>, and{" "}
            <span className="text-primary font-semibold">AWS cloud deployment</span>. 
            I enjoy building responsive web applications, analyzing data, and exploring 
            cloud technologies to create efficient, scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
