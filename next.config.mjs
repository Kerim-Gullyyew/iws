// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/partners/cs",
        destination: "/partners/bangladesh/cs",
        permanent: true,
      },
      {
        source: "/partners/bangladesh",
        destination: "/partners/bangladesh/cs",
        permanent: true,
      },
      {
        source: "/cambridge-a-level/:path*",
        destination: "/online-a-levels/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
