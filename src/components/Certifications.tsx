import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Python Essentials Course",
      issuer: "Cisco Networking Academy",
      year: "2023",
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata Forage",
      year: "2025",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-center">Certifications</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-6 flex gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="font-bold text-lg leading-tight">{cert.title}</h3>
                </div>
                <p className="text-muted-foreground">{cert.issuer}</p>
                <p className="text-sm text-muted-foreground font-medium mt-1">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
