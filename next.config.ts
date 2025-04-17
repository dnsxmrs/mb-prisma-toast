import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push('@prisma/client');
      config.resolve.alias["@prisma/client"] = path.resolve(__dirname, "node_modules/@prisma/client");
    }
    return config;
  },
};

export default nextConfig;
