module.exports = {
  apps: [
    {
      name: 'notus-tech',
      // CRITICAL FIX: Use direct node execution instead of npm start
      // This eliminates extra process overhead (npm -> node -> next)
      script: './node_modules/.bin/next',
      args: 'start -p 3000',
      cwd: '/var/www/notus_tech_new',
      instances: 1, // Single instance to save memory
      exec_mode: 'fork',
      // Memory management - INCREASED to prevent restart loops
      max_memory_restart: '1.2G', // Increased from 500MB - Next.js needs more memory
      // Environment variables
      env: {
        NODE_ENV: 'production',
        // Increased memory limit to match max_memory_restart
        NODE_OPTIONS: '--max-old-space-size=1024', // Increased from 512MB to 1GB
        PORT: 3000,
      },
      // Logging
      error_file: './logs/err.log',
      out_file: './logs/out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      // Auto restart
      autorestart: true,
      watch: false,
      // Resource limits - PREVENT RESTART LOOPS
      min_uptime: '30s', // Increased from 10s - give app time to stabilize
      max_restarts: 5, // Reduced from 10 - prevent infinite restart loops
      restart_delay: 5000, // Increased from 4000ms
      // CPU throttling (if available on system)
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
    },
  ],
};





