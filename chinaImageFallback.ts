const svgToDataUri = (svg: string) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const getChinaFallbackImage = (title: string, subtitle: string = 'Grace Way China') =>
  svgToDataUri(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="55%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#334155"/>
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffb347"/>
          <stop offset="100%" stop-color="#ff7a00"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="1000" fill="url(#bg)"/>
      <circle cx="1320" cy="180" r="240" fill="url(#accent)" opacity="0.95"/>
      <circle cx="250" cy="860" r="320" fill="#ff9d00" opacity="0.14"/>
      <path d="M0 760 C260 680 450 860 690 780 C920 700 1110 520 1600 660 L1600 1000 L0 1000 Z" fill="#111827" opacity="0.9"/>
      <path d="M0 820 C280 740 520 900 770 830 C1040 760 1270 620 1600 720 L1600 1000 L0 1000 Z" fill="#1f2937" opacity="0.88"/>
      <text x="120" y="220" fill="#ffb347" font-size="32" font-family="Arial, Helvetica, sans-serif" font-weight="700" letter-spacing="8">GRACE WAY</text>
      <text x="120" y="500" fill="#ffffff" font-size="88" font-family="Arial, Helvetica, sans-serif" font-weight="800">${escapeXml(title)}</text>
      <text x="120" y="580" fill="#cbd5e1" font-size="34" font-family="Arial, Helvetica, sans-serif">${escapeXml(subtitle)}</text>
    </svg>
  `);
