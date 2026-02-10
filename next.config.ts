import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // Set base path for GitHub Pages repository subdirectory
  basePath: isProd ? '/cyclone_suite' : '',

  // Disable server-side image optimization for static export
  images: {
    unoptimized: true,
  },

  // Acknowledge Turbopack usage (Next.js 16 default)
  turbopack: {},
};

export default nextConfig;
