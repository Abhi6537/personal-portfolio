import { Home, User, BookOpen, GraduationCap, Briefcase, Mail } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: BookOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-6 h-6 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-20 left-10 w-4 h-4 bg-primary/20 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/4 w-8 h-8 border-2 border-accent/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center shadow-paper">
                <span className="font-handwritten text-xl font-bold text-white">A</span>
              </div>
              <div>
                <h3 className="font-handwritten text-xl font-bold text-primary">Abhinandan Ghosh</h3>
                <p className="text-sm text-muted-foreground">Frontend Developer & Designer</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Creating beautiful digital experiences with passion and creativity. 
              Always learning, always growing.
            </p>
          </div>

          {/* Empty space for layout balance */}
          <div></div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-handwritten text-2xl font-semibold text-primary">Let's Connect</h4>
            <div className="space-y-3">
              <p className="text-muted-foreground">
                Ready to work together on your next project?
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-lg font-medium text-sm shadow-paper transition-smooth hover:shadow-float hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center text-muted-foreground">
              <span>© 2025 All Rights Reserved - </span>
              <span className="font-handwritten text-orange-500 font-bold">Abhinandan Ghosh</span>
            </div>
          </div>
        </div>

        {/* Decorative line */}
        <div className="mt-8 flex justify-center">
          <svg className="w-40 h-2" viewBox="0 0 160 8">
            <path
              d="M5 4 Q80 1 155 4"
              stroke="hsl(var(--accent))"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              className="opacity-30"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
};