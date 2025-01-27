/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "dk7d1vh7h3.ufs.sh",
      },
    ],
  },
};

export default nextConfig;
