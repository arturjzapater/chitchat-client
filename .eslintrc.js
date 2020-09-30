module.exports = {
  env: {
    browser: true
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
    ecmaVersion: 2020
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
