/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export for Firebase Hosting
  output: 'export',
  images: {
    // Required for static export — optimization server doesn't exist
    // in a static build. Firebase Storage images already use unoptimized
    // at the component level; this covers local images too.
    unoptimized: true,
  },
  compiler: {
    removeConsole: true,
  },
}

module.exports = nextConfig
