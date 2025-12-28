const { spawn } = require('child_process');
const os = require('os');

// Function to format bytes to MB/GB
function formatBytes(bytes) {
  if (bytes === 0) return '0 MB';
  const mb = bytes / (1024 * 1024);
  if (mb >= 1024) {
    return `${(mb / 1024).toFixed(2)} GB`;
  }
  return `${mb.toFixed(2)} MB`;
}

// Function to get memory usage
function getMemoryUsage() {
  const usage = process.memoryUsage();
  return {
    rss: formatBytes(usage.rss), // Resident Set Size - total memory allocated
    heapTotal: formatBytes(usage.heapTotal), // Total heap memory
    heapUsed: formatBytes(usage.heapUsed), // Used heap memory
    external: formatBytes(usage.external), // External memory
  };
}

// Function to get system memory info
function getSystemMemory() {
  const total = os.totalmem();
  const free = os.freemem();
  const used = total - free;
  return {
    total: formatBytes(total),
    free: formatBytes(free),
    used: formatBytes(used),
    percentage: ((used / total) * 100).toFixed(2),
  };
}

console.log('🚀 Starting build with memory monitoring...\n');
console.log('System Memory:');
const systemMem = getSystemMemory();
console.log(`  Total: ${systemMem.total}`);
console.log(`  Used: ${systemMem.used} (${systemMem.percentage}%)`);
console.log(`  Free: ${systemMem.free}\n`);

// Start the build process
const buildProcess = spawn('npm', ['run', 'build'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    NODE_OPTIONS: '--max-old-space-size=4096',
  },
});

// Monitor memory every 2 seconds
const memoryInterval = setInterval(() => {
  const mem = getMemoryUsage();
  const sysMem = getSystemMemory();
  console.log('\n📊 Memory Usage:');
  console.log(`  Process RSS: ${mem.rss}`);
  console.log(`  Heap Total: ${mem.heapTotal}`);
  console.log(`  Heap Used: ${mem.heapUsed}`);
  console.log(`  System Used: ${sysMem.used} (${sysMem.percentage}%)`);
}, 2000);

// Clean up on exit
buildProcess.on('close', (code) => {
  clearInterval(memoryInterval);
  const finalMem = getMemoryUsage();
  const finalSysMem = getSystemMemory();
  console.log('\n✅ Build completed!');
  console.log('\nFinal Memory Usage:');
  console.log(`  Process RSS: ${finalMem.rss}`);
  console.log(`  Heap Used: ${finalMem.heapUsed}`);
  console.log(`  System Used: ${finalSysMem.used} (${finalSysMem.percentage}%)`);
  process.exit(code);
});

buildProcess.on('error', (error) => {
  clearInterval(memoryInterval);
  console.error('❌ Build error:', error);
  process.exit(1);
});

