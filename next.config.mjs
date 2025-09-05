import { NextConfig } from 'next';
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['localhost']
  }
};
export default nextConfig;
