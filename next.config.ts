import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed static export to enable API routes
  // If you need static export, use a separate build config or deploy API routes separately
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
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
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data: https://fonts.gstatic.com",
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
  // Webpack optimizations to reduce memory usage during build
  webpack: (config, { isServer, dev }) => {
    // Optimize memory usage during build
    if (!dev) {
      // Reduce parallel processing to save memory
      config.parallelism = 1; // Process one module at a time
      
      if (!isServer) {
        // Limit chunk splitting to save memory
        config.optimization = {
          ...config.optimization,
          minimize: true,
          splitChunks: {
            ...config.optimization.splitChunks,
            chunks: 'all',
            maxAsyncRequests: 5, // Reduced from 20
            maxInitialRequests: 5, // Reduced from 20
            cacheGroups: {
              default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
              },
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                priority: -10,
                chunks: 'all',
                maxSize: 500000, // 500KB max chunk size
              },
            },
          },
        };
      }
    }
    return config;
  },
};

export default nextConfig;
