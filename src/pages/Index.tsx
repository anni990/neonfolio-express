import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SocialLinks from '@/components/layout/SocialLinks';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import ResearchWork from '@/components/sections/ResearchWork';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = 'Aniket Kumar Mishra | Machine Learning Engineer';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SocialLinks />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ResearchWork />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
