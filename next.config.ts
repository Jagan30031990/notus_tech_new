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
    if (!dev && !isServer) {
      // Limit parallel processing to reduce memory pressure
      config.optimization = {
        ...config.optimization,
        minimize: true,
        // Reduce chunk splitting to save memory
        splitChunks: {
          ...config.optimization.splitChunks,
          maxAsyncRequests: 20,
          maxInitialRequests: 20,
        },
      };
    }
    return config;
  },
};

export default nextConfig;
