const { jest } = require('./src/config')

module.exports = {
  ...jest,
  coverageThreshold: {
    global: {
      statements: 43,
      branches: 27,
      lines: 43,
      functions: 46,
    },
  },
}
