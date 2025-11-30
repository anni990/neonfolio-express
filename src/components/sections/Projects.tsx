import React, { useRef, useEffect } from 'react';
import { ExternalLink, Github, Layers, ArrowRight, Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { projectsData } from '@/data/projectsData';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Show only first 4 projects on home page
  const featuredProjects = projectsData.slice(0, 4);

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

  const handleProjectClick = (projectId: string, e: React.MouseEvent) => {
    // Don't navigate if clicking on demo/github links
    if ((e.target as HTMLElement).closest('a[href]')) {
      return;
    }
    navigate(`/project/${projectId}`);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 px-6 md:px-16 lg:px-24 relative opacity-0 dark:bg-gray-900/30"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 mesh-background opacity-30 pointer-events-none dark:opacity-10" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-blue/10 text-code-blue mb-6 dark:bg-code-blue/20">
            <Layers className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Featured Projects</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            My Latest Work
          </h2>

          <p className="text-lg text-foreground/80 dark:text-white/80 max-w-2xl mx-auto">
            Explore a selection of projects that showcase my technical skills and creative problem-solving.
          </p>
        </div>

        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md opacity-0 project-card cursor-pointer border border-transparent hover:border-code-blue/30 dark:hover:border-code-blue/50 transition-all"
              onClick={(e) => handleProjectClick(project.id, e)}
            >
              <div className="aspect-video bg-code-blue/10 dark:bg-code-blue/5 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const currentSrc = target.src;

                    // Try other images from the project
                    if (project.images && project.images.length > 0) {
                      const nextImage = project.images.find(img => img !== currentSrc);
                      if (nextImage) {
                        target.src = nextImage;
                        return;
                      }
                    }

                    // Fallback to placeholder
                    target.src = '/placeholder.svg';
                    target.onerror = null;
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                  <div className="p-6 w-full">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-3">
                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        {project.links.github && project.links.github !== '#' && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-code-blue/90 backdrop-blur-sm text-white text-sm font-medium">
                        <Eye className="w-4 h-4" />
                        View Details
                      </div>
                    </div>

                    <h3 className="text-white font-semibold text-xl">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-code-dark dark:text-white group-hover:text-code-blue dark:group-hover:text-code-blue transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/70 dark:text-white/70 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-code-blue/10 text-code-blue dark:bg-code-blue/20 dark:text-code-blue"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-code-blue text-white hover:bg-code-blue/90 transition-all hover:shadow-lg hover:shadow-code-blue/20 hover:translate-y-[-2px] font-medium"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
