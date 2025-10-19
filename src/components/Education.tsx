import { GraduationCap } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science",
      period: "2022 – 2025",
      institution: "Centurion University of Technology and Management",
      location: "Paralakhemundi, Odisha",
    },
    {
      degree: "Polytechnic",
      period: "2019 – 2022",
      institution: "Govt. Polytechnic, Gajapati",
      location: "Paralakhemundi, Odisha",
    },
    {
      degree: "Class X",
      period: "2019",
      institution: "St. Ann's Convent School",
      location: "Pathapatnam, Andhra Pradesh",
    },
  ];

  return (
    <section id="education" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title text-center">Education</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full neon-glow"></div>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover neon-border rounded-2xl p-6 flex gap-4 animate-fade-in hover:neon-glow transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0">
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 neon-glow">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                  <span className="text-sm text-muted-foreground font-medium">{edu.period}</span>
                </div>
                <p className="text-foreground font-medium">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
