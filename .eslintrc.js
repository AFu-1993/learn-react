module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'google', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'require-jsdoc': [0] /* 很棒的规则，但似乎不适合ts项目 */,
    semi: [2, 'never'],
    indent: ['error', 2],
    'no-invalid-this': [0],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
