import React, { useRef, useEffect } from 'react';
import { FlaskConical, ExternalLink } from 'lucide-react';

interface Research {
  title: string;
  description: string;
  image: string;
  date: string;
  link?: string;
}

const ResearchWork = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const researchRef = useRef<HTMLDivElement>(null);
  
  const researchWorks: Research[] = [
    {
      title: 'Predictive modelling for Cardiovascular Diagnosis using Machine Learning',
      description: 'This study explored different machine learning models for predicting heart disease. Among them, Random Forest proved to be the most effective, striking a balance between accuracy and reliability.',
      image: 'images/heart-research-poster.png',
      date: 'Sep 2024 - Present',
      link: '/pdf/Heart-Diseases-research-paper.pdf',
    },
    {
      title: 'Support Vector Machine for Predicting Cardiovascular Dieases',
      description: 'Our findings underscore the remarkable performance of SVM, achieving an impressive accuracy of 97.53%, with sensitivity and specificity rates of 97.50% and 94.94%, respectively, in heart disease detection.',
      image: 'images/CopyRight.jpg',
      date: 'Jun 2022 - Dec 2022',
      link: '/pdf/Heart-Diseases-research-paper.pdf',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          if (researchRef.current) {
            const children = researchRef.current.children;
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
      id="research"
      ref={sectionRef}
      className="py-24 px-6 md:px-16 lg:px-24 relative bg-gradient-to-b from-white to-code-green/5 dark:from-gray-900 dark:to-code-green/10 opacity-0"
    >
      <div className="absolute inset-0 mesh-background opacity-30 pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-green/10 text-code-green mb-6">
            <FlaskConical className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Research Work</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Academic Research & Code CopyRight
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Exploring cutting-edge technologies through academic research and practical applications.
          </p>
        </div>
        
        <div 
          ref={researchRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {researchWorks.map((research, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md opacity-0 research-card"
            >
              <div className="aspect-video bg-code-green/5 dark:bg-code-green/10 relative overflow-hidden">
                <img 
                  src={research.image} 
                  alt={research.title} 
                  className="w-full h-full object-cover transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1507413245164-6160d8298b31";
                    target.onerror = null;
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-6">
                    <p className="text-white/80 text-sm mb-2">{research.date}</p>
                    <h3 className="text-white font-semibold text-xl">{research.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 text-code-dark dark:text-white">
                  {research.title}
                </h3>
                
                <p className="text-foreground/70 dark:text-white/70 mb-4">
                  {research.description}
                </p>
                
                {research.link && (
                  <a 
                    href={research.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-code-green hover:text-code-green/80 transition-colors"
                  >
                    View Paper
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchWork; 