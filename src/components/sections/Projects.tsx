
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
  
  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with product listing, cart functionality, and payment integration.',
      image: '/placeholder.svg',
      tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Task Management App',
      description: 'A comprehensive task management application with real-time updates and team collaboration features.',
      image: '/placeholder.svg',
      tags: ['Vue.js', 'Firebase', 'Tailwind CSS', 'TypeScript'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather dashboard with location-based forecasts and historical data visualization.',
      image: '/placeholder.svg',
      tags: ['React', 'Redux', 'Chart.js', 'Weather API'],
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations and responsive design.',
      image: '/placeholder.svg',
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
      className="py-24 px-6 md:px-16 lg:px-24 relative opacity-0"
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
              className="bg-white rounded-xl overflow-hidden shadow-md opacity-0 hover-card"
            >
              <div className="aspect-video bg-code-blue/10 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
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
                <h3 className="font-semibold text-xl mb-2 text-code-dark">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-code-blue/10 text-code-blue"
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
            className="inline-flex items-center px-6 py-3 rounded-lg border border-code-blue/30 text-code-blue font-medium transition-all hover:bg-code-blue/5 hover:border-code-blue"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
