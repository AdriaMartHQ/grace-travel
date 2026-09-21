# Server infra — grace.tr

Backup of the live server config for **grace.tr**, hosted on Tencent Cloud
**Hong Kong** (`43.129.213.201`, Ubuntu). The web server is **Caddy**, which:

- serves the static `grace.tr` site from `/var/www/grace`,
- reverse-proxies `gracetravel.com.tr` → local **Odoo 18** on `127.0.0.1:8077`
  (HTTP) and `127.0.0.1:8078` (websocket), and
- 308-redirects `www.gracetravel.com.tr` → `gracetravel.com.tr`.

So `infra/Caddyfile` is the **whole-machine** Caddy config (both sites), kept here
verbatim so the hard-won crawl fix survives a server rebuild or an accidental edit.

> **What this is:** a dated, manual **snapshot** of the production Caddyfile — a
> restore artifact, **not** an auto-deployed source of truth. The live config is
> edited directly on the host; refresh this copy by hand (re-`scp`) after server
> changes. **Snapshot: 2026-08-03.** Checked for secrets before committing — none
> (no keys/passwords; every `reverse_proxy` target is `127.0.0.1`). The
> `gracetravel.com.tr` blocks are included because that site shares this machine; it
> lives in the grace.tr repo as grace.tr is the machine's primary site.

## gracetravel.com.tr is Odoo, not WordPress

WordPress was **retired**; `gracetravel.com.tr` has been served by Odoo 18 since
**2026-07-10**. The stack lives on the same host at `/opt/gracetravel-odoo`
(docker compose: `odoo:18.0` + `postgres:15`); the repo-side copy of that stack is
`gracetravel-odoo/`, and its production credentials are in that repo's
untracked `.env.production.secrets`.

Verified live 2026-09-01:

| Probe | Result |
| --- | --- |
| `https://gracetravel.com.tr/` | `200`, sets Odoo's `session_id` + `frontend_lang` cookies |
| `https://gracetravel.com.tr/web/login` | `200` |
| `https://gracetravel.com.tr/wp-login.php` | `404` — no WordPress left |
| `https://www.gracetravel.com.tr/` | `308` → `https://gracetravel.com.tr/` |

If you are reading an older copy of this file that describes a WordPress
reverse-proxy on `127.0.0.1:8080`, that is stale — it described the pre-2026-07-10
machine and misled at least one debugging session.

## Restore

```bash
scp infra/Caddyfile ubuntu@43.129.213.201:/tmp/Caddyfile
ssh ubuntu@43.129.213.201 'sudo cp /tmp/Caddyfile /etc/caddy/Caddyfile && sudo systemctl reload caddy'
```

## ⚠️ Do NOT re-enable HTTP/2

The global block forces `protocols h1 h3` (HTTP/1.1 + HTTP/3, **no h2**). This is
the fix for Baidu's `socket 读写错误` crawl failures.

Why: the server is in Hong Kong, Baidu's spider is in mainland China, and the
HK↔mainland link drops packets. Over HTTP/2 a single dropped packet stalls every
stream on the connection (head-of-line blocking) → Baidu hits its ~5s read timeout
→ crawl fails. HTTP/1.1 tolerates the lossy link. Normal browsers were fine either
way (they retransmit patiently); only Baidu's strict-timeout spider failed.

Verified 2026-06-06: re-running Baidu's 抓取诊断 went from `socket 读写错误 / 5.004s`
(pre-fix) to `HTTP/1.1 200 OK / 8501 bytes / 2.419s` (post-fix).

## Companion settings (NOT in the Caddyfile — set on the host)

These are part of the same cross-border fix and must be preserved alongside the Caddyfile:

- **BBR + fq** congestion control (improves cross-border retransmission), persisted
  under `/etc/sysctl.d/`:
  - `net.ipv4.tcp_congestion_control = bbr`
  - `net.core.default_qdisc = fq`
  - verify: `sysctl net.ipv4.tcp_congestion_control net.core.default_qdisc`
- **ufw** must allow `443/udp` (HTTP/3 / QUIC): `sudo ufw allow 443/udp`.

## Deploy note

The static site deploys via local `rsync` (GitHub Actions deploy is blocked by the
Tencent security group). The Caddyfile itself is edited directly on the server;
this copy is a backup, not the deploy source.

## Content-Security-Policy (proposed — NOT live yet)

grace.tr sends no CSP today. The policy below was derived from what the built site
actually loads (2026-09-21 inventory of `dist/` plus the live HTML):

| Need | Source |
| --- | --- |
| scripts | own `/assets/*.js`, plus Cloudflare Email Obfuscation's `/cdn-cgi/scripts/…/email-decode.min.js` — same origin, so `'self'` covers it |
| styles | own CSS, the inline `<style>` in `index.html`, and inline `style=""` attributes written by the `motion` library → `'unsafe-inline'` is unavoidable for styles |
| fonts | Google Fonts (`fonts.googleapis.com` stylesheet, `fonts.gstatic.com` files) |
| images | own `/img`, `data:`, Carto map tiles on /contact, three hot-linked ticket photos (`res.klook.com`, `cdn.kulturenvanteri.com`, `cdn.istanbul.com`), `picsum.photos` as the itinerary `onError` fallback |
| connect | nothing but same-origin chunk loads — the site makes no fetch/XHR calls |
| forms / frames | no `<form action>` and no iframes; booking CTAs are plain links to gracetravel.com.tr |

JSON-LD `<script type="application/ld+json">` blocks are data, not executed, and are not
blocked by `script-src`. The AI-Studio `importmap` (an executable inline script that would
have needed a hash) was removed from `index.html` for this reason.

Dry-run locally before touching the server — `scripts/smoke-spa.mjs` serves `dist/` with
the policy ENFORCED and fails on any violation across all 17 routes:

```bash
CSP="<policy string from Step 1>" npm run smoke:spa
```

2026-09-21: the policy below passes; narrowing `img-src` to `'self'` fails on the Carto
tiles, the ticket photos and Leaflet's `data:` placeholder, so the check does bite. What
it cannot see is anything Cloudflare injects, hence the report-only step on the real host.

**One authoritative header, set in Caddy — not a `<meta>` tag.** A meta policy and a header
policy intersect, drift apart, and make breakage hard to diagnose; meta also cannot carry
`frame-ancestors` or run in report-only mode.

### Step 1 — report-only

Add to BOTH the site-level `header { … }` block and the one inside `handle_errors`
(error responses are a separate route tree, see the comment in the Caddyfile):

```
Content-Security-Policy-Report-Only "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://*.basemaps.cartocdn.com https://res.klook.com https://cdn.kulturenvanteri.com https://cdn.istanbul.com https://picsum.photos; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'self'"
```

`sudo caddy validate --config /etc/caddy/Caddyfile && sudo systemctl reload caddy`, then
open these with DevTools → Console and look for `[Report Only]` violations:
`/`, `/tours`, `/tickets` (hot-linked images), `/contact` (Leaflet map + tiles),
`/about` (motion animations), one itinerary, `/airport-transfer` (submit the form through
to the Odoo hand-off), and a garbage URL (404 page).

Cloudflare features that inject scripts would show up here. Email Obfuscation is on and
is same-origin. **Rocket Loader and Web Analytics / Browser Insights are off as of
2026-09-21** — turning either on later needs `script-src`/`connect-src` additions
(`https://static.cloudflareinsights.com`, `https://cloudflareinsights.com`) or it will be
blocked once the policy is enforced.

### Step 2 — enforce

After a clean pass, rename the header to `Content-Security-Policy` in both blocks, reload,
re-run `npm run smoke`, and refresh the `infra/Caddyfile` snapshot in this repo.

