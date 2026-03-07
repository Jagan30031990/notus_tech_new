# First-Time Load Performance (AWS)

This doc summarizes what’s in place and what you can do on AWS to improve first-time load.

## What’s Already Done in the App

- **Next.js Image Optimization**  
  `images.unoptimized` is set to `false` and `remotePatterns` include `readdy.ai` and `static.readdy.ai`. Hero and header logo use `next/image` with `priority` so the LCP image and logo are optimized and preloaded.

- **Dynamic imports**  
  Below-the-fold sections on the homepage (Stats, Services, Why Choose, Testimonials, FAQ, CTA, Footer) are loaded with `next/dynamic` to keep the initial JS bundle smaller.

- **Preconnect**  
  Layout preconnects to `readdy.ai`, `static.readdy.ai`, and `cdnjs.cloudflare.com` to save DNS/TLS time when loading external assets.

- **Fonts**  
  `next/font` (Geist, Pacifico) with `display: 'swap'` and preload to avoid blocking first paint.

- **Icons**  
  Remix Icon is loaded asynchronously (media="print" then "all") so it doesn’t block first paint.

## AWS / Infrastructure

### 1. Put CloudFront in Front of the App

- Create a CloudFront distribution with your app’s domain (e.g. `notustechnologies.co.in`).
- Origin: your EC2 (or ALB) where Next runs (e.g. `http://<ec2-or-alb>:3000`).
- Cache policy:
  - For **static assets** (e.g. `/_next/static/*`, `/favicon.png`, `/logo.png`): use a long TTL (e.g. 1 year) or a custom policy that caches aggressively.
  - For **HTML** (e.g. `/`, `/about`, etc.): use a short TTL (e.g. 60–300 seconds) or “CachingDisabled” if you need instant updates; otherwise 60–120s is a good balance.
- Use **Origin Request Policy** so CloudFront forwards `Host`, and optionally `Accept-Encoding`, to the origin.
- Point your domain’s DNS to the CloudFront distribution (CNAME/ALIAS or Route 53 alias).

Effect: first request still hits the origin; subsequent requests (and static assets) are served from the edge, so TTFB and load time improve for most users.

### 2. Enable Compression on the Origin

- Next.js with `next start` can send gzip/brotli if the client supports it. Ensure your Node/PM2 process is not behind something that strips `Accept-Encoding`.
- If you use **nginx** in front of Node, enable gzip/brotli in nginx and let it compress responses (or proxy to Node and let Node compress; avoid double compression).

### 3. Keep the App “Warm” (Optional)

- If the server or Node process is idle, the very first request can be slow (cold start).
- Use a **scheduled ping** (e.g. AWS EventBridge + Lambda or a cron job) to hit `https://notustechnologies.co.in` every 5–10 minutes so the process stays warm. Don’t overdo it to avoid unnecessary load.

### 4. Consider Moving Static Assets to S3 + CloudFront

- For a bigger gain, you can export static assets to S3 and serve `/_next/static/*` and `/public` from CloudFront with an S3 origin, and let the app origin only serve HTML and API. This is an advanced setup; the above steps already help a lot.

## Quick Checklist

- [ ] CloudFront in front of the app with caching for `/_next/static/*` and public files.
- [ ] Compression enabled (Next.js or nginx).
- [ ] Optional: lightweight keep-warm ping to reduce cold first request.

After deploying the code changes (image optimization + priority hero/logo), rebuild and redeploy on AWS, then test first load with DevTools (Network, Performance) or PageSpeed Insights.
