import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  turbopack: {
    resolveAlias: {
      '@': './src',
      '@public': './public',
    },
  },
  images: {
    qualities: [25, 50, 75, 100],
    unoptimized: true,
  },
  compiler: {
    removeConsole: {
      exclude: ['error', 'warn'],
    },
  },
  experimental: {
    optimizeCss: true,
  },

  output: "export",
};

export default nextConfig;
