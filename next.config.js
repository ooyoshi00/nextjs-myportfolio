const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  images: {
    // MEMO: https://nextjs.org/docs/messages/export-image-api
    unoptimized: true
  }
}

module.exports = withMDX(nextConfig)
