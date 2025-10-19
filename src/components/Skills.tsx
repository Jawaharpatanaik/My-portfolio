import { Code2, Layout, BarChart3, Cloud, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming & Scripting",
      skills: ["Python", "JavaScript", "HTML", "CSS"],
    },
    {
      icon: Layout,
      title: "Front-End Tools",
      skills: ["React", "Tailwind CSS", "GitHub Pages"],
    },
    {
      icon: BarChart3,
      title: "Data Analysis",
      skills: ["SQL", "Pandas", "Matplotlib", "Power BI"],
    },
    {
      icon: Cloud,
      title: "Cloud Technologies",
      skills: ["AWS S3", "CloudFront", "IAM", "EC2"],
    },
    {
      icon: Wrench,
      title: "Other Tools",
      skills: ["Git", "VS Code", "Excel", "Jupyter Notebook"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <h2 className="section-title text-center">Technical Skills</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full neon-glow"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover neon-border rounded-2xl p-6 animate-fade-in hover:neon-glow transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 neon-glow">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/20 border border-primary/50 rounded-full text-sm font-medium text-foreground hover:bg-primary/30 hover:neon-glow transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
