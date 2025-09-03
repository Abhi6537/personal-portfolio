import { useEffect, useRef, useState } from 'react';
import { Camera, Trophy, Film, MapPin, Calendar, Briefcase } from 'lucide-react';
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

  const hobbies = [
    { name: 'Capturing', icon: Camera, description: 'Camera Nahi hai vai :)' },
    { name: 'Cricket', icon: Trophy, description: 'Bachpan ka pyaar <3 18' },
    { name: 'Movies', icon: Film, description: 'Kitne bugs the? Sarkar, ginte ginte compiler crash ho gaya!' },
  ];

  const journey = [
    { year: '2020', title: 'Started Web Development', description: 'Began learning HTML, CSS, and JavaScript' },
    { year: '2021', title: 'Frontend Focus', description: 'Mastered React and modern frontend frameworks' },
    { year: '2022', title: 'UI/UX Design', description: 'Expanded into design with Figma and user experience' },
    { year: '2023-Present', title: 'Full Stack Journey', description: 'Currently learning backend technologies' },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 relative">
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

      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-handwritten text-5xl md:text-5xl font-bold text-primary mb-4">
           Who m I ? 
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        {/* Short Bio */}
        <div className={`mb-16 transition-all duration-1000 delay-200 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <p className="text-xl leading-relaxed text-foreground mb-6">
               Just an ordinary techie who loves mixing code with creativity ! A 2nd-year IT student at
                <span className="font-handwritten text-2xl text-accent font-semibold"> JISCE </span>
                learning, building, and experimenting with technologies that shape the web.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
               A content writer : Intern at <span className="font-handwritten text-accent text-xl">InAmigos Foundation</span> for two weeks .
              </p>
            </div>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className={`mb-16 transition-all duration-1000 delay-400 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="font-handwritten text-3xl font-bold text-primary text-center mb-8">
           Mandatory
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div
                  key={hobby.name}
                  className="bg-card p-6 rounded-2xl shadow-paper hover:shadow-float transition-smooth hover:scale-105 transform rotate-1 hover:rotate-0"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="font-semibold text-lg text-foreground">{hobby.name}</h4>
                    <p className="text-sm text-muted-foreground">{hobby.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};