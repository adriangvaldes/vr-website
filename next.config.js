/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/**',
      },
    ],
    minimumCacheTTL: 1500000,
  },
  compiler: {
    removeConsole: false,
  },
  swcMinify: true
}

module.exports = nextConfig
