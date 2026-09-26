/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables the React Compiler (React 19 / Next.js 15+)
  experimental: {
    reactCompiler: true,
  },

  // Authorizes external images from img.magnific.com for <Image />
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.magnific.com",
      },
    ],
  },
};

export default nextConfig;



