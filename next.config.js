/** @type {import('next').NextConfig} */

// Bundle analyzer configuration
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,

  // Enable Turbopack (Next.js 16+)
  turbopack: {},

  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Enable compression
  compress: true,

  // Optimize power usage
  poweredByHeader: false,

  // Modularize imports for better tree-shaking
  modularizeImports: {
    'react-icons': {
      transform: 'react-icons/{{member}}',
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn2.thecatapi.com',
        pathname: '/images/**',
      },
    ],
    // Image optimization
    qualities: [75, 90],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },

  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    // Optimize bundle splitting
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            name: 'framework',
            chunks: 'all',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },

          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
        },
        maxInitialRequests: 25,
        minSize: 20000,
      };
    }

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);

import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
