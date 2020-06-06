module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  plugins: [
    'vue',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
