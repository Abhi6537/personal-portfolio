import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye, RefreshCw, CheckCircle, AlertCircle } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Mess Saathi',
    description: 'A mess finder web app using React and Flask with authentication, location filtering, and user dashboard.',
    tech: ['Vite', 'TypeScript', 'React', 'Tailwind CSS', 'shadcn-ui', 'SQLite', 'Flask', 'Python'],
    image: '/mess-sathi.png',
    frontendCodeUrl: 'https://github.com/Abhi6537/MessSathi-Frontend.git',
    backendCodeUrl: 'https://github.com/Abhi6537/MessSathi-Backend.git',
    showDemo: false,
    showExternal: false
  },
  {
    id: 2,
    title: 'GharKaKaam',
    description: 'GharKaKaam is a comprehensive home service platform that connects households with verified professionals including plumbers, electricians, cleaners, and more.',
    tech: ['React', 'Vite', 'TypeScript', 'shadcn-ui', 'Tailwind CSS', 'Figma'],
    image: '/gharkakaam.png',
    demoUrl: 'https://youtu.be/28vppcNVrNU?si=tTRPCN2hvL4DpCkI',
    codeUrl: 'https://github.com/Abhi6537/GharKaKaam',
    showDemo: true,
    showExternal: true
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'Personal portfolio showcasing my skills and projects with creative design and smooth animations.',
    tech: ['React', 'Vite', 'TypeScript', 'shadcn-ui', 'Tailwind CSS', 'Figma'],
    image: '/portfolio.png',
    codeUrl: 'https://github.com/Abhi6537/abhinandan-ghosh',
    showDemo: false,
    showExternal: false
  }
];

// Generate random captcha with mix of characters that look similar but are different
const generateCaptcha = () => {
  const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '2', '3', '4', '5', '6', '7', '8', '9'];
  const confusingPairs = [
    ['0', 'O'], ['1', 'l', 'I'], ['5', 'S'], ['6', 'b'], ['8', 'B'], ['9', 'g'], ['rn', 'm']
  ];
  
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    if (Math.random() > 0.7 && confusingPairs.length > 0) {
      const pair = confusingPairs[Math.floor(Math.random() * confusingPairs.length)];
      captcha += pair[Math.floor(Math.random() * pair.length)];
    } else {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
  }
  return captcha;
};

export const Projects = () => {
  const [inView, setInView] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [captcha, setCaptcha] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [inputMethod, setInputMethod] = useState<'none' | 'typing' | 'pasting'>('none');
  const [showError, setShowError] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setUserInput('');
    setIsVerified(false);
    setCopiedToClipboard(false);
    setInputMethod('none');
    setShowError(false);
  };

  // Handle Ctrl+C copy detection
  useEffect(() => {
    const handleCopy = () => {
      const selection = window.getSelection()?.toString();
      if (selection === captcha) {
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 2000);
      }
    };

    document.addEventListener('copy', handleCopy);
    return () => document.removeEventListener('copy', handleCopy);
  }, [captcha]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
    setShowError(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Allow Ctrl+C for copying
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
      return;
    }
    
    // Allow Ctrl+V for pasting
    if ((e.ctrlKey || e.metaKey) && e.key === 'v') {
      return;
    }
    
    // Allow Enter to verify
    if (e.key === 'Enter') {
      if (userInput === captcha && userInput.length > 0) {
        setIsVerified(true);
        setShowError(false);
      } else {
        setShowError(true);
      }
      return;
    }
    
    // Allow Backspace for deleting
    if (e.key === 'Backspace') {
      return;
    }
    
    // Allow navigation keys
    if (['Tab', 'Shift', 'Alt', 'Control', 'Meta', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(e.key)) {
      return;
    }
    
    // Block all other keys (typing)
    setInputMethod('typing');
    setShowError(true);
    e.preventDefault();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault(); // Prevent default paste behavior
    const pastedText = e.clipboardData.getData('text');
    setInputMethod('pasting');
    setUserInput(pastedText);
    
    // Check if pasted text matches captcha but don't auto-verify
    if (pastedText === captcha) {
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-handwritten text-5xl md:text-6xl font-bold text-primary mb-6">
            Ctrl C + Ctrl V
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Chalo kuch to banaya hai
            <span className="font-handwritten text-accent text-xl"> Half developer, half prompt engineer </span>
          </p>
        </div>

        {/* Captcha Section */}
        {!isVerified && (
          <div className={`max-w-md mx-auto mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="bg-card border-2 border-accent/20 rounded-2xl p-8 shadow-2xl backdrop-blur-sm">
              <div className="text-center mb-6">
                <h3 className="font-handwritten text-2xl font-bold text-foreground mb-2">
                  Can you Copy-Paste 
                </h3>
                <p className="text-sm text-muted-foreground">
                   Please do this to see my Projects :)  
                </p>
              </div>

              {/* Captcha Display */}
              <div className="relative mb-6">
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-dashed border-accent/30 rounded-lg p-6 mb-4">
                  <div className="flex items-center justify-center">
                    <div className="font-handwritten text-3xl font-bold text-primary tracking-wider select-all bg-background/50 px-4 py-2 rounded-lg border border-accent/20 cursor-pointer hover:bg-accent/5 transition-colors">
                      {captcha}
                    </div>
                  </div>
                  
                  {copiedToClipboard && (
                    <div className="text-center mt-2">
                      <span className="text-sm text-green-600 font-medium">✓ Copied! (Ctrl+C)</span>
                    </div>
                  )}
                </div>

                <button
                  onClick={refreshCaptcha}
                  className="absolute top-2 right-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground p-2 rounded-lg transition-all hover:rotate-180 duration-300"
                  title="Refresh captcha"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {/* Input Field */}
              <div className="space-y-4">
                <div className="relative">
                  <input
                    ref={inputRef}
                    type="text"
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onPaste={handlePaste}
                    placeholder="Paste the captcha here (Ctrl+V)"
                    className={`w-full p-4 border-2 rounded-lg bg-background font-handwritten text-lg transition-all ${
                      showError 
                        ? 'border-red-500 focus:border-red-500 text-red-600' 
                        : isVerified 
                          ? 'border-green-500 focus:border-green-500 text-green-600'
                          : 'border-accent/30 focus:border-accent'
                    } focus:outline-none focus:ring-0`}
                  />
                  
                  {isVerified && (
                    <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 w-6 h-6" />
                  )}
                  
                  {showError && inputMethod === 'typing' && (
                    <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 w-6 h-6" />
                  )}
                </div>

                {/* Error Messages */}
                {showError && inputMethod === 'typing' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                    <p className="text-red-600 text-sm font-medium">❌ No typing allowed!</p>
                    <p className="text-red-500 text-xs mt-1">You must copy and paste the captcha</p>
                  </div>
                )}

                {showError && inputMethod === 'pasting' && userInput !== captcha && userInput.length > 0 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-center">
                    <p className="text-red-600 text-sm font-medium">❌ Incorrect captcha!</p>
                    <p className="text-red-500 text-xs mt-1">Make sure you copied the exact text</p>
                  </div>
                )}

                {!showError && inputMethod === 'pasting' && userInput === captcha && userInput.length > 0 && !isVerified && (
                  <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-center backdrop-blur-sm">
                    <p className="text-accent text-sm font-medium"> Captcha matches!</p>
                    <button
                      onClick={() => {
                        setIsVerified(true);
                        setShowError(false);
                      }}
                      className="mt-3 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2 rounded-lg font-medium font-handwritten text-base transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                    >
                      Verify & Continue
                    </button>
                  </div>
                )}

                {isVerified && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                    <p className="text-green-600 text-sm font-medium"> Perfect! You can copy-paste!</p>
                    <p className="text-green-500 text-xs mt-1">Welcome to my projects section</p>
                  </div>
                )}

                {/* Instructions */}
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                   No typing allowed - you must copy and paste the captcha             </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid - Only show when verified */}
        {isVerified && (
          <div className={`transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`group relative transition-all duration-700 ${
                    inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay with actions */}
                    <div className={`absolute inset-0 bg-primary/90 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                      hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      {/* Demo button */}
                      {project.showDemo && project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-accent text-accent-foreground p-3 rounded-full hover:scale-110 transition-transform"
                          title="View Demo"
                        >
                          <Eye className="w-5 h-5" />
                        </a>
                      )}
                      
                      {/* GitHub buttons */}
                      {project.frontendCodeUrl && project.backendCodeUrl ? (
                        <>
                          <a
                            href={project.frontendCodeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-secondary text-secondary-foreground p-3 rounded-full hover:scale-110 transition-transform"
                            title="Frontend Code"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                          <a
                            href={project.backendCodeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-muted text-muted-foreground p-3 rounded-full hover:scale-110 transition-transform"
                            title="Backend Code"
                          >
                            <Github className="w-5 h-5" />
                          </a>
                        </>
                      ) : project.codeUrl ? (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-secondary text-secondary-foreground p-3 rounded-full hover:scale-110 transition-transform"
                          title="View Code"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      ) : null}
                      
                      {/* External link */}
                      {project.showExternal && project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-primary text-primary-foreground p-3 rounded-full hover:scale-110 transition-transform"
                          title="External Link"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-bold text-xl text-foreground group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};