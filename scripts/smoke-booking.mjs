// Booking-CTA monitor: verifies every hardcoded Odoo product slug in lib/bookingLinks.ts
// still points at the product it claims to.
//
// WHY THIS EXISTS — the failure is silent by construction. Odoo builds a product URL as
// <name-slug>-<id> but resolves it on the trailing <id> alone. Rename a product and the
// canonical slug changes, yet our stale URL still works via a 301. The CTA keeps
// converting, nothing errors, and the hardcoded table quietly rots. Verified against
// production: /shop/totally-wrong-name-2 → 301 → /shop/gw-s1-sheng-ji-zhi-lu-…-6ri-2.
//
// Severity is tiered so this doesn't cry wolf over harmless normalisation redirects:
//   200 + identity match                          → PASS
//   301 → canonical slug, same id + identity match → WARN  (drifted; refresh the table)
//   301 → anywhere else, or 404/5xx, or identity mismatch → FAIL
//
// Usage: npm run smoke:booking   (or via npm run smoke)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.resolve(__dirname, '..', 'lib', 'bookingLinks.ts');
const TIMEOUT = 30000;

const src = fs.readFileSync(SRC, 'utf8');
const base = src.match(/const BASE = '([^']+)'/)?.[1];
const entries = [...src.matchAll(/(\w+): shop\('([^']+)'\)/g)].map(([, key, slug]) => ({
  key,
  slug,
  id: slug.match(/-(\d+)$/)?.[1] ?? null,
}));

// A parser that silently matches nothing would report "0/0 passed" — the exact shape of
// failure this script exists to catch. Refuse to run instead.
if (!base || entries.length === 0) {
  console.error(`✗ could not parse ${path.relative(process.cwd(), SRC)} (base=${base}, entries=${entries.length})`);
  console.error('  → the file format changed; update the parser in scripts/smoke-booking.mjs');
  process.exit(1);
}
const noId = entries.filter((e) => !e.id);
if (noId.length) {
  console.error(`✗ ${noId.length} slug(s) have no trailing -<id>: ${noId.map((e) => e.key).join(', ')}`);
  process.exit(1);
}

const get = async (url, redirect) => {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT);
  try {
    return await fetch(url, { redirect, signal: ctrl.signal });
  } finally {
    clearTimeout(timer);
  }
};

let failed = 0;
let warned = 0;

for (const { key, slug, id } of entries) {
  const url = `${base}/shop/${slug}`;
  const code = `GW-${key}`;
  let verdict = 'FAIL';
  let detail = '';

  try {
    const res = await get(url, 'manual');

    if (res.status === 301 || res.status === 302 || res.status === 308) {
      const dest = res.headers.get('location') || '';
      const destId = dest.match(/-(\d+)(?:[/?#]|$)/)?.[1];
      if (destId === id) {
        // Same product, different canonical slug — the rename case.
        const body = await (await get(new URL(dest, base).href, 'follow')).text();
        if (body.includes(code)) {
          verdict = 'WARN';
          detail = `slug drifted → ${dest.replace(base, '')}`;
        } else {
          detail = `redirected to id ${destId} but body lacks ${code}`;
        }
      } else {
        detail = `redirects away → ${dest || '(no location)'}`;
      }
    } else if (res.status === 200) {
      const body = await res.text();
      // Two-factor identity: the internal reference code AND the id we asked for.
      if (!body.includes(code)) detail = `200 but body lacks ${code} (id ${id} may now be a different product)`;
      else verdict = 'PASS';
    } else {
      detail = `status ${res.status}`;
    }
  } catch (e) {
    detail = e.name === 'AbortError' ? 'timeout' : e.message;
  }

  if (verdict === 'FAIL') failed++;
  if (verdict === 'WARN') warned++;
  const mark = verdict === 'PASS' ? '✓' : verdict === 'WARN' ? '!' : '✗';
  console.log(`${mark} ${key.padEnd(4)} ${code.padEnd(7)} ${verdict}${detail ? ` — ${detail}` : ''}`);
}

console.log(`\n${entries.length - failed - warned}/${entries.length} ok, ${warned} drifted, ${failed} broken`);
if (warned && !failed) {
  console.log('→ drifted slugs still convert (Odoo 301s by id), but refresh lib/bookingLinks.ts to drop the hop.');
}
process.exit(failed ? 1 : 0);
