// Emits dist/404.html — the body Caddy serves with a real 404 status once try_files stops
// falling back to the SPA shell.
//
// Deliberately a small static page rather than the SPA: a garbage URL should not pull down
// a 617 KB bundle, and crawlers should get an unambiguous 404 with no indexable content.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ORIGIN } from '../lib/routes.manifest.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, follow">
<title>页面不存在 404 | 恩途国际旅行社 Grace Way Travel</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
    background: #0f172a; color: #f8fafc; padding: 24px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB",
                 "Microsoft YaHei", Roboto, Helvetica, Arial, sans-serif;
  }
  .wrap { max-width: 560px; text-align: center; }
  .brand { font-size: 13px; letter-spacing: .32em; text-transform: uppercase; color: #ff9d00; font-weight: 700; }
  .code { font-size: 88px; line-height: 1; font-weight: 800; margin: 20px 0 8px; color: #ff9d00; }
  h1 { font-size: 24px; margin: 0 0 12px; font-weight: 700; }
  p { color: #cbd5e1; line-height: 1.7; margin: 0 0 8px; font-size: 15px; }
  .en { color: #94a3b8; font-size: 14px; margin-bottom: 32px; }
  .links { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
  a {
    display: inline-block; padding: 13px 26px; border-radius: 999px; text-decoration: none;
    font-weight: 700; font-size: 15px; transition: opacity .2s;
  }
  a:hover { opacity: .85; }
  .primary { background: #ff9d00; color: #0f172a; }
  .ghost { border: 1px solid rgba(248,250,252,.25); color: #f8fafc; }
</style>
</head>
<body>
  <div class="wrap">
    <div class="brand">Grace Way · 恩途国际旅行</div>
    <div class="code">404</div>
    <h1>页面不存在</h1>
    <p>您访问的页面可能已被移除或链接有误。</p>
    <p class="en">The page you requested could not be found.</p>
    <div class="links">
      <a class="primary" href="${ORIGIN}/">返回首页</a>
      <a class="ghost" href="${ORIGIN}/tours">浏览行程线路</a>
    </div>
  </div>
</body>
</html>
`;

if (!fs.existsSync(DIST)) {
  console.error('[404] dist/ missing — run vite build first');
  process.exit(1);
}

fs.writeFileSync(path.join(DIST, '404.html'), html);
console.log('[404] wrote dist/404.html');
