import { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  twitterHandle?: string;
  author?: string;
  canonicalUrl?: string;
}

export const useMetaTags = ({
  title,
  description,
  keywords,
  image = 'https://anni990.me/og-image.jpeg',
  url = 'https://anni990.me',
  type = 'website',
  twitterHandle = '@aniket_mishra',
  author = 'Aniket Kumar Mishra',
  canonicalUrl,
}: MetaTagsProps) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Helper function to set or update meta tag
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      let element = document.querySelector(`meta[${property ? 'property' : 'name'}="${name}"]`) as HTMLMetaElement;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(property ? 'property' : 'name', name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Basic meta tags
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }
    setMetaTag('author', author);
    setMetaTag('viewport', 'width=device-width, initial-scale=1, maximum-scale=5');

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', image, true);
    setMetaTag('og:url', canonicalUrl || url, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:site_name', 'Aniket Kumar Mishra | AI Engineer', true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', image);
    if (twitterHandle) {
      setMetaTag('twitter:creator', twitterHandle);
    }

    // Canonical URL
    let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.rel = 'canonical';
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.href = canonicalUrl || url;

    // Mobile optimization
    setMetaTag('mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Search engine tags
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow');

    // Additional tags
    setMetaTag('theme-color', '#0f0f1e');

  }, [title, description, keywords, image, url, type, twitterHandle, author, canonicalUrl]);
};
