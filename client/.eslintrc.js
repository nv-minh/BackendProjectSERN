module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },

  plugins: ['react'],
  rules: {},
};
