// One-time localizer for Unsplash images → self-hosted on grace.tr.
//
// WHY: ~60 unique Unsplash photos were hotlinked across the site (translations.ts ×3 langs,
// itinerary pages, components). Hotlinking a 3rd-party CDN is a reliability liability for our
// mainland-China audience (throttling, hotlink-policy risk) and couples us to Unsplash URLs.
// This downloads each photo ONCE (normalized by photo-id, capped to webp/w=1600) into
// public/img/remote/ and rewrites every reference to the local same-origin path.
//
// Usage:  node scripts/localize-images.mjs --dry   (report only)
//         node scripts/localize-images.mjs         (download + rewrite + write manifest)
//
// Idempotent: re-running skips already-downloaded files and re-rewrites cleanly (local paths
// no longer match the unsplash regex, so they're left alone).

import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync, readdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join, extname } from 'node:path';

const ROOT = process.cwd();
const DRY = process.argv.includes('--dry');
const OUT_DIR = join(ROOT, 'public/img/remote');
const MANIFEST = join(ROOT, 'scripts/image-manifest.json');

// Source files/dirs to scan + rewrite.
const ROOT_FILES = ['translations.ts', 'chinaInboundContent.ts', 'constants.tsx', 'App.tsx'];
const SCAN_DIRS = ['pages', 'components', 'data', 'lib', 'context'];
const EXT_OK = new Set(['.ts', '.tsx', '.js', '.jsx']);

function collectFiles() {
  const files = [];
  for (const f of ROOT_FILES) { const p = join(ROOT, f); if (existsSync(p)) files.push(p); }
  const walk = (dir) => {
    const abs = join(ROOT, dir);
    if (!existsSync(abs)) return;
    for (const e of readdirSync(abs, { withFileTypes: true })) {
      const p = join(abs, e.name);
      if (e.isDirectory()) walk(join(dir, e.name));
      else if (EXT_OK.has(extname(e.name))) files.push(p);
    }
  };
  SCAN_DIRS.forEach(walk);
  return files;
}

// photo-id = chars after "photo-" up to ? or quote/space/backtick/paren.
const RE = /https:\/\/images\.unsplash\.com\/photo-([A-Za-z0-9_-]+)(\?[^"'`\s)]*)?/g;

const files = collectFiles();
const idToHits = new Map(); // id -> count

for (const f of files) {
  const txt = readFileSync(f, 'utf8');
  let m;
  RE.lastIndex = 0;
  while ((m = RE.exec(txt))) idToHits.set(m[1], (idToHits.get(m[1]) || 0) + 1);
}

const ids = [...idToHits.keys()].sort();
const totalHits = [...idToHits.values()].reduce((a, b) => a + b, 0);
console.log(`Scanned ${files.length} files → ${ids.length} unique Unsplash photo-ids, ${totalHits} total references.`);

// Idempotency guard: once everything is localized, source has no Unsplash URLs left.
// Bail before touching the manifest so a re-run can't blank it.
if (ids.length === 0) {
  console.log('No Unsplash URLs in source — already localized. Nothing to do.');
  process.exit(0);
}

if (DRY) {
  console.log('\n[DRY RUN] per-file reference counts:');
  for (const f of files) {
    const txt = readFileSync(f, 'utf8');
    const n = (txt.match(RE) || []).length;
    if (n) console.log(`  ${n.toString().padStart(3)}  ${f.replace(ROOT + '/', '')}`);
  }
  console.log(`\n[DRY RUN] would download ${ids.length} webp into public/img/remote/ and rewrite ${totalHits} refs.`);
  process.exit(0);
}

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

const localized = new Set();
const failed = [];
let downloaded = 0, skipped = 0;

for (const id of ids) {
  const dest = join(OUT_DIR, `u-${id}.webp`);
  if (existsSync(dest) && statSync(dest).size > 1024) { localized.add(id); skipped++; continue; }
  const url = `https://images.unsplash.com/photo-${id}?fm=webp&w=1366&q=60&fit=crop&auto=format`;
  try {
    execSync(
      `curl -sS --fail --max-time 45 -o "${dest}" "${url}"`,
      { stdio: ['ignore', 'ignore', 'ignore'] }
    );
    if (existsSync(dest) && statSync(dest).size > 1024) { localized.add(id); downloaded++; }
    else { failed.push(id); }
  } catch { failed.push(id); }
  process.stdout.write(`\r  downloaded ${downloaded}, skipped ${skipped}, failed ${failed.length} / ${ids.length}`);
}
console.log('');

// Rewrite refs only for successfully localized ids.
let rewrittenFiles = 0, rewrittenRefs = 0;
for (const f of files) {
  const before = readFileSync(f, 'utf8');
  const after = before.replace(RE, (full, id) => {
    if (!localized.has(id)) return full; // leave un-downloaded as remote
    rewrittenRefs++;
    return `/img/remote/u-${id}.webp`;
  });
  if (after !== before) { writeFileSync(f, after); rewrittenFiles++; }
}

writeFileSync(MANIFEST, JSON.stringify({
  generatedFor: 'grace.tr Unsplash localization',
  note: 'photo-id → local path. Re-download via https://images.unsplash.com/photo-<id>?fm=webp&w=1366&q=60&fit=crop&auto=format',
  count: localized.size,
  images: [...localized].sort().map((id) => ({ id, local: `/img/remote/u-${id}.webp` })),
  failed,
}, null, 2) + '\n');

console.log(`\nDownloaded ${downloaded}, reused ${skipped}, failed ${failed.length}.`);
console.log(`Rewrote ${rewrittenRefs} refs across ${rewrittenFiles} files.`);
if (failed.length) console.log(`FAILED ids (left as remote hotlink): ${failed.join(', ')}`);
console.log(`Manifest → scripts/image-manifest.json`);
