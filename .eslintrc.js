module.exports = {
  ...require('./src/config/eslintrc'),
  overrides: [
    {
      files: ['babel.js', 'config.js', 'eslint.js', 'prettier.js'],
      rules: {
        'import/no-unresolved': 'off',
      },
    },
  ],
}
