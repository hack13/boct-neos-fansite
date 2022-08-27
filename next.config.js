/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "vz-f755a29c-81b.b-cdn.net"
    ],
    loader: "custom",
    path: "/",
  },
}

module.exports = nextConfig
