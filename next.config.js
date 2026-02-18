/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  eslint: {
    // Only run ESLint on specific directories during production builds
    dirs: ['app', 'components', 'lib'],
    // Don't fail the build on ESLint warnings (Vercel will still lint separately)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't fail the build on TypeScript errors
    ignoreBuildErrors: false,
  },
};

module.exports = nextConfig;
