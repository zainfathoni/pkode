'use strict'

module.exports = {
  babel: require('./babelrc'),
  eslint: require('./eslintrc'),
  jest: require('./jest.config'),
  prettier: require('./prettierrc'),
  getRollupConfig: () => require('./rollup.config'),
}
