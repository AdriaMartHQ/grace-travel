// Emits dist/sitemap.xml from lib/routes.manifest.mjs.
//
// Replaces the old hand-written public/sitemap.xml, which had to be edited by hand every
// time a route was added and therefore drifted from App.tsx. Generating it at build time
// makes that class of mistake impossible.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ROUTES, ORIGIN } from '../lib/routes.manifest.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');

const pages = ROUTES.filter((r) => r.kind === 'page');

const urls = pages
  .map((r) => {
    const loc = `${ORIGIN}${r.path}`;
    const parts = [`<loc>${loc}</loc>`];
    if (r.lastmod) parts.push(`<lastmod>${r.lastmod}</lastmod>`);
    if (r.changefreq) parts.push(`<changefreq>${r.changefreq}</changefreq>`);
    if (typeof r.priority === 'number') parts.push(`<priority>${r.priority.toFixed(1)}</priority>`);
    return `  <url>${parts.join('')}</url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

if (!fs.existsSync(DIST)) {
  console.error('[sitemap] dist/ missing — run vite build first');
  process.exit(1);
}

fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml);
console.log(`[sitemap] wrote dist/sitemap.xml — ${pages.length} page route(s)`);
