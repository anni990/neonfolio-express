import React, { useRef, useEffect, useState } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import CertificateModal from '../modals/CertificateModal';

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
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  
  const certifications: Certification[] = [
    {
      title: '3rd Position at 1BRC challenge IIT BHU Techfest',
      issuer: 'IIT BHU',
      date: 'March 2025',
      image: 'images/1brc.png',
      link: '#',
    },
    {
      title: 'Successfully complete NPTEL - Python for Data Science course by 90%',
      issuer: 'NPTEL',
      date: 'AUG 2024',
      image: 'images/nptel.png',
      link: '#',
    },
    {
      title: '2nd runner-up in IBM skill build program IoT at SageUtsav ',
      issuer: 'SIRT',
      date: 'Jan 2025',
      image: 'images/ibm-iot.jpg',
      link: '#',
    },
    {
      title: '1st runner-up at IIT bombay techfest zonal round in meshmerize',
      issuer: 'IIT bombay',
      date: 'Dec 2024',
      image: 'images/bombay-techfest.jpg',
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
      className="py-24 px-6 md:px-16 lg:px-24 relative bg-gradient-to-b from-white to-code-green/5 dark:from-gray-900 dark:to-code-green/10 opacity-0"
    >
      <div className="absolute inset-0 mesh-background opacity-30 pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-green/10 text-code-green mb-6">
            <Award className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Certifications</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Achievements and Certifications
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
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md opacity-0 cert-card flex flex-col"
            >
              <div className="aspect-[4/3] bg-code-blue/5 dark:bg-code-blue/10 relative overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover animate-float"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5";
                    target.onerror = null;
                  }}
                />
              </div>
              
              <div className="p-6 flex-grow">
                <div className="flex items-center text-xs text-foreground/50 dark:text-white/50 mb-2">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{cert.date}</span>
                </div>
                
                <h3 className="font-semibold text-lg mb-1 text-code-dark dark:text-white">
                  {cert.title}
                </h3>
                
                <p className="text-foreground/70 dark:text-white/70 text-sm mb-4">
                  Issued by {cert.issuer}
                </p>
                
                <div className="mt-auto">
                  <button 
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center text-sm text-code-blue hover:text-code-blue/80 transition-colors"
                  >
                    View Certificate
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CertificateModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        imageUrl={selectedCert?.image || ''}
        title={selectedCert?.title || ''}
      />
    </section>
  );
};

export default Certifications;
