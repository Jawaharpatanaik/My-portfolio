import { useState } from "react";
import { Phone, Mail, Linkedin, Github, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9778419199",
      href: "tel:+919778419199",
    },
    {
      icon: Mail,
      label: "Email",
      value: "jawaharpatanaik@gmail.com",
      href: "mailto:jawaharpatanaik@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/chakramahanti-jawahar",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my GitHub",
      href: "https://github.com/Jawaharpatanaik",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">Let's Connect</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full neon-glow"></div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass-card glass-card-hover neon-border rounded-2xl p-6 flex items-center gap-4 block animate-fade-in hover:neon-glow transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-primary/30 to-secondary/30 neon-glow">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.label}</p>
                  <p className="font-semibold text-foreground">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="glass-card neon-border rounded-2xl p-8 animate-fade-in-delay hover:neon-glow transition-all">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background border-primary/50 focus:border-primary focus:neon-glow transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background border-primary/50 focus:border-primary focus:neon-glow transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background border-primary/50 focus:border-primary focus:neon-glow resize-none transition-all"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full group bg-primary hover:bg-primary/90 neon-glow hover:scale-105 transition-all"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
