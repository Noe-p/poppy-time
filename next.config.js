const { i18n } = require('./next-i18next.config');
const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  // swcMinify: true,
});

module.exports = withPWA({
  i18n,
  staticPageGenerationTimeout: 20000,
});
