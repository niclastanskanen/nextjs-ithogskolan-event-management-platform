/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s1.ticketm.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.universe.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
