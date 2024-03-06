/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "default",
    path: "/_next/image",
    domains: ["localhost"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
