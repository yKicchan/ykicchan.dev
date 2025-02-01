/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    HOST: process.env.HOST,
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
