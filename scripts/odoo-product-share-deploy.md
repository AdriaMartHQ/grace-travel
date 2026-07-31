# Odoo 產品頁分享按鈕（Grace Way / gracetravel-odoo）

Odoo 產品詳情頁預設 Facebook / X / LinkedIn / Pinterest 分享按鈕，對華人客群無用。已在 `grace_setup` 模組的 `views/debrand.xml` 替換為 Grace Way 聯繫渠道。

## 一鍵部署

```bash
cd "/Users/daihuo/Grace Way/gracetravel-odoo"
python3 scripts/apply_debrand.py
```

腳本會升級 `grace_setup`、重啟容器，並驗證產品頁已含微信 / WhatsApp 分享、且無 Facebook / LinkedIn 等按鈕。

## 產品頁分享按鈕

| 按鈕 | 行為 |
|------|------|
| **WhatsApp** | 開啟 `wa.me/905064972026`，預填**當前頁標題 + URL** |
| **微信** | 下拉選單：大華 +86 134 2640 1777、阿文 +86 181 4463 3364，點擊複製號碼 |
| **複製連結** | 複製當前產品頁 URL |
| **郵件** | 開啟 `bookings@grace.tr`，主旨為頁面標題、正文為 URL |

## 實作檔案（gracetravel-odoo）

| 檔案 | 作用 |
|------|------|
| `addons/grace_setup/views/debrand.xml` | 停用 Odoo 預設 `product_share_buttons`，注入 `gw-product-share` |
| `addons/grace_setup/static/src/js/grace_share.js` | 微信號 / 連結複製互動 |
| `addons/grace_setup/static/src/css/grace.css` | 分享按鈕品牌樣式（WhatsApp 綠、微信綠、橙色 outline） |

## 驗證

```bash
# 不應再出現 Western 分享
curl -s http://localhost:8075/shop/gw-s4-tu-er-qi-10-ri-quan-jing-wen-hua-zhi-lu-4 | rg 's_share_facebook|s_share_twitter|s_share_linkedin|s_share_pinterest'

# 應出現 Grace 分享
curl -s http://localhost:8075/shop/gw-s4-tu-er-qi-10-ri-quan-jing-wen-hua-zhi-lu-4 | rg 'gw-product-share|fa-weixin|wa.me/905064972026|bookings@grace'
```

範例頁面：http://localhost:8075/shop/gw-s4-tu-er-qi-10-ri-quan-jing-wen-hua-zhi-lu-4

## 手動步驟（若腳本無法執行）

1. 確認 Docker 容器 `gracetravel-web-1` 運行中
2. 升級模組：
   ```bash
   docker exec gracetravel-web-1 odoo -d gracetravel -u grace_setup --stop-after-init --no-http
   docker restart gracetravel-web-1
   ```
3. 後台可選：`網站 → 配置 → 設定` 確認「產品頁 → Share Buttons」已停用（模組升級會自動處理）

## 備註

- 微信無公開 share URL，故採「複製號碼 + 聯繫頁連結」方案，與靜態站 `grace.tr/pages/Contact.tsx` 一致
- WordPress 站（gracetravel.com.tr）的類似實作見本 repo `scripts/grace-icons.php` + `grace-icons.css`
