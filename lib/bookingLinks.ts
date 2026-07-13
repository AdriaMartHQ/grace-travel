// gracetravel.com.tr(Odoo 预订站)产品页直达链接 — grace.tr 营销站 → Odoo 承接站的导流出口。
// URL 为 Odoo canonical slug(改产品标题会变 slug,旧链接会 301,但更新此表可省一跳)。
// UTM 用于 Odoo CRM(website_crm)线索归因。

const BASE = 'https://gracetravel.com.tr';
const UTM = 'utm_source=grace.tr&utm_medium=referral&utm_campaign=itinerary_cta';

const shop = (slug: string) => `${BASE}/shop/${slug}?${UTM}`;

export const BOOKING_URLS = {
  S1: shop('gw-s1-sheng-ji-zhi-lu-yi-si-tan-bu-er-qia-pa-duo-qi-ya-6ri-2'),
  S2: shop('gw-s2-ai-qin-hai-zhi-an-na-tuo-li-ya-8ri-quan-jing-3'),
  S4: shop('gw-s4-tu-er-qi-10-ri-quan-jing-wen-hua-zhi-lu-4'),
  S5: shop('gw-s5-te-luo-yi-yu-jing-ling-zhi-lu-8ri-quan-jing-wen-hua-shen-du-zhi-lu-5'),
  Z1: shop('gw-z1-qi-shi-lu-qi-jiao-hui-yu-sheng-tu-zhi-jing-10ri-6'),
  Z2: shop('gw-z2-qi-shi-lu-qi-jiao-hui-jing-hua-4ri-zhao-sheng-zhi-lu-7'),
  Z5: shop('gw-z5-9tian-8wan-lu-lu-shen-du-ji-du-jiao-zhao-sheng-zhi-lu-bao-luo-zu-ji-8'),
  Z6: shop('gw-z6-7tian-6wan-lu-lu-yi-cheng-qi-jiao-hui-zhao-sheng-zhi-lu-9'),
  I1: shop('gw-i1-8tian-7wan-yi-se-lie-sheng-di-ling-xiu-zhi-lu-10'),
  B1: shop('gw-b1-12tian-11wan-sai-er-wei-ya-hei-shan-bo-hei-jing-pin-si-jia-tuan-11'),
  B2: shop('gw-b2-10tian-9wan-sai-er-wei-ya-hei-shan-bo-hei-jing-pin-tuan-12'),
  inquire: `${BASE}/inquire?${UTM}`,
} as const;

export type BookingKey = keyof typeof BOOKING_URLS;
