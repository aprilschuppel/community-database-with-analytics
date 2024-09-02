/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // or whatever your existing configuration is
    images: {
      domains: ['upload.wikimedia.org', 'en.wikipedia.org', 'randomuser.me', 'm.media-amazon.com', 'cf.geekdo-images.com', 'prodimage.images-bn.com'], // Add other domains if needed
    },
  }

export default nextConfig;

