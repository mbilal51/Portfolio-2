const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos'],
  },
  experimental: {
    isrMemoryCacheSize: 0, // Enable caching
  },
  webpack: (config) => {
    config.experiments = { asyncWebAssembly: true, topLevelAwait: true };
    return config;
  },
};

module.exports = nextConfig;
