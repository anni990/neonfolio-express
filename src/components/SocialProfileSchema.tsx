import { useEffect } from 'react';

/**
 * Component to add schema.org markup for social profiles
 * This helps search engines understand your social presence
 */
export const SocialProfileSchema = () => {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Aniket Kumar Mishra',
      url: 'https://anni990.me',
      email: 'aniket@anni990.me',
      jobTitle: 'AI Engineer | Backend Systems Architect',
      description: 'AI Engineer specializing in backend systems, LLM integration, generative AI, and agentic AI. Experienced full-stack software developer with expertise in machine learning.',
      image: 'https://anni990.me/og-image.jpeg',
      sameAs: [
        'https://linkedin.com/in/aniketkumarmishra',
        'https://github.com/aniketkumarmishra',
        'https://twitter.com/aniket_mishra',
      ],
      worksFor: {
        '@type': 'Organization',
        name: 'Freelance',
      },
      knowsAbout: [
        'Artificial Intelligence',
        'Machine Learning',
        'Large Language Models',
        'Generative AI',
        'Agentic AI Systems',
        'Backend Architecture',
        'Full Stack Development',
        'Python',
        'JavaScript/TypeScript',
        'Cloud Computing',
        'APIs',
        'Databases',
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null;
};
