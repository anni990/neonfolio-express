
import React, { useRef, useEffect } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const certsRef = useRef<HTMLDivElement>(null);
  
  const certifications: Certification[] = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Udacity',
      date: 'Jan 2023',
      image: '/placeholder.svg',
      link: '#',
    },
    {
      title: 'Advanced React & Redux',
      issuer: 'Udemy',
      date: 'Mar 2023',
      image: '/placeholder.svg',
      link: '#',
    },
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: 'Jun 2023',
      image: '/placeholder.svg',
      link: '#',
    },
    {
      title: 'UI/UX Design Fundamentals',
      issuer: 'Interaction Design Foundation',
      date: 'Aug 2023',
      image: '/placeholder.svg',
      link: '#',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          if (certsRef.current) {
            const children = certsRef.current.children;
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
      id="certifications"
      ref={sectionRef}
      className="py-24 px-6 md:px-16 lg:px-24 relative bg-gradient-to-b from-white to-code-green/5 opacity-0"
    >
      <div className="absolute inset-0 mesh-background opacity-30 pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-green/10 text-code-green mb-6">
            <Award className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Certifications</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional Certifications
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A collection of certificates and achievements that demonstrate my commitment to continuous learning.
          </p>
        </div>
        
        <div 
          ref={certsRef} 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-md opacity-0 hover-card flex flex-col"
            >
              <div className="aspect-[4/3] bg-code-blue/5 relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-foreground/50 mb-2">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{cert.date}</span>
                </div>
                
                <h3 className="font-semibold text-lg mb-1 text-code-dark">
                  {cert.title}
                </h3>
                
                <p className="text-foreground/70 text-sm mb-4">
                  Issued by {cert.issuer}
                </p>
                
                <div className="mt-auto">
                  {cert.link && (
                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-code-blue hover:text-code-blue/80 transition-colors"
                    >
                      View Certificate
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
