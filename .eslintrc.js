module.exports = {
  env: {
    browser: true,
    commonjs: true,
    mocha: true
  },
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-use-before-define': 'warn'
  }
}
