import { useEffect, useState } from 'react';
import creativeDoodles from '@/assets/creative-doodles.png';

export const Hero = () => {
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 py-20 pt-32">
      {/* Floating creative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={creativeDoodles}
          alt="Creative doodles"
          className="absolute top-20 right-20 w-32 h-16 object-cover animate-float opacity-30"
          style={{ animationDelay: '0s' }}
        />
        <div className="absolute top-40 left-10 w-6 h-6 bg-accent rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 right-40 w-4 h-4 bg-primary rotate-45 animate-float opacity-30" style={{ animationDelay: '4s' }} />
        <div className="absolute top-60 left-1/4 w-8 h-8 border-2 border-accent rounded-full animate-float opacity-25" style={{ animationDelay: '1s' }} />
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Handwritten name with drawing animation */}
        <div className="relative mb-8">
          <h1 className={`font-handwritten text-6xl md:text-8xl font-bold text-primary transition-all duration-2000 ${
            animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Your Name
          </h1>
          
          {/* Underline animation */}
          <svg 
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-80 h-6" 
            viewBox="0 0 320 24"
          >
            <path
              d="M10 15 Q160 5 310 15"
              stroke="hsl(var(--accent))"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              className={animateText ? 'animate-draw-line' : ''}
              style={{ strokeDasharray: '200', strokeDashoffset: animateText ? '0' : '200' }}
            />
          </svg>
        </div>

        {/* Subtitle */}
        <div className={`space-y-4 transition-all duration-1000 delay-500 ${
          animateText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Frontend Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful experiences where code meets creativity. 
            I turn ideas into interactive digital stories.
          </p>
        </div>

      </div>
    </section>
  );
};