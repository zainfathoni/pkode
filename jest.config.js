const { jest } = require('./src/config')

module.exports = {
  ...jest,
  coverageThreshold: {
    global: {
      branches: 33,
      functions: 50,
      lines: 48,
      statements: 48,
    },
  },
}
