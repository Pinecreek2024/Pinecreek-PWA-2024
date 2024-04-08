// Import next-transpile-modules and next-pwa
import withTM from 'next-transpile-modules';
import withPWA from 'next-pwa';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

// Use next-transpile-modules to transpile next-pwa
export default withTM(['next-pwa'])(
  withPWA({
    ...nextConfig,
    pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
    },
  })
);
