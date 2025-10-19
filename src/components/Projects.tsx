import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Movie Explorer App",
      description:
        "An interactive web application that allows users to explore and search for movies using real-time data from a public API. Designed with a sleek, responsive UI for an engaging user experience.",
      techStack: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "GitHub Pages"],
      github: "https://github.com/Jawaharpatanaik/movie-explorer-app",
      emoji: "🎬",
    },
    {
      title: "Sales Performance Dashboard",
      description:
        "Developed a dynamic dashboard to analyze sales performance and trends, enabling data-driven business decisions. Visualized KPIs such as revenue growth, profit margins, and regional sales insights.",
      techStack: ["Python", "Pandas", "Matplotlib", "Power BI", "Excel"],
      github: "https://github.com/Jawaharpatanaik/sales-performance-dashboard",
      emoji: "📊",
    },
    {
      title: "Host a Static Website on AWS S3",
      description:
        "Deployed a fully functional static website using AWS S3 with CloudFront integration for global content delivery and enhanced performance. Implemented IAM for secure access management.",
      techStack: ["AWS S3", "CloudFront", "IAM", "HTML", "CSS"],
      github: "https://github.com/Jawaharpatanaik/aws-static-website",
      emoji: "☁️",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-6 bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title text-center">My Projects</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mx-auto mb-12 rounded-full"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-6 flex flex-col animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{project.emoji}</div>
              <h3 className="text-xl font-bold mb-3">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full group"
                asChild
              >
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                  <ExternalLink className="ml-auto h-4 w-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
