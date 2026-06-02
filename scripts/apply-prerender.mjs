// CF-build step (NO Chromium needed): inject the committed prerendered #root + per-route
// head from prerendered/routes.json into the fresh dist/index.html, writing static HTML
// per route. Runs as part of `npm run build`. If snapshots are missing, it no-ops.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SNAP = path.join(ROOT, 'prerendered', 'routes.json');
const ORIGIN = 'https://grace.tr';

if (!fs.existsSync(SNAP)) {
  console.warn('[apply-prerender] prerendered/routes.json missing — skipping (SPA only).');
  process.exit(0);
}

const routes = JSON.parse(fs.readFileSync(SNAP, 'utf8'));
const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

let n = 0;
for (const [route, data] of Object.entries(routes)) {
  if (!data || !data.rootHtml) continue;
  let html = template;
  const url = ORIGIN + (route === '/' ? '/' : route);

  // 1) inject rendered content into the empty root
  html = html.replace('<div id="root"></div>', `<div id="root">${data.rootHtml}</div>`);
  // 2) per-route <title>
  if (data.title) html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(data.title)}</title>`);
  // 3) per-route description (name + og)
  if (data.description) {
    html = html.replace(/(<meta name="description" content=")[\s\S]*?("\s*\/?>)/, `$1${esc(data.description)}$2`);
    html = html.replace(/(<meta property="og:description" content=")[\s\S]*?("\s*\/?>)/, `$1${esc(data.description)}$2`);
  }
  // 4) per-route canonical + og:url + og:title
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = html.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  if (data.title) html = html.replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(data.title)}$2`);

  const outDir = route === '/' ? DIST : path.join(DIST, route.replace(/^\//, ''));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  n++;
}
console.log(`[apply-prerender] injected ${n} prerendered route(s) into dist/`);
