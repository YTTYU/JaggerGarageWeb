// import type { NextConfig } from "next";
//
// const nextConfig: NextConfig = {
//   reactStrictMode: true,
// };
//
// export default nextConfig;

import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/JaggerGarageWeb" : "",
  assetPrefix: isProd ? "/JaggerGarageWeb/" : undefined,
};

export default nextConfig;