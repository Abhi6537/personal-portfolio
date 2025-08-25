import { useState } from 'react';
import { Moon, Sun, Menu, X, Home, User, BookOpen, GraduationCap, Briefcase, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navigationLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: BookOpen },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center shadow-paper">
              <span className="font-handwritten text-xl font-bold text-white">A</span>
            </div>
            <div>
              <h1 className="font-handwritten text-xl font-bold text-primary">Abhinandan Ghosh</h1>
              <div className="flex flex-wrap gap-1 text-xs">
                <span className="text-accent">Frontend</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-accent">UI/UX</span>
                <span className="text-muted-foreground">|</span> 
                <span className="text-accent">Backend</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-accent">Web Dev</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-accent transition-smooth font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="w-10 h-10 rounded-lg bg-secondary hover:bg-accent/20 flex items-center justify-center transition-smooth"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-accent" />
              ) : (
                <Moon className="w-5 h-5 text-accent" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-secondary hover:bg-accent/20 flex items-center justify-center transition-smooth"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-accent" />
              ) : (
                <Menu className="w-5 h-5 text-accent" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="grid grid-cols-2 gap-4">
              {navigationLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-card hover:bg-accent/10 transition-smooth text-left"
                  >
                    <Icon className="w-4 h-4 text-accent" />
                    <span className="text-sm font-medium text-foreground">{link.label}</span>
                  </button>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};