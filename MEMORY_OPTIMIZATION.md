# Memory Optimization Guide

This guide provides solutions to reduce memory consumption on your server (7.7GB RAM).

## Current Optimizations Applied

### 1. **Reduced Build Memory Limit**
- Changed from 4GB to 2GB (or 1.5GB for low-memory builds)
- This prevents the build from consuming all available RAM

### 2. **Runtime Memory Limits**
- Production server: Limited to 512MB
- PM2 will auto-restart if memory exceeds 500MB

### 3. **Build Optimizations**
- Disabled webpack build workers
- Reduced parallel processing (1 module at a time)
- Limited chunk splitting (max 5 chunks)
- Smaller chunk sizes (200KB max)

### 4. **PM2 Configuration**
- Single instance mode
- Auto-restart on memory limit
- Memory monitoring enabled

## Usage

### For Normal Builds (2GB limit)
```bash
npm run build
```

### For Low Memory Systems (1.5GB limit)
```bash
npm run build:low-memory
```

Or use the shell script:
```bash
chmod +x scripts/build-low-memory.sh
./scripts/build-low-memory.sh
```

### Start Production Server with PM2
```bash
# Using ecosystem config
pm2 start ecosystem.config.js

# Or manually with memory limit
pm2 start npm --name "notus-tech" -- start --max-memory-restart 500M
```

### Monitor Memory Usage
```bash
# Check PM2 memory
pm2 monit

# Check system memory
free -h

# Check Node.js processes
ps aux | grep node
```

## Additional Optimizations

### 1. Clear Cache Before Building
```bash
rm -rf .next
npm run build
```

### 2. Increase Swap Space (if needed)
If you're still running out of memory, increase swap:
```bash
# Check current swap
swapon --show

# Create swap file (2GB example)
sudo fallocate -l 2G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile
sudo swapon /swapfile

# Make it permanent
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
```

### 3. Optimize System Memory
```bash
# Clear system cache (be careful!)
sudo sync
sudo sysctl vm.drop_caches=3

# Check what's using memory
ps aux --sort=-%mem | head -20
```

### 4. Build on a Different Machine
If your server has limited RAM, consider:
- Building locally or on a CI/CD server
- Transferring the `.next` folder to production
- Using Docker with memory limits

## PM2 Memory Management

### Update PM2 Config
Edit `ecosystem.config.js` to adjust memory limits:
```javascript
max_memory_restart: '500M', // Adjust based on your needs
NODE_OPTIONS: '--max-old-space-size=512', // Runtime memory limit
```

### PM2 Commands
```bash
# Restart with new config
pm2 restart ecosystem.config.js

# Check memory usage
pm2 list
pm2 monit

# Restart if memory is high
pm2 restart all
```

## Monitoring

### Real-time Memory Monitoring
```bash
# Watch system memory
watch -n 1 free -h

# Watch PM2 processes
pm2 monit

# Check specific process
pm2 describe notus-tech
```

### Memory Alerts
Set up alerts in PM2 when memory exceeds threshold:
```bash
pm2 install pm2-logrotate
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

## Troubleshooting

### Build Fails with "Out of Memory"
1. Use low-memory build: `npm run build:low-memory`
2. Clear cache: `rm -rf .next`
3. Close other applications
4. Increase swap space
5. Build on a machine with more RAM

### Runtime Memory Keeps Growing
1. Check for memory leaks in your code
2. Reduce PM2 memory limit
3. Enable auto-restart in PM2
4. Monitor with `pm2 monit`

### System Still Running Out of Memory
1. Check other processes: `ps aux --sort=-%mem | head -20`
2. Kill unnecessary processes
3. Increase swap space
4. Consider upgrading server RAM

## Expected Memory Usage

- **Build Process**: 1.5-2GB peak
- **Production Server**: 200-500MB
- **System Reserve**: Keep at least 1GB free

## Best Practices

1. **Always build with production mode**: `NODE_ENV=production`
2. **Clear cache before builds**: `rm -rf .next`
3. **Use PM2 for production**: Better memory management
4. **Monitor regularly**: Use `pm2 monit` or `free -h`
5. **Set memory limits**: Prevent runaway processes
6. **Use swap space**: As a safety net for low-memory systems

## Quick Reference

```bash
# Build (2GB limit)
npm run build

# Build (1.5GB limit - recommended for 7.7GB system)
npm run build:low-memory

# Start with PM2
pm2 start ecosystem.config.js

# Monitor
pm2 monit
free -h

# Restart if needed
pm2 restart notus-tech
```

