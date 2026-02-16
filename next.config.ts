import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.bts.co.th"},
      { protocol: "https", hostname: "www.itgenius.co.th"},
    ]
  }
};

export default nextConfig;
