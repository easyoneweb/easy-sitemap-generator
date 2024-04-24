import { Cron, Sitemap } from '../lib';
import updateSitemapToFullSpec from './update-to-full-spec';

function createSitemap() {
  if (!process.env.SITEMAP_URL) {
    throw new Error('SITEMAP_URL environment variable is required to run the app');
  }

  const sitemap = new Sitemap(process.env.SITEMAP_URL);

  sitemap.addEvent('done', () => {
    console.log('[server]: Sitemap has been generated');
    updateSitemapToFullSpec();
  });

  sitemap.startCrawler();
}

function createSitemapTask() {
  if (!process.env.CRON_SITEMAP_TIME) {
    throw new Error('CRON_SITEMAP_TIME environment variable is required to run the app');
  }
  
  const cronCreateSitemap = new Cron().schedule(process.env.CRON_SITEMAP_TIME, createSitemap);
  cronCreateSitemap.start();
}

export default createSitemapTask;