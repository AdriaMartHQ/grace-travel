# Odoo 網站 SEO 部署說明（Grace Way / gracetravel-odoo）

Odoo 站點運行於 `http://localhost:8075`（docker compose 專案目錄：`../gracetravel-odoo`）。

## 一鍵部署

```bash
cd "/Users/daihuo/Grace Way/gracetravel-odoo"
python3 scripts/apply_turkey_first_seo.py
```

腳本會：
- 寫入土耳其優先首頁 (`data/grace_home.html`) 與頁脚 (`data/grace_footer.html`)
- 將商城分類/導航「巴爾干」「以色列」維持簡潔命名（不含「延伸 ·」前綴）
- 設定 `/inquire` 與博客 SEO 欄位
- 安裝/升級 `grace_seo_guard` 模組（`/llms.txt`、JSON-LD、商店/博客中文標題）

## 模組職責

| 模組 | 作用 |
|------|------|
| `grace_setup` | 承接漏斗、分類、品牌 CSS |
| `grace_seo_guard` | SEO 標題、JSON-LD、AI robots、`/llms.txt` |
| `grace_image_credit` | 產品圖片版權標註 |

## 仍需手動（Odoo 後台）的情況

1. **生產域名**：`設定 → 網站 → 設定` 將 `網站域名` 設為 `https://grace.tr`（或實際 Odoo 域名），canonical/OG 才會指向正式 URL。
2. **各產品頁** `website_meta_description`：可在 `網站 → 電子商務 → 產品` 逐條優化（腳本 `gen_descriptions.py` 可輔助）。
3. **博客文章** SEO：新文章需在編輯器「優化 SEO」面板填寫摘要。
4. **首頁微調**：若需可視化編輯，用 Odoo 網站編輯器；重新跑腳本會覆蓋 `website.homepage` 視圖。

## 驗證

```bash
curl -s http://localhost:8075/shop | rg '<title|meta name="description"'
curl -s http://localhost:8075/blog | rg '<title|meta name="description"'
curl -s http://localhost:8075/llms.txt | head -30
curl -s http://localhost:8075/ | rg 'FAQPage|TravelAgency'
```

靜態站 `grace.tr` 的 `public/llms.txt` 與 Odoo `/llms.txt` 互補：前者指向靜態 React 站，後者由 Odoo 實時渲染產品/博客。
