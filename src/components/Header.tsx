import { Moon, Sun, Keyboard, Command, Github, Mail } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export const Header = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const roles = [
    { text: 'Frontend Developer', color: 'text-accent' },
    { text: 'UI/UX Designer', color: 'text-primary' },
    { text: 'Learning Backend', color: 'text-muted-foreground' },
    { text: 'Web Developer', color: 'text-foreground' }
  ];

  const shortcuts = [
    { key: 'G', action: 'GitHub', icon: Github, url: 'https://github.com' },
    { key: 'M', action: 'Mail', icon: Mail, url: 'mailto:contact@example.com' },
    { key: 'K', action: 'Skills', icon: Keyboard, url: '#skills' },
    { key: 'P', action: 'Projects', icon: Command, url: '#projects' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Profile & Logo */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-float">
              <span className="text-white font-bold text-lg">AG</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="flex flex-wrap items-center gap-2">
              {roles.map((role, index) => (
                <div key={index} className="flex items-center">
                  <span className={`font-handwritten text-sm ${role.color} transition-colors`}>
                    {role.text}
                  </span>
                  {index < roles.length - 1 && (
                    <div className="w-1 h-1 bg-accent/50 rounded-full mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Theme toggle & Shortcuts */}
        <div className="flex items-center space-x-4">
          {/* Shortcuts */}
          <div className="relative">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowShortcuts(!showShortcuts)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Keyboard className="w-4 h-4" />
            </Button>
            
            {showShortcuts && (
              <div className="absolute top-full right-0 mt-2 bg-card border border-border rounded-lg shadow-float p-2 min-w-[200px]">
                <div className="text-xs text-muted-foreground mb-2 font-medium">Quick shortcuts</div>
                {shortcuts.map((shortcut) => (
                  <a
                    key={shortcut.key}
                    href={shortcut.url}
                    className="flex items-center justify-between px-2 py-1 rounded hover:bg-secondary/50 transition-colors text-sm"
                  >
                    <div className="flex items-center space-x-2">
                      <shortcut.icon className="w-3 h-3" />
                      <span>{shortcut.action}</span>
                    </div>
                    <kbd className="bg-secondary text-xs px-1.5 py-0.5 rounded">
                      {shortcut.key}
                    </kbd>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-muted-foreground hover:text-foreground"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};