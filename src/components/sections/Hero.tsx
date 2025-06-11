import React, { useEffect, useRef } from 'react';
import TerminalText from '@/components/ui/TerminalText';
import { ArrowDown, Code, Terminal } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center relative section-padding opacity-0"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden mesh-background opacity-30 pointer-events-none" />
      
      <div 
        className="absolute top-1/4 right-1/4 w-64 h-64 bg-code-blue/10 rounded-full filter blur-3xl animate-pulse-light"
        style={{ animationDelay: '0.5s' }}
      />
      
      <div 
        className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-code-green/10 rounded-full filter blur-3xl animate-pulse-light"
        style={{ animationDelay: '0s' }}
      />
      
      <div className="relative z-10 container max-w-4xl mx-auto text-center stagger-animate">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-blue/10 text-code-blue mb-8">
          <Terminal className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">Developer Portfolio</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
          Hi, I'm <span className="text-code-blue">Aniket Kumar Mishra</span>
          <br />
          I build <span className="relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-code-blue to-code-green">exceptional</span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-code-blue to-code-green rounded-full opacity-30"></span>
          </span> web experiences with AI
        </h1>
        
        <div className="mb-8 code-block inline-block text-left">
          <TerminalText
            text="const_skills = ['Python', 'Data Analysis', 'Machine Learning', 'UX Design']"
            className="text-code-light"
          />
        </div>
        
        <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto">
          A passionate Machine Learning Engineer building intuitive, robust, and beautiful digital experiences with AI.
        </p>  
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#projects"
            className="px-8 py-3 rounded-lg bg-code-blue text-white font-medium transition-all hover:shadow-lg hover:shadow-code-blue/20 hover:translate-y-[-2px]"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            View Projects
          </a>
          
          <a 
            href="/resume/Aniket Kumar Mishra resume.pdf"
            download="Aniket Kumar Mishra Resume.pdf"
            className="px-8 py-3 rounded-lg border border-code-blue/30 text-code-blue font-medium transition-all hover:bg-code-blue/5 hover:border-code-blue"
          >
            Download Resume
          </a>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-code-blue/70 hover:text-code-blue transition-colors animate-bounce-light"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
};

export default Hero;
