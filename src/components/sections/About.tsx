
import React, { useEffect, useRef } from 'react';
import { Code, Database, Globe, Layout, Radio, User, Brain, FlaskConical, ChevronRight } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          if (contentRef.current) {
            const children = contentRef.current.children;
            Array.from(children).forEach((child, index) => {
              (child as HTMLElement).style.animationDelay = `${0.2 + index * 0.1}s`;
              child.classList.add('animate-fade-in');
            });
          }

          if (imageRef.current) {
            imageRef.current.classList.add('animate-fade-in');
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

  const interests = [
    { icon: <Layout className="w-5 h-5" />, label: 'Frontend Development' },
    { icon: <Database className="w-5 h-5" />, label: 'Backend Systems' },
    { icon: <Globe className="w-5 h-5" />, label: 'Web Technologies' },
    { icon: <Radio className="w-5 h-5" />, label: 'Cloud Infrastructure' },
    { icon: <Brain className="w-5 h-5" />, label: 'Machine Learning' },
    { icon: <FlaskConical className="w-5 h-5" />, label: 'Data Analysis' },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 md:px-16 lg:px-24 relative opacity-0 dark:bg-gray-900/30"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16">
          {/* Left column - Photo */}
          <div className="md:w-2/5 relative" ref={imageRef}>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-code-blue/40 to-code-green/40 rounded-2xl overflow-hidden glass-panel about-image pulse-glow dark:from-code-blue/30 dark:to-code-green/30 dark:border-white/10">
                <div className="absolute inset-0 flex items-center justify-center text-white/30 font-mono text-sm">
                  [Your Photo Here]
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-code-blue/20 rounded-xl rotate-6 animate-float dark:border-code-blue/30" style={{ animationDelay: '0.5s' }} />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border border-code-green/20 rounded-xl -rotate-6 animate-float dark:border-code-green/30" style={{ animationDelay: '1s' }} />
              
              {/* Code snippet */}
              <div className="absolute -bottom-8 -left-4 md:-left-12 glass-panel px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:bg-code-blue/5 dark:bg-gray-800/90 dark:border-white/10 dark:hover:bg-code-blue/10">
                <pre className="text-xs md:text-sm font-mono text-code-dark dark:text-white">
                  <code>{`function Developer() {\n  return <Passionate />;\n}`}</code>
                </pre>
              </div>
            </div>
          </div>
          
          {/* Right column - Content */}
          <div className="md:w-3/5" ref={contentRef}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-blue/10 text-code-blue mb-6 opacity-0 dark:bg-code-blue/20">
              <span className="text-sm font-medium">About Me</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0 dark:text-white">
              Creating digital experiences with precision and purpose
            </h2>
            
            <p className="text-lg text-foreground/80 dark:text-white/80 mb-6 opacity-0">
              I'm a passionate full-stack developer with a strong focus on creating intuitive and efficient web applications. With a background in both frontend and backend technologies, I bring a holistic approach to every project.
            </p>
            
            <p className="text-lg text-foreground/80 dark:text-white/80 mb-10 opacity-0">
              My journey in development began with a curiosity about how things work, which evolved into a love for building elegant solutions to complex problems. I believe in clean code, user-centric design, and continuous learning.
            </p>
            
            <div className="mb-10 opacity-0">
              <h3 className="text-xl font-semibold mb-4 dark:text-white">Interests & Expertise</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-code-blue/5 dark:hover:bg-code-blue/10 transition-colors hover:shadow-md group">
                    <div className="w-10 h-10 rounded-lg bg-code-blue/10 flex items-center justify-center text-code-blue skill-icon dark:bg-code-blue/20">
                      {interest.icon}
                    </div>
                    <span className="text-sm font-medium dark:text-white group-hover:translate-x-1 transition-transform">{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="opacity-0">
              <a 
                href="#contact"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-code-blue text-white font-medium transition-all hover:shadow-lg hover:shadow-code-blue/20 hover:translate-y-[-2px] group dark:hover:shadow-code-blue/40"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Let's Connect
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
