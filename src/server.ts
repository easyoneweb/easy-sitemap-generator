import express, { Express } from 'express';
import dotenv from 'dotenv';
import createSitemapTask from './utils/create-sitemap';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.static('./sitemaps'));

createSitemapTask();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});