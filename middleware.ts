import { NextRequest, NextResponse } from 'next/server';

/**
 * Per-IP rate limiting to protect from floods (e.g. 1000 req/s from few IPs).
 * Uses in-memory store; when behind CloudFront/ALB, use x-forwarded-for for client IP.
 *
 * Limits:
 * - /api/* : 20 requests per minute per IP (forms, etc.)
 * - Pages  : 120 requests per minute per IP (~2/sec)
 */

const WINDOW_MS = 60 * 1000; // 1 minute
const API_LIMIT = 20;
const PAGE_LIMIT = 120;

type Entry = { count: number; resetAt: number };

// In-memory store (per Edge/Node instance). For multi-instance, use Redis (e.g. Upstash).
const store = new Map<string, Entry>();

function getClientIp(request: NextRequest): string {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) {
    const first = xff.split(',')[0]?.trim();
    if (first) return first;
  }
  const xri = request.headers.get('x-real-ip');
  if (xri) return xri.trim();
  return 'unknown';
}

function getLimit(pathname: string): number {
  return pathname.startsWith('/api/') ? API_LIMIT : PAGE_LIMIT;
}

function isLimitExceeded(key: string, limit: number): { exceeded: boolean; retryAfter: number } {
  const now = Date.now();
  let entry = store.get(key);

  if (!entry || now >= entry.resetAt) {
    entry = { count: 1, resetAt: now + WINDOW_MS };
    store.set(key, entry);
    return { exceeded: false, retryAfter: Math.ceil(WINDOW_MS / 1000) };
  }

  entry.count += 1;
  if (entry.count > limit) {
    return { exceeded: true, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }
  return { exceeded: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
}

// Prune old entries occasionally to avoid unbounded memory growth
function prune(): void {
  const now = Date.now();
  for (const [k, v] of store.entries()) {
    if (now >= v.resetAt) store.delete(k);
  }
}
let lastPrune = 0;
const PRUNE_INTERVAL = 60 * 1000;

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const ip = getClientIp(request);
  const limit = getLimit(pathname);
  const key = `${ip}:${pathname.startsWith('/api/') ? 'api' : 'page'}`;

  if (Date.now() - lastPrune > PRUNE_INTERVAL) {
    lastPrune = Date.now();
    prune();
  }

  const { exceeded, retryAfter } = isLimitExceeded(key, limit);

  if (exceeded) {
    return new NextResponse(
      JSON.stringify({
        error: 'Too Many Requests',
        message: 'Please slow down and try again later.',
      }),
      {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          'Retry-After': String(retryAfter),
        },
      }
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon, public assets
     */
    '/((?!_next/static|_next/image|favicon|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|css|js)$).*)',
  ],
};
