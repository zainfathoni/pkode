const { jest } = require('./src/config')

module.exports = {
  ...jest,
  coverageThreshold: {
    global: {
      statements: 33,
      branches: 20,
      lines: 33,
      functions: 41,
    },
  },
}
