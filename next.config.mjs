/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en", "fi"],
    localeDetection: false,
    defaultLocale: "en",
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/fi/toinen',
        destination: '/fi/second',
        locale: false,
      },
    ]
  },
};

export default nextConfig;
