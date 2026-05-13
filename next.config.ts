import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/flow-reset-website",
  trailingSlash: true,
  devIndicators: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
