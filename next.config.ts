import type { NextConfig } from "next";
import { baseURL } from "./baseUrl";

const nextConfig: NextConfig = {
  assetPrefix: baseURL,  // Prevents 404s on /_next/ files in iframe
};

export default nextConfig;
