# Server infra — grace.tr

Backup of the live server config for **grace.tr**, hosted on Tencent Cloud
**Hong Kong** (`43.129.213.201`, Ubuntu). The web server is **Caddy**, which:

- serves the static `grace.tr` site from `/var/www/grace`, and
- reverse-proxies `gracetravel.com.tr` → local WordPress on `127.0.0.1:8080`.

So `infra/Caddyfile` is the **whole-machine** Caddy config (both sites), kept here
verbatim so the hard-won crawl fix survives a server rebuild or an accidental edit.

> **What this is:** a dated, manual **snapshot** of the production Caddyfile — a
> restore artifact, **not** an auto-deployed source of truth. The live config is
> edited directly on the host; refresh this copy by hand (re-`scp`) after server
> changes. **Snapshot: 2026-06-06.** Checked for secrets before committing — none
> (no keys/passwords; the only `reverse_proxy` target is `127.0.0.1`). The
> `gracetravel.com.tr` block is included because that site shares this machine; it
> lives in the grace.tr repo as grace.tr is the machine's primary site.

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
