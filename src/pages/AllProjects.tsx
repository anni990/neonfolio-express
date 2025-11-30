import React, { useRef, useEffect, useState } from 'react';
import { ExternalLink, Github, Layers, ArrowLeft, Eye, Filter, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { projectsData } from '@/data/projectsData';

const AllProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  // Get all unique tags
  const allTags = Array.from(new Set(projectsData.flatMap(p => p.tags)));

  // Filter projects based on search and tags
  const filteredProjects = projectsData.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTags = selectedTags.length === 0 ||
      selectedTags.some(tag => project.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleProjectClick = (projectId: string, e: React.MouseEvent) => {
    // Don't navigate if clicking on demo/github links
    if ((e.target as HTMLElement).closest('a[href]')) {
      return;
    }
    navigate(`/project/${projectId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section
          ref={sectionRef}
          className="min-h-screen py-24 px-6 md:px-16 lg:px-24 relative dark:bg-gray-900/30"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 mesh-background opacity-30 pointer-events-none dark:opacity-10" />

          <div className="container max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <div className="mb-16">
              <Link
                to="/"
                className="inline-flex items-center text-code-blue hover:text-code-blue/80 transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Link>

              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-blue/10 text-code-blue mb-6 dark:bg-code-blue/20">
                  <Layers className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">All Projects</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
                  My Project Portfolio
                </h1>

                <p className="text-lg text-foreground/80 dark:text-white/80 max-w-2xl mx-auto mb-8">
                  A comprehensive collection of my work, showcasing my technical expertise and creative problem-solving abilities.
                </p>

                {/* Search and Filter */}
                <div className="max-w-4xl mx-auto space-y-6">
                  {/* Search Bar */}
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40 dark:text-white/40" />
                    <input
                      type="text"
                      placeholder="Search projects..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-code-blue dark:focus:border-code-blue focus:outline-none focus:ring-2 focus:ring-code-blue/20 transition-all text-foreground dark:text-white placeholder:text-foreground/40 dark:placeholder:text-white/40"
                    />
                  </div>

                  {/* Tags Filter */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 mb-4">
                      <Filter className="w-5 h-5 text-code-blue" />
                      <h3 className="font-semibold dark:text-white">Filter by Technology</h3>
                      {selectedTags.length > 0 && (
                        <button
                          onClick={() => setSelectedTags([])}
                          className="ml-auto text-sm text-code-blue hover:text-code-blue/80 transition-colors"
                        >
                          Clear All
                        </button>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedTags.includes(tag)
                              ? 'bg-code-blue text-white shadow-md'
                              : 'bg-gray-100 dark:bg-gray-700 text-foreground dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                            }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-8">
              <p className="text-center text-foreground/60 dark:text-white/60">
                Showing <span className="font-semibold text-code-blue">{filteredProjects.length}</span> of{' '}
                <span className="font-semibold">{projectsData.length}</span> projects
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover-card cursor-pointer border border-transparent hover:border-code-blue/30 dark:hover:border-code-blue/50 transition-all"
                  onClick={(e) => handleProjectClick(project.id, e)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
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

                    {/* Hover Overlay */}
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
                            Details
                          </div>
                        </div>

                        <h3 className="text-white font-semibold text-lg">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="font-semibold text-xl mb-2 text-code-dark dark:text-white group-hover:text-code-blue dark:group-hover:text-code-blue transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-foreground/70 dark:text-white/70 mb-4 line-clamp-2 text-sm">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-code-blue/10 text-code-blue dark:bg-code-blue/20"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results */}
            {filteredProjects.length === 0 && (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-code-blue/10 dark:bg-code-blue/20 mb-4">
                  <Search className="w-8 h-8 text-code-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-2 dark:text-white">No Projects Found</h3>
                <p className="text-foreground/60 dark:text-white/60 mb-6">
                  Try adjusting your search or filters
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedTags([]);
                  }}
                  className="px-6 py-3 rounded-lg bg-code-blue text-white hover:bg-code-blue/90 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AllProjects;