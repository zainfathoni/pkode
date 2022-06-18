module.exports = {
  ...require('./jest.common'),
  displayName: 'client',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testMatch: ['**/__tests__/*.client.test.(ts|tsx|js|jsx)'],
}
