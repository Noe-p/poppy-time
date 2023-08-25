const path = require('path');

module.exports = {
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
    // ns: ['common'],
    // defaultNs: 'common',
  },
  localePath: path.resolve('./src/i18n'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
