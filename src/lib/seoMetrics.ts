/**
 * SEO Performance Metrics Tracker
 * Track your website's SEO performance over time
 */

export interface SEOMetric {
  date: string;
  metric: string;
  value: number;
  notes?: string;
}

export interface SEOMetricsReport {
  domain: string;
  generatedDate: string;
  metrics: {
    googleSearchConsole: {
      totalClicks?: number;
      totalImpressions?: number;
      averagePosition?: number;
      ctr?: number;
    };
    coreWebVitals: {
      lcp?: number; // Largest Contentful Paint (ms)
      fid?: number; // First Input Delay (ms)
      cls?: number; // Cumulative Layout Shift
    };
    ranking: {
      keywordsRanking?: number;
      keywordsTop10?: number;
      keywordsTop3?: number;
    };
    technical: {
      totalPages?: number;
      crawledPages?: number;
      errors?: number;
      mobileUsability?: string;
    };
  };
}

/**
 * SEO Performance Thresholds
 * Use these for monitoring and alerts
 */
export const SEO_THRESHOLDS = {
  // Core Web Vitals (what Google considers "Good")
  LCP_GOOD: 2500, // Largest Contentful Paint (ms)
  FID_GOOD: 100, // First Input Delay (ms) - from INP now
  CLS_GOOD: 0.1, // Cumulative Layout Shift

  // Performance targets
  PAGE_LOAD_TIME_GOOD: 3000, // ms
  MOBILE_LOAD_TIME_GOOD: 4000, // ms

  // Keyword ranking
  TARGET_KEYWORDS_RANKING: 20,
  TARGET_KEYWORDS_TOP_10: 15,
  TARGET_KEYWORDS_TOP_3: 5,

  // SEO health
  TARGET_CRAWLED_PAGES: 100,
  MAX_CRAWL_ERRORS: 5,
};

/**
 * Keywords to Track
 * Monitor rankings for these keywords over time
 */
export const KEYWORDS_TO_TRACK = [
  // Primary keywords
  { keyword: 'AI Engineer', difficulty: 'Hard', volume: 'High' },
  { keyword: 'Machine Learning Engineer', difficulty: 'Hard', volume: 'High' },
  { keyword: 'Backend Developer', difficulty: 'Hard', volume: 'High' },

  // Secondary keywords
  { keyword: 'LLM Integration', difficulty: 'Medium', volume: 'Medium' },
  { keyword: 'Generative AI', difficulty: 'Hard', volume: 'High' },
  { keyword: 'Agentic AI Systems', difficulty: 'Medium', volume: 'Low' },
  { keyword: 'Full Stack Developer', difficulty: 'Hard', volume: 'High' },

  // Long-tail keywords (easier to rank for)
  { keyword: 'backend systems with AI integration', difficulty: 'Low', volume: 'Low' },
  { keyword: 'LLM API integration tutorial', difficulty: 'Medium', volume: 'Medium' },
  { keyword: 'building agentic AI systems', difficulty: 'Low', volume: 'Low' },
  { keyword: 'machine learning backend architecture', difficulty: 'Medium', volume: 'Low' },
];

/**
 * Monthly SEO Tracking Template
 * Copy and fill this out monthly to track progress
 */
export const MONTHLY_SEO_REPORT_TEMPLATE = {
  month: 'April',
  year: 2026,
  
  // Google Search Console metrics
  googleSearchConsole: {
    totalClicks: null,
    totalImpressions: null,
    averagePosition: null,
    ctr: null,
    topQueries: [], // Top 5 search queries
  },

  // Website analytics
  analytics: {
    totalSessions: null,
    uniqueUsers: null,
    bounceRate: null,
    avgSessionDuration: null,
    conversionRate: null,
  },

  // Performance metrics
  performance: {
    averageLCP: null,
    averageFID: null,
    averageCLS: null,
    pageLoadTime: null,
  },

  // Ranking updates
  rankings: {
    keywordPositionChanges: {},
    newRankings: [],
    droppedRankings: [],
  },

  // Tasks completed
  tasksCompleted: {
    contentCreated: 0,
    linksBuilt: 0,
    technicalImprovements: [],
  },

  // Notes and observations
  notes: 'Initial setup phase',
};

/**
 * Backlink Tracking Template
 * Track quality backlinks to your site
 */
export const BACKLINK_TRACKING_TEMPLATE = {
  date: new Date().toISOString(),
  backlinks: [
    {
      source: 'github.com',
      url: 'https://github.com/aniketkumarmishra',
      anchor: 'Aniket Kumar Mishra - GitHub',
      authority: 'High',
      nofollow: false,
      notes: 'GitHub profile - platform profile'
    },
    {
      source: 'linkedin.com',
      url: 'https://linkedin.com/in/aniketkumarmishra',
      anchor: 'Aniket Kumar Mishra - LinkedIn',
      authority: 'High',
      nofollow: false,
      notes: 'LinkedIn profile - professional network'
    },
  ],
  totalBacklinks: 2,
  domainsLinkedTo: 2,
};

/**
 * Competitor Tracking Template
 * Track competitor rankings to stay ahead
 */
export const COMPETITOR_TRACKING_TEMPLATE = {
  competitors: [
    {
      name: 'Competitor 1',
      website: 'https://example1.com',
      backlinks: null,
      topPages: [],
      topKeywords: [],
      traffic: null,
    },
    {
      name: 'Competitor 2',
      website: 'https://example2.com',
      backlinks: null,
      topPages: [],
      topKeywords: [],
      traffic: null,
    },
  ],
  notes: 'Add your main competitors in AI/ML space',
};

/**
 * Content Calendar Template
 * Plan your SEO-optimized content
 */
export const CONTENT_CALENDAR_TEMPLATE = [
  {
    date: '2026-04-20',
    title: 'Getting Started with LLM Integration',
    category: 'Tutorial',
    targetKeywords: ['LLM integration', 'beginner guide'],
    priority: 'High',
    status: 'Planned',
  },
  {
    date: '2026-04-27',
    title: 'Building Agentic AI Systems',
    category: 'Deep Dive',
    targetKeywords: ['agentic AI', 'systems design'],
    priority: 'High',
    status: 'Planned',
  },
];

/**
 * Quick SEO Health Check Function
 * Run this monthly to check overall SEO health
 */
export const checkSEOHealth = (metrics: SEOMetricsReport) => {
  const report = {
    timestamp: new Date().toISOString(),
    healthScore: 0,
    issues: [],
    recommendations: [],
  };

  // Check Core Web Vitals
  if (metrics.metrics.coreWebVitals.lcp && metrics.metrics.coreWebVitals.lcp > SEO_THRESHOLDS.LCP_GOOD) {
    report.issues.push('❌ LCP is slow (impacts ranking)');
    report.recommendations.push('Optimize largest contentful paint - reduce image sizes, enable lazy loading');
  }

  if (metrics.metrics.coreWebVitals.cls && metrics.metrics.coreWebVitals.cls > SEO_THRESHOLDS.CLS_GOOD) {
    report.issues.push('❌ CLS is high (layout shifts detected)');
    report.recommendations.push('Fix cumulative layout shift - reserve space for ads/images');
  }

  // Check technical issues
  if (metrics.metrics.technical.errors && metrics.metrics.technical.errors > SEO_THRESHOLDS.MAX_CRAWL_ERRORS) {
    report.issues.push(`❌ Too many crawl errors: ${metrics.metrics.technical.errors}`);
    report.recommendations.push('Check Google Search Console for crawl error details');
  }

  // Calculate health score
  report.healthScore = 100 - (report.issues.length * 15);
  report.healthScore = Math.max(0, report.healthScore);

  return report;
};

/**
 * SEO Quick Reference
 */
export const SEO_QUICK_REFERENCE = {
  metaTitleLength: '50-60 characters',
  metaDescriptionLength: '155-160 characters',
  minContentLength: '300 words',
  recommendedImages: '3-5 per 1000 words',
  internalLinks: '3-5 per 1000 words',
  h1PerPage: 'Exactly 1',
  keywordDensity: '1-2%',
  sitemapUpdateFrequency: 'When content changes',
  robotsTxtLocation: 'public/robots.txt',
};
