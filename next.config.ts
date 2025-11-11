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
};

export default nextConfig;
