import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
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
