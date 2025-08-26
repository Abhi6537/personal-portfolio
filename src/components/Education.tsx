import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award, Book } from 'lucide-react';

export const Education = () => {
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

  const education = [
    {
      institution: 'University Name',
      degree: 'Bachelor of Computer Science',
      duration: '2020 - 2024',
      location: 'City, State',
      description: 'Focused on web development, software engineering, and computer science fundamentals.',
      type: 'degree'
    },
    {
      institution: 'Design Institute',
      degree: 'UI/UX Design Certificate',
      duration: '2022',
      location: 'Online',
      description: 'Specialized in user interface design, user experience principles, and design thinking.',
      type: 'certificate'
    },
    {
      institution: 'Tech Academy',
      degree: 'Frontend Development Certification',
      duration: '2021',
      location: 'Online',
      description: 'Comprehensive training in React, JavaScript, and modern frontend technologies.',
      type: 'certificate'
    }
  ];

  return (
    <section id="education" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-handwritten text-5xl md:text-6xl font-bold text-primary mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            My academic journey and continuous learning path in technology and design.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={item.institution + item.degree}
              className={`transition-all duration-1000 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className={`flex items-start space-x-6 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center shadow-paper rotate-3 hover:rotate-0 transition-smooth">
                    {item.type === 'degree' ? (
                      <GraduationCap className="w-8 h-8 text-white" />
                    ) : (
                      <Award className="w-8 h-8 text-white" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className={`bg-card p-8 rounded-2xl shadow-paper hover:shadow-float transition-smooth flex-1 ${
                  index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                }`}>
                  <div className={`flex items-center gap-4 mb-4 ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  } justify-start flex-wrap`}>
                    <h3 className="font-handwritten text-2xl font-bold text-primary">
                      {item.institution}
                    </h3>
                    <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                      {item.type === 'degree' ? 'Degree' : 'Degree'}
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold text-foreground mb-3">
                    {item.degree}
                  </h4>

                  <div className={`flex items-center gap-6 mb-4 text-muted-foreground text-sm ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  } justify-start flex-wrap`}>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative elements */}
                  <div className={`mt-6 flex items-center gap-2 ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  } justify-start`}>
                    <Book className="w-4 h-4 text-accent" />
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-accent rounded-full opacity-60" />
                      <div className="w-2 h-2 bg-accent rounded-full opacity-40" />
                      <div className="w-2 h-2 bg-accent rounded-full opacity-20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Learning Note */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-800 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 rounded-2xl shadow-paper max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              <span className="font-handwritten text-2xl text-primary font-semibold">
                Continuous Learning
              </span>
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <p className="text-muted-foreground">
              Always staying updated with the latest technologies and design trends through 
              online courses, workshops, and hands-on projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};