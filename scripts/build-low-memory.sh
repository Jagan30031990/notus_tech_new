#!/bin/bash
# Low memory build script for systems with limited RAM
# Usage: ./scripts/build-low-memory.sh

set -e

echo "🔧 Starting low-memory build process..."
echo ""

# Clear Next.js cache to free memory
echo "🧹 Clearing Next.js cache..."
rm -rf .next
echo "✅ Cache cleared"
echo ""

# Set low memory limits
export NODE_ENV=production
export NODE_OPTIONS="--max-old-space-size=1536 --gc-interval=100"

# Run garbage collection more frequently
export NODE_OPTIONS="$NODE_OPTIONS --expose-gc"

echo "📊 Memory limits set:"
echo "  Max heap: 1536MB"
echo "  GC interval: 100ms"
echo ""

# Check available memory
echo "💾 System memory status:"
free -h
echo ""

# Build with memory monitoring
echo "🚀 Starting build..."
npm run build

echo ""
echo "✅ Build completed successfully!"

