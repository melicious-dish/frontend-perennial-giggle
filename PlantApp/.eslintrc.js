module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': 'off',
  },
};
