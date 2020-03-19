module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    // plugin:vue/strongly-recommended  vue/essential
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console':'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-unused-vars":'warn',
    "no-useless-escape":'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
