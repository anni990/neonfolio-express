import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github, Layers, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectModal from '../components/modals/ProjectModal';

interface Project {
  title: string;
  description: string;
  image: string;
  images?: string[];
  tags: string[];
  purpose?: string;
  links: {
    demo?: string;
    github?: string;
  };
}

const AllProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Updated projects with random relevant fallback images
  const projects: Project[] = [
    {
      title: 'GreenSathi - Krishi Guru',
      description: 'A platform where farmers can communication with chabot in multiple languages, Analysis plant images, Soil report and Mandi Data with weather analysis.',
      image: 'images/GreenSathi-new.png',
      images: ['images/GreenSathi-1.png', 'images/GreenSathi-2.png'],
      tags: ['LLM', 'Machine Learning', 'MySQL', 'Javascript', 'Python', 'Flask'],
      purpose: 'To help farmers make better decisions about their crops and farming practices using AI and data analysis.',
      links: {
        demo: '#',
        github: '#',
      },
    },
    {
      title: 'Renewable Energy Forecasting',
      description: 'A Problem state by NTCP(govt. orgnaization) to predict the generation of energy by wind and solar plant in next upcoming days.',
      image: 'images/Renewable.png',
      images: ['images/Renewable-1.png', 'images/Renewable-2.png'],
      tags: ['HTML', 'MySQL', 'Python-Flask', 'Machine Learning Models'],
      purpose: 'To accurately predict renewable energy generation for better grid management and resource allocation.',
      links: {
        demo: '#',
        github: 'https://github.com/anni990/AI-Renewable-energy-forcasting',
      },
    },
    {
      title: 'Morph-AI Food waste Reduction Platform',
      description: 'A platform for caters who provide food service can use to reduce food waste by predicting the meal and diners.',
      image: 'images/Morphai.png',
      images: ['images/Morphai-1.png', 'images/Morphai-2.png'],
      tags: ['Python-flask', 'Machine Learning', 'HTML'],
      purpose: 'To help food service providers reduce waste and optimize their operations using AI predictions.',
      links: {
        demo: '#',
        github: 'https://github.com/anni990/My-Public-Minor-Project',
      },
    },
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website with smooth animations and responsive design.',
      image: 'images/portfolio-img.png',
      images: ['images/portfolio-1.png', 'images/portfolio-2.png'],
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      purpose: 'To showcase my work and skills in an engaging and professional manner.',
      links: {
        demo: '#',
        github: 'https://github.com/anni990/neonfolio-express',
      },
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
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

  const handleProjectClick = (project: Project, e: React.MouseEvent) => {
    // Don't open modal if clicking on demo/github links
    if ((e.target as HTMLElement).closest('a')) {
      return;
    }
    setSelectedProject(project);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen py-24 px-6 md:px-16 lg:px-24 relative dark:bg-gray-900/30"
    >
      <div className="container max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <Link
            to="/"
            className="inline-flex items-center text-code-blue hover:text-code-blue/80 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-blue/10 text-code-blue mb-6">
              <Layers className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">All Projects</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My Projects
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              A comprehensive collection of my work, showcasing my technical expertise and creative problem-solving abilities.
            </p>
          </div>
        </div>
        
        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md project-card cursor-pointer"
              onClick={(e) => handleProjectClick(project, e)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                {/* Left column - Image */}
                <div className="aspect-video bg-code-blue/10 dark:bg-code-blue/5 rounded-lg overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1531297484001-80022131f5a1";
                      target.onerror = null;
                    }}
                  />
                  
                  {project.images && project.images.length > 0 && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 project-overlay transition-opacity duration-300 flex items-end">
                      <div className="p-6 w-full">
                        <div className="flex gap-3">
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
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Right column - Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-code-dark dark:text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-foreground/70 dark:text-white/70 mb-6">
                      {project.description}
                    </p>
                    
                    {project.purpose && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold mb-2 text-code-dark dark:text-white">
                          Purpose
                        </h4>
                        <p className="text-foreground/70 dark:text-white/70">
                          {project.purpose}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-code-dark dark:text-white">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="px-3 py-1 text-sm font-medium rounded-full bg-code-blue/10 text-code-blue dark:bg-code-blue/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-code-blue text-white hover:bg-code-blue/90 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || {
          title: '',
          description: '',
          image: '',
          tags: [],
        }}
      /> */}
    </section>
  );
};

export default AllProjects; 