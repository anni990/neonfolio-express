
import React from 'react';
import { Code, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 md:px-16 bg-white dark:bg-gray-900 border-t border-code-blue/10 dark:border-white/10">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-code-blue dark:text-code-blue">
            <Code className="h-5 w-5" />
            <span className="text-xl font-semibold">Portfolio</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              aria-label="GitHub"
              className="text-foreground/70 hover:text-code-blue transition-colors dark:text-gray-300 dark:hover:text-code-blue"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              aria-label="LinkedIn"
              className="text-foreground/70 hover:text-code-blue transition-colors dark:text-gray-300 dark:hover:text-code-blue"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              aria-label="Twitter"
              className="text-foreground/70 hover:text-code-blue transition-colors dark:text-gray-300 dark:hover:text-code-blue"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="mailto:hello@example.com" 
              aria-label="Email"
              className="text-foreground/70 hover:text-code-blue transition-colors dark:text-gray-300 dark:hover:text-code-blue"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-code-blue/10 dark:border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-foreground/60 dark:text-gray-400">
          <p>© {currentYear} Developer Portfolio. All rights reserved.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-code-blue transition-colors dark:hover:text-code-blue">Privacy Policy</a>
            <a href="#" className="hover:text-code-blue transition-colors dark:hover:text-code-blue">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
