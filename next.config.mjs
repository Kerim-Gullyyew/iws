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
    ];
  },
};

export default nextConfig;
