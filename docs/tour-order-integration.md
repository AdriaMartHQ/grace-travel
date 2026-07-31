# Grace Way 線路 × Odoo 銷售下單整合

完整技術文件見 gracetravel-odoo 倉庫：

**`/Users/daihuo/Grace Way/gracetravel-odoo/docs/tour-order-integration.md`**

## 摘要

- **方案**：Option A — 產品頁 CTA → `/inquire` 表單 → `crm.lead` + 自動 draft `sale.order`
- **不做**：恢復購物車/checkout、物流/退款樣板、在線支付
- **模組**：`grace_setup` 18.0.1.4.0
- **Odoo**：http://localhost:8075

## 流程

1. `/shop/GW-*` 產品頁 → 「咨询 / 预订此线路」
2. `/inquire?product=<id>&pname=<标题>` 預填線路
3. 提交表單 → CRM 線索 + 草稿報價單（成人數 × 参考价）
4. `bookings@grace.tr` 收到通知（含報價單編號）

## 升級

```bash
cd "/Users/daihuo/Grace Way/gracetravel-odoo"
docker exec gracetravel-web-1 odoo -d gracetravel -u grace_setup --stop-after-init -c /etc/odoo/odoo.conf
docker restart gracetravel-web-1
```
