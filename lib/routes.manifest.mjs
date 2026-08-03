// SINGLE SOURCE OF TRUTH for grace.tr routes.
//
// Consumed by all four places that used to keep their own hand-maintained copy:
//   1. App.tsx                    — builds the <Route> table
//   2. scripts/prerender.mjs      — the routes to snapshot into prerendered/routes.json
//   3. scripts/generate-sitemap.mjs — emits dist/sitemap.xml
//   4. scripts/apply-prerender.mjs  — asserts every `page` route produced dist/<route>/index.html
//
// WHY: those four lists drifted silently. Adding an itinerary the old way gave you a page
// that opened fine in a browser but was invisible to crawlers (no snapshot), missing from
// the sitemap, and had no booking CTA — three failures, none of which produced an error.
//
// TO ADD A PAGE: add ONE entry here with kind:'page' + a matching component in App.tsx's
// PAGES map. The build fails loudly if the two disagree — that is the point.
//
// Plain .mjs (not .ts) on purpose: `node scripts/*.mjs` can import it natively while Vite
// + tsconfig `allowJs` still give App.tsx types. No compile step, no generated artifact.

/**
 * @typedef {'page'|'redirect'|'devOnly'} RouteKind
 *
 * @typedef {Object} RouteEntry
 * @property {string}    path        Router path. For redirects may contain a `/*` suffix.
 * @property {RouteKind} kind        page = prerendered + sitemapped; redirect = server 301; devOnly = never shipped.
 * @property {string}    [id]        Key into App.tsx's PAGES map. Required when kind==='page'|'devOnly'.
 * @property {string}    [to]        Redirect target. Required when kind==='redirect'.
 * @property {string}    [lastmod]   Sitemap <lastmod>, ISO date.
 * @property {'weekly'|'monthly'|'yearly'} [changefreq] Sitemap <changefreq>.
 * @property {number}    [priority]  Sitemap <priority>.
 */

/** @type {RouteEntry[]} */
export const ROUTES = [
  { path: '/',                 kind: 'page', id: 'Home',            lastmod: '2026-06-20', changefreq: 'weekly',  priority: 1.0 },
  { path: '/tours',            kind: 'page', id: 'Tours',           lastmod: '2026-06-20', changefreq: 'weekly',  priority: 0.9 },
  { path: '/airport-transfer', kind: 'page', id: 'AirportTransfer', lastmod: '2026-06-02', changefreq: 'monthly', priority: 0.7 },
  { path: '/tickets',          kind: 'page', id: 'Tickets',         lastmod: '2026-06-02', changefreq: 'monthly', priority: 0.6 },
  { path: '/about',            kind: 'page', id: 'About',           lastmod: '2026-08-01', changefreq: 'yearly',  priority: 0.5 },
  { path: '/contact',          kind: 'page', id: 'Contact',         lastmod: '2026-06-02', changefreq: 'yearly',  priority: 0.5 },

  { path: '/itineraries/b1-balkan-3-countries-12-days',      kind: 'page', id: 'ItineraryB1', lastmod: '2026-06-02', changefreq: 'monthly', priority: 0.9 },
  { path: '/itineraries/b2-balkan-3-countries-10-days',      kind: 'page', id: 'ItineraryB2', lastmod: '2026-06-03', changefreq: 'monthly', priority: 0.9 },
  { path: '/itineraries/s1-turkey-6-days',                   kind: 'page', id: 'ItineraryS1', lastmod: '2026-06-02', changefreq: 'monthly', priority: 0.8 },
  { path: '/itineraries/s2-turkey-8-days',                   kind: 'page', id: 'ItineraryS2', lastmod: '2026-06-02', changefreq: 'monthly', priority: 0.8 },
  { path: '/itineraries/s4-turkey-10-days',                  kind: 'page', id: 'ItineraryS4', lastmod: '2026-06-02', changefreq: 'monthly', priority: 0.8 },
  { path: '/itineraries/s5-turkey-8-days',                   kind: 'page', id: 'ItineraryS5', lastmod: '2026-06-02', changefreq: 'monthly', priority: 0.8 },
  { path: '/itineraries/z1-turkey-11-days',                  kind: 'page', id: 'ItineraryZ1', lastmod: '2026-06-02', changefreq: 'monthly', priority: 0.8 },
  { path: '/itineraries/z2-revelation-4-days',               kind: 'page', id: 'ItineraryZ2', lastmod: '2026-06-02', changefreq: 'monthly', priority: 0.8 },
  { path: '/itineraries/z5-paul-footsteps-9-days',           kind: 'page', id: 'ItineraryZ5', lastmod: '2026-06-02', changefreq: 'monthly', priority: 0.8 },
  { path: '/itineraries/z6-overland-seven-churches-7-days',  kind: 'page', id: 'ItineraryZ6', lastmod: '2026-06-02', changefreq: 'monthly', priority: 0.8 },
  { path: '/itineraries/i1-israel-holyland-8-days',          kind: 'page', id: 'ItineraryI1', lastmod: '2026-08-01', changefreq: 'monthly', priority: 0.8 },

  // Retired 2026-06-27 with the Turkey repositioning. Kept as an explicit redirect so the
  // Caddy config and the client router agree, and so old inbound links keep their equity.
  { path: '/china-inbound/*', kind: 'redirect', to: '/tours' },

  // Internal design reference. Never prerendered, never sitemapped, and dropped from the
  // production bundle entirely (see App.tsx) — it must not be publicly reachable.
  { path: '/style-guide', kind: 'devOnly', id: 'StyleGuide' },
];

/** Routes that must exist on disk as dist/<route>/index.html and appear in the sitemap. */
export const PAGE_ROUTES = ROUTES.filter((r) => r.kind === 'page').map((r) => r.path);

/** Server-side redirects: [fromPrefix, to] with the router's `/*` suffix stripped. */
export const REDIRECTS = ROUTES.filter((r) => r.kind === 'redirect').map((r) => ({
  from: r.path.replace(/\/\*$/, ''),
  to: r.to,
}));

export const ORIGIN = 'https://grace.tr';
