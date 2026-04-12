/**
 * SEO Utilities and Constants
 */

export const SEO_CONFIG = {
  siteName: 'Aniket Kumar Mishra',
  domain: 'anni990.me',
  baseUrl: 'https://anni990.me',
  email: 'aniket@anni990.me',
  twitterHandle: '@aniket_mishra',
  linkedIn: 'https://linkedin.com/in/aniketkumarmishra',
  github: 'https://github.com/aniketkumarmishra',
  description: 'AI Engineer specializing in backend systems with AI integration, LLM, generative AI, and agentic AI. Expert in machine learning and full-stack software development.',
  keywords: [
    'AI Engineer',
    'Machine Learning',
    'LLM Integration',
    'Generative AI',
    'Agentic AI',
    'Backend Systems',
    'Software Developer',
    'Full Stack Developer',
    'Python Developer',
    'Cloud Architecture',
  ].join(', '),
};

export const PAGES_SEO = {
  home: {
    title: 'Aniket Kumar Mishra | AI Engineer | Backend & ML Specialist',
    description:
      'AI Engineer specializing in backend systems, LLM integration, generative AI, and agentic AI. Experienced full-stack software developer with expertise in machine learning.',
    keywords: `AI Engineer, Machine Learning, LLM, Backend Development, Generative AI, ${SEO_CONFIG.keywords}`,
  },
  projects: {
    title: 'Projects | Aniket Kumar Mishra - AI & ML Engineer',
    description:
      'Explore my portfolio of AI, machine learning, and backend system projects. Featuring LLM integration, agentic AI systems, and full-stack applications.',
    keywords: `Projects, AI Projects, Machine Learning Projects, ${SEO_CONFIG.keywords}`,
  },
  projectDetail: (projectName: string) => ({
    title: `${projectName} | Project Portfolio - Aniket Kumar Mishra`,
    description: `Detailed case study of ${projectName}. Explore technologies, architecture, and implementation details.`,
    keywords: `${projectName}, Project, AI, Machine Learning, Backend Development`,
  }),
  about: {
    title: 'About Me | Aniket Kumar Mishra',
    description:
      'Learn about my journey in AI engineering, machine learning, and backend development. Passionate about building intelligent systems.',
    keywords: `About, Experience, AI Engineer, Machine Learning Engineer, ${SEO_CONFIG.keywords}`,
  },
  contact: {
    title: 'Contact | Aniket Kumar Mishra',
    description: 'Get in touch with me. Open to collaborations on AI and ML projects.',
    keywords: 'Contact, Email, Collaboration',
  },
};

/**
 * Generate canonical URL
 */
export const getCanonicalUrl = (path: string = ''): string => {
  return `${SEO_CONFIG.baseUrl}${path}`;
};

/**
 * Generate structured data for homepage
 */
export const getHomePageStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Aniket Kumar Mishra',
  url: SEO_CONFIG.baseUrl,
  image: `${SEO_CONFIG.baseUrl}/og-image.jpeg`,
  description: SEO_CONFIG.description,
  email: SEO_CONFIG.email,
  sameAs: [
    SEO_CONFIG.linkedIn,
    SEO_CONFIG.github,
    `https://twitter.com/${SEO_CONFIG.twitterHandle}`,
  ],
  jobTitle: 'AI Engineer | Backend Systems Architect',
  worksFor: {
    '@type': 'Organization',
    name: 'Freelance',
  },
  knowsAbout: [
    'Artificial Intelligence',
    'Machine Learning',
    'Large Language Models (LLM)',
    'Generative AI',
    'Agentic AI',
    'Backend Systems Architecture',
    'Full Stack Development',
    'Python',
    'JavaScript',
    'TypeScript',
    'Cloud Computing',
  ],
});

/**
 * Generate FAQs structured data
 */
export const getFAQStructuredData = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

/**
 * Optimize image for web
 */
export const getOptimizedImageUrl = (imagePath: string, width?: number, height?: number): string => {
  // This would ideally use an image optimization service like Cloudinary or similar
  // For now, returning the path as is
  if (width && height) {
    // In production, integrate with image optimization service
    return imagePath;
  }
  return imagePath;
};

/**
 * Generate og:image with dynamic content
 */
export const generateOGImageUrl = (title?: string, subtitle?: string): string => {
  // This would generate Open Graph images dynamically
  // For now, return default
  return `${SEO_CONFIG.baseUrl}/og-image.jpeg`;
};

/**
 * Breadcrumb utilities
 */
export const generateBreadcrumbs = (currentPath: string) => {
  const pathSegments = currentPath.split('/').filter(Boolean);
  const breadcrumbs = [
    { name: 'Home', url: SEO_CONFIG.baseUrl },
  ];

  let currentUrl = SEO_CONFIG.baseUrl;
  pathSegments.forEach((segment) => {
    currentUrl += `/${segment}`;
    // Convert segment to readable format
    const name = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    breadcrumbs.push({ name, url: currentUrl });
  });

  return breadcrumbs;
};
