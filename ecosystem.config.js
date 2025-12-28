module.exports = {
  apps: [
    {
      name: 'notus-tech',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/notus_tech_new',
      instances: 1, // Single instance to save memory
      exec_mode: 'fork',
      // Memory management
      max_memory_restart: '500M', // Restart if memory exceeds 500MB
      // Environment variables
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=512', // Limit runtime memory to 512MB
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
      // Resource limits
      min_uptime: '10s',
      max_restarts: 10,
      restart_delay: 4000,
    },
  ],
};

