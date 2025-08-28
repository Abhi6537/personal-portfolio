import { useEffect, useState } from 'react';
import { Download, Eye, User } from 'lucide-react';
import creativeDoodles from '@/assets/creative-doodles.png';

export const Hero = () => {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20 pt-32">
      {/* Floating creative elements - Mobile responsive */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={creativeDoodles}
          alt="Creative doodles"
          className="absolute top-32 right-4 md:right-20 w-16 md:w-32 h-8 md:h-16 object-cover animate-float opacity-30"
          style={{ animationDelay: '0s' }}
        />
        <div className="absolute top-52 left-4 md:left-10 w-4 md:w-6 h-4 md:h-6 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-8 md:right-40 w-3 md:w-4 h-3 md:h-4 bg-primary rotate-45 animate-float opacity-30" style={{ animationDelay: '4s' }} />
        <div className="absolute top-72 left-8 md:left-1/4 w-6 md:w-8 h-6 md:h-8 border-2 border-accent rounded-full animate-float opacity-25" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Professional Photo */}
        <div className={`relative transition-all duration-1000 ${
          animateText ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`}>
          <div className="relative group">
            <div className="w-64 md:w-80 h-64 md:h-80 mx-auto bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl shadow-polaroid rotate-2 group-hover:rotate-0 transition-smooth overflow-hidden">
              <div className="w-full h-full bg-secondary/50 flex items-center justify-center">
                <img 
                  src="/profile-image.jpg" 
                  alt="Abhinandan Ghosh" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 w-6 md:w-8 h-6 md:h-8 bg-accent rounded-full opacity-70" />
            <div className="absolute -bottom-1 md:-bottom-2 -left-1 md:-left-2 w-4 md:w-6 h-4 md:h-6 bg-primary rotate-45 opacity-50" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Name and tagline */}
          <div className={`transition-all duration-1000 delay-300 ${
            animateText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h1 className="font-handwritten text-4xl md:text-5xl lg:text-7xl font-bold text-primary mb-4">
              Abhinandan Ghosh
            </h1>
            
            {/* Animated underline */}
            <svg className="w-full max-w-md h-4 mb-6" viewBox="0 0 400 16">
              <path
                d="M10 8 Q200 2 390 8"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                className={animateText ? 'animate-draw-line' : ''}
                style={{ strokeDasharray: '200', strokeDashoffset: animateText ? '0' : '200' }}
              />
            </svg>

            <div className="space-y-2">
              <div className="flex flex-wrap gap-2 text-lg font-medium">
                <span className="text-accent">Frontend Developer</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-accent">UI/UX Designer</span>
              </div>
              <div className="flex flex-wrap gap-2 text-lg font-medium">
                <span className="text-accent">Learning Backend</span>
                <span className="text-muted-foreground">|</span>
                <span className="text-accent">Web Developer</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className={`transition-all duration-1000 delay-500 ${
            animateText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              App-e-Teaser <span className="font-handwritten text-accent text-xl">1st Runner Up</span> at JIStech'25. <br />            
              Attended <span className="font-handwritten text-accent text-xl">Hack4Bengal 4.O</span> East India's Largest Hackathon. <br />
              
            </p>
          </div>

          {/* Resume Section */}
          <div className={`space-y-4 transition-all duration-1000 delay-700 ${
            animateText ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <h3 className="font-handwritten text-2xl font-semibold text-primary"></h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <button 
                onClick={() => window.open('/Uploads/ea309ce0-1041-4549-ac3c-2ff8a81b6104.png', '_blank')}
                className="flex items-center space-x-2 bg-accent hover:bg-accent/90 text-accent-foreground px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium text-sm shadow-paper transition-smooth hover:shadow-float hover:scale-105"
              >
                <Eye className="w-4 h-4" />
                <span>View Resume</span>
              </button>
              <button 
                onClick={() => {
                  // Create a downloadable PDF link (placeholder functionality)
                  const link = document.createElement('a');
                  link.href = '/Uploads/ea309ce0-1041-4549-ac3c-2ff8a81b6104.png';
                  link.download = 'Abhinandan_Ghosh_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center space-x-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium text-sm shadow-paper transition-smooth hover:shadow-float hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};