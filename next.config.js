/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = require('./csp')
const isDev = process.env.NODE_ENV !== 'production'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.USE_ANALYZER,
})

const resolveApiDomain = () => {
  const apiUrl = process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL
  try {
    const url = new URL(apiUrl)
    return url.hostname
  } catch {
    return 'localhost'
  }
}

const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    SERVER_URL: process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL,
  },
  images: {
    minimumCacheTTL: 6000,
    remotePatterns: [
      // {
      //     protocol: isDev ? 'http' : 'https',
      //     hostname:  isDev ? 'localhost' : resolveApiDomain(),
      //     port: isDev ? '8000' : '',
      //     pathname: '/media/**'
      // }
      {
        protocol: 'https',
        hostname: resolveApiDomain(),
        port: '',
        pathname: '/media/**',
      },
    ],
  },
  async headers() {
    const headers = []
    headers.push({
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000; includeSubDomains; preload',
        },
        {
          key: 'Referrer-Policy',
          value: 'origin-when-cross-origin',
        },
      ],
      source: '/:path*',
    })
    // if (!process.env.NEXT_PUBLIC_IS_LIVE) {
    //     headers.push({
    //         headers: [
    //             {
    //                 key: 'X-Robots-Tag',
    //                 value: 'noindex',
    //             },
    //         ],
    //         source: '/:path*',
    //     })
    // }

    // Set the `Content-Security-Policy` header as a security measure to prevent XSS attacks
    // It works by explicitly whitelisting trusted sources of content for your website
    // This will block all inline scripts and styles except for those that are allowed
    headers.push({
      headers: [
        {
          key: 'Content-Security-Policy',
          value: ContentSecurityPolicy,
        },
      ],
      source: '/(.*)',
    })

    return headers
  },
  swcMinify: true,
}

module.exports = nextConfig
