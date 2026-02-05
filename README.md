
# Grace Way (恩途) - Turkey Travel Official Website

This is a modern, high-conversion React SPA for Grace Way, a boutique licensed travel agency in Turkey.

## Visual Identity
- **Primary Color:** Grace Blue (#0F172A)
- **Accent Color:** Boutique Gold (#D4AF37)
- **Background:** Silk Cream (#F8FAFC)
- **Typography:** Playfair Display (Heading) & Inter (Body)

## Features
- **Responsive Navigation:** Smooth transitions and mobile-first side drawer.
- **Tours Listing:** Filterable package explorer.
- **Tickets & Activities:** Grid of curated attractions.
- **Contact System:** Validation-ready form with success simulation.
- **Style Guide:** Dedicated documentation page for UI consistency.

## Tech Stack
- **Framework:** React 18
- **Styling:** Tailwind CSS
- **Routing:** HashRouter (for static environment compatibility)
- **Type Safety:** TypeScript

## How to Preview
1. Simply view this project within the provided React-compatible environment.
2. The application will render immediately using `index.tsx` as the entry point.

## Deployment Instructions (Nginx/CloudPanel)
1. **Build the project:** Run your build command (e.g., `npm run build` or `vite build`).
2. **Transfer files:** Upload the `dist/` folder contents to your web server root (e.g., `/var/www/grace.com.tr`).
3. **Nginx Configuration:** 
   Ensure your Nginx config handles client-side routing. Since we use `HashRouter`, standard configuration works out of the box.
   ```nginx
   server {
       listen 80;
       server_name grace.com.tr www.grace.com.tr;
       root /var/www/grace.com.tr;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```
4. **HTTPS:** Use Let's Encrypt for SSL to maintain the professional credibility required for travel agencies.

## Future Extensions
- **Multi-language:** Add `i18next` for English, Chinese, and Turkish support.
- **Booking Engine:** Integrate Stripe or local Turkish payment gateways (Iyzipay).
- **SEO:** Move to Next.js or use SSR if SEO becomes the primary growth driver.
