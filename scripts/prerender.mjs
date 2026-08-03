// Local prerender: render each route in a real Chrome (forced zh) and capture the
// rendered #root + per-route head into prerendered/routes.json (committed).
// The CF build then injects these into the fresh index.html (see apply-prerender.mjs),
// so NO Chromium is needed in CI. Re-run `npm run prerender` after content changes.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';
import { PAGE_ROUTES } from '../lib/routes.manifest.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(ROOT, 'prerendered');
const PORT = 4178;
const CHROME =
  process.env.CHROME_PATH ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

// Route list comes from lib/routes.manifest.mjs — the same source App.tsx builds its
// <Route> table from, so a new page can no longer ship without a snapshot.
const ROUTES = PAGE_ROUTES;

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
  // Surface in-page errors. Without this a bootstrap failure (e.g. a manifest entry whose
  // component is missing from App.tsx's PAGES map, which throws) shows up only as an
  // opaque "root too small" on every route — 30s of timeout each before you learn nothing.
  const pageErrors = [];
  page.on('pageerror', (err) => pageErrors.push(err.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') pageErrors.push(msg.text());
  });
  // The wait below asserts the ZH chunk committed AND CJK text is present. A timeout means
  // that assertion failed, so the route MUST be treated as failed even if the root happens
  // to exceed the size threshold — otherwise wrong-language or half-initialised content
  // silently becomes the committed snapshot.
  let routeFailed = false;
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
    routeFailed = true;
  }
  const data = await page.evaluate(() => ({
    rootHtml: document.getElementById('root')?.innerHTML || '',
    title: document.title || '',
    description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
  }));
  await page.close();
  const tooSmall = data.rootHtml.length < 1000;
  if (routeFailed || tooSmall) {
    console.error(
      `✗ ${route} — ${tooSmall ? `root too small (${data.rootHtml.length})` : 'render assertion not met (see wait failure above)'}`,
    );
    if (pageErrors.length) {
      console.error(`  ↳ in-page error: ${[...new Set(pageErrors)].slice(0, 2).join(' | ')}`);
    }
    fail++;
  } else console.log(`✓ ${route} — ${data.rootHtml.length} chars · "${data.title.slice(0, 46)}"`);
  out[route] = data;
}

await browser.close();
server.close();

// Never overwrite a good snapshot with a broken run. This used to write unconditionally:
// a failed prerender clobbered the committed routes.json with empty/partial content, and
// only the exit code said so — so a subsequent `git add -A` could ship blank SEO content.
if (fail) {
  console.error(
    `\n✗ ${fail} route(s) failed — prerendered/routes.json left UNCHANGED. Fix the errors above and re-run.`,
  );
  process.exit(1);
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'routes.json'), JSON.stringify(out));
console.log(`\nWrote prerendered/routes.json — ${Object.keys(out).length} routes, 0 failure(s)`);
