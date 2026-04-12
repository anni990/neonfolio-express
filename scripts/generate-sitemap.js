#!/usr/bin/env node

/**
 * Sitemap Generator Script
 * Run this script to automatically generate sitemap.xml with all project URLs
 * 
 * Usage: node generate-sitemap.js (run this from project root)
 * Or add to package.json: "generate-sitemap": "node scripts/generate-sitemap.js"
 */

const fs = require('fs');
const path = require('path');

// Import project data
const projectsDataPath = path.join(__dirname, '../src/data/projectsData.ts');

try {
  // Read and parse projectsData.ts content
  // Note: This is a simplified approach. In production, you might want to use a proper TypeScript parser
  const fileContent = fs.readFileSync(projectsDataPath, 'utf8');
  
  // Extract project IDs using regex
  const projectIdRegex = /id:\s*["']([^"']+)["']/g;
  const projectIds = [];
  let match;
  
  while ((match = projectIdRegex.exec(fileContent)) !== null) {
    projectIds.push(match[1]);
  }

  // Build sitemap
  const baseUrl = 'https://anni990.me';
  const today = new Date().toISOString().split('T')[0];

  let sitemapContent = '<?xml version="1.0" encoding="UTF-8"?>\n';
  sitemapContent += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  // Homepage
  sitemapContent += `  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>\n`;

  // Projects page
  sitemapContent += `  <url>
    <loc>${baseUrl}/projects</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;

  // Individual project pages
  projectIds.forEach((projectId) => {
    sitemapContent += `  <url>
    <loc>${baseUrl}/project/${projectId}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  sitemapContent += '</urlset>';

  // Write sitemap
  const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(sitemapPath, sitemapContent, 'utf8');

  console.log(`✅ Sitemap generated successfully!`);
  console.log(`📍 Location: ${sitemapPath}`);
  console.log(`📊 Total URLs: ${projectIds.length + 2} (1 homepage + 1 projects page + ${projectIds.length} project pages)`);
  console.log(`🔄 Last updated: ${today}`);

} catch (error) {
  console.error('❌ Error generating sitemap:', error.message);
  process.exit(1);
}
