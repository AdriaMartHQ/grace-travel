// Local prerender: render each route in a real Chrome (forced zh) and capture the
// rendered #root + per-route head into prerendered/routes.json (committed).
// The CF build then injects these into the fresh index.html (see apply-prerender.mjs),
// so NO Chromium is needed in CI. Re-run `npm run prerender` after content changes.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(ROOT, 'prerendered');
const PORT = 4178;
const CHROME =
  process.env.CHROME_PATH ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const ROUTES = [
  '/', '/tours', '/china-inbound', '/airport-transfer', '/tickets', '/about', '/contact',
  '/itineraries/b1-balkan-3-countries-12-days',
  '/itineraries/b2-balkan-3-countries-10-days',
  '/itineraries/s1-turkey-6-days', '/itineraries/s2-turkey-8-days',
  '/itineraries/s4-turkey-10-days', '/itineraries/s5-turkey-8-days',
  '/itineraries/z1-turkey-11-days', '/itineraries/z2-revelation-4-days',
  '/itineraries/z5-paul-footsteps-9-days', '/itineraries/z6-overland-seven-churches-7-days',
  '/itineraries/i1-israel-holyland-8-days',
];

const MIME = { '.html':'text/html;charset=utf-8','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp','.ico':'image/x-icon','.webmanifest':'application/manifest+json','.txt':'text/plain','.xml':'application/xml' };

const server = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  let fp = path.join(DIST, p);
  try {
    if (fs.existsSync(fp) && fs.statSync(fp).isFile()) {
      // serve file
    } else if (path.extname(p)) {
      res.writeHead(404); return res.end('not found');
    } else {
      fp = path.join(DIST, 'index.html'); // SPA fallback for routes
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' });
    res.end(fs.readFileSync(fp));
  } catch {
    res.writeHead(500); res.end('err');
  }
});

await new Promise((r) => server.listen(PORT, r));
console.log(`static server on :${PORT}, Chrome: ${CHROME}`);

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

const out = {};
let fail = 0;
for (const route of ROUTES) {
  const page = await browser.newPage();
  try {
    await page.goto(`http://localhost:${PORT}${route}?lang=zh`, { waitUntil: 'domcontentloaded', timeout: 45000 });
    await page.waitForFunction(() => {
      const r = document.getElementById('root');
      if (!r || r.children.length === 0 || r.innerText.trim().length <= 50) return false;
      // i18n is now lazy-loaded per language: wait until the ZH chunk has actually
      // committed (lang flips to 'zh' in an effect) AND CJK text is present — so we never
      // snapshot an empty/pre-bootstrap or wrong-language frame.
      return document.documentElement.lang.startsWith('zh') && /[一-鿿]/.test(r.innerText);
    }, { timeout: 30000 });
    await new Promise((r) => setTimeout(r, 600));
  } catch (e) {
    console.error(`✗ ${route} — render wait failed: ${e.message}`);
  }
  const data = await page.evaluate(() => ({
    rootHtml: document.getElementById('root')?.innerHTML || '',
    title: document.title || '',
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
  }));
  await page.close();
  if (data.rootHtml.length < 1000) { console.error(`✗ ${route} — root too small (${data.rootHtml.length})`); fail++; }
  else console.log(`✓ ${route} — ${data.rootHtml.length} chars · "${data.title.slice(0, 46)}"`);
  out[route] = data;
}

await browser.close();
server.close();
fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'routes.json'), JSON.stringify(out));
console.log(`\nWrote prerendered/routes.json — ${ROUTES.length} routes, ${fail} failure(s)`);
process.exit(fail ? 1 : 0);
