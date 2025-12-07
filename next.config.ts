import type { NextConfig } from "next";
import tailwindcss from "@tailwindcss/vite";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    reactCompiler: true,
  },
  plugins: [
    tailwindcss(),
  ],
};

export default nextConfig;
