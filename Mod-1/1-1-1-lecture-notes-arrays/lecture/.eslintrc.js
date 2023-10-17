module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'object-curly-newline': 'off',
    'no-plusplus': 'off',
    'no-promise-executor-return': 'off',
    'func-style': 2,
    'arrow-body-style': 'off',
    quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
    'consistent-return': 'off',
    'no-alert': 'off',
    'no-unused-expressions': ['error', { allowTernary: true }],
    'no-unused-vars': ['error', { argsIgnorePattern: '_', destructuredArrayIgnorePattern: '^_' }],
  },
};
