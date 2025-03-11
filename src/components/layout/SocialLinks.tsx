
import React from 'react';
import { Github, Linkedin, Twitter, FileCode2, Mail, Database, Brain } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="fixed left-6 bottom-0 z-40 hidden md:flex flex-col gap-5 items-center">
      <div className="flex flex-col gap-5 items-center">
        <a 
          href="https://github.com/anni990" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-code-blue transition-all duration-300 hover:scale-125 social-icon"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5" />
        </a>
        <a 
          href="https://linkedin.com/in/anni990" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-code-blue transition-all duration-300 hover:scale-125 social-icon"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a 
          href="https://twitter.com/anni990_" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-code-blue transition-all duration-300 hover:scale-125 social-icon"
          aria-label="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a 
          href="mailto:aniket22mishra2004@gmail.com" 
          target="_blank" 
          className="text-foreground/70 hover:text-code-blue transition-all duration-300 hover:scale-125 social-icon"
          aria-label="Email"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a 
          href="https://kaggle.com/anni990" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-code-blue transition-all duration-300 hover:scale-125 social-icon"
          aria-label="Kaggle"
        >
          <Database className="w-5 h-5" />
        </a>
        <a 
          href="https://huggingface.co/anni990" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-code-blue transition-all duration-300 hover:scale-125 social-icon"
          aria-label="Hugging Face"
        >
          <Brain className="w-5 h-5" />
        </a>
      </div>
      <div className="h-20 w-px bg-code-blue/30 mt-2 animate-pulse-light"></div>
    </div>
  );
};

export default SocialLinks;
