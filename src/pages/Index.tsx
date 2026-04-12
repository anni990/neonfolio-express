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
import Internships from '@/components/sections/Internships';
import { useMetaTags } from '@/hooks/useMetaTags';
import { useStructuredData, generatePersonSchema } from '@/hooks/useStructuredData';
import { PAGES_SEO, SEO_CONFIG, getHomePageStructuredData } from '@/lib/seo';

const Index = () => {
  // Set meta tags for homepage
  useMetaTags({
    title: PAGES_SEO.home.title,
    description: PAGES_SEO.home.description,
    keywords: PAGES_SEO.home.keywords,
    image: `${SEO_CONFIG.baseUrl}/og-image.jpeg`,
    url: SEO_CONFIG.baseUrl,
    canonicalUrl: SEO_CONFIG.baseUrl,
  });

  // Add structured data
  useStructuredData({
    type: 'person',
    data: getHomePageStructuredData(),
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SocialLinks />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internships />
        <ResearchWork />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
