// Post-deploy smoke test: assert the live site's HTTP contract matches the manifest.
//
//   page routes     → 200
//   redirect routes → 301 (Caddy-side; the client-side <Navigate> is only a fallback)
//   garbage URL     → 404   ← the soft-404 regression guard
//   devOnly routes  → 404   ← must never be publicly reachable
//
// Usage:  npm run smoke              (checks https://grace.tr)
//         BASE=http://localhost:4173 npm run smoke
import { ROUTES, ORIGIN } from '../lib/routes.manifest.mjs';

const BASE = process.env.BASE || ORIGIN;
const TIMEOUT = 20000;

/** @type {{label:string,url:string,expect:number|number[]}[]} */
const checks = [];

for (const r of ROUTES) {
  if (r.kind === 'page') {
    checks.push({ label: `page     ${r.path}`, url: BASE + r.path, expect: 200 });
  } else if (r.kind === 'redirect') {
    const from = r.path.replace(/\/\*$/, '');
    checks.push({ label: `redirect ${from}`, url: BASE + from, expect: [301, 308] });
  } else if (r.kind === 'devOnly') {
    checks.push({ label: `devOnly  ${r.path}`, url: BASE + r.path, expect: 404 });
  }
}

// The whole point of the exercise: an unknown path must be a hard 404, not a 200 SPA shell.
checks.push({ label: 'garbage  /__does-not-exist__', url: `${BASE}/__does-not-exist__`, expect: 404 });
checks.push({ label: 'garbage  /itineraries/nope', url: `${BASE}/itineraries/nope`, expect: 404 });

// Regression guards for the strict `try_files ... =404`. These used to be absorbed by the
// SPA fallback; if the Caddy rule is too strict they turn into 404s for real visitors.
checks.push({ label: 'trailing /tours/', url: `${BASE}/tours/`, expect: [200, 301, 308] });
checks.push({
  label: 'trailing /itineraries/z1-turkey-11-days/',
  url: `${BASE}/itineraries/z1-turkey-11-days/`,
  expect: [200, 301, 308],
});

// Static files must keep working — they are served straight off disk, not via try_files.
for (const f of ['/sitemap.xml', '/robots.txt', '/llms.txt', '/favicon.ico']) {
  checks.push({ label: `static   ${f}`, url: BASE + f, expect: 200 });
}

// Content-checked: a bare 200 here proves nothing, because the old SPA fallback also
// answered 200 for /404.html by serving index.html.
checks.push({
  label: 'static   /404.html',
  url: `${BASE}/404.html`,
  expect: 200,
  contains: '页面不存在',
});

const ok = (actual, expect) => (Array.isArray(expect) ? expect.includes(actual) : actual === expect);

let failed = 0;
for (const c of checks) {
  let status = 0;
  let note = '';
  let bodyOk = true;
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), TIMEOUT);
    const res = await fetch(c.url, { redirect: 'manual', signal: ctrl.signal });
    clearTimeout(timer);
    status = res.status;
    if (c.contains) {
      const body = await res.text();
      bodyOk = body.includes(c.contains);
      if (!bodyOk) note = ` (body missing "${c.contains}")`;
    }
  } catch (e) {
    note = ` (${e.name === 'AbortError' ? 'timeout' : e.message})`;
  }
  const pass = ok(status, c.expect) && bodyOk;
  if (!pass) failed++;
  const want = Array.isArray(c.expect) ? c.expect.join('|') : c.expect;
  console.log(`${pass ? '✓' : '✗'} ${c.label.padEnd(56)} ${status || '---'} (want ${want})${note}`);
}

console.log(`\n${checks.length - failed}/${checks.length} passed against ${BASE}`);
process.exit(failed ? 1 : 0);
