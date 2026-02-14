#!/bin/bash
# AWS Deployment Script - Apply CPU fixes
# Usage: ./scripts/deploy-aws.sh

set -e

echo "🚀 Deploying CPU fixes to AWS..."
echo ""

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "❌ PM2 is not installed. Installing..."
    npm install -g pm2
fi

# Stop existing process
echo "🛑 Stopping existing PM2 process..."
pm2 stop notus-tech 2>/dev/null || true
pm2 delete notus-tech 2>/dev/null || true

# Verify build exists
if [ ! -d ".next" ]; then
    echo "📦 Building application..."
    npm run build
fi

# Start with new configuration
echo "✅ Starting with optimized configuration..."
pm2 start ecosystem.config.js

# Save PM2 configuration
pm2 save

# Show status
echo ""
echo "📊 PM2 Status:"
pm2 status

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📈 Monitor CPU usage:"
echo "   pm2 monit"
echo ""
echo "📋 Check logs:"
echo "   pm2 logs notus-tech --lines 50"
echo ""
echo "🔍 Watch for restarts:"
echo "   watch -n 1 'pm2 list'"
