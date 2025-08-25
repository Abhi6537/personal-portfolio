import { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin, Twitter, Send, Coffee } from 'lucide-react';

export const Contact = () => {
  const [inView, setInView] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: '#', color: 'hover:text-gray-800' },
    { icon: Linkedin, label: 'LinkedIn', url: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, label: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: Mail, label: 'Email', url: 'mailto:hello@example.com', color: 'hover:text-red-500' }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-secondary/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-handwritten text-5xl md:text-6xl font-bold text-primary mb-6">
            Let's Create Something Amazing
          </h2>
          <div className="flex items-center justify-center space-x-2 text-lg text-muted-foreground">
            <Coffee className="w-5 h-5 text-accent" />
            <span>Always up for a creative conversation!</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info & Social */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {/* Contact Info */}
            <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-6 shadow-paper">
              <h3 className="font-handwritten text-2xl font-semibold text-primary mb-4">
                Let's connect!
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to work on new projects and collaborate with 
                creative people. Whether you have a project in mind, want to discuss 
                opportunities, or just want to chat about code and design, I'd love to hear from you!
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="font-handwritten text-2xl font-semibold text-primary mb-6">
                Find me around the web
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.url}
                      className={`bg-card hover:bg-secondary/50 p-4 rounded-xl shadow-paper transition-all duration-300 hover:shadow-float hover:scale-105 group ${social.color}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <Icon className="w-6 h-6 text-muted-foreground group-hover:text-current transition-colors" />
                        <span className="font-medium text-foreground group-hover:text-current transition-colors">
                          {social.label}
                        </span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Fun fact */}
            <div className="bg-accent/5 border-l-4 border-accent rounded-r-lg p-4">
              <p className="font-handwritten text-lg text-accent">
                "The best projects are born from great conversations!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};