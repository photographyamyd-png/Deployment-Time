import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  experimental: {
    // Workaround for Next 15 dev-runtime crashes on some Windows setups:
    // "segment-explorer-node.js#SegmentViewNode" missing in React Client Manifest.
    // Disable segment explorer devtool while keeping app behavior unchanged.
    devtoolSegmentExplorer: false,
  },
  /**
   * Dev-only: disable webpack persistent cache. On Windows, PackFileCacheStrategy can fail
   * mid-write (rename ENOENT) and leave `.next` referencing missing chunks (`Cannot find module './331.js'`).
   * Slightly slower cold compiles; run `npm run clean` if corruption still appears.
   */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false;
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: "/services/septic-utility-systems",
        destination: "/services/",
        permanent: true,
      },
      {
        source: "/services/drainage-hardscaping-barrie",
        destination: "/services/drainage-hardscaping/",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
    ],
  },
};

export default nextConfig;
