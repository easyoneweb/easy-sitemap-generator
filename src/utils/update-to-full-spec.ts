import fs from 'fs';
import xml2js from 'xml2js';
import type { Sitemap } from '../types/sitemap';

async function addCustomUrls(xml: Sitemap, xmlToConcat: Sitemap) {
  xml.urlset.url.push(...xmlToConcat.urlset.url);

  return xml;
}

function getUrlPriority(location: string[]) {
  let priority = '0.1';

  if (!location.length) return priority;

  if (location[0].includes(process.env.SITEMAP_URL || '')) priority = '1.0';
  if (location[0].includes(process.env.PRIORITY_9 || '')) priority = '0.9';
  if (location[0].includes(process.env.PRIORITY_8 || '')) priority = '0.8';
  if (location[0].includes(process.env.PRIORITY_5 || '')) priority = '0.5';

  return priority;
}

async function updateSitemapToFullSpec() {
  const xml = fs.readFileSync(process.env.FILE || './sitemaps/sitemap.xml', 'utf8');
  const customXml = fs.readFileSync(process.env.FILE_CUSTOM || './sitemaps/custom-example.xml', 'utf8');
  const parsedXml: Sitemap = await new xml2js.Parser().parseStringPromise(xml);
  const customParsedXml: Sitemap = await new xml2js.Parser().parseStringPromise(customXml);
  const updatedParsedXml: Sitemap = await addCustomUrls(parsedXml, customParsedXml);
  
  updatedParsedXml.urlset.url.forEach(url => {
    url.lastmod = new Date().toISOString().split('T')[0];
    url.changefreq= 'weekly';
    url.priority = getUrlPriority(url.loc);
  });

  const updatedXml = new xml2js.Builder().buildObject(parsedXml);
  
  fs.writeFileSync(process.env.FILE_FULL_SPEC || './sitemaps/sitemap-full.xml', updatedXml);

  console.log('[server]: Sitemap Full Spec has been generated');
}

export default updateSitemapToFullSpec;