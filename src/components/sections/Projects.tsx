
import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  // Updated projects with random relevant fallback images
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with product listing, cart functionality, and payment integration.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Task Management App',
      description: 'A comprehensive task management application with real-time updates and team collaboration features.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard with location-based forecasts and historical data visualization.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      tags: ['React', 'Redux', 'Chart.js', 'Weather API'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations and responsive design.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      links: {
        demo: '#',
        github: '#',
      },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          if (projectsRef.current) {
            const children = projectsRef.current.children;
            Array.from(children).forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-fade-in');
              }, 300 + index * 100);
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 md:px-16 lg:px-24 relative opacity-0 dark:bg-gray-900/30"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-blue/10 text-code-blue mb-6">
            <Layers className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Projects</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My Latest Work
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Explore a selection of projects that showcase my technical skills and creative problem-solving.
          </p>
        </div>
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md opacity-0 project-card"
            >
              <div className="aspect-video bg-code-blue/10 dark:bg-code-blue/5 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1531297484001-80022131f5a1"; // Fallback image
                    target.onerror = null; // Prevent infinite loop if fallback also fails
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 project-overlay transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex gap-3 mb-3">
                      {project.links.demo && (
                        <a 
                          href={project.links.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    
                    <h3 className="text-white font-semibold text-xl">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-code-dark dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 dark:text-white/70 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-code-blue/10 text-code-blue dark:bg-code-blue/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-lg border border-code-blue/30 text-code-blue font-medium transition-all hover:bg-code-blue/5 hover:border-code-blue dark:border-code-blue/50 dark:hover:bg-code-blue/10"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
