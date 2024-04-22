import SitemapGenerator from 'sitemap-generator';
import type { EventTypes  } from '../../types/sitemap';

class Sitemap {
  #url;
  #generator;

  constructor(url: string) {
    this.#url = url;
    this.#generator = SitemapGenerator(this.#url, {
      stripQuerystring: false
    });
  }

  addEvent(event: EventTypes, callback: (() => void)) {
    this.#generator.on(event, callback);
  }

  startCrawler() {
    this.#generator.start();
  }
}

export {
  Sitemap
};