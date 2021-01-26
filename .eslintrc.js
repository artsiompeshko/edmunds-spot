module.exports = {
  env: {
    browser: true,
  },
  root: true,
  extends: ['eslint-config-preact', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {},
};
