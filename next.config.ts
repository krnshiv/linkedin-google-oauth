import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // moved out of `experimental` in Next 15
  serverExternalPackages: ["typeorm", "pg"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      const prev = Array.isArray(config.externals)
        ? config.externals
        : config.externals
        ? [config.externals]
        : [];
      config.externals = [
        ...prev,
        "pg-native",
        "@sap/hana-client",
        "mysql",
        "mysql2",
        "oracledb",
        "tedious",
        "react-native-sqlite-storage",
      ];
    }
    return config;
  },
};

export default nextConfig;
