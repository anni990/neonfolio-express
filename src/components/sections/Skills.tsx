
import React, { useRef, useEffect, useState } from 'react';
import { Code, Database, Globe, Layout, Radio, User, Cpu, LineChart, BarChart, Brain, Terminal, GitBranch, ThumbsUp } from 'lucide-react';

interface Skill {
  name: string;
  icon: JSX.Element;
  category: 'frontend' | 'backend' | 'ml' | 'tools';
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend' | 'ml' | 'tools' | 'all'>('all');

  const skills: Skill[] = [
    // Frontend
    { name: 'HTML & CSS', icon: <Layout className="w-10 h-10" />, category: 'frontend' },
    { name: 'JavaScript', icon: <Code className="w-10 h-10" />, category: 'frontend' },
    { name: 'TypeScript', icon: <Terminal className="w-10 h-10" />, category: 'frontend' },
    { name: 'React', icon: <Radio className="w-10 h-10" />, category: 'frontend' },
    { name: 'Tailwind CSS', icon: <ThumbsUp className="w-10 h-10" />, category: 'frontend' },
    { name: 'Vue.js', icon: <Globe className="w-10 h-10" />, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: <Terminal className="w-10 h-10" />, category: 'backend' },
    { name: 'Express', icon: <Radio className="w-10 h-10" />, category: 'backend' },
    { name: 'MongoDB', icon: <Database className="w-10 h-10" />, category: 'backend' },
    { name: 'SQL', icon: <Database className="w-10 h-10" />, category: 'backend' },
    { name: 'GraphQL', icon: <Globe className="w-10 h-10" />, category: 'backend' },
    { name: 'Python', icon: <Code className="w-10 h-10" />, category: 'backend' },
    
    // Machine Learning
    { name: 'Machine Learning', icon: <Brain className="w-10 h-10" />, category: 'ml' },
    { name: 'TensorFlow', icon: <Cpu className="w-10 h-10" />, category: 'ml' },
    { name: 'PyTorch', icon: <Brain className="w-10 h-10" />, category: 'ml' },
    { name: 'Data Analysis', icon: <BarChart className="w-10 h-10" />, category: 'ml' },
    { name: 'Pandas', icon: <LineChart className="w-10 h-10" />, category: 'ml' },
    { name: 'NumPy', icon: <LineChart className="w-10 h-10" />, category: 'ml' },
    
    // Tools & Others
    { name: 'Git', icon: <GitBranch className="w-10 h-10" />, category: 'tools' },
    { name: 'Docker', icon: <Database className="w-10 h-10" />, category: 'tools' },
    { name: 'CI/CD', icon: <Radio className="w-10 h-10" />, category: 'tools' },
    { name: 'AWS', icon: <Database className="w-10 h-10" />, category: 'tools' },
    { name: 'Figma', icon: <Layout className="w-10 h-10" />, category: 'tools' },
    { name: 'Testing', icon: <ThumbsUp className="w-10 h-10" />, category: 'tools' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          const skillItems = document.querySelectorAll('.skill-item');
          skillItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add('animate-fade-in');
              item.classList.remove('opacity-0');
              item.classList.add('animate-float');
            }, 100 + index * 50);
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
      className="py-24 px-6 md:px-16 lg:px-24 relative bg-gradient-to-b from-white to-code-blue/5 dark:from-gray-900 dark:to-gray-800 opacity-0"
    >
      <div className="absolute inset-0 mesh-background opacity-30 pointer-events-none dark:opacity-10" />
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-code-blue/10 text-code-blue mb-6 dark:bg-code-blue/20 dark:text-code-blue">
            <span className="text-sm font-medium">Technical Skills</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            My Expertise & Technical Proficiency
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto dark:text-white/80">
            A collection of technologies and tools I've mastered throughout my journey as a developer and ML enthusiast.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {['all', 'frontend', 'backend', 'ml', 'tools'].map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-code-blue text-white shadow-md dark:shadow-code-blue/30'
                  : 'bg-white/80 text-foreground/70 hover:bg-code-blue/10 border border-code-blue/20 dark:bg-gray-800 dark:text-white/80 dark:border-code-blue/30 dark:hover:bg-code-blue/20'
              }`}
              onClick={() => setActiveCategory(category as any)}
            >
              {category === 'ml' ? 'Machine Learning' : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div ref={skillsRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item opacity-0 bg-white/80 rounded-xl p-4 glass-panel hover-card flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:bg-code-blue/10 dark:bg-gray-800/90 dark:border-white/5 dark:text-white dark:hover:bg-code-blue/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-code-blue/10 flex items-center justify-center text-code-blue dark:bg-code-blue/20">
                {skill.icon}
              </div>
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
