import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Layers, Target, Code, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { projectsData } from '@/data/projectsData';

const ProjectDetail = () => {
    const { projectId } = useParams<{ projectId: string }>();
    const navigate = useNavigate();
    const sectionRef = useRef<HTMLElement>(null);

    const project = projectsData.find(p => p.id === projectId);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [projectId]);

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

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4 dark:text-white">Project Not Found</h1>
                    <Link to="/projects" className="text-code-blue hover:underline">
                        Back to Projects
                    </Link>
                </div>
            </div>
        );
    }

    const allImages = [project.image, ...(project.images || [])];

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <main className="flex-grow">
                <section
                    ref={sectionRef}
                    className="py-24 px-6 md:px-16 lg:px-24 relative opacity-0 dark:bg-gray-900/30"
                >
                    {/* Background decorative elements */}
                    <div className="absolute inset-0 mesh-background opacity-30 pointer-events-none dark:opacity-10" />

                    <div className="container max-w-6xl mx-auto relative z-10">
                        {/* Back Button */}
                        <Link
                            to="/projects"
                            className="inline-flex items-center text-code-blue hover:text-code-blue/80 transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Projects
                        </Link>

                        {/* Project Header */}
                        <div className="mb-12">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-blue/10 text-code-blue mb-6 dark:bg-code-blue/20">
                                <Layers className="w-4 h-4 mr-2" />
                                <span className="text-sm font-medium">Project Details</span>
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
                                {project.title}
                            </h1>

                            <p className="text-xl text-foreground/80 dark:text-white/80 max-w-3xl">
                                {project.description}
                            </p>

                            {/* Action Buttons */}
                            <div className="flex flex-wrap gap-4 mt-8">
                                {project.links.demo && (
                                    <a
                                        href={project.links.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-code-blue text-white hover:bg-code-blue/90 transition-all hover:shadow-lg hover:shadow-code-blue/20 hover:translate-y-[-2px]"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        Live Demo
                                    </a>
                                )}
                                {project.links.github && project.links.github !== '#' && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-all hover:shadow-lg"
                                    >
                                        <Github className="w-5 h-5" />
                                        View Code
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Main Image */}
                        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl hover-card">
                            <div className="aspect-video bg-code-blue/10 dark:bg-code-blue/5 relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        const currentSrc = target.src;

                                        // Try to use other images from the project
                                        if (project.images && project.images.length > 0) {
                                            // Find next available image that hasn't been tried
                                            const nextImage = allImages.find(img =>
                                                img !== currentSrc && !target.dataset.triedImages?.includes(img)
                                            );

                                            if (nextImage) {
                                                // Track tried images
                                                target.dataset.triedImages = (target.dataset.triedImages || '') + currentSrc + ',';
                                                target.src = nextImage;
                                                return;
                                            }
                                        }

                                        // If all project images fail, show placeholder
                                        target.src = '/placeholder.svg';
                                        target.onerror = null;
                                    }}
                                />
                            </div>
                        </div>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                            {/* Main Content - 2 columns */}
                            <div className="lg:col-span-2 space-y-8">
                                {/* Purpose */}
                                {project.purpose && (
                                    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover-card">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-code-blue/10 dark:bg-code-blue/20">
                                                <Target className="w-6 h-6 text-code-blue" />
                                            </div>
                                            <h2 className="text-2xl font-bold dark:text-white">Purpose</h2>
                                        </div>
                                        <p className="text-foreground/80 dark:text-white/80 text-lg leading-relaxed">
                                            {project.purpose}
                                        </p>
                                    </div>
                                )}

                                {/* Features */}
                                {project.features && project.features.length > 0 && (
                                    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover-card">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 rounded-lg bg-code-green/10 dark:bg-code-green/20">
                                                <CheckCircle className="w-6 h-6 text-code-green" />
                                            </div>
                                            <h2 className="text-2xl font-bold dark:text-white">Key Features</h2>
                                        </div>
                                        <ul className="space-y-3">
                                            {project.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="mt-1 w-2 h-2 rounded-full bg-code-green flex-shrink-0" />
                                                    <span className="text-foreground/80 dark:text-white/80 text-lg">
                                                        {feature}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Challenges */}
                                {project.challenges && project.challenges.length > 0 && (
                                    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover-card">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2 rounded-lg bg-orange-500/10 dark:bg-orange-500/20">
                                                <Lightbulb className="w-6 h-6 text-orange-500" />
                                            </div>
                                            <h2 className="text-2xl font-bold dark:text-white">Challenges & Solutions</h2>
                                        </div>
                                        <ul className="space-y-3">
                                            {project.challenges.map((challenge, index) => (
                                                <li key={index} className="flex items-start gap-3">
                                                    <div className="mt-1 w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                                                    <span className="text-foreground/80 dark:text-white/80 text-lg">
                                                        {challenge}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Outcome */}
                                {project.outcome && (
                                    <div className="bg-gradient-to-br from-code-blue/10 to-code-green/10 dark:from-code-blue/20 dark:to-code-green/20 rounded-xl p-8 shadow-md hover-card border border-code-blue/20 dark:border-code-blue/30">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-white dark:bg-gray-800">
                                                <TrendingUp className="w-6 h-6 text-code-blue" />
                                            </div>
                                            <h2 className="text-2xl font-bold dark:text-white">Outcome</h2>
                                        </div>
                                        <p className="text-foreground/80 dark:text-white/80 text-lg leading-relaxed">
                                            {project.outcome}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar - 1 column */}
                            <div className="space-y-8">
                                {/* Tech Stack */}
                                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover-card sticky top-24">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 rounded-lg bg-code-blue/10 dark:bg-code-blue/20">
                                            <Code className="w-5 h-5 text-code-blue" />
                                        </div>
                                        <h3 className="text-xl font-bold dark:text-white">Tech Stack</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-2 text-sm font-medium rounded-lg bg-code-blue/10 text-code-blue dark:bg-code-blue/20 hover:bg-code-blue/20 dark:hover:bg-code-blue/30 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Images Gallery */}
                        {project.images && project.images.length > 0 && (
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 dark:text-white">Project Gallery</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.images.map((image, index) => (
                                        <div
                                            key={index}
                                            className="aspect-video bg-code-blue/10 dark:bg-code-blue/5 rounded-xl overflow-hidden shadow-md hover-card"
                                        >
                                            <img
                                                src={image}
                                                alt={`${project.title} - Screenshot ${index + 1}`}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target = e.target as HTMLImageElement;
                                                    const currentSrc = target.src;

                                                    // Try to use main image or other gallery images
                                                    const otherImages = [project.image, ...project.images!.filter(img => img !== currentSrc)];
                                                    const nextImage = otherImages.find(img =>
                                                        img !== currentSrc && !target.dataset.triedImages?.includes(img)
                                                    );

                                                    if (nextImage) {
                                                        target.dataset.triedImages = (target.dataset.triedImages || '') + currentSrc + ',';
                                                        target.src = nextImage;
                                                        return;
                                                    }

                                                    // If all images fail, show placeholder
                                                    target.src = '/placeholder.svg';
                                                    target.onerror = null;
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Navigation to other projects */}
                        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
                            <div className="text-center">
                                <Link
                                    to="/projects"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-code-blue/10 text-code-blue hover:bg-code-blue/20 transition-colors dark:bg-code-blue/20 dark:hover:bg-code-blue/30"
                                >
                                    <Layers className="w-5 h-5" />
                                    View All Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ProjectDetail;
