/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'w0.peakpx.com',
            port: '',
          },
        ],
    },
};

export default nextConfig;
