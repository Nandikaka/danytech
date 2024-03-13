/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.placeholder.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};
