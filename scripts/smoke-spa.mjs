// Pre-deploy browser smoke test for the code-split build. Runs against local dist/ in a
// real Chrome, because the HTTP smoke tests never execute a chunk and so cannot see either
// failure this guards against:
//
//   1. DIRECT LOAD — index.tsx uses createRoot, so React's first frame REPLACES the
//      prerendered HTML. If the landing page's chunk is not resolved before that frame,
//      the visitor sees the page blank out and come back. Asserted by sampling <main>
//      (the page body, without navbar/footer) on every mutation and failing if its text
//      ever collapses.
//   2. SPA NAVIGATION — a page reached by clicking a link must load its chunk and render.
//
// Usage:  npm run build && npm run smoke:spa
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';
import { PAGE_ROUTES } from '../lib/routes.manifest.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');
const PORT = 4179;
const CHROME =
  process.env.CHROME_PATH ||
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const MIME = { '.html':'text/html;charset=utf-8','.js':'text/javascript','.mjs':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.json':'application/json','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp','.ico':'image/x-icon','.webmanifest':'application/manifest+json','.txt':'text/plain','.xml':'application/xml' };

// Mirrors Caddy's `try_files {path} {path}/index.html =404`: no SPA fallback, so a route
// without a prerendered index.html is a 404 here exactly as it is in production.
const server = http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split('?')[0]);
  const candidates = [path.join(DIST, p), path.join(DIST, p, 'index.html')];
  const fp = candidates.find((c) => c.startsWith(DIST) && fs.existsSync(c) && fs.statSync(c).isFile());
  if (!fp) {
    res.writeHead(404);
    return res.end('not found');
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' });
  res.end(fs.readFileSync(fp));
});

if (!fs.existsSync(path.join(DIST, 'index.html'))) {
  console.error('dist/ missing — run `npm run build` first');
  process.exit(1);
}

await new Promise((r) => server.listen(PORT, r));
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
});

let fail = 0;
const bad = (msg) => {
  console.error(`✗ ${msg}`);
  fail++;
};

// ── 1. direct load: the prerendered content must never blank out ─────────────────────
for (const route of PAGE_ROUTES) {
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  // Slow the network down so a chunk that is awaited too late has time to show as a gap.
  const cdp = await page.createCDPSession();
  await cdp.send('Network.enable');
  await cdp.send('Network.emulateNetworkConditions', {
    offline: false,
    latency: 150,
    downloadThroughput: (1.5 * 1024 * 1024) / 8,
    uploadThroughput: (750 * 1024) / 8,
  });
  await page.evaluateOnNewDocument(() => {
    window.__rootSamples = [];
    const sample = () => {
      // <main> only: the navbar and footer render in every frame and would mask a blank
      // page body on short pages such as /contact.
      const m = document.querySelector('#root main');
      window.__rootSamples.push(m ? m.innerText.trim().length : 0);
    };
    // Start at readyState "interactive": the prerendered markup is fully parsed, and the
    // deferred module entry has not run yet. Sampling earlier would record a half-parsed
    // <main> as the baseline.
    const start = () => {
      sample();
      new MutationObserver(sample).observe(document.getElementById('root'), {
        childList: true,
        subtree: true,
        characterData: true,
      });
    };
    document.addEventListener('readystatechange', function onReady() {
      if (document.readyState !== 'interactive') return;
      document.removeEventListener('readystatechange', onReady);
      start();
    });
  });

  await page.goto(`http://localhost:${PORT}${route}?lang=zh`, { waitUntil: 'networkidle0', timeout: 60000 });
  // React has taken over once the prerendered markup (which has no React internals) is gone.
  const mounted = await page
    .waitForFunction(
      () => {
        const r = document.getElementById('root');
        return !!r && Object.keys(r).some((k) => k.startsWith('__reactContainer'));
      },
      { timeout: 30000 },
    )
    .then(() => true)
    .catch(() => false);
  const samples = await page.evaluate(() => window.__rootSamples);
  const first = samples[0] ?? 0;
  const min = Math.min(...samples);
  const last = samples.at(-1) ?? 0;

  if (!mounted) bad(`${route} — React never mounted`);
  else if (errors.length) bad(`${route} — page error: ${errors[0]}`);
  else if (first < 200) bad(`${route} — no prerendered content to protect (${first} chars)`);
  else if (min < first * 0.5) bad(`${route} — content blanked during mount (${first} → ${min} → ${last} chars)`);
  else console.log(`✓ direct ${route} — ${first} → min ${min} → ${last} chars, ${samples.length} samples`);
  await page.close();
}

// ── 2. SPA navigation: every page reachable by client-side routing renders ───────────
{
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(`http://localhost:${PORT}/?lang=zh`, { waitUntil: 'networkidle0', timeout: 60000 });
  for (const route of PAGE_ROUTES.filter((r) => r !== '/')) {
    // The router commits navigations inside startTransition, so the previous page is still
    // on screen right after the popstate. Wait for a route-specific signal — the per-route
    // <title> set by the SEO component — or the old page would satisfy the check.
    const prevTitle = await page.title();
    await page.evaluate((to) => {
      window.history.pushState({}, '', to);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }, route);
    const ok = await page
      .waitForFunction(
        (prev) => {
          const main = document.querySelector('#root main');
          return (
            document.title !== prev &&
            !!main &&
            !main.querySelector('[role="status"][aria-busy="true"]') &&
            main.innerText.trim().length > 200
          );
        },
        { timeout: 20000 },
        prevTitle,
      )
      .then(() => true)
      .catch(() => false);
    const alert = await page.$('[role="alert"]');
    if (!ok || alert) bad(`spa ${route} — ${alert ? 'chunk error boundary shown' : 'did not render'}`);
    else console.log(`✓ spa    ${route}`);
  }
  if (errors.length) bad(`spa — page error: ${errors[0]}`);
  await page.close();
}

await browser.close();
server.close();

if (fail) {
  console.error(`\n✗ ${fail} check(s) failed`);
  process.exit(1);
}
console.log('\nAll SPA smoke checks passed');
