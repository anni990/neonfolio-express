import React, { useRef, useEffect } from 'react';
import { Briefcase, CheckCircle2, Clock } from 'lucide-react';

interface Internship {
  title: string;
  company: string;
  status: 'current' | 'completed';
  responsibilities: string[];
  duration: string;
}

const Internships = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const internships: Internship[] = [
    {
      title: 'AI Intern',
      company: 'Inventohack Innovation Pvt Ltd',
      status: 'current',
      responsibilities: [
        'Developing and integrating ML models into full-stack web applications',
        'Implementing real-time data processing and analysis pipelines',
        'Creating responsive and interactive user interfaces for ML features',
        'Collaborating with cross-functional teams for seamless integration',
        'Optimizing model performance and deployment strategies'
      ],
      duration: 'Present'
    },
    {
      title: 'Technical Assistant',
      company: 'RICR',
      status: 'completed',
      responsibilities: [
        'Updated content on the Learning Management System (LMS)',
        'Prepared quizzes and assessments for data science batch',
        'Created sessional tests and assignments',
        'Collaborated with tech team on backend LMS development',
        'Developed and maintained chat bots'
      ],
      duration: '6 months (Stipend based)'
    }
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

  return (
    <section
      id="internships"
      ref={sectionRef}
      className="py-24 px-6 md:px-16 lg:px-24 relative opacity-0 dark:bg-gray-900/30"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-blue/10 text-code-blue mb-6">
            <Briefcase className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Internships</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Professional Experience
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            My journey through various internships and professional experiences that have shaped my career.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-code-blue/20 dark:bg-code-blue/10"></div>

          <div className="space-y-12">
            {internships.map((internship, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-code-blue z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-code-dark dark:text-white">
                          {internship.title}
                        </h3>
                        <p className="text-code-blue font-medium">{internship.company}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {internship.status === 'current' ? (
                          <Clock className="w-5 h-5 text-green-500" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-code-blue" />
                        )}
                        <span className="text-sm font-medium text-foreground/70">
                          {internship.duration}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-medium text-code-dark dark:text-white">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {internship.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-foreground/70">
                            <span className="text-code-blue mt-1">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships; 