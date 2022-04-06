//  https://medium.com/ne-digital/how-to-reduce-next-js-bundle-size-68f7ac70c375
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  let ANALYZE = false;
  let basePath;
  let constants;

  const webpack = (
    config,
    { buildId, dev, isServer, defaultLoaders, webpack }
  ) => {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }
    return config;
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    constants = {
      // SITE_KEY: '6LcGi2odAAAAAGvu9nWnNJG4ly76B_inmd1Dt7KZ',
      BASE_URL: 'http://localhost:3000',
    };
  } else {
    constants = {
      // SITE_KEY: '6LcGi2odAAAAAGvu9nWnNJG4ly76B_inmd1Dt7KZ',
      BASE_URL: 'https://bol-bihar.varcel.app',
    };
  }
  const nextConfig = {
    images: {
      domains: [
        'https://bol-bihar.varcel.app',
        'https://media.graphassets.com',
      ],
    },
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['hi_IN', 'en-US', 'ro-RO'],
      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'en-US',
      localeDetection: true,
      // This is a list of locale domains and the default locale they
      // should handle (these are only required when setting up domain routing)
      // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
      domains: [
        {
          domain: 'example.com',
          defaultLocale: 'en-US',
        },

        {
          domain: 'example.in',
          defaultLocale: 'hi_IN',
          // an optional http field can also be used to test
          // locale domains locally with http instead of https
          http: true,
        },
      ],
    },
  };

  return {
    config: nextConfig,
    env: constants,
    webpack,
  };
};
