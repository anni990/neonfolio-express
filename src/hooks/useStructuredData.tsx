import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'person' | 'webpage' | 'organization';
  data: Record<string, any>;
}

export const useStructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data, type]);
};

// Pre-built schema generators
export const generatePersonSchema = (personData: {
  name: string;
  description: string;
  image: string;
  url: string;
  email?: string;
  sameAs?: string[];
  jobTitle?: string;
  location?: string;
  telephone?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: personData.name,
  url: personData.url,
  image: personData.image,
  description: personData.description,
  email: personData.email,
  sameAs: personData.sameAs || [],
  jobTitle: personData.jobTitle,
  ...(personData.location && { location: { '@type': 'Place', address: personData.location } }),
  ...(personData.telephone && { telephone: personData.telephone }),
});

export const generateWebsiteSchema = (websiteData: {
  name: string;
  url: string;
  description: string;
  author: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: websiteData.name,
  url: websiteData.url,
  description: websiteData.description,
  author: {
    '@type': 'Person',
    name: websiteData.author,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${websiteData.url}/search?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
});

export const generateOrganizationSchema = (orgData: {
  name: string;
  description: string;
  url: string;
  image: string;
  email: string;
  sameAs?: string[];
  foundingDate?: string;
  location?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: orgData.name,
  description: orgData.description,
  url: orgData.url,
  image: orgData.image,
  email: orgData.email,
  sameAs: orgData.sameAs || [],
  ...(orgData.foundingDate && { foundingDate: orgData.foundingDate }),
  ...(orgData.location && { location: { '@type': 'Place', address: orgData.location } }),
});

// Breadcrumb schema generator
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});
