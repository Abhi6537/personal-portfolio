import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap, Coffee, Heart, Star, Monitor, Figma, Users, Lightbulb, Target, Settings } from 'lucide-react';

const skillCategories = [
  {
    title: 'Technical Skills',
    skills: [
      { name: 'HTML', icon: Code, fact: 'Semantic markup master!', level: 95 },
      { name: 'CSS', icon: Palette, fact: 'Flexbox and Grid wizard', level: 90 },
      { name: 'JavaScript', icon: Zap, fact: 'ES6+ enthusiast', level: 88 },
      { name: 'TypeScript', icon: Code, fact: 'Type safety champion', level: 82 },
      { name: 'React', icon: Code, fact: 'Built 2+ React projects!', level: 92 },
      { name: 'Tailwind CSS', icon: Settings, fact: 'Utility-first styling pro', level: 85 },
      { name: 'Next.js', icon: Monitor, fact: 'Full-stack React framework', level: 80 },
    ]
  },
  {
    title: 'Design Tools',
    skills: [
      { name: 'Figma', icon: Figma, fact: 'Design systems architect', level: 88 },
      { name: 'Photoshop', icon: Star, fact: 'Image manipulation expert', level: 75 },
      { name: 'Adobe XD', icon: Target, fact: 'Prototyping specialist', level: 70 },
      { name: 'Canva', icon: Palette, fact: 'Quick design wizard', level: 82 },
    ]
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
    <section id="skills" ref={sectionRef} className="py-20 px-6 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-handwritten text-5xl md:text-6xl font-bold text-primary mb-6">
            Kaam Ki Cheezein
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            All the following are necessary but without 
            <span className="font-handwritten text-accent text-xl"> ChatGPT </span> I'm skillless :(
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <h3 className="font-handwritten text-3xl font-bold text-primary text-center mb-8">
                {category.title}
              </h3>
              
              <div className={`grid gap-6 ${
                category.skills.length <= 3 
                  ? 'grid-cols-1 md:grid-cols-3' 
                  : category.skills.length === 4
                  ? 'grid-cols-2 md:grid-cols-4'
                  : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-7'
              } ${category.skills.length === 4 ? 'max-w-5xl mx-auto' : ''}`}>
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  const colorClasses = [
                    'bg-blue-500', 'bg-green-500', 'bg-purple-500', 
                    'bg-red-500', 'bg-yellow-500', 'bg-indigo-500', 'bg-cyan-500'
                  ];
                  const colorClass = colorClasses[skillIndex % colorClasses.length];
                  
                  return (
                    <div
                      key={skill.name}
                      className={`relative group cursor-pointer transition-all duration-500 ${
                        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                      }`}
                      style={{ transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms` }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Sticker background */}
                      <div className="bg-card shadow-polaroid rounded-2xl p-6 transform rotate-1 group-hover:rotate-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-float">
                        <div className="text-center space-y-4">
                          {/* Icon */}
                          <div className={`w-14 h-14 ${colorClass} rounded-full flex items-center justify-center mx-auto group-hover:animate-sticker-bounce`}>
                            <Icon className="w-7 h-7 text-white" />
                          </div>
                          
                          {/* Skill name */}
                          <h4 className="font-semibold text-sm text-foreground">
                            {skill.name}
                          </h4>

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
                          <div className={`absolute -top-16 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-xs font-medium shadow-lg transition-all duration-300 pointer-events-none whitespace-nowrap ${
                            hoveredSkill === skill.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                          }`}>
                            <div className="font-handwritten text-sm">
                              {skill.fact}
                            </div>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
                          </div>
                        </div>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute -top-2 -right-2 w-5 h-5 bg-accent rounded-full opacity-70 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary rotate-45 opacity-50 group-hover:opacity-80 transition-opacity" />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};