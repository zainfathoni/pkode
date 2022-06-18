module.exports = {
  ...require('./jest.common'),
  displayName: 'server',
  testEnvironment: 'jest-environment-node',
  testMatch: ['**/__tests__/*.server.test.(ts|tsx|js|jsx)'],
}
