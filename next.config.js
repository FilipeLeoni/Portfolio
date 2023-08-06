/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['user-images.githubusercontent.com', 'github.com', 'seeklogo.com']
    }
}

const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
  );

module.exports = withNextIntl(nextConfig);
// module.exports = nextConfig
