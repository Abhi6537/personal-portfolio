import { useEffect, useRef, useState } from 'react';
import tornPaper from '@/assets/torn-paper.png';

export const About = () => {
  const [inView, setInView] = useState(false);
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

  return (
    <section ref={sectionRef} className="py-20 px-6 relative">
      {/* Torn paper background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="w-full h-full bg-card torn-top"
          style={{
            backgroundImage: `url(${tornPaper})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'multiply',
            opacity: 0.1
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-handwritten text-5xl md:text-6xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Profile Picture Section */}
          <div className={`text-center transition-all duration-1000 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="relative mx-auto w-48 h-48 mb-6">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl shadow-paper flex items-center justify-center border-2 border-dashed border-accent/30">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <p className="text-sm text-muted-foreground font-handwritten">Your Photo Here</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rotate-45 animate-float" />
            </div>
          </div>

          {/* Text content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative">
              <p className="text-lg leading-relaxed text-foreground">
                I'm a passionate developer who believes in the magic that happens when 
                <span className="font-handwritten text-xl text-accent font-semibold"> beautiful design </span>
                meets clean code. My journey started with curiosity and evolved 
                into crafting digital experiences that make a difference.
              </p>
              
              {/* Hand-drawn line accent */}
              <svg className="absolute -left-4 top-0 w-3 h-full" viewBox="0 0 12 200">
                <path
                  d="M6 0 Q3 50 9 100 Q3 150 6 200"
                  stroke="hsl(var(--accent))"
                  strokeWidth="2"
                  fill="none"
                  className="opacity-30"
                />
              </svg>
            </div>

            <p className="text-lg leading-relaxed text-muted-foreground">
              I specialize in creating responsive, user-friendly interfaces while continuously 
              expanding my skills in backend development. Every project is an opportunity 
              to learn and build something meaningful.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Detail Oriented  
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                Team Player
              </span>
            </div>
          </div>

          {/* When I'm not coding section */}
          <div className={`transition-all duration-1000 delay-600 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-6 shadow-paper">
              <h3 className="font-handwritten text-2xl text-primary mb-6 text-center">
                When I'm not coding...
              </h3>
              
              <div className="space-y-4">
                <div className="bg-card/50 rounded-xl p-4 border border-accent/10 hover:border-accent/30 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                      </svg>
                    </div>
                    <span className="font-medium text-foreground">Photography</span>
                  </div>
                </div>

                <div className="bg-card/50 rounded-xl p-4 border border-accent/10 hover:border-accent/30 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="font-medium text-foreground">Cricket</span>
                  </div>
                </div>

                <div className="bg-card/50 rounded-xl p-4 border border-accent/10 hover:border-accent/30 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m3 0H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                      </svg>
                    </div>
                    <span className="font-medium text-foreground">Movies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};