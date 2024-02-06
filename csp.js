const policies = {
  'child-src': ["'self'"],
  'media-src': [process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL, "'self'"],
  'connect-src': [
    process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL,
    "'self'",
    'https://maps.googleapis.com',
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://*.vercel.live',
    'https://vercel.live',
    'https://*.userback.io',
    '*.vercel-insights.com',
  ],
  'default-src': [
    "'self'",
    'https://maps.googleapis.com',
    'https://www.google-analytics.com',
    'https://www.googletagmanager.com',
    'https://*.vercel.live',
    'vercel.live',
  ],
  'font-src': [
    "'self'",
    'fonts.adobe.com',
    'fonts.gstatic.com',
    'data:',
    'https://*.typekit.net',
    'typekit.net',
    'https://*.hotjar.com',
    'https://*.userback.io',
  ],
  'frame-src': [
    process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL,
    "'self'",
    'https://www.google.com',
    'https://*.youtube.com',
    'https://*.vercel.live',
    'https://vercel.live',
  ],
  'form-action': [process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL, "'self'", 'https://www.google.com'],
  'img-src': [
    process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL,
    "'self'",
    'https://www.googletagmanager.com',
    'www.w3.org',
    'data:',
    'https://maps.gstatic.com',
    'https://maps.googleapis.com',
    'https://i.ytimg.com',
    ,
    'https://*.youtube.com',
    'https://*.userback.io',
  ],
  'script-src': [
    process.env.NEXT_PUBLIC_PAYLOAD_SERVER_URL,
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    'https://maps.googleapis.com',
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://stats.g.doubleclick.net',
    'https://www.google.com',
    'https://*.vercel.live',
    'https://vercel.live',
    'https://www.gstatic.com',
    'https://*.youtube.com',
    'https://*.userback.io',
  ],
  'style-src': [
    "'self'",
    "'unsafe-inline'",
    'https://fonts.googleapis.com',
    'https://*.typekit.net',
    'typekit.net',
    'https://*.userback.io',
  ],
}

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`
    }
    return ''
  })
  .join('; ')
