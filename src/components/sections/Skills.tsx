
import React, { useRef, useEffect, useState } from 'react';

interface Skill {
  name: string;
  level: number;
  color?: string;
  category: 'frontend' | 'backend' | 'tools';
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend' | 'tools' | 'all'>('all');

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML & CSS', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'TypeScript', level: 80, category: 'frontend' },
    { name: 'React', level: 88, category: 'frontend' },
    { name: 'Tailwind CSS', level: 85, category: 'frontend' },
    { name: 'Vue.js', level: 75, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 82, category: 'backend' },
    { name: 'Express', level: 78, category: 'backend' },
    { name: 'MongoDB', level: 75, category: 'backend' },
    { name: 'SQL', level: 72, category: 'backend' },
    { name: 'GraphQL', level: 68, category: 'backend' },
    { name: 'Python', level: 70, category: 'backend' },
    
    // Tools & Others
    { name: 'Git', level: 88, category: 'tools' },
    { name: 'Docker', level: 72, category: 'tools' },
    { name: 'CI/CD', level: 75, category: 'tools' },
    { name: 'AWS', level: 65, category: 'tools' },
    { name: 'Figma', level: 80, category: 'tools' },
    { name: 'Testing', level: 75, category: 'tools' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          const skillBars = document.querySelectorAll('.skill-bar');
          skillBars.forEach((bar, index) => {
            setTimeout(() => {
              bar.classList.add('animate');
            }, 300 + index * 50);
          });
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
  }, [activeCategory]);

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 md:px-16 lg:px-24 relative bg-gradient-to-b from-white to-code-blue/5 opacity-0"
    >
      <div className="absolute inset-0 mesh-background opacity-30 pointer-events-none" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-blue/10 text-code-blue mb-6">
            <span className="text-sm font-medium">Technical Skills</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            My Expertise & Technical Proficiency
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            A collection of technologies and tools I've mastered throughout my journey as a developer.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'frontend', 'backend', 'tools'].map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-code-blue text-white shadow-md'
                  : 'bg-white/80 text-foreground/70 hover:bg-code-blue/10 border border-code-blue/20'
              }`}
              onClick={() => setActiveCategory(category as any)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Skills */}
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="bg-white/80 rounded-xl p-6 glass-panel hover-card">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-code-dark">{skill.name}</h3>
                <span className="text-sm text-code-blue font-mono">{skill.level}%</span>
              </div>
              <div className="skill-bar" style={{ '--skill-percent': `${skill.level}%` } as any}>
                <div className="absolute inset-0 w-0 h-full bg-gradient-to-r from-code-blue to-code-green rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
