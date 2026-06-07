// One-time localizer for Wikimedia Commons images used by B1/B2 → self-hosted webp.
//
// B1/B2 hotlink ~16 Commons photos via a `wc('<filename>')` helper. Commons/Wikimedia
// is BLOCKED in mainland China, so those Balkan landmark photos fail for our target
// audience. This downloads each (Special:FilePath?width=1600), converts to webp (cwebp),
// stores in public/img/remote/wiki-<slug>.webp, and rewrites the `wc(...)` calls to local.
//
// CC BY-SA: these images stay under CC BY-SA; the per-page credits footer (author +
// license) is PRESERVED — self-hosting is fine as long as attribution remains.
//
// Usage: node scripts/localize-wikimedia.mjs [--dry]

import { readFileSync, writeFileSync, existsSync, mkdirSync, statSync, unlinkSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

const ROOT = process.cwd();
const DRY = process.argv.includes('--dry');
const OUT_DIR = join(ROOT, 'public/img/remote');
const FILES = ['pages/ItineraryB1.tsx', 'pages/ItineraryB2.tsx'].map((f) => join(ROOT, f));
const TMP = join(ROOT, '.wiki-tmp');

const CALL_RE = /wc\(\s*'([^']+)'\s*(?:,\s*\d+)?\s*\)/g;

const slug = (f) => {
  const base = f.replace(/\.[^.]+$/, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);
  const h = createHash('sha1').update(f).digest('hex').slice(0, 6);
  return `wiki-${base}-${h}`;
};

// Collect unique filenames.
const fileSet = new Map(); // filename -> slug
for (const f of FILES) {
  const txt = readFileSync(f, 'utf8');
  let m; CALL_RE.lastIndex = 0;
  while ((m = CALL_RE.exec(txt))) fileSet.set(m[1], slug(m[1]));
}
console.log(`Found ${fileSet.size} unique Commons files across B1/B2.`);

if (DRY) {
  for (const [f, s] of fileSet) console.log(`  ${s}.webp  ←  ${f}`);
  process.exit(0);
}

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
const localized = new Set();
const failed = [];
for (const [file, s] of fileSet) {
  const dest = join(OUT_DIR, `${s}.webp`);
  if (existsSync(dest) && statSync(dest).size > 1024) { localized.add(file); continue; }
  const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(file)}?width=1600`;
  const UA = 'GraceWayTravel-image-localizer/1.0 (https://grace.tr; adriamart.serbia@gmail.com)';
  try {
    // Descriptive UA (Wikimedia etiquette) + curl retries; pace requests to avoid rate-limiting.
    execSync(`curl -sSL --fail --retry 3 --retry-delay 2 --max-time 90 -A "${UA}" -o "${TMP}" "${url}"`, { stdio: ['ignore', 'ignore', 'ignore'] });
    execSync(`cwebp -quiet -q 72 "${TMP}" -o "${dest}"`, { stdio: ['ignore', 'ignore', 'ignore'] });
    if (existsSync(dest) && statSync(dest).size > 1024) { localized.add(file); console.log(`  ✓ ${s}.webp`); }
    else failed.push(file);
    execSync('sleep 1');
  } catch { failed.push(file); }
}
if (existsSync(TMP)) unlinkSync(TMP);

// Rewrite wc('...') calls for successfully localized files.
let refs = 0, filesChanged = 0;
for (const f of FILES) {
  const before = readFileSync(f, 'utf8');
  const after = before.replace(CALL_RE, (full, file) => {
    if (!localized.has(file)) return full;
    refs++;
    return `'/img/remote/${fileSet.get(file)}.webp'`;
  });
  if (after !== before) { writeFileSync(f, after); filesChanged++; }
}
console.log(`\nLocalized ${localized.size}, failed ${failed.length}. Rewrote ${refs} wc() calls in ${filesChanged} files.`);
if (failed.length) console.log(`FAILED (left as Commons hotlink): ${failed.join(' | ')}`);
