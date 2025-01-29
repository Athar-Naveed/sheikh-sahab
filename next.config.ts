import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "aceternity.com"
      },
      {
        hostname: "images.unsplash.com"
      },
    ]
  }
};

export default nextConfig;
