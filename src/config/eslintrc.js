const { ifAnyDep, ifTypescript } = require('../utils')

module.exports = {
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    ifAnyDep('react', 'plugin:react/recommended'),
    ifAnyDep('react', 'plugin:jsx-a11y/recommended'),
    ifTypescript('plugin:@typescript-eslint/recommended'),
    ifTypescript('plugin:import/typescript'),
    ifAnyDep('@playwright/test', 'plugin:playwright/playwright-test'),
    'plugin:yml/standard',
    'plugin:yml/prettier',
    'prettier',
  ].filter(Boolean),
  ...ifTypescript({
    parser: '@typescript-eslint/parser',
  }),
  parserOptions: {
    ...ifAnyDep('react', {
      ecmaFeatures: {
        jsx: true,
      },
    }),
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    ifAnyDep('react', 'react'),
    ifAnyDep('react', 'jsx-a11y'),
    ifTypescript('@typescript-eslint'),
  ].filter(Boolean),
  rules: {
    'import/extensions': [
      'warn',
      'never',
      {
        css: 'ignorePackages',
        json: 'ignorePackages',
        md: 'ignorePackages',
      },
    ],
    'import/default': 2,
    'import/export': 2,
    'import/namespace': 2,
    'import/named': 2,
    'import/newline-after-import': 2,
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/no-extraneous-dependencies': 2,
    'import/order': 'error',
    ...ifAnyDep('react', {
      'react/react-in-jsx-scope': ['off'],
    }),
  },
  settings: {
    ...ifTypescript({
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    }),
    ...ifAnyDep('react', {
      react: {
        version: 'detect',
      },
    }),
  },
  overrides: [
    ifAnyDep('@playwright/test', {
      files: ['**/__tests__/**/*.ts?(x)'],
      rules: {
        'playwright/missing-playwright-await': 'off',
      },
    }),
    {
      files: ['*.yaml', '*.yml'],
      parser: 'yaml-eslint-parser',
    },
  ].filter(Boolean),
}
