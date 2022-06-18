module.exports = {
  ...require('./src/config/eslintrc'),
  overrides: [
    {
      files: [
        'babel.js',
        'config.js',
        'eslint.js',
        'jest.js',
        'jest.projects.js',
        'prettier.js',
      ],
      rules: {
        'import/no-unresolved': 'off',
      },
    },
    {
      files: ['jest.js', 'jest.projects.js'],
      rules: {
        'import/extensions': 'off',
      },
    },
  ],
}
