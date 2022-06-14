const { jest } = require('./src/config')

module.exports = {
  ...jest,
  coverageThreshold: {
    global: {
      statements: 45,
      branches: 28,
      lines: 45,
      functions: 47,
    },
  },
}
