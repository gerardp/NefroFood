import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals = [...(config.externals || []), { 'better-sqlite3': 'commonjs better-sqlite3' }];
    return config;
  },
  turbopack: {
    // Empty config to acknowledge Turbopack is being used
    // The webpack config above is kept for compatibility
  },
};

export default nextConfig;
