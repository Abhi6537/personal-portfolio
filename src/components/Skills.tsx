import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap, Coffee, Heart, Star } from 'lucide-react';

const skills = [
  {
    name: 'React',
    icon: Code,
    color: 'bg-blue-500',
    fact: 'Built 50+ React projects!',
    level: 95
  },
  {
    name: 'TypeScript',
    icon: Zap,
    color: 'bg-blue-600',
    fact: 'Type safety is my superpower',
    level: 90
  },
  {
    name: 'Next.js',
    icon: Code,
    color: 'bg-gray-800',
    fact: 'Full-stack React framework pro',
    level: 85
  },
  {
    name: 'Tailwind CSS',
    icon: Palette,
    color: 'bg-cyan-500',
    fact: 'Utility-first CSS wizard',
    level: 90
  },
  {
    name: 'Design',
    icon: Palette,
    color: 'bg-pink-500',
    fact: 'Figma is my second home',
    level: 85
  },
  {
    name: 'Node.js',
    icon: Coffee,
    color: 'bg-green-600',
    fact: 'Coffee-powered backend magic',
    level: 80
  },
  {
    name: 'UI/UX',
    icon: Heart,
    color: 'bg-red-500',
    fact: 'User experience obsessed',
    level: 88
  },
  {
    name: 'Animation',
    icon: Star,
    color: 'bg-yellow-500',
    fact: 'Making things dance since 2020',
    level: 75
  }
];

export const Skills = () => {
  const [inView, setInView] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
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
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-handwritten text-5xl md:text-6xl font-bold text-primary mb-6">
            My Toolkit
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The skills and tools I use to bring ideas to life. 
            <span className="font-handwritten text-accent text-xl"> Hover for fun facts!</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Sticker background */}
                <div className="bg-card shadow-polaroid rounded-2xl p-6 transform rotate-1 group-hover:rotate-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-float">
                  <div className="text-center space-y-4">
                    {/* Icon */}
                    <div className={`w-16 h-16 ${skill.color} rounded-full flex items-center justify-center mx-auto group-hover:animate-sticker-bounce`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Skill name */}
                    <h3 className="font-semibold text-lg text-foreground">
                      {skill.name}
                    </h3>

                    {/* Progress bar */}
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className={`h-2 bg-accent rounded-full transition-all duration-1000 delay-500 ${
                          inView ? 'w-full' : 'w-0'
                        }`}
                        style={{ width: inView ? `${skill.level}%` : '0%' }}
                      />
                    </div>

                    {/* Fun fact tooltip */}
                    <div className={`absolute -top-16 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium shadow-lg transition-all duration-300 pointer-events-none ${
                      hoveredSkill === skill.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      <div className="font-handwritten text-base">
                        {skill.fact}
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-primary rotate-45 opacity-50 group-hover:opacity-80 transition-opacity" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};