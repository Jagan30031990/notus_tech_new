import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enforce consistent URL structure to prevent redirect loops
  trailingSlash: false,

  images: {
    unoptimized: false,
    remotePatterns: [
      { protocol: 'https', hostname: 'readdy.ai', pathname: '/api/search-image**' },
      { protocol: 'https', hostname: 'static.readdy.ai', pathname: '/**' },
    ],
  },
  typescript: {
    // ignoreBuildErrors: true,
  },

  // Turbopack configuration (default bundler in Next.js 16)
  turbopack: {},

  // Security headers
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://maps.googleapis.com https://www.google.com https://www.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com",
              "connect-src 'self' https://maps.googleapis.com https://www.google.com https://readdy.ai https://*.readdy.ai",
              "frame-src 'self' https://www.google.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ];
  },
  // Optimize build performance and reduce memory usage
  experimental: {
    // Optimize package imports to reduce bundle size and memory usage
    optimizePackageImports: ['@react-google-maps/api', 'recharts', 'react-hot-toast'],
  },
  // Compiler optimizations
  compiler: {
    // Remove console logs in production to reduce bundle size
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
};

export default nextConfig;
