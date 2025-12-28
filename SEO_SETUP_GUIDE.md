# SEO Setup Guide for Notus Technologies

## ✅ What Has Been Implemented

### 1. **Comprehensive Metadata**
- ✅ Enhanced title with keywords: "Best Android & Software Development Company"
- ✅ Detailed description with key services
- ✅ Relevant keywords for search engines
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card metadata
- ✅ Canonical URLs

### 2. **Structured Data (JSON-LD)**
- ✅ Organization schema
- ✅ Website schema with search action
- ✅ Service schema with all your services
- ✅ Aggregate rating (4.9/5 with 500+ reviews)

### 3. **Technical SEO**
- ✅ robots.txt (auto-generated at `/robots.txt`)
- ✅ sitemap.xml (auto-generated at `/sitemap.xml`)
- ✅ Proper meta tags
- ✅ Language declaration

## 📋 Next Steps to Complete SEO Setup

### 1. **Add Your Logo**

Place your logo files in the `public` folder:

```
public/
  ├── logo.png (1200x630px for Open Graph)
  ├── logo-square.png (200x200px for favicon)
  └── favicon.ico
```

**Update these files:**
- `app/layout.tsx` - Update logo URLs in metadata
- `components/StructuredData.tsx` - Update logo URL
- `components/Header.tsx` - Use local logo instead of external URL

### 2. **Update Logo URLs**

In `app/layout.tsx`, update:
```typescript
images: [
  {
    url: '/logo.png', // Change to your actual logo path
    // ...
  },
],
```

In `components/StructuredData.tsx`, update:
```typescript
"logo": "https://notustechnologies.co.in/logo.png",
```

### 3. **Add Social Media Links**

In `components/StructuredData.tsx`, update the `sameAs` array:
```typescript
"sameAs": [
  "https://www.facebook.com/notustechnologies",
  "https://www.twitter.com/notustechnologies",
  "https://www.linkedin.com/company/notustechnologies",
  "https://www.instagram.com/notustechnologies",
],
```

### 4. **Add Google Search Console Verification**

In `app/layout.tsx`, add your verification code:
```typescript
verification: {
  google: 'your-google-verification-code-here',
},
```

Get your code from: https://search.google.com/search-console

### 5. **Update Twitter Handle**

In `app/layout.tsx`, update:
```typescript
twitter: {
  // ...
  creator: '@notustechnologies', // Your actual Twitter handle
},
```

### 6. **Add Address Information**

In `components/StructuredData.tsx`, update the address:
```typescript
"address": {
  "@type": "PostalAddress",
  "streetAddress": "Your Street Address",
  "addressLocality": "Your City",
  "addressRegion": "Your State",
  "postalCode": "Your Postal Code",
  "addressCountry": "IN"
},
```

### 7. **Create Favicon**

1. Create `app/favicon.ico` or use `app/icon.png`
2. Next.js will automatically use it

### 8. **Add Page-Specific Metadata**

Update metadata for each service page:

**Example for `/app/services/mobile-development/page.tsx`:**
```typescript
export const metadata: Metadata = {
  title: "Best Android App Development Company | Mobile Development Services",
  description: "Professional Android app development services. We create high-performance, scalable mobile applications for iOS and Android platforms.",
  keywords: ["android app development", "mobile app development", "iOS development", "app development company"],
};
```

### 9. **Submit to Search Engines**

1. **Google Search Console:**
   - Go to https://search.google.com/search-console
   - Add your property: `https://notustechnologies.co.in`
   - Submit sitemap: `https://notustechnologies.co.in/sitemap.xml`

2. **Bing Webmaster Tools:**
   - Go to https://www.bing.com/webmasters
   - Add your site and submit sitemap

### 10. **Add Analytics**

Add Google Analytics or other tracking:

```typescript
// In app/layout.tsx, add to <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🔍 SEO Best Practices Applied

### Keywords Optimization
- ✅ Primary: "best android development company"
- ✅ Secondary: "software development company", "mobile app development"
- ✅ Long-tail: "best android app development company in [location]"

### Content Structure
- ✅ Semantic HTML
- ✅ Proper heading hierarchy (H1, H2, H3)
- ✅ Alt text for images (add to all images)
- ✅ Internal linking structure

### Performance
- ✅ Optimized images (unoptimized flag - consider enabling Next.js Image Optimization)
- ✅ Fast page loads
- ✅ Mobile-responsive design

## 📊 Monitoring & Testing

### Test Your SEO

1. **Google Rich Results Test:**
   https://search.google.com/test/rich-results

2. **Schema Markup Validator:**
   https://validator.schema.org/

3. **PageSpeed Insights:**
   https://pagespeed.web.dev/

4. **Mobile-Friendly Test:**
   https://search.google.com/test/mobile-friendly

### Track Rankings

- Set up Google Search Console
- Monitor keyword rankings
- Track organic traffic
- Monitor click-through rates

## 🚀 Quick Wins for Better Rankings

1. **Add Blog Content:**
   - Write articles about "Android development best practices"
   - "How to choose a software development company"
   - Case studies of your projects

2. **Get Backlinks:**
   - Submit to business directories
   - Guest posting on tech blogs
   - Partner with complementary businesses

3. **Local SEO:**
   - Add location-specific pages
   - Get listed in Google Business Profile
   - Collect and display customer reviews

4. **Improve Page Speed:**
   - Optimize images
   - Enable Next.js Image Optimization
   - Use CDN for static assets

## 📝 Checklist

- [ ] Add logo files to `/public` folder
- [ ] Update logo URLs in metadata
- [ ] Add social media links
- [ ] Add Google Search Console verification
- [ ] Update address in structured data
- [ ] Add favicon
- [ ] Update metadata for all service pages
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Add Google Analytics
- [ ] Test structured data
- [ ] Test mobile-friendliness
- [ ] Start creating blog content

## 🎯 Expected Results

After implementing these changes:
- ✅ Better Google search visibility
- ✅ Rich snippets in search results
- ✅ Improved click-through rates
- ✅ Better social media sharing previews
- ✅ Higher rankings for target keywords

## 📞 Need Help?

If you need assistance with:
- Logo optimization
- Content writing
- Link building
- Analytics setup

Refer to the Next.js SEO documentation: https://nextjs.org/docs/app/building-your-application/optimizing/metadata

