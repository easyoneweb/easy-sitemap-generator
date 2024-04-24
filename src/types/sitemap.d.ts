type EventTypes = 'add' | 'done' | 'error' | 'ignore';

type SitemapUrl = {
  loc: string[];
  lastmod: string;
  changefreq: string;
  priority: string;
}

type Sitemap = {
  urlset: {
    url: Array<SitemapUrl>;
  }
}

export {
  EventTypes,
  SitemapUrl,
  Sitemap
};