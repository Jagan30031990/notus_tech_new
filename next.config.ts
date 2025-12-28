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
    if (!dev) {
      // Reduce parallel processing to save memory
      config.parallelism = 1; // Process one module at a time
      
      if (!isServer) {
        // Limit chunk splitting to save memory, but preserve CSS
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
              // Preserve CSS in separate chunks
              styles: {
                name: 'styles',
                test: /\.(css|scss|sass)$/,
                chunks: 'all',
                enforce: true,
                priority: 20,
              },
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                priority: -10,
                chunks: 'all',
                // Don't limit vendor chunks too much to preserve CSS
                maxSize: 500000, // Increased to 500KB
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
