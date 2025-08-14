import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // lets Next bundle these server-only deps correctly for RSC / server routes
    serverComponentsExternalPackages: ["typeorm", "pg"],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Ignore optional DB drivers that TypeORM references but you don't use.
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
