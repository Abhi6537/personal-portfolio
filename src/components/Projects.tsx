import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Mess Sathi Web Application',
    description: '1st Runner-Up – JISTECH App E-Teaser, 2025. A mess finder app using React and Flask with authentication, location filtering, and user dashboard.',
    tech: ['React', 'Flask', 'Git', 'VS Code'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'Personal portfolio showcasing my skills and projects with creative design and smooth animations.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Learning Management System',
    description: 'A comprehensive LMS with user authentication, course management, and progress tracking features.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    demoUrl: '#',
    codeUrl: '#',
    featured: false
  }
];

export const Projects = () => {
  const [inView, setInView] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="font-handwritten text-5xl md:text-6xl font-bold text-primary mb-6">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of work that showcases my passion for creating 
            <span className="font-handwritten text-accent text-xl"> beautiful digital experiences</span>
          </p>
        </div>

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
              {/* Polaroid frame */}
              <div className={`bg-card shadow-polaroid rounded-lg p-4 transform transition-all duration-500 ${
                project.featured ? 'rotate-1' : '-rotate-1'
              } ${
                hoveredProject === project.id ? 'rotate-0 scale-105 shadow-float' : ''
              }`}>
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg mb-4 bg-muted aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay with actions */}
                  <div className={`absolute inset-0 bg-primary/90 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a
                      href={project.demoUrl}
                      className="bg-accent text-accent-foreground p-3 rounded-full hover:scale-110 transition-transform"
                      title="View Demo"
                    >
                      <Eye className="w-5 h-5" />
                    </a>
                    <a
                      href={project.codeUrl}
                      className="bg-secondary text-secondary-foreground p-3 rounded-full hover:scale-110 transition-transform"
                      title="View Code"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demoUrl}
                      className="bg-primary text-primary-foreground p-3 rounded-full hover:scale-110 transition-transform"
                      title="External Link"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
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

              {/* Hand-drawn border effect */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                viewBox="0 0 300 400"
              >
                <path
                  d="M10 10 Q150 5 290 10 Q295 200 290 390 Q150 395 10 390 Q5 200 10 10"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  className="animate-draw-line"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};