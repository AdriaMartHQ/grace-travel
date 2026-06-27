// CF-build step (NO Chromium needed): inject the committed prerendered #root + per-route
// head from prerendered/routes.json into the fresh dist/index.html, writing static HTML
// per route. Also injects per-route JSON-LD (TouristTrip/WebPage + BreadcrumbList,
// FAQPage on home) so no-JS crawlers (Baiduspider, GPTBot…) see structured data —
// the SEO component only injects schema client-side, which never reaches the static HTML.
// Runs as part of `npm run build`. If snapshots are missing, it no-ops.
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

// ── Schema helpers ────────────────────────────────────────────────────────────
const AGENCY = {
  '@type': 'TravelAgency',
  name: 'Grace Way Travel Agency',
  alternateName: '恩途国际旅行社',
  url: ORIGIN,
  telephone: '+90 506 497 20 26',
};

// Breadcrumb mid/leaf labels per route (zh — prerender baseline is zh)
const NAV_LABEL = {
  '/tours': '土耳其线路',
  '/about': '关于我们',
  '/contact': '联系我们',
  '/tickets': '门票体验',
  '/airport-transfer': '接送机服务',
};

// Home FAQ (mirrors zh translations faqs) — real Q&A, FAQPage-eligible
const HOME_FAQ = [
  { q: '如何预订恩途的旅行服务？', a: '您可以浏览线路并点击"立即定制"，我们将优先通过微信、邮件与您确认细节，确保行程完美衔接。' },
  { q: '恩途是正规持牌旅行社吗？', a: '是的，恩途·国际旅行社是经土耳其旅游协会 (TÜRSAB) 认证的 A 类持牌旅行社，证书编号 18717。' },
  { q: '取消政策是怎样的？', a: '出发前30天以上取消全额退款；29–15天扣除50%；14天内不予退款。机票及签证费用不予退还。如被拒签，提供官方证明后扣除已产生费用退款。' },
  { q: '入境土耳其旅游保险如何保障？', a: '入境土耳其旅游保险参考价格约20元人民币/人/天，保障含医疗治疗、医疗转运与遗体运送，最高赔付额度可达24万元人民币。' },
];

const cleanTitle = (title) => String(title || '').split('|')[0].trim();

function buildSchemas(route, data) {
  const url = ORIGIN + (route === '/' ? '/' : route);
  const title = cleanTitle(data.title);
  const out = [];

  // 1) Page-type schema
  if (route.startsWith('/itineraries/')) {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'TouristTrip',
      name: title,
      description: data.description || '',
      url,
      touristType: { '@type': 'Audience', audienceType: '华人旅行者' },
      provider: AGENCY,
    });
  } else if (route !== '/') {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title,
      description: data.description || '',
      url,
      isPartOf: { '@type': 'WebSite', name: 'Grace Way Travel Agency', url: ORIGIN },
    });
  }

  // 2) BreadcrumbList (skip home)
  if (route !== '/') {
    const items = [{ name: '首页', item: ORIGIN + '/' }];
    if (route.startsWith('/itineraries/')) {
      items.push({ name: '行程线路', item: ORIGIN + '/tours' });
      items.push({ name: title });
    } else {
      items.push({ name: NAV_LABEL[route] || title });
    }
    out.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((it, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: it.name,
        ...(it.item ? { item: it.item } : {}),
      })),
    });
  }

  // 3) FAQPage (home only)
  if (route === '/') {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: HOME_FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return out;
}

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

  // 5) per-route JSON-LD schema (static → crawler-visible)
  const schemas = buildSchemas(route, data);
  if (schemas.length) {
    const scripts = schemas
      .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
      .join('\n');
    html = html.replace('</head>', `${scripts}\n</head>`);
  }

  const outDir = route === '/' ? DIST : path.join(DIST, route.replace(/^\//, ''));
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html);
  n++;
}
console.log(`[apply-prerender] injected ${n} prerendered route(s) + per-route JSON-LD into dist/`);
