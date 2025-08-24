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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="relative">
              <p className="text-lg leading-relaxed text-foreground">
                I'm a passionate developer who believes in the magic that happens when 
                <span className="font-handwritten text-xl text-accent font-semibold"> beautiful design </span>
                meets clean code. My journey started with doodling in notebooks and evolved 
                into crafting digital experiences that tell stories.
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
              When I'm not coding, you'll find me sketching new ideas, exploring 
              design trends, or experimenting with the latest creative tools. 
              I love turning complex problems into simple, elegant solutions.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                Creative Problem Solver
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Detail Oriented
              </span>
              <span className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                Team Player
              </span>
            </div>
          </div>

          {/* Visual element */}
          <div className={`relative transition-all duration-1000 delay-600 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl p-8 shadow-paper">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="font-handwritten text-lg text-primary">
                    Currently crafting amazing experiences
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <span className="font-handwritten text-lg text-primary">
                    Always learning something new
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-secondary-foreground rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  <span className="font-handwritten text-lg text-primary">
                    Open to exciting opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};