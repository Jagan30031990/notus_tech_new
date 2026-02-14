# Google Search Console Indexing Issues – Why & What We Changed

## Why this happened

### 1. **Server error (5xx) – 236 pages**
- **Cause:** The server was overloaded (100% CPU) and sometimes crashed or timed out when Googlebot requested pages. That led to 5xx responses.
- **Already fixed:** PM2 config (direct `next` start, higher memory, no restart loop) and DNS timeout in the contact API reduce crashes and timeouts.
- **Code change:** Added `app/error.tsx` and `app/global-error.tsx` so unhandled errors show an error page instead of crashing the request. That keeps the server stable and avoids more 5xx from uncaught errors.

### 2. **Soft 404 – 50 pages**
- **Cause:** Some URLs returned **200 OK** but with “page not found” style content (e.g. invalid `/blog/999`). Google treats that as a Soft 404.
- **Code change:** In `app/blog/[id]/page.tsx` we now call `notFound()` for invalid post IDs (only 1–6 are valid). Those URLs now return a real **404** and use `app/not-found.tsx`, so Google no longer sees them as Soft 404s.

### 3. **Not found (404) – 35 pages**
- **Cause:** Links to removed or wrong URLs (typos, old links, etc.). Normal for any site.
- **Code change:** `app/not-found.tsx` now has `metadata` with `robots: { index: false, follow: false }` so the 404 page itself is not indexed. No code change needed for the 404s themselves; fix or remove bad links over time.

### 4. **Duplicate without user-selected canonical – 5 pages**
- **Cause:** Some pages had no canonical URL, so Google saw duplicates (e.g. with/without trailing slash or query params).
- **Code change:** Added layout files that set `alternates.canonical` for:
  - `/about`, `/contact`, `/get-quote`, `/portfolio`, `/terms`, `/privacy`, `/testimonials`
  So each of these has a single preferred URL.

### 5. **Excluded by ‘noindex’ tag – 1 page**
- **Cause:** One URL has a `noindex` in code or meta. Could be intentional (e.g. thank-you page) or a mistake.
- **Action:** No code change required unless you want that page indexed; then remove `noindex` for that route.

### 6. **Blocked due to access forbidden (403) – 1 page**
- **Cause:** One URL is returning 403 (server or app blocking access).
- **Action:** Check server/nginx and app code for that URL; ensure Googlebot isn’t blocked and that the route doesn’t require auth or special headers.

### 7. **Crawled – currently not indexed – 3,237 pages**
- **Cause:** Google chose not to index these (low value, duplicate, or server was unstable when crawled). The earlier 5xx and instability likely contributed.
- **Action:** Fixing 5xx and stability (already done) helps. Over time, ensure important pages have good content and canonicals; “Crawled – currently not indexed” will improve as crawls succeed and quality signals improve.

---

## Summary of code changes

| Issue              | Change |
|--------------------|--------|
| 5xx                | `app/error.tsx` and `app/global-error.tsx` so errors don’t crash the request. |
| Soft 404           | `app/blog/[id]/page.tsx`: `notFound()` for invalid IDs (only 1–6 valid). |
| 404 page indexing  | `app/not-found.tsx`: added `metadata` with `robots: { index: false, follow: false }`. |
| Duplicate canonical| New layouts with `alternates.canonical`: about, contact, get-quote, portfolio, terms, privacy, testimonials. |

---

## What you should do next

1. **Deploy** these changes and keep the server stable (PM2 + memory fixes already applied).
2. In **Google Search Console**, use “Validate fix” for the relevant issue types (e.g. Server error (5xx), Soft 404, Duplicate without user-selected canonical) so Google recrawls.
3. **Monitor** Indexing > Page indexing; 5xx and Soft 404 counts should go down over the next days/weeks.
4. **Fix or remove** the 35 not-found URLs (broken links) where possible.
5. **Check** the one 403 URL and the one noindex page if you want them indexed or intentionally excluded.

No further code changes are required for the issues above unless you want to adjust the 403 or noindex page.
