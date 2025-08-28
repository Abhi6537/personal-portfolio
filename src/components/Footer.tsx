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
        <div className="grid md:grid-cols-1 gap-12 mb-12">
          {/* Brand Section - Centered */}
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center shadow-paper overflow-hidden">
                <img 
                  src="/profile-image.jpg" 
                  alt="Abhinandan Ghosh" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-left">
                <h3 className=" text-xl font-bold text foreground">Abhinandan Ghosh</h3>
                <p className="font-handwritten text-xs text-muted-foreground">Great things start with simple ideas</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
              
            </p>
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